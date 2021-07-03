//import of needed modules
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//here we write port on which we host our website
const PORT = 5000;

//here we create array which will be collection of words
const wordList = [];

//function used to find unique words in collection
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}


//this is used to load site with instructions in html by writing in search bar:  /localhost:PORT 
//__dirname is file in which our app.js is 
//static is folder in which is index.html
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

//here words are added to collection
app.get('/add/:word', (req, res)=>{
    
    let wordForList = req.params.word
    wordList.push(wordForList);
    console.log(wordList);

    res.send("You added word: " + wordForList + " to collection.");
    //res.json(wordList);
});

//here words are removed from collection
app.get('/remove/:word', (req, res)=>{
    
    //flag used to check if word was in collection or not
    let flag = false;
    let wordToRemove = req.params.word
    for(let i = 0; i < wordList.length; i++ )
    {
        if(wordList[i] == wordToRemove)
        {
            wordList.splice(i,1);
            flag = true;
            break;
        }
    }

    if(flag)
    {
        res.send("You removed word: " + wordToRemove + " from collection.");
    }
    else
    {
        res.send("Word " + wordToRemove + " wasn't in collection.");
    }
    
});


//counting appearances of the word in collection
app.get('/count/:word', (req, res)=>{
    
    let count = 0;
    let wordToCount = req.params.word;
  
    for(let i = 0; i < wordList.length; i++ )
    {
        if(wordList[i] == wordToCount)
        {
            count++;
        }
    }

    console.log(count);
    res.send("Amount of appearances of " + wordToCount + ": " + count);
});

//showing words in collection(not unique)
app.get('/show', (req, res)=>{
    console.log(wordList);
    res.send(wordList);
});

//showing words in collection(unique)
app.get('/showUniq', (req, res)=>{

    var tempWordList = wordList;
    var uniqWordList = tempWordList.filter(onlyUnique);

    console.log(uniqWordList);
    res.send(uniqWordList);
});

//here is added what should be shown when somebody write bad address
app.all('*',(req,res)=>{
    res.status(404).send('Not Found. \nTry writing adress: localhost:PORT ,\nby default localhost:5000');
})

//here we start our server on chosen port
app.listen(PORT, ()=>{
    console.log('Server is working');
});



