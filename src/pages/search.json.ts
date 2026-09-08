import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

// Strips the most common Markdown syntax so search results show plain,
// readable text instead of raw `**bold**`, `[link](url)`, `#` headings etc.
function stripMarkdown(markdown: string) {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Static pages that aren't part of a content collection. Keep the text in
// sync with each page's main heading/lead so search results stay relevant.
const staticPages = [
  {
    url: "/",
    title: "Hjem",
    text: "Hamar Pistolklubb bane terminliste medlemskap sikkerhetskurs Ankerskogen",
  },
  {
    url: "/skytebane",
    title: "Skytebane",
    text: "Ankerskogen Hamar innendørsbane 10 standplasser pappskiver elektroniske skiver Megalink luftpistol 22LR 38 Spesial treningstider tirsdag lørdag",
  },
  {
    url: "/terminliste",
    title: "Terminliste",
    text: "terminliste klubbarrangementer NSF Norges Skytterforbund pistolstevner kalender",
  },
  {
    url: "/sikkerhetskurs",
    title: "Sikkerhetskurs",
    text: "sikkerhetskurs nye medlemmer våpenkurs kurs medlemskap",
  },
  {
    url: "/vapensoknad",
    title: "Våpensøknad",
    text: "våpensøknad søke om våpen uttalelse fra klubben medlemskap NSF politiet",
  },
  {
    url: "/kontakt",
    title: "Kontakt",
    text: "kontakt medlemskap banetider sikkerhetskurs e-post",
  },
  {
    url: "/om-klubben",
    title: "Om klubben",
    text: "om klubben historie stiftet 2002 styret leder nestleder styremedlem",
  },
  {
    url: "/nyheter",
    title: "Nyheter",
    text: "nyheter arkiv nytt fra klubben",
  },
];

export const GET: APIRoute = async () => {
  const posts = await getCollection("nyheter");

  const newsEntries = posts.map((post) => ({
    url: `/nyheter/${post.id}`,
    title: post.data.title,
    text: [post.data.summary, stripMarkdown(post.body ?? "")].filter(Boolean).join(" "),
  }));

  const index = [...staticPages, ...newsEntries];

  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
};
