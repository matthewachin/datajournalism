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
  console.log(state)
  let stateData = data[state]['2020 ']
  console.log(stateData)
  let population = Number(stateData['population'])
  let total_deaths = Number(stateData['total_deaths'])
  console.log('Population: ' + String(population) + ', Deaths: ' + String(total_deaths))
}
