import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { url } = publicRuntimeConfig;

/* Returns Directus Asset */
export const getDirectusImage = (id: string) => {
    return `${url}/assets/${id}`;
};
