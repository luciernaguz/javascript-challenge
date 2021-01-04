// from data.js
var tableData = data;

// YOUR CODE HERE!

// Assign the data from `data.js` to a descriptive variable
//var people = data;

// Select the button
//var button = d3.select("#filter-btn");



  // Select the input element and get the raw HTML node
  //var inputElement = d3.select("#btn btn-default");

// Get the value property of the input element
// var inputValue = inputElement.property("value");
//  console.log(inputDate);
//  console.log(tableData);

var button = d3.select("#filter-btn");
button.on("click",function(){
  var inputDate=d3.select("#datetime");
  let date =inputDate.property("value");
  console.log(date);

});




