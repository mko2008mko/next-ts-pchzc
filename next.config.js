const withTypescript = require('@zeit/next-typescript');
const withLess = require('@zeit/next-less');
const autoprefixer = require('autoprefixer');

module.exports = withTypescript(
  withLess({
    // webpack(config, {}) {
    //   config.module.rules.push({
    //     loader: 'postcss-loader',
    //     options: {
    //       // Necessary for external CSS imports to work
    //       // https://github.com/facebookincubator/create-react-app/issues/2677
    //       ident: 'postcss',
    //       plugins: () => [
    //         require('postcss-flexbugs-fixes'),
    //         autoprefixer({
    //           browsers: [
    //             '>1%',
    //             'last 4 versions',
    //             'Firefox ESR',
    //             'not ie < 9' // React doesn't support IE8 anyway
    //           ],
    //           flexbox: 'no-2009'
    //         })
    //       ]
    //     }
    //   });

    //   return config;
    // }
    postcssLoaderOptions: {
      ident: 'postcss',
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        autoprefixer({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9' // React doesn't support IE8 anyway
          ],
          flexbox: 'no-2009'
        })
      ]
    }
  })
);
