const http = require('http');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// importing routes
const facultySignIn = require('./routes/faculty/signIn_Route');
const facultyDetail = require('./routes/faculty/profile_Route');

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// setting routes
app.use(facultySignIn);
app.use(facultyDetail);

//for getting images and other resources
app.use(express.static(__dirname));

app.listen(process.env.PORT || 8081)

