# Redigeringsguide for hjemmesiden (for ikke-teknisk vedlikehold)

Denne guiden er for deg som skal legge til nyheter, arrangementer eller
gjøre mindre tekstendringer på nettsiden - uten å måtte kunne
programmering.

Alt innhold på siden ligger i vanlige tekstfiler i dette GitHub-repoet.
Når en endring lagres ("committes") og havner på `master`-grenen, bygger
og publiserer siden seg selv automatisk til hamarpistolklubb.no i løpet
av ett-to minutter. Du trenger ikke FTP, WordPress eller noe teknisk
verktøy.

## Hvordan gjøre en endring, kort fortalt

1. Gå til repoet på github.com (i nettleseren - ingen installasjon nødvendig).
2. Naviger til riktig mappe (se under).
3. Åpne filen du vil endre, eller trykk "Add file → Create new file" for
   å legge til noe nytt.
4. Skriv/endre innholdet i tekstboksen.
5. Nederst: skriv en kort beskrivelse av hva du endret, og trykk
   **"Commit changes"**.
6. Ferdig. Siden oppdaterer seg selv automatisk.

Du kan også trykke blyant-ikonet på en eksisterende fil for å redigere
den direkte i nettleseren.

## Legge til en nyhetsartikkel

Mappe: `src/content/nyheter/`

Opprett en ny fil, f.eks. `min-nye-artikkel.md` (bruk små bokstaver,
bindestrek i stedet for mellomrom, norske bokstaver æøå er greit å
unngå i selve filnavnet).

Innholdet skal se slik ut:

```markdown
---
title: "Tittelen på nyheten"
date: 2026-03-15
summary: "Én-to setninger som oppsummerer saken (valgfritt)."
category: "Info"
---

Selve teksten i nyheten skrives her, som vanlig avsnitt.

Du kan lage lenker slik: [lenketekst](https://example.com)
```

- `title` og `date` er påkrevd. `date` skrives som ÅÅÅÅ-MM-DD.
- `summary` og `category` er valgfrie. `category` vises som en liten
  merkelapp på forsiden - bruk gjerne en av de som allerede finnes:
  `Info`, `Årsmøte`, `Vaktliste`, `Medlemsfordel`, `Stevne`, `Skytebane`.
  Hvis du bruker en ny kategori, vises den fortsatt fint - den får bare
  en generisk standardfarge/ikon.
- Har du ikke noe bilde til saken, er det helt greit - den får da et
  automatisk kategori-ikon i stedet. Du trenger ikke gjøre noe ekstra.

### Å legge ved et bilde (valgfritt)

Legg bildefilen i `src/assets/images/` (eller en undermappe), og legg
til en `image`-linje i toppen av filen:

```yaml
image: "../../assets/images/mitt-bilde.jpg"
```

## Legge til et arrangement i terminlisten

Mappe: `src/content/terminliste/`

Samme fremgangsmåte som over - opprett en ny `.md`-fil:

```markdown
---
title: "Klubbkveld"
date: 2026-09-20
location: "Ankerskogen skytebane"
---
```

Dette dukker automatisk opp i "Kommende arrangementer" på forsiden
(de 5 nærmeste fremtidige arrangementene vises), og i den fulle
terminlisten. Ingen `location` er nødvendig hvis det ikke er relevant.

## Mindre tekstendringer på faste sider

Sider som "Om klubben", "Skytebane" osv. ligger i `src/pages/` som
`.astro`-filer. Selve brødteksten kan som regel endres direkte inni
filen uten å røre resten av oppsettet - se etter vanlig norsk tekst
mellom HTML-lignende tagger, og la tagger/kode stå urørt.

Er du usikker på om en endring er trygg å gjøre selv - spør en av de
mer tekniske medlemmene, eller lag endringen som et forslag ("pull
request") i stedet for å committe rett på `master`, så kan noen se over
den først.

## Sikkerhet: bruk gjerne "pull request" i stedet for å committe rett på master

Dette repoet er privat og på gratisplanen, så GitHub kan ikke håndheve
obligatorisk godkjenning før noe publiseres (det krever et betalt abonnement
eller et offentlig repo) - alt som committes til `master` bygges og
publiseres automatisk med det samme, uten noen tekniske sperrer.

Som en frivillig, men anbefalt vane: lag endringen som et "pull request"
(via "Create new file"/blyant-ikonet → velg "Create a new branch..." når du
committer, i stedet for "Commit directly to the master branch") og be en
annen medlem se raskt over den før du trykker "Merge". Dette koster nesten
ingenting ekstra og fanger opp både feil og ting som ikke burde vært limt
inn i en artikkel (f.eks. HTML/skript kopiert fra en annen nettside).

## Oppsummert

- Nyheter og arrangementer = enkle tekstfiler med noen faste felter.
- Ingen bygg-steg, ingen FTP - GitHub gjør resten automatisk.
- Se `DEPLOYMENT.md` for den tekniske oppsettsbiten (kun relevant én
  gang, for den som administrerer GitHub-repoet og domenet).
