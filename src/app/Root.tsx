import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "./content/site";

const titles: Record<string, string> = {
  "/app": "The app",
  "/how-it-works": "How it works",
  "/about": "About",
  "/support": "Support",
  "/contact": "Contact",
  "/feedback": "Feedback",
  "/terms": "Terms of Use",
  "/privacy": "Privacy Policy",
};

export default function Root() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    const t = Object.entries(titles).find(([k]) => path.endsWith(k))?.[1];
    document.title = t ? `${t} | ${site.brand}` : `${site.brand}: messages to family for iPhone`;
  }, [path]);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main" className="page" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
