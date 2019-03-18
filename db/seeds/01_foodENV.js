let envData = require('../../envData.js')
let tableEntries = Object.keys(envData).map(cat=>{
  return {
    category: cat,
    usda: envData[cat].usda || null,
    land: envData[cat].land || null,
    water: envData[cat].water || null,
    ghg: envData[cat].ghg || null
  }
})

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food_env').del()
    .then(function () {
      // Inserts seed entries
      return knex('food_env').insert(tableEntries);
    });
};
