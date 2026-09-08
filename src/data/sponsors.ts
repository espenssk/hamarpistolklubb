// Shared sponsor data: used by the global footer strip (Layout.astro) and
// the homepage's more prominent sponsor sidebar (index.astro).
import landroLogo from "../assets/sponsors/landro.png";
import grasrotLogo from "../assets/sponsors/grasrot.jpg";
import fluggerLogo from "../assets/sponsors/flugger.jpg";

export const sponsors = [
  { name: "Magne Landrø AS", href: "https://www.landro.no/", image: landroLogo },
  {
    name: "Grasrotandelen",
    href: "https://www.norsk-tipping.no/grasrotandelen/din-mottaker/919817518",
    image: grasrotLogo,
  },
  {
    name: "Flügger farve",
    href: "https://www.flugger.no/fluggerandelen/velkommen-til-andelen",
    image: fluggerLogo,
  },
];
