const fs = require('fs');
const path = require('path');

const xmlPath = path.join(__dirname, 'extracted_docx', 'word', 'document.xml');
const xmlContent = fs.readFileSync(xmlPath, 'utf8');

// Simple XML parser to extract paragraphs and tables
// Replace XML tags while preserving paragraphs (<w:p>) and table cells (<w:tc>), table rows (<w:tr>)
let text = xmlContent
  .replace(/<w:p [^>]*>|<w:p>/g, '\n[P] ')
  .replace(/<\/w:p>/g, '\n')
  .replace(/<w:tr [^>]*>|<w:tr>/g, '\n[ROW] ')
  .replace(/<w:tc [^>]*>|<w:tc>/g, ' [CELL] ')
  .replace(/<w:tab\/>/g, '\t')
  .replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&apos;/g, "'");

// Clean up extra blank lines
const cleanText = text
  .split('\n')
  .map(line => line.trim())
  .filter(line => line.length > 0)
  .join('\n');

fs.writeFileSync(path.join(__dirname, 'extracted_text.txt'), cleanText, 'utf8');
console.log('Successfully extracted text from document.xml. Total lines:', cleanText.split('\n').length);
