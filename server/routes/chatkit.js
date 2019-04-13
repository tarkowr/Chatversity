const cors = require('cors');
const express = require('express');
// const router = express.Router();
const Chatkit = require('@pusher/chatkit-server');
const mongoose = require('mongoose');
const multer  = require('multer');
const upload = multer({ dest: 'upload/'});
const bodyParser = require('body-parser');
const axios = require('axios');

var router = express();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors());


require('dotenv').config();

// Specify test token endpoing
// ! TESTING ONLY - Update for prod

/* GET user listing. */
router.get('/', (req, res) => {
    res.send('Chatkit server route works');
});

// TODO: Place this in messaging service?
// TODO: Dynamically pull config vars from env
const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:a54bdf12-93d6-46f9-be3b-bfa837917fb5',
  key: '9d72d14f-ca75-4f3e-b7ff-553ca6cc929a:LQKR0oU5u56yMIFtEBqLECL0vhNRXllLNvgtXTLOeh0=',
});

router.post('/testing', (req, res) => {
  console.log(req.body);
  // res.status(201).send(req);
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


//
// ─── GET ALL CONNECTIONS FOR A USER BY ID ───────────────────────────────────────
//

  router.get('/connections/:id', (req, res) => {
    chatkit.getUser({
      // Get the user
      id: req.params.id,
    })
    .then((user) => {
      // Then get all of the users connections
      chatkit.getUsersById({
        userIds: user.custom_data.connections,
      })
      .then(users => res.status(200).json(users))
      .catch(err => console.error(err))
    })
    .catch(err => res.status(500).send(err))
  })
// ────────────────────────────────────────────────────────────────────────────────



//
// ─── UPDATE USER ────────────────────────────────────────────────────────────────
// 

  // TODO: Richie add update user here 
  router.post('/updateUser', (req, res) => {
  
    dataToUpdate = req.body.userData


  
    chatkit.updateUser({
      id: "22",
      customData: {
        avatarURL: "adsf"
      },

    })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).send(err));
  });
// ────────────────────────────────────────────────────────────────────────────────



//
// ─── GET USER ───────────────────────────────────────────────────────────────────
//
  
  router.post('/getuser', (req, res) => {

      chatkit.getUser({
          id: req.body.user_id,
      })
      .then(user => res.status(200).json(user))
      .catch(err => res.status(500).send(err));
  });
// ────────────────────────────────────────────────────────────────────────────────



//
// ─── GET USER BY ID ─────────────────────────────────────────────────────────────
//

  router.get('/GetUserById/:userId', (req, res) => {
    chatkit.getUser({
      id: req.params.userId,
    })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(500).send(error))
  })
// ────────────────────────────────────────────────────────────────────────────────



var type = upload.single('file');
// Upload room or user avatar to Mongo
router.post('/upload/avatar', type, (req, res) => {
  // console.log(req.body);
  // return;
  // mongoose.connect('mongodb+srv://chatversity_admin:Te0PU0MZzEQOIvmB@primary-qvaqq.mongodb.net/live_db?retryWrites=true', {useNewUrlParser: true});

  // var db = mongoose.connection;
  // db.on('error', console.error.bind(console, 'connection error:'));
  // db.once('open', function() {
  //   // we're connected!
  //   console.log('mongoose connected');

  //   // Define file schema
  //   var fileSchema = new mongoose.Schema({
  //     id: String
  //   });
  
  //   // Create object from schema
  //   var File = mongoose.model('files', fileSchema, 'files');
  
  //   var file = new File({avatar: req.body.file})
  //   // var fluffy = new File({ id: 'Silence' });
  //   // fluffy.save(function (err, fluffy) {
  //   //   if (err) return console.error(err);
  //   // });
  
  //   // File.find(function (err, files) {
  //   //   if (err) return console.error(err);
  //   //   console.log(files);
  //   // })
  });



// Get user rooms
router.post('/GetUserRooms', async (req, res) => {
    
    chatkit.getUserRooms({
        userId: req.body.user_id,
    })
    .then((rooms) => res.status(200).json(rooms))
    .catch((err) => res.status(500).send(err));
});



// Get Chatkit User
// TODO: Update to dynamically pull url from config
router.post('/createtoken', (req, res) => {
    console.log("Chatkit req: ");
    console.log(req);
    axios.post(`${process.env.CHATKIT_TEST_TOKEN_ENDPOINT}/token`, {
        "grant_type": "client_credentials",
        "user_id": req.body.user_id
      },
      {
        headers:{
        "Accept":'application/json',
        "Content-Type": 'application/json'
        }
    })
    .then(user => { 
      // TODO: Create and return Session with Session Token 
      // TODO: https://developer.okta.com/docs/api/resources/sessions/#create-session-with-session-token
        res.status(200).json(user.data);
    })
    .catch(error => {
      res.status(500).send('<p>'+ error +'</p>');
    });
});


module.exports = router;