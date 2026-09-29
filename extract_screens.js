const fs = require('fs');
const { parseFig } = require('openfig-core');

function guidToStr(g) {
  if (!g) return 'null';
  return g.sessionID + ':' + g.localID;
}

async function analyze() {
  const buffer = fs.readFileSync('Untitled.fig');
  const doc = await parseFig(buffer);

  const canvasMap = new Map();
  for (const n of doc.nodes) {
    if (n.type === 'CANVAS') {
      canvasMap.set(guidToStr(n.guid), n.name || 'Canvas');
    }
  }

  // Build parent to children map
  const childrenMap = new Map();
  for (const n of doc.nodes) {
    if (n.parentIndex && n.parentIndex.guid) {
      const pId = guidToStr(n.parentIndex.guid);
      if (!childrenMap.has(pId)) childrenMap.set(pId, []);
      childrenMap.get(pId).push(n);
    }
  }

  // Helper to collect all texts under a node
  function collectTexts(nodeGuid) {
    const texts = [];
    const children = childrenMap.get(nodeGuid) || [];
    for (const child of children) {
      if (child.type === 'TEXT') {
        const textStr = (child.characters || (child.textData && child.textData.characters) || '').trim();
        if (textStr) texts.push(textStr);
      }
      texts.push(...collectTexts(guidToStr(child.guid)));
    }
    return texts;
  }

  // Helper to collect all images under a node
  function collectImages(nodeGuid) {
    const images = [];
    const children = childrenMap.get(nodeGuid) || [];
    for (const child of children) {
      if (child.fillPaints) {
        for (const p of child.fillPaints) {
          if (p.type === 'IMAGE' && p.image && p.image.hash) {
            images.push({
              name: child.name,
              hash: Buffer.from(p.image.hash).toString('hex')
            });
          }
        }
      }
      images.push(...collectImages(guidToStr(child.guid)));
    }
    return images;
  }

  // Helper to collect structure/buttons/inputs under a node
  function collectStructure(nodeGuid, depth = 0) {
    if (depth > 3) return [];
    const items = [];
    const children = childrenMap.get(nodeGuid) || [];
    for (const child of children) {
      const item = {
        name: child.name,
        type: child.type,
        size: child.size ? Math.round(child.size.x) + 'x' + Math.round(child.size.y) : null,
      };
      if (child.type === 'TEXT') {
        item.text = (child.characters || (child.textData && child.textData.characters) || '').trim();
      }
      const sub = collectStructure(guidToStr(child.guid), depth + 1);
      if (sub.length > 0) item.children = sub;
      items.push(item);
    }
    return items;
  }

  const screenAnalysis = [];

  for (const [cId, cName] of canvasMap.entries()) {
    if (cName === 'Internal Only Canvas') continue;

    const screenNodes = doc.nodes.filter(n => {
      if (!n.parentIndex || !n.parentIndex.guid) return false;
      return guidToStr(n.parentIndex.guid) === cId && n.type === 'FRAME';
    });

    for (const s of screenNodes) {
      const sId = guidToStr(s.guid);
      const texts = collectTexts(sId);
      const images = collectImages(sId);
      screenAnalysis.push({
        canvas: cName,
        id: sId,
        name: s.name,
        size: s.size ? `${Math.round(s.size.x)}x${Math.round(s.size.y)}` : 'N/A',
        textCount: texts.length,
        sampleTexts: texts.slice(0, 15),
        imagesCount: images.length,
        sampleImages: images.slice(0, 5),
      });
    }
  }

  fs.writeFileSync('d:/moni/screens_summary.json', JSON.stringify(screenAnalysis, null, 2));
  console.log(`Analyzed ${screenAnalysis.length} screens. Saved to screens_summary.json`);
}

analyze().catch(console.error);
