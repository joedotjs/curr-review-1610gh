const http = require('http');
const pipeline = require('./app');
const server = http.createServer();
const db = require('../db');

server.on('request', pipeline);

db.sync()
  .then(() => {
    server.listen(
      1337,
      () => console.log('server listening on 1337')
    );
  })
  .catch(console.error);

