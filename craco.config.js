module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Suppress source map warnings from node_modules
      webpackConfig.module.rules.forEach((rule) => {
        if (rule.use && Array.isArray(rule.use)) {
          rule.use.forEach((use) => {
            if (use.loader && use.loader.includes('source-map-loader')) {
              // Exclude node_modules from source-map-loader to prevent warnings
              if (!rule.exclude) {
                rule.exclude = /node_modules/;
              } else if (Array.isArray(rule.exclude)) {
                rule.exclude.push(/node_modules/);
              } else {
                rule.exclude = [rule.exclude, /node_modules/];
              }
            }
          });
        }
      });

      // Also ignore source map warnings in webpack's ignoreWarnings
      webpackConfig.ignoreWarnings = [
        ...(webpackConfig.ignoreWarnings || []),
        /Failed to parse source map/,
      ];

      return webpackConfig;
    },
  },
};
