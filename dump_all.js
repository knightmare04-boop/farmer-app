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

async function dumpMultipleScreens() {
  const buffer = fs.readFileSync('Untitled.fig');
  const doc = await parseFig(buffer);

  const childrenMap = new Map();
  for (const n of doc.nodes) {
    if (n.parentIndex && n.parentIndex.guid) {
      const pId = guidToStr(n.parentIndex.guid);
      if (!childrenMap.has(pId)) childrenMap.set(pId, []);
      childrenMap.get(pId).push(n);
    }
  }

  function getNodeSummary(node) {
    const fills = (node.fillPaints || []).map(p => {
      if (p.type === 'SOLID' && p.color) return toHex(p.color);
      if (p.type === 'IMAGE') return 'IMAGE(' + (p.image && p.image.hash ? Buffer.from(p.image.hash).toString('hex').slice(0, 8) : '') + ')';
      return p.type;
    });

    const item = {
      name: node.name,
      type: node.type,
      size: node.size ? `${Math.round(node.size.x)}x${Math.round(node.size.y)}` : null,
      fills: fills.length > 0 ? fills : undefined,
    };

    if (node.type === 'TEXT') {
      item.text = (node.characters || (node.textData && node.textData.characters) || '').trim();
    }

    const children = childrenMap.get(guidToStr(node.guid)) || [];
    if (children.length > 0) {
      item.children = children.map(getNodeSummary);
    }
    return item;
  }

  const screenNames = [
    'Main seller dashboard',
    '១. ជ្រើសរើសតួនាទី',
    '២. ថ្លឹង និងកត់ត្រាផលដំណាំ',
    '៣. ស្តុកបច្ចុប្បន្ន & អាយុកាល',
    '៦. ផ្សាយលក់បន្ទាន់ការពារការខូចខាត',
    'buyer-home',
    'buyer-browse',
    'buyer-vegetable-details',
    'buyer-cart',
    'buyer-checkout',
    'buyer-track-order',
    'buyer-receive-order'
  ];

  const results = {};
  for (const sName of screenNames) {
    const frame = doc.nodes.find(n => n.type === 'FRAME' && n.name && n.name.includes(sName));
    if (frame) {
      results[sName] = getNodeSummary(frame);
      console.log('Dumped:', sName, '(', frame.name, ')');
    } else {
      console.log('Not found:', sName);
    }
  }

  fs.writeFileSync('d:/moni/screens_detail.json', JSON.stringify(results, null, 2));
  console.log('Saved to screens_detail.json');
}

dumpMultipleScreens().catch(console.error);
