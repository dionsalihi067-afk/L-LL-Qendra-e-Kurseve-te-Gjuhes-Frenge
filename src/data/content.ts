export const NAV_LINKS = [
  { href: "/rreth-nesh", label: "Rreth Nesh" },
  {
    href: "/kurset",
    label: "Kurset",
    children: [
      { href: "/kurset", label: "Të Gjitha Kurset" },
      { href: "/delf", label: "Përgatitje DELF" },
      { href: "/online", label: "Kurse Online" },
    ],
  },
  { href: "/faq", label: "FAQ" },
  { href: "/regjistrohu", label: "Regjistrohu" },
] as const;

export const FOOTER_LINKS = {
  kurset: [
    { href: "/kurset", label: "Të Gjitha Kurset" },
    { href: "/delf", label: "Përgatitje DELF" },
    { href: "/online", label: "Kurse Online" },
  ],
  info: [
    { href: "/rreth-nesh", label: "Rreth Nesh" },
    { href: "/faq", label: "Pyetje të Shpeshta" },
    { href: "/regjistrohu", label: "Regjistrohu" },
  ],
} as const;

export const COURSES = [
  {
    id: "a1",
    level: "A1",
    title: "Fillestar",
    description:
      "Ndërtoni fjalitë e para me besim. Shqiptimi, bazat gramatikore dhe biseda e përditshme.",
    accent: "#103A71",
  },
  {
    id: "a2",
    level: "A2",
    title: "Elementar",
    description:
      "Zgjeroni fjalorin, zotëroni kohët e shkuara dhe komunikoni me lehtësi në situata të përditshme.",
    accent: "#1a4f8f",
  },
  {
    id: "b1",
    level: "B1",
    title: "I Pavarur",
    description:
      "Argumentoni, tregoni dhe shprehni mendime. Ideal për udhëtime, punë dhe jetën akademike.",
    accent: "#C8A646",
  },
  {
    id: "b2",
    level: "B2",
    title: "I Avancuar",
    description:
      "Diskutim i nuancuar, shkrim profesional dhe rrjedhshmëri kulturore për sukses akademik.",
    accent: "#a8872e",
  },
] as const;

export const REASONS = [
  {
    title: "Metodologji Moderne",
    description:
      "Mësim komunikativ dhe i bazuar në detyra, i kombinuar me mjete digjitale bashkëkohore.",
    icon: "Sparkles",
  },
  {
    title: "Certifikata Zyrtare",
    description:
      "Përgatitje e strukturuar sipas Kornizës së Përbashkët Evropiane të Referencës (CEFR) për nivelet A1–B2.",
    icon: "BadgeCheck",
  },
  {
    title: "Orare Fleksibël",
    description:
      "Orare të përshtatshme për studentë dhe profesionistë, duke përfshirë mundësi online.",
    icon: "Calendar",
  },
  {
    title: "Mësim Online",
    description:
      "Kurse live online me cilësi të lartë, që mundësojnë mësimin nga kudo.",
    icon: "Monitor",
  },
  {
    title: "Praktikë Interaktive",
    description:
      "Lojëra rolesh, debate dhe skenarë të jetës reale që e kthejnë dijeninë në aftësi.",
    icon: "MessageCircle",
  },
  {
    title: "Fokus në të Folur",
    description:
      "Praktikë e vazhdueshme e shqiptimit dhe bisedës për besim në komunikim oral.",
    icon: "Mic",
  },
] as const;

export const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Zbuloni Nivelin Tuaj",
    description:
      "Na kontaktoni përmes WhatsApp për një bisedë orientuese që identifikon nivelin tuaj sipas CEFR.",
  },
  {
    step: "02",
    title: "Zgjidhni Kursin",
    description:
      "Zgjidhni kursin e duhur — nga A1 deri në B2, përgatitje DELF, ose kurse online.",
  },
  {
    step: "03",
    title: "Mësoni dhe Praktikoni",
    description:
      "Mësime interaktive me fokus në komunikim, gramatikë dhe kulturë frënge.",
  },
  {
    step: "04",
    title: "Përparoni me Besim",
    description:
      "Ndiqni progresin tuaj dhe kaloni në nivelin e radhës me përkrahje të vazhdueshme.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Si ta di se në cilin nivel duhet të filloj?",
    answer:
      "Na kontaktoni përmes WhatsApp dhe do të bëjmë një bisedë orientuese për të vlerësuar nivelin tuaj sipas Kornizës së Përbashkët Evropiane (CEFR).",
  },
  {
    question: "A ofron L&LL përgatitje për DELF?",
    answer:
      "Po, ofrojmë kurse të dedikuara për përgatitjen e provimit DELF. Kurset përfshijnë praktikë të strukturuar për të katër aftësitë gjuhësore.",
  },
  {
    question: "A mund të mësoj online?",
    answer:
      "Po, ofrojmë kurse live online me cilësi të njëjtë si ato në klasë. Mundeni të mësoni nga kudo që keni lidhje interneti.",
  },
  {
    question: "Cilat nivele i ofroni?",
    answer:
      "Aktualisht ofrojmë kurse nga niveli A1 (fillestar) deri në B2 (i avancuar), si dhe përgatitje për provimin DELF.",
  },
  {
    question: "Si mund të regjistrohem?",
    answer:
      "Regjistrimi bëhet përmes WhatsApp. Na shkruani në numrin +383 48 631 432 dhe do t'ju udhëzojmë për hapat e radhës.",
  },
  {
    question: "Sa kushton kursi?",
    answer:
      "Për informacione mbi çmimet, na kontaktoni drejtpërdrejt përmes WhatsApp në numrin +383 48 631 432.",
  },
] as const;

export const FLOATING_WORDS = [
  "Bonjour",
  "Merci",
  "Bienvenue",
  "Parlez-vous français?",
  "Enchanté",
  "À bientôt",
  "Liberté",
  "Élégance",
] as const;
