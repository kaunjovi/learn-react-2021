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
 


## Resources 

- [Setup React App From Square One Without Using Create-React-App](https://www.srijan.net/blog/setup-react-app-from-square-one-without-using-create-react-app)
