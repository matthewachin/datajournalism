const fs = require('fs');
const ejs = require('ejs');

let state_info = JSON.parse(fs.readFileSync('../data/data.json', 'utf8'));
let index_template = fs.readFileSync('views/index.ejs', 'utf8');
let state_template = fs.readFileSync('views/state.ejs', 'utf8');
let about_template = fs.readFileSync('views/about.ejs', 'utf8')

/*
  1) Generate a web page for each state
  2) Keep track of the link for index.html
*/
let twentytwenty_data = {}
for (state in state_info){
  let state_html = ejs.render(state_template, {
    filename: __dirname + '/views/state.ejs',
    data: state_info[state],
    name: state
  });
  state_info[state].link = getBetterFileName(state);
  fs.writeFileSync('../public/'+state_info[state].link+'.html', state_html, 'utf8');
  twentytwenty_data[state] = {
    'population': state_info[state]['2020 ']['population'],
    'total_deaths': state_info[state]['2020 ']['total_deaths'],
  }
}

/*
  1) Generate an index page of all states
*/

let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  data: state_info, 
  ddata: twentytwenty_data,
});

let about_html = ejs.render(about_template, {
  filename: __dirname + '/views/about.ejs'
})

fs.writeFileSync('../public/index.html', index_html, 'utf8');
fs.writeFileSync('../public/about.html', about_html, 'utf8')

function getBetterFileName(stateName){
  let betterFileName = stateName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}