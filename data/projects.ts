export type Project = {
  slug: string;
  title: string;
  cat: string;
  blurb: string;
  year: string;
  role: string;
  status: string;
  stack: string;
  problem: string;
  solution: string;
  result: string;
  links: { t: string; h: string }[];
  img: string;
  thumb: string;
  pos: string;
};

// Order here = archive order and "next project" order.
export const projects: Project[] = [
  {
    "slug": "yt2obsidian",
    "title": "yt2obsidian",
    "cat": "CLI TOOLS",
    "blurb": "Paste a YouTube link in the terminal and get a transcript note in your Obsidian vault.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "terminal tool / youtube api / obsidian",
    "problem": "Taking notes on every YouTube video takes effort, and some videos only need a summary. My workflow was to copy a transcript from a website, paste it into Obsidian, then ask Claude Code to clean up the file. Every video meant several manual steps.",
    "solution": "I built a simple terminal tool. Paste in a link and it pulls the transcript through the YouTube API, creates a markdown file in the transcripts folder of my Obsidian vault, and names it automatically. It includes settings, configs and batch pasting, so I can drop in ten videos at once. I then clean up all the transcripts in one pass with Claude Code and turn them into summaries.",
    "result": "A faster and easier personal knowledge management workflow, from link to summary with almost no manual work.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/yt2obsidian"
      }
    ],
    "img": "/uploads/projects/yt2obsidian.webp",
    "thumb": "/uploads/projects/yt2obsidian-thumb.webp",
    "pos": ""
  },
  {
    "slug": "shelfscout",
    "title": "ShelfScout",
    "cat": "CLI TOOLS",
    "blurb": "Stock alerts for the PS5 Pro, delivered to your desktop and phone.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "terminal tool / browser ui / notifications",
    "problem": "PS5 Pros are sold out across the country while buyers wait for the GTA 6 release. After days in queues and on waitlists, finding one was nearly impossible.",
    "solution": "I built a terminal tool with a browser front end that lists the retailers stocking the PS5 Pro. Whenever a retailer gets one in stock, it sends a desktop and a mobile notification.",
    "result": "I bought a PS5 Pro.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/shelf-scout"
      }
    ],
    "img": "/uploads/projects/shelfscout.webp",
    "thumb": "/uploads/projects/shelfscout-thumb.webp",
    "pos": ""
  },
  {
    "slug": "pushrise",
    "title": "PushRise",
    "cat": "MOBILE",
    "blurb": "An alarm app that stays on until you do your pushups.",
    "year": "",
    "role": "Solo",
    "status": "Unpublished",
    "stack": "camera / ai pose recognition",
    "problem": "Some people snooze their alarms every morning.",
    "solution": "I built an app that makes the user do pushups on camera to turn off the alarm. AI recognition checks that each pushup goes low enough and that the user completes the required number.",
    "result": "The app was never published. I used it for a while, but I rarely have trouble snoozing my alarms, so it fell out of use. It was a fun project.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/PushRise"
      }
    ],
    "img": "/uploads/projects/pushrise.webp",
    "thumb": "/uploads/projects/pushrise-thumb.webp",
    "pos": ""
  },
  {
    "slug": "backlogroulette",
    "title": "BacklogRoulette",
    "cat": "INTERNAL TOOLS",
    "blurb": "A Steam Deck plugin that picks a game from your library at random.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "decky loader / steam deck",
    "problem": "With a library of over 250 games on my Steam Deck, I could never decide what to play.",
    "solution": "I built a Decky Loader plugin that runs natively on the Steam Deck and randomly picks a game from my library. Game filters let me narrow the search when I want to.",
    "result": "I play more often because I no longer get stuck choosing.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/BacklogRoulette"
      }
    ],
    "img": "/uploads/projects/backlogroulette.webp",
    "thumb": "/uploads/projects/backlogroulette-thumb.webp",
    "pos": ""
  },
  {
    "slug": "orthostar",
    "title": "OrthoStar",
    "cat": "SAAS",
    "blurb": "Micro SaaS that improves Google ratings for ortho practices.",
    "year": "2025",
    "role": "Solo",
    "status": "Live",
    "stack": "next.js / supabase / stripe",
    "problem": "Negative reviews follow orthodontic practices everywhere a prospective patient looks. One bad rating on Google can cost a practice tens of thousands in lost patient revenue before a single appointment is booked.",
    "solution": "I built OrthoStar to manage patient reviews. It catches unhappy patients before they post publicly and sends happy ones to Google for a five-star review. It also turns patient testimonial clips into paid ads. All of it runs from one dashboard.",
    "result": "More five-star Google reviews and fewer unhappy patients posting publicly, handled from a single dashboard that runs in the background.",
    "links": [],
    "img": "/uploads/projects/orthostar.webp",
    "thumb": "/uploads/projects/orthostar-thumb.webp",
    "pos": ""
  },
  {
    "slug": "hypertyper",
    "title": "HyperTyper",
    "cat": "CLI TOOLS",
    "blurb": "Terminal-native typing game for coding breaks.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "terminal game",
    "problem": "Coders need mental resets between deep work sessions, but stepping away from the terminal to play a game means switching context entirely, the very thing a break is supposed to undo.",
    "solution": "HyperTyper is a typing game that runs in your terminal. It has several challenge modes and saves your high scores between sessions, so you can take a break without leaving the command line.",
    "result": "Developers can decompress, sharpen their typing speed, and return to work without switching windows or losing their mental context.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/HyperTyper"
      }
    ],
    "img": "/uploads/projects/hypertyper.webp",
    "thumb": "/uploads/projects/hypertyper-thumb.webp",
    "pos": ""
  },
  {
    "slug": "routecommand",
    "title": "RouteCommand",
    "cat": "INTERNAL TOOLS",
    "blurb": "A tool dashboard I built for my job to speed up daily tasks and help the business make more money.",
    "year": "2024",
    "role": "Solo",
    "status": "In use",
    "stack": "react / node / postgres",
    "problem": "Manual workflows at scale leak time and money. Expense tracking done ad hoc meant missed deductions; refund requests handled by memory meant delayed cash recovery; donation logging done piecemeal meant write-offs captured at year-end instead of at the time of giving.",
    "solution": "I built a purpose-built internal dashboard with three focused tools: a receipt and expense tracker to maximize tax deductions, a credit request workflow to accelerate refund processing, and a donation logger to ensure every write-off gets captured when it happens.",
    "result": "The business captures more deductions, recovers credits faster, and replaced a handful of manual processes with a single tool. Tasks that used to take minutes now take seconds.",
    "links": [],
    "img": "/uploads/projects/routecommand.webp",
    "thumb": "/uploads/projects/routecommand-thumb.webp",
    "pos": ""
  },
  {
    "slug": "konafit",
    "title": "KonaFit",
    "cat": "MOBILE",
    "blurb": "A custom Android workout app built around how I actually train, with none of the paywalls.",
    "year": "2024",
    "role": "Solo",
    "status": "Personal use",
    "stack": "kotlin / compose / room",
    "problem": "The best fitness apps lock their most useful features behind paywalls, then fragment the rest across multiple subscriptions. Getting a genuinely complete workout experience costs more per month than a gym membership.",
    "solution": "I built a custom Android workout app around exactly how I train, pulling the strongest features from every app I'd paid for, stripping out everything I didn't use, and consolidating it into one tool I actually want to open at the gym. Free, permanently.",
    "result": "An app I open every single session, not because I have to, but because it fits how I actually train. Everything I need, nothing I don't, and zero monthly cost.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/KonaFit"
      }
    ],
    "img": "/uploads/projects/konafit.webp",
    "thumb": "/uploads/projects/konafit-thumb.webp",
    "pos": "top"
  },
  {
    "slug": "spordle",
    "title": "Spordle",
    "cat": "CLI TOOLS",
    "blurb": "Spanish drilling CLI with 12 game modes.",
    "year": "2023",
    "role": "Solo",
    "status": "Live",
    "stack": "python / cli",
    "problem": "Spanish practice apps live in the browser or on your phone, both places you go to get distracted. Intermediate learners who want focused daily drilling have no native terminal option.",
    "solution": "Spordle is a pure Python CLI with 12 game modes covering translation, verb conjugation, Wordle, Hangman, Anagram, Number Drill, and more. Spaced repetition revisits missed words, daily quests keep sessions purposeful, and persistent all-time stats track long-term progress, all without leaving the command line.",
    "result": "A complete Spanish drilling environment that runs anywhere Python does, requires zero third-party packages, and fits seamlessly into a terminal-first workflow.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/Spordle"
      }
    ],
    "img": "/uploads/projects/spordle.webp",
    "thumb": "/uploads/projects/spordle-thumb.webp",
    "pos": ""
  },
  {
    "slug": "omniview",
    "title": "Omniview",
    "cat": "INTERNAL TOOLS",
    "blurb": "A local, self-hosted library for saving UI and UX references.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "local app / github",
    "problem": "Good design references are everywhere online, but they're easy to lose. I'd find a great landing page or a clever interaction, then forget where I saw it a week later. Paid tools like Mobbin solve this, but I didn't want another subscription just to keep track of my own inspiration.",
    "solution": "Omniview is a local reference library I can launch instantly from my PC. Saving a reference takes seconds: drop in a screenshot and tag it with the URL, title, type, color, where I found it, style tags, and notes. Boards let me group references into collections, like portfolios or standout SaaS designs, so the right examples are easy to pull up when I need them.",
    "result": "I've already saved 30 of my favorite UI references, all searchable in one place. When I start a new design, I open Omniview instead of hunting for inspiration online. The library is backed up to GitHub, so even though it runs locally, I can access it from anywhere.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/Omniview"
      }
    ],
    "img": "/uploads/projects/omniview.webp",
    "thumb": "/uploads/projects/omniview-thumb.webp",
    "pos": ""
  },
  {
    "slug": "lazarus",
    "title": "Lazarus",
    "cat": "CLI TOOLS",
    "blurb": "Run a Hermes agent locally instead of paying for cloud hosting.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "cli / hermes agent",
    "problem": "Running an AI agent around the clock usually means paying for a cloud server every month. Leaving my main computer turned on all day and night wastes electricity, runs up my power bill, and causes extra wear and tear on my PC.",
    "solution": "Lazarus is a simple command-line tool that lets me run my Hermes agent locally on my computer. It keeps power use as low as possible to save on electricity and protect my hardware, while still keeping my agent running smoothly at all times.",
    "result": "A super simple, easy-to-use tool that lets me run and manage my Hermes agent reliably from anywhere in the world, using the PC I already own instead of paying for expensive cloud hosting.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/Lazarus"
      }
    ],
    "img": "/uploads/projects/lazarus.webp",
    "thumb": "/uploads/projects/lazarus-thumb.webp",
    "pos": ""
  },
  {
    "slug": "muscle-method",
    "title": "Muscle Method",
    "cat": "SKOOL",
    "blurb": "Skool community for naturally skinny lifters.",
    "year": "",
    "role": "Solo",
    "status": "130+ members",
    "stack": "skool / video course / ai prompts",
    "problem": "Conventional muscle-building advice is calibrated for enhanced athletes or people with unlimited gym time. It consistently fails the naturally skinny guy working two sessions a week. Generic programming produces generic results for this demographic.",
    "solution": "I built a specialized Skool community anchored around a 4-hour video course, 100+ written guides, and a 270-prompt AI library tuned to natural training protocols. Members layer in 1:1 coaching access and weekly live sessions to close the gap between content and real-world application.",
    "result": "Scaled to 130+ active members with strong retention and organic engagement. Members share progress, hold each other accountable, and report visible physical transformation within the first 8–12 weeks.",
    "links": [],
    "img": "/uploads/projects/muscle-method.webp",
    "thumb": "/uploads/projects/muscle-method-thumb.webp",
    "pos": ""
  },
  {
    "slug": "chrome-extensions",
    "title": "Chrome Extensions",
    "cat": "SKOOL",
    "blurb": "Four Chrome extensions that fill gaps in Skool.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "chrome extensions / skool",
    "problem": "Skool launched fast and the community embraced it, but the platform's native toolset was thin, operators running paid communities had no way to organize, automate, or communicate at the level the platform's pricing implied.",
    "solution": "I built four Chrome extensions that fill the gaps: Skool Utilities adds missing workflow features, Skool Todo List gives members a structured task system, Skool Templates removes repetitive copy-paste work, and Skooler AI layers in AI-assisted content generation directly inside the platform.",
    "result": "Community operators using the extensions run faster, communicate more consistently, and convert members more effectively, less time on platform busywork, more on the content and relationships that drive revenue.",
    "links": [
      {
        "t": "Skool Utilities",
        "h": "https://chromewebstore.google.com/detail/skool-utilities/pgoiddblmhofnagiignbokiehfepijco?hl=en"
      },
      {
        "t": "Skool Todo List",
        "h": "https://chromewebstore.google.com/detail/skool-todo-list/neenmpbhpkehfehcbgnpcjpgclhennoj"
      },
      {
        "t": "Skool Templates",
        "h": "https://chromewebstore.google.com/detail/skool-templates/lbgcmkkendepgfajiljhegifclfhijde"
      }
    ],
    "img": "/uploads/projects/chrome-extensions.webp",
    "thumb": "/uploads/projects/chrome-extensions-thumb.webp",
    "pos": ""
  },
  {
    "slug": "vibestylist",
    "title": "VibeStylist",
    "cat": "MOBILE",
    "blurb": "AI stylist that builds outfits from clothes you already own.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "ai stylist",
    "problem": "Most people own more clothes than they actually wear. Decision fatigue hits every morning, impulse purchases pile up, and the wardrobe grows without the wardrobe working, wasted money and a daily source of low-grade stress.",
    "solution": "VibeStylist is an AI stylist that learns your taste and builds outfits from clothes you already own. You rate the outfits, check stats on what you wear, and plan your week. The goal is a wardrobe you use instead of scroll past.",
    "result": "A fun side project that turns a closet into ready-to-wear outfit suggestions, so getting dressed takes less thought.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/VibeStylist"
      }
    ],
    "img": "/uploads/projects/vibestylist.webp",
    "thumb": "/uploads/projects/vibestylist-thumb.webp",
    "pos": ""
  },
  {
    "slug": "dailydash",
    "title": "DailyDash",
    "cat": "CLI TOOLS",
    "blurb": "Terminal overlay with water tracking, tasks and a Pomodoro timer.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "terminal overlay",
    "problem": "Knowledge workers lose focus every time they leave the terminal, checking the time pulls up a browser tab, checking the weather opens a new distraction, and hydration goals get buried under deadlines.",
    "solution": "DailyDash is a lightweight terminal overlay that keeps everything you need within arm's reach: water intake tracking, a live task list, and a Pomodoro timer, no browser required, no distractions introduced.",
    "result": "Users stay in flow longer, hit their hydration targets more consistently, and finish their work without ever leaving the terminal.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/DailyDash"
      }
    ],
    "img": "/uploads/projects/dailydash.webp",
    "thumb": "/uploads/projects/dailydash-thumb.webp",
    "pos": ""
  },
  {
    "slug": "vibestt",
    "title": "VibeSTT",
    "cat": "CLI TOOLS",
    "blurb": "Minimal speech-to-text utility for Omarchy Linux.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "whisper / omarchy linux",
    "problem": "Linux speech-to-text tools are either resource-hungry, painful to configure, or buried under features no one asked for. The overhead defeats the purpose of a utility that's supposed to get out of your way.",
    "solution": "VibeSTT is a speech-to-text tool for Omarchy. It's a small binary that transcribes fast using Whisper, and it works with no setup.",
    "result": "Users can dictate notes, capture ideas, and compose drafts without breaking their workflow, a faster input mode for anyone already living in the terminal.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/VibeSTT"
      }
    ],
    "img": "/uploads/projects/vibestt.webp",
    "thumb": "/uploads/projects/vibestt-thumb.webp",
    "pos": ""
  },
  {
    "slug": "focusnoisecli",
    "title": "FocusNoiseCLI",
    "cat": "CLI TOOLS",
    "blurb": "Ambient soundscapes and a session timer in your terminal.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "python / cli",
    "problem": "Every time you leave the terminal for background audio, you're one open tab away from a distraction spiral. Streaming sites require a browser, browsers invite context switching, and context switching is where deep work goes to die.",
    "solution": "FocusNoiseCLI plays curated ambient soundscapes like rain, coffee shops, white noise, directly in your terminal. It blends base tracks with randomized audio events for natural variety, and wraps a built-in session timer around the whole thing so you can track deep work hours without installing anything else.",
    "result": "Developers can stay in flow without context switching, track focused hours automatically, and run the tool on any platform where Python runs. It removes one more reason to open a browser.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/FocusNoiseCLI"
      }
    ],
    "img": "/uploads/projects/focusnoisecli.webp",
    "thumb": "/uploads/projects/focusnoisecli-thumb.webp",
    "pos": ""
  },
  {
    "slug": "higgsfield-studio",
    "title": "Higgsfield Studio",
    "cat": "INTERNAL TOOLS",
    "blurb": "A desktop UI for generating AI images and videos through the Higgsfield API.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "local app / higgsfield api",
    "problem": "Higgsfield offers an API you can load with credits to generate AI images from prompts on your own machine, without using their web interface. You can also connect it to AI agents like Claude or Gemini. I use Claude, but I don't always want to generate images in a Linux terminal through an LLM. It's useful, but it isn't very interactive, and it's harder to work with than a proper interface.",
    "solution": "I built a UI for the Higgsfield API around the features I use most. The Create tab lets me switch image models, adjust resolution and aspect ratio, make edits, upload references, and toggle between image and video generation. The Assets tab shows everything I've generated, with filters for date, ratio, starred, newest/oldest, model, and more, plus multi-select, bulk edit, bulk delete, click-to-edit-and-retry, and quick prompt copying. Favorites keeps starred images handy for reference or download, and Projects keeps related generations sorted together. The whole UI is keyboard-driven, with a settings menu, light and dark mode, and simple instructions for setting up an API key safely.",
    "result": "An organized, fun way to generate AI images and videos with access to every model Higgsfield provides. Since the API is much cheaper than Higgsfield's membership tiers, it saves me a lot of money too.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/higgsfield-studio"
      }
    ],
    "img": "/uploads/projects/higgsfield-studio.webp",
    "thumb": "/uploads/projects/higgsfield-studio-thumb.webp",
    "pos": ""
  },
  {
    "slug": "basecamp",
    "title": "Basecamp",
    "cat": "INTERNAL TOOLS",
    "blurb": "A self-hosted home dashboard that pulls 35+ free data sources into one page.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "local web app / free apis",
    "problem": "I'm data-driven, and the data I care about is scattered across dozens of apps, sites and providers: weather, chess ratings, listening history, calendar, crypto, reading goals, screen time on Steam. Checking each one separately eats time, and I never got a single view of everything these services know about me.",
    "solution": "Basecamp is a locally hosted dashboard that brings every source onto one page. Cards are sorted into tabs (Today, Me, World, Sky, System), and a Sources page makes adding a new feed quick, with built-in setup instructions for the ones that need API keys. A settings page lets me customize the layout, it ships with light and dark themes, and the whole thing is keyboard-driven so I rarely touch the mouse. Current sources include local weather, sunrise and sunset, moon phases, ocean tides, earthquakes, NASA space weather and rocket launches; Gmail, Google Calendar, Google Drive storage and drive time to work; chess.com, Lichess, GitHub, Steam, Trakt, Last.fm, Hardcover, YouTube, NBA and podcast feeds; crypto prices, the Fear & Greed index and my hardware wallet; local gas prices, wishlist game sales and vehicle recalls; plus Claude Code token usage, Obsidian vault stats and live PC system stats.",
    "result": "Everything I used to check across a dozen tabs and apps now lives on one fast, good-looking page that I actually enjoy opening each morning.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/basecamp"
      }
    ],
    "img": "/uploads/projects/basecamp.webp",
    "thumb": "/uploads/projects/basecamp-thumb.webp",
    "pos": ""
  },
  {
    "slug": "startpage",
    "title": "Start Page",
    "cat": "INTERNAL TOOLS",
    "blurb": "A custom Firefox start page with the info and bookmarks I actually use.",
    "year": "",
    "role": "Solo",
    "status": "In use",
    "stack": "firefox / html / css / js",
    "problem": "Firefox's default start page is plain and forgettable. It's the first thing I see every time I open the browser, and it gave me nothing I wanted.",
    "solution": "I designed my own start page with a terminal-inspired look: a greeting, live clock and date, local weather (temperature, rain chance, sunrise and sunset), a search bar with shortcuts, keyboard-mapped bookmarks grouped by category, and a random quote that refreshes on demand.",
    "result": "Now every time I open Firefox I'm greeted by a page I actually like, with everything I reach for one keystroke away. A small, personal project that makes me happy every day.",
    "links": [
      {
        "t": "GitHub",
        "h": "https://github.com/SyreeseOfficial/Start-Page"
      }
    ],
    "img": "/uploads/projects/startpage.webp",
    "thumb": "/uploads/projects/startpage-thumb.webp",
    "pos": ""
  }
];
