const knex = require("../db/knex.js")
const axios = require('axios')
const envData = require("../envData.js")

module.exports = {

  listUSDA: (req,res)=>{
    let htmlString = req.params.string.replace(' ', '%20')
    axios.get(`https://api.nal.usda.gov/ndb/search/?format=json&q=${htmlString}&sort=n&max=25&offset=0&ds=Standard%20Reference&api_key=${process.env.USDA_API}`).then(response=>{
      res.json(response.data)
    })
  },

  getDetails: (req,res)=>{
    //split param into ndbno and food foodgroup
    let index = req.params.ndbno.search(/[a-z]/i)
    let ndbno = req.params.ndbno.split("").slice(0,index).join("")
    let foodGroup = req.params.ndbno.split("").slice(index).join("").replace("%20", " ")
    console.log("food group provided: ",foodGroup)
    //query USDA API for nutritional info
    axios.get(`https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${process.env.USDA_API}&ndbno=${ndbno}&nutrients=203&nutrients=208&nutrients=269&nutrients=204` ).then(response=>{
      let food = response.data.report.foods[0]
      let groups = Object.keys(envData)
      let envResult = null
      //find matching env data
      console.log("searching for match to: ", food.name, "...")
      groups.map(group=>{
        {
          //first, check if name matches one of the groups:
          let pattern = new RegExp(group, "i")
          if(food.name.search(pattern) != -1){
            console.log("match found in: ", envData[group])
            envResult = JSON.parse(JSON.stringify(envData[group]))
          }
          //if the food name doesn't match a group, check if the usda foodgroup matches
          else {
            if(envData[group]["usda"]){
              pattern = new RegExp(envData[group]["usda"], "i")
              console.log(pattern)
              if(foodGroup.search(pattern)!=-1){
                console.log("match found in: ", group)
                envResult = JSON.parse(JSON.stringify(envData[group]))
              }
            }
          }
        }
      })
      //if env data was found, convert values relative to serving size
      if(envResult){
        //get serving in grams
        let servinggrams = food.weight

        //convert ghg to g CO2/g produced by div by 1,000, multiply by serving in g
        if(envResult.ghg){
          envResult.ghg = envResult.ghg/1000 * servinggrams
        }

        //convert land used to m^2 year / g
        if(envResult.land){
          envResult.land = envResult.land/1000 * servinggrams
        }

        //water is in m^3/ton, equivalent to mL/g
        if(envResult.water){
          envResult.water = envResult.water * servinggrams/1000000
        }
      }
      res.json({
          food: food,
          env: envResult
      })
    })
  }
}
