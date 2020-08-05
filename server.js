const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require('knex');
const { response } = require("express");
const register = require("./Controllers/register");
const signin = require("./Controllers/signin");
const profile = require("./Controllers/profile");
const image = require("./Controllers/image");


  const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'ilkbtfm098',
    database : 'face_detection'
  }
});

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> { res.send(database.users) });

app.post('/signin',signin.signinHandler(db, bcrypt));

app.post('/register', register.registerHandler(db, bcrypt));

app.get('/profile/:id', profile.profileHandler(db));

app.put('/image', image.imageHandler(db));

app.post('/imageUrl', image.handleApiCall());



app.listen(3000, ()=>{
  console.log('its working')
});