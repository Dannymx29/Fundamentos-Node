const sharp = require('sharp');

sharp('logo.png')
    .resize(80)
    .toFile('redized.png');

    sharp('logo.png')
    .resize(80)
    .grayscale()
    .toFile('redized.png');