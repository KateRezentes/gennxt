console.log('May Node be with you')
const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (req, res) {
  console.log('I got a web request');
  res.sendFile(__dirname + '/index.html');
})
app.post('/quotes', (req, res) => {
  console.log(req.body)
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
console.log(result)
    res.redirect('/')
  })
})
var db
MongoClient.connect('mongodb://testaccount:gennxt@ds113680.mlab.com:13680/gennxt', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

