const express = require('express');
const bodyParser= require( 'body-parser');
const mongoose= require( 'mongoose');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on ', PORT));