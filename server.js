const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    path = require('path'),
    PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
};

app.use(express.static('images'));

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '/.client/build/index.html'));
});

app.listen(PORT, ()=>{
    console.log(`🙉 ==> Server now listening to you... ON PORT ${PORT}!!`)
});