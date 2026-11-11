const sharp = require('sharp');

async function processLogo() {
  try {
    await sharp('src/assets/logo.png')
      .trim({
        background: { r: 0, g: 0, b: 0, alpha: 1 },
        threshold: 15 // Trim all black pixels
      })
      .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } }) // Ensure it's square
      .toFile('src/assets/logo-cropped.png');

    console.log('Successfully cropped logo!');
  } catch (err) {
    console.error(err);
  }
}

processLogo();
