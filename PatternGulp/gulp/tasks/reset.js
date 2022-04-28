import del from 'del';

export { reset, resetHtml, resetCss, resetImg, resetJs, resetFont, resetFiles, resetVideo };

const reset = () => {
   return del(app.path.clean);
}

const resetHtml = () => {
   return del(app.path.del.html);
}

const resetCss = () => {
   return del(app.path.del.css);
}

const resetJs = () => {
   return del(app.path.del.js);
}

const resetImg = () => {
   return del(app.path.del.img);
}

const resetFiles = () => {
   return del(app.path.del.files);
}

const resetFont = () => {
   return del(app.path.del.font);
}

const resetVideo = () => {
   return del(app.path.del.video);
}