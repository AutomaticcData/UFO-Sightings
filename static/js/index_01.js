// from data.js
var tableData = data;

//view the data;
console.log(data);

//document.write('<h1>WTH</h1>');
// YOUR CODE HERE!
//d3.event.preventDefault();


//create a function for the data to create a table


function makeHtmlTable(dataobject)
{
    var objData = dataobject;

    //get required items
    var objBody = d3.select("tbody");
    var objTable = d3.select("table");
    
    //add a row to the table
    var objRow = objBody.append("tr");

    //07-Ins_Object_Iteration-->
    // Get the entries for each object in the array
    // Object.entries(user).forEach(([key, value]) => {
    // Log the key and value

    Object.entries(dataobject).forEach(([key, value]) => 
    {
        // Log the key and value
        console.log(`Key: ${key} and Value ${value}`);

        var objCell = objBody.append("td");
        objCell.text(value);
      });
    }


//create the new table https://www.w3schools.com/jsref/jsref_forEach.asp
tableData.forEach(makeHtmlTable);
//

//find the filter button
var filterbutton = d3.select("#filter-btn");

//create the filter function
filterbutton.on("click", function() {
	d3.select("tbody").html("");
	d3.event.preventDefault();

///Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:
//date,city,state,country,shape
var filteredDate = d3.select("#datetime").property("value");
var state = d3.select("#state").property("value").toLowerCase();
var city = d3.select("#city").property("value").toLowerCase();
var country = d3.select("#country").property("value").toLowerCase();
var shape = d3.select("#shape").property("value").toLowerCase();
var filteredData = tableData;


//create the function here
function filteredValue(data, key, result)
{
	var filteredData = data.filter(record => record[key] === result);
	return filteredData;
}


//filter user inputs based on conditions no space and not empty
if(filteredDate !=""){
filteredData = filteredValue(filteredData, 'datetime', filteredDate)
   console.log('filter data',filteredData) ;
};

if((country !==' ') && (country !== ''))
{
	filteredData= filteredValue(filteredData,'country',country)
};

if((state !==' ' ) && (state !== ''))
{
	filteredData= filteredValue(filteredData,'state',state)
};

if((city !==' ') && (city !== ''))
{
	filteredData= filteredValue(filteredData,'city',city)
};

if((shape !==' ') && (shape !== ''))
{
	filteredData= filteredValue(filteredData,'shape',shape)
};


filteredData.forEach(makeHtmlTable);


///testing --------->
console.log(`date: ${filteredDate}`);
console.log(`state: ${state}`);
console.log(`city: ${city}`);
console.log(`country: ${country}`);
console.log(`shape: ${shape}`);
});

//https://stackoverflow.com/questions/7532320/one-button-firing-another-buttons-click-event
//https://www.w3schools.com/jsref/event_onclick.asp
function myFunction() {
    document.getElementById("myForm").reset();
    document.getElementById('filter-btn').click()
}









