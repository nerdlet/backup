/*

Modules are an integral piece of any robust application's architecture and typically help in keeping the units of code for a 
project both cleanly separated and organized.

In JavaScript, there are several options for implementing modules. These include:

    The Module pattern
    Object literal notation
    AMD modules
    CommonJS modules
    ECMAScript Harmony modules

We will be exploring the latter three of these options later on in the book in the section Modern Modular JavaScript Design Patterns.

The Module pattern is based in part on object literals and so it makes sense to refresh our knowledge of them first.

OBJECT LITERALS

In object literal notation, an object is described as a set of comma-separated name/value pairs enclosed in curly braces ({}). 
Names inside the object may be either strings or identifiers that are followed by a colon. There should be no comma used after the 
final name/value pair in the object as this may result in errors.


*/
var  myObjectLiteral = {
	variableKey: variableValue,

	functionKey: function() {
		//..
	}
};

/*

Object literals don't require instantiation using the new operator but shouldn't be used at the start of a 
statement as the opening { may be interpreted as the beginning of a block. Outside of an object, new members may be added to it using assignment as follows myModule.property = "someValue";
 */


var myModule = {
 
  myProperty: "someValue",
 
  // object literals can contain properties and methods.
  // e.g we can define a further object for module configuration:
  myConfig: {
    useCaching: true,
    language: "en"
  },
 
  // a very basic method
  saySomething: function () {
    console.log( "Where in the world is Paul Irish today?" );
  },
 
  // output a value based on the current configuration
  reportMyConfig: function () {
    console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
  },
 
  // override the current configuration
  updateMyConfig: function( newConfig ) {
 
    if ( typeof newConfig === "object" ) {
      this.myConfig = newConfig;
      console.log( this.myConfig.language );
    }
  }
};
 
// Outputs: Where in the world is Paul Irish today?
myModule.saySomething();
 
// Outputs: Caching is: enabled
myModule.reportMyConfig();
 
// Outputs: fr
myModule.updateMyConfig({
  language: "fr",
  useCaching: false
});
 
// Outputs: Caching is: disabled
myModule.reportMyConfig();

//example of a simple object literal
var myObjectLiteral = {
    myBehavior1 : function() {
        /* do something */
    },

    myBehavior2 : function() {
        /* do something else */
    }
};

//object literals more here:http://rmurphey.com/blog/2009/10/15/using-objects-to-organize-your-code
var testModule = (function () {
 
  var counter = 0;
 
  return {
 
    incrementCounter: function () {
      return counter++;
    },
 
    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };
 
})();
 
// Usage:
 
// Increment our counter
testModule.incrementCounter();
 
// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();


//namespacing tutorial:https://javascriptweblog.wordpress.com/2010/12/07/namespacing-in-javascript/
//https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript
//https://medium.freecodecamp.org/cracking-the-front-end-interview-9a34cd46237