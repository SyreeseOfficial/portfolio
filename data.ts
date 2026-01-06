import { Project, PhilosophyItem, GearItem, Book, RoadmapItem, InspirationItem, BetItem, ChangelogItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'project-alpha',
    title: 'Project Alpha',
    year: '2025',
    tags: ['React', 'Next.js', 'TypeScript'],
    summary: 'A high-performance e-commerce dashboard for industrial suppliers.',
    videoUrl: 'https://picsum.photos/800/450?grayscale', // Placeholder
    caseStudy: {
      problem: 'The client needed a way to manage 50,000+ SKUs without browser lag.',
      solution: 'I implemented a virtualized list architecture and optimistic UI updates.',
      result: 'Reduced load times by 60% and increased daily active users by 25%.',
      liveLink: 'https://example.com',
      images: [
        'https://picsum.photos/800/500?1',
        'https://picsum.photos/800/500?2'
      ]
    }
  },
  {
    id: 'tally-builder',
    title: 'Tally Builder',
    year: '2024',
    tags: ['Astro', 'Tailwind', 'Node.js'],
    summary: 'Custom form builder integration for construction site reporting.',
    videoUrl: 'https://picsum.photos/800/450?blur', // Placeholder
    caseStudy: {
      problem: 'Field workers struggled with complex PDF forms on mobile devices.',
      solution: 'Built a mobile-first web interface that syncs offline data when connection is restored.',
      result: 'Field reporting errors dropped by 90% in the first month.',
      liveLink: 'https://example.com',
      images: [
        'https://picsum.photos/800/500?3',
        'https://picsum.photos/800/500?4'
      ]
    }
  },
  {
    id: 'neon-system',
    title: 'Neon System',
    year: '2023',
    tags: ['React Native', 'Firebase'],
    summary: 'Inventory tracking mobile application with QR scanning.',
    videoUrl: 'https://picsum.photos/800/450', // Placeholder
    caseStudy: {
      problem: 'Inventory loss was costing the company $10k/month due to manual entry errors.',
      solution: 'Developed a QR-code based scanning system with real-time Firebase sync.',
      result: 'Inventory accuracy reached 99.9% and loss was effectively eliminated.',
      liveLink: 'https://example.com',
      images: [
        'https://picsum.photos/800/500?5',
        'https://picsum.photos/800/500?6'
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
    description: "This book showed me that I own my life. Everything that happens is my fault, and that’s a good thing! I’m the boss of my own future. If I work hard enough for long enough, I can do anything—even if I’m starting with no skills."
  },
  { 
    title: "The One Thing", 
    author: "Gary Keller",
    description: "If you want to win fast, you have to find the one most important job that gets you closer to your goal. Once you find it, forget everything else. Stop getting distracted and just focus on that one big thing."
  },
  { 
    title: "How to Be Well", 
    author: "Frank Lipman",
    description: "I bought this on a whim 10 years ago, and it’s still one of my favorites. It’s full of sticky notes because the lessons are so good. It changed how I think about my health and how I live every day. I still follow its rules to feel my best."
  },
  { 
    title: "The Millionaire Booklet", 
    author: "Grant Cardone",
    description: "It’s only 44 pages, making it the shortest but most helpful book I’ve ever read. It explains how to build wealth in the simplest way possible. This book has helped so many people become millionaires, and I’m using its secrets to build my own future."
  }
];

export const GEAR: GearItem[] = [
  {
    category: "Fun",
    items: ["Kindle Oasis", "MonkeyType", "Chess.com", "Lichess", "SteamDeck", "Vibe Coding", "Letterboxd"]
  },
  {
    category: "Focus",
    items: ["Hyprsunset", "Todoist", "ASoftMurmur", "Bose QC Ultras", "Pomodoro"]
  },
  {
    category: "Writing",
    items: ["Field Notes", "LAMY Fountain Pens", "Leuchtturm Notebooks", "Obsidian.md"]
  },
  {
    category: "Tech Picks",
    items: ["Gemini", "Antigravity", "Arch Linux", "Zen Browser", "Ghostty", "Bitwarden", "Omarchy", "Hyprland", "KDE", "LocalSend"]
  }
];

export const TECH_STACK: GearItem[] = [
  {
    category: "Vibe Coding / AI",
    items: ["Google AI Studio", "Nano Banana", "Antigravity", "Gemini CLI"]
  },
  {
    category: "Deployment & Git",
    items: ["Netlify", "Vercel", "GitHub"]
  },
  {
    category: "Creative Tools",
    items: ["GIMP", "Lightroom", "Canva", "OBS Studio"]
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
  "Daft Punk - Veridis Quo",
  "Tycho - Awake",
  "Bonobo - Kerala",
  "Fred again.. - Kyle (I found you)",
  "Aphex Twin - #3"
];

export const INSPIRATIONS: InspirationItem[] = [
  { 
    name: "Alex Becker", 
    description: "Minimalist software entrepreneur who breaks down building successful software companies to simple steps." 
  },
  { 
    name: "Charlie Morgan", 
    description: "Young entrepreneur who uses shadow work to kill the parts of him he doesn't like in order to become a more skilled and better person." 
  },
  { 
    name: "Sam Ovens", 
    description: "Completely optimizes every single aspect of his life, no matter how minute, in order to make his company, skool, better." 
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
  { date: "12-18-25", title: "DEPLOYED", change: "Deployed using GitHub and Vercel" },
  { date: "Future", change: 'Add a "Killed Projects" section' },
  { date: "Future", change: 'Add "Bucket List" section' },
  { date: "Future", change: "Add live stats section that shares my health tracking stats live: steps, cal burned, sleep, etc" }
];