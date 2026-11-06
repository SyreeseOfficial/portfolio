export const FEATURED = ['orthostar', 'vibestylist', 'vibestt', 'hypertyper'];

export const BURIED = [
  { name: 'Hyperion', status: 'KILLED', desc: 'AI mission control dashboard.', verdict: 'Two free versions already existed. A third one was ego, not need.', bg: 'hyperion' },
  { name: 'Momentum', status: 'KILLED', desc: 'Habit tracker for Android.', verdict: 'Replaced the entire app with a single markdown file.', bg: 'momentum' },
  { name: 'Locked-In', status: 'KILLED', desc: 'Android app for locking in on life.', verdict: 'Same ending as Momentum. A markdown file did the job.', bg: 'lockedin' },
  { name: 'EasyNoti', status: 'KILLED', desc: 'Reminder app built around how I work.', verdict: 'Google Calendar is annoying, but not annoying enough to justify an app.', bg: 'easynoti' },
  { name: 'PushRise', status: 'SHELVED', desc: "Alarm that won't turn off until the camera counts your pushups.", verdict: 'Finished and working. I never put in the work to market it.', bg: 'pushrise' },
  { name: 'Listen', status: 'SHELVED', desc: 'Helps audiophiles get more out of expensive gear.', verdict: 'Works. Never marketed. Still in my own rotation.', bg: 'listen' },
  { name: 'BacklogRoulette', status: 'SHELVED', desc: "Decky plugin that picks a random Steam Deck game when you can't decide.", verdict: 'Finished. Store approval was a hassle, so I just use it myself.', bg: 'backlogroulette' },
];

export const RULES = [
  { title: "I'm In Charge", line: 'I choose my attitude and control my own path.', body: "I take total ownership of my results. If I fall short, I don't make excuses. I just work harder and prepare better next time.", video: 'im-in-charge', via: 'Alex Becker', href: 'https://www.youtube.com/@alexbeckerbusiness' },
  { title: 'Work Wins', line: 'I can learn anything if I practice long enough.', body: 'Talent only gives you a head start, but hard work always gets you to the finish line.', video: 'work-wins', via: 'Alex Hormozi', href: 'https://www.youtube.com/@AlexHormozi' },
  { title: 'Keep It Simple', line: 'Less is better. Extra stuff just slows you down.', body: "When you remove what you don't need, nothing can break or confuse you.", video: 'keep-it-simple', via: 'Charlie Morgan', href: 'https://www.youtube.com/@charliemofficial' },
];

export const PHOTOS = [
  { src: '4', caption: '01 / FOG' },
  { src: '7', caption: '02 / SUSHI' },
  { src: '5', caption: '03 / ZOMBIE WEATHER' },
  { src: '8', caption: '04 / SEA TOWN' },
];

export const BUILD_TOOLS = [
  {
    title: 'AI & Development',
    icon: 'M3 4h18v2H3V4Zm0 4h11v2H3V8Zm0 4h18v2H3v-2Zm0 4h11v2H3v-2Z',
    links: [
      ['Gemini', 'https://gemini.google.com'],
      ['Claude Code', 'https://claude.com/product/claude-code'],
      ['Linux', 'https://www.kernel.org'],
      ['Arch Linux', 'https://archlinux.org'],
      ['AUR', 'https://aur.archlinux.org'],
      ['GitHub', 'https://github.com'],
    ],
  },
  {
    title: 'Deployment & No-Code',
    icon: 'M12 2c4.4 0 8 1.3 8 3v14c0 1.7-3.6 3-8 3s-8-1.3-8-3V5c0-1.7 3.6-3 8-3Zm6 6.6c-1.5.8-3.7 1.2-6 1.2s-4.5-.4-6-1.2v2.6c0 .6 2.5 1.6 6 1.6s6-1 6-1.6V8.6Z',
    links: [
      ['Netlify', 'https://www.netlify.com'],
      ['Vercel', 'https://vercel.com'],
      ['Tally.so', 'https://tally.so'],
    ],
  },
  {
    title: 'Creative & Media',
    icon: 'M14.5 2.3 9.9 6.9l1.4 1.4-1.8 1.8-1.4-1.4-5.4 5.4a2 2 0 0 0 0 2.8l2.4 2.4a2 2 0 0 0 2.8 0l5.4-5.4-1.4-1.4 1.8-1.8 1.4 1.4 4.6-4.6a2 2 0 0 0 0-2.8l-2.4-2.4a2 2 0 0 0-2.8 0Z',
    links: [
      ['DaVinci Resolve', 'https://www.blackmagicdesign.com/products/davinciresolve'],
      ['GIMP', 'https://www.gimp.org'],
      ['Canva', 'https://www.canva.com'],
      ['OBS Studio', 'https://obsproject.com'],
    ],
  },
  {
    title: 'Marketing & Ops',
    icon: 'M4 9h3l7-4v14l-7-4H4V9Zm13.5 3a4.5 4.5 0 0 1-2 3.7l-1-1.7a2.5 2.5 0 0 0 0-4l1-1.7a4.5 4.5 0 0 1 2 3.7Z',
    links: [
      ['Mailchimp', 'https://mailchimp.com'],
      ['Kit', 'https://kit.com'],
      ['Hyros', 'https://hyros.com'],
    ],
  },
];

export const SHELVES = [
  {
    label: 'PAPER',
    items: [
      ['Field Notes', 'Pocket sized notebooks', 'https://fieldnotesbrand.com'],
      ['Lamy', 'Fountain pens worth refilling', 'https://www.lamy.com'],
      ['Leuchtturm', 'The notebook everything ends up in', 'https://www.leuchtturm1917.com'],
    ],
  },
  {
    label: 'THINKING',
    items: [
      ['Obsidian', 'Markdown editor, second brain', 'https://obsidian.md'],
      ['Pomodoro', '25 minutes of no excuses', 'https://en.wikipedia.org/wiki/Pomodoro_Technique'],
      ['Monkeytype', 'Getting gud at typing', 'https://monkeytype.com'],
      ['Kindle', 'Doomscrolling, replaced', 'https://www.amazon.com/kindle'],
    ],
  },
  {
    label: 'SYSTEM',
    items: [
      ['Omarchy', 'Best Linux distro', 'https://omarchy.org'],
      ['Firefox', 'Best web browser', 'https://www.firefox.com'],
      ['uBlock', 'Blocks every ad', 'https://ublockorigin.com'],
      ['Bitwarden', 'One password, finally', 'https://bitwarden.com'],
      ['LocalSend', 'File transfers, no cloud', 'https://localsend.org'],
      ['Vivo X200', 'Pro camera with a phone built in', 'https://www.vivo.com/en/products/x200'],
    ],
  },
  {
    label: 'BODY & MONEY',
    items: [
      ['Cronometer', 'Free calorie tracking', 'https://cronometer.com'],
      ['Yuka', 'Scan a barcode, learn the truth', 'https://yuka.io/en'],
      ['Strava', 'Social media, but for running', 'https://www.strava.com'],
      ['Monarch', 'Where the money actually went', 'https://www.monarchmoney.com'],
    ],
  },
  {
    label: 'OFF HOURS',
    items: [
      ['Bose QC Ultra 2', 'Noise, cancelled', 'https://www.bose.com/p/headphones/bose-quietcomfort-ultra-headphones-2nd-gen'],
      ['Soft Murmur', 'Rain on demand', 'https://asoftmurmur.com'],
      ['Stremio', 'Any movie or show, $3 a month', 'https://www.stremio.com'],
      ['Letterboxd', 'Social media, but for movies', 'https://letterboxd.com'],
      ['Steam Deck', 'Gaming while on the treadmill', 'https://store.steampowered.com/steamdeck'],
      ['Chess.com', 'Losing on purpose until I stop losing', 'https://www.chess.com'],
      ['Lichess', 'Free chess puzzles', 'https://lichess.org'],
    ],
  },
];

export const SOCIALS = [
  { title: 'GitHub', href: 'https://github.com/SyreeseOfficial', icon: 'M12 1.5a10.5 10.5 0 0 0-3.3 20.5c.5.1.7-.2.7-.5v-2c-2.9.6-3.5-1.3-3.5-1.3-.5-1.2-1.2-1.5-1.2-1.5-.9-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.8-1.2-4.8-5.2 0-1.2.4-2.1 1.1-2.8-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.3 0c2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.6.1 2.9.7.7 1.1 1.6 1.1 2.8 0 4-2.5 4.9-4.8 5.2.4.3.7 1 .7 2v3c0 .3.2.6.7.5A10.5 10.5 0 0 0 12 1.5Z' },
  { title: 'X', href: 'https://x.com/hisyre', icon: 'M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.1L4.7 21H1.5l7.5-8.6L1.2 3h6.6l4.5 5.6L17.5 3Zm-1.1 16.1h1.8L7.7 4.8H5.8l10.6 14.3Z' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/syreese/', icon: 'M4.9 3.5a2.4 2.4 0 1 1 0 4.9 2.4 2.4 0 0 1 0-4.9ZM2.8 21V9.4h4.2V21H2.8Zm7 0V9.4h4v1.6h.1c.6-1 2-2 4.1-2 4.4 0 5.2 2.8 5.2 6.5V21h-4.2v-4.9c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V21H9.8Z' },
  { title: 'YouTube', href: 'https://www.youtube.com/@SyreeseDelosSantos', icon: 'M23 12s0-3.9-.5-5.7a3 3 0 0 0-2.1-2.1C18.6 3.6 12 3.6 12 3.6s-6.6 0-8.4.6A3 3 0 0 0 1.5 6.3C1 8.1 1 12 1 12s0 3.9.5 5.7a3 3 0 0 0 2.1 2.1c1.8.6 8.4.6 8.4.6s6.6 0 8.4-.6a3 3 0 0 0 2.1-2.1C23 15.9 23 12 23 12ZM9.8 15.5v-7l6.1 3.5-6.1 3.5Z' },
  { title: 'Instagram', href: 'https://www.instagram.com/syreesepic', icon: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1Zm0 3.2a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2Zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6Zm6.9-11.2a1.6 1.6 0 1 1-3.1 0 1.6 1.6 0 0 1 3.1 0Z' },
];
