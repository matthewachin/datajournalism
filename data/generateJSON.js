const fs = require('fs')
// Notes,State,State Code,ICD Chapter,ICD Chapter Code,Year,Year Code,Deaths,Population,Crude Rate

let final_data = {}
let causesOfDeath = [
"Certain infectious and parasitic diseases",
"Neoplasms",
"Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism",
"Endocrine, nutritional and metabolic diseases",
"Mental and behavioural disorders",
"Diseases of the nervous system",
"Diseases of the circulatory system",
"Diseases of the respiratory system",
"Diseases of the digestive system",
"Diseases of the skin and subcutaneous tissue",
"Diseases of the musculoskeletal system and connective tissue",
"Diseases of the genitourinary system",
"Certain conditions originating in the perinatal period",
"Congenital malformations, deformations and chromosomal abnormalities",
"Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified",
"External causes of morbidity and mortality"
]


let old_file = fs.readFileSync('raw_data.txt', 'utf8')

let deathData = old_file.split('\n')


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
for(state_name in final_data){
  let state = final_data[state_name]
  for(year in state){
    let state_2 = final_data[state_name][year]
    let total_deaths = 0
    for(cause in state_2){
      if(cause !== 'population'){
        let deaths = final_data[state_name][year][cause].deaths
        total_deaths += Number(deaths)
      }
    }
    for(cause of causesOfDeath){
      if(cause !== 'population'){
        if(final_data[state_name][year][cause] == null){
          final_data[state_name][year][cause] = {}
          //console.log(final_data[state_name][year][cause])
          final_data[state_name][year][cause]['deaths'] = 0
          final_data[state_name][year][cause]['crude-rate'] = 0
        }else if(final_data[state_name][year][cause]['deaths'] == null || final_data[state_name][year][cause]['crude-rate'] == null){
          final_data[state_name][year][cause]['deaths'] = 0
          final_data[state_name][year][cause]['crude-rate'] = 0
        }
      }
    }
    state_2['total_deaths'] = total_deaths
  }
}




fs.writeFileSync('data.json', JSON.stringify(final_data), 'utf8')