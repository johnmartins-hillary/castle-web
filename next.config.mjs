/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";
const withPWA = withPWAInit({
  dest: "public"
});
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3000"
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, DELETE, PATCH, POST, PUT"
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Lenght, Content-MD5, Content-Type, Date, X-Api-Version"
          }
        ]
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**"
      }
    ]
  }
};

export default withPWA(nextConfig);
