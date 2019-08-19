const imageminMozjpeg = require('imagemin-mozjpeg')
const imagemin = require('imagemin')
const imageminPngquant = require('imagemin-pngquant')
const imageminWebp = require('imagemin-webp')

///////////////////////////////////////////////////////////////////////////////
// CONFIGURATION
const JPEGImages = 'assets/images/*.{jpg,jpeg}'
const PNGImages = 'assets/images/*.png'
const imagesToConvert = 'assets/images/*.{jpg,jpeg,png}'
// const imagesToConvert = 'img/*.{jpg,jpeg,png}'
const output = 'img'

///////////////////////////////////////////////////////////////////////////////
// JPEG
const optimiseJPEGImages = () =>
  imagemin([JPEGImages], {
    destination: output,
    plugins: [
      imageminMozjpeg({
        quality: 75,
      }),
    ],
  })

///////////////////////////////////////////////////////////////////////////////
// PNG
const optimisePNGImages = () =>
  imagemin([PNGImages], {
    destination: output,
    plugins: [imageminPngquant({ quality: [0.6, 0.8] })],
  })

///////////////////////////////////////////////////////////////////////////////
// Images -> WEBP

const convertToWebp = () =>
  imagemin([imagesToConvert], {
    destination: output,
    plugins: [
      imageminWebp({
        quality: 75,
      }),
    ],
  })

// const convertJPGToWebp = () =>
//   imagemin([JPEGImages], {
//     destination: output,
//     plugins: [
//       imageminWebp({
//         quality: 75,
//       }),
//     ],
//   })

///////////////////////////////////////////////////////////////////////////////
// ENTRY
optimiseJPEGImages()
  .then(() => optimisePNGImages())
  .then(() => convertToWebp())
  .catch(error => console.log(error))
