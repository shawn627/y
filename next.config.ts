
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)', // Apply to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' https://telegram.org; frame-src https://oauth.telegram.org",
          },
        ],
      },
    ]
  },
}

export default nextConfig;
