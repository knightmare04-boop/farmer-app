const fs = require('fs');
const { parseFig } = require('openfig-core');

function guidToStr(g) {
  return g ? (g.sessionID + ':' + g.localID) : 'null';
}

function toHex(c) {
  if (!c) return 'none';
  const r = Math.round(c.r * 255).toString(16).padStart(2, '0');
  const g = Math.round(c.g * 255).toString(16).padStart(2, '0');
  const b = Math.round(c.b * 255).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`.toUpperCase();
}

async function inspectScreen(screenNameSubstring) {
  const buffer = fs.readFileSync('Untitled.fig');
  const doc = await parseFig(buffer);

  // Find the frame
  const targetFrame = doc.nodes.find(n => n.type === 'FRAME' && n.name && n.name.includes(screenNameSubstring));
  if (!targetFrame) {
    console.log('Frame not found for:', screenNameSubstring);
    return;
  }

  console.log('Found frame:', targetFrame.name, 'Size:', targetFrame.size);

  // Children map
  const childrenMap = new Map();
  for (const n of doc.nodes) {
    if (n.parentIndex && n.parentIndex.guid) {
      const pId = guidToStr(n.parentIndex.guid);
      if (!childrenMap.has(pId)) childrenMap.set(pId, []);
      childrenMap.get(pId).push(n);
    }
  }

  function dumpNode(node, depth = 0) {
    const indent = '  '.repeat(depth);
    const fills = (node.fillPaints || []).map(p => {
      if (p.type === 'SOLID' && p.color) return toHex(p.color);
      if (p.type === 'IMAGE') return 'IMAGE(' + (p.image && p.image.hash ? Buffer.from(p.image.hash).toString('hex').slice(0, 8) : '') + ')';
      return p.type;
    }).join(', ');

    let extra = '';
    if (node.type === 'TEXT') {
      const txt = (node.characters || (node.textData && node.textData.characters) || '').replace(/\n/g, ' ');
      extra = ` [TEXT: "${txt}"]`;
    }
    const size = node.size ? `${Math.round(node.size.x)}x${Math.round(node.size.y)}` : '';
    console.log(`${indent}- [${node.type}] "${node.name}" (${size}) fills: [${fills}]${extra}`);

    const children = childrenMap.get(guidToStr(node.guid)) || [];
    for (const child of children) {
      dumpNode(child, depth + 1);
    }
  }

  dumpNode(targetFrame);
}

inspectScreen(process.argv[2] || 'Main seller dashboard').catch(console.error);
