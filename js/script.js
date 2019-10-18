// Create parent class locations (Location not possible due to duplicate identifier error)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(locationname, city, zip, address, img) {
        this.locationname = locationname;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.img = img;
    }
    Locations.prototype.display = function () {
        return "<div class=\"col-sm-12 col-md-6 col-lg-3 p-2 card-outer\">\n\t\t\t\t\t<div class=\"card w-100\">\n\t\t\t\t\t\t<div class=\"card-header bg-primary\"><h4 class=\"text-white\">Place</h4></div>\n\t\t\t\t\t\t<img src=\"" + this.img + "\" alt=\"Image of " + this.address + "\" class=\" img-fluid w-100\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">" + this.locationname + "</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">" + this.city + ", " + this.zip + " <br>\n\t\t\t\t\t\t\t" + this.address + "</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t\t\t<small class=\"text-muted createdon\"></small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    return Locations;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(locationname, city, zip, address, img, phone, type, web) {
        var _this = _super.call(this, locationname, city, zip, address, img) || this;
        _this.phone = phone;
        _this.type = type;
        _this.web = web;
        return _this;
    }
    Restaurant.prototype.display = function () {
        return "<div class=\"col-sm-12 col-md-6 col-lg-3 p-2\">\n\t\t\t\t\t<div class=\"card w-100\">\n\t\t\t\t\t\t<div class=\"card-header bg-success\"><h4 class=\"text-white\">Restaurant</h4></div>\n\t\t\t\t\t\t<img src=\"" + this.img + "\" alt=\"Image of " + this.address + "\" class=\"img-fluid w-100\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">" + this.locationname + "</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">" + this.type + " cuisine <br>\n\t\t\t\t\t\t\t\t" + this.city + ", " + this.zip + " <br>\n\t\t\t\t\t\t\t\t" + this.address + " <br>\n\t\t\t\t\t\t\t\t" + this.phone + " <br>\n\t\t\t\t\t\t\t\t<a href=\"" + this.web + "\" target=\"_blank\">" + this.web + "</a></p>\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t\t\t<small class=\"text-muted createdon\"></small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    return Restaurant;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(locationname, city, zip, address, img, eventdate, eventtime, price, web) {
        var _this = _super.call(this, locationname, city, zip, address, img) || this;
        _this.eventdate = eventdate;
        _this.eventtime = eventtime;
        _this.price = price;
        _this.web = web;
        return _this;
    }
    Events.prototype.display = function () {
        return "<div class=\"col-sm-12 col-md-6 col-lg-3 p-2\">\n\t\t\t\t\t<div class=\"card w-100\">\n\t\t\t\t\t\t<div class=\"card-header bg-danger\"><h4 class=\"text-white\">Concert</h4></div>\n\t\t\t\t\t\t<img src=\"" + this.img + "\" alt=\"Image of " + this.address + "\" class=\"img-fluid w-100\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">" + this.locationname + "</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">" + this.eventdate + " | " + this.eventtime + " <br>\n\t\t\t\t\t\t\t\t" + this.city + ", " + this.zip + " <br>\n\t\t\t\t\t\t\t\t" + this.address + " <br>\n\t\t\t\t\t\t\t\t<span class=\"font-weight-bold\">Price: " + this.price + " EUR</span><br>\n\t\t\t\t\t\t\t\t<a href=\"" + this.web + "\" target=\"_blank\">" + this.web + "</a></p>\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t\t\t<small class=\"text-muted createdon\"></small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    return Events;
}(Locations));
var karlschurch = new Locations("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/karlschurch.jpg");
var viennazoo = new Locations("Vienna Zoo", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg");
var lemonleaf = new Restaurant("Lemon Leaf", "Vienna", 1050, "Kettenbrückengasse 19", "img/lemonleaf.png", "+43(1)5812308", "Thai", "www.lemonleaf.at");
var sixta = new Restaurant("Sixta", "Vienna", 1050, "Schönbrunner Straße 21", "img/sixta.png", "+43(1)5852856 | +43(1)5852856", "Viennese", "http://www.sixta-restaurant.at/");
var kris = new Events("Kris Kristofferson", "Vienna", 1150, "Wiener Stadthalle, Halle F, Roland-Rainer-Platz 1", "img/kristofferson.jpg", "Fr., 15.11.2019", "20:00", 58.50, "http://kriskristofferson.com/");
var kravitz = new Events("Lenny Kravitz", "Vienna", 1150, "Wiener Stadthalle, Halle D, Roland-Rainer-Platz 1", "img/kravitz.jpg", "Sat., 09.12.2019", "19:30", 47.80, "www.lennykravitz.com/");
var places = [karlschurch, viennazoo, lemonleaf, sixta, kris, kravitz];
/*var date = new Date(2019, 10, 18, 14, 50);
var created = date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
/*Created: 24.10.2019 12:45*/
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
// randomDate(new Date (2019, 09, 10), new Date(2019, 09, 20))
var dateCreated = [];
/*for (let index in places) {
    dateCreated[index] = randomDate(new Date (2019, 09, 10), new Date(2019, 09, 20));
}
console.log(dateCreated);*/
dateCreated = ["Fri Oct 11 2019 16:26:26 GMT+0200 (Mitteleuropäische Sommerzeit)", "Fri Oct 18 2019 16:42:34 GMT+0200 (Mitteleuropäische Sommerzeit)",
    "Fri Oct 11 2019 11:02:47 GMT+0200 (Mitteleuropäische Sommerzeit)", "Thu Oct 10 2019 19:48:39 GMT+0200 (Mitteleuropäische Sommerzeit)",
    "Sat Oct 12 2019 13:07:04 GMT+0200 (Mitteleuropäische Sommerzeit)", "Fri Oct 11 2019 17:28:51 GMT+0200 (Mitteleuropäische Sommerzeit)"];
var datesArray = dateCreated.map(function (dateString) { return new Date(dateString); });
for (var index in places) {
    places[index].date = datesArray[index];
}
if (document.getElementById("card-deck")) {
    for (var index in places) {
        document.getElementById("card-deck").innerHTML += places[index].display();
        document.getElementsByClassName("createdon")[index].innerHTML = "Created on: " + places[index].date.getDate() + "." + places[index].date.getMonth() + "." + places[index].date.getFullYear() + " " + places[index].date.getHours() + ":" + (places[index].date.getMinutes() < 10 ? '0' : '') + places[index].date.getMinutes();
    }
}
else if (document.getElementById("card-deck-asc")) {
    places.sort(function compare(a, b) {
        if (a.date > b.date)
            return 1;
        if (a.date < b.date)
            return -1;
    });
    for (var index in places) {
        document.getElementById("card-deck-asc").innerHTML += places[index].display();
        document.getElementsByClassName("createdon")[index].innerHTML = "Created on: " + places[index].date.getDate() + "." + places[index].date.getMonth() + "." + places[index].date.getFullYear() + " " + places[index].date.getHours() + ":" + places[index].date.getMinutes();
    }
}
else if (document.getElementById("card-deck-desc")) {
    places.sort(function compare(a, b) {
        if (a.date < b.date)
            return 1;
        if (a.date > b.date)
            return -1;
    });
    for (var index in places) {
        document.getElementById("card-deck-desc").innerHTML += places[index].display();
        document.getElementsByClassName("createdon")[index].innerHTML = "Created on: " + places[index].date.getDate() + "." + places[index].date.getMonth() + "." + places[index].date.getFullYear() + " " + places[index].date.getHours() + ":" + places[index].date.getMinutes();
    }
}
/*places.sort(function compare(a,b) {
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
})*/
/*for (let index in places) {
    document.getElementById("card-deck-asc").innerHTML += places[index].display();
}
*/
