'use strict';

const express = require('express'), mongoose = require('mongoose');

mongoose.Promise =gloabl.Promise;

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/expressjsSample', err => {
    if (err){
        console.log(err);
        process.exit(1);
    }
});

const UserModel = require('./u');

app.use(express.static(__dirname));
app.get('/', (req, res, next) => {
    res.sendFile('index.html');
});

const users = [];

app.get('/users', (req, res) => {
    res.json(users);
});
app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    res.json(users);
});
app.post('/users', (req, res) => {
    const user = req.body;
    user.birthday = new Date(user.birthday);
    user.id = Date.now();
    users.push(user);
    res.json(user);
});

app.put('/user/:id', (req,res) => {
    const user = req.body;
    user.birthday = new Date(user.birthday);
    delete user.id;
    const index = users.findIndex(user => user.id === parseInt(req.params.id));
    users[index] = user;
    res.json(users[index]);
});

app.delete('/user/:id', (req, res) => {
    const user = req.body;
    const index = users.findIndex(user => user.id === parseInt(req.params.id));
    users.splice(index, 1);
    res.sendStatus(200);
});

app.listen(3000, err => {
    if(err){
        console.error(err);
        return;
    }
    console.log('app listening on port 3000');
});