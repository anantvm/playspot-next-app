/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode:false,
  reactCompiler: true,
  images:{
    domains:['www.google.com', 'lh3.googleusercontent.com']
  }
};

export default nextConfig;
