const withPWA = require('next-pwa')({
  dest: '/',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development' // Disable PWA in development
});


module.exports = withPWA({
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  webpack: (config) => {
    // load worker files as a component `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker"
          }
        }
      ]
    });

    return config;
  }
}
);