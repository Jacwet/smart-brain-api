const Clarifai = require('clarifai');
require("dotenv").config();

const app = new Clarifai.App({
 apiKey: process.env.APIKEY 
});

const handleApiCall = (req, res) => {

  app.models.predict('face-detection', req.body.input)
    .then(data => {
      res.json(data);
      console.log(data);
    })
    .catch(err => res.status(400).json('unable to work with API'))
}

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {

    res.json(entries[0].entries);
  })
  .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
  handleImage,
  handleApiCall
}