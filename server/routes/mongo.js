const express = require('express');
const router = express.Router();
// Include MongoDB Client here using NodeJS module
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://chatversity_admin:<password>@primary-qvaqq.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});