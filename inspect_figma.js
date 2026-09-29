const fs = require('fs');
const { parseFig } = require('openfig-core');

function guidToStr(g) {
  if (!g) return 'null';
  return g.sessionID + ':' + g.localID;
}

async function run() {
  const buffer = fs.readFileSync('Untitled.fig');
  const doc = await parseFig(buffer);
  
  const canvasMap = new Map();
  for (const n of doc.nodes) {
    if (n.type === 'CANVAS') {
      canvasMap.set(guidToStr(n.guid), n.name || 'Unnamed Canvas');
    }
  }
  
  for (const [cId, cName] of canvasMap.entries()) {
    console.log('\n========================================');
    console.log('CANVAS: ' + cName + ' (' + cId + ')');
    console.log('========================================');
    
    const items = doc.nodes.filter(n => {
      if (!n.parentIndex || !n.parentIndex.guid) return false;
      return guidToStr(n.parentIndex.guid) === cId;
    });
    
    items.forEach((item, idx) => {
      const sizeStr = item.size ? Math.round(item.size.x) + 'x' + Math.round(item.size.y) : 'N/A';
      console.log((idx + 1) + '. [' + item.type + '] "' + item.name + '" (' + sizeStr + ')');
    });
  }
}

run().catch(console.error);
