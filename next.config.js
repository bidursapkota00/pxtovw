const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
    //for internationalization
    i18n: {
        locales: ['en', 'ne'],
        defaultLocale: 'en'
    },

    //list of image domains for next/image
    images: {
        domains: ["mcqhall-storage.s3.ap-south-1.amazonaws.com"]
    }
})