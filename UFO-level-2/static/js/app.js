// from data.js  Assign the data from `data.js` to a descriptive variable
var tableData = data;

// YOUR CODE HERE!
// check all the engine html with js file
console.log("Start");
/*
var datesMapped=tableData.map(data => data.datetime);
console.log(datesMapped);
let values=fecha.append(datesMapped);
var citiesMapped = tableData.map(data => data.city);
//console.log(citiesMapped);
var statesMapped=tableData.map(data => data.state);
//console.log(statesMapped);
var shapesMapped=tableData.map(data => data.shape);
//console.log(shapesMapped); */

// Function for the Table Body HTML
var tbody=d3.select("tbody");

function filteredData(tableInfo){
      tbody.text("")
      tableInfo.forEach(function(ufo_sightings){
      let tr = tbody.append("tr")
      Object.entries(ufo_sightings).forEach(function([key,value]){
      let td = tr.append("td").text(value)        
      })
  }
 )
}

//Assign all data in data.js
filteredData(tableData);
//console.log(tableData);

// Get the value property of the input element
let button = d3.select("#filter-btn");
button.on("click",function(){

//var inputDate=d3.select("#datetime");
//let date =inputDate.property("value");
//console.log(date);
 
 // Obtain the value of each input element using D3
 let inputDate = d3.select("#datetime");
 let inputCity = d3.select("#city");
 let inputState = d3.select("#state");
 let inputCountry = d3.select("#country");
 let inputShape = d3.select("#shape");

 // Combinations from the search
let filterData = tableData.filter(ufo_sightings =>{
 return (ufo_sightings.datetime===inputDate.property("value") || !inputDate.property("value") ) && 
           (ufo_sightings.city===inputCity.property("value") || !inputCity.property("value")) &&
           (ufo_sightings.state===inputState.property("value") || !inputState.property("value")) &&
           (ufo_sightings.country===inputCountry.property("value") || !inputCountry.property("value")) &&
           (ufo_sightings.shape===inputShape.property("value") || !inputShape.property("value"))

}
)

 //Filter for the request user
 filteredData(filterData);

});

//This button charge all the data in way to clean the last search
let button2 = d3.select("#data-btn");
button2.on("click",function(){
	filteredData(tableData)
})



