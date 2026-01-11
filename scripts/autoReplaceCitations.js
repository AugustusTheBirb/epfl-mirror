#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function computeImportPath(filePath) {
  // compute relative path from file to src/components/References/Citation
  const repoRoot = path.resolve(__dirname, '..');
  const target = path.join(repoRoot, 'src', 'components', 'References', 'Citation');
  let rel = path.relative(path.dirname(filePath), target);
  if (!rel.startsWith('.')) rel = './' + rel;
  // normalize to posix style for TSX import
  return rel.replace(/\\/g, '/');
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Find JSX text nodes between > and < and replace [N] tokens inside them
  const jsxTextRegex = />((?:.|\n|\r)*?)</g;
  let changed = false;

  content = content.replace(jsxTextRegex, (match, inner) => {
    const replaced = inner.replace(/\[(\d+)\]/g, (m, id) => {
      changed = true;
      return ` <Citation id=\"${id}\" /> `;
    });
    return '>' + replaced + '<';
  });

  if (!changed) {
    console.log(`${path.basename(filePath)}: no citation tokens found`);
    return;
  }

  // Add import for Citation if not present
  if (!/from\s+['\"][^'\"]*References\/Citation['\"]/m.test(content)) {
    const importPath = computeImportPath(filePath);
    // insert after the last import
    const importStmt = `import Citation from '${importPath}';\n`;
    const importRegex = /(^import[\s\S]*?;\n)/m;
    // try to insert after existing imports block
    const lines = content.split('\n');
    let insertAt = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) insertAt = i + 1;
    }
    lines.splice(insertAt, 0, importStmt.trim());
    content = lines.join('\n');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`${path.basename(filePath)}: citations replaced and file updated`);
}

function walkAndProcess(target) {
  const stat = fs.statSync(target);
  if (stat.isDirectory()) {
    const files = fs.readdirSync(target);
    files.forEach(f => walkAndProcess(path.join(target, f)));
    return;
  }
  if (target.endsWith('.tsx') || target.endsWith('.jsx')) {
    processFile(target);
  }
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node autoReplaceCitations.js <file-or-directory> [...]');
  process.exit(1);
}

args.forEach(a => {
  const p = path.resolve(a);
  if (fs.existsSync(p)) walkAndProcess(p);
  else console.warn(`Path not found: ${p}`);
});
