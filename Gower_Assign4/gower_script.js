
/* Assignment #5
  
	Author: Christian Gower
	Date:   11-12-2020
	
	File Name: gower_script.js
*/

//officials function, writes the city officials on the index page

function officials() {
	document.write("<ul>");
	document.write("<li>Mayor Oliver Queen</li>");
	document.write("<li>Deputy Mayor Quentin Lance</li>");
	document.write("<li>Police Captain Dinah Drake</li>");
	document.write("<li>District Atourney Laurel Lance</li>");
	document.write("</ul>");
}

//submitEvents() function

function submitEvents() {
	var n = document.forms["appinfo"]["nBox"].value;
		if (n == "") {
			alert("Please fill out your name.");
			return false;
		}
	var m = document.forms["appinfo"]["emailBox"].value;
		if (m == "") {
			alert("Please fill out your Email Address.");
			return false;
		}
	var p = document.forms["appinfo"]["phoneBox"].value;
		if (p == "") {
			alert("Please fill out your Phone Number.");
			return false;
		}
	var w = document.forms["appinfo"]["siteBox"].value;
		if (w == "") {
			alert("Please fill out your Website.");
			return false;
		}
}

// point of interest function 

function poi(location) {
	alert("You clicked on " + location);
}

//business function

function business() {
	var name = ["Big Belly Burger", "Tech Village", "JH Moving and Storage", "Star Labs", "Lance's Grill", "Verdant", "Lockwood Steel"];
	var loc = ["311 Berlanti St", "1492 West-Allen Ave", "1620 7th St", "1006 Garrick Lane", "915 Kripke Ln", "514 12th St", "730 Weisinger Rd"];
	var years = ["Est. 1995", "Est. 1988", "Est. 2012", "Est. 2009", "Est. 2016", "Est. 2012", "Est. 1934"];
	var type = ["Fast Food Restaurant", "Retail and Electronics", "Storage Rental", "Research and Development", "Bar and Grill", "Night Club", "Manufacturing"];
}
	