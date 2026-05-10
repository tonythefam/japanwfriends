import tonyAvatar from "./assets/gallery/tony.jpg";
import natalieAvatar from "./assets/gallery/natalie.jpg";
import yujingAvatar from "./assets/gallery/yujing.jpg";
import zhaoyangAvatar from "./assets/gallery/zhaoyang.jpg";
import anthonyAvatar from "./assets/gallery/anthony.jpg";
import ashleyAvatar from "./assets/gallery/ashley.jpg";
import paulAvatar from "./assets/gallery/paul.jpg";
import leequanAvatar from "./assets/gallery/leequan.jpg";
import jianshengAvatar from "./assets/gallery/jiansheng.jpg";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Menu,
  X,
  Plane,
  Hotel,
  Wallet,
  MapPin,
  WalletCards,
  CalendarDays,
  BedDouble,
  ReceiptText,
  Landmark,
  Home,
  Sparkles,
  Camera,
  Images,
  Film,
  Aperture,
} from "lucide-react";
import "./styles.css";

const heroImages = [
  "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2000&auto=format&fit=crop",
];

const dayCoverPhotos = {
  1: [
    "https://kyototravelandtours.com/wp-content/uploads/sites/kyoto/kyoto-image.jpg",
    "https://assets.team-lab.com/b5EBo9Uo-OK6SM09ZTkEZQ/a85329c6-aef2-47d1-3de1-ce2b8bcf5200/width=1920,quality=80",
  ],
  2: [
    "https://4kwallpapers.com/images/wallpapers/arashiyama-bamboo-2880x1800-15688.jpg",
    "https://asset.japan.travel/image/upload/v1645169091/kyoto/M_00187_001.jpg",
  ],
  3: [
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3lvdG98ZW58MHx8MHx8fDA%3D",
    "https://i.redd.it/tqt2ewnd9m901.jpg",
    "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  4: [
    "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=1800&auto=format&fit=crop",
  ],
  5: [
    "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1800&auto=format&fit=crop",
  ],
  6: [
    "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?q=80&w=1800&auto=format&fit=crop",
  ],
  7: [
    "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=1800&auto=format&fit=crop",
  ],
  8: [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1800&auto=format&fit=crop",
  ]
};

const tripDays = [
  {
    day: 1,
    date: "10 Jun 2026 · Wednesday",
    city: "Kyoto",
    title: "Arrival, teamLab & Gion Evening",
    mood: "Soft arrival day with art, ramen and an evening walk.",
    highlights: [
      "teamLab Kyoto · 3:30 PM",
      "Dinner at Gion / Kawaramachi",
      "Honke Daiichi Asahi Honten",
      "Ichiran Ramen",
    ],
  },
  {
    day: 2,
    date: "11 Jun 2026 · Thursday",
    city: "Kyoto",
    title: "Arashiyama & Daikaku-ji Temple",
    mood: "Bamboo forest, temple scenery and quiet northwest Kyoto.",
    highlights: [
      "Arashiyama Bamboo Forest",
      "Daikaku-ji Temple",
      "Hikiniku to Come reservation",
      "Six Dews matcha dessert",
    ],
  },
  {
    day: 3,
    date: "12 Jun 2026 · Friday",
    city: "Kyoto",
    title: "Kimono Day at Kiyomizu-dera",
    mood: "Traditional streets, temple views and Nishiki Market snacks.",
    highlights: [
      "Kiyomizu-dera Temple",
      "Kimono rental",
      "Nishiki Market",
      "Japanese Noodle ISSUN BOUSH",
    ],
  },
  {
    day: 4,
    date: "13 Jun 2026 · Saturday",
    city: "Kyoto",
    title: "Nara Day Trip or Fushimi Inari",
    mood: "A flexible day for hiking, shrines or a short out-of-city escape.",
    highlights: [
      "Fushimi Inari Taisha",
      "Optional Nara day trip",
      "Early morning start",
      "Half-day shrine walk",
    ],
  },
  {
    day: 5,
    date: "14 Jun 2026 · Sunday",
    city: "Osaka",
    title: "Kyoto to Osaka, Castle & Dotonbori",
    mood: "Transfer day with Osaka Castle, Umeda and neon food streets.",
    highlights: [
      "Leave hotel by 8:30 AM",
      "JR Umeda luggage deposit",
      "Osaka Castle",
      "Namba / Dotonbori night walk",
    ],
  },
  {
    day: 6,
    date: "15 Jun 2026 · Monday",
    city: "Osaka",
    title: "Shinsekai, Tsutenkaku & Shinsaibashi",
    mood: "Retro Osaka in the day, shopping streets at night.",
    highlights: [
      "Shinsekai",
      "Tsutenkaku Tower",
      "Shinsaibashi shopping",
      "Night city walk",
    ],
  },
  {
    day: 7,
    date: "16 Jun 2026 · Tuesday",
    city: "Osaka",
    title: "Free & Easy Day",
    mood: "Choose between aquarium, theme park or slow exploration.",
    highlights: [
      "Osaka Aquarium Kaiyukan",
      "Universal Studios Osaka",
      "Flexible shopping",
      "Café / food hunting",
    ],
  },
  {
    day: 8,
    date: "17 Jun 2026 · Wednesday",
    city: "Osaka → KIX",
    title: "Airport Morning",
    mood: "A calm goodbye morning before the 11:05 AM flight.",
    highlights: [
      "Go to airport",
      "Flight at 11:05 AM",
      "Breakfast if time allows",
      "Start work after trip",
    ],
  },
];

const placeInfo = {
  "teamLab Kyoto · 3:30 PM": {
    type: "major",
    title: "teamLab Kyoto",
    desc: "An immersive digital art experience with light, movement and interactive installations.",
    hours: "9:00 AM - 9:30 PM",
    budget: "RM113",
    address: "21-5 Higashikujo Higashiiwamotocho, Minami Ward, Kyoto, 601-8006, Japan",
    map: "https://maps.app.goo.gl/avZJaAaKBuPMwKxE9",
    images: [
      "https://assets.team-lab.com/b5EBo9Uo-OK6SM09ZTkEZQ/a85329c6-aef2-47d1-3de1-ce2b8bcf5200/width=1920,quality=80",
      "https://assets.team-lab.com/b5EBo9Uo-OK6SM09ZTkEZQ/3900183c-a549-4a0a-b673-dbf33d6c1000/width=1920,quality=80",
      "https://assets.team-lab.com/b5EBo9Uo-OK6SM09ZTkEZQ/90e343c6-f3bf-427d-53e0-1169a2fbc500/width=1920,quality=80",
      "https://assets.team-lab.com/b5EBo9Uo-OK6SM09ZTkEZQ/8ab537cc-fe7b-48e5-a284-ef5ed954f800/width=1920,quality=80",
    ],
  },
  "Dinner at Gion / Kawaramachi": {
    type: "minor",
    title: "Gion / Kawaramachi Dinner Area",
    desc: "Good evening area for food, shopping streets and Kyoto night atmosphere.",
    hours: "Depends on restaurant",
    budget: "Approx. ¥1,500–¥4,000 per person",
    address: "Gion / Kawaramachi, Kyoto",
    map: "https://maps.app.goo.gl/J3pru94KS8LtwTPP8",
  },
  "Honke Daiichi Asahi Honten": {
    type: "minor",
    title: "Honke Daiichi Asahi Honten",
    desc: "Popular ramen shop near Kyoto Station, useful as a lunch option after arrival.",
    hours: "Check latest opening hours",
    budget: "Approx. ¥1,000–¥1,500 per person",
    address: "Near Kyoto Station, Kyoto",
    map: "https://maps.app.goo.gl/aqTikKtNf1dba6JUA",
  },
  "Ichiran Ramen": {
    type: "minor",
    title: "Ichiran Ramen",
    desc: "Well-known ramen chain with individual booth-style seating.",
    hours: "Varies by branch",
    budget: "Approx. ¥1,000–¥2,000 per person",
    address: "Kyoto, Japan",
    map: "https://maps.app.goo.gl/J3pru94KS8LtwTPP8",
  },
  "Arashiyama Bamboo Forest": {
    type: "major",
    title: "Arashiyama Bamboo Forest",
    desc: "A scenic bamboo grove in northwest Kyoto. Best visited early morning to avoid crowds.",
    hours: "Open outdoor area; best visited early morning",
    budget: "Free",
    address: "Arashiyama, Kyoto",
    map: "https://maps.app.goo.gl/pZJdWWGueULytFCo8",
    images: [
      "https://4kwallpapers.com/images/wallpapers/arashiyama-bamboo-2880x1800-15688.jpg",
    ],
  },
  "Daikaku-ji Temple": {
    type: "minor",
    title: "Daikaku-ji Temple",
    desc: "A peaceful temple near Arashiyama, good for a slower Kyoto temple experience.",
    hours: "Check latest temple hours",
    budget: "Approx. ¥500–¥800",
    address: "Kyoto, Japan",
    map: "https://maps.app.goo.gl/LCPcZkbKrS7vXQPWA",
  },
  "Hikiniku to Come reservation": {
    type: "minor",
    title: "Hikiniku to Come",
    desc: "Hamburger rice restaurant. Your note says to be there around 7:30 AM to get a dinner reservation.",
    hours: "Reservation timing to be confirmed",
    budget: "Approx. ¥1,500–¥3,000 per person",
    address: "Kyoto, Japan",
    map: "https://maps.app.goo.gl/qtrpnrAcmZptVMKv7",
  },
  "Six Dews matcha dessert": {
    type: "minor",
    title: "Six Dews",
    desc: "Dessert place for matcha and sweet treats.",
    hours: "Check latest opening hours",
    budget: "Approx. ¥800–¥1,800 per person",
    address: "Kyoto, Japan",
    map: "https://maps.app.goo.gl/Z3jvM1LXCrG8VSYX6",
  },
  "Kiyomizu-dera Temple": {
    type: "major",
    title: "Kiyomizu-dera Temple",
    desc: "One of Kyoto’s most iconic temples, known for its large wooden stage and historic streets nearby.",
    hours: "Check latest temple hours",
    budget: "Approx. ¥400–¥500",
    address: "Higashiyama, Kyoto",
    map: "https://maps.app.goo.gl/FsUPgjRAJ455bqcu7",
    images: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  "Kimono rental": {
    type: "minor",
    title: "Kimono Rental",
    desc: "Good pairing with Kiyomizu-dera and nearby historic streets for photos.",
    hours: "Depends on rental shop",
    budget: "Approx. ¥3,000–¥6,000 per person",
    address: "Kiyomizu / Higashiyama area, Kyoto",
    map: "https://maps.app.goo.gl/FsUPgjRAJ455bqcu7",
  },
  "Nishiki Market": {
    type: "minor",
    title: "Nishiki Market",
    desc: "A famous food market street in Kyoto, good for snacks and light food hunting.",
    hours: "Most shops open daytime; varies by shop",
    budget: "Approx. ¥1,000–¥3,000",
    address: "Nishiki Market, Kyoto",
    map: "https://maps.app.goo.gl/oy8Lts1A4ZwoYa4g9",
  },
  "Japanese Noodle ISSUN BOUSH": {
    type: "minor",
    title: "Japanese Noodle ISSUN BOUSH",
    desc: "Recommended ramen store from your itinerary notes.",
    hours: "Check latest opening hours",
    budget: "Approx. ¥1,000–¥2,000 per person",
    address: "Kyoto, Japan",
    map: "https://maps.app.goo.gl/775JWfLSJxLcWWQD6",
  },
  "Fushimi Inari Taisha": {
    type: "major",
    title: "Fushimi Inari Taisha",
    desc: "Famous for thousands of red torii gates leading up the mountain trail.",
    hours: "Shrine grounds generally accessible all day",
    budget: "Free",
    address: "Fushimi Ward, Kyoto",
    map: "https://maps.app.goo.gl/ARZgjLiGXykyn9Vw5",
    images: [
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  "Optional Nara day trip": {
    type: "minor",
    title: "Optional Nara Day Trip",
    desc: "Alternative day trip from Kyoto if you prefer deer park, temples and a slower sightseeing day.",
    hours: "Day trip timing depends on train schedule",
    budget: "Approx. ¥2,000–¥5,000 excluding food",
    address: "Nara, Japan",
    map: "https://maps.app.goo.gl/",
  },
  "Osaka Castle": {
    type: "major",
    title: "Osaka Castle",
    desc: "A major Osaka landmark surrounded by gardens and wide open park areas.",
    hours: "Check latest castle museum hours",
    budget: "Approx. ¥600–¥1,200",
    address: "Osaka Castle, Osaka",
    map: "https://maps.app.goo.gl/6Mrfyz9C7RVKkRuy9",
    images: [
      "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  "Namba / Dotonbori night walk": {
    type: "minor",
    title: "Namba / Dotonbori",
    desc: "Osaka’s lively food and nightlife district, good for street food, photos and night walking.",
    hours: "Best visited evening/night",
    budget: "Approx. ¥2,000–¥5,000 per person",
    address: "Dotonbori, Osaka",
    map: "https://maps.app.goo.gl/",
  },
  "JR Umeda luggage deposit": {
    type: "minor",
    title: "JR Umeda Luggage Deposit",
    desc: "Useful transfer stop before exploring Osaka Castle and checking in later.",
    hours: "Depends on coin locker / luggage service availability",
    budget: "Approx. ¥500–¥1,000 per locker",
    address: "JR Umeda / Osaka Station area",
    map: "https://maps.app.goo.gl/TPBTRA2EvfRSigir6",
  },
  "Shinsekai": {
    type: "major",
    title: "Shinsekai",
    desc: "Retro Osaka district known for food streets, old-school atmosphere and views of Tsutenkaku Tower.",
    hours: "Best visited day to evening",
    budget: "Approx. ¥1,500–¥4,000 per person",
    address: "Shinsekai, Osaka",
    map: "https://maps.app.goo.gl/",
    images: [
      "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601823984263-b87b59798b70?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  "Tsutenkaku Tower": {
    type: "minor",
    title: "Tsutenkaku Tower",
    desc: "Iconic tower in Shinsekai with observation deck and retro Osaka feel.",
    hours: "Check latest opening hours",
    budget: "Approx. ¥1,000–¥1,500",
    address: "Shinsekai, Osaka",
    map: "https://maps.app.goo.gl/",
  },
  "Shinsaibashi shopping": {
    type: "minor",
    title: "Shinsaibashi Shopping",
    desc: "Popular Osaka shopping district for fashion, cosmetics, snacks and souvenirs.",
    hours: "Most shops open late morning to night",
    budget: "Flexible shopping budget",
    address: "Shinsaibashi, Osaka",
    map: "https://maps.app.goo.gl/",
  },
  "Osaka Aquarium Kaiyukan": {
    type: "major",
    title: "Osaka Aquarium Kaiyukan",
    desc: "Large aquarium in Osaka, good for a slower indoor attraction day.",
    hours: "Check latest aquarium hours",
    budget: "Approx. ¥2,700+ per adult",
    address: "Osaka Aquarium Kaiyukan, Osaka",
    map: "https://maps.app.goo.gl/CCuPc7zy6EtvusUF9",
    images: [
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  "Universal Studios Osaka": {
    type: "major",
    title: "Universal Studios Japan",
    desc: "Theme park option for your free-and-easy day in Osaka.",
    hours: "Check latest park operating calendar",
    budget: "Varies by ticket date and pass type",
    address: "Universal Studios Japan, Osaka",
    map: "https://maps.app.goo.gl/LQWtrSyrTBYgNyQr7",
    images: [
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597466599360-3b9775841aec?q=80&w=1200&auto=format&fit=crop",
    ],
  },
};

const pages = [
  { id: "home", label: "Home", icon: Home },
  { id: "itinerary", label: "Itinerary", icon: CalendarDays },
  { id: "flights", label: "Flight Details", icon: Plane },
  { id: "accommodation", label: "Accommodation", icon: BedDouble },
  { id: "expenses", label: "Expenses", icon: ReceiptText },
  { id: "gallery", label: "Gallery", icon: Camera },
  { id: "places", label: "Places of Interest", icon: Landmark },
];

const tripQuotes = [
  {
    quote: "An amazing trip of course needs an amazing slideshow",
    name: "Tony",
  },
  {
    quote: "I am excited to go on a trip with my friends!",
    name: "Natalie",
  },
  {
    quote: "We started from Penang and now we here",
    name: "Anthony",
  },
  {
    quote: "What’s this for. Is someone beefing?",
    name: "Yujing",
  },
  {
    quote: "Feeling excited? Hahahahahaha",
    name: "Jian Sheng",
  },
  {
    quote: "Wait aaaaaaa. Har",
    name: "Ashley",
  },
  {
    quote: "Cute girls & Good Company 😌",
    name: "Paul",
  },
  {
    quote: "I can't wait to rent a girlfriend for my boyfriend",
    name: "Natalie",
  },
  {
    quote: "What could possibly go wrong?",
    name: "Zhao Yang",
  },
  {
    quote: "Very excited and can't wait to have a great time in Japan",
    name: "Lee Quan",
  },
  {
    quote: "Waku Waku!",
    name: "Ashley",
  },
  {
    quote: "I want to relax, good food and shopping",
    name: "Yujing",
  },
  {
    quote: "I want 10 plates of sashimi please!",
    name: "Natalie",
  },
  {
    quote: "No fighting on my trip",
    name: "Lee Quan",
  }
];

function RotatingQuote() {
  const hasBackToBackNames = (quotes) => {
    return quotes.some((quote, index) => {
      if (index === 0) return false;
      return quote.name === quotes[index - 1].name;
    });
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  };

  const createNewRound = () => {
    const firstQuote = tripQuotes[0];
    const remainingQuotes = tripQuotes.slice(1);

    let attempt = 0;
    let shuffled = shuffleArray(remainingQuotes);
    let round = [firstQuote, ...shuffled];

    while (hasBackToBackNames(round) && attempt < 100) {
      shuffled = shuffleArray(remainingQuotes);
      round = [firstQuote, ...shuffled];
      attempt += 1;
    }

    return round;
  };

  const [quoteQueue, setQuoteQueue] = useState(() => createNewRound());
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex < quoteQueue.length) {
          return nextIndex;
        }

        setQuoteQueue(createNewRound());
        return 0;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [quoteQueue]);

  const currentQuote = quoteQueue[quoteIndex];

  return (
    <div className="rotatingQuoteWrap">
      <AnimatePresence mode="wait">
        <motion.p
          key={`${currentQuote.name}-${currentQuote.quote}-${quoteIndex}`}
          className="rotatingQuote"
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
          transition={{ duration: 0.55 }}
        >
          “{currentQuote.quote}”
          <span> — {currentQuote.name}</span>
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function Hero({ setPage }) {
  return (
    <section className="heroImageWrapper">
      <div className="heroOverlay" />

      <motion.div
        className="heroContent"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="heroTag">✈ OSAKA · KYOTO · JUNE 2026 ✈</p>
        <h1>おはよう Japan!</h1>
        <RotatingQuote />

        <button className="heroButton" onClick={() => setPage("itinerary")}>
          View Itinerary
        </button>
      </motion.div>

      <div className="scrollHintWrap">
        <motion.div
          className="scrollHint"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          Scroll to explore
          <span>↓</span>
        </motion.div>
      </div>
    </section>
  );
}

function Sidebar({ open, setOpen, page, setPage }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="drawerBackdrop"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

<motion.aside
  className="drawer"
  initial={{ x: "-100%" }}
  animate={{ x: 0 }}
  exit={{ x: "-100%" }}
  transition={{
    type: "tween",
    duration: 0.32,
    ease: [0.22, 1, 0.36, 1],
  }}
>
            <div className="drawerTop">
              <div>
                <p className="smallLabel">Japan 2026</p>
                <h2>Trip Menu</h2>
              </div>

              <button className="iconButton" onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="drawerLinks">
              {pages.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    className={page === item.id ? "active" : ""}
onClick={() => {
  setPage(item.id);
}}
                  >
                    <Icon size={19} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function TopBar({ setOpen, drawerOpen, page }) {
  if (drawerOpen) return null;

  const currentPage = pages.find((p) => p.id === page)?.label || "Home";

  return (
    <div className="floatingMenuWrap">
      <div className="floatingMenu">
        <button className="menuButton" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>

        <div className="floatingBrand">
          <strong>Japan 2026 おはよう!</strong>
          <span>{currentPage}</span>
        </div>
      </div>
    </div>
  );
}

function HomeAmbientBackground() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="homeAmbientBg">
      <AnimatePresence mode="wait">
        <motion.div
          key={imageIndex}
          className="homeAmbientImage"
          style={{ backgroundImage: `url(${heroImages[imageIndex]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
        />
      </AnimatePresence>
      <div className="homeAmbientOverlay" />
    </div>
  );
}

function CountdownTimer() {
  const tripDate = new Date("2026-06-10T00:00:00+08:00");

  const getTimeLeft = () => {
    const now = new Date();
    const difference = tripDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdownSection">
      <p className="pill">10 June 2026 · Kyoto & Osaka</p>

      <h2>Counting down to Japan.</h2>

      <p className="countdownSubtitle">
        The journey begins in Kyoto — temples, food, quiet streets and Osaka nights.
      </p>

      <div className="countdownGrid">
        <div>
          <strong>{timeLeft.days}</strong>
          <span>Days</span>
        </div>

        <div>
          <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>
          <span>Hours</span>
        </div>

        <div>
          <strong>{String(timeLeft.minutes).padStart(2, "0")}</strong>
          <span>Minutes</span>
        </div>

        <div>
          <strong>{String(timeLeft.seconds).padStart(2, "0")}</strong>
          <span>Seconds</span>
        </div>
      </div>
    </section>
  );
}

function HomePage({ setPage }) {
  const goToPage = (pageName) => {
    setPage(pageName);

    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
  };

  return (
    <>
      <HomeAmbientBackground />
      <Hero setPage={goToPage} />

      <main className="container homeContainer">
        <CountdownTimer />

        <section className="homeCards upgradedHomeCards">
          <button onClick={() => goToPage("flights")}>
            <Plane />
            <span>01</span>
            <h3>Flights</h3>
            <p>Return flight, luggage and airport timing.</p>
          </button>

          <button onClick={() => goToPage("accommodation")}>
            <Hotel />
            <span>02</span>
            <h3>Accommodation</h3>
            <p>Kyoto and Osaka stays in one clean view.</p>
          </button>

          <button onClick={() => goToPage("expenses")}>
            <Wallet />
            <span>03</span>
            <h3>Expenses</h3>
            <p>Budget, food, admission and shopping allowance.</p>
          </button>

          <button onClick={() => goToPage("gallery")}>
            <Camera />
            <span>04</span>
            <h3>Gallery</h3>
            <p>Disposable film rolls from all 9 friends.</p>
          </button>

          <button onClick={() => goToPage("places")}>
            <MapPin />
            <span>05</span>
            <h3>Places</h3>
            <p>Saved attractions and map planning.</p>
          </button>
        </section>
      </main>
    </>
  );
}

function CalendarPage() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <main className="calendarPage">
      <div className="calendarStack">
        {tripDays.map((item, index) => (
          <CalendarDayPage
            key={item.day}
            item={item}
            index={index}
            total={tripDays.length}
            setSelectedPlace={setSelectedPlace}
          />
        ))}
      </div>

      <PlaceBubble
        place={selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </main>
  );
}

function DayCoverSlideshow({ photos }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!photos || photos.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [photos]);

  return (
    <div className="dayCoverSlideshow">
      {photos.map((photo, i) => (
        <motion.div
          key={photo}
          className="dayCoverSlide"
          style={{ backgroundImage: `url(${photo})` }}
          initial={false}
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 1.04,
          }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 6, ease: "linear" },
          }}
        />
      ))}
    </div>
  );
}

function CalendarDayPage({ item, index, total, setSelectedPlace }) {
  return (
    <section className="tearScene">
      <motion.div
        className="calendarSheetFull"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.45 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="calendarCover">
          <DayCoverSlideshow photos={dayCoverPhotos[item.day]} />
          <div className="calendarCoverOverlay" />

          <div className="calendarHeaderFloating">
            <span>
              {index + 1} / {total}
            </span>
          </div>

          <div className="calendarCoverText">
            <div className="dayLocation">{item.city}</div>
            <span>DAY {item.day}</span>
            <h2>{item.title}</h2>
            <p>{item.date}</p>
          </div>
        </div>

        <div className="calendarContent">
          <div className="calendarBigNumber">
            <div className="calendarCityTag">{item.city}</div>
            <span>DAY</span>
            {item.day}
          </div>

          <div className="calendarCopy">
            <h3>{item.title}</h3>
            <p>{item.mood}</p>

            <div className="highlightList">
              {item.highlights.map((highlight) => {
                const info = placeInfo[highlight];

                return (
                  <button
                    key={highlight}
                    className={
                      info ? "highlightButton clickable" : "highlightButton"
                    }
                    onClick={() => info && setSelectedPlace(info)}
                  >
                    <strong>{highlight}</strong>
                    {info && (
                      <span>
                        {info.type === "major"
                          ? "View photos & details"
                          : "Quick info"}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function PlaceBubble({ place, onClose }) {
  if (!place) return null;

  const isMajor = place.type === "major";

  return (
    <AnimatePresence>
      <motion.div
        className="placeBubbleBackdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={isMajor ? "placeBubble majorBubble" : "placeBubble minorBubble"}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.25 }}
        >
          <button className="bubbleClose" onClick={onClose}>
            ×
          </button>

          {isMajor && (
            <div className="bubbleImages">
              {place.images.map((img) => (
                <img key={img} src={img} alt={place.title} />
              ))}
            </div>
          )}

          <div className="bubbleContent">
            <p className="smallLabel">
              {isMajor ? "Major Highlight" : "Quick Stop"}
            </p>
            <h2>{place.title}</h2>
            <p>{place.desc}</p>

            <div className="placeMetaGrid">
              <div>
                <span>Operating Hours</span>
                <strong>{place.hours}</strong>
              </div>

              <div>
                <span>Budget</span>
                <strong>{place.budget}</strong>
              </div>

              <div>
                <span>Address</span>
                <strong>{place.address}</strong>
              </div>

              <a href={place.map} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const flightDetails = [
  {
  id: "departure",
  date: "10 Jun 2026",
  label: "Departure Flight",
  fromCity: "Kuala Lumpur",
  fromCode: "KLIA2",
  toCity: "Osaka",
  toCode: "KIX",
  direction: "depart",
  price: "RM782",
  departTime: "2:20 AM",
  arriveTime: "9:50 AM",
  duration: "6 hours 30 minutes",
  airline: "AirAsia X",
  flightNo: "D7 532",
  luggage: "20 kg checked + 7 kg carry-on",
  passenger: "Tan Yujing",
  gate: "404",
  seat: "A1",
  },
  {
    id: "return",
    date: "17 Jun 2026",
    label: "Return Flight",
    fromCity: "Osaka",
    fromCode: "KIX",
    toCity: "Kuala Lumpur",
    toCode: "KLIA2",
    direction: "return",
    price: "RM873",
    departTime: "11:05 AM",
    arriveTime: "4:55 PM",
    duration: "6 hours 50 minutes",
    airline: "AirAsia",
    flightNo: "D7 533",
    luggage: "20 kg checked + 7 kg carry-on",
    gate: "404",
    seat: "A1",
  },
];

const passengerNames = [
  "Ng Wai Zhung",
  "Cheow Kai Xin",
  "Tan Yujing",
  "Low Zhao Yang",
  "Siak Xiang Jun",
  "Low Yue Tong",
  "Lim Paul Lim",
  "Tan Lee Quan",
  "Chew Jian Sheng",
];

function RotatingPassengerName() {
  const [nameIndex, setNameIndex] = useState(0);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    let timeout;
    const currentName = passengerNames[nameIndex];

    const typeName = (i = 0) => {
      if (i <= currentName.length) {
        setDisplayName(currentName.slice(0, i));
        timeout = setTimeout(() => typeName(i + 1), 65);
      } else {
        timeout = setTimeout(() => eraseName(currentName.length), 2600);
      }
    };

    const eraseName = (i) => {
      if (i > 0) {
        setDisplayName(currentName.slice(0, i));
        timeout = setTimeout(() => eraseName(i - 1), 45);
      } else {
        setNameIndex((prev) => (prev + 1) % passengerNames.length);
      }
    };

    typeName();

    return () => clearTimeout(timeout);
  }, [nameIndex]);

  return (
  <strong className="typewriterName">
    <span className="typedText">{displayName || "\u00A0"}</span>
    <span className="typeCursor">|</span>
  </strong>
  );
}

function FlightsPage() {
  const [activeFlight, setActiveFlight] = useState(0);
  const flight = flightDetails[activeFlight];

  return (
    <main className="flightPage">
      <div className="flightBg" />

      <section className="flightHero">
        <div className="infoIcon">
          <Plane size={28} />
        </div>

        <p className="smallLabel">Flight Details</p>
        <h1>Your boarding pass to Japan.</h1>
        <p>Cycle between departure and return flight.</p>
      </section>

      <section className="flightSwitcher">
        {flightDetails.map((item, index) => (
          <button
            key={item.id}
            className={activeFlight === index ? "active" : ""}
            onClick={() => setActiveFlight(index)}
          >
            {item.label}
          </button>
        ))}
      </section>

      <AnimatePresence mode="wait">
        <motion.section
          key={flight.id}
          className="boardingPass"
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -22, scale: 0.96 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="boardingHeader">
            <div className="boardingAirline">
              <Plane size={26} />
              <span>{flight.airline}</span>
            </div>

            <div className="boardingTitle">Boarding Pass</div>
            <div className="boardingTitle small">Japan Trip</div>
            <div className="mobileFlightMeta">
              <span>GATE</span>
              <strong>{flight.gate}</strong>
              <span>FLIGHT NO.</span>
              <strong>{flight.flightNo}</strong>
            </div>
          </div>

          <div className="boardingTicketBody">
            <div className="boardingMainSide">
              <RouteReveal flight={flight} />

              <div className="ticketDetails">
                <div className="ticketField wide">
                  <span>Passenger Name</span>
                    <RotatingPassengerName />
                </div>

                <div className="ticketField">
                  <span>From</span>
                  <strong>{flight.fromCity}</strong>
                  <p>{flight.fromCode}</p>
                </div>

                <div className="ticketField">
                  <span>To</span>
                  <strong>{flight.toCity}</strong>
                  <p>{flight.toCode}</p>
                </div>

                <div className="ticketField">
                  <span>Flight</span>
                  <strong>{flight.flightNo}</strong>
                </div>

                <div className="ticketField">
                  <span>Date</span>
                  <strong>{flight.date}</strong>
                </div>

                <div className="ticketField">
                  <span>Depart</span>
                  <strong>{flight.departTime}</strong>
                </div>

                <div className="ticketField">
                  <span>Arrive</span>
                  <strong>{flight.arriveTime}</strong>
                </div>

                <div className="ticketField">
                  <span>Duration</span>
                  <strong>{flight.duration}</strong>
                </div>

                <div className="ticketField">
                  <span>Gate</span>
                  <strong>{flight.gate}</strong>
                </div>

                <div className="ticketField">
                  <span>Seat</span>
                  <strong>{flight.seat}</strong>
                </div>

                <div className="ticketField luggage">
                  <span>Luggage</span>
                  <strong>{flight.luggage}</strong>
                </div>
              </div>

              <div className="boardingFooterNote">
                Boarding gate closes 15 minutes prior to departure time.
              </div>
            </div>

            <div className="boardingStubSide">
              <h3>Boarding Pass</h3>

              <div>
                <span>Name</span>
                    <RotatingPassengerName />
              </div>

              <div>
                <span>Route</span>
                <strong>
                  {flight.fromCode} → {flight.toCode}
                </strong>
              </div>

              <div>
                <span>Flight</span>
                <strong>{flight.flightNo}</strong>
              </div>

              <div>
                <span>Date</span>
                <strong>{flight.date}</strong>
              </div>

              <div className="stubMiniGrid">
                <div>
                  <span>Gate</span>
                  <strong>{flight.gate}</strong>
                </div>

                <div>
                  <span>Time</span>
                  <strong>{flight.departTime}</strong>
                </div>

                <div>
                  <span>Seat</span>
                  <strong>{flight.seat}</strong>
                </div>
              </div>

              <div className="stubBarcode">
                {Array.from({ length: 30 }).map((_, i) => (
                  <span key={i} />
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </main>
  );
}

function RouteReveal({ flight }) {
  const routeText = `${flight.fromCity} (${flight.fromCode}) → ${flight.toCity} (${flight.toCode})`;

  const mobileRouteText = `${
    flight.fromCode === "KLIA2" ? "KUL" : flight.fromCode
  } → ${
    flight.toCode === "KLIA2" ? "KUL" : flight.toCode
  }`;

  return (
    <div className="routeReveal">
      {/* DESKTOP */}
      <motion.h2
        className="desktopRouteText"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 2.8, ease: "linear" }}
      >
        {routeText}
      </motion.h2>

      {/* MOBILE */}
      <motion.h2
        className="mobileRouteText"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 2.8, ease: "linear" }}
      >
        {mobileRouteText}
      </motion.h2>

      {/* DESKTOP PLANE */}
      <motion.div
        className="routePlane desktopPlane"
        initial={{ left: "0%", opacity: 0 }}
        animate={{
          left: "100%",
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.8,
          ease: "linear",
          times: [0, 0.06, 0.94, 1],
        }}
      >
        ✈
      </motion.div>

      {/* MOBILE PLANE */}
      <motion.div
        key={mobileRouteText}
        className="mobileRoutePlaneReal"
        initial={{ left: "2%", opacity: 0 }}
        animate={{
          left: "96%",
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.8,
          ease: "linear",
          times: [0, 0.06, 0.94, 1],
        }}
      >
        ✈
      </motion.div>
    </div>
  );
}

const accommodations = [
  {
    city: "Kyoto",
    name: "RESI STAY Tsubaki",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/149357701.jpg?k=f5b476be5d59f0a85697254d0bf2580441aa36b583d3cef8b2207cf654f59244&o=",
    dates: "10 Jun 2026 – 14 Jun 2026",
    nights: "4 nights",
    checkIn: "From 3:00 PM",
    checkOut: "10:00 AM",
    price: "RM125.5",
    map: "https://maps.app.goo.gl/XazeEdAWRVTAKvt8A",
    nearestTransit: 
    {
    type: "Bus Stop",
    name: "Kawaramachi Matsubara",
    distance: "300 m",
    walk: "5 min walk",
    map: "https://maps.app.goo.gl/fufYissDuJAXqP369" 
    },
    floorPlans: [
      {
        title: "Deluxe Family Room · 6 pax",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/203897880.jpg?k=77684d7e3105915d749b30ca1af36a98bad057372305f8361124142733b4a44d&o=",
      },
      {
        title: "Superior Quad Room · 4 pax",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/203897300.jpg?k=555d1f4ec9fee180be1beae30d6e078e5aa2c5a67f303a6b1383494989752cdd&o=",
      },
    ],
    photoGroups: [
  {
    label: "Deluxe Apartment · 6 pax",
    photos: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/149357701.jpg?k=f5b476be5d59f0a85697254d0bf2580441aa36b583d3cef8b2207cf654f59244&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/184272813.jpg?k=8520bcfc01afbf8faf8582f6b1947a5870500a44798f11a5da4ff745cdde86a2&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/203897924.jpg?k=9e7975dd09e183dc7ed8cb1c88ad80754fc8bf353610061bd2dbe944f88d146d&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/203898390.jpg?k=181bd9744b4b92099c16533eae951f63eed4a3640945986d02e3eb81d2f0848d&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/449482001.jpg?k=7cc25cbcea2f8797d1822062af33ef14230dc896d4b5ff27897ec2f556d552fb&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/449482358.jpg?k=f0a2f990644c1bb715f60dce80e59c2f07f83001e8d7f4b567da3c168017e487&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/184272828.jpg?k=6eb3514753d3d03109d975848e10c628686fd2b1cd4eeff61c66e68ed80fa3be&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/184272778.jpg?k=63d4896e56fbd1fe6e8da5f006fc56b866c8255ea69ea14bce934835ad0bb541&o=",
    ],
  },
  {
    label: "Superior Quad Room · 4 pax",
    photos: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/149357924.jpg?k=9b65cb099a2527ac1563ab97baadea06cbff2ee1662ad02fd09d5b62e55a5c11&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/149357895.jpg?k=f1153c78ee26a8a6e19999114ba96a58e540cf29e8217d51bd3d2742e0f22c34&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/149357775.jpg?k=fe6c89ecade6a05e442d13326981b512c4173f7e522c52c6e7c18cd03ea08740&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/449480734.jpg?k=1d16f1cec1f69d7719ca1139f96d17e63652ca38e62ce0eaa01e199020ad9f90&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/149357906.jpg?k=a1e8867c098fc6742da926f0196c5ea879da680bd3c2469aaa5ab3c987b10cec&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/149357891.jpg?k=6da3e2f9509013c61ac49675a4f007d80fad90524c10d0c0a1b351642d6a9d3e&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/301210561.jpg?k=1ef017b1ad91f62a4e06494836f4eedba4fc3e1a5092375194ba6a32b5f2c019&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/149357864.jpg?k=239280392e46a432fdc94dbdd4afe25f2ffa42e086c5dfd40fa0ab1f7e1fe251&o=",
    ],
  },
  ],
  },
  {
    city: "Osaka",
    name: "Apartment 11 Kuromon",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/504350456.jpg?k=3851af4c4ec58b909dd7ca55173bfad12a28d3556360a64dd2531fb8edd4c73f&o=",
    dates: "14 Jun 2026 – 17 Jun 2026",
    nights: "3 nights",
    checkIn: "From 4:00 PM",
    checkOut: "10:00 AM",
    price: "RM95",
    map: "https://maps.app.goo.gl/Pf8fFHJaRmfMxbZh9",
    nearestTransit: 
    {
    type: "Train Station",
    name: "Namba Station",
    distance: "600 m",
    walk: "8 min walk",
    map: "https://maps.app.goo.gl/qLMg7c7BkazywwQ57",
    },
    photos: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/504349233.jpg?k=b3c671c07a798fe09a529c31ca4b36eb1dcbe6b200ad39dc596ad3f3c230b71e&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/442837995.jpg?k=51e7382be2a87a8122d3c442c02360e831407eb12e0a701c9fd5dabf9ca9ad3b&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/442838456.jpg?k=bed3ece3e0299a7b0ed1ce69344eecc13f77a7875ffae218bf7faabe30bf7ebd&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/504349398.jpg?k=9dfe50927b5fec3cdc4f8019c68c31a21539cbb3c99e194880d6bdbbef97b89e&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/504349666.jpg?k=3fdb64b67dadfbdfb0a9623a578bdbeb783010d84d5d3311bcb3ddf513cf4dbf&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/442841421.jpg?k=157d06f37586eda97e93c5ae1c40946526de8221f0f5588ecf93ebe6f32537c0&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/442840523.jpg?k=b7e4dea7d2c98c7fe8672d60993c0f43ce4dfe1d2cb043a0fe5c7458757654e5&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/442839319.jpg?k=732bbca011c3d3e84c580cd6186f2c5f4d2821ac53fa18d1e012a2c404cbaa7f&o=",
    ],
  },
];

function AccommodationPage() {
  const [galleryStay, setGalleryStay] = useState(null);
  const [floorPlanStay, setFloorPlanStay] = useState(null);

useLayoutEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <main className="accommodationPage">
      <div className="accommodationBg" />

      <section className="accommodationHero compact">
        <div className="infoIcon">
          <BedDouble size={28} />
        </div>

        <p className="smallLabel">Accommodation</p>
        <h1>Our places to stay. All at one place.</h1>
      </section>

      <section className="stayGrid">
        {accommodations.map((stay) => (
          <motion.article
            className="stayCard compact"
            key={stay.name}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div
              className="stayImage"
              style={{ backgroundImage: `url(${stay.image})` }}
            >
              <span>{stay.city}</span>

              <button
                className="photoButton"
                onClick={() => setGalleryStay(stay)}
              >
                View Photos
              </button>
            </div>

            <div className="stayContent">
              <p className="smallLabel">{stay.nights}</p>
              <h2>{stay.name}</h2>

              <div className="stayDetails">
                <div>
                  <span>Stay Dates</span>
                  <strong>{stay.dates}</strong>
                </div>

                <div>
                  <span>Check-in</span>
                  <strong>{stay.checkIn}</strong>
                </div>

                <div>
                  <span>Check-out</span>
                  <strong>{stay.checkOut}</strong>
                </div>

                <div>
                  <span>Price / Person / Night</span>
                  <strong>{stay.price}</strong>
                </div>
              </div>

              <div className="stayActions">
                <a href={stay.map} target="_blank" rel="noreferrer">
                  Google Maps
                </a>

                {stay.floorPlans && (
                  <button onClick={() => setFloorPlanStay(stay)}>
                    View Floor Plans
                  </button>
                )}
              </div>
              <a
  className="transitBubbleButton"
  href={stay.nearestTransit.map}
  target="_blank"
  rel="noreferrer"
>
  <span>Nearest Transit · {stay.nearestTransit.name}</span>
  <small>
    {stay.nearestTransit.type} · {stay.nearestTransit.distance} ·{" "}
    {stay.nearestTransit.walk}
  </small>
</a>
            </div>
          </motion.article>
        ))}
      </section>

      <PhotoGalleryModal
        stay={galleryStay}
        onClose={() => setGalleryStay(null)}
      />

      <FloorPlanModal
        stay={floorPlanStay}
        onClose={() => setFloorPlanStay(null)}
      />
    </main>
  );
}

function PhotoGalleryModal({ stay, onClose }) {
  const [groupIndex, setGroupIndex] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (stay) {
      setGroupIndex(0);
      setIndex(0);
    }
  }, [stay]);

  if (!stay) return null;

  const hasGroups = Boolean(stay.photoGroups);

  const groups = hasGroups
    ? stay.photoGroups
    : [{ label: "Room Photos", photos: stay.photos || [] }];

  const activeGroup = groups[groupIndex];
  const photos = activeGroup.photos;

  const next = () => setIndex((prev) => (prev + 1) % photos.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + photos.length) % photos.length);

  const changeGroup = (newIndex) => {
    setGroupIndex(newIndex);
    setIndex(0);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="galleryBackdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="galleryModal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
        >
          <button className="galleryClose" onClick={onClose}>
            ×
          </button>

          {hasGroups && (
            <div className="roomTabs">
              {groups.map((group, i) => (
                <button
                  key={group.label}
                  className={i === groupIndex ? "active" : ""}
                  onClick={() => changeGroup(i)}
                >
                  {group.label}
                </button>
              ))}
            </div>
          )}

          <div className="galleryImageWrap">
            <img src={photos[index]} alt={stay.name} />

            <button className="galleryArrow left" onClick={prev}>
              ‹
            </button>
            <button className="galleryArrow right" onClick={next}>
              ›
            </button>
          </div>

          <div className="galleryInfo">
            <div>
              <p className="smallLabel">{stay.city}</p>
              <h2>{activeGroup.label}</h2>
            </div>

            <span>
              {index + 1} / {photos.length}
            </span>
          </div>

          <div className="galleryThumbs">
            {photos.map((photo, i) => (
              <button
                key={`${photo}-${i}`}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
              >
                <img src={photo} alt="" />
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function FloorPlanModal({ stay, onClose }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (stay) setIndex(0);
  }, [stay]);

  if (!stay) return null;

  const plans = stay.floorPlans;

  const next = () => setIndex((prev) => (prev + 1) % plans.length);
  const prev = () => setIndex((prev) => (prev - 1 + plans.length) % plans.length);

  return (
    <AnimatePresence>
      <motion.div
        className="galleryBackdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="floorPlanModal large"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
        >
          <button className="galleryClose" onClick={onClose}>×</button>

          <div className="floorPlanImageWrap">
            <img src={plans[index].image} alt={plans[index].title} />

            <button className="galleryArrow left" onClick={prev}>‹</button>
            <button className="galleryArrow right" onClick={next}>›</button>
          </div>

          <div className="galleryInfo">
            <div>
              <p className="smallLabel">Kyoto Floor Plan</p>
              <h2>{plans[index].title}</h2>
            </div>

            <span>{index + 1} / {plans.length}</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const initialExpenses = [
  { name: "Flights", yen: null, myr: 1653.9, fixed: true, fixedCurrency: "MYR" },
  { name: "Transport to Kyoto", yen: null, myr: 90, fixed: false },
  { name: "Stay in Kyoto (4 nights)", yen: 20273, myr: null, fixed: true, fixedCurrency: "YEN" },
  { name: "Transport to Osaka", yen: null, myr: 50, fixed: false },
  { name: "Stay in Osaka (3 nights)", yen: 11496, myr: null, fixed: true, fixedCurrency: "YEN" },
  { name: "teamLab Kyoto", yen: null, myr: 113, fixed: true, fixedCurrency: "MYR" },
  { name: "Transport to KIX", yen: null, myr: 30, fixed: false },
  { name: "Food", yen: null, myr: 1140, fixed: false },
  { name: "Sightseeing admission fees", yen: null, myr: 130, fixed: false },
  { name: "City accommodation tax", yen: null, myr: 30, fixed: false },
  { name: "Taxi and Uber", yen: null, myr: 100, fixed: false },
];

const yenRate = 40.41;

function ExpensesPage() {
  const [currency, setCurrency] = useState("MYR");

  const [budget, setBudget] = useState(() => {
    return Number(localStorage.getItem("japanTripBudget")) || 5000;
  });

  const [exchangeRate, setExchangeRate] = useState(() => {
    return Number(localStorage.getItem("japanTripExchangeRate")) || yenRate;
  });

  const [editingRate, setEditingRate] = useState(false);

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("japanTripExpenses");
    return saved ? JSON.parse(saved) : initialExpenses;
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("japanTripExpenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("japanTripBudget", budget);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("japanTripExchangeRate", exchangeRate);
  }, [exchangeRate]);

  const today = new Date().toLocaleDateString("en-GB");
  const receiptNo = "JP-7X9B2K";

  const safeRate = Number(exchangeRate) || yenRate;

 const getYen = (item) => {
  const myrValue = Number(item.myr || 0);
  const yenValue = Number(item.yen || 0);

  if (item.fixedCurrency === "YEN") return yenValue;

  if (yenValue > 0 && myrValue === 0) return yenValue;

  return Math.round(myrValue * safeRate);
};

const getMYR = (item) => {
  const myrValue = Number(item.myr || 0);
  const yenValue = Number(item.yen || 0);

  if (item.fixedCurrency === "MYR") return myrValue;

  if (myrValue > 0 && yenValue === 0) return myrValue;

  return Number((yenValue / safeRate).toFixed(2));
};

const updateExpense = (index, value) => {
  setExpenses((prev) =>
    prev.map((item, i) => {
      if (i !== index || item.fixed) return item;

      if (value === "") {
        return {
          ...item,
          myr: "",
          yen: "",
        };
      }

      const amount = Number(value);

      if (currency === "MYR") {
        return {
          ...item,
          myr: amount,
          yen: Math.round(amount * safeRate),
        };
      }

      return {
        ...item,
        yen: amount,
        myr: Number((amount / safeRate).toFixed(2)),
      };
    })
  );
};

  const formatMYR = (value) =>
    `RM${Number(value || 0).toLocaleString("en-MY", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const formatYEN = (value) =>
    `¥${Number(value || 0).toLocaleString("ja-JP")}`;

const cleanAmount = (item) => {
  if (currency === "MYR") {
    return item.myr ?? "";
  }

  return item.yen ?? "";
};

const totalMYR = expenses.reduce((sum, item) => {
  return sum + Number(getMYR(item) || 0);
}, 0);
const totalYEN = expenses.reduce((sum, item) => {
  return sum + Number(getYen(item) || 0);
}, 0);
const shoppingBalance = Number(budget || 0) - totalMYR;

  return (
    <main className="expensesPage">
      <div className="expensesBg" />

      <section className="paperReceipt">
        <div className="receiptInner">
          <header className="thermalHeader">
            <h1>Japan おはよう!</h1>
            <p>Kyoto · Osaka · 10–17 June 2026</p>
            <p>
              1 Chome-2-16 Nipponbashihigashi,<br />
              Naniwa Ward, Osaka, 556-0006, Japan
            </p>
          </header>

          <div className="receiptDivider" />

          <section className="receiptMeta">
            <p>DATE: {today}</p>
            <p>RECEIPT NO: {receiptNo}</p>
          </section>

          <div className="receiptDivider" />

          <section className="receiptControlsSimple">
            <div className="thermalToggle">
              <button
                className={currency === "MYR" ? "active" : ""}
                onClick={() => setCurrency("MYR")}
              >
                MYR
              </button>

              <button
                className={currency === "YEN" ? "active" : ""}
                onClick={() => setCurrency("YEN")}
              >
                YEN
              </button>
            </div>

            <label className="thermalBudget">
              <span>SHOPPING BUDGET:</span>
              <strong>{currency === "MYR" ? "RM" : "¥"}</strong>
              <input
                type="number"
                value={currency === "MYR" ? budget : Math.round(budget * safeRate)}
                onChange={(e) => {
                  const value = e.target.value;

                  if (value === "") {
                    setBudget("");
                    return;
                  }

                  const amount = Number(value);
                  setBudget(currency === "MYR" ? amount : amount / safeRate);
                }}
              />
            </label>
          </section>

          <section className="thermalTable">
            <div className="thermalRow thermalHead">
              <span>ITEM #</span>
              <span>DESCRIPTION</span>
              <span>STATUS</span>
              <span>TOTAL ({currency})</span>
            </div>

            <div className="receiptDivider slim" />

            {expenses.map((item, index) => (
              <motion.div layout className="thermalRow" key={item.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <span>{item.name}</span>

                <span>{item.fixed ? "PAID" : "EDITABLE"}</span>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currency}-${item.name}`}
                    className="thermalAmount"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                  >
                    {item.fixed ? (
                      <span>
                        {currency === "MYR"
                          ? formatMYR(getMYR(item))
                          : formatYEN(getYen(item))}
                      </span>
                    ) : (
                      <input
                        type="number"
                        value={cleanAmount(item)}
                        onChange={(e) => updateExpense(index, e.target.value)}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ))}
          </section>

          <div className="receiptDivider" />

          <section className="thermalTotals">
            <div>
              <span>TOTAL</span>
              <strong>
                {currency === "MYR" ? formatMYR(totalMYR) : formatYEN(totalYEN)}
              </strong>
            </div>

            <div>
              <span>SHOPPING BALANCE</span>
              <strong>{formatMYR(shoppingBalance)}</strong>
            </div>
          </section>

          <div className="receiptDivider" />

          <section className="exchangeRateLine">
            <span>EXCHANGE RATE:</span>

            {editingRate ? (
              <div className="exchangeRateEditor">
                <strong>1 MYR =</strong>

                <input
                  type="number"
                  step="0.01"
                  value={exchangeRate}
                  onChange={(e) => {
                    const value = e.target.value;
                    setExchangeRate(value === "" ? "" : Number(value));
                  }}
                />

                <strong>YEN</strong>

                <button onClick={() => setEditingRate(false)}>SAVE</button>
              </div>
            ) : (
              <div className="exchangeRateDisplay">
                <strong>1 MYR = {Number(safeRate).toFixed(2)} YEN</strong>
                <button onClick={() => setEditingRate(true)}>EDIT</button>
              </div>
            )}
          </section>

          <div className="receiptDivider" />

          <footer className="thermalFooter">
            THANK YOU FOR YOUR BUSINESS!
          </footer>

          <div className="receiptDivider" />
        </div>
      </section>
    </main>
  );
}


const filmPhotoPool = [
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505069190533-da1c9af13346?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1557409518-691ebcd96038?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526481280698-8fcc13fd4d2c?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494587416117-f102a2ac0a8d?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570521462033-3015e76e7432?q=80&w=900&auto=format&fit=crop",
];

const galleryProfiles = [
  {
    id: "tony",
    fullName: "Ng Wai Zhung",
    name: "Tony",
    roll: "ROLL 01",
    vibe: "Kyoto Soft Light",
    avatar: tonyAvatar,
  },

  {
    id: "natalie",
    fullName: "Cheow Kai Xin",
    name: "Natalie",
    roll: "ROLL 02",
    vibe: "Osaka Night Roll",
    avatar: natalieAvatar,
  },

  {
    id: "yujing",
    fullName: "Tan Yujing",
    name: "Yujing",
    roll: "ROLL 03",
    vibe: "Kyoto Street Diary",
    avatar: yujingAvatar,
  },

  {
    id: "zhaoyang",
    fullName: "Low Zhao Yang",
    name: "Zhao Yang",
    roll: "ROLL 04",
    vibe: "Fuji Soft Frame",
    avatar: zhaoyangAvatar,
  },

  {
    id: "anthony",
    fullName: "Siak Xiang Jun",
    name: "Anthony",
    roll: "ROLL 05",
    vibe: "Food & Friends",
    avatar: anthonyAvatar,
  },

  {
    id: "ashley",
    fullName: "Low Yue Tong",
    name: "Ashley",
    roll: "ROLL 06",
    vibe: "Soft Memories",
    avatar: ashleyAvatar,
  },

  {
    id: "paul",
    fullName: "Lim Paul Lim",
    name: "Paul",
    roll: "ROLL 07",
    vibe: "City Walk Roll",
    avatar: paulAvatar,
  },

  {
    id: "leequan",
    fullName: "Tan Lee Quan",
    name: "Lee Quan",
    roll: "ROLL 08",
    vibe: "Good Food Roll",
    avatar: leequanAvatar,
  },

  {
    id: "jiansheng",
    fullName: "Chew Jian Sheng",
    name: "Jian Sheng",
    roll: "ROLL 09",
    vibe: "Waku Waku Roll",
    avatar: jianshengAvatar,
  },
].map((profile) => ({
  ...profile,

  photos: Array.from({ length: 27 }, (_, i) => ({
    id: `${profile.id}-${i + 1}`,
    src: profile.avatar,
    caption: `Frame ${String(i + 1).padStart(2, "0")} · ${profile.name}`,
  })),
}));

function GalleryPage() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeCardKey, setActiveCardKey] = useState("");

  const trackRef = useRef(null);
  const autoRef = useRef(null);
  const momentumRef = useRef(null);
  const alignTimeoutRef = useRef(null);
  const hasInteractedRef = useRef(false);

  const dragRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    moved: false,
  });

  const loopProfiles = [
    ...galleryProfiles,
    ...galleryProfiles,
    ...galleryProfiles,
    ...galleryProfiles,
    ...galleryProfiles,
  ];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isPovButtonEvent = (e) => {
    return e.target.closest(".theirPovButton");
  };

  const getSetWidth = () => {
    const track = trackRef.current;
    return track ? track.scrollWidth / 5 : 0;
  };

  const handleLoop = () => {
    const track = trackRef.current;
    if (!track) return;

    const setWidth = getSetWidth();

    if (track.scrollLeft < setWidth * 1.25) {
      track.scrollLeft += setWidth;
    }

    if (track.scrollLeft > setWidth * 3.75) {
      track.scrollLeft -= setWidth;
    }
  };

  const getClosestCard = () => {
    const track = trackRef.current;
    if (!track) return null;

    const cards = Array.from(track.querySelectorAll(".filmProfileCard"));
    const center = track.scrollLeft + track.clientWidth / 2;

    let closest = null;
    let smallestDistance = Infinity;

    cards.forEach((card) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closest = card;
      }
    });

    return closest;
  };

  const updateActiveCard = () => {
    const closest = getClosestCard();
    if (closest?.dataset.cardKey) {
      setActiveCardKey(closest.dataset.cardKey);
    }
  };

  const centerCard = (card, behavior = "smooth") => {
    const track = trackRef.current;
    if (!track || !card) return;

    track.scrollTo({
      left: card.offsetLeft - track.clientWidth / 2 + card.offsetWidth / 2,
      behavior,
    });
  };

  const alignClosestCard = () => {
    const closest = getClosestCard();
    if (!closest) return;

    centerCard(closest, "smooth");
    setActiveCardKey(closest.dataset.cardKey);
  };

  const scheduleAlignment = () => {
    clearTimeout(alignTimeoutRef.current);

    alignTimeoutRef.current = setTimeout(() => {
      alignClosestCard();
    }, 420);
  };

  const stopAutoScroll = () => {
    hasInteractedRef.current = true;
    cancelAnimationFrame(autoRef.current);
  };

  const startAutoScroll = () => {
    cancelAnimationFrame(autoRef.current);

    const speed = window.innerWidth <= 850 ? 2.1 : 0.75;

    const step = () => {
      const track = trackRef.current;

      if (!track || hasInteractedRef.current) return;

      track.scrollLeft = track.scrollLeft + speed;

      handleLoop();
      updateActiveCard();

      autoRef.current = requestAnimationFrame(step);
    };

    autoRef.current = requestAnimationFrame(step);
  };

  const startMomentum = () => {
    const track = trackRef.current;
    if (!track) return;

    let velocity = dragRef.current.velocity * 22;

    const step = () => {
      if (Math.abs(velocity) < 0.18) {
        scheduleAlignment();
        return;
      }

      track.scrollLeft -= velocity;
      velocity *= 0.94;

      handleLoop();
      updateActiveCard();

      momentumRef.current = requestAnimationFrame(step);
    };

    cancelAnimationFrame(momentumRef.current);
    momentumRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    requestAnimationFrame(() => {
      const tonyCard = track.querySelector(
        '.filmProfileCard[data-profile-id="tony"][data-loop-index="2"]'
      );

      if (tonyCard) {
        centerCard(tonyCard, "auto");
        setActiveCardKey(tonyCard.dataset.cardKey);
      }

      const autoScrollDelay =
  window.innerWidth <= 850 ? 2200 : 3000;

setTimeout(() => {
  hasInteractedRef.current = false;
  startAutoScroll();

  setTimeout(() => {
    if (!hasInteractedRef.current) {
      startAutoScroll();
    }
  }, 500);
}, autoScrollDelay);
    });

    return () => {
      cancelAnimationFrame(autoRef.current);
      cancelAnimationFrame(momentumRef.current);
      clearTimeout(alignTimeoutRef.current);
    };
  }, []);

  const onPointerDown = (e) => {
    if (isPovButtonEvent(e)) return;

    const track = trackRef.current;
    if (!track) return;

    stopAutoScroll();
    clearTimeout(alignTimeoutRef.current);
    cancelAnimationFrame(momentumRef.current);

    dragRef.current = {
      isDown: true,
      startX: e.clientX,
      scrollLeft: track.scrollLeft,
      lastX: e.clientX,
      lastTime: performance.now(),
      velocity: 0,
      moved: false,
    };

    track.setPointerCapture?.(e.pointerId);
    track.classList.add("dragging");
  };

  const onPointerMove = (e) => {
    if (isPovButtonEvent(e)) return;

    const track = trackRef.current;
    if (!track || !dragRef.current.isDown) return;

    const now = performance.now();
    const dx = e.clientX - dragRef.current.lastX;
    const dt = now - dragRef.current.lastTime || 16;

    dragRef.current.velocity = dx / dt;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastTime = now;

    const walk = e.clientX - dragRef.current.startX;

    if (Math.abs(walk) > 5) {
      dragRef.current.moved = true;
    }

    track.scrollLeft = dragRef.current.scrollLeft - walk;

    handleLoop();
    updateActiveCard();
  };

  const onPointerUp = (e) => {
    if (isPovButtonEvent(e)) return;

    const track = trackRef.current;
    if (!track) return;

    dragRef.current.isDown = false;
    track.releasePointerCapture?.(e.pointerId);
    track.classList.remove("dragging");

    handleLoop();
    updateActiveCard();
    startMomentum();
  };

  const onWheel = (e) => {
    const track = trackRef.current;
    if (!track) return;

    stopAutoScroll();
    e.preventDefault();
    clearTimeout(alignTimeoutRef.current);
    cancelAnimationFrame(momentumRef.current);

    const amount =
      Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

    track.scrollLeft += amount * 1.15;

    handleLoop();
    updateActiveCard();
    scheduleAlignment();
  };

  return (
    <main className="galleryPage">
      <div className="galleryBg" />

      <motion.section
  className="galleryHero compactGalleryHero"
  initial={{ opacity: 0, y: -18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
>
        <motion.div
  className="infoIcon"
  initial={{ opacity: 0, scale: 0.82 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    delay: 0.2,
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  <Camera size={28} />
</motion.div>

<motion.p
  className="smallLabel"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.2,
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  Film Gallery
</motion.p>

<motion.span
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.2,
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  See the world of Japan through their lenses.
</motion.span>
      </motion.section>

      <section className="filmPackStage heroGalleryStage">
        <motion.div
  className="filmPackIntro minimal"
  initial={{ opacity: 0, y: 22 }}
  animate={{ opacity: 1, y: 0 }}
transition={{
  delay: window.innerWidth <= 850 ? 0.55 : 1.35,
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1],
}}
>
  <h2>Choose your roll</h2>
</motion.div>

        <motion.div
  ref={trackRef}
  className="filmPackTrack"
  initial={{ opacity: 0, y: 42 }}
  animate={{ opacity: 1, y: 0 }}
transition={{
  delay: window.innerWidth <= 850 ? 1.75 : 2.25,
  duration: 0.85,
  ease: [0.22, 1, 0.36, 1],
}}
          onWheel={onWheel}
          onScroll={() => {
            handleLoop();
            updateActiveCard();
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={(e) => {
            if (dragRef.current.isDown) onPointerUp(e);
          }}
        >
          {loopProfiles.map((profile, index) => {
            const cardKey = `${profile.id}-${index}`;
            const isActive = activeCardKey === cardKey;

            return (
              <motion.article
                key={cardKey}
                data-card-key={cardKey}
                data-profile-id={profile.id}
                data-loop-index={Math.floor(index / galleryProfiles.length)}
                className={`filmProfileCard ${isActive ? "active" : ""}`}
                onClick={() => {
                  if (dragRef.current.moved) return;

                  if (window.innerWidth <= 850) {
                    setSelectedProfile(profile);
                  }
                }}
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  draggable="false"
                  onDragStart={(e) => e.preventDefault()}
                />

                <div className="filmProfileFade" />

                <div className="filmProfileInfo">
                  <span>{profile.roll}</span>

                  <h2>{profile.name}</h2>

                  <small>27 exposures · {profile.vibe}</small>

                  <button
                    type="button"
                    className="theirPovButton"
                    onPointerDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onPointerUp={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedProfile(profile);
                    }}
                  >
                    Their POV
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedProfile && (
          <FilmRollViewer
            profile={selectedProfile}
            onClose={() => {
              setSelectedProfile(null);
              setSelectedPhoto(null);
            }}
            selectedPhoto={selectedPhoto}
            setSelectedPhoto={setSelectedPhoto}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function FilmRollViewer({ profile, onClose, selectedPhoto, setSelectedPhoto }) {
  return (
    <motion.div
      className="filmViewerBackdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="filmViewer"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 38, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 38, scale: 0.96 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <button className="filmViewerClose" onClick={onClose}>
          ×
        </button>

        <header className="filmViewerHeader">
          <div>
            <p className="smallLabel">{profile.roll} · 27 Photos</p>
            <h2>{profile.name}</h2>
            <span>{profile.vibe} · Developed after Japan 2026</span>
          </div>

          <div className="filmViewerBadge">
            <Aperture size={20} />
            <strong>35mm</strong>
          </div>
        </header>

        <section className="filmPhotoMasonry">
          {profile.photos.map((photo, index) => (
            <motion.button
              className={`filmPhotoTile ${index % 5 === 0 ? "large" : ""}`}
              key={photo.id}
              onClick={() => setSelectedPhoto({ ...photo, index })}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={photo.src} alt={photo.caption} />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </motion.button>
          ))}
        </section>
      </motion.div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="filmLightbox"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto(null);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button onClick={() => setSelectedPhoto(null)}>×</button>

            <img src={selectedPhoto.src} alt={selectedPhoto.caption} />

            <p>
              {profile.name} · Photo {selectedPhoto.index + 1} /{" "}
              {profile.photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function PlacesPage() {
  const [showMapGuide, setShowMapGuide] = useState(true);

  return (
    <main className="placesPage">
      <div className="placesBg" />

      <section className="placesHero compact">
        <div className="infoIcon">
          <MapPin size={28} />
        </div>

        <p className="smallLabel">Interactive Trip Map</p>
        <h1>Our Japan adventure map.</h1>
      </section>

      <section className="mapExperience bigMap">
        <div className="interactiveMapFrame">
          <iframe
            title="Japan Places of Interest Map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1ZeyxHFUGHdUquj01wP2HRrgToa-Xll0&ehbc=2E312F"
            loading="lazy"
            allowFullScreen
          />
        </div>

        {showMapGuide && (
          <div className="floatingMapGuide">
            <button
              className="closeGuide"
              onClick={() => setShowMapGuide(false)}
            >
              ×
            </button>

            <p className="smallLabel">How to Use</p>
            <h2>Explore the map interactively.</h2>

            <div className="guideSteps">
              <div>
                <span>1</span>
                <p>Open the sidebar inside the map.</p>
              </div>

              <div>
                <span>2</span>
                <p>Toggle layers like Kyoto food, Osaka food, Kyoto attractions, and Osaka attractions.</p>
              </div>

              <div>
                <span>3</span>
                <p>Tap pins to preview saved locations.</p>
              </div>

              <div>
                <span>4</span>
                <p>Zoom around Kyoto & Osaka to plan each day.</p>
              </div>
            </div>

          </div>
        )}
      </section>
      <a
        className="openFullMapBubble"
        href="https://www.google.com/maps/d/u/0/viewer?mid=1ZeyxHFUGHdUquj01wP2HRrgToa-Xll0"
        target="_blank"
        rel="noreferrer"
      >
        Open Full Map
      </a>
    </main>
  );
}

function InfoPage({ icon: Icon, label, title, description, items }) {
  return (
    <main className="infoPage">
      <section className="infoHero">
        <div className="infoIcon">
          <Icon size={28} />
        </div>

        <p className="smallLabel">{label}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>

      <section className="infoGrid">
        {items.map(([name, value]) => (
          <div className="infoCard" key={name}>
            <p>{name}</p>
            <h3>{value}</h3>
          </div>
        ))}
      </section>
    </main>
  );
}

function App() {
  const [page, setPage] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const goToPage = (pageName) => {
    setPage(pageName);
    setDrawerOpen(false);

    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  };

  return (
    <div className="page">
      <TopBar
        setOpen={setDrawerOpen}
        drawerOpen={drawerOpen}
        page={page}
      />

      <Sidebar
        open={drawerOpen}
        setOpen={setDrawerOpen}
        page={page}
        setPage={goToPage}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.35 }}
        >
          {page === "home" && <HomePage setPage={goToPage} />}
          {page === "itinerary" && <CalendarPage />}
          {page === "flights" && <FlightsPage />}
          {page === "accommodation" && <AccommodationPage />}
          {page === "expenses" && <ExpensesPage />}
          {page === "gallery" && <GalleryPage />}
          {page === "places" && <PlacesPage />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);