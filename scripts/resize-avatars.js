const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const avatarDir = path.join(__dirname, '../public/avatars');
const outputDir = path.join(__dirname, '../public/avatars');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function resizeImages() {
  const files = fs.readdirSync(avatarDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(avatarDir, file);
      const outputPath = path.join(outputDir, file);
      
      await sharp(inputPath)
        .resize(256, 256, {
          fit: 'cover',
          position: 'center'
        })
        .png({ quality: 80 })
        .toFile(outputPath + '.temp');

      // Replace original file with optimized version
      fs.unlinkSync(inputPath);
      fs.renameSync(outputPath + '.temp', outputPath);
      
      console.log(`Processed: ${file}`);
    }
  }
}

resizeImages()
  .then(() => console.log('All images processed'))
  .catch(err => console.error('Error processing images:', err)); 