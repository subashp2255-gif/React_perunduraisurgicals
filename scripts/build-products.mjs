import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, '../../logesh perundurai-surgicals/index.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const start = html.indexOf('<!-- PRODUCTS -->');
const end = html.indexOf('<!-- WHY US -->');
let block = html.slice(start, end);

block = block.replace(/<!--[\s\S]*?-->/g, '');
block = block.replace(/class=/g, 'className=');
block = block.replace(/onclick="showCat\('([^']+)',this\)"/g, "onClick={() => setActiveCat('$1')}");
block = block.replace(/stroke-width=/g, 'strokeWidth=');
block = block.replace(/stroke-linecap=/g, 'strokeLinecap=');
block = block.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
block = block.replace(/fill-opacity=/g, 'fillOpacity=');
block = block.replace(/clip-rule=/g, 'clipRule=');
block = block.replace(/fill-rule=/g, 'fillRule=');

block = block.replace(/<img([^>]*?)src="([^"]+)"/g, (_m, before, src) => {
  const safe = src.replace(/\\/g, '/').replace(/'/g, "\\'");
  return `<img${before}src={publicUrl('${safe}')}`;
});

const cats = ['surgical', 'wound', 'iv', 'diag', 'ppe', 'pharma'];
for (const c of cats) {
  if (c === 'surgical') {
    block = block.replace(
      `<div className="pcat-card active reveal" onClick={() => setActiveCat('surgical')}>`,
      `<div className={\`pcat-card reveal \${activeCat === 'surgical' ? 'active' : ''}\`} onClick={() => setActiveCat('surgical')}>`
    );
  } else {
    block = block.replace(
      `<div className="pcat-card reveal" onClick={() => setActiveCat('${c}')}>`,
      `<div className={\`pcat-card reveal \${activeCat === '${c}' ? 'active' : ''}\`} onClick={() => setActiveCat('${c}')}>`
    );
  }
}

block = block.replace(
  `<div className="pcat-detail active" id="cat-surgical">`,
  `<div className={\`pcat-detail \${activeCat === 'surgical' ? 'active' : ''}\`} id="cat-surgical">`
);
for (const c of ['wound', 'iv', 'diag', 'ppe', 'pharma']) {
  block = block.replace(
    `<div className="pcat-detail" id="cat-${c}">`,
    `<div className={\`pcat-detail \${activeCat === '${c}' ? 'active' : ''}\`} id="cat-${c}">`
  );
}

const inner = block
  .split('\n')
  .map((line) => (line.trim() ? `    ${line}` : ''))
  .join('\n');

const out = `import { useState } from 'react';
import { publicUrl } from '../utils/publicUrl';

export default function Products() {
  const [activeCat, setActiveCat] = useState('surgical');

  return (
${inner}
  );
}
`;

fs.writeFileSync(path.join(__dirname, '../src/components/Products.jsx'), out, 'utf8');
console.log('Wrote Products.jsx');
