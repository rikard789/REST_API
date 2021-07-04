# REST_API

**Introduction** <br />
My first project created with use of JavaScript. Created to show use of basics of building web services interfaces.
Application is used to create server on which we gather our collection of words. Created by using node.js environment and express framework.

**How to use** <br />
First you have to start server by writing (in bash terminal which is in the folder with our app.js file and static folder) command:
>```*node app*```
Then you should start browser and write in search bar:
>```*localhost:5000* ```<br />
or <br />
>```*localhost:PORT*``` <br />
where PORT is port you set in app.js .

After clicking enter you should be albe to see site with instructions about how to use this application.<br />
There are few things you can do:
1. You can find words in collection when you write in search bar:
>*localhost:5000/showUniq* <br />
or find words with repetitions when you write in search bar: <br />
> *localhost:5000/show*
> 
<br />
2. You can add words to collection when you write in search bar:<br />
> *localhost:5000/add/something* where something is a word you want to add to collection.<br />
> 
3. You can remove words from collection when you write in search bar:<br />
> *localhost:5000/remove/something* where something is a word you want to remove from collection.<br />
> 
4. You can get amount of appearances of the word in the collection when you write in search bar:<br />
> *localhost:5000/count/something* where something is the word you want get count of appearances<br />
<br />


**Tested only on Windows**
