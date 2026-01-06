import { Project, PhilosophyItem, GearItem, Book, RoadmapItem, InspirationItem, BetItem, ChangelogItem, TechStackCategory, DeskSetupCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'orthostar',
    title: 'OrthoStar',
    year: '2025',
    summary: 'Micro SaaS that improves Google ratings for Ortho practices.',
    videoUrl: '/projects/orthostar/cover.jpg',
    caseStudy: {
      problem: 'Practices lose future customers when their practice has bad reviews.',
      solution: 'I created a tool that blocks bad reviews, gets the practice more 5-star reviews and turns happy patients into usable video ads.',
      result: 'Average Ortho practice sees a 32% increase in 5-star reviews which lead to an average of 7 new patients per month. A new Ortho patient can be worth anywhere from $1k - $15k to a practice. You do the math.',
      liveLink: 'https://orthostar.org/',
      images: [
        '/projects/orthostar/case-study-1.jpg',
        '/projects/orthostar/case-study-2.jpg'
      ]
    }
  },
  {
    id: 'chrome-extensions',
    title: 'Chrome Extensions',
    year: '2024',
    summary: 'A collection of useful Chrome extensions I built for the Skool platform.',
    videoUrl: '/projects/chrome-extensions/cover.jpg',
    caseStudy: {
      problem: 'Skool is still a new tool. They lack features that can make their users more money.',
      solution: 'I created different Chrome extensions that add useful features for users. Some of those extensions are: Skool Todo-List, Skool Templates, Skool Utilities, Skooler AI.',
      result: 'Skool users use these tools. They see an increase in their revenue across all their Skool communities.',
      liveLink: 'https://example.com',
      images: [
        '/projects/chrome-extensions/case-study-1.jpg',
        '/projects/chrome-extensions/case-study-2.jpg'
      ]
    }
  },
  {
    id: 'vibestt',
    title: 'VibeSTT',
    year: '2023',
    summary: 'A minimalist, high-performance speech-to-text utility for the Omarchy Linux distribution.',
    videoUrl: '/projects/vibestt/cover.jpg',
    caseStudy: {
      problem: 'Most Linux speech-to-text tools are full of bloat. I created a minimalist one that\'s fast, efficient and easy to use. Runs via an easy keybind. Installs with one command: yay -S vibestt',
      solution: 'I built a lightweight tool that integrates directly with the system. It uses minimal resources and activates instantly with a simple shortcut.',
      result: 'Users can easily speak their ideas, removing the handicap of slow typing, leading to faster work flow, more efficient time while on your PC, etc.',
      liveLink: 'https://github.com/SyreeseOfficial/VibeSTT',
      images: [
        '/projects/vibestt/case-study-1.jpg',
        '/projects/vibestt/case-study-2.jpg'
      ]
    }
  }
];

export const PHILOSOPHY: PhilosophyItem[] = [
  {
    id: '1',
    number: '01',
    title: "I'm in charge",
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
    author: "Alex Becker",
    description: "This book showed me that I own my life. Everything that happens is my fault, and that’s a good thing! I’m the boss of my own future. If I work hard enough for long enough, I can do anything—even if I’m starting with no skills.",
    url: "https://www.goodreads.com/book/show/30247915-the-10-pillars-of-wealth"
  },
  {
    title: "The One Thing",
    author: "Gary Keller",
    description: "If you want to win fast, you have to find the one most important job that gets you closer to your goal. Once you find it, forget everything else. Stop getting distracted and just focus on that one big thing.",
    url: "https://www.goodreads.com/book/show/16256798-the-one-thing"
  },
  {
    title: "How to Be Well",
    author: "Frank Lipman",
    description: "I bought this on a whim 10 years ago, and it’s still one of my favorites. It’s full of sticky notes because the lessons are so good. It changed how I think about my health and how I live every day. I still follow its rules to feel my best.",
    url: "https://www.goodreads.com/book/show/35721118-how-to-be-well"
  },
  {
    title: "The Millionaire Booklet",
    author: "Grant Cardone",
    description: "It’s only 44 pages, making it the shortest but most helpful book I’ve ever read. It explains how to build wealth in the simplest way possible. This book has helped so many people become millionaires, and I’m using its secrets to build my own future.",
    url: "https://www.goodreads.com/book/show/31284204-the-millionaire-booklet"
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
      { name: "Vibe Coding", url: "#" }, // Placeholder, user to provide
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
      { name: "Antigravity", url: "https://antigravity.google/" },
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
    title: "Replace My 9-5",
    description: "Transition to full-time independent building.",
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
    description: "Minimalist software entrepreneur who breaks down building successful software companies to simple steps.",
    url: "https://www.youtube.com/channel/UCKQvGU-qtjEthINeViNbn6A"
  },
  {
    name: "Charlie Morgan",
    description: "Young entrepreneur who uses shadow work to kill the parts of him he doesn't like in order to become a more skilled and better person.",
    url: "https://www.youtube.com/@charliemofficial"
  },
  {
    name: "Sam Ovens",
    description: "Completely optimizes every single aspect of his life, no matter how minute, in order to make his company, skool, better.",
    url: "https://www.youtube.com/@samovenstv"
  }
];

export const BETS: BetItem[] = [
  {
    title: "Crypto Boom",
    description: "I think crypto is about to go crazy again, just like in 2020. People will move money from meme coins into useful stuff like AI and Real World projects first. After that, gaming coins will blow up."
  },
  {
    title: "Instant Video Games",
    description: "Soon, you'll be able to make a whole video game just by typing one sentence. Want to play as a robot dinosaur with machine guns? Just ask AI, and it will build it for you instantly."
  },
  {
    title: "Living to 120",
    description: "Thanks to people like Bryan Johnson, I bet living to 120 will be normal soon. Medicine is changing from 'fixing sick people' to 'stopping aging' within the next 20 to 30 years."
  }
];

export const CHANGELOG: ChangelogItem[] = [
  { date: "12-12-25", change: "Had idea to update portfolio site" },
  { date: "12-17-25", change: "Finished v1 of new site" },
  { date: "12-18-25", change: "Deployed using GitHub and Vercel" },
  { date: "Future", change: 'Add a "Killed Projects" section' },
  { date: "Future", change: 'Add "Bucket List" section' },
  { date: "Future", change: "Add live stats section that shares my health tracking stats live: steps, cal burned, sleep, etc" }
];
export const DESK_SETUP: DeskSetupCategory[] = [
  {
    category: "The Core Desktop",
    items: [
      { label: "Surface", value: "80\" Ikea Oak Solid Wood Countertop" },
      { label: "Support", value: "2x White Ikea Alex Drawers" },
      { label: "Organization", value: "Amazon Alex Drawer Organizers" },
      { label: "Primary Display", value: "Samsung 49\" Odyssey G9 (Super Ultrawide)" },
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
      { label: "DAC/Amp", value: "FiiO K7" },
      { label: "Speakers", value: "Kanto YU2 Desktop Speakers" },
      { label: "Microphone", value: "Fifine K688 (Dynamic XLR/USB)" },
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
      { label: "Firearms", value: "Glock 43X (9mm) with laser/light/Trijicon sights & Ruger LCP II (.22LR)." },
      { label: "Maintenance", value: "Comprehensive Gun Cleaning Kit." }
    ]
  }
];