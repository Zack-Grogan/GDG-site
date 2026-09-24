import { MeetingFacts } from "@/components/meeting-facts";
import { offers } from "@/lib/offers";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="board">
        <header className="board-hero">
          <p className="kicker">Tri-Cities, Washington</p>
          <h1>I fix the page, the paperwork, and the bill.</h1>
          <p className="lede">
            Grogan Development Group LLC. Kennewick, Pasco, and Richland, and
            West Richland.
            You sit with me. I do the work.
          </p>
          <p className="hero-actions">
            <Link className="press-button" href="/start">
              Ask for a meeting
            </Link>
            <a className="text-link" href="mailto:info@grogan.dev">
              info@grogan.dev
            </a>
          </p>
        </header>
        <nav className="board-index" aria-label="The three jobs">
          {offers.map((offer, index) => (
            <Link key={offer.slug} className="board-row" href={`/work#${offer.slug}`}>
              <p className="job-index">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2>{offer.title}</h2>
                <p>{offer.lede}</p>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      <section className="after" aria-labelledby="next-heading">
        <div className="after-intro">
          <h2 id="next-heading">After you write</h2>
        </div>
        <ol className="steps">
          <li>You name what is stuck.</li>
          <li>We meet for three hours, at a place chosen when the time is set.</li>
          <li>You leave holding notes, the first things to fix, and a yes or no.</li>
        </ol>
        <div className="after-note">
          <p className="body-copy">
            There are no past clients on this site. Making some up would be a lie.
          </p>
          <p className="body-copy">
            <Link className="text-link" href="/basin">
              I live in Benton County and drive Grant, Adams, Franklin, and Lincoln.
            </Link>
          </p>
        </div>
      </section>

      <MeetingFacts />
    </>
  );
}
