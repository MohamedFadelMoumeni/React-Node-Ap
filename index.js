const express = require('express'); //CommonJs
const app = express();

app.get('/', (req, res) => {
   console.log(res.send());
});

const PORT = process.env.PORT || 5000; //use 5000 in our machine instead use the PORT that the cloud gives to us 
app.listen(5000);