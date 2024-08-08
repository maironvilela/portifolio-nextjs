/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['yt3.ggpht.com', 'th.bing.com', 'sa-east-1.graphassets.com'],
  },

  staticPageGenerationTimeout: 800,
  optimizeFonts: false,

}

export default nextConfig
