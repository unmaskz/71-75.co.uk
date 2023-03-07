import { DirectusMarkdown } from '@/interfaces/directus.interface';

export interface Props {
  hero: Hero;
}

export interface Hero {
  heading: DirectusMarkdown;
  subheading: DirectusMarkdown;
  content: DirectusMarkdown;
  button_text: string;
  button_link: string;
}
