import { DirectusMarkdown } from '@/interfaces/directus.interface';

export interface Props {
    heading: DirectusMarkdown;
    subheading?: DirectusMarkdown;
    content?: DirectusMarkdown;
    alignment?: string;
}
