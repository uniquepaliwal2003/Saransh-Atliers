//requiring and running express
const express = require('express');
const app = express();

//including path module mainly to use path.join(__dirname , 'folderName' )
const path = require('path');

//setting view engine to ejs
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

//for serving static files
app.use(express.static('public'));

//This is to parse the form data
app.use(express.urlencoded({extended:true}));
//Although we are not using any json thingy in the backend but still including the json parser
// app.use(express.json());

//Although site is simple and no need to do put or patch request as we need not to update anyting but still adding comment to method override
// const methodOverride = require('method-override');
// app.use(methodOverride('_method'));

app.get('/',(req,res)=>{
    res.render('main');
})
app.get('/interior',(req,res)=>{
    res.render('interior');
})
app.get('/architecture',(req,res)=>{
    res.render('architecture');
})
app.get('/landscape',(req,res)=>{
    res.render('landscape');
})
app.get('/industrial',(req,res)=>{
    res.render('industrial');
})
app.get('/thanks.html',(req,res)=>{
    res.render('thanks');
})



//listening to express
app.listen(3000,()=>{
    console.log("listening on port 3000");
})
