export type OfferSlug =
  | "website-fix"
  | "forms-and-appointments"
  | "estimates-and-invoices";

export type Offer = {
  slug: OfferSlug;
  title: string;
  lede: string;
  notThis: string;
  situations: readonly [string, string, string];
};

export const offers: readonly Offer[] = [
  {
    slug: "website-fix",
    title: "Website fix",
    lede: "A person on a phone can call, see the real hours, and send a quote request.",
    notThis: "A new name for the shop, a cash register, or a fresh page for every service.",
    situations: [
      "The number on the page rings a line nobody watches.",
      "The page says open on a day the door is locked.",
      "The quote form works at a desk and stalls on a phone.",
    ],
  },
  {
    slug: "forms-and-appointments",
    title: "Forms and appointments",
    lede: "People finish the paperwork and ask for a time before they arrive.",
    notThis: "Charts, insurance bills, or a roster for an entire department.",
    situations: [
      "The visit starts late because the form is still blank.",
      "The form is awkward on a phone, so people skip it.",
      "Asking for a time still means a call, because the page never offered one.",
    ],
  },
  {
    slug: "estimates-and-invoices",
    title: "Estimates and invoices",
    lede: "The quote is written once. The bill is that quote, plus any change you already agreed.",
    notThis: "Bookkeeping, tax filing, or swapping out QuickBooks.",
    situations: [
      "Someone copies the quote onto the bill by hand.",
      "A changed line on the quote is still the old amount on the bill.",
      "Two copies of the same job are open, and the totals disagree.",
    ],
  },
];
