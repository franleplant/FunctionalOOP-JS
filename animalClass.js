//Constructor-like animal class function

var animal = function (spec) {
	
	//define Inheritance
	var that = {};
	
	//private atributes and methods
	
	spec.name = spec.name || 'noName';
	
	spec.age = spec.age || 0;
	
	var sum_age = function (n) {
		spec.age += n;
	};
	
	//public atributes and methods
	
	that.birthday = function ( ) {
		sum_age(1); 
		document.writeln(spec.age);
	};
	
	that.get_name = function ( ) {
		document.writeln(spec.name);
	};
	
	return that;
}

//Intance of and animal
var a_Animal = animal({name: 'Lester', age: 10});

a_Animal.birthday( );
a_Animal.birthday( );
a_Animal.birthday( );
a_Animal.birthday( );
a_Animal.birthday( );

a_Animal.get_name( );
