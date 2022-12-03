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

const combos = [
"al-fl",
"al-ga",
"al-ms",
"al-tn",
"ar-la",
"ar-mo",
"ar-ms",
"ar-ok",
"ar-tn",
"ar-tx",
"az-ca",
"az-nm",
"az-nv",
"az-ut",
"ca-nv",
"ca-or",
"co-ks",
"co-ne",
"co-nm",
"co-ok",
"co-ut",
"co-wy",
"ct-ma",
"ct-ny",
"ct-ri",
"dc-md",
"dc-va",
"de-md",
"de-nj",
"de-pa",
"fl-ga",
"ga-nc",
"ga-sc",
"ga-tn",
"ia-il",
"ia-mn",
"ia-mo",
"ia-ne",
"ia-sd",
"ia-wi",
"id-mt",
"id-nv",
"id-or",
"id-ut",
"id-wa",
"id-wy",
"il-in",
"il-ky",
"il-mo",
"il-wi",
"in-ky",
"in-mi",
"in-oh",
"ks-mo",
"ks-ne",
"ks-ok",
"ky-mo",
"ky-oh",
"ky-tn",
"ky-va",
"ky-wv",
"la-ms",
"la-tx",
"ma-nh",
"ma-ny",
"ma-ri",
"ma-vt",
"md-pa",
"md-va",
"md-wv",
"me-nh",
"mi-oh",
"mi-wi",
"mn-nd",
"mn-sd",
"mn-wi",
"mo-ne",
"mo-ok",
"mo-tn",
"ms-tn",
"mt-nd",
"mt-sd",
"mt-wy",
"nc-sc",
"nc-tn",
"nc-va",
"nd-sd",
"ne-sd",
"ne-wy",
"nh-vt",
"nj-ny",
"nj-pa",
"nm-ok",
"nm-tx",
"nv-or",
"nv-ut",
"ny-pa",
"ny-vt",
"oh-pa",
"oh-wv",
"ok-tx",
"or-wa",
"pa-wv",
"sd-wy",
"tn-va",
"ut-wy",
"va-wv",
]
let codes = {}
for(let combo of combos){
  const i = combo.split('-')
  const state1 = i[0]
  const state2 = i[1]
  if(!(state1 in codes)){
    codes[state1] = [combo]
  }else{
    codes[state1].push(combo)
  }
  if(!(state2 in codes)){
    codes[state2] = [combo]
  }else{
    codes[state2].push(combo)
  }
}

console.log(codes)
*/
const stateNames = ["Alaska","Alabama","Arkansas","Arizona","California","Colorado","Connecticut","District Of Columbia","Delaware","Florida","Georgia","Guam","Hawaii","Iowa","Idaho","Illinois","Indiana","Kansas","Kentucky","Louisiana","Massachusetts","Maryland","Maine","Michigan","Minnesota","Missouri","Mississippi","Montana","North Carolina","North Dakota","Nebraska","New Hampshire","New Jersey","New Mexico","Nevada","New York","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Virginia","Vermont","Washington","Wisconsin","West Virginia","Wyoming"]
for(let name of stateNames){
  let link = name.slice()
  link = `${getBetterFileName(link)}.html`
  console.log(`<a class="dropdown-item" href="${link}">${name}</a>`)
}
function getBetterFileName(stateName){
  let betterFileName = stateName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}
