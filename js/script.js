// Create parent class locations (Location not possible due to duplicate identifier error)
var Locations = /** @class */ (function () {
    function Locations(locationname, city, zip, address, img) {
        this.locationname = locationname;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.img = img;
    }
    Locations.prototype.display = function () {
        return "<div class=\"card\">\n\t\t\t\t\t<img src=\"" + this.img + "\" alt=\"Image of " + this.address + "\" class=\"w-100\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h5 class=\"card-title\">" + this.locationname + "</h5>\n\t\t\t\t\t\t<p class=\"card-text\">" + this.city + ", " + this.zip + " <br>\n\t\t\t\t\t\t\t" + this.address + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t\t<small class=\"text-muted\">Last updated ...</small>\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    return Locations;
}());
var karlschurch = new Locations("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/karlschurch.jpg");
var viennazoo = new Locations("Vienna Zoo", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg");
var places = [karlschurch, viennazoo];
for (var index in places) {
    document.getElementById("card-deck").innerHTML += places[index].display();
}
/*document.getElementById("demo").innerHTML = karlschurch.display();*/
