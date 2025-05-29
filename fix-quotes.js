const fs = require('fs');
const path = require('path');

const files = [
  'src/app/category/european/page.tsx',
  'src/app/country/[slug]/page.tsx',
  'src/app/destination/[slug]/page.tsx',
  'src/app/page.tsx',
  'src/components/AboutAuthor.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace single quotes with HTML entities
  content = content.replace(/(?<=[^\\])'/g, '&apos;');
  
  // Replace double quotes with HTML entities
  content = content.replace(/(?<=[^\\])"/g, '&quot;');
  
  fs.writeFileSync(filePath, content);
}); 