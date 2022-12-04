let causes = [
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
let data = JSON.parse(document.getElementById("state_data").innerHTML)
//console.log(data)
let xData = []
let yData = []
for(year in data){
  xData.push(year)
  for(cause in causes){
    yData[year - 1999] = (data[year]['total_deaths'])
  }

}
//console.log(xData)
//console.log(yData)

  const layout2 = {
    margin: { t: 0 },
    title: {
      text: 'Deaths per Year (1999-2020)',
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
	NEOPLASMS = document.getElementById('Neoplasms');
	Plotly.newPlot( NEOPLASMS, [{
	x: xData,
	y: yData }], layout2 );

  var stackedData = [];

//console.log(causes)
//add object of each COD's data to array

for(cause of causes){
  let xData2 = []
  let yData2 = []
  let a = 'deaths'
  //console.log(cause)
  for(year in data){
    if(data[year][cause].deaths != undefined){
      xData2.push(year)
      yData2.push(data[year][cause].deaths)
      //console.log(yData2)
    }

    //console.log(year + "'s data: ");
    //console.log(data[year])
    //console.log(data[year][causes[cause]]['deaths'])
    /*if(data[year][cause]["deaths"] != null && data[year][causes[cause]]["deaths"] != 'Unreliable'){
      xData2.push(year)
      yData2.push(data[year][cause]['deaths'])
      console.log(yData2)

    }else{
      console.log('fail')
    }
    */
  }

  var causeObj = {
  x: xData2,
  y: yData2,
  name: cause,
  type: 'bar'
  };
  stackedData.push(causeObj);
}


var layout = {
  barmode: 'stack',
  title: {
    text: 'Deaths every year from 1999-2020 for each cause of death',
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


Plotly.newPlot('Deaths', stackedData, layout);