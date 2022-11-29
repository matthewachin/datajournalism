const fs = require('fs')

let oldFile = fs.readFileSync('test.csv', 'utf8')
let data = fs.readFileSync('data.json', 'utf8')
let states = oldFile.split('\r\n')
let stateNames = {}
for(state of states){
  stateNames[String(state.split(',')[1])] = {}
}
for(state in stateNames){
  let stateData = data[state]['2020']
  let population = Number(stateData.population)
  let total_deaths = 0
  for(cause in stateData){
    if(cause !== 'population'){
      state
    }
  }
}