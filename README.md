# LifeScore

A small website and app in the making for personal developmentA small website and to be an app.

Developped with ExpressJS and ReactJS, writed in Typescript.

Uses mongoDB.

___

How to install ?

1. Download repo
2. execute inside folder (must avec typescript installed) :
```
> tsc
> cd ./dist/ && node server
```
3. In an other terminal
```
> cd client
> npm start
```

This will make you in dev build (not for deploying on server)

---

How to build for deployment ?

1. Download repo
2. execute inside folder (must avec typescript installed) :
```
> tsc
```
3. 
```
> cd client
> npm run build
```

4. Put the client build and your `./dist/` into the same folder
5. execute  `npm i -g concurrently`
6. execute `concurrently "cd ./dist/ node server.js" "serve ./build"`

---

Still in developpement

Made by GillanCodes with <3