const path = require('path');

/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
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
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        additionalData: `@import "src/styles/variables.scss"; @import "src/styles/mixins.scss";`,
    },
};

module.exports = withTM(nextConfig);
