/*
1. What is the difference between import and require?
2. How can you enable using the import syntax using node js
3. Give 2 node.js environment variables that are not available when using the import syntax.
4. Create 3 functions using the export/import syntax.
Import the file system module using the import syntax.
*/

/*
1. 
Require is Non-lexical,Import is lexical.
Require can be called at any time and place in the program, Import can’t be called conditionally
Require - .js, Import - .mjs
*/

/*
2. Files with an extension that is not .mjs, .cjs, .json, .node, or .js (when the nearest parent package.json file contains a top-level field "type" with a value of "module"
*/

/*
3. __filename, __dirname
*/

//4
import fs from 'fs';

//const { add, sub, divide } = require('./math');

//console.log(add(2, 2));

fs.writeFileSync('notes.txt', 'Hello world');
