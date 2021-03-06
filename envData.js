
/*http://eprints.lancs.ac.uk/79432/4/1_s2.0_S0959652616303584_main.pdf
kg CO2-eq/kg produce or bone free meat*/
let meanGHG = {
  "Onion": 0.17,
  "Celery": 0.18,
  "Potatoes": 0.18,
  "Carrots": 0.20,
  "Zucchini/button squash": 0.21,
  "Cucumber/gherkins": 0.23,
  "Beetroot": 0.24,
  "Pumpkins": 0.25,
  "Rockmelon/cantelope": 0.25,
  "Beans: plake": 0.26,
  "Lemons and limes": 0.26,
  "Mushrooms": 0.27,
  "Guavas": 0.28,
  "Apples": 0.29,
  "Swedes/rutabage": 0.29,
  "Pears": 0.31,
  "Quinces": 0.31,
  "Beans: green": 0.31,
  "Watermelons": 0.32,
  "Dates": 0.32,
  "Orange": 0.33,
  "Kiwi fruit": 0.36,
  "Cauliflowers and broccoli": 0.36,
  "Grapes": 0.37,
  "Oats": 0.38,
  "Rye": 0.38,
  "Peas": 0.38,
  "Cherries": 0.39,
  "Beans: gigante/butter": 0.39,
  "Almond/coconut milk": 0.42,
  "Peaches and Nectarines": 0.43,
  "Figs": 0.43,
  "Barley": 0.43,
  "Apricot": 0.43,
  "Chestnuts": 0.43,
  "Beans": 0.43,
  "Mandarin": 0.45,
  "Tomatoes": 0.45,
  "Maize/corn": 0.47,
  "Fennel": 0.48,
  "Artichokes": 0.48,
  "Cowpeas": 0.49,
  "Soybean": 0.49,
  "Pineapples": 0.50,
  "Melons": 0.51,
  "Grapefruit and pomelo": 0.51,
  "Tangerines/mandarins": 0.51,
  "Tomatoes: passive greenhouse": 0.51,
  "Wheat": 0.52,
  "Spinach": 0.54,
  "Garlic": 0.57,
  "Strawberries": 0.58,
  "Broccoli": 0.60,
  "Olives": 0.63,
  "Capsicums/peppers": 0.66,
  "Beans: pinto USA dried": 0.73,
  "Soy-milk": 0.75,
  "Beans: french and runner": 0.75,
  "Chick peas": 0.77,
  "Asparagus": 0.83,
  "Peanuts": 0.83,
  "Raspberries": 0.84,
  "Currants and gooseberries": 0.84,
  "Sesame seed ":0.88,
  "Ginger": 0.88,
  "Cranberries/blueberries": 0.92,
  "Hazelnuts": 0.97,
  "Ground nuts": 0.99,
  "Lentils": 1.03,
  "Pilchard": 1.10,
  "Peppers: passive and heated greenhouse": 1.10,
  "Quinoa": 1.15,
  "Herring": 1.16,
  "Milk: world average": 1.29,
  "Avocados": 1.30,
  "Yoghurt": 1.31,
  "Eggplants (aubergines)": 1.35,
  "Sunflower seed": 1.41,
  "Cashew nut": 1.44,
  "Melons: passive greenhouse": 1.43,
  "Walnuts": 1.51,
  "Pistachios": 1.53,
  "Almonds": 1.54,
  "Pollock": 1.60,
  "Strawberries: heated greenhouse": 1.64,
  "Carp": 1.76,
  "Zucchini: passive greenhouse": 1.77,
  "Mackerel": 1.80,
  "Rape and mustard seed": 2.09,
  "Cucumbers and gherkins: heated greenhouse": 2.10,
  "Tuna": 2.15,
  "Tomatoes: heated greenhouse": 2.20,
  "Rice": 2.55,
  "Whiting": 2.66,
  "Duck": 3.09,
  "Sea bass": 3.27,
  "Haddock": 3.41,
  "Eggs": 3.46,
  "Salmon": 3.47,
  "Fish: all species": 3.49,
  "Cod": 3.51,
  "Buffalo milk": 3.57,
  "Chicken": 3.65,
  "Lettuce: heated greenhouse": 3.70,
  "Eel": 3.88,
  "Kangaroo": 4.10,
  "Trout": 4.20,
  "Rabbit": 4.70,
  "Cream": 5.64,
  "Pork: world average": 5.77,
  "Ling common": 6.45,
  "Pomfret": 6.63,
  "Rock fish": 6.94,
  "Octopus/squid/cuttlefish": 7.13,
  "Prawns/shrimp": 7.80,
  "Turkey": 7.17,
  "Diamond fish": 8.33,
  "Rhombus": 8.41,
  "Cheese": 8.55,
  "Butter": 9.25,
  "Mussels": 9.51,
  "Hake": 9.77,
  "Porbeagle": 11.44,
  "Shark mako": 11.50,
  "Anglerfish": 12.29,
  "Swordfish": 12.84,
  "Megrim": 14.15,
  "Turbot": 14.51,
  "Sole": 20.86,
  "Lamb: world average": 25.58,
  "Beef: world average": 26.61,
  "Lobster": 27.80,
  "Buffalo": 60.43
}

let meanGHGCat = {
  "Vegetables (all field grown vegetable)": 0.47,
  "Fruits (all field grown fruit)": 0.50,
  "Cereals": 0.53,
  "Legumes and Pulses": 0.66,
  "Passive greenhouse fruit and vegetable": 1.02,
  "Tree nuts combined":  1.42,
  "Milk world average":  1.39,
  "Heated greenhouse fruit and vegetable":  2.81,
  "Rice":  2.66,
  "Eggs":  3.39,
  "Fish: all species combined":  4.41,
  "Chicken":  4.12,
  "Cream":  5.32,
  "Pork: world average":  5.85,
  "Prawns/shrimp":  14.85,
  "Cheese":  8.86,
  "Butter":  11.52,
  "Lamb: world average":  27.91,
  "Beef: world average":  28.73
}

/*https://www.fcrn.org.uk/sites/default/files/Food_and_Land_Use_-_Consumption_Patterns.pd
m^2 /year kg*/
let landReq = {
  "Vegetable oil": 20.7,
  "Margarine": 21.5,
  "Low fat spread": 10.3,
  "Beef": 20.9,
  "Pork": 8.9,
  "Chicken filet": 7.3,
  "Whole milk": 1.2,
  "Semi-skimmed milk": 0.9,
  "Butter": 13.8,
  "Cheese": 10.2,
  "Eggs": 3.5,
  "Cereals": 1.4,
  "Sugar": 1.2,
  "Potatoes": 0.2,
  "Vegetables (average)": 0.3,
  "Fruits (average)": 0.5
}

/*https://waterfootprint.org/media/downloads/Report-48-WaterFootprint-AnimalProducts-Vol1_1.pdf
m^3/ton blue, green, gray water
*/
let waterReq = {
  "Sugar crops": 197,
  "Vegetables": 322,
  "Starchy roots":  387,
  "Fruits":  962,
  "Cereals":  1644,
  "Oil crops":  2364,
  "Pulses":  4055,
  "Nuts":  9063,
  "Milk":  1020,
  "Eggs":  3265,
  "Chicken meat": 4325,
  "Butter":  5553,
  "Pig meat":  5988,
  "Sheep/goat meat":  8763,
  "Bovine meat":  15415
}

let foodGroupsUSDA = [
  'Fats and Oils',
  'Vegetables',
  'Beef',
  'Pork',
  'Poultry',
  'Dairy and Egg',
  'Cereal Grains',
  'Fruits',
  'Legumes',
  'Lamb, Veal and Game',
  'Sweets',
  'Finfish and Shellfish'
]

const avgArray = (arr)=>{
  return arr.reduce((n,tot)=>{
    return tot += n
  })/arr.length
}
module.exports = {
  envCategories: {
    vegetableFats: {
      usda:'fats and oils',
      land: 20.7,
      water: 2364
    },
    cereal: {
      usda: 'cereal grains',
      land: 1.4,
      water: 1644,
      ghg: 0.53
    },
    vegetables: {
      usda: 'vegetables',
      land: 0.3,
      water: 322,
      ghg: 0.47
    },
    sugar: {
      land: 1.2,
      water: 197
    },
    fruit: {
      usda: 'fruits',
      land: 0.5,
      water: 962,
      ghg: 0.5
    },
    legumes: {
      usda: 'legumes',
      land: 0.3,
      water: 4055,
      ghg: 0.66
    },
    milk : {
      land: 1.2,
      water: 1020,
      ghg: 1.39
    },
    butter: {
      land: 13.8,
      water: 5553,
      ghg: 11.52
    },
    cheese: {
      land: 10.2,
      water: 310+439+4264,
      ghg: 8.86
    },
    beef: {
      usda:'beef',
      land: 20.9,
      water: 15415,
      ghg: 28.73
    },
    chicken: {
      usda: 'poultry',
      land: 7.3,
      water: 4325,
      ghg: 4.12
    },
    egg: {
      land: 3.5,
      water: 3265,
      ghg: 3.39
    },
    pork: {
      usda:'pork',
      land: 8.9,
      water: 5988,
      ghg: 5.85
    },
    lamb: {
      usda: 'lamb, veal, and game',
      water: 8763,
      ghg: 27.91
    },
    fish: {
      usda: 'finfish and shellfish',
      ghg: 4.41
    },
  },
  ratingBins: {
    land: {
      good: 0.2119 - (0.1527/2),
      fair: 0.2119,
      poor: 0.2119 + (0.1527/2)
    },
    water: {
      good: 0.1624 - (0.09166/2),
      fair: 0.1624,
      poor: 0.1624 + (0.09166/2)
    },
    ghg: {
      good: 0.2802 - (0.255/2),
      fair: 0.2802,
      poor: 0.2802 + (0.255/2)
    }
  }
}

let per100Cat = {
  vegetableFats: {
    land: avgArray([0.23483193277310926]),
    water: avgArray([0.026818487394957985])
  },
  cereal: {
    land:	avgArray([0.0411908931698774 ,0.1383132530120482, 	0.037261538461538464,	0.34840909090909095]),
    water: avgArray([0.04836987740805604, 0.16241927710843374, 	0.043755692307692315, 0.40913181818181815]),
    ghg: avgArray([0.015593695271453588, 0.05236144578313253, 	0.014106153846153846, 0.13189772727272728])
  },
  vegetables: {
    land: avgArray([0.08806451612903224, 0.14888888888888888, 	0.09677419354838708]),
    water: avgArray([0.09452258064516127, 0.15980740740740743, 	0.10387096774193548]),
    ghg: 	avgArray([0.13796774193548383, 	0.23325925925925925, 	0.15161290322580645])
  },
  sugar: {
    land: 	0.03272727272727272,
    water: 0.005372727272727273
  },
  fruit: {
    land: avgArray([0.10377358490566038, 0.10472972972972973, 	0.05625,	0.08809523809523809]),
    water: avgArray([0.19966037735849057, 0.2015, 	0.108225,	0.1694952380952381]),
    ghg: avgArray([0.10377358490566038, 0.10472972972972973, 0.05625, 	0.08809523809523809])
  },
  legumes: {
    land: avgArray([0.00900489396411093,0.008901569186875891, 0.0087890625,0.008870431893687707]),
    water: avgArray([0.12171615008156607, 0.12031954350927249, 0.118798828125, 0.11989867109634553]),
    ghg: avgArray([0.019810766721044044, 0.019583452211126964, 0.0193359375, 0.01951495016611296])
  },
  milk : {
    land: 0.19651006711409397,
    water: 0.16703355704697986,
    ghg: 0.22762416107382552
  },
  butter: {
    land: 0.19166666666666668,
    water: 0.077125,
    ghg: 0.16
  },
  cheese: {
    land: 0.25942196531791906,
    water: 0.12749826589595376,
    ghg: 0.22534104046242776
  },
  beef: {
    land: 0.31021727748691097,
    water: 0.22880379581151833,
    ghg: 0.42643743455497385
  },
  chicken: {
    land: 0.5091975308641975,
    water: 0.3016820987654321,
    ghg: 0.28738271604938276
  },
  egg: {
    land: 0.24305555555555555,
    water: 0.22673611111111108,
    ghg: 0.23541666666666666
  },
  pork: {
    land: 0.33642,
    water: 0.2263464,
    ghg: 0.22112999999999997
  },
  lamb: {
    water: 0.3105388125,
    ghg: 0.989060625
  },
  fish: {
    ghg: 0.5355
  },
}



let landSet = [];
let waterSet = [];
let ghgSet = [];

let cats = Object.keys(per100Cat)
for(let i = 0; i < cats.length; i++){
  if(per100Cat[cats[i]].land){
    landSet.push(per100Cat[cats[i]].land)
  }
  if(per100Cat[cats[i]].water){
    waterSet.push(per100Cat[cats[i]].water)
  }
  if(per100Cat[cats[i]].ghg){
    ghgSet.push(per100Cat[cats[i]].ghg)
  }
}

console.log(ghgSet)
