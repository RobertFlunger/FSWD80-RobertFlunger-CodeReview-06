// Create parent class locations (Location not possible due to duplicate identifier error)

class Locations {
	locationname : string;
	city : string;
	zip : number;
	address : string;
	img : string;

	constructor(locationname: string, city : string, zip : number, address : string, img : string) {
		this.locationname = locationname;
		this.city = city;
		this.zip = zip;
		this.address = address;
		this.img = img;
	}

	display() {
		return `<div class="col-sm-12 col-md-6 col-lg-3 p-2 card-outer">
					<div class="card w-100">
						<div class="card-header bg-primary"><h4 class="text-white">Place</h4></div>
						<img src="${this.img}" alt="Image of ${this.address}" class=" img-fluid w-100">
						<div class="card-body">
							<h5 class="card-title">${this.locationname}</h5>
							<p class="card-text">${this.city}, ${this.zip} <br>
							${this.address}</p>
						</div>
						<div class="card-footer">
							<small class="text-muted createdon"></small>
						</div>
					</div>
				</div>`		
			}
	}

/*Create child classes Restaurant and Concert, which both extend Locations*/

class Restaurant extends Locations {
	phone : string;
	type : string;
	web : string;

	constructor(locationname: string, city : string, zip : number, address : string, img : string, 
		phone: string, type: string, web:string) {
		super(locationname, city, zip, address, img);
		this.phone = phone;
		this.type = type;
		this.web = web;
	}

	display() {
		return `<div class="col-sm-12 col-md-6 col-lg-3 p-2">
					<div class="card w-100">
						<div class="card-header bg-success"><h4 class="text-white">Restaurant</h4></div>
						<img src="${this.img}" alt="Image of ${this.address}" class="img-fluid w-100">
						<div class="card-body">
							<h5 class="card-title">${this.locationname}</h5>
							<p class="card-text">${this.type} cuisine <br>
								${this.city}, ${this.zip} <br>
								${this.address} <br>
								${this.phone} <br>
								<a href="${this.web}" target="_blank">${this.web}</a></p>	
						</div>
						<div class="card-footer">
							<small class="text-muted createdon"></small>
						</div>
					</div>
				</div>`		
			}
	}

class Events extends Locations {
	eventdate : string;
	eventtime : string;
	price : number;
	web : string

	constructor(locationname: string, city : string, zip : number, address : string, img : string, 
		eventdate: string, eventtime: string, price: number, web: string ) {
		super(locationname, city, zip, address, img);
		this.eventdate = eventdate;
		this.eventtime = eventtime;
		this.price = price;
		this.web = web;
	}

	display() {
		return `<div class="col-sm-12 col-md-6 col-lg-3 p-2">
					<div class="card w-100">
						<div class="card-header bg-danger"><h4 class="text-white">Concert</h4></div>
						<img src="${this.img}" alt="Image of ${this.address}" class="img-fluid w-100">
						<div class="card-body">
							<h5 class="card-title">${this.locationname}</h5>
							<p class="card-text">${this.eventdate} | ${this.eventtime} <br>
								${this.city}, ${this.zip} <br>
								${this.address} <br>
								<span class="font-weight-bold">Price: ${this.price} EUR</span><br>
								<a href="${this.web}" target="_blank">${this.web}</a></p>	
						</div>
						<div class="card-footer">
							<small class="text-muted createdon"></small>
						</div>
					</div>
				</div>`		
			}

	}	

/*create objects and save them into an array called "places"*/
var karlschurch = new Locations("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/karlschurch.jpg");
var viennazoo = new Locations("Vienna Zoo", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg");

var lemonleaf = new Restaurant("Lemon Leaf", "Vienna", 1050, "Kettenbrückengasse 19", "img/lemonleaf.png", "+43(1)5812308", "Thai", "www.lemonleaf.at"); 
var sixta = new Restaurant("Sixta", "Vienna", 1050, "Schönbrunner Straße 21", "img/sixta.png", "+43(1)5852856 | +43(1)5852856", "Viennese", "http://www.sixta-restaurant.at/");

var kris = new Events("Kris Kristofferson", "Vienna", 1150, "Wiener Stadthalle, Halle F, Roland-Rainer-Platz 1", "img/kristofferson.jpg", "Fr., 15.11.2019", "20:00", 58.50, "http://kriskristofferson.com/");
var kravitz = new Events("Lenny Kravitz", "Vienna", 1150, "Wiener Stadthalle, Halle D, Roland-Rainer-Platz 1", "img/kravitz.jpg", "Sat., 09.12.2019", "19:30", 47.80, "www.lennykravitz.com/");

var places = [karlschurch, viennazoo, lemonleaf, sixta, kris, kravitz];

function randomDate(start, end) {
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

/*Dates have been randomly created through the commented out function. I copied their values 
into the array to have the same dates on all pages - with the for-loop in the comment I could randomly
create them, but then they wouldn't stay the same in all 3 web pages
randomDate(new Date (2019, 09, 10), new Date(2019, 09, 20))*/

/*for (let index in places) {
	dateCreated[index] = randomDate(new Date (2019, 09, 10), new Date(2019, 09, 20));
}*/

var dateCreated = [];

dateCreated = ["Fri Oct 11 2019 16:26:26 GMT+0200 (Mitteleuropäische Sommerzeit)", "Fri Oct 18 2019 16:42:34 GMT+0200 (Mitteleuropäische Sommerzeit)",
"Fri Oct 11 2019 11:02:47 GMT+0200 (Mitteleuropäische Sommerzeit)", "Thu Oct 10 2019 19:48:39 GMT+0200 (Mitteleuropäische Sommerzeit)", 
"Sat Oct 12 2019 13:07:04 GMT+0200 (Mitteleuropäische Sommerzeit)", "Fri Oct 11 2019 17:28:51 GMT+0200 (Mitteleuropäische Sommerzeit)"];

/*.map for the date array so they can be used as data object and be added to the cards in the following loop*/

var datesArray = dateCreated.map( dateString => new Date(dateString));

/*each object gets a new attribute called "date" with a value from the array*/

for (let index in places) {
	places[index].date = datesArray[index];
}

/*if loop to check for the page and to decide which version to add (default order, ascending, descending sort)
for the ascending/descending sorts, the corresponding sort function is initiated first, then the elements are added to the page*/

if (document.getElementById("card-deck")) {
	for (let index in places) {
		document.getElementById("card-deck").innerHTML += places[index].display();
		document.getElementsByClassName("createdon")[index].innerHTML = "Created on: " + places[index].date.getDate() + "." + places[index].date.getMonth() + "." + places[index].date.getFullYear() + " " + places[index].date.getHours() + ":" + (places[index].date.getMinutes()<10?'0':'') + places[index].date.getMinutes();
	}
} else if (document.getElementById("card-deck-asc")) {
	places.sort(function compare(a,b) {
		if (a.date > b.date) return 1;
		if (a.date < b.date) return -1;
		});

	for (let index in places) {
		document.getElementById("card-deck-asc").innerHTML += places[index].display();
		document.getElementsByClassName("createdon")[index].innerHTML = "Created on: " + places[index].date.getDate() + "." + places[index].date.getMonth() + "." + places[index].date.getFullYear() + " " + places[index].date.getHours() + ":" + places[index].date.getMinutes();
	}
} else if (document.getElementById("card-deck-desc")) {
	places.sort(function compare(a,b) {
		if (a.date < b.date) return 1;
		if (a.date > b.date) return -1;
		});
	for (let index in places) {
		document.getElementById("card-deck-desc").innerHTML += places[index].display();
		document.getElementsByClassName("createdon")[index].innerHTML = "Created on: " + places[index].date.getDate() + "." + places[index].date.getMonth() + "." + places[index].date.getFullYear() + " " + places[index].date.getHours() + ":" + places[index].date.getMinutes();
	}		
}
