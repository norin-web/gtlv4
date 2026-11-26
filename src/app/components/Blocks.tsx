import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import { Check, Minus, Plus, Search, Sparkles, Star, MessageSquare, Users } from "lucide-react";
import { app, faq as allFaq, included, parts, steps } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";
import Reveal from "./Reveal";
import Split from "./Split";

const icons = { messages: MessageSquare, requests: Users, search: Search, sparkles: Sparkles, star: Star };

/** An app screen inside a plain iPhone bezel. No plate or card behind it. */
export function Phone({ src, alt, className = "", lazy = true }: { src: string; alt: string; className?: string; lazy?: boolean }) {
  return (
    <div className={`phone ${className}`.trim()}>
      <img src={img(src)} alt={alt} width={390} height={847} loading={lazy ? "lazy" : undefined} decoding="async" />
    </div>
  );
}

type HeroProps = {
  title: [string, boolean?][];
  sub: ReactNode;
  children?: ReactNode;
  photo?: { src: string; alt: string; pos?: string };
};

/**
 * First screen. With a photo: full-bleed family photo under a deep green
 * gradient with a curved lower edge. Without: a calm cream band.
 */
export function PageHero({ title, sub, children, photo }: HeroProps) {
  return (
    <section className={`hero${photo ? " hero--photo" : ""}`}>
      {photo && (
        <img className="hero__bg" src={img(photo.src)} alt={photo.alt} width={2000} height={1333} style={{ objectPosition: photo.pos }} />
      )}
      <div className="hero__inner">
        <Split parts={title} className="h-hero" />
        <p className="hero__sub">{sub}</p>
        {children && <div className="hero__cta">{children}</div>}
      </div>
    </section>
  );
}

/** White tiles with a thin border, one per part of the app. */
export function PartTiles() {
  return (
    <ul className="parts">
      {parts.map((p) => {
        const Icon = icons[p.icon];
        return (
          <li key={p.label}>
            <span className="parts__tile"><Icon size={40} strokeWidth={1.5} aria-hidden="true" /></span>
            <span className="parts__label">{p.label}</span>
          </li>
        );
      })}
    </ul>
  );
}

export function CheckList({ items }: { items: readonly (string | readonly string[])[] }) {
  return (
    <ul className="checks">
      {items.map((it) => {
        const [t, d = ""] = typeof it === "string" ? [it] : it;
        return (
          <li key={t}>
            <Check size={18} strokeWidth={2.4} aria-hidden="true" />
            <div>
              <b>{t}</b>
              {d && <p>{d}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/** Roadmap accordion: one step open at a time, the first open by default. */
export function StepsAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <ol className="road">
      {steps.map((s, i) => {
        const on = open === i;
        return (
          <li key={s.n} className={`road__item${on ? " is-open" : ""}`}>
            <button className="road__head" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)}>
              <span className="road__n">{s.n}</span>
              <span className="road__title">
                <span className="h3">{s.title}</span>
                <span className="road__meta">{s.meta}</span>
              </span>
              {on ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
            </button>
            <div className="road__body">
              <div className="road__inner">
                <dl className="road__list">
                  {s.items.map(([t, d]) => (
                    <div key={t}>
                      <dt>{t}</dt>
                      <dd>{d}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function FaqList({ items = allFaq.slice(0, 5) }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((f, i) => {
        const on = open === i;
        return (
          <div key={f.q} className={`faq__item${on ? " is-open" : ""}`}>
            <button className="faq__q" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)}>
              <span>{f.q}</span>
              {on ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
            </button>
            <div className="faq__a">
              <div className="faq__inner"><p>{f.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Heading on the left, accordion on the right. */
export function FaqSection() {
  return (
    <section className="section">
      <div className="container split2 split2--faq">
        <div className="stack">
          <h2 className="h2">Questions before you start</h2>
          <p className="muted">The short answers. Everything else is on the Support page.</p>
          <Btn to="/support" variant="outline">Open Support</Btn>
        </div>
        <FaqList />
      </div>
    </section>
  );
}

/** Subscription block — what the paywall in the app offers, with its own artwork. */
export function Pricing() {
  return (
    <section className="section band band--soft">
      <div className="container split2">
        <Reveal className="stack">
          <h2 className="h2">One plan with everything in it</h2>
          <p className="muted">Write unlimited letters, get AI writing help and see every update from the facility.</p>
          <CheckList items={included} />
        </Reveal>
        <Reveal className="price" delay={80}>
          <img className="price__art" src={img("/images/paywall-hero.webp")} alt="" width={963} height={920} loading="lazy" />
          <div className="price__row">
            <div>
              <p className="price__plan">{app.plan}</p>
              <p className="price__n">{app.price.split(" / ")[0]} <span>per week</span></p>
            </div>
            <span className="price__badge">Full access</span>
          </div>
          <Btn href={app.url} className="btn--block">Download on the App Store</Btn>
          <p className="small muted">Paid through Apple in the app. Restore is on the paywall.</p>
        </Reveal>
      </div>
    </section>
  );
}

/** Dark band with the store button, as the last block before the footer. */
export function DownloadBand({ title = "Download Getting Out for iPhone" }: { title?: string }) {
  return (
    <section className="dlband">
      <div className="container dlband__inner">
        <h2 className="h2 h2--light">{title}</h2>
        <p>Find the facility, send a request and write once it’s approved.</p>
        <Btn href={app.url} variant="white">Download on the App Store</Btn>
        <ul className="dlband__facts">
          <li><Check size={16} strokeWidth={2.6} aria-hidden="true" />Requests with clear statuses</li>
          <li><Check size={16} strokeWidth={2.6} aria-hidden="true" />Writing help</li>
          <li><Check size={16} strokeWidth={2.6} aria-hidden="true" />Favorites</li>
        </ul>
        <Link className="dlband__link" to="/how-it-works">See how it works</Link>
      </div>
    </section>
  );
}
