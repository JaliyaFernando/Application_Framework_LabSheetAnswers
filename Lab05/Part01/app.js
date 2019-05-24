const exp = require('express');

const BodyParser = require('body-parser');

const userObject = require('./User');

const app = exp();

const userArr = [];

app.use(BodyParser.json());

app.listen(3000, err =>{
    if(err){
        console.error(err);
    }
    console.log('Server is listen on port: 3000');
})

