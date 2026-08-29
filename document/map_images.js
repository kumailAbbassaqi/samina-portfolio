const fs = require('fs');
const path = require('path');

const relsPath = path.join(__dirname, 'extracted_docx', 'word', '_rels', 'document.xml.rels');
const relsContent = fs.readFileSync(relsPath, 'utf8');

const relsMap = {};
const relMatches = relsContent.matchAll(/Id="([^"]+)"[^>]*Target="([^"]+)"/g);
for (const match of relMatches) {
  relsMap[match[1]] = match[2];
}

const docXmlPath = path.join(__dirname, 'extracted_docx', 'word', 'document.xml');
const docXml = fs.readFileSync(docXmlPath, 'utf8');

// Match paragraphs with images
const pList = docXml.split(/<w:p [^>]*>|<w:p>/);
console.log('Paragraph count:', pList.length);

const imageCaptions = [];
for (let i = 0; i < pList.length; i++) {
  const p = pList[i];
  const imgMatch = p.match(/r:embed="([^"]+)"/);
  const text = p.replace(/<[^>]+>/g, '').trim();
  if (imgMatch) {
    const rId = imgMatch[1];
    const target = relsMap[rId] || rId;
    // Find nearby text (previous and current paragraphs)
    const prevText = i > 0 ? pList[i - 1].replace(/<[^>]+>/g, '').trim() : '';
    const nextText = i < pList.length - 1 ? pList[i + 1].replace(/<[^>]+>/g, '').trim() : '';
    imageCaptions.push({
      rId,
      target,
      text,
      prevText,
      nextText
    });
  }
}

console.log(JSON.stringify(imageCaptions, null, 2));
