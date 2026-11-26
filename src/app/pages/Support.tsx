import { useState } from "react";
import { Mail, Sparkles } from "lucide-react";
import { faq, site } from "../content/site";
import Btn from "../components/Btn";
import { PageHero } from "../components/Blocks";

/**
 * Questions are chips, like the suggestion chips under the app's chat;
 * the answer comes back as a pair of chat bubbles.
 */
export default function Support() {
  const [cur, setCur] = useState(0);
  const item = faq[cur];
  return (
    <>
      <PageHero
        title={[["Support"]]}
        sub="Adding a contact, request statuses, writing help and your subscription. If your question isn’t here, write to us."
      >
        <Btn href="#ask">Find an answer</Btn>
        <Btn href={`mailto:${site.email}`} variant="outline">Email support</Btn>
      </PageHero>

      <section className="section section--first" id="ask">
        <div className="container ask">
          <div className="ask__chips" role="tablist" aria-label="Questions">
            {faq.map((f, i) => (
              <button
                key={f.q}
                role="tab"
                aria-selected={cur === i}
                aria-controls="answer"
                className={`chip${cur === i ? " is-on" : ""}`}
                onClick={() => setCur(i)}
              >
                <Sparkles size={14} aria-hidden="true" />
                {f.c}
              </button>
            ))}
          </div>
          <div className="ask__chat" id="answer" role="tabpanel" aria-live="polite">
            <p className="bubble bubble--me" key={`q-${cur}`}>{item.q}</p>
            <p className="bubble" key={`a-${cur}`}>{item.a}</p>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="mailbox">
            <span className="tile tile--lg"><Mail size={26} strokeWidth={1.8} aria-hidden="true" /></span>
            <div className="stack stack--tight">
              <h2 className="h3">Still need help?</h2>
              <p className="muted">Tell us what happened and which screen you were on.</p>
            </div>
            <a className="mailbox__mail" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}
