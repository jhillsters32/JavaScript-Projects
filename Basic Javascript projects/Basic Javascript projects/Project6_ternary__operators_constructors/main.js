function Ride_Function() { // Defining and naming function being used 
    var Height, Can_ride; // Defining the variables being used
    Height=document.getElementById("Height").value; // variables in the equation
    Can_ride= (Height <52) ? "You are too short":"You are tall enough";// variables in equation
    document.getElementById("Ride").innerHTML=Can_ride + " to ride."; //Computing the expression with document.getElementById
}

function Vehicle(Make, Model, Year, Color) { // Defining and naming function being used 
    this.Vehicle_Make= Make; // Defining the variables 
    this.Vehicle_Model= Model; // equation for the variables
    this.Vehicle_Year= Year; // equation for the variables
    this.Vehicle_Color= Color; // equation for the variables
}
var Jack =new Vehicle("Dodge", "Viper", 2020, "Red"); // Defining the variables being used 
var Emily=new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); // Defining the variables being used
var Erik=new Vehicle("Ford", "Pinto", 1971, "Mustard"); // Defining the variables being used
function myFunction() { // Defining and naming function being used 
    document.getElementById("New_and_This").innerHTML= //Computing the expression with document.getElementById
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + //-------------------------------
    "manufactured in " + Erik.Vehicle_Year;//--------------------------------
}

function count_Function() { // Defining and naming function being used 
    document.getElementById("Counting") .innerHTML= Count(); //Computing the expression with document.getElementById
    function Count() { // Defining function 
        var Starting_point= 9;  // Defining the variables 
        function Plus_one() {Starting_point+=1;} //Defining and naming function being used 
        Plus_one();//--------------
        return Starting_point;//plugging in variable to compute expression
    }
}