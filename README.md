# REST_API

**Introduction** <br />
My first project created with use of JavaScript. Created to show use of basics of building web services interfaces.
Application is used to create server on which we gather our collection of words. Created by using node.js environment and express framework.

**How to use** <br />
First you have to start server by writing (in bash terminal which is in the folder with our app.js file and static folder) command:
*node app*
Then you should start browser and write in search bar:
>*localhost:5000* 
or 
>*localhost:PORT* 
where PORT is port you set in app.js .

After clicking enter you should be albe to see site with instructions about how to use this application.\n
There are few things you can do:
1. You can find words in collection when you write in search bar:
>*localhost:5000/showUniq*
<p> or find words with repetitions when you write in search bar: </p>
>*localhost:5000/show*
<p></p>
2. You can add words to collection when you write in search bar:
>*localhost:5000/add/something* where something is a word you want to add to collection.
3. You can remove words from collection when you write in search bar:
>*localhost:5000/remove/something* where something is a word you want to remove from collection.
4. You can get amount of appearances of the word in the collection when you write in search bar:
>*localhost:5000/count/something* where something is the word you want get count of appearances
<br />


**Tested only on Windows**
