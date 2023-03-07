/* Returns Directus Asset */
export const getDirectusImage = (id: string) => {
  return `${process.env.DIRECTUS_URL}/assets/${id}`;
};
