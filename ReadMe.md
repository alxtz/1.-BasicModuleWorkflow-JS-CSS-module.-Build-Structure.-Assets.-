# Basic Module WorkflowSteps

## Init
1. $git init
2. $npm init(-y)
3. $npm install webpack --save-dev
4. add Develop/ & Release/ folder
5. add entry.js index.html, add script:src to index.html
6. $webpack Develop/entry.js Release/build.js

## JS modules & Entry, Output Config
1. add webpack.config.js
2. add settings to let webpack work
3. add a custom module file
4. exports it(through global exports object), and require it
