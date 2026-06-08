const fs = require('fs');

const html = fs.readFileSync('public/body.html', 'utf8');

// Extract CSS from <style> tag
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
if (styleMatch) {
  fs.writeFileSync('src/index.css', styleMatch[1]);
  console.log('CSS extracted: ' + styleMatch[1].length + ' bytes');
} else {
  console.log('ERROR: No <style> found');
}
