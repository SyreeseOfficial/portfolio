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
    "blurb": "Paste a YouTube link into the terminal and a transcript note lands in your Obsidian vault.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "terminal tool / youtube api / obsidian",
    "problem": "I don't want to take notes on every YouTube video, and some only need a summary. My routine was to copy a transcript from a website, paste it into Obsidian, then ask Claude Code to clean up the file. That was several manual steps per video.",
    "solution": "I wrote a small terminal tool. You paste a link, it pulls the transcript through the YouTube API, and it saves a named markdown file in the transcripts folder of my Obsidian vault. It has settings, configs, and batch pasting, so I can drop in ten videos at once. Afterward I have Claude Code clean up all the transcripts in one pass and turn them into summaries.",
    "result": "Going from link to summary now takes almost no manual work, which makes my note-taking much faster.",
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
    "blurb": "PS5 Pro stock alerts sent to your desktop and phone.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "terminal tool / browser ui / notifications",
    "problem": "PS5 Pros were sold out across the country while buyers waited for GTA 6. I spent days in queues and on waitlists and still couldn't find one.",
    "solution": "I built a terminal tool with a browser front end that lists the retailers selling the PS5 Pro. When any of them gets one in stock, it sends a notification to my desktop and my phone.",
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
    "blurb": "An alarm app that keeps ringing until you do your pushups.",
    "year": "",
    "role": "Solo",
    "status": "Unpublished",
    "stack": "camera / ai pose recognition",
    "problem": "Plenty of people hit snooze every morning.",
    "solution": "The app makes you do pushups on camera before the alarm turns off. AI pose recognition checks that each pushup goes low enough and that you finish the full count.",
    "result": "I never published it. I used it for a while, but snoozing isn't much of a problem for me, so it fell out of use. It was a fun project.",
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
    "blurb": "A Steam Deck plugin that picks a random game from your library.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "decky loader / steam deck",
    "problem": "My Steam Deck library has over 250 games, and I could never decide what to play.",
    "solution": "I built a Decky Loader plugin that runs natively on the Steam Deck and picks a random game from my library. Filters let me narrow the pool when I want to.",
    "result": "I play more now because I don't get stuck choosing.",
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
    "blurb": "A micro SaaS that raises Google ratings for orthodontic practices.",
    "year": "2025",
    "role": "Solo",
    "status": "Live",
    "stack": "next.js / supabase / stripe",
    "problem": "Prospective patients see reviews wherever they look, and one bad Google rating can cost an orthodontic practice tens of thousands in lost patient revenue before anyone books an appointment.",
    "solution": "I built OrthoStar to manage patient reviews. It catches unhappy patients before they post publicly and sends happy ones to Google for a five-star review. It also turns patient testimonial clips into paid ads. Everything runs from one dashboard.",
    "result": "Practices get more five-star Google reviews and fewer public complaints, and the dashboard handles it in the background.",
    "links": [],
    "img": "/uploads/projects/orthostar.webp",
    "thumb": "/uploads/projects/orthostar-thumb.webp",
    "pos": ""
  },
  {
    "slug": "hypertyper",
    "title": "HyperTyper",
    "cat": "CLI TOOLS",
    "blurb": "A typing game for the terminal, made for coding breaks.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "terminal game",
    "problem": "Developers need a mental reset between deep work sessions. Leaving the terminal to play a game means switching context, which is exactly what a break should undo.",
    "solution": "HyperTyper is a typing game that runs in your terminal. It has several challenge modes and saves your high scores between sessions, so you can take a break without leaving the command line.",
    "result": "Developers can unwind, build typing speed, and get back to work without switching windows or losing their train of thought.",
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
    "blurb": "A dashboard of tools I built at my job to speed up daily tasks and help the business earn more.",
    "year": "2024",
    "role": "Solo",
    "status": "In use",
    "stack": "react / node / postgres",
    "problem": "Manual workflows cost time and money at scale. Expenses tracked ad hoc meant missed deductions. Refund requests handled from memory meant slower cash recovery. Donations logged in batches meant write-offs got captured at year end instead of when the gift happened.",
    "solution": "I built an internal dashboard with three tools. A receipt and expense tracker maximizes tax deductions, a credit request workflow speeds up refunds, and a donation logger captures each write-off when it happens.",
    "result": "The business now captures more deductions and recovers credits faster, and one tool replaces a handful of manual processes. Tasks that took minutes now take seconds.",
    "links": [],
    "img": "/uploads/projects/routecommand.webp",
    "thumb": "/uploads/projects/routecommand-thumb.webp",
    "pos": ""
  },
  {
    "slug": "konafit",
    "title": "KonaFit",
    "cat": "MOBILE",
    "blurb": "A custom Android workout app built around how I train, with no paywalls.",
    "year": "2024",
    "role": "Solo",
    "status": "Personal use",
    "stack": "kotlin / compose / room",
    "problem": "The best fitness apps lock their most useful features behind paywalls and split the rest across several subscriptions. A complete workout setup ends up costing more per month than a gym membership.",
    "solution": "I built an Android workout app around how I train. I took the strongest features from every app I'd paid for, dropped what I never used, and put it all in one tool I want to open at the gym. It's free, permanently.",
    "result": "I open it every session because it fits how I train. It has what I need and nothing else, and it costs nothing per month.",
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
    "blurb": "A Spanish drilling CLI with 12 game modes.",
    "year": "2023",
    "role": "Solo",
    "status": "Live",
    "stack": "python / cli",
    "problem": "Spanish practice apps live in the browser or on your phone, which are the places you go to get distracted. Intermediate learners who want focused daily drilling have no native terminal option.",
    "solution": "Spordle is a pure Python CLI with 12 game modes, including translation, verb conjugation, Wordle, Hangman, Anagram, and Number Drill. Spaced repetition brings back the words you missed, daily quests give each session a goal, and all-time stats track your progress. It all happens in the command line.",
    "result": "It runs anywhere Python does, needs no third-party packages, and fits a terminal-first workflow.",
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
    "problem": "Good design references are everywhere online and easy to lose. I'd find a great landing page or a clever interaction, then forget where I saw it a week later. Paid tools like Mobbin solve this, but I didn't want another subscription to keep track of my own inspiration.",
    "solution": "Omniview is a local reference library I can launch instantly from my PC. Saving a reference takes seconds: I drop in a screenshot and tag it with the URL, title, type, color, source, style tags, and notes. Boards group references into collections, such as portfolios or standout SaaS designs, so the right examples are easy to pull up.",
    "result": "I've saved 30 of my favorite UI references so far, all searchable in one place. When I start a new design, I open Omniview instead of hunting for inspiration online. The library is backed up to GitHub, so I can reach it from anywhere even though it runs locally.",
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
    "blurb": "Run a Hermes agent on your own machine instead of paying for cloud hosting.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "cli / hermes agent",
    "problem": "Running an AI agent around the clock usually means paying for a cloud server every month. Leaving my main computer on day and night wastes electricity, raises my power bill, and wears out my PC.",
    "solution": "Lazarus is a command-line tool that runs my Hermes agent locally on my computer. It keeps power use as low as possible to save electricity and protect the hardware, and the agent stays up the whole time.",
    "result": "It's simple to use, and I can run and manage my Hermes agent reliably from anywhere in the world. It uses the PC I already own, so there's no cloud hosting bill.",
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
    "blurb": "A Skool community for naturally skinny lifters.",
    "year": "",
    "role": "Solo",
    "status": "130+ members",
    "stack": "skool / video course / ai prompts",
    "problem": "Most muscle-building advice assumes enhanced athletes or people with unlimited gym time. It fails the naturally skinny guy who trains twice a week, and generic programming gives that guy generic results.",
    "solution": "I built a Skool community around a 4-hour video course, 100+ written guides, and a library of 270 AI prompts tuned to natural training. Members can add 1:1 coaching and weekly live sessions to turn the content into results.",
    "result": "The community has grown to 130+ active members with strong retention and organic engagement. Members share progress and hold each other accountable, and many report visible changes within the first 8 to 12 weeks.",
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
    "problem": "Skool launched fast and communities took to it, but its built-in tools were thin. Operators running paid communities couldn't organize, automate, or communicate at the level the pricing implied.",
    "solution": "I built four Chrome extensions. Skool Utilities adds missing workflow features, Skool Todo List gives members a structured task system, Skool Templates removes repetitive copy-pasting, and Skooler AI generates content with AI inside the platform.",
    "result": "Community operators who use them work faster, communicate more consistently, and convert more members. They spend less time on platform busywork and more on the content and relationships that bring in revenue.",
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
    "blurb": "An AI stylist that builds outfits from clothes you already own.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "ai stylist",
    "problem": "Most people own more clothes than they wear. Every morning brings decision fatigue, impulse purchases pile up, and the wardrobe keeps growing without getting used. That wastes money and adds a small daily stress.",
    "solution": "VibeStylist is an AI stylist that learns your taste and builds outfits from clothes you already own. You rate the outfits, check stats on what you wear, and plan your week. The goal is a wardrobe you use instead of scroll past.",
    "result": "It's a fun side project that turns a closet into ready-to-wear outfit suggestions, so getting dressed takes less thought.",
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
    "blurb": "A terminal overlay with water tracking, tasks, and a Pomodoro timer.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "terminal overlay",
    "problem": "Every trip out of the terminal costs focus. Checking the time opens a browser tab, checking the weather opens another distraction, and hydration goals get buried under deadlines.",
    "solution": "DailyDash is a lightweight terminal overlay that keeps water intake tracking, a live task list, and a Pomodoro timer within reach. You don't need a browser, so nothing pulls you away.",
    "result": "Users stay focused longer, hit their hydration targets more often, and finish their work without leaving the terminal.",
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
    "blurb": "A minimal speech-to-text utility for Omarchy Linux.",
    "year": "",
    "role": "Solo",
    "status": "",
    "stack": "whisper / omarchy linux",
    "problem": "Linux speech-to-text tools tend to be resource-hungry, painful to configure, or loaded with features nobody asked for. That overhead defeats the point of a utility that should stay out of your way.",
    "solution": "VibeSTT is a speech-to-text tool for Omarchy. It's a small binary that transcribes quickly with Whisper and works without any setup.",
    "result": "Users can dictate notes, capture ideas, and write drafts without breaking their workflow. It's a faster way to type for anyone who already lives in the terminal.",
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
    "problem": "Leaving the terminal for background audio puts you one open tab from a distraction spiral. Streaming sites need a browser, browsers invite context switching, and context switching kills deep work.",
    "solution": "FocusNoiseCLI plays ambient soundscapes such as rain, coffee shops, and white noise right in your terminal. It mixes base tracks with randomized audio events so the sound varies naturally, and a built-in session timer tracks your deep work hours without any extra install.",
    "result": "Developers can stay focused without switching context, and the tool logs focused hours automatically. It runs anywhere Python does, and it removes one more reason to open a browser.",
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
    "problem": "Higgsfield has an API you can fund with credits to generate AI images from prompts on your own machine, without their web interface. You can also connect it to AI agents like Claude or Gemini. I use Claude, but I don't always want to generate images through an LLM in a Linux terminal. It works, but it isn't interactive and it's harder to use than a proper interface.",
    "solution": "I built a UI for the Higgsfield API around the features I use most. The Create tab lets me switch image models, adjust resolution and aspect ratio, make edits, upload references, and toggle between image and video generation. The Assets tab shows everything I've generated, with filters for date, ratio, starred, newest or oldest, model, and more. It also supports multi-select, bulk edit, bulk delete, click-to-edit-and-retry, and quick prompt copying. Favorites keeps starred images handy for reference or download, and Projects keeps related generations together. The UI is keyboard-driven and has a settings menu, light and dark mode, and simple instructions for setting up an API key safely.",
    "result": "I get an organized, fun way to generate AI images and videos with every model Higgsfield offers. The API costs far less than Higgsfield's membership tiers, so it saves me money too.",
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
    "problem": "I like data, and mine is scattered across dozens of apps and sites: weather, chess ratings, listening history, calendar, crypto, reading goals, Steam screen time. Checking each one separately takes time, and I never had one view of everything these services know about me.",
    "solution": "Basecamp is a locally hosted dashboard that puts every source on one page. Cards are sorted into tabs (Today, Me, World, Sky, System), and a Sources page makes adding a feed quick, with built-in setup instructions for the ones that need API keys. A settings page controls the layout, there are light and dark themes, and the keyboard drives everything, so I rarely touch the mouse. Current sources include local weather, sunrise and sunset, moon phases, ocean tides, earthquakes, NASA space weather, and rocket launches. It also pulls Gmail, Google Calendar, Google Drive storage, and drive time to work; chess.com, Lichess, GitHub, Steam, Trakt, Last.fm, Hardcover, YouTube, NBA, and podcast feeds; crypto prices, the Fear & Greed index, and my hardware wallet; local gas prices, wishlist game sales, and vehicle recalls; and Claude Code token usage, Obsidian vault stats, and live PC system stats.",
    "result": "What I used to check across a dozen tabs and apps now sits on one fast page that I enjoy opening each morning.",
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
    "blurb": "A custom Firefox start page with the info and bookmarks I use.",
    "year": "",
    "role": "Solo",
    "status": "In use",
    "stack": "firefox / html / css / js",
    "problem": "Firefox's default start page is plain and forgettable. It's the first thing I see whenever I open the browser, and it showed me nothing I wanted.",
    "solution": "I designed my own start page with a terminal-inspired look. It has a greeting, a live clock and date, local weather (temperature, rain chance, sunrise and sunset), a search bar with shortcuts, keyboard-mapped bookmarks grouped by category, and a random quote that refreshes on demand.",
    "result": "Opening Firefox now shows me a page I like, with everything I reach for one keystroke away. It's a small, personal project that makes me happy every day.",
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
