import fileinclude from "gulp-file-include";
import versionNumber from 'gulp-version-number';
import htmlMinifier from 'gulp-html-minifier';

export const html = () => {
   return app.gulp.src(app.path.src.html)
      .pipe(fileinclude())
      .pipe(app.plugins.replace(/@img\//g, './img/'))
      .pipe(app.plugins.replace(/@html\//g, './'))
      .pipe(
         versionNumber({
            'value': '%DT%',
            'append': {
               'key': '_v',
               'cover': 0,
               'to': [
                  'css',
                  'js'
               ]
            },
            'output': 'file/version.json'
         })
      )
      .pipe(htmlMinifier({
         collapseWhitespace: true
      }))
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browserSync.stream());
}