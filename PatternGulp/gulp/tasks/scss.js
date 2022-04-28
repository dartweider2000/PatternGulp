import sassCompil from 'sass';
import gulpSass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';

const sass = gulpSass(sassCompil);

export const scss = () => {
   return app.gulp.src(app.path.src.scss)
      .pipe(sass())
      .pipe(autoPrefixer({
         grid: true,
         overrideBrowserlist: ['last 5 versions'],
         cascade: true
      }))
      .pipe(app.plugins.replace(/@img\//, '../img/'))
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(rename({
         extname: '.min.css'
      }))
      .pipe(cleanCSS())
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browserSync.stream());
}