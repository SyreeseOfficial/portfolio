import { Project, PhilosophyItem, GearItem, Book, RoadmapItem, InspirationItem, BetItem, ChangelogItem, TechStackCategory, DeskSetupCategory, NowModule, KilledProject, BucketListItem, HealthStats } from './types';
import { TrendingUp, Gamepad2, Heart, Landmark, Target, Activity, BookOpen, Box, Flame, Settings } from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: 'orthostar',
    title: 'OrthoStar',
    year: '2025',
    tag: 'SaaS',
    summary: 'Micro SaaS that improves Google ratings for Ortho practices.',
    coverUrl: '/projects/orthostar/cover.jpg',
    caseStudy: {
      problem: 'Negative reviews follow orthodontic practices everywhere a prospective patient looks. One bad rating on Google can cost a practice tens of thousands in lost patient revenue before a single appointment is booked.',
      solution: 'I built a reputation management platform that intercepts dissatisfied patients before they reach public review sites, routes happy patients toward five-star Google reviews, and converts patient testimonial clips into paid ad creative — all from a single dashboard.',
      result: 'Practices on OrthoStar average a 32% increase in five-star ratings, driving roughly 7 net-new patients per month through improved search visibility. At a per-patient lifetime value up to $15,000, that\'s a material revenue shift from a tool that runs in the background.',
      liveLink: 'https://orthostar.org/',
      images: [
        '/projects/orthostar/case-study-1.jpg',
        '/projects/orthostar/case-study-2.jpg'
      ]
    }
  },
  {
    id: 'dailydash',
    title: 'DailyDash',
    year: '2026',
    tag: 'CLI / Tools',
    summary: 'A terminal dashboard that keeps your tasks, hydration, and focus timer in one place while you work.',
    coverUrl: '/projects/dailydash/cover.png',
    caseStudy: {
      problem: 'Knowledge workers lose focus every time they leave the terminal — checking the time pulls up a browser tab, checking the weather opens a new distraction, and hydration goals get buried under deadlines.',
      solution: 'DailyDash is a lightweight terminal overlay that keeps everything you need within arm\'s reach: water intake tracking, a live task list, and a Pomodoro timer — no browser required, no distractions introduced.',
      result: 'Users stay in flow longer, hit their hydration targets more consistently, and finish their work without ever leaving the terminal.',
      liveLink: 'https://github.com/SyreeseOfficial/DailyDash',
      ctaLabel: 'View On Github',
      images: [
        '/projects/dailydash/case-study-1.png',
        '/projects/dailydash/case-study-2.png'
      ]
    }
  },
  {
    id: 'vibestylist',
    title: 'VibeStylist',
    year: '2026',
    tag: 'SaaS',
    summary: 'An AI stylist that helps you plan outfits, track your wardrobe, and make fashion fun.',
    coverUrl: '/projects/vibestylist/cover.png',
    caseStudy: {
      problem: 'Most people own more clothes than they actually wear. Decision fatigue hits every morning, impulse purchases pile up, and the wardrobe grows without the wardrobe working — wasted money and a daily source of low-grade stress.',
      solution: 'VibeStylist acts as a personalized AI stylist: it learns your preferences, surfaces outfits from what you already own, and gamifies the process with ratings, stats, and weekly planning tools. The goal is a wardrobe you actually use, not one you scroll past.',
      result: 'Users report less morning decision fatigue, more intentional purchasing habits, and a closet that earns its space. Getting dressed becomes a solved problem rather than a daily negotiation.',
      liveLink: 'https://vibestylist.netlify.app/',
      ctaLabel: 'View Live App',
      images: [
        '/projects/vibestylist/case-study-1.png',
        '/projects/vibestylist/case-study-2.png'
      ]
    }
  },
  {
    id: 'vibestt',
    title: 'VibeSTT',
    year: '2026',
    tag: 'CLI / Tools',
    summary: 'A minimalist, high-performance speech-to-text utility for the Omarchy Linux distribution.',
    coverUrl: '/projects/vibestt/cover.jpg',
    caseStudy: {
      problem: 'Linux speech-to-text tools are either resource-hungry, painful to configure, or buried under features no one asked for — the overhead defeats the purpose of a utility that\'s supposed to get out of your way.',
      solution: 'VibeSTT is a purpose-built speech-to-text utility for the Omarchy Linux distribution: minimal binary footprint, fast transcription powered by Whisper under the hood, and zero configuration required to get started.',
      result: 'Users can dictate notes, capture ideas, and compose drafts without breaking their workflow — a faster input mode for anyone already living in the terminal.',
      liveLink: 'https://github.com/SyreeseOfficial/VibeSTT',
      ctaLabel: 'View On Github',
      images: [
        '/projects/vibestt/case-study-1.jpg',
        '/projects/vibestt/case-study-2.jpg'
      ]
    }
  },
  {
    id: 'focusnoisecli',
    title: 'FocusNoiseCLI',
    year: '2026',
    tag: 'CLI / Tools',
    summary: 'A CLI tool that plays calming background noise to help you focus while you work.',
    coverUrl: '/projects/focusnoisecli/demo.png',
    caseStudy: {
      problem: 'Every time you leave the terminal for background audio, you\'re one open tab away from a distraction spiral. Streaming sites require a browser, browsers invite context switching, and context switching is where deep work goes to die.',
      solution: 'FocusNoiseCLI plays curated ambient soundscapes — rain, coffee shops, white noise — directly in your terminal. It blends base tracks with randomized audio events for natural variety, and wraps a built-in session timer around the whole thing so you can track deep work hours without installing anything else.',
      result: 'Developers can stay in flow without context switching, track focused hours automatically, and run the tool on any platform where Python runs. It removes one more reason to open a browser.',
      liveLink: 'https://github.com/SyreeseOfficial/FocusNoiseCLI',
      ctaLabel: 'View On Github',
      images: [
        '/projects/focusnoisecli/menu.png',
        '/projects/focusnoisecli/settings.png'
      ]
    }
  },
  {
    id: 'muscle-method',
    title: 'Muscle Method',
    year: '2026',
    tag: 'Community',
    summary: 'A private Skool community tailored for natural muscle building.',
    coverUrl: '/projects/muscle-method/cover.png',
    caseStudy: {
      problem: 'Conventional muscle-building advice is calibrated for enhanced athletes or people with unlimited gym time — it consistently fails the naturally skinny guy working two sessions a week. Generic programming produces generic results for this demographic.',
      solution: 'I built a specialized Skool community anchored around a 4-hour video course, 100+ written guides, and a 270-prompt AI library tuned to natural training protocols. Members layer in 1:1 coaching access and weekly live sessions to close the gap between content and real-world application.',
      result: 'Scaled to 130+ active members with strong retention and organic engagement. Members share progress, hold each other accountable, and report visible physical transformation within the first 8–12 weeks.',
      liveLink: 'https://www.skool.com/muscle-method-5291',
      images: [
        '/projects/muscle-method/case-study-1.png',
        '/projects/muscle-method/case-study-2.png'
      ]
    }
  },
  {
    id: 'hypertyper',
    title: 'HyperTyper',
    year: '2026',
    tag: 'CLI / Tools',
    summary: 'A fast typing game made with Python that runs right in your command line window.',
    coverUrl: '/projects/hypertyper/title.png',
    caseStudy: {
      problem: 'Coders need mental resets between deep work sessions, but stepping away from the terminal to play a game means switching context entirely — the very thing a break is supposed to undo.',
      solution: 'HyperTyper is a terminal-native typing game with multiple challenge modes and a persistent high-score system — a complete break-time activity that never requires leaving the command line.',
      result: 'Developers can decompress, sharpen their typing speed, and return to work without switching windows or losing their mental context.',
      liveLink: 'https://github.com/SyreeseOfficial/HyperTyper',
      ctaLabel: 'View on Github',
      images: [
        '/projects/hypertyper/title.png',
        '/projects/hypertyper/highscores.png'
      ]
    }
  },
  {
    id: 'konafit',
    title: 'KonaFit',
    year: '2026',
    tag: 'Mobile',
    summary: 'A custom Android workout app built around how I actually train, with all the features I wanted from the top apps and none of the paywalls.',
    caseStudy: {
      problem: 'The best fitness apps lock their most useful features behind paywalls, then fragment the rest across multiple subscriptions. Getting a genuinely complete workout experience costs more per month than a gym membership.',
      solution: 'I built a custom Android workout app around exactly how I train — pulling the strongest features from every app I\'d paid for, stripping out everything I didn\'t use, and consolidating it into one tool I actually want to open at the gym. Free, permanently.',
      result: 'An app I open every single session — not because I have to, but because it fits how I actually train. Everything I need, nothing I don\'t, and zero monthly cost.',
      isPrivate: true,
    }
  },
  {
    id: 'momentum',
    title: 'Momentum',
    year: '2026',
    tag: 'Mobile',
    summary: 'A minimal Android habit tracker that cuts the noise and just helps you stay on track.',
    coverUrl: '/projects/momentum/cover.jpg',
    caseStudy: {
      problem: 'Modern habit apps mistake gamification for motivation. By the time you\'ve navigated the dashboard, acknowledged the streak, and dismissed the badge notification, you\'ve spent more energy on the app than on the habit itself.',
      solution: 'Momentum is a stripped-back Android habit tracker: no streaks, no badges, no gamification layer. Just a clean list of habits and a way to check them off. It opens fast, does its job, and gets out of the way.',
      result: 'A tracker I actually check in with daily — not because it guilt-trips me with streaks, but because it\'s frictionless enough to not become a chore in itself.',
      isPrivate: true,
      images: [
        '/projects/momentum/case-study-1.jpg',
        '/projects/momentum/case-study-2.jpg'
      ]
    }
  },
  {
    id: 'routecommand',
    title: 'RouteCommand',
    year: '2026',
    tag: 'SaaS',
    summary: 'A tool dashboard I built for my job to speed up daily tasks and help the business make more money.',
    coverUrl: '/projects/routecommand/cover.jpg',
    caseStudy: {
      problem: 'Manual workflows at scale leak time and money. Expense tracking done ad hoc meant missed deductions; refund requests handled by memory meant delayed cash recovery; donation logging done piecemeal meant write-offs captured at year-end instead of at the time of giving.',
      solution: 'I built a purpose-built internal dashboard with three focused tools: a receipt and expense tracker to maximize tax deductions, a credit request workflow to accelerate refund processing, and a donation logger to ensure every write-off gets captured when it happens.',
      result: 'The business captures more deductions, recovers credits faster, and replaced a handful of manual processes with a single tool. Tasks that used to take minutes now take seconds.',
      liveLink: 'https://routecommand.netlify.app',
      ctaLabel: 'View Live App',
      images: [
        '/projects/routecommand/case-study-1.jpg',
        '/projects/routecommand/case-study-2.jpg'
      ]
    }
  },
  {
    id: 'chrome-extensions',
    title: 'Chrome Extensions',
    year: '2025',
    tag: 'Community',
    summary: 'A collection of useful Chrome extensions I built for the Skool platform.',
    coverUrl: '/projects/chrome-extensions/cover.jpg',
    caseStudy: {
      problem: 'Skool launched fast and the community embraced it, but the platform\'s native toolset was thin — operators running paid communities had no way to organize, automate, or communicate at the level the platform\'s pricing implied.',
      solution: 'I built four Chrome extensions that fill the gaps: Skool Utilities adds missing workflow features, Skool Todo List gives members a structured task system, Skool Templates removes repetitive copy-paste work, and Skooler AI layers in AI-assisted content generation directly inside the platform.',
      result: 'Community operators using the extensions run faster, communicate more consistently, and convert members more effectively — less time on platform busywork, more on the content and relationships that drive revenue.',
      liveLink: 'https://chromewebstore.google.com/detail/skool-utilities/pgoiddblmhofnagiignbokiehfepijco?hl=en',
      links: [
        { label: 'Skool Utilities', url: 'https://chromewebstore.google.com/detail/skool-utilities/pgoiddblmhofnagiignbokiehfepijco?hl=en' },
        { label: 'Skool Todo List', url: 'https://chromewebstore.google.com/detail/skool-todo-list/neenmpbhpkehfehcbgnpcjpgclhennoj' },
        { label: 'Skool Templates', url: 'https://chromewebstore.google.com/detail/skool-templates/lbgcmkkendepgfajiljhegifclfhijde' }
      ],
      images: [
        '/projects/chrome-extensions/case-study-1.jpg',
        '/projects/chrome-extensions/case-study-2.jpg'
      ]
    }
  },
  {
    id: 'pushrise',
    title: 'PushRise',
    year: '2026',
    tag: 'Mobile',
    summary: 'A mobile alarm app that doesn\'t turn off until you do pushups. The only alarm that guarantees you actually get up.',
    caseStudy: {
      problem: 'Most people snooze their alarms because snoozing is easy. Motivation isn\'t enough when you\'re half-asleep — willpower fails before the alarm clock does.',
      solution: 'PushRise pairs your morning alarm with a camera-verified pushup requirement. The alarm doesn\'t stop until the reps are counted. No pushups, no silence.',
      result: 'Still in development. The concept is straightforward: convert an involuntary behavior (waking up) into an enforced physical action (moving your body) before conscious resistance kicks in.',
    }
  },
];

export const PHILOSOPHY: PhilosophyItem[] = [
  {
    id: '1',
    number: '01',
    title: "I'm In Charge",
    description: "I choose my mindset & create my own reality."
  },
  {
    id: '2',
    number: '02',
    title: "Work Wins",
    description: "I can do anything if I just work at it long enough."
  },
  {
    id: '3',
    number: '03',
    title: "Keep It Simple",
    description: "Less is always more. Complexity is a distraction."
  }
];

export const BOOKSHELF: Book[] = [
  {
    title: "10 Pillars of Wealth",
    description: "This book taught me I own my future. Success is my responsibility. Hard work beats talent.",
    url: "https://www.goodreads.com/book/show/30247915-the-10-pillars-of-wealth",
    icon: Landmark
  },
  {
    title: "The One Thing",
    description: "To win fast, focus on the single most important task. Ignore distractions. Do one thing well.",
    url: "https://www.goodreads.com/book/show/16256798-the-one-thing",
    icon: Target
  },
  {
    title: "How to Be Well",
    description: "My health bible. Simple habits for a better life. I follow its rules daily to feel my best.",
    url: "https://www.goodreads.com/book/show/35721118-how-to-be-well",
    icon: Activity
  },
  {
    title: "The Millionaire Booklet",
    description: "Simple steps to wealth. 44 pages of pure value. I use its secrets to build my future.",
    url: "https://www.goodreads.com/book/show/31284204-the-millionaire-booklet",
    icon: BookOpen
  }
];

export const GEAR: GearItem[] = [
  {
    category: "Fun",
    items: [
      { name: "Kindle Oasis", url: "https://www.amazon.com/kindle-oasis" },
      { name: "MonkeyType", url: "https://monkeytype.com/" },
      { name: "Chess.com", url: "https://www.chess.com/" },
      { name: "Lichess", url: "https://lichess.org/" },
      { name: "SteamDeck", url: "https://store.steampowered.com/steamdeck" },
      { name: "Vibe Coding", url: "https://claude.ai/code" },
      { name: "Letterboxd", url: "https://letterboxd.com/" }
    ]
  },
  {
    category: "Focus",
    items: [
      { name: "Hyprsunset", url: "https://github.com/hyprwm/hyprsunset" },
      { name: "Todoist", url: "https://todoist.com/" },
      { name: "ASoftMurmur", url: "https://asoftmurmur.com/" },
      { name: "Bose QC Ultras", url: "https://www.bose.com/" },
      { name: "Pomodoro", url: "https://pomofocus.io/" }
    ]
  },
  {
    category: "Writing",
    items: [
      { name: "Field Notes", url: "https://fieldnotesbrand.com/" },
      { name: "LAMY Fountain Pens", url: "https://www.lamy.com/" },
      { name: "Leuchtturm Notebooks", url: "https://www.leuchtturm1917.us/" },
      { name: "Obsidian.md", url: "https://obsidian.md/" }
    ]
  },
  {
    category: "Tech Picks",
    items: [
      { name: "Zen Browser", url: "https://zen-browser.app/" },
      { name: "Ghostty", url: "https://ghostty.org/" },
      { name: "Bitwarden", url: "https://bitwarden.com/" },
      { name: "Omarchy", url: "https://omarchy.org/" },
      { name: "Hyprland", url: "https://hyprland.org/" },
      { name: "KDE", url: "https://kde.org/" },
      { name: "LocalSend", url: "https://localsend.org/" }
    ]
  }
];

export const TECH_STACK: TechStackCategory[] = [
  {
    category: "AI & Development",
    items: [
      { name: "Gemini", url: "https://gemini.google.com/" },
      { name: "Claude Code", url: "https://claude.ai/code" },
      { name: "Linux Terminal", url: "https://linuxcommand.org/" },
      { name: "Arch Linux", url: "https://archlinux.org/" },
      { name: "AUR", url: "https://aur.archlinux.org/" },
      { name: "GitHub", url: "https://github.com/" }
    ]
  },
  {
    category: "Deployment & No-Code",
    items: [
      { name: "Netlify", url: "https://www.netlify.com/" },
      { name: "Vercel", url: "https://vercel.com/" },
      { name: "Tally.so", url: "https://tally.so/" }
    ]
  },
  {
    category: "Creative & Media",
    items: [
      { name: "DaVinci Resolve", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
      { name: "GIMP", url: "https://www.gimp.org/" },
      { name: "Canva", url: "https://www.canva.com/" },
      { name: "OBS Studio", url: "https://obsproject.com/" }
    ]
  },
  {
    category: "Marketing & Ops",
    items: [
      { name: "Mailchimp", url: "https://mailchimp.com/" },
      { name: "Kit", url: "https://kit.com/" },
      { name: "Hyros", url: "https://hyros.com/" }
    ]
  }
];

export const ROADMAP: RoadmapItem[] = [
  {
    title: "Build Something To $10k MRR",
    description: "Make something useful that people need.",
    timeline: "Current"
  },
  {
    title: "Become A Full-Stack Architect",
    description: "Build scalable systems that power real businesses.",
    timeline: "2026 Goal"
  },
  {
    title: "Move My Family Somewhere Warmer",
    description: "Get out of this sad Seattle rain.",
    timeline: "Future"
  },
  {
    title: "Build A Mid Price SaaS To $100k MRR",
    description: "Scale a B2B solution to significant revenue.",
    timeline: "Long Term"
  },
  {
    title: "Buy A Farm",
    description: "Live out our days tending sheep.",
    timeline: "The Dream"
  }
];

export const MUSIC_PLAYLIST = [
  "Icewear Vezzo",
  "Bryson Tiller",
  "King Hendrick$",
  "Babyface Ray",
  "Neton Vega",
  "Tito Double P",
  "Big Sad 1900",
  "Larry June",
  "Kodak Black",
  "Leon Thomas",
  "Shoreline Mafia",
  "Big Sean",
  "Nipsey Hussle",
  "Victor Mendivil",
  "BigXthePlug",
  "Grupo Frontera",
  "Kanye West",
  "Grupo Firme",
  "Miguel",
  "PARTYNEXTDOOR",
  "Wale",
  "Odeal",
  "1700Bubba"
];

export const INSPIRATIONS: InspirationItem[] = [
  {
    name: "Alex Becker",
    description: "Minimalist builder. Simplifies business to its core.",
    url: "https://www.youtube.com/channel/UCKQvGU-qtjEthINeViNbn6A",
    icon: Box
  },
  {
    name: "Charlie Morgan",
    description: "Uses shadow work to level up his character.",
    url: "https://www.youtube.com/@charliemofficial",
    icon: Flame
  },
  {
    name: "Sam Ovens",
    description: "Optimizes every detail of life for business performance.",
    url: "https://www.youtube.com/@samovenstv",
    icon: Settings
  }
];

export const BETS: BetItem[] = [
  {
    title: "Crypto Boom",
    description: "Crypto will boom again. Money will flow to utility projects like AI first, then gaming.",
    icon: TrendingUp
  },
  {
    title: "Instant Video Games",
    description: "AI will build games from text. Imagine, type, play. Instant entertainment creation.",
    icon: Gamepad2
  },
  {
    title: "Living to 120",
    description: "Aging will become a solvable problem. Medicine shifts from fixing sick people to extending life.",
    icon: Heart
  }
];

export const CHANGELOG: ChangelogItem[] = [
  { date: "12-12-2025", change: "Had idea to update portfolio site" },
  { date: "12-17-2025", change: "Finished v1 of new site" },
  { date: "12-18-2025", change: "Deployed using GitHub and Vercel" },
  { date: "07-29-2026", change: 'Added "Now" module, health stats, killed projects, bucket list, scroll animations, project filters, keyboard nav, and page transitions' },
];

export const NOW: NowModule = {
  building: { name: 'PushRise', description: 'Mobile alarm app that only stops when you do pushups' },
  reading: '10 Pillars of Wealth',
  listening: 'Larry June',
};

export const KILLED_PROJECTS: KilledProject[] = [
  { name: 'Hyperion', epitaph: 'AI mission control dashboard — died before it left the drawing board' },
];

export const BUCKET_LIST: BucketListItem[] = [
  { text: 'Build Something To $10k MRR' },
  { text: 'Move My Family Somewhere Warmer' },
  { text: 'Buy A Farm' },
];

export const HEALTH_STATS: HealthStats = {
  steps: 8240,
  calories: 2150,
  sleep: 7.5,
};
export const DESK_SETUP: DeskSetupCategory[] = [
  {
    category: "The Core Desktop",
    items: [
      { label: "Surface", value: "80\" Ikea Oak Solid Wood Countertop" },
      { label: "Support", value: "2x White Ikea Alex Drawers" },
      { label: "Organization", value: "Amazon Alex Drawer Organizers" },
      { label: "Display", value: "Samsung 49\" Odyssey G9 (Super Ultrawide)" },
      { label: "Mounting", value: "Heavy Duty Monitor Arm" },
      { label: "Desk Mat", value: "Fnatic Super Ultra-Wide (Black)" }
    ]
  },
  {
    category: "Peripherals & Input",
    items: [
      { label: "Keyboard", value: "NuPhy Air75 V3 (Black)" },
      { label: "Mouse", value: "Anker Vertical Ergonomic Mouse" },
      { label: "Webcam", value: "eMeet 4K Webcam" },
      { label: "Lighting", value: "Quntis Light Bar (Monitor) & Logitech Litra Glow (Key light)" }
    ]
  },
  {
    category: "Audio Stack",
    items: [
      { label: "Amp", value: "FiiO K7" },
      { label: "Speakers", value: "Kanto YU2 Desktop Speakers" },
      { label: "Mic", value: "Fifine K688 (Dynamic XLR/USB)" },
      { label: "Headphones", value: "Hifiman Sundara (Open-back Planar), Sennheiser HD380 Pro (Studio Monitoring), Bose QuietComfort Ultra Gen 2 (ANC/Travel), Skullcandy Crusher Evo (Bass-heavy/Casual)" }
    ]
  },
  {
    category: "Tools & Tech Workbench",
    items: [
      { label: "Electronics", value: "Soldering kit, Strebito 150-piece precision screwdriver set, & Precision knife kit." },
      { label: "Power", value: "Reusable batteries + Charger." },
      { label: "Misc Tech", value: "Label maker, Multi-tool, iPod Nano 3rd Gen (8GB Blue), & Panasonic Lumix DMC-TZ4." }
    ]
  },
  {
    category: "Hardware & Maintenance",
    items: [
      { label: "Hole Punchers", value: "Glock 43X (9mm) with laser/light/Trijicon sights & Ruger LCP II (.22LR)." },
      { label: "Maintenance", value: "Comprehensive Gun Cleaning Kit." }
    ]
  }
];