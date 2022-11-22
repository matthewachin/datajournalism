const fs = require('fs')
let state_info = JSON.parse(fs.readFileSync('data/data.json'))

// delete micropages
for(state in state_info){
  fs.unlinkSync(`public/${state}`)
}