# learn-react-2021

- Trying to stand one REACT up app from scratch, by hand, without using the create-react-app. 

## You need npm 

```
kaunjovi@devbook learn-react-2021 % npm --version 
7.6.3
```

## use npm to create your package.json 

```
kaunjovi@devbook learn-react-2021 % npm init
This utility will walk you through creating a package.json file.
... 
... lines omitted for brevity. 
... 
```

## use npm to add react dependencies. 

```
kaunjovi@devbook learn-react-2021 % npm install react react-dom
added 6 packages, and audited 7 packages in 2s
found 0 vulnerabilities
```

- It was fairly fast. Did not really miss yarn for this. 
- The node_modules folder is added in the project folder. 
- It contains 6 folders. And another one .bin. So 7 in total. 
- You dont want them in the version control system. 
- So, add .gitignore. And use that to ignore node_modules folder. 
- There is also a package-lock.json. You want that in the git. 


## Start serving a basic hello world html

- add a hello world html file
- add webpack to start serving the webpage
- add a "start" action to package.json and have webpack serve the page. 
- Call that start action and your browser should open up with your index.html

```
npm install --save-dev webpack
```

```
"scripts": {

    "start": "webpack serve --open"

  }
```

```
kaunjovi@devbook learn-react-2021 % npm run start 

> learn-react-2021@1.0.0 start
> webpack serve --open

ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
... 
... lines omitted for brevity. 
... 
```


- Add a few more dependencies. 
- Add a webpack.config.js 
- Use html webpack plugin to pull together your index html in the bundle. 


```
npm install --save-dev webpack webpack-cli html-webpack-plugin webpack-dev-server
```

```javascript
var path = require('path');

var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {

    mode:'development',

    plugins : [

        new HtmlWebpackPlugin ({

            template : 'app/index.html'

        })

    ]

}
```
```
npm run start 
```




## Webpack, module bundler 

bundling JavaScript files for usage in a browser. 
Though it is also capable of transforming, bundling, or packaging just about any resource or asset.

Configuration


Check the steps below for webpack configuration-

touch webpack.config.js

Step 1- Add below snippet in this file


## Resources 

- [Setup React App From Square One Without Using Create-React-App](https://www.srijan.net/blog/setup-react-app-from-square-one-without-using-create-react-app)
