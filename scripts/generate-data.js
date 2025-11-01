import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Utility to convert filename to readable name
function filenameToName(filename) {
  return filename
    .replace(/\.png$/i, '')
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Utility to generate ID from filename
function filenameToId(filename) {
  return filename
    .replace(/\.png$/i, '')
    .toLowerCase()
    .replace(/\s+/g, '-');
}

// Generate fragments data
function generateFragments() {
  const fragmentsDir = path.join(rootDir, 'public', 'Media', 'Fragments');
  const categories = ['Arms', 'Chest', 'Feet', 'Legs', 'Shoulder'];
  const fragments = [];

  categories.forEach(category => {
    const categoryDir = path.join(fragmentsDir, category);
    if (fs.existsSync(categoryDir)) {
      const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.png'));
      files.forEach(file => {
        fragments.push({
          id: filenameToId(file),
          name: filenameToName(file),
          category: category.toLowerCase(),
          image: `/godbreakers-wiki/Media/Fragments/${category}/${file}`,
          description: 'Add your description here from the game screenshot',
          baseDescription: 'Base effect description',
          upgradedDescription: 'Upgraded effect description'
        });
      });
    }
  });

  return fragments;
}

// Generate equipment data
function generateEquipment() {
  const equipmentDir = path.join(rootDir, 'public', 'Media', 'Equipments');
  const equipment = [];

  if (fs.existsSync(equipmentDir)) {
    const files = fs.readdirSync(equipmentDir).filter(f => f.endsWith('.png'));
    files.forEach(file => {
      const name = filenameToName(file);
      let type = 'equipment';
      
      if (name.toLowerCase().includes('orb')) type = 'orb';
      else if (name.toLowerCase().includes('trap')) type = 'trap';
      else if (name.toLowerCase().includes('generator')) type = 'generator';
      else if (name.toLowerCase().includes('pendant')) type = 'pendant';
      else if (name.toLowerCase().includes('blessing')) type = 'blessing';
      else if (name.toLowerCase().includes('aura')) type = 'aura';
      else if (name.toLowerCase().includes('dispenser')) type = 'dispenser';

      equipment.push({
        id: filenameToId(file),
        name: name,
        type: type,
        image: `/godbreakers-wiki/Media/Equipments/${file}`,
        description: 'Add your description here from the game screenshot',
        effect: 'Effect description'
      });
    });
  }

  return equipment;
}

// Generate conditions data
function generateConditions() {
  const conditionsDir = path.join(rootDir, 'public', 'Media', 'Conditions');
  const types = {
    'Buff': 'buff',
    'Debuff': 'debuff',
    'DOT_Damage-Over-Time': 'dot',
    'Effect': 'effect'
  };
  const conditions = [];

  Object.keys(types).forEach(folder => {
    const typeDir = path.join(conditionsDir, folder);
    if (fs.existsSync(typeDir)) {
      const files = fs.readdirSync(typeDir).filter(f => f.endsWith('.png'));
      files.forEach(file => {
        conditions.push({
          id: filenameToId(file),
          name: filenameToName(file),
          type: types[folder],
          image: `/godbreakers-wiki/Media/Conditions/${folder}/${file}`,
          description: 'Add your description here from the game screenshot',
          effect: 'Effect description'
        });
      });
    }
  });

  return conditions;
}

// Generate abilities data
function generateAbilities() {
  const abilitiesDir = path.join(rootDir, 'public', 'Media', 'Godbreak Abilities');
  const abilities = [];

  if (fs.existsSync(abilitiesDir)) {
    const files = fs.readdirSync(abilitiesDir).filter(f => f.endsWith('.png'));
    files.forEach(file => {
      abilities.push({
        id: filenameToId(file),
        name: filenameToName(file),
        image: `/godbreakers-wiki/Media/Godbreak Abilities/${file}`,
        description: 'Add your description here from the game screenshot',
        effect: 'Effect description',
        cooldown: 'TBD'
      });
    });
  }

  return abilities;
}

// Main execution
console.log('Generating data files from Media folder...\n');

const fragments = generateFragments();
const equipment = generateEquipment();
const conditions = generateConditions();
const abilities = generateAbilities();

// Write files to both src/data and public/data
const srcDataDir = path.join(rootDir, 'src', 'data');
const publicDataDir = path.join(rootDir, 'public', 'data');

// Ensure public/data directory exists
if (!fs.existsSync(publicDataDir)) {
  fs.mkdirSync(publicDataDir, { recursive: true });
}

// Write fragments
fs.writeFileSync(
  path.join(srcDataDir, 'fragments.json'),
  JSON.stringify(fragments, null, 2)
);
fs.writeFileSync(
  path.join(publicDataDir, 'fragments.json'),
  JSON.stringify(fragments, null, 2)
);
console.log(`✓ Generated ${fragments.length} fragments`);

// Write equipment
fs.writeFileSync(
  path.join(srcDataDir, 'equipment.json'),
  JSON.stringify(equipment, null, 2)
);
fs.writeFileSync(
  path.join(publicDataDir, 'equipment.json'),
  JSON.stringify(equipment, null, 2)
);
console.log(`✓ Generated ${equipment.length} equipment items`);

// Write conditions
fs.writeFileSync(
  path.join(srcDataDir, 'conditions.json'),
  JSON.stringify(conditions, null, 2)
);
fs.writeFileSync(
  path.join(publicDataDir, 'conditions.json'),
  JSON.stringify(conditions, null, 2)
);
console.log(`✓ Generated ${conditions.length} conditions`);

// Write abilities
fs.writeFileSync(
  path.join(srcDataDir, 'abilities.json'),
  JSON.stringify(abilities, null, 2)
);
fs.writeFileSync(
  path.join(publicDataDir, 'abilities.json'),
  JSON.stringify(abilities, null, 2)
);
console.log(`✓ Generated ${abilities.length} abilities`);

console.log('\nAll data files generated successfully!');
console.log('Files written to both src/data/ and public/data/');
console.log('Now you can fill in the descriptions from your game screenshots.');

