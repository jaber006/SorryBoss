import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function walkDir(dir, files = []) {
  const items = readdirSync(dir);
  for (const item of items) {
    const fullPath = join(dir, item);
    if (statSync(fullPath).isDirectory()) {
      if (!item.includes('node_modules') && !item.startsWith('.')) {
        walkDir(fullPath, files);
      }
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = walkDir('./src');
let totalChanges = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf8');
  const original = content;
  
  // Replace cents amount in code
  content = content.replace(/amountCents:\s*2495/g, 'amountCents: 995');
  content = content.replace(/amount:\s*2495/g, 'amount: 995');
  content = content.replace(/unit_amount:\s*2495/g, 'unit_amount: 995');
  
  // Replace display prices
  content = content.replace(/\$24\.95/g, '$9.95');
  content = content.replace(/24\.95/g, '9.95');
  
  if (content !== original) {
    writeFileSync(file, content);
    console.log('Updated:', file);
    totalChanges++;
  }
}

console.log(`\nTotal files updated: ${totalChanges}`);
