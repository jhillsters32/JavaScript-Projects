function my_Dictionary() { //Defining Function
	var Animal= { //Defining the Key pairs
	Species: "Dog",//Defining the Key pairs
	Color:"Black",//Defining the Key pairs
	Breed:"Labrador",//Defining the Key pairs
	Age:5,//Defining the Key pairs
	Sound:"Bark!"//Defining the Key pairs
	};
	delete Animal.Sound;//Deleting value
	document.getElementById("Dictionary").innerHTML= Animal.Sound;//Computing the expression with document.getElementById
}