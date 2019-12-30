const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {pool} = require('./config');
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors())

const getBooks = (request, response) => {
    pool.query('SELECT * FROM books', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    })
  }

app.route('/books').get(getBooks);

app.listen(process.env.APP_PORT || 1322, () => {
    console.log("Running at port " + process.env.APP_PORT || 1322);
});