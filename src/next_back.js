const order = [
  'Alabama',        'Alaska',         'Arizona',
  'Arkansas',       'California',     'Colorado',
  'Connecticut',    'Delaware',       'District of Columbia',
  'Florida',        'Georgia',        'Hawaii',
  'Idaho',          'Illinois',       'Indiana',
  'Iowa',           'Kansas',         'Kentucky',
  'Louisiana',      'Maine',          'Maryland',
  'Massachusetts',  'Michigan',       'Minnesota',
  'Mississippi',    'Missouri',       'Montana',
  'Nebraska',       'Nevada',         'New Hampshire',
  'New Jersey',     'New Mexico',     'New York',
  'North Carolina', 'North Dakota',   'Ohio',
  'Oklahoma',       'Oregon',         'Pennsylvania',
  'Rhode Island',   'South Carolina', 'South Dakota',
  'Tennessee',      'Texas',          'Utah',
  'Vermont',        'Virginia',       'Washington',
  'West Virginia',  'Wisconsin',      'Wyoming'
]

let next_button = document.getElementById('next_state')
let back_button = document.getElementById('back_state')
let currentPOS = order.indexOf(state_name)
let nextState = null
let previousState = null
if(currentPOS == 0){
  previousState = 50
  nextState = 1
}else if(currentPOS == 50){
  previousState = 49
  nextState = 0
}else{
  previousState = currentPOS-1
  nextState = currentPOS+1
}

next_button.innerHTML = `Next State (${order[nextState]})`
next_button.href = `${getBetterFileName(order[nextState])}.html`
back_button.innerHTML = `Previous State (${order[previousState]})`
back_button.href = `${getBetterFileName(order[previousState])}.html`

function getBetterFileName(stateName){
  return stateName.split(" ").join("_");
}