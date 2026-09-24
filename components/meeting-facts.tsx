const facts = [
  {
    title: "Who",
    body: "Zackariah Grogan, Grogan Development Group LLC. The company is new. Nobody else is hiding behind this page.",
  },
  {
    title: "Meeting",
    body: "Three hours. We pick the place when we set the time. You leave with notes, a short list of what to fix first, and a yes or no.",
  },
  {
    title: "Price",
    body: "No rate card. Naming a number before we have sat down would be a guess.",
  },
  {
    title: "Mail",
    body: "info@grogan.dev is read by me. I answer to set a meeting or to decline. You are not put on a list.",
  },
] as const;

export function MeetingFacts() {
  return (
    <section className="facts" aria-label="Plain facts">
      {facts.map((fact) => (
        <article key={fact.title}>
          <h2>{fact.title}</h2>
          <p>{fact.body}</p>
        </article>
      ))}
    </section>
  );
}
