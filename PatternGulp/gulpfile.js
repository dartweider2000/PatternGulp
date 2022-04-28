import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
   gulp: gulp,
   path: path,
   plugins: plugins
}

import { files } from './gulp/tasks/files.js';
import { reset, resetHtml, resetCss, resetImg, resetJs, resetFont, resetFiles, resetVideo } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';        
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { img } from './gulp/tasks/img.js';
import { js } from './gulp/tasks/js.js';
import { font } from './gulp/tasks/font.js';
import { video } from './gulp/tasks/video.js';

function watcher(){
   gulp.watch(path.watch.files, gulp.series(resetFiles, files));
   gulp.watch(path.watch.img, gulp.series(resetImg, img));
   gulp.watch(path.watch.font, gulp.series(resetFont, font));
   gulp.watch(path.watch.html, gulp.series(resetHtml, html));
   gulp.watch(path.watch.scss, gulp.series(resetCss, scss));
   gulp.watch(path.watch.js, gulp.series(resetJs, js));
   gulp.watch(path.watch.video, gulp.series(resetVideo, video));
}

const set = gulp.series(files, img, font, video, html, scss, js);
const refrash = gulp.parallel(watcher, server);

const dev = gulp.series(reset, set, refrash);

gulp.task('default', dev);