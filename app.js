const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes');

app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');

app.use('/',routes);

app.listen(PORT,()=>{
  console.log(`aplication run on port:${PORT}`);
})