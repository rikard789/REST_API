# REST_API

**Introduction** <br />
My first project created with use of JavaScript. Created to show use of basics of building web services interfaces.
Application is used to create server on which we gather our collection of words. Created by using node.js environment and express framework.

**How to use** <br />
First you have to start server by writing ( in bash terminal which is in the folder with our app.js file and static folder ) command: 
```*node app*``` <br />
Then you should start browser and write in search bar:
```*localhost:5000* ```
or 
```*localhost:PORT*``` 
where PORT is port you set in app.js .

After clicking enter you should be albe to see site with instructions about how to use this application.<br />
There are few things you can do:
1. You can find words in collection when you write in search bar: <br />
```*localhost:5000/showUniq*``` <br />
or find words with repetitions when you write in search bar: <br />
``` *localhost:5000/show* ```<br />

2. You can add words to collection when you write in search bar:<br />
```*localhost:5000/add/something*``` where something is a word you want to add to collection.<br />
 
3. You can remove words from collection when you write in search bar:<br />
```*localhost:5000/remove/something*``` where something is a word you want to remove from collection.<br />

4. You can get amount of appearances of the word in the collection when you write in search bar:<br />
```*localhost:5000/count/something*``` where something is the word you want get count of appearances<br />
<br />
<br />

**Instalation** <br />
1.Node.js Installation <br />
I installed previous version of node.js because of some problems with compatibility. <br />
Link which I used: https://nodejs.org/dist/v14.17.1/node-v14.17.1-x64.msi <br />
<br />
2.Creation of package.json <br />
To create package.json file I used command: <br />
*npm init -y* <br />
<br />
3.Installation of needed modules <br />
To install needed modules I used command: <br />
*npm install express* <br />
*npm install body-parser* <br />
<br />

**Tested only on Windows**
