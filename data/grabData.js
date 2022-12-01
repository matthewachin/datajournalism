/*const fs = require('fs')

let oldFile = fs.readFileSync('test.csv', 'utf8')
let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))

let states = oldFile.split('\r\n')
let stateNames = {}
for(state of states){
  stateNames[String(state.split(',')[1])] = {}
}
let fString = ''
for(state in data){
  let stateData = data[state]['2020 ']
  let population = Number(stateData['population'])
  let total_deaths = Number(stateData['total_deaths'])
//  console.log(String(state) + 'Population: ' + String(population) + ', Deaths: ' + String(total_deaths))
  console.log()
}
*/
const stateNames = {
  AK: "Alaska",
  AL: "Alabama",
  AR: "Arkansas",
  AZ: "Arizona",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DC: "District Of Columbia",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  GU: "Guam",
  HI: "Hawaii",
  IA: "Iowa",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  MA: "Massachusetts",
  MD: "Maryland",
  ME: "Maine",
  MI: "Michigan",
  MN: "Minnesota",
  MO: "Missouri",
  MS: "Mississippi",
  MT: "Montana",
  NC: "North Carolina",
  ND: "North Dakota",
  NE: "Nebraska",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NV: "Nevada",
  NY: "New York",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VA: "Virginia",
  VT: "Vermont",
  WA: "Washington",
  WI: "Wisconsin",
  WV: "West Virginia",
  WY: "Wyoming"
}
let n = {}
for(t in stateNames){
  n[String(t).toLowerCase()]=stateNames[t]
}
console.log(n)