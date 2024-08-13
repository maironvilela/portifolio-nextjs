/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'yt3.ggpht.com',
      'th.bing.com',
      'sa-east-1.graphassets.com',
      'imgs.search.brave.com',
      'cdn.pixabay.com',
      'images.pexels.com',
      'img.freepik.com',
      'images.remotePatterns',
    ],
  },
}

export default nextConfig
