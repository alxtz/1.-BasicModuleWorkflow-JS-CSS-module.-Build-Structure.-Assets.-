# Basic Module WorkflowSteps

## Init
1. $git init
2. $npm init(-y)
3. $npm install webpack --save-dev
4. add Develop/ & Release/ folder
5. add entry.js index.html, add script:src to index.html
6. $webpack Develop/entry.js Release/build.js

## JS Modules & Entry, Output Config
1. add webpack.config.js
2. add settings to let webpack work
3. add a custom module file
4. exports it(through global exports object), and require it

## Require CSS as Module, Config Loaders for CSS
1. add style.css, require it
2. add css-loader & style-loader
3. import a css file

## Add Support for background-image: url(''), Structure our Assets
1. add Release/assets/background.jpg into our project
2. try to use it as background-image(Module parse failed)
3. add file-loader for image files(config test, outputPath, option file name)
4. by default file loader uses hash file names, and will auto bind to merged css
5. use name=[name].[ext] for your original name
6. this is just for demo and learning structure purpose, assets tend to structure more complicate in real projects
7. images works all fine no matter where you start your server

### Develop Notes
* use $webpack --display-error-details for debug details
* css-loader[module], is to enable the css module sepc, which you'll need a component system to support it
* beware of the sequence of module.rules.use
