const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#57432D' ,'@link-color': '#EBC47A','@success-color': '#EBC47A', '@error-color': '#9E4A4F'} ,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};