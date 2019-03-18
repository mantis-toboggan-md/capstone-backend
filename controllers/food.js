const knex = require("../db/knex.js")
const axios = require('axios')

module.exports = {

  listUSDA: (req,res)=>{
    let htmlString = req.params.string.replace(' ', '%20')
    axios.get(`https://api.nal.usda.gov/ndb/search/?format=json&q=${htmlString}&sort=n&max=25&offset=0&ds=Standard%20Reference&api_key=${process.env.USDA_API}`).then(response=>{
      res.json(response.data)
    })
  },

  getDetails: (req,res)=>{
    //query USDA API for nutritional info
    axios.get(`https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${process.env.USDA_API}&ndbno=${req.params.ndbno}&nutrients=203&nutrients=208&nutrients=269&nutrients=204` ).then(response=>{
      res.json(response.data.report.foods)
    })
  }
}
