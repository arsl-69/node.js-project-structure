const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

function onStart(){
    console.log(`Server running on port ${PORT}`);
} 

app.listen(PORT, onStart);

module.exports = app;