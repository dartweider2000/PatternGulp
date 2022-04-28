export const server = (done) => {
   app.plugins.browserSync.init({
      server: {
         baseDir: app.path.buildFolder
      },
      notify: false,
      browser: 'chrome',
      port: 3000
   });
};