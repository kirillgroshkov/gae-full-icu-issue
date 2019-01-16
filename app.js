'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    hello: 'world',
    hasFullIcu: hasFullICU(),
  })
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

// Taken from official example: https://nodejs.org/api/intl.html#intl_detecting_internationalization_support
function hasFullICU () {
  try {
    const january = new Date(9e8)
    const spanish = new Intl.DateTimeFormat('es', { month: 'long' })
    return spanish.format(january) === 'enero'
  } catch (err) {
    return false
  }
}
