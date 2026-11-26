import { app, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import { CheckList, DownloadBand, PageHero } from "../components/Blocks";

// Draft copy: confirm with the owner.
const approach = [
  ["Plain steps", "Facility, person, request, letter. Always in that order, always labeled."],
  ["Visible statuses", "If a letter is waiting for review, the app says so."],
  ["You write the letter", "Writing help suggests a draft. You change it and send it."],
] as const;

export default function About() {
  return (
    <>
      <PageHero
        title={[["About"], ["\n"], [site.brand]]}
        sub={`${site.brand} is an iPhone app by ${site.operator} for writing to someone in a facility.`}
        photo={{ src: "/images/envelope.webp", alt: "A woman opening a letter at her kitchen table", pos: "40% 40%" }}
      >
        <Btn href={app.url} variant="white">Download on the App Store</Btn>
        <Btn to="/contact" variant="ghost">Contact us</Btn>
      </PageHero>

      <section className="section">
        <div className="container split2">
          <div className="stack">
            <h2 className="h2">Why the app exists</h2>
            <p className="muted">Families writing to someone in a facility deal with rules, reviews and waiting. The app can’t change the rules, but it can make each step clear.</p>
            <p className="muted">So every screen answers one question: where is my request, where is my letter, what do I do next.</p>
            <p className="muted">{site.brand} is independent. It isn’t a government agency, a correctional authority or part of any facility.</p>
          </div>
          <Reveal className="photo photo--short">
            <img src={img("/images/together-close.webp")} alt="A mother and her daughter smiling at a phone" width={2000} height={1333} loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section band band--soft">
        <div className="container split2 split2--faq">
          <div className="stack">
            <h2 className="h2">How we build it</h2>
            <p className="muted">Three things we keep in mind with every update.</p>
          </div>
          <CheckList items={approach} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="opcard">
            <div>
              <h2 className="h3">Developer</h2>
              <p className="muted">{site.operator}</p>
            </div>
            <div>
              <h2 className="h3">Email</h2>
              <a className="opcard__mail" href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div>
              <h2 className="h3">App Store ID</h2>
              <p className="muted">{app.id}</p>
            </div>
          </div>
        </div>
      </section>

      <DownloadBand />
    </>
  );
}
