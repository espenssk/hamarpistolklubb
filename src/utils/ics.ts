// Shared helper for building a downloadable .ics (calendar) file as a data
// URI, used both on the full terminliste page and the homepage's upcoming-
// events widget.
interface ICSEvent {
  id: string;
  data: {
    title: string;
    date: Date;
    location?: string;
  };
}

function toICSDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function buildICS(event: ICSEvent) {
  const start = toICSDate(event.data.date);
  const uid = `${event.id}@hamarpistolklubb.no`;
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Hamar Pistolklubb//Terminliste//NO",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${start}`,
    `SUMMARY:${event.data.title}`,
    event.data.location ? `LOCATION:${event.data.location}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean);
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}
