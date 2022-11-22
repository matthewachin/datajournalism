const fs = require('fs');
const ejs = require('ejs');

let state_info = JSON.parse(fs.readFileSync('../data/data.json', 'utf8'));
let index_template = fs.readFileSync('views/index.ejs', 'utf8');
let state_template = fs.readFileSync('views/state.ejs', 'utf8');

/*
  1) Generate a web page for each state
  2) Keep track of the link for index.html
*/
for (state in state_info){
  let state_html = ejs.render(state_template, {
    filename: __dirname + '/views/state.ejs',
    data: state_info[state],
    name: state
  });
  state_info[state].link = getBetterFileName(state);
  fs.writeFileSync('../public/'+state_info[state].link+'.html', state_html, 'utf8');
}

/*
  1) Generate an index page of all states
*/

let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  data: state_info
});

fs.writeFileSync('../public/index.html', index_html, 'utf8');

function getBetterFileName(stateName){
  let betterFileName = stateName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}
