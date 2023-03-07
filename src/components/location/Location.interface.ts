import {
  DirectusImage,
  DirectusMarkdown,
} from '@/interfaces/directus.interface';

export interface Props {
  location: Location;
}

export interface Location {
  heading: DirectusMarkdown;
  content: DirectusMarkdown;
  image: DirectusImage;
}
