// from data.js
var tableData = data;

var table = document.getElementById("ufo-table");

for (var i = 0; i < tableData.length; i++)
{
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(i+1);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    row.insertCell(0).innerHTML = tableData[i].datetime;
    row.insertCell(1).innerHTML = tableData[i].city;
    row.insertCell(2).innerHTML = tableData[i].state;
    row.insertCell(3).innerHTML = tableData[i].country;
    row.insertCell(4).innerHTML = tableData[i].shape;
    row.insertCell(5).innerHTML = tableData[i].durationMinutes;
    row.insertCell(6).innerHTML = tableData[i].comments;
}

$(document).ready(function() 
{
    $("ufo-table").DataTable();
} );


