// Privacy Policy and Terms of Use. The owner's texts go here VERBATIM when they
// arrive — only markup may change ("## " headings, "- " lists). Never paraphrase.
// Until then `body` is null and the page shows a short notice instead.

export type LegalDoc = {
  id: "terms" | "privacy";
  title: string;
  body: string | null;
};

export const docs: LegalDoc[] = [
  { id: "privacy", title: "Privacy Policy", body: null },
  { id: "terms", title: "Terms of Use", body: null },
];
