export interface Props {
  usps: UniqueSellingPoint[];
}

export interface UniqueSellingPoint {
  slug: string;
  heading: string;
  content: string;
  icon: string;
}
