import slugify from 'slugify';

export const slug = (slug: string) => {
    return slugify(slug.toLowerCase());
}