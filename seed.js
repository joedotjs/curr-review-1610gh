const db = require('./db');
const Recipient = db.model('recipient');

db.sync({ force: true })
  .then(() => {
      const recipientNames = [
        {name: 'Mariana', location: 'Philllly'},
        {name: 'Gladys', location: 'New York City'},
        {name: 'Chloe', location: 'Sacramento'}
      ];
      const creatingRecipients = recipientNames.map(recipient => {
          return Recipient.create(recipient);
      });
      return Promise.all(creatingRecipients);
  })
  .then(() => {
    console.log('Seeding complete!');
  })
  .catch(console.error);