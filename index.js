const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {pool, connectionString} = require('./config');
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

app.router('/').get((req, res) => {
  res.status(200);
})

app.listen(process.env.PORT, () => {
    console.log("Running at port " + process.env.PORT +"... i guess");
    console.log("And is connected to the database" + connectionString + "... I guess")
});