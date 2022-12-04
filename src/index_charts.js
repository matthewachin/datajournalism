let data = JSON.parse(document.getElementById("state_data").innerHTML)
let chart_data = {}
let states = {}
for(year in data['Alabama']){
  if(year !== 'link'){
    states[year] = 0
    for(state in data){
      states[year] = states[year] + data[state][year]['total_deaths']
    }
  }
}
for(state in data){
  let twtw_data = data[state]['2020 ']
  for(cause in twtw_data){
    if(cause !== 'population' && cause !== 'total_deaths'){
      if(cause in chart_data){
        chart_data[cause] = chart_data[cause] + Number(twtw_data[cause].deaths)
      }else{
        chart_data[cause] = Number(twtw_data[cause].deaths)
      }
    }
  }
}

let x_data = []
let y_data = []
for(cause in chart_data){
  x_data.push(cause)
  y_data.push(chart_data[cause])
}
let graph_data = [
  {
    x: x_data,
    y: y_data,
    type: 'bar',
  }
]
var layout = {
  barmode: 'stack',
  title: {
    text: 'Leading Causes of Death in the US',
  },
  xaxis:{
    title:{
      text: 'Cause of Death'
    }
  },
  yaxis:{
    title:{
      text: 'Number of deaths'
    }
  },
};

Plotly.newPlot('chart_1', graph_data, layout);

let x_data2 = []
let y_data2 = []
for(state in states){
  x_data2.push(state)
  y_data2.push(states[state])
}
let graph_data2 = [
  {
    x: x_data2,
    y: y_data2,
    type: 'line',
  }
]
var layout2 = {
  title: {
    text: 'Number of Deaths 1999-2020',
  },
  xaxis:{
    title:{
      text: 'Year'
    }
  },
  yaxis:{
    title:{
      text: 'Number of deaths'
    }
  },
};
Plotly.newPlot('chart_2', graph_data2, layout2)