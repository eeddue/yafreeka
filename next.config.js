/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [{hostname:'app.yafreeka.com'}, {hostname:'picsum.photos'}, {hostname:'loremflickr.com'}]
    }
}

module.exports = nextConfig
