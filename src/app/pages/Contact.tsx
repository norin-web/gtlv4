import { useState, type FormEvent } from "react";
import { useLocation } from "react-router";
import { ArrowUp } from "lucide-react";
import { site } from "../content/site";
import { PageHero } from "../components/Blocks";

const topics = ["A question about the app", "Subscription or purchase", "Feedback or an idea", "Something else"];

/**
 * The form looks like the app's message composer: topic chips above,
 * a "Write to…" field with a round send button. No backend on a static
 * site, so sending opens the visitor's mail app with everything filled in.
 */
export default function Contact() {
  const feedback = useLocation().pathname.replace(/\/$/, "").endsWith("/feedback");
  const [topic, setTopic] = useState(feedback ? topics[2] : topics[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [sent, setSent] = useState(false);

  const send = (e: FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return setErr("Write a message first.");
    if (email && !/^\S+@\S+\.\S+$/.test(email)) return setErr("That email doesn’t look right. Check for typos.");
    setErr("");
    const body = `${msg}\n\nName: ${name}\nEmail: ${email}\nTopic: ${topic}`;
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${site.brand}: ${topic}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        title={feedback ? [["Feedback"]] : [["Contact"]]}
        sub="Questions about the app, your subscription or an idea for it. Write below or email us directly."
      />

      <section className="section section--first">
        <div className="container split2 split2--form">
          <div className="stack">
            <h2 className="h2">Write to us</h2>
            <p className="muted">Say which screen you were on, and attach a screenshot in your mail app if it helps. Purchases and refunds are handled by Apple.</p>
            <a className="contact__mail" href={`mailto:${site.email}`}>{site.email}</a>
          </div>

          <form className="composer" onSubmit={send} noValidate>
            <div className="composer__row">
              <label className="field">
                <span>Your name</span>
                <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
              </label>
              <label className="field">
                <span>Your email</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
              </label>
            </div>
            <fieldset className="composer__topics">
              <legend>Topic</legend>
              {topics.map((t) => (
                <button key={t} type="button" className={`chip${topic === t ? " is-on" : ""}`} aria-pressed={topic === t} onClick={() => setTopic(t)}>
                  {t}
                </button>
              ))}
            </fieldset>
            <div className="composer__box">
              <label className="sr" htmlFor="msg">Message</label>
              <textarea id="msg" placeholder={`Write to ${site.brand}…`} value={msg} onChange={(e) => setMsg(e.target.value)} aria-invalid={!!err} rows={5} />
              <button type="submit" className="composer__send" aria-label="Send message">
                <ArrowUp size={20} strokeWidth={2.4} aria-hidden="true" />
              </button>
            </div>
            {err && <p className="err" role="alert">{err}</p>}
            {sent && <p className="ok" role="status">Your mail app should open with the message ready. If it didn’t, write to {site.email}.</p>}
            <p className="note">Sending opens your mail app with the message filled in.</p>
          </form>
        </div>
      </section>
    </>
  );
}
