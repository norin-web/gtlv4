import { app, features, rules, screens } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import { CheckList, DownloadBand, FaqSection, PageHero, PartTiles, Phone, StepsAccordion } from "../components/Blocks";

export default function Home() {
  return (
    <>
      <PageHero
        title={[["Stay close to family,"], ["\n"], ["wherever they are"]]}
        sub="Find your loved one’s facility, send a contact request and write to them from your iPhone. Messages are reviewed and recorded by the facility."
        photo={{ src: "/images/family-couch.webp", alt: "A mother and her daughter reading a message on a phone together", pos: "62% 35%" }}
      >
        <Btn href={app.url} variant="white">Download on the App Store</Btn>
        <Btn to="/how-it-works" variant="ghost">How it works</Btn>
      </PageHero>

      <section className="section section--center">
        <div className="container">
          <div className="heading heading--center">
            <h2 className="h2">Everything for writing to a facility</h2>
            <p className="muted">Find the person, send a request, write letters and keep the people you write to most at the top.</p>
          </div>
          <PartTiles />
        </div>
      </section>

      {/* three tools on the real screens */}
      <section className="section section--flush">
        <div className="container">
          <div className="tools">
            {features.map((f, i) => (
              <Reveal key={f.tag} className="tool" delay={i * 70}>
                <div className="tool__shot">
                  <img src={img(f.img)} alt={`${f.tag} screen`} width={390} height={847} loading="lazy" />
                </div>
                <div className="tool__text">
                  <p className="tag">{f.tag}</p>
                  <h3 className="h3">{f.title}</h3>
                  <p className="muted">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section band band--green" id="how">
        <div className="container">
          <div className="heading">
            <h2 className="h2">From search to first letter</h2>
            <p className="muted">Four steps, in the order the app walks you through them.</p>
          </div>
          <StepsAccordion />
        </div>
      </section>

      <section className="section">
        <div className="container split2 split2--photo">
          <div className="stack">
            <h2 className="h2">How the facility fits in</h2>
            <p className="muted">The facility reviews requests and messages. The app shows you where each one is.</p>
            <CheckList items={rules} />
          </div>
          <Reveal className="photo">
            <img src={img("/images/together-close.webp")} alt="A mother and her daughter smiling at a phone" width={2000} height={1333} loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section band band--soft">
        <div className="container split2 split2--phone">
          <Reveal className="phonecol">
            <Phone src="/images/screen-writing.webp" alt="Writing help screen with a birthday message draft" className="phone--crop" />
          </Reveal>
          <div className="stack">
            <h2 className="h2">Writing help, for the hard letters</h2>
            <p className="muted">Describe what you want to say and get a draft. Ask for changes, make it shorter or warmer.</p>
            <p className="muted">Use in chat puts the draft into the message box. You read it, change it and send it yourself.</p>
            <p className="muted">Drafts are made with OpenAI. The app asks for your consent before sending anything to it.</p>
            <figure className="quote">
              <blockquote>“Help me write a birthday message for my sister.”</blockquote>
              <figcaption>A request on the Writing help screen</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading heading--center">
            <h2 className="h2">A closer look at the app</h2>
            <p className="muted">The screens you’ll use every day.</p>
          </div>
          <div className="strip">
            {screens.map((s) => (
              <figure key={s.label} className="strip__item">
                <Phone src={s.img} alt={`${s.label} screen`} />
                <figcaption>{s.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="center-row">
            <Btn to="/app" variant="outline">Take the full tour</Btn>
          </div>
        </div>
      </section>

      <FaqSection />
      <DownloadBand />
    </>
  );
}
