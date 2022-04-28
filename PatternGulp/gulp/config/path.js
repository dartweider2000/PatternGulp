const buildFolder = './dist';
const srcFolder = './src';

export const path = {
   src: {
      js: `${srcFolder}/js/main.js`,
      files: `${srcFolder}/files/**/*.*`,
      html: `${srcFolder}/*.html`,
      scss: `${srcFolder}/scss/styles.scss`,
      img: `${srcFolder}/img/**/*.*`,
      font: `${srcFolder}/font/*.*`,
      video: `${srcFolder}/video/**/*.*`
   },
   build: {
      js: `${buildFolder}/js/`,
      files: `${buildFolder}/files/`,
      html: `${buildFolder}/`,
      css: `${buildFolder}/css/`,
      img: `${buildFolder}/img/`,
      font: `${buildFolder}/font/`,
      video: `${buildFolder}/video/`
   },
   watch: {
      js: `${srcFolder}/js/**/*.js`,
      files: `${srcFolder}/files/**/*.*`,
      html: `${srcFolder}/**/*.html`,
      scss: `${srcFolder}/scss/**/*.scss`,
      img: `${srcFolder}/img/**/*.*`,
      font: `${srcFolder}/font/*.*`,
      video: `${srcFolder}/video/**/*.*`
   },
   del: {
      js: `${buildFolder}/js`,
      files: `${buildFolder}/files`,
      html: `${buildFolder}/*.html`,
      css: `${buildFolder}/css`,
      img: `${buildFolder}/img`,
      font: `${buildFolder}/font`,
      video: `${buildFolder}/video`
   },
   srcFolder: srcFolder,
   buildFolder: buildFolder,
   clean: buildFolder
};