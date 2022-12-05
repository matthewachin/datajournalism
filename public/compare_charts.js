const state_name = document.getElementById('state_title').innerHTML.substring(10)
let national_deaths_per_year = {
  '1999': 2391143,
  '2000': 2403035,
  '2001': 2416093,
  '2002': 2443141,
  '2003': 2448007,
  '2004': 2397325,
  '2005': 2447782,
  '2006': 2425990,
  '2007': 2423460,
  '2008': 2471723,
  '2009': 2436924,
  '2010': 2468186,
  '2011': 2515205,
  '2012': 2543016,
  '2013': 2596768,
  '2014': 2626199,
  '2015': 2712395,
  '2016': 2744021,
  '2017': 2813319,
  '2018': 2838959,
  '2019': 2854593,
  '2020 ': 3383476
}
let deaths_per_year = {}
let data_d2 = JSON.parse(document.getElementById("state_data").innerHTML)
for(year in data_d2){
  deaths_per_year[year] = Number(data_d2[year]['total_deaths'])
}
const national_population = 331900000
const state_population = data_d2['2020 '].population
var chart_data_d2 = [{
  values: [state_population, (national_population-state_population)],
  labels: [state_name, 'Other States'],
  type: 'pie'
}];

var comp_layout1 = {
  title: `${state_name}'s Population vs. National Population`,
  height: 400,
  width: 500
};

Plotly.newPlot('pie_chart_my', chart_data_d2, comp_layout1);

let x_data_d2 = []
let y_data_d2 = []

for(year in national_deaths_per_year){
  x_data_d2.push(year);
  y_data_d2.push((deaths_per_year[year]/national_deaths_per_year[year])*100)
}
console.log(x_data_d2)
console.log(y_data_d2)
let graph_data_d2 = [{
  x:x_data_d2,
  y:y_data_d2,
  type:'line',
}]
var comp_layout2 = {
  title: {
    text: `Percentage of National Deaths in ${state_name} Each Year`,
  },
  xaxis:{
    title:{
      text: 'Year'
    }
  },
  yaxis:{
    title:{
      text: '% of National Deaths'
    }
  },
};
Plotly.newPlot('line_chart_my', graph_data_d2, comp_layout2)

