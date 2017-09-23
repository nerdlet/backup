//constructor functions

function myObject() {
	this.iAm = 'on object';
	this.whatAmI = function(language) {
		alert('I am ' + this.iAm + ' of the ' + language + ' language');
	};
};
 var myNewObject = new myObject('an object');
 myNewObject.whatAmI('Javascript');
//object literal

//var myObject = {
	//iAm:'an object',
	//whatAmI: function() {
		//alert('i am ' + this.iAm)
	//};
//};