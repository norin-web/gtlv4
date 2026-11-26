import { app } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import { DownloadBand, PageHero, Phone, StepsAccordion } from "../components/Blocks";

// The three stages printed on the request card in the app.
const stages = [
  ["Sent", "The request leaves the app with the person, facility and relationship you chose."],
  ["Facility review", "The facility checks the request. The card shows it as the next stage."],
  ["Approved", "The person appears in My contacts."],
];

export default function HowItWorks() {
  return (
    <>
      <PageHero
        title={[["From facility"], ["\n"], ["to first letter"]]}
        sub="Choose the facility, find the person, send a request and start writing. The app shows where you are at each step."
        photo={{ src: "/images/handmade-card.webp", alt: "A girl giving her mother a handmade card", pos: "50% 30%" }}
      >
        <Btn href={app.url} variant="white">Download on the App Store</Btn>
        <Btn href="#steps" variant="ghost">See the steps</Btn>
      </PageHero>

      <section className="section" id="steps">
        <div className="container">
          <div className="heading">
            <h2 className="h2">Four steps</h2>
            <p className="muted">Open a step to see what you do in it.</p>
          </div>
          <StepsAccordion />
        </div>
      </section>

      <section className="section band band--soft">
        <div className="container split2 split2--phone">
          <Reveal className="phonecol">
            <Phone src="/images/screen-requests.webp" alt="Requests screen with a pending contact request" />
          </Reveal>
          <div className="stack">
            <h2 className="h2">After you send a request</h2>
            <p className="muted">The Requests tab keeps every request in one place, with a progress bar on each card.</p>
            <ol className="stages">
              {stages.map(([t, d], i) => (
                <li key={t}>
                  <span className="stages__dot" aria-hidden="true">{i + 1}</span>
                  <div>
                    <b>{t}</b>
                    <p>{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="small muted">You can cancel a pending request or send the facility a reminder from the same card.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split2 split2--phone split2--flip">
          <div className="stack">
            <h2 className="h2">Then, the letters</h2>
            <p className="muted">Each conversation shows the facility, the inmate ID and a note that messages are reviewed and recorded by the facility.</p>
            <p className="muted">Under each letter you see its status, such as Read or Waiting for facility review.</p>
          </div>
          <Reveal className="phonecol">
            <Phone src="/images/screen-chat.webp" alt="Chat screen with letters and their statuses" />
          </Reveal>
        </div>
      </section>

      <DownloadBand title="Ready for the first step?" />
    </>
  );
}
