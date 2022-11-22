const fs = require('fs')
let state_info = JSON.parse(fs.readFileSync('data/data.json'))

// delete micropages
for(state in state_info){
  fs.unlinkSync(`public/${getBetterFileName(state)}.html`)
}

copy('about.html')
copy('nav.js')
copy('styles.css')
copy('IMG_5339.jpeg','images/')
copy('IMG_5340.jpeg','images/')
copy('IMG_5341.jpeg','images/')
copy('IMG_5342.jpeg','images/')


function getBetterFileName(stateName){
  let betterFileName = stateName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}

function copy(fileName, path=''){
  fs.unlinkSync('public/'+fileName)
  fs.writeFileSync('public/'+fileName, fs.readFileSync('src/'+path+fileName))
}