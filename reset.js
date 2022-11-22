const fs = require('fs')
let state_info = JSON.parse(fs.readFileSync('data/data.json'))

// delete micropages
for(state in state_info){
  if(fs.existsSync(`public/${getBetterFileName(state)}.html`)){
    fs.unlinkSync(`public/${getBetterFileName(state)}.html`)
  }
}

copy('about.html')
copy('nav.js')
copy('styles.css')
copy('about_styles.css')
copy('IMG_5339.jpeg','images/')
copy('IMG_5340.jpeg','images/')
copy('IMG_5341.jpeg','images/')
copy('IMG_5342.jpeg','images/')
copy('IMG_0234.png','images/')
copy('IMG_0235.png','images/')
copy('menu-icon.png', 'images/')


function getBetterFileName(stateName){
  let betterFileName = stateName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}

function copy(fileName, path=''){
  if(fs.existsSync('public/'+fileName)){
    fs.unlinkSync('public/'+fileName)
  }
  fs.writeFileSync('public/'+fileName, fs.readFileSync('src/'+path+fileName))
}