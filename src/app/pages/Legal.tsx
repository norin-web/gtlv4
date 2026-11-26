import { type ReactNode } from "react";
import { Link, useLocation } from "react-router";
import { docs } from "../content/legal";
import { site } from "../content/site";

// Minimal renderer for the owner’s text: "## " headings, "### " subheadings,
// "- " lists, blank-line paragraphs. Emails become links; wording is untouched.
function render(body: string) {
  const out: ReactNode[] = [];
  const linkify = (t: string) =>
    t.split(/(\S+@\S+\.[a-z]{2,})/gi).map((p, i) => (/@/.test(p) ? <a key={i} href={`mailto:${p}`}>{p}</a> : p));
  body.split(/\n{2,}/).forEach((b, i) => {
    if (b.startsWith("## ")) out.push(<h3 key={i} className="ldoc__h">{b.slice(3)}</h3>);
    else if (b.startsWith("### ")) out.push(<h4 key={i} className="ldoc__h4">{b.slice(4)}</h4>);
    else if (b.split("\n").every((l) => l.startsWith("- ")))
      out.push(<ul key={i}>{b.split("\n").map((l, j) => <li key={j}>{linkify(l.slice(2))}</li>)}</ul>);
    else out.push(<p key={i} style={{ whiteSpace: "pre-line" }}>{linkify(b)}</p>);
  });
  return out;
}

/** Both documents on one page with a segmented switch, like the filters in the app. */
export default function Legal() {
  const { pathname } = useLocation();
  const id = pathname.replace(/\/$/, "").endsWith("/terms") ? "terms" : "privacy";
  const doc = docs.find((d) => d.id === id)!;

  return (
    <section className="legal">
      <div className="container container--doc">
        <h1 className="h-page">{doc.title}</h1>
        <p className="muted legal__lead">For the {site.brand} app, operated by {site.operator}.</p>
        <nav className="seg" aria-label="Documents">
          {docs.map((d) => (
            <Link key={d.id} to={`/${d.id}`} className={d.id === id ? "is-on" : ""} aria-current={d.id === id ? "page" : undefined}>
              {d.title}
            </Link>
          ))}
        </nav>
        <article className="ldoc">
          {doc.body ? (
            render(doc.body)
          ) : (
            <p>
              The {doc.title} will be published on this page. Until then, questions about {id === "privacy" ? "your data" : "these terms"} go
              to <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          )}
        </article>
      </div>
    </section>
  );
}
