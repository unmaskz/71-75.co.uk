const path = require('path');

/** @type {import('next').NextConfig} */

const WithTM = require('next-transpile-modules')([
    'react-flexbox-grid',
    'flexboxgrid2',
]);

  
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        url: process.env.DIRECTUS_URL,
    },
    serverRuntimeConfig: {
        token: process.env.DIRECTUS_STATIC_TOKEN,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        additionalData: `@import "src/styles/variables.scss"; @import "src/styles/mixins.scss";`,
    },
};

module.exports = WithTM(nextConfig);
