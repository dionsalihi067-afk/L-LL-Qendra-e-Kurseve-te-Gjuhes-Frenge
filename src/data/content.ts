export const NAV_LINKS = [
  { href: "/about", label: "About" },
  {
    href: "/courses",
    label: "Courses",
    children: [
      { href: "/courses", label: "All Courses" },
      { href: "/delf-dalf", label: "DELF / DALF" },
      { href: "/private-lessons", label: "Private Lessons" },
      { href: "/business-french", label: "Business French" },
      { href: "/online-classes", label: "Online Classes" },
    ],
  },
  { href: "/teachers", label: "Teachers" },
  { href: "/success-stories", label: "Success" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = {
  learn: [
    { href: "/courses", label: "Courses" },
    { href: "/delf-dalf", label: "DELF / DALF" },
    { href: "/private-lessons", label: "Private Lessons" },
    { href: "/business-french", label: "Business French" },
    { href: "/online-classes", label: "Online Classes" },
  ],
  discover: [
    { href: "/about", label: "About" },
    { href: "/teachers", label: "Teachers" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
  ],
  connect: [
    { href: "/contact", label: "Contact" },
    { href: "mailto:bonjour@ll-french.center", label: "Email Us" },
  ],
} as const;

export const COURSES = [
  {
    id: "a1",
    level: "A1",
    title: "Beginner Foundations",
    description: "Build your first sentences with confidence. Pronunciation, essentials, and daily conversation.",
    duration: "8 weeks",
    hours: "48h",
    price: "€490",
    accent: "#103A71",
    category: "level",
  },
  {
    id: "a2",
    level: "A2",
    title: "Elementary Fluency",
    description: "Expand vocabulary, master past tenses, and navigate everyday situations with ease.",
    duration: "8 weeks",
    hours: "48h",
    price: "€520",
    accent: "#1a4f8f",
    category: "level",
  },
  {
    id: "b1",
    level: "B1",
    title: "Independent Speaker",
    description: "Argue, narrate, and express opinions. Ideal for travel, work, and campus life.",
    duration: "10 weeks",
    hours: "60h",
    price: "€620",
    accent: "#C8A646",
    category: "level",
  },
  {
    id: "b2",
    level: "B2",
    title: "Advanced Expression",
    description: "Nuanced discourse, professional writing, and cultural fluency for academic success.",
    duration: "10 weeks",
    hours: "60h",
    price: "€680",
    accent: "#a8872e",
    category: "level",
  },
  {
    id: "c1",
    level: "C1",
    title: "Proficient Mastery",
    description: "Near-native precision. Complex argumentation, literature, and specialized domains.",
    duration: "12 weeks",
    hours: "72h",
    price: "€780",
    accent: "#E63946",
    category: "level",
  },
  {
    id: "c2",
    level: "C2",
    title: "Near-Native Excellence",
    description: "Refine style, register, and rhetorical power for the highest academic and career goals.",
    duration: "12 weeks",
    hours: "72h",
    price: "€860",
    accent: "#091420",
    category: "level",
  },
  {
    id: "delf",
    level: "DELF",
    title: "Exam Excellence",
    description: "Targeted preparation for official Diplôme d'Études en Langue Française certification.",
    duration: "6 weeks",
    hours: "36h",
    price: "€540",
    accent: "#103A71",
    category: "exam",
  },
  {
    id: "dalf",
    level: "DALF",
    title: "Advanced Certification",
    description: "Intensive C1/C2 exam coaching with mock tests, scoring feedback, and strategy.",
    duration: "8 weeks",
    hours: "48h",
    price: "€720",
    accent: "#E63946",
    category: "exam",
  },
  {
    id: "business",
    level: "Business",
    title: "Corporate French",
    description: "Meetings, negotiations, presentations, and email etiquette for international careers.",
    duration: "Flexible",
    hours: "Custom",
    price: "From €45/h",
    accent: "#C8A646",
    category: "special",
  },
  {
    id: "private",
    level: "Private",
    title: "1:1 Mentorship",
    description: "Fully personalized curriculum paced to your goals, schedule, and learning style.",
    duration: "Flexible",
    hours: "Custom",
    price: "From €55/h",
    accent: "#103A71",
    category: "special",
  },
  {
    id: "kids",
    level: "Kids",
    title: "Young Explorers",
    description: "Playful immersion for ages 7–14. Songs, stories, and confidence from day one.",
    duration: "10 weeks",
    hours: "40h",
    price: "€420",
    accent: "#21C55D",
    category: "special",
  },
  {
    id: "corporate",
    level: "Corporate",
    title: "Team Training",
    description: "Tailored programs for companies expanding into francophone markets.",
    duration: "On demand",
    hours: "Custom",
    price: "Quote",
    accent: "#091420",
    category: "special",
  },
] as const;

export const REASONS = [
  {
    title: "Certified Teachers",
    description: "Native and near-native instructors with university pedagogy credentials and DELF examiner training.",
    icon: "Award",
  },
  {
    title: "Modern Methodology",
    description: "Communicative, task-based learning blended with digital tools and cultural immersion.",
    icon: "Sparkles",
  },
  {
    title: "Official Certificates",
    description: "Preparation pathways aligned with CEFR and France Éducation international standards.",
    icon: "BadgeCheck",
  },
  {
    title: "Flexible Schedules",
    description: "Morning, evening, and weekend cohorts designed around student and professional life.",
    icon: "Calendar",
  },
  {
    title: "Online Learning",
    description: "Studio-quality live sessions with interactive whiteboards, breakout rooms, and recordings.",
    icon: "Monitor",
  },
  {
    title: "Small Groups",
    description: "Maximum eight learners per class so every voice is heard and coached.",
    icon: "Users",
  },
  {
    title: "Interactive Practice",
    description: "Role-play, debates, and real-world scenarios that turn knowledge into instinct.",
    icon: "MessageCircle",
  },
  {
    title: "Speaking Focused",
    description: "Pronunciation labs and conversation ateliers that prioritize oral confidence.",
    icon: "Mic",
  },
] as const;

export const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Discover Your Level",
    description: "A complimentary placement conversation maps your CEFR starting point and ambitions.",
  },
  {
    step: "02",
    title: "Craft Your Path",
    description: "We design a curriculum—group, private, or hybrid—aligned to exams, career, or relocation.",
  },
  {
    step: "03",
    title: "Immerse & Practice",
    description: "Live lessons, cultural ateliers, and speaking labs build fluency through deliberate practice.",
  },
  {
    step: "04",
    title: "Measure Progress",
    description: "Monthly assessments and teacher feedback keep momentum visible and motivating.",
  },
  {
    step: "05",
    title: "Certify & Celebrate",
    description: "Sit DELF/DALF with confidence—or step into your new francophone chapter ready.",
  },
] as const;

export const STATS = [
  { value: 2400, suffix: "+", label: "Students Taught" },
  { value: 98, suffix: "%", label: "Exam Success Rate" },
  { value: 18, suffix: "", label: "Expert Teachers" },
  { value: 12, suffix: "+", label: "Years of Excellence" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Amélie Rousseau",
    role: "Université Paris-Saclay",
    quote:
      "L&LL transformed my B1 into a confident B2 in one semester. The speaking ateliers felt like Paris itself—warm, precise, and inspiring.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Product Manager, Stripe",
    quote:
      "Business French here is surgical. I negotiate with Lyon clients without hesitation. Every session felt premium and purposeful.",
    rating: 5,
  },
  {
    name: "Sofia Alvarez",
    role: "Immigration Applicant",
    quote:
      "My DELF B2 score opened the door to my carte de séjour. The mock exams and examiner feedback were invaluable.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "Parent of two",
    quote:
      "Our children look forward to every Saturday. Playful, structured, and beautifully taught—exactly what we hoped for.",
    rating: 5,
  },
] as const;

export const TEACHERS = [
  {
    id: "claire",
    name: "Claire Dubois",
    title: "Academic Director",
    languages: ["French", "English", "Italian"],
    specialty: "DELF/DALF · Literature",
    bio: "Former examiner for France Éducation international. Fifteen years refining oral expression and literary analysis.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    id: "antoine",
    name: "Antoine Moreau",
    title: "Business French Lead",
    languages: ["French", "English", "German"],
    specialty: "Corporate · Negotiation",
    bio: "Ex-ESG consultant turned educator. Helps professionals sound decisive in boardrooms across Europe.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
  {
    id: "lea",
    name: "Léa Fontaine",
    title: "Conversation Atelier",
    languages: ["French", "English", "Spanish"],
    specialty: "Pronunciation · Immersion",
    bio: "Conservatoire-trained voice specialist. Turns hesitant speakers into confident conversationalists.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
  },
  {
    id: "nathan",
    name: "Nathan Berger",
    title: "Youth Programs",
    languages: ["French", "English"],
    specialty: "Kids · Teens · A1–B1",
    bio: "Montessori-inspired pedagogy with gamified grammar. Makes French feel like play, not homework.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
  },
] as const;

export const MILESTONES = [
  {
    year: "2014",
    title: "Founded in Paris",
    description: "L&LL opens its first atelier near the Louvre with twelve students and one vision: elegant French education.",
  },
  {
    year: "2017",
    title: "DELF Center Status",
    description: "Recognized as an official preparation partner. Exam success rates climb above 95%.",
  },
  {
    year: "2020",
    title: "Global Classroom",
    description: "Studio-quality online programs launch, connecting learners from Tokyo to Toronto.",
  },
  {
    year: "2023",
    title: "Corporate Academy",
    description: "Enterprise partnerships expand across finance, luxury, and tech francophone markets.",
  },
  {
    year: "2026",
    title: "Next Chapter",
    description: "A renewed campus experience—immersive, cinematic, and relentlessly human.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How do I know which level to start at?",
    answer:
      "Begin with our complimentary placement conversation. We assess listening, speaking, and goals against the CEFR framework, then recommend the ideal pathway—group, private, or hybrid.",
  },
  {
    question: "Are your certificates officially recognized?",
    answer:
      "We prepare you for DELF and DALF, the official diplomas issued by France Éducation international. These are recognized worldwide for universities, immigration, and careers.",
  },
  {
    question: "Can I switch between online and in-person?",
    answer:
      "Yes. Many learners blend formats. Speak with your advisor to design a hybrid schedule that preserves continuity with your teacher and cohort.",
  },
  {
    question: "What is the maximum class size?",
    answer:
      "Group classes are capped at eight students. Private and semi-private options are available for accelerated or specialized goals.",
  },
  {
    question: "Do you offer corporate packages?",
    answer:
      "Absolutely. We design team programs for meetings, negotiations, presentations, and industry vocabulary—delivered on-site or remotely.",
  },
  {
    question: "How soon can I begin?",
    answer:
      "New cohorts start every four to six weeks. Private lessons can begin within days of your placement conversation.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "delf-b2-strategy",
    title: "The Quiet Strategy Behind a DELF B2 Pass",
    excerpt: "How deliberate speaking practice and examiner-aligned mock exams reshape outcomes in twelve weeks.",
    category: "Exams",
    date: "2026-06-12",
    readTime: "7 min",
  },
  {
    slug: "business-french-boardroom",
    title: "Sounding Decisive in a Francophone Boardroom",
    excerpt: "Register, rhythm, and rhetoric—three levers that elevate professional French beyond vocabulary lists.",
    category: "Career",
    date: "2026-05-28",
    readTime: "5 min",
  },
  {
    slug: "moving-to-france-language",
    title: "Moving to France: The Language Timeline That Works",
    excerpt: "A realistic roadmap from arrival anxiety to confident daily life—housing, préfecture, and community.",
    category: "Lifestyle",
    date: "2026-04-19",
    readTime: "8 min",
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
