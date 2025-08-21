import type { NextConfig } from "next";
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkRehype from "remark-rehype";
import { compileMDX } from "next-mdx-remote/rsc";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },

  async redirects() {
    return [
      {
        source: '/modpack',
        destination: 'https://www.dropbox.com/scl/fi/f793krkghi6oo8nanzjqe/NeeuCraft.zip?rlkey=6o0rdgf8z86wp6982fokhxk8p&e=1&st=0x01tsjp&dl=1',
        permanent: true,
      },
      {
        source: '/map',
        destination: 'https://neeucraft.dynmap.xyz',
        permanent: true,
      },
    ]
  }
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
})

export default withMDX(nextConfig);
