// Get dependencies
const cors = require('cors')
var express = require('express')
const path = require('path')
const http = require('http')
var bodyParser = require('body-parser')
var util = require('util')
var multer  = require('multer')
const mongoose = require('mongoose')
// const fileUpload = require('express-fileupload')
var app = express()

// app.use(fileUpload())

// Setting up the root route
app.get('/', (req, res) => {
  res.send('Welcome to the express server')
})

// Parsers for POST data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist')))

// User CORS for local testing
// ! TESTING ONLY - REMOVE FOR PROD
app.use(cors())


// Get our API routes
const api = require('./server/routes/api')

// Get authentication routes
const okta = require('./server/routes/okta')

// Get Chatkit routes for Pusher
const chatkit = require('./server/routes/chatkit')



// API route
app.use('/api', api)

// Okta route for user auth
app.use('/okta', okta)

// Chatkit route for messaging
app.use('/chatkit', chatkit)


   // Create multer instance
   var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/') // Set upload location
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

  var upload = multer({
    storage: storage
  })



//
// Upload user avatar
//
app.post('/users/:id/avatar', upload.single("avatar"), (req, res) => {
  res.status(200).json(req.file);
});


//
// Fetch user avatar
//
app.get("/users/:id/avatar", (req, res) => {
  res.sendFile(path.join(__dirname, `./uploads/${req.params.id}-avatar`));
});



/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || 3200
app.set('port', port)

/**
 * Create HTTP server.
 */
// const server = http.createServer(app)
const router = express.Router()

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/**
 * Listen on provided port, on all network interfaces.
 */
// server.listen(port, () => console.log(`API running on localhost:${port}`))