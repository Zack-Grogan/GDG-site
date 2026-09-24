import type { Metadata } from "next";
import Link from "next/link";

import { MeetingFacts } from "@/components/meeting-facts";
import { offers } from "@/lib/offers";

export const metadata: Metadata = {
  title: "Work | Grogan Development Group",
  description:
    "A phone-ready page, paperwork done before the visit, and a quote that becomes the bill. Three hours with Zackariah Grogan.",
};

export default function WorkPage() {
  return (
    <>
      <header className="work-hero">
        <p className="kicker">Work</p>
        <h1>Three jobs. Nothing beside them.</h1>
        <p className="lede">
          If the trouble is a page, a form, or a bill typed twice, it is here.
          If it is something else, say so and I will tell you.
        </p>
      </header>
      {offers.map((offer, index) => (
        <article className="ledger" id={offer.slug} key={offer.slug}>
          <p className="job-index">{String(index + 1).padStart(2, "0")}</p>
          <div>
            <h2>{offer.title}</h2>
            <p className="body-copy">{offer.lede}</p>
          </div>
          <div>
            <ul className="situation-list">
              {offer.situations.map((situation) => (
                <li key={situation}>{situation}</li>
              ))}
            </ul>
            <p className="not-this">
              <strong>Outside this job: </strong>
              {offer.notThis}
            </p>
          </div>
        </article>
      ))}
      <MeetingFacts />
      <p className="hero-actions cta-band">
        <Link className="press-button" href="/start">
          Ask for a meeting
        </Link>
      </p>
    </>
  );
}
