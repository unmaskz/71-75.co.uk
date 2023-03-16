import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Item {
    slug: string;
    text: string;
    icon?: IconDefinition;
    children?: SubItem[];
    href?: string | undefined;
}

export interface SubItem {
    slug: string;
    text: string;
    href: string;
}
