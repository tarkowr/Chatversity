// Get dependencies
const cors = require('cors');
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;


var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://chatversity_admin:Te0PU0MZzEQOIvmB@primary-qvaqq.mongodb.net/live_db?retryWrites=true', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongoose connected');

  // var ObjectId = mongoose.SchemaTypes.ObjectId;

  // var fileSchema = new mongoose.Schema({
  //   id: String
  // });

  // var File = mongoose.model('files', fileSchema, 'files');

  // var fluffy = new File({ id: 'Silence' });
  // fluffy.save(function (err, fluffy) {
  //   if (err) return console.error(err);
  // });

  // File.find(function (err, files) {
  //   if (err) return console.error(err);
  //   console.log(files);
  // })
});


// Get our API routes
const api = require('./server/routes/api');

// Get authentication routes
const okta = require('./server/routes/okta');

// Get Chatkit routes for Pusher
const chatkit = require('./server/routes/chatkit');



const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// User CORS for local testing
// ! TESTING ONLY - REMOVE FOR PROD
app.use(cors());



// API route
app.use('/api', api);

// Okta route for user auth
app.use('/okta', okta);

// Chatkit route for messaging
app.use('/chatkit', chatkit);



// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));