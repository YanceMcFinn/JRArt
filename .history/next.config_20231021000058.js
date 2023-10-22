/** @type {import('next').NextConfig} */
const nextConfig = {module: { 
  rules: [ 
     { test: /.svg$/i, 
       issuer: /.[jt]sx?$/, 
      use: ['@svgr/webpack'],         
},       
],    
},   
}

module.exports = nextConfig

module.exports = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
}