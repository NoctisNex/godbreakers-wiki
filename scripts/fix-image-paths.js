import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Fix image paths in all data files
const dataDir = path.join(rootDir, 'src', 'data');
const publicDataDir = path.join(rootDir, 'public', 'data');
const files = ['fragments.json', 'equipment.json', 'conditions.json', 'abilities.json'];

files.forEach(file => {
  const srcPath = path.join(dataDir, file);
  const publicPath = path.join(publicDataDir, file);
  
  if (fs.existsSync(srcPath)) {
    const data = JSON.parse(fs.readFileSync(srcPath, 'utf-8'));
    
    // Fix image paths - remove /public/ prefix
    const fixed = data.map(item => ({
      ...item,
      image: item.image.replace('/public/', '/godbreakers-wiki/')
    }));
    
    // Write to both locations
    fs.writeFileSync(srcPath, JSON.stringify(fixed, null, 2));
    fs.writeFileSync(publicPath, JSON.stringify(fixed, null, 2));
    
    console.log(`✓ Fixed ${file} (${fixed.length} items)`);
  }
});

console.log('\nAll image paths fixed!');

