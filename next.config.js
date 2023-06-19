const withPWA = require('next-pwa')({
  dest: '/',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development' // Disable PWA in development
});


module.exports = withPWA({
    // Following line is to let NextJS know about its domain on specific case:
  // 1. Project page : assetPrefix should be your project name (production only)
  // 2. User or Group page : assetPrefix should not be set, or just '/' (production only)
  // assetPrefix: isProd ? '/' : '',
  trailingSlash: true,
  // experimental: {
  //   forceSwcTransforms: true,
  // },
  
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