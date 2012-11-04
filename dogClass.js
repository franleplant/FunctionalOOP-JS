//Constructor
var dog = function (spec) {
	
	//Define Inheritance from animal
	
	var that = animal(spec);
	
	//private atributes and methods
		
	var leg = 'leg';
	
	//public atributes and methods

	that.bark = function ( ) {
		document.writeln("bark bark");
	};
	
	that.give_leg = function ( ) {
		document.writeln(spec.name + " just gave you his " + leg);
	};
	
	return that;
}

var a_dog = dog({name: 'Simon'});
var another_dog = dog({name: 'Flor', age: 20});

a_dog.birthday( );
a_dog.birthday( );
a_dog.birthday( );

a_dog.get_name( );
a_dog.bark( );
a_dog.give_leg( );

another_dog.get_name( );
another_dog.birthday( );
another_dog.birthday( );


//The object can be inspected to prube that all private atributes
//and methods are in fact private
console.log(a_dog);