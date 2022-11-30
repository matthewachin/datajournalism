const fs = require('fs')

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