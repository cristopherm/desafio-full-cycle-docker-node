"use strict";

const moment = require("moment");
const express = require('express');
const app = express();
const port = 3000;

const person = require('./controllers/person.js');

app.set('view engine', 'ejs');

(async () => {
    await person.table();
})()

app.use((req, res, next) => {
  moment.locale('pt-br')
  res.locals.moment = moment;

  next();
});

app.get('/', async (req, res) => {
  await person.insert(req.query.name);
  const usersList = await person.get();

  res.render('index', {
    usersList
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
