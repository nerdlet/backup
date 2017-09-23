/*basic constructors  
function Car(model, year, miles) {
	this.model =model;
	this.year = year;
	this.miles = miles;

	this.toString = function() {
		return this.model + " " + "has done" + " " + this.miles + " " + "miles";
	};
}
//usage
//we can create new instances of a car
var civic = new Car("Honda civic", 2009, 2000);
var mondeo = new Car("Ford Mondeo",2010, 5000);

//and then open the browser console to view the 
//output of the toString() method being called
//by these objects

console.log(civic.toString());
console.log(mondeo.toString());*/


//next code here on basic constructors
//prototypes
//
function Car(model, year, miles) {
	this.model =model;
	this.year = year;
	this.miles = miles;
}
//here we are using object.prototype.newmethods rather than
//object.prototype so as to avoid redefining the prototype object
//
Car.prototype.toString = function() {
	return this.model + " " + "has done" + " " + this.miles + " " + "miles";
};
//usage

var civic =new Car("Honda Civic",2009,20000);
var mondeo = new Car("Ford Mondeo",2010,2000000);

console.log(civic.toString());
console.log(mondeo.toString());









