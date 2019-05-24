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

app.post('/add', (req,res) => {
    const reqParam = req.body;

    const user = new userObject(reqParam.fname,reqParam.lname,new Date(reqParam.bDay), Date.now());

    userArr.push(user);
    res.status(200).send({message:"User added to the array", data:user});
});

app.get('/all', (req,res) => {
   try {
       res.status(200).send({data:userArr});
   }catch (e) {
       res.status(500).send({message:e});

   }
});

app.get('/userbyid/:Id', (req,res) => {
    try {
        const index = userArr.findIndex( x => x.id == req.params.Id);
        if(index > -1){
            res.status(200).send(userArr[index]);
        }else {
            res.status(404).send({message:'Invalid ID'});
        }
    }catch (e) {
        res.status(500).send({message:e});
    }
});