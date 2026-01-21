/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/marketing-portfolio' : '',
  assetPrefix: isGithubPages ? '/marketing-portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;