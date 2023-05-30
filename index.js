//requiring and running express
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
//therer is something know as handlebars
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
app.use(express.json());

//Although site is simple and no need to do put or patch request as we need not to update anyting but still adding comment to method override
// const methodOverride = require('method-override');
// app.use(methodOverride('_method'));

app.get('/',(req,res)=>{
    res.render('main',{msg:''});
})
app.get('/architecture',(req,res)=>{
    res.render('architecture');
})
app.get('/interiorDesign',(req,res)=>{
    res.render('interiorDesign');
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
app.post('/send',async(req,res)=>{
    console.log(req.body)
    const output = `
        Hey Saransh , you have a new contact request
        Contact Details  
            Name:${req.body.FullName}
            Email:${req.body.Email}
            phone:${req.body.phone}
            Project Type:${req.body.projectType}
            How do you know me:${req.body.HowYouKnowMe}
        Remember To be awsome and have fun ..
    `
    
const transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
      user: 'apikey',
      pass: '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'
    }
  });
  const mailOptions = {
    from: 'sparchibest@gmail.com',
    to: 'rammodi0509@gmail.com',
    subject: 'Form Submission',
    text: output
  };
  
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error(error);
      // Handle the error and provide feedback to the user
    } else {
      console.log('Email sent: ' + info.response);
      // Provide feedback to the user about the successful email sending
    }
  });
  res.render('thanks')
})



//listening to express
app.listen(3000,()=>{
    console.log("listening on port 3000");
})
// RCNkFt3mF#e?/5r1