/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.resolve.modules.push('.');
      return config;
    },
  };
  
  export default nextConfig;
  