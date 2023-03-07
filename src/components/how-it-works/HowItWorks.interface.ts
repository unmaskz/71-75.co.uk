import { DirectusId, DirectusMarkdown } from "@/interfaces/directus.interface";

export interface Props {
    items: HowItWorksItem[];
}

export interface HowItWorksItem {
    id: DirectusId;
    heading: DirectusMarkdown;
    content: DirectusMarkdown;
    number: number;
    icon: string;
}