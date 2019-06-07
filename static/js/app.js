// column variable to accomodate data
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {
  dataInput.forEach(ufo_sightings => {
    var row = d3.select("tbody").append("tr");
    columns.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });
}

//Populate table
populate(data);

// Filter by attribute
d3.select("#filter-btn").on("click", () => {
  d3.event.preventDefault();
  var inputDate = d3.select("#datetime").property("value").trim();
  var filterDate = data.filter(data => data.datetime === inputDate);
  var filterData = data.filter(data => data.datetime === inputDate);

  // Add filtered sighting to table
  d3.select("tbody").html("");

  if (filterData.length !== 0) {
    populate(filterData);
  }
    else if (filterData.length === 0 && filterDate.length !== 0){
      populate(filterDate);
    }
    else {
        d3.select("tbody").append("tr").append("td").text("No results found!"); 
    }
})