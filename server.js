const universities = require('./universities')
const cors = require('cors')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const multer = require('multer')
const app = express()
const fs = require('fs')
const formidable = require('formidable')
const crypto = require("crypto")
const axios = require('axios')

// Parsers for POST data
app.use(bodyParser.urlencoded({ 
  extended: false,
  keepExtensions: true 
}))

app.use(bodyParser.json())

// TESTING ONLY - REMOVE FOR PROD
app.use(cors())

// Get authentication routes
const okta = require('./server/okta')

// Get Chatkit routes for Pusher
const chatkit = require('./server/chatkit')

// Okta route for user auth
app.use('/okta', okta)

// Chatkit route for messaging
app.use('/chatkit', chatkit)

// Point static path to dist
// app.use("/avatars", express.static(__dirname + "/app/assets/avatars"));
// app.use("/uploads", express.static(__dirname + "/app/assets/uploads"));
// app.use("/uploads", express.static(__dirname + "/uploads/adsf"));

//
// ─── CREATE MULTER INSTANCE ─────────────────────────────────────────────────────
//  

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./src/assets/${req.file.fieldname}`) // Set upload location
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

  var upload = multer({
    storage: storage
  })

// ────────────────────────────────────────────────────────────────────────────────


//
// ─── GET UI AVATAR ──────────────────────────────────────────────────────────────
//
  
  app.get('/uiavatar', (req, res) => {
    axios.get('https://ui-avatars.com/api/?rounded=true')
    .then(uiAvatar => {
      res.status(200).json(uiAvatar.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
  })
// ────────────────────────────────────────────────────────────────────────────────


//
// ─── UPLOAD USER AVATAR ─────────────────────────────────────────────────────────
//

  app.post('/user/avatar/:user_id', (req, res) => {

    var form = new formidable.IncomingForm()
    form.uploadDir = `./src/assets/avatars/`
    form.keepExtensions = true

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = './src/assets/avatars/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });
  });

// ────────────────────────────────────────────────────────────────────────────────


//
// ─── UPLOAD TEMPORARY ROOM AVATAR ───────────────────────────────────────────────
//

  app.post('/rooms/avatar/tmp', (req, res) => {

    var form = new formidable.IncomingForm()

    form.keepExtensions = true
    form.uploadDir = './src/assets/tmp'

    // generate tmp file name for later reference when room creation form submitted
    var id = crypto.randomBytes(20).toString('hex')
    
    form.parse(req)

    form.on('file', function (name, file){
      fs.rename(file.path, form.uploadDir + "/" + id + path.extname(file.name), function( error ) {});

      res.type('text/plain')
      res.status(200).send(id.toString())
    })
  })
// ────────────────────────────────────────────────────────────────────────────────



//
// ─── UPLOAD ROOM AVATAR ─────────────────────────────────────────────────────────
//

  app.post('/rooms/avatar', (req, res) => {
    // avatar should already exist in temp folder => move to permanent storage
    var form = new formidable.IncomingForm()

    form.keepExtensions = true
    form.uploadDir = './src/assets/rooms'

    form.parse(req, function(err, fields, files) {
      res.status(200).json(files)
    });
  });
// ────────────────────────────────────────────────────────────────────────────────



//
// ─── GET ROOM AVATAR ────────────────────────────────────────────────────────────
//

  app.get("/rooms/:id/avatar", (req, res) => {
    res.sendFile(path.join(__dirname, `./uploads/${req.params.id}-avatar`));
  });
// ────────────────────────────────────────────────────────────────────────────────



//
// ─── FIND UNIVERSITY ────────────────────────────────────────────────────────────
//

  app.get("/university/:query", (req,res) => {
    var query = req.params.query;

    // Get the web domain from the user query (username / email)
    var domainToFind = query.replace(/.*@/, "")

    var found = universities.find(university => {
      return university.domains.some((domain) => {
        return (domain === domainToFind)
      });
    });
    res.status(200).json(found);
  });

// ────────────────────────────────────────────────────────────────────────────────


//
// ─── FIND UNIVERSITY ────────────────────────────────────────────────────────────
//

  app.get("/university/name/:query", (req,res) => {
    var query = req.params.query;

    // Filter for university in JSON list
    var found = universities.find(university => {
      return university.name === query;
    });

    res.status(200).json(found);
  })

// ────────────────────────────────────────────────────────────────────────────────


//
// Get port from environment and store in Express.
//
const port = process.env.PORT || 3200
app.set('port', port)

const router = express.Router()

// middleware
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Chatversity'));

// Catch all other routes and return the index file
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/Chatversity/index.html'));
});


app.listen(port, () => console.log(`App listening on port ${port}!`))