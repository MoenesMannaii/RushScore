// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files',
            outputPath: `${isServer ? '../' : ''}static/files/`,
            name: '[name].[ext]',
          },
        },
      });
  
      return config;
    },
  };
  