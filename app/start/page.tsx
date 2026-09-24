import type { Metadata } from "next";

import { StartForm } from "@/components/start-form";

export const metadata: Metadata = {
  title: "Start | Grogan Development Group",
  description:
    "Write Zackariah Grogan. The note opens a message to info@grogan.dev. He replies to set three hours, or to decline.",
};

export default function StartPage() {
  return (
    <div className="start-grid">
      <header className="board-hero">
        <p className="kicker">Start</p>
        <h1>Tell me what is stuck.</h1>
        <p className="lede">
          The first sitting is three hours. We choose the place when we set
          the time. You leave with notes, a short list, and a yes or no.
        </p>
        <p className="body-copy">
          There is no rate card. A figure before we meet would be invented.
        </p>
        <p className="body-copy">
          This opens a message to info@grogan.dev. I read it to set a meeting
          or to say no. It does not sign you up for anything else.
        </p>
      </header>
      <StartForm />
    </div>
  );
}
