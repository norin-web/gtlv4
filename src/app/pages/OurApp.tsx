import { useState } from "react";
import { app, specs, tour } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import { DownloadBand, PageHero } from "../components/Blocks";

export default function OurApp() {
  const [cur, setCur] = useState(0);
  return (
    <>
      <PageHero
        title={[["One app for letters,"], ["\n"], ["requests and replies"]]}
        sub="Messages, contact requests, writing help and favorites. Here is what each screen does."
        photo={{ src: "/images/two-women.webp", alt: "Two women reading messages on their phones", pos: "50% 30%" }}
      >
        <Btn href={app.url} variant="white">Download on the App Store</Btn>
        <Btn href="#tour" variant="ghost">Take the tour</Btn>
      </PageHero>

      <section className="section" id="tour">
        <div className="container">
          <div className="heading">
            <h2 className="h2">Every screen in the app</h2>
            <p className="muted">Pick a part of the app to see it on the phone.</p>
          </div>
          <div className="tour">
            <div className="tour__list" role="tablist" aria-label="App screens">
              {tour.map((t, i) => (
                <button
                  key={t.tag}
                  role="tab"
                  id={`tab-${i}`}
                  aria-selected={cur === i}
                  aria-controls="tour-panel"
                  className={`tour__tab${cur === i ? " is-on" : ""}`}
                  onClick={() => setCur(i)}
                >
                  <span className="tag">{t.tag}</span>
                  <span className="tour__title">{t.title}</span>
                  <span className="tour__text">{t.text}</span>
                  {cur === i && (
                    <span className="phone tour__inline" aria-hidden="true">
                      <img src={img(t.img)} alt="" width={390} height={847} loading="lazy" />
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="tour__stage" id="tour-panel" role="tabpanel" aria-labelledby={`tab-${cur}`}>
              {/* screens sit side by side in a track that slides, never a crossfade */}
              <div className="phone tour__phone">
                <div className="tour__window">
                  <div className="tour__track" style={{ transform: `translateX(${-cur * 100}%)` }}>
                    {tour.map((t, i) => (
                      <img key={t.tag} src={img(t.img)} alt={i === cur ? `${t.tag} screen` : ""} aria-hidden={i !== cur} width={390} height={847} loading="lazy" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section band band--soft">
        <div className="container split2 split2--faq">
          <div className="stack">
            <h2 className="h2">The details</h2>
            <p className="muted">What you need to know before you download.</p>
          </div>
          <dl className="specs">
            {specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <DownloadBand />
    </>
  );
}
