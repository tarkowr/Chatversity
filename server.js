// Get dependencies
const cors = require('cors');
var express = require('express');
const path = require('path');
const http = require('http');
var bodyParser = require('body-parser');
var util = require('util');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


var app = express();

// Parsers for POST data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist')));

// User CORS for local testing
// ! TESTING ONLY - REMOVE FOR PROD
app.use(cors());



// Get our API routes
const api = require('./server/routes/api');

// Get authentication routes
const okta = require('./server/routes/okta');

// Get Chatkit routes for Pusher
const chatkit = require('./server/routes/chatkit');



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

app.post('/asdf', upload.single('avatar'), (req, res) => {
  console.log(req.body);
  // res.status(201).send(req);
  // res.send(req);
  // console.log(util.inspect(req));
  return;
  mongoose.connect('mongodb+srv://chatversity_admin:Te0PU0MZzEQOIvmB@primary-qvaqq.mongodb.net/live_db?retryWrites=true', {useNewUrlParser: true});

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    // we're connected!
    console.log('mongoose connected');

    // Define file schema
    var fileSchema = new mongoose.Schema({
      avatar: String
    });
  
    // Create object from schema
    var File = mongoose.model('files', fileSchema, 'files');
  
    var file = new File({avatar: req.body.file})
    file.save(function (err, file) {
      if (err) return console.error(err);
      else { return console.log(file); }
    });
  
    // File.find(function (err, files) {
    //   if (err) return console.error(err);
    //   console.log(files);
    // })

  // axios.post('https://webhook.site/68f42878-3fc6-4974-8fbe-0e434e858be6', req)
  // .then(function (response) {
  //   // console.log(response);
  //   res.status(200).json(response.data);
  // })
  // .catch(function (error) {
  //   console.log('error');
  // });
  });
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