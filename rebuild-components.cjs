const fs = require('fs');
const HTMLtoJSX = require('htmltojsx');

const converter = new HTMLtoJSX({
  createClass: false,
});

let html = fs.readFileSync('public/body.html', 'utf8');

const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (bodyMatch) {
  html = bodyMatch[1];
}
html = html.replace(/<script>[\s\S]*?<\/script>/gi, '');

const sections = [
  'NAVBAR',
  'HERO',
  'TICKER',
  'STATS',
  'PROBLEM / SOLUTION',
  'FEATURES',
  'HOW IT WORKS',
  'TESTIMONIALS',
  'COMPARISON',
  'PRICING',
  'FAQ',
  'FINAL CTA',
  'FOOTER'
];

for (let i = 0; i < sections.length; i++) {
  const current = sections[i];
  const next = sections[i + 1];
  
  const currentMarker = `<!-- ===== ${current} ===== -->`;
  const nextMarker = next ? `<!-- ===== ${next} ===== -->` : null;
  
  const startIndex = html.indexOf(currentMarker);
  const endIndex = nextMarker ? html.indexOf(nextMarker) : html.length;
  
  if (startIndex === -1) {
    console.log(`Could not find ${currentMarker}`);
    continue;
  }
  
  let sectionHtml = html.substring(startIndex, endIndex).trim();
  let sectionJsx = converter.convert(sectionHtml);
  
  // Format the name
  let compName = current
    .split(/[\s/]+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('');
    
  if (compName === 'ProblemSolution') compName = 'ProblemSolution';

  const fileContent = `import React from 'react';\n\nexport default function ${compName}() {\n  return (\n    <>\n      ${sectionJsx}\n    </>\n  );\n}\n`;
  
  // Delete the ALL CAPS file if it exists
  const capsName = current.replace(/[^a-zA-Z0-9]/g, '');
  if (fs.existsSync(`src/components/${capsName}.tsx`)) {
      fs.unlinkSync(`src/components/${capsName}.tsx`);
  }
  
  fs.writeFileSync(`src/components/${compName}.tsx`, fileContent);
  console.log(`Successfully generated ${compName}.tsx`);
}
