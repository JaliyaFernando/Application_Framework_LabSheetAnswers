'use strict';

const express = require('express');
const app = express();
app.use(express.json());
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