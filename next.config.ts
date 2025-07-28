const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "script-src 'self' https://telegram.org https://oauth.telegram.org 'unsafe-inline' 'unsafe-eval'; " +
              "frame-src https://oauth.telegram.org; " +
              "connect-src 'self'; " +
              "img-src 'self' data: https://telegram.org https://oauth.telegram.org; " +
              "style-src 'self' 'unsafe-inline';",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
