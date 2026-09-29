const fs = require('fs');
const { parseFig } = require('openfig-core');

function toHex(c) {
  if (!c) return '#000000';
  const r = Math.round(c.r * 255).toString(16).padStart(2, '0');
  const g = Math.round(c.g * 255).toString(16).padStart(2, '0');
  const b = Math.round(c.b * 255).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`.toUpperCase();
}

async function extractTokens() {
  const buffer = fs.readFileSync('Untitled.fig');
  const doc = await parseFig(buffer);

  const colors = new Map();
  const fonts = new Map();

  for (const n of doc.nodes) {
    if (n.fillPaints) {
      for (const p of n.fillPaints) {
        if (p.type === 'SOLID' && p.color) {
          const hex = toHex(p.color);
          colors.set(hex, (colors.get(hex) || 0) + 1);
        }
      }
    }
    if (n.type === 'TEXT' && n.fontName) {
      const font = n.fontName.family + ' ' + (n.fontName.style || '');
      fonts.set(font, (fonts.get(font) || 0) + 1);
    }
  }

  // Sort colors by frequency
  const sortedColors = Array.from(colors.entries()).sort((a, b) => b[1] - a[1]);
  const sortedFonts = Array.from(fonts.entries()).sort((a, b) => b[1] - a[1]);

  console.log('Top Colors:');
  sortedColors.slice(0, 25).forEach(([hex, count]) => {
    console.log(`  ${hex}: ${count} occurrences`);
  });

  console.log('\nTop Fonts:');
  sortedFonts.slice(0, 15).forEach(([font, count]) => {
    console.log(`  ${font}: ${count} occurrences`);
  });
}

extractTokens().catch(console.error);
