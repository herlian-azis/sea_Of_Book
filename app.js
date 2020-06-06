const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes');
const session = require("express-session")

app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');
app.use(express.static('asset'))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))


app.use('/',routes);

app.listen(PORT,()=>{
  console.log(`aplication run on port:${PORT}`);
})