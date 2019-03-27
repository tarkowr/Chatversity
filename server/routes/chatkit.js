const express = require('express');
const router = express.Router();
const Chatkit = require('@pusher/chatkit-server');

// TODO: Place this in messaging service?
// TODO: Dynamically pull config vars from env
const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:a54bdf12-93d6-46f9-be3b-bfa837917fb5',
    key: '9d72d14f-ca75-4f3e-b7ff-553ca6cc929a:LQKR0oU5u56yMIFtEBqLECL0vhNRXllLNvgtXTLOeh0=',
  });

require('dotenv').config();

// declare axios for making http requests
const axios = require('axios');

// Specify test token endpoing
// ! TESTING ONLY - Update for prod

/* GET user listing. */
router.get('/', (req, res) => {
    res.send('Chatkit server route works');
});


// Get a User
router.post('/getuser', (req, res) => {

    chatkit.getUser({
        id: req.body.user_id,
    })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).send(err));
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