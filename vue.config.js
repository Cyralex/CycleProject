const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // devServer: {
  //   port: 3000, // your desired port number
  // },
  outputDir: `../${process.env.VUE_APP_SERVER_DIR}/public`,
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
