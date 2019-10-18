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
		return `<div class="card">
					<img src="${this.img}" alt="Image of ${this.address}" class="w-100">
					<div class="card-body">
						<h5 class="card-title">${this.locationname}</h5>
						<p class="card-text">${this.city}, ${this.zip} <br>
							${this.address}</p>
					</div>
					<div class="card-footer">
						<small class="text-muted">Last updated ...</small>
					</div>
				</div>`		
			}
	}

var karlschurch = new Locations("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/karlschurch.jpg");
var viennazoo = new Locations("Vienna Zoo", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg");

var places = [karlschurch, viennazoo];

for (let index in places) {
	document.getElementById("card-deck").innerHTML += places[index].display();
}

/*document.getElementById("demo").innerHTML = karlschurch.display();*/

