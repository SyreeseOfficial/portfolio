import { ToolCategory, ToolItem, RoadmapItem, BentoItem } from './types';
import {
  Users,
  MousePointer2,
  Dumbbell,
  Star,
  Briefcase,
  Sun,
  Tractor,
  DollarSign
} from 'lucide-react';
import React from 'react';

export const ARTISTS = [
  "Fuerza Regida", "BigXthaPlug", "Bryson Tiller", "Kendrick Lamar",
  "Neton Vega", "Victor Mendivil", "Leon Thomas", "4batz",
  "Shoreline Mafia", "Grupo Firme", "Icewear Vezzo", "K CAMP",
  "Peso Pluma", "Odeal", "Future", "Brent Faiyaz"
];

export const TOOLS: ToolItem[] = [
  { name: "GIMP", category: ToolCategory.PhotoEditing, url: "https://www.gimp.org/" },
  { name: "Lightroom", category: ToolCategory.PhotoEditing, url: "https://lightroom.adobe.com/" },
  { name: "Canva", category: ToolCategory.PhotoEditing, url: "https://www.canva.com/" },

  { name: "OBS Studio", category: ToolCategory.ScreenRecording, url: "https://obsproject.com/" },

  { name: "Kindle Oasis", category: ToolCategory.Fun, url: "https://www.reddit.com/r/kindle/comments/1g5aaze/kindle_oasis_is_officially_dead/" },
  { name: "MonkeyType", category: ToolCategory.Fun, url: "https://monkeytype.com/" },
  { name: "Chess.com", category: ToolCategory.Fun, url: "https://www.chess.com/" },
  { name: "Lichess", category: ToolCategory.Fun, url: "https://lichess.org/" },
  { name: "SteamDeck", category: ToolCategory.Fun, url: "https://www.steamdeck.com/" },
  { name: "Vibe Coding", category: ToolCategory.Fun, url: "https://twitter.com/search?q=vibe%20coding" },
  { name: "Letterboxd", category: ToolCategory.Fun, url: "https://letterboxd.com/" },

  { name: "Hyprsunset", category: ToolCategory.Focus, url: "https://wiki.hypr.land/Hypr-Ecosystem/hyprsunset/" },
  { name: "Todoist", category: ToolCategory.Focus, url: "https://todoist.com/" },
  { name: "ASoftMurmur", category: ToolCategory.Focus, url: "https://asoftmurmur.com/" },
  { name: "Bose QC Ultras", category: ToolCategory.Focus, url: "https://www.youtube.com/watch?v=VK2TpQVh0Cc&pp=ygUmYm9zZSBxdWlldGNvbWZvcnQgdWx0cmEgMm5kIGdlbiByZXZpZXc%3D" },
  { name: "Pomodoro", category: ToolCategory.Focus, url: "https://pomofocus.io/" },

  { name: "Field Notes", category: ToolCategory.Writing, url: "https://fieldnotesbrand.com/" },
  { name: "LAMY Fountain Pen", category: ToolCategory.Writing, url: "https://www.lamy.com/" },
  { name: "Leuchtturm Notebooks", category: ToolCategory.Writing, url: "https://www.leuchtturm1917.com/" },
  { name: "Pentel Energel 0.7 Pen", category: ToolCategory.Writing, url: "https://www.pentel.com/products/energel-pro-permanent-gel-pen?_pos=3&_sid=7ba77a38c&_ss=r" },

  { name: "Obsidian.md", category: ToolCategory.TechPicks, url: "https://obsidian.md/" },
  { name: "Gemini", category: ToolCategory.TechPicks, url: "https://gemini.google.com/" },
  { name: "Antigravity", category: ToolCategory.TechPicks, url: "https://antigravity.google/" },
  { name: "Arch Linux", category: ToolCategory.TechPicks, url: "https://archlinux.org/" },
  { name: "Zen Browser", category: ToolCategory.TechPicks, url: "https://zen-browser.app/" },
  { name: "Ghostty", category: ToolCategory.TechPicks, url: "https://ghostty.org/" },
  { name: "Bitwarden", category: ToolCategory.TechPicks, url: "https://bitwarden.com/" },
  { name: "Omarchy", category: ToolCategory.TechPicks, url: "https://omarchy.org/" },
  { name: "Hyprland", category: ToolCategory.TechPicks, url: "https://hyprland.org/" },
  { name: "KDE", category: ToolCategory.TechPicks, url: "https://kde.org/" },
  { name: "LocalSend", category: ToolCategory.TechPicks, url: "https://localsend.org/" },
];

export const ROADMAP: RoadmapItem[] = [
  {
    id: '1',
    title: "Build Something To $10k MRR",
    description: "Make something useful that people need.",
    date: "Current",
    icon: 'mrr'
  },
  {
    id: '2',
    title: "Replace My 9-5",
    description: "Transition to full-time independent building.",
    date: "2026 Goal",
    icon: 'job'
  },
  {
    id: '3',
    title: "Move My Family Somewhere Warmer",
    description: "Get out of this sad Seattle rain.",
    date: "Future",
    icon: 'family'
  },
  {
    id: '4',
    title: "Build A Mid Price SaaS To $100k MRR",
    description: "Scale a B2B solution to significant revenue.",
    date: "Long Term",
    icon: 'mrr'
  },
  {
    id: '5',
    title: "Buy A Farm",
    description: "Live out our days tending sheep.",
    date: "The Dream",
    icon: 'farm'
  },
];

export const BENTO_ITEMS: BentoItem[] = [
  {
    id: '1',
    title: "Skool Community",
    subtitle: "Muscle Method",
    description: (
      <>
        Working on a community for men to get jacked called <a href="https://www.skool.com/muscle-method-5291/about" target="_blank" rel="noopener noreferrer" className="text-[#ffbd59] hover:text-[#ff3131] transition-colors font-medium">Muscle Method</a>.
      </>
    ),
    size: '1x1',
    type: 'community'
  },
  {
    id: '2',
    title: "Chrome Extensions",
    subtitle: "Skool Productivity",
    description: (
      <>
        Creating extensions to enhance the Skool platform experience, including{" "}
        <a href="https://chromewebstore.google.com/detail/skool-templates/lbgcmkkendepgfajiljhegifclfhijde" target="_blank" rel="noopener noreferrer" className="text-[#ffbd59] hover:text-[#ff3131] transition-colors font-medium">Skool Templates</a>,{" "}
        <a href="https://chromewebstore.google.com/detail/skool-utilities/pgoiddblmhofnagiignbokiehfepijco" target="_blank" rel="noopener noreferrer" className="text-[#ffbd59] hover:text-[#ff3131] transition-colors font-medium">Skool Utilities</a>,{" "}
        <a href="https://chromewebstore.google.com/detail/skool-todo-list/neenmpbhpkehfehcbgnpcjpgclhennoj" target="_blank" rel="noopener noreferrer" className="text-[#ffbd59] hover:text-[#ff3131] transition-colors font-medium">Skool Todo List</a>, and{" "}
        <span className="text-white/40 cursor-help" title="Coming Soon">Skooler AI</span>.
      </>
    ),
    size: '1x2',
    type: 'extension'
  },
  {
    id: '3',
    title: "Boxing",
    subtitle: "Sweet Science",
    description: (
      <>
        Learning a new skill after years of basketball and weightlifting. Unleashing my inner <a href="https://www.youtube.com/watch?v=bz2Rq__GnCw&t=5s" target="_blank" rel="noopener noreferrer" className="text-[#ffbd59] hover:text-[#ff3131] transition-colors font-medium">Manny Pacquiao</a>.
      </>
    ),
    size: '1x2',
    type: 'boxing'
  },
  {
    id: '4',
    title: "Back In Shape",
    subtitle: "The Cut",
    description: (
      <>
        <a href="https://www.youtube.com/watch?v=6Y2E5ar6-O4" target="_blank" rel="noopener noreferrer" className="text-[#ffbd59] hover:text-[#ff3131] transition-colors font-medium">Trying</a> to cut back down to 175lb at 15% bodyfat.
      </>
    ),
    size: '1x1',
    type: 'fitness'
  },
  {
    id: '5',
    title: "VibeSTT",
    subtitle: "Linux Voice Typer",
    description: (
      <>
        A minimalist, high-performance <a href="https://github.com/SyreeseOfficial/VibeSTT" target="_blank" rel="noopener noreferrer" className="text-[#ffbd59] hover:text-[#ff3131] transition-colors font-medium">speech-to-text</a> utility for the Omarchy Linux distribution.
      </>
    ),
    size: '1x1',
    type: 'voice'
  },
  {
    id: '6',
    title: "OrthoStar",
    subtitle: "Reputation SaaS",
    description: (
      <>
        Working on a <a href="https://orthostar.org/" target="_blank" rel="noopener noreferrer" className="text-[#ffbd59] hover:text-[#ff3131] transition-colors font-medium">SaaS</a> that will help orthodontists block 1-4 star reviews, get more 5 star reviews, and get video testimonials from happy patients.
      </>
    ),
    size: '1x2',
    type: 'review'
  },
];

export const ICONS = {
  mrr: <DollarSign className="w-5 h-5 text-[#ff3131]" />,
  job: <Briefcase className="w-5 h-5 text-[#ffbd59]" />,
  family: <Sun className="w-5 h-5 text-[#ff3131]" />,
  farm: <Tractor className="w-5 h-5 text-[#ffbd59]" />,
};