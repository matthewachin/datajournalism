const fs = require('fs')
// Notes,State,State Code,ICD Chapter,ICD Chapter Code,Year,Year Code,Deaths,Population,Crude Rate

let final_data = {}

let old_file = fs.readFileSync('raw_data.txt', 'utf8')

let deathData = old_file.split('\n')
deathData.shift()

deathData.forEach(function(death){
  let state_info = death.split('|')
  let state_name = state_info[1]
  let year = state_info[5]
  let cause_name = state_info[3]
  let cause = {
    'deaths' : state_info[7],
    'crude-rate' : state_info[9],
  }
  if(state_name in final_data){
    if(year in final_data[state_name]){
      final_data[state_name][year][cause_name] = cause
    }else{
      final_data[state_name][year] = {}
      final_data[state_name][year]['population'] = state_info[8]
      final_data[state_name][year][cause_name] = cause
    }
  }else{
    final_data[state_name] = {}
    final_data[state_name][year] = {}
    final_data[state_name][year]['population'] = state_info[8]
    final_data[state_name][year][cause_name] = cause

  }
})


fs.writeFileSync('data.json', JSON.stringify(final_data), 'utf8')
