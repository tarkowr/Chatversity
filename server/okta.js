const express = require('express')
const router = express.Router()
const okta = require('@okta/okta-sdk-nodejs')
const axios = require('axios')

const client = new okta.Client({
  orgUrl: 'https://dev-117825.okta.com/',
  token: '00bZLsWwzJWyfMrRXnmd-wzqLu4BCbj1TG01Va73A4' // Obtained from Developer Dashboard (Resets every month)
});


//
// ─── GET USER BY LOGIN ──────────────────────────────────────────────────────────
//

  router.get('/GetUserByLogin/:userLogin', (req, res) => {
    axios.get(`https://dev-117825.okta.com/api/v1/users/${req.params.userLogin}`, 
    {
      headers: {
        "Accept":'application/json',
        "Content-Type": 'application/json',
        "Authorization":"SSWS 00nd9KMXXDL4G_0hDjDdGtMs7IUTa8K6Ddds3oOI_F"
      }
    })
    .then((user) => {
      res.status(200).json(user.data)
    })
    .catch((error) => {
      if (errpr.response.status === 404) {
        res.send('ERROR: User not found!')
      }
      else{
        res.status(error.status).send(error)
      }
    })
  });
// ────────────────────────────────────────────────────────────────────────────────


//
// ─── HANDLE USER LOGIN ──────────────────────────────────────────────────────────
//

  // TODO: Update to dynamically pull url from config
  router.post('/login', (req, res) => {
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
        res.status(error.status).send(error)
      });
  });
// ────────────────────────────────────────────────────────────────────────────────


//
// ─── HANDLE USER SIGNUP ──────────────────────────────────────────────────────────
//

  router.post('/signup', (req, res) => {
    const newUser = {
      profile: {
        firstName: req.body.fname,
        lastName: req.body.lname,
        email: req.body.username,
        login: req.body.username,
      },
      credentials: {
        password : {
          value: req.body.password
        }
      }
    };
    
    client.createUser(newUser)
    .then(user => {
      res.status(200).json(user)
    })
    .catch((error) => {
      res.status(error.status).send(error)
    });
  });


//
// ─── HANDLE USER FORGOT PASSWORD ────────────────────────────────────────────────
//

  router.post('/forgot', (req, res) => { 
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
        res.status(error.status).send(error)
      });
  })
// ────────────────────────────────────────────────────────────────────────────────


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
  })
  .catch(error => {
    res.status(error.status).send(error)
  });
 });

module.exports = router;