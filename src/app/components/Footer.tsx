import { Link } from "react-router";
import { app, site } from "../content/site";
import { img } from "../utils/img";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="logo logo--lg">
              <img src={img("/images/app-icon.png")} alt="" width={44} height={44} loading="lazy" />
              <span>{site.brand}</span>
            </Link>
            <p className="footer__tag">{site.tagline}</p>
            <p className="muted">
              An iPhone app by {site.operator}. Questions? Write to{" "}
              <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div className="footer__cols">
            <div>
              <span className="footer__head">Explore</span>
              <ul>
                <li><Link to="/app">The app</Link></li>
                <li><Link to="/how-it-works">How it works</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
            <div>
              <span className="footer__head">Help</span>
              <ul>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <span className="footer__head">Get started</span>
              <ul>
                <li><a href={app.url} target="_blank" rel="noopener noreferrer">Download on the App Store</a></li>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {site.year} {site.operator}</span>
          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <button onClick={() => scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })}>Back to top ↑</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
