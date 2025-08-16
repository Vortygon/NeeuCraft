import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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

export default nextConfig;
