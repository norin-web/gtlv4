// Every brand / app fact lives here, so names, IDs and emails are never duplicated.
// Facts come only from the app design (screens and paywall). The app is not in the
// App Store yet (iTunes lookup for the ID returns 0 results, 2026-11-26): after
// release, refresh `app` from https://itunes.apple.com/lookup?id=6831627349 and
// check the facts against the live listing. When the owner's Privacy Policy and
// Terms arrive, check every claim below against them.

export const site = {
  brand: "Getting Out",
  email: "evaristo@verastegui.click",
  year: new Date().getFullYear(),
  operator: "Evaristo Verastegui",
  tagline: "Messages to family, through the facility.",
};

export const app = {
  id: "6831627349",
  url: "https://apps.apple.com/app/id6831627349",
  platform: "iPhone",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/app", label: "The app" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

// Tiles under the hero: one per part of the app.
export const parts = [
  { icon: "messages", label: "Messages" },
  { icon: "requests", label: "Requests" },
  { icon: "search", label: "Add contact" },
  { icon: "sparkles", label: "Writing help" },
  { icon: "star", label: "Favorites" },
] as const;

export const features = [
  {
    tag: "Messages",
    title: "Every conversation in one list",
    text: "Filter by All, Unread or Favorites and see which letters are still waiting for facility review.",
    img: "/images/screen-messages.webp",
  },
  {
    tag: "Requests",
    title: "Where each request stands",
    text: "Follow a contact request from Sent to Facility review to Approved. Cancel it or remind the facility.",
    img: "/images/screen-requests.webp",
  },
  {
    tag: "Writing help",
    title: "A draft when words are hard",
    text: "Ask for a draft, make it shorter or warmer, then put it into the chat.",
    img: "/images/screen-writing.webp",
  },
];

// The order the app walks you through ("Add contact", steps 1–3, then the chat).
export const steps = [
  {
    n: "01",
    title: "Choose the facility",
    meta: "Add contact, step 1 of 3",
    items: [
      ["Search facility or city", "Type a facility name or the city it’s in."],
      ["Pick it from the list", "Each facility shows its city and state."],
    ],
  },
  {
    n: "02",
    title: "Find the person",
    meta: "Add contact, step 2 of 3",
    items: [
      ["Search by name", "Type the person’s name."],
      ["Check the result", "It shows the inmate ID and housing unit."],
    ],
  },
  {
    n: "03",
    title: "Send a contact request",
    meta: "Add contact, step 3 of 3",
    items: [
      ["Add your relationship", "For example, Sister. It’s part of the request."],
      ["Follow the status", "Sent, then Facility review, then Approved. Cancel it or remind the facility."],
    ],
  },
  {
    n: "04",
    title: "Start writing",
    meta: "Once the request is approved",
    items: [
      ["Write a message", "The chat notes that messages are reviewed and recorded by the facility."],
      ["Use writing help", "Get a draft, make it shorter or warmer, and put it into the chat."],
    ],
  },
] as const;

export const rules = [
  ["Reviewed and recorded", "The chat says it plainly: messages are reviewed and recorded by the facility."],
  ["Statuses you can see", "Requests and letters show when they’re waiting for facility review."],
  ["Read receipts", "A sent letter shows when it was read."],
];

// "A closer look" strip
export const screens = [
  { img: "/images/screen-messages.webp", label: "Messages" },
  { img: "/images/screen-chat.webp", label: "Chat" },
  { img: "/images/screen-requests.webp", label: "Requests" },
  { img: "/images/screen-facility.webp", label: "Add contact" },
];

// App page — tabs that swap the phone screen
export const tour = [
  { tag: "Messages", title: "All your conversations", text: "One list with the facility under each name, the last line of the letter and the day it came. Filter by All, Unread or Favorites.", img: "/images/screen-messages.webp" },
  { tag: "Chat", title: "Letters with their status", text: "The chat shows when a letter was read or is waiting for facility review, and offers short replies to start from.", img: "/images/screen-chat.webp" },
  { tag: "Writing help", title: "A draft when you need one", text: "Describe what you want to say. Make the draft shorter or warmer, then put it into the chat.", img: "/images/screen-writing.webp" },
  { tag: "AI chats", title: "Drafts you can come back to", text: "Earlier writing sessions are kept by day, with who each one was for.", img: "/images/screen-aihistory.webp" },
  { tag: "Requests", title: "Every request, step by step", text: "Sent, Facility review and Approved, with the inmate ID and relationship on the card.", img: "/images/screen-requests.webp" },
  { tag: "Add contact", title: "Facility, person, request", text: "Pick the facility, find the person by name, send the request.", img: "/images/screen-facility.webp" },
  { tag: "Favorites", title: "The people you write to most", text: "A Favorites tab at the top of Messages.", img: "/images/screen-favorites.webp" },
];

export const specs: [string, string][] = [
  ["Made for", "iPhone"],
  ["Developer", site.operator],
  ["Payment", "In-app purchase through Apple"],
  ["Language", "English"],
];

export const faq = [
  { q: "How do I add someone?", c: "Add someone", a: "Tap the plus button, choose the facility, find the person by name and send a contact request with your relationship." },
  { q: "Why is my request still pending?", c: "Request still pending", a: "The facility reviews every contact request. The Requests tab shows where yours is: Sent, Facility review or Approved. You can cancel it or send the facility a reminder." },
  { q: "Who can read my messages?", c: "Who reads messages", a: "Messages are reviewed and recorded by the facility. The chat says so at the top, so write with that in mind." },
  { q: "What does writing help do?", c: "Writing help", a: "It drafts a message from a short description. Ask for changes, make it shorter or warmer, then tap Use in chat to put it into the message box." },
  { q: "Why hasn’t my letter arrived yet?", c: "Letter not arrived", a: "A letter can wait in facility review. The chat shows Waiting for facility review until it moves on, and Read once it has been read." },
  { q: "How do I cancel my subscription?", c: "Cancel subscription", a: "In-app subscriptions are managed by Apple. Open Settings on your iPhone, tap your name, then Subscriptions." },
  { q: "How do I restore a purchase?", c: "Restore a purchase", a: "Open the paywall in the app and tap Restore, signed in with the Apple ID you paid with." },
  { q: "How do I keep someone at the top?", c: "Keep someone on top", a: "Use the Favorites tab on the Messages screen." },
];
