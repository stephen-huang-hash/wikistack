const morgan = require('morgan');
const express = require('express');
const path = require('path');

const app = express();
const {db, Page, User} = require('./models/index');

const PORT = 1337;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/views')));

const syncDb = async () => {
  await db.sync({force: true});

  app.listen(PORT, () => {
    console.log('App listening');
  })

}

app.get('/', (req, res, next) => {
  res.send('text');
})

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


syncDb();
