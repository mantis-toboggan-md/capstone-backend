//Update the name of the controller below and rename the file.
const knex = require("../db/knex.js")
const auth = require('../controllers/auth.js')
const food = require('../controllers/food.js')
const jwt = require('jsonwebtoken')
const cors = require('cors')

module.exports = function(app){
  app.options('*', cors())

  app.get('/search/:string', food.listUSDA)
  app.get('/details/:ndbno', food.getDetails)
}
