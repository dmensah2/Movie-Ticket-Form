<html>
<head>
<script type="text/javascript">

//Program name: TicketSales.html
//Purpose: Creates form to connect to JavaScript that will create a web page to display 
//the name of a movie theatre, the price of an adult ticket, and the price of a child's ticket. 
//Author: Deidre Mensah
//Date last modified: 02-Mar-2017

//Variables and constants
var ADULT_PRICE	= 10;		//fixed price of adult ticket
var CHILD_PRICE = 5;		//fixed price of child's ticket
var BR = "<br />";		//HTML line break
var PA = "<p />";		//HTML paragraph break
var NL = "\n";			//JavaScript newline character


//This function displays ticket information, including the user's name, the number of adult tickets, the total number of adult
//and children's tickets entered by the user, the total cost of children's tickets and the total final cost.
function displayOrder() {
	var firstName = document.OrderForm.firstName.value;
	var lastName = document.OrderForm.lastName.value;	
	var totAdultTix = document.OrderForm.adultTicket.value;
	var totChildTix = document.OrderForm.childTicket.value;
	var totAdultPrice = totAdultTix * ADULT_PRICE;
	var totChildPrice = totChildTix * CHILD_PRICE;
	var totFinalCost = totChildPrice + totAdultPrice;

	document.OrderForm.fullOrder.value =
		"HERE IS YOUR ORDER:" + NL + NL
		+ "YOUR NAME: " + firstName + " " + lastName + NL
		+ "NUMBER OF CHILDREN'S TICKETS: " + totChildTix + NL
		+ "NUMBER OF ADULT TICKETS: " + totAdultTix + NL
		+ "TOTAL COST OF CHILDREN'S TICKETS: " + totChildPrice + NL
		+ "TOTAL COST OF ADULT TICKETS: " + totAdultPrice + NL
		+ "TOTAL FINAL COST: " + totFinalCost + NL + NL
		+ "Thank you for placing your order!";
}
</script>
</head>

<!--Set background color, display heading, name form -->
<body bgcolor ="Blue">
<h2>Welcome to The Mensah Theater!<h2>
<h3>Movie Ticket Order Form<h3>
<h4>Child (0-13) Tickets: $5.00 each<h4>
<h4>Adult (13+) Tickets: $10:00 each<h4>
<form name="OrderForm" action="">

<!--Create radio buttons for number of children tickets-->
<strong>Select how many children's tickets needed to purchase:</strong><br />
	<input type="radio" name="childTicket" value ="1" onlick="setType(this.value)" />1<br />
	<input type="radio" name="childTicket" value ="2" onlick="setType(this.value)" />2<br />
	<input type="radio" name="childTicket" value ="3" onlick="setType(this.value)" />3<br />
	<input type="radio" name="childTicket" value ="4" onlick="setType(this.value)" />4<br />
	<input type="radio" name="childTicket" value ="5" onlick="setType(this.value)" />5<br /><p />

<!--Create radio buttons for number of adult tickets-->
<strong>Select how many adult's tickets needed to purchase:</strong><br />
	<input type="radio" name="adultTicket" value ="1" onlick="setType(this.value)" />1<br />
	<input type="radio" name="adultTicket" value ="2" onlick="setType(this.value)" />2<br />
	<input type="radio" name="adultTicket" value ="3" onlick="setType(this.value)" />3<br />
	<input type="radio" name="adultTicket" value ="4" onlick="setType(this.value)" />4<br />
	<input type="radio" name="adultTicket" value ="5" onlick="setType(this.value)" />5<br /><p />

<!--Create text boxes for user information-->
<strong>Enter your name:</strong><br />
<input type="text" name="firstName" value="First name" size = "40"><br />
<input type="text" name="lastName" value="Last name" size = "40"<br /><p />

<!--Create display button and multiline text box for info-->
<input type="button" name="displayButton" value="Display Order" onclick="displayorder()" /><p />
<textarea name="fullOrder" readonly="true" value="" rows="8" cols="50"></textarea><br />

</form>
</body>
</html>