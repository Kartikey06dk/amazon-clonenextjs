/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol:"https",
                hostname:"fakestoreapi.com"
            },
            {
                protocol:"https",
                hostname:"i.gadgets360cdn.com"
            }
        ]
    }
};

export default nextConfig;
