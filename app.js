const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

//DATABASE
mongoose.connect('mongodb://localhost:27017/ContactDance');
const Contact = mongoose.model('contact', { name: String, phone: String, email: String, address: String, desc: String});  //Creating Schema & Model

//SERVING EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //For serving static files
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug'); //Setting up template engine as pug
app.set('views', path.join(__dirname, 'views')); //Setting views directory

//SETTING GET & POST RESPONSES
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
});
app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);
});
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send('This item has been saved to the database');
    }).catch(()=>{
        res.status(400).send('Item was not saved to database');
    })
    // res.status(200).render('contact.pug');
});

//STARTING THE SERVER
app.listen(port, () => {
    console.log(`This application has started on port ${port}`);
})
