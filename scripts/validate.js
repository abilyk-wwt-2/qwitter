#!/usr/bin/env node

/**
 * Simple validation script for Vue/JavaScript files
 * Checks for:
 * - Valid Vue component structure
 * - Console.log statements in production code
 * - Basic file integrity
 */

const fs = require('fs');
const path = require('path');

const ERRORS = [];
const WARNINGS = [];

function findFiles(dir, ext) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', 'dist', '.git', '.quasar', 'src-cordova', 'src-electron'].includes(item)) {
        files.push(...findFiles(fullPath, ext));
      }
    } else if (item.endsWith(ext)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function validateVueFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Check for basic Vue structure
    if (content.includes('<template>') && !content.includes('</template>')) {
      ERRORS.push(`${filePath}: Missing closing </template> tag`);
    }
    if (content.includes('<script>') && !content.includes('</script>')) {
      ERRORS.push(`${filePath}: Missing closing </script> tag`);
    }
    
    // Check for console.log in production code
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('console.log') && !line.trim().startsWith('//')) {
        WARNINGS.push(`${filePath}:${idx + 1}: Found console.log statement`);
      }
    });
    
  } catch (err) {
    ERRORS.push(`${filePath}: ${err.message}`);
  }
}

function validateJsFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Check for basic syntax issues (not using Function constructor for ES6 modules)
    // Just check for matching braces and brackets
    let braceCount = 0;
    let bracketCount = 0;
    let parenCount = 0;
    
    for (const char of content) {
      if (char === '{') braceCount++;
      if (char === '}') braceCount--;
      if (char === '[') bracketCount++;
      if (char === ']') bracketCount--;
      if (char === '(') parenCount++;
      if (char === ')') parenCount--;
    }
    
    if (braceCount !== 0) {
      ERRORS.push(`${filePath}: Mismatched braces (${braceCount > 0 ? 'missing closing' : 'extra closing'} braces)`);
    }
    if (bracketCount !== 0) {
      ERRORS.push(`${filePath}: Mismatched brackets (${bracketCount > 0 ? 'missing closing' : 'extra closing'} brackets)`);
    }
    if (parenCount !== 0) {
      ERRORS.push(`${filePath}: Mismatched parentheses (${parenCount > 0 ? 'missing closing' : 'extra closing'} parentheses)`);
    }
    
    // Check for console.log in production code
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('console.log') && !line.trim().startsWith('//')) {
        WARNINGS.push(`${filePath}:${idx + 1}: Found console.log statement`);
      }
    });
    
  } catch (err) {
    ERRORS.push(`${filePath}: ${err.message}`);
  }
}

// Run validation
console.log('🔍 Running validation tests...\n');

const vueFiles = findFiles('src', '.vue');
const jsFiles = findFiles('src', '.js');

console.log(`Found ${vueFiles.length} Vue files and ${jsFiles.length} JavaScript files\n`);

vueFiles.forEach(validateVueFile);
jsFiles.forEach(validateJsFile);

// Report results
if (WARNINGS.length > 0) {
  console.log('⚠️  Warnings:');
  WARNINGS.forEach(w => console.log(`  ${w}`));
  console.log();
}

if (ERRORS.length > 0) {
  console.log('❌ Errors:');
  ERRORS.forEach(e => console.log(`  ${e}`));
  console.log();
  process.exit(1);
} else {
  console.log('✅ All validation checks passed!');
  process.exit(0);
}
