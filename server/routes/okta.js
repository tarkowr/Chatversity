const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');

/* GET user listing. */
router.get('/', (req, res) => {
    res.send('Okta server route works');
  });

// Handle user login
// TODO: Update to dynamically pull url from config
router.post('/login', (req, res) => {
    console.log("request: ");
    console.log(req);
    axios.post(`https://dev-117825.okta.com/api/v1/authn`, {
        "username": req.body.username,
        "password": req.body.password,
        "relayState": "localhost:4200",
        "options": {
          "multiOptionalFactorEnroll": false,
          "warnBeforePasswordExpired": false
        }
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

router.post('/forgot', (req, res) => { 
    console.log("request: ");
    console.log(req);
    axios.post(`https://dev-117825.okta.com/api/v1/authn`, {
        "username": req.body.username,
        "relayState": "localhost:4200",
        "options": {
          "multiOptionalFactorEnroll": false,
          "warnBeforePasswordExpired": false
        }
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
      // No idea if the switch statement works or if I even did it right
      switch (error) {
        case res.status(500):
          res.status(500).send("<p>Error 500!</p>")
          break;
        case res.status(403):
          res.status(403).send("<p>Error 403!  User not found!</p>")
          break;
        default:
          res.status(500).send("<p>Error 500!</p>")
          break;
      };
    });
})


// Get user by ID
router.get('/users/:id', (req, res) => {

  var userId = req.params.id;

  axios.get(`https://dev-117825.okta.com/api/v1/users/${userId}`, {
    headers: {
      "Authorization": 'SSWS 00nd9KMXXDL4G_0hDjDdGtMs7IUTa8K6Ddds3oOI_F',
    }
  })
  .then(user => {
    if (user) { 
      res.status(200).send(user.data);
    }
    console.log('test');
  })
  .catch(error => {
    res.status(500).json('<p>'+ error +'</p>');
  });
 });


module.exports = router;