import type { Metadata } from "next";
import Link from "next/link";

import { MeetingFacts } from "@/components/meeting-facts";
import { basinCounties, places } from "@/lib/places";

export const metadata: Metadata = {
  title: "Basin | Grogan Development Group",
  description:
    "Tri-Cities means Kennewick, Pasco, and Richland. West Richland too. Travel is Grant, Adams, Franklin, and Lincoln counties.",
};

export default function BasinPage() {
  const home = places.filter((place) => place.role === "home");
  const nearby = places.filter((place) => place.role === "nearby");

  return (
    <>
      <header className="board-hero">
        <p className="kicker">Where we meet</p>
        <h1>Benton County is home. Four counties are the drive.</h1>
        <p className="lede">
          Tri-Cities means Kennewick, Pasco, and Richland. West Richland is
          next to them, not a fourth name in that nickname. Prosser is still
          Benton County, a drive from home.
        </p>
      </header>

      <div className="place-split">
      <section className="band">
        <h2>In town</h2>
        <ul className="place-list">
          {home.map((place) => (
            <li key={place.city}>
              <span>{place.city}</span>
              <span>{place.county} County</span>
            </li>
          ))}
          {nearby.map((place) => (
            <li key={place.city}>
              <span>{place.city}</span>
              <span>{place.county} County, nearby</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="band">
        <h2>The drive</h2>
        <p className="body-copy">
          Grant, Adams, Franklin, and Lincoln. Moses Lake, Othello, and Connell
          are the towns I name. Lincoln has no town listed because I have not
          picked one to stand for the county. If your town is in those four
          and missing here, you are still in range. Write it on the inquiry.
        </p>
        <ul className="place-list">
          {basinCounties.map((county) => {
            const city = places.find(
              (place) => place.role === "basin" && place.county === county,
            );
            return (
              <li key={county}>
                <span>{county} County</span>
                <span>{city ? city.city : "Name your town"}</span>
              </li>
            );
          })}
        </ul>
      </section>
      </div>

      <section className="band hours-band">
        <h2>The hours together</h2>
        <p className="body-copy">
          The first sitting is three hours. We agree the table, the office, or
          the shop when we set the time. I do not publish a street address
          because there is no public office to send you to.
        </p>
      </section>

      <MeetingFacts />
      <p className="hero-actions cta-band">
        <Link className="press-button" href="/start">
          Ask for a meeting
        </Link>
      </p>
    </>
  );
}
