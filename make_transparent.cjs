const sharp = require('sharp');

async function processLogo() {
  try {
    const { data, info } = await sharp('src/assets/logo.jpg')
      .raw()
      .toBuffer({ resolveWithObject: true });

    // data is a Buffer with RGB values (since JPG)
    // We want to create an RGBA buffer
    const rgbaData = Buffer.alloc(info.width * info.height * 4);

    for (let i = 0; i < info.width * info.height; i++) {
      const r = data[i * info.channels + 0];
      const g = data[i * info.channels + 1];
      const b = data[i * info.channels + 2];

      const brightness = Math.max(r, g, b);
      
      if (brightness < 10) {
        rgbaData[i * 4 + 3] = 0; // Alpha
      } else {
        let alpha = Math.min(255, brightness * 1.5);
        rgbaData[i * 4 + 3] = alpha;
        
        if (alpha < 255) {
          const factor = 255 / Math.max(1, alpha);
          rgbaData[i * 4 + 0] = Math.min(255, r * factor);
          rgbaData[i * 4 + 1] = Math.min(255, g * factor);
          rgbaData[i * 4 + 2] = Math.min(255, b * factor);
        } else {
          rgbaData[i * 4 + 0] = r;
          rgbaData[i * 4 + 1] = g;
          rgbaData[i * 4 + 2] = b;
        }
      }
    }

    await sharp(rgbaData, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .resize(256, 256) // Resize to a good logo size
    .png()
    .toFile('src/assets/logo.png');

    console.log('Successfully created transparent logo.png!');
  } catch (err) {
    console.error(err);
  }
}

processLogo();
