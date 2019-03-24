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
        "password": "Rycbar123",
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
    .then(posts => {
        res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send('<p>'+ error +'</p>');
    });
});


module.exports = router;