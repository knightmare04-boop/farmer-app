const fs = require('fs');
const { parseFig } = require('openfig-core');

function guidToStr(g) {
  return g ? (g.sessionID + ':' + g.localID) : 'null';
}

async function mapImages() {
  const buffer = fs.readFileSync('Untitled.fig');
  const doc = await parseFig(buffer);

  const imageUsage = new Map();

  for (const n of doc.nodes) {
    if (n.fillPaints) {
      for (const p of n.fillPaints) {
        if (p.type === 'IMAGE' && p.image && p.image.hash) {
          const hash = Buffer.from(p.image.hash).toString('hex');
          if (!imageUsage.has(hash)) {
            imageUsage.set(hash, []);
          }
          imageUsage.get(hash).push({
            nodeName: n.name,
            type: n.type,
            size: n.size ? `${Math.round(n.size.x)}x${Math.round(n.size.y)}` : null,
          });
        }
      }
    }
  }

  const result = [];
  for (const [hash, nodes] of imageUsage.entries()) {
    result.push({
      hash,
      usageCount: nodes.length,
      sampleNodes: nodes.slice(0, 5)
    });
  }

  result.sort((a, b) => b.usageCount - a.usageCount);
  console.log(`Mapped ${result.length} unique images.`);
  console.log('Top used images:');
  result.slice(0, 25).forEach((item, idx) => {
    const nodeNames = item.sampleNodes.map(s => `"${s.nodeName}" (${s.size})`).join(', ');
    console.log(`${idx + 1}. [${item.hash}] (${item.usageCount} uses): ${nodeNames}`);
  });

  fs.writeFileSync('d:/moni/image_map.json', JSON.stringify(result, null, 2));
}

mapImages().catch(console.error);
