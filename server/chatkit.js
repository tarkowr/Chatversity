const cors = require('cors');
const express = require('express');
const Chatkit = require('@pusher/chatkit-server');
const multer  = require('multer');
const upload = multer({ dest: 'upload/'});
const bodyParser = require('body-parser');
const axios = require('axios');

const router = express();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors());

require('dotenv').config();


//
// ─── INSTANTIATE CHATKIT ────────────────────────────────────────────────────────
//

  // TODO: Dynamically pull config vars from env
  const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:a54bdf12-93d6-46f9-be3b-bfa837917fb5',
    key: '9d72d14f-ca75-4f3e-b7ff-553ca6cc929a:LQKR0oU5u56yMIFtEBqLECL0vhNRXllLNvgtXTLOeh0=',
  });

// ────────────────────────────────────────────────────────────────────────────────


//
// ─── GET READ CURSORS FOR USER ──────────────────────────────────────────────────
//
  router.get('/getReadCursorsForUser/:id', (req, res) => {

    chatkit.getReadCursorsForUser({
        userId: req.params.id,
      })
      .then(cursors => {
        res.status(200).json(cursors);
      })
      .catch(err => {
        res.status(error.status).send(err)
      })
  })
// ────────────────────────────────────────────────────────────────────────────────


//
// ─── GET ALL CONNECTIONS FOR A USER BY ID ───────────────────────────────────────
//

  router.get('/connections/:id', (req, res) => {
    chatkit.getUser({
      id: req.params.id,
    })
    .then((user) => {
      chatkit.getUsersById({
        userIds: user.custom_data.connections,
      })
      .then(users => {
        res.status(200).json(users)
      })
      .catch(error => {
        res.status(error.status).send(error)
      })
    })
    .catch(error => {
      res.status(error.status).send(err)
    })
  })
// ────────────────────────────────────────────────────────────────────────────────


//
// ─── UPDATE USER ────────────────────────────────────────────────────────────────
// 

  router.post('/user/:id', (req, res) => {
    let name = req.body.name;
    delete req.body.name;

    chatkit.updateUser({
      id: req.params.id,
      name: name,
      customData: req.body,
    }).then(() => {
      chatkit.getUser({
        id: req.params.id,
      })
      .then((user) => {
        res.status(200).json(user)
      })

    }).catch((error) => {
      res.status(error.status).send(error)
    });
  });
// ────────────────────────────────────────────────────────────────────────────────


//
// ─── GET USER ───────────────────────────────────────────────────────────────────
//
  
  router.post('/getuser', (req, res) => {
      chatkit.getUser({
          id: req.body.user_id,
      })
      .then(user => {
        res.status(200).json(user)
      })
      .catch(error => {
        res.status(error.status).send(error)
      });
  });
// ────────────────────────────────────────────────────────────────────────────────


//
// ─── GET ALL USERS ─────────────────────────────────────────────────────────────
//

router.get('/users', (req, res) => {
  const maxUserCount = 100

  chatkit.getUsers({
    limit: maxUserCount
  })
  .then((users) => {
    res.status(200).json(users)
  }).catch((error) => {
    res.status(error.status).send(error)
  });
})
// ────────────────────────────────────────────────────────────────────────────────


//
// ─── GET ALL ROOMS ─────────────────────────────────────────────────────────────
//

router.get('/rooms', (req, res) => {
  chatkit.getRooms({})
  .then((rooms) => {
    res.status(200).json(rooms)
  }).catch((error) => {
    res.status(error.status).send(error)
  });
})
// ────────────────────────────────────────────────────────────────────────────────


//
// ─── CREATE USER ────────────────────────────────────────────────────────────────
//

router.post('/createuser', (req, res) => {
  chatkit.createUser({
    id: req.body.id,
    name: req.body.name,
    customData: req.body.custom_data,
  })
    .then((user) => {
      res.status(200).json(user);
    }).catch((error) => {
      res.status(error.status).send(error)
    });
})
// ────────────────────────────────────────────────────────────────────────────────


//
// ─── GET USER'S ROOMS ─────────────────────────────────────────────────────────────
//

router.post('/GetUserRooms', async (req, res) => {
    chatkit.getUserRooms({
        userId: req.body.user_id,
    })
    .then((rooms) => {
      res.status(200).json(rooms)
    })
    .catch((error) => {
      res.status(error.status).send(error)
    });
});
// ────────────────────────────────────────────────────────────────────────────────


//
// ─── CREATE CHATKIT TOKEN ─────────────────────────────────────────────────────────────
//

// TODO: Update to dynamically pull url from config
router.post('/createtoken', (req, res) => {
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
      res.status(error.status).send(error)
    });
});
// ────────────────────────────────────────────────────────────────────────────────

module.exports = router;