const express = require('express');
const router = express.Router();
module.exports = router;

const db = require('../../db');
const Recipient = db.model('recipient');

router.get('/', (req, res, next) => {

  let databaseCall;

  if (req.query.location) {
    databaseCall = Recipient.findByLocation(req.query.location);
  } else {
    databaseCall = Recipient.findAll();
  }

  databaseCall
    .then(recipients => res.send(recipients))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Recipient.findById(id)
    .then(recipient => {
      res.send(recipient);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {

  const name = req.body.name;

  Recipient.create({
    name: name
  })
    .then(newRecipient => res.status(201).send(newRecipient))
    .catch(next);

});