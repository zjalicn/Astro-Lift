import { ActivityIcon, ClockIcon, FilterIcon, WavesIcon } from "lucide-react";

export const PLUGIN_NAME = "Oxide";

export const FEATURES = [
  {
    icon: WavesIcon,
    title: "Distortion",
    description: "Five unique algorithms",
    delay: 0,
  },
  {
    icon: ClockIcon,
    title: "Delay",
    description: "Tempo-synced echoes",
    delay: 0.2,
  },
  {
    icon: FilterIcon,
    title: "Filters",
    description: "Shape your sound",
    delay: 0.4,
  },
  {
    icon: ActivityIcon,
    title: "Pulse",
    description: "Volume pulsing effect",
    delay: 0.6,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Oxide has become an essential part of my sound design toolkit. The distortion algorithms are incredible!",
    author: "Alex Johnson, Producer",
    delay: 0,
  },
  {
    quote:
      "The most versatile delay plugin I've ever used. Love the filtering options and the zero latency is amazing.",
    author: "Sarah Chen, Mixing Engineer",
    delay: 0.2,
  },
  {
    quote:
      "The pulse effect breathed new life into my static loops. Oxide has completely changed how I approach rhythm in my productions.",
    author: "Marcus Rivera, Electronic Artist",
    delay: 0.4,
  },
  {
    quote:
      "I love how intuitive the interface is. The real-time oscilloscope gives me instant visual feedback that's incredibly helpful during mixing.",
    author: "Emma Taylor, Audio Engineer",
    delay: 0.6,
  },
  {
    quote:
      "The presets alone are worth the price. I've been able to get sounds I've been chasing for years with just a few clicks.",
    author: "David Wilson, Film Composer",
    delay: 0.8,
  },
];

export const KEY_FEATURES = [
  "0ms latency",
  "Five distortion algorithms",
  "Delaying echoes synced by frequency (hz) or note values",
  "Lowpass, Highpass, Bandpass filters with resonance control",
  "Time synced volume pulsing effect",
  "Real-time oscilloscope to display output audio",
  "100+ presets",
  "Input/Output gain staging",
];

export const SPECIFICATIONS = [
  "VST3, AU, and AAX formats",
  "Windows 10/11 & macOS 10.15+",
  "64-bit only",
  "4GB RAM minimum",
  "500MB disk space",
];
