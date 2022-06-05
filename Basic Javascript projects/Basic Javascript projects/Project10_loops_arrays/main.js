function count_To_Ten() { // Defining and naming function being used
    var Digit =""; //Defining variable
    var X =1; //Defining variable
    while (X<11) {
        Digit +="<br>" + X;
        X++
    }
    document.getElementById("Counting_to_Ten").innerHTML=Digit; //Computing the expression with document.getElementById
}

var animals=["Lion","Cheetah","Jaguar","Zebra","Hippo"]; //Defining variables
var Content=""; //Defining variable
var Y; //Defining variable
function for_Loop() {
    for (Y=0; Y< animals.length; Y++ ) {
        Content += animals[Y] + "<br>";
    }
    document.getElementById("List_of_animals").innerHTML=Content; //Computing the expression with document.getElementById
}

function cat_pics() { // Defining and naming function being used
    var Cat_Picture =[]; //Defining variables
    Cat_Picture[0]="sleeping";///////////////
    Cat_Picture[1]="playing";///////////////
    Cat_Picture[2]="eating";/////////////////
    Cat_Picture[3]="purring";//////////////
    document.getElementById("Cat").innerHTML= "In this picture, the cat is " +
    Cat_Picture[2] + "."; //Computing the expression with document.getElementById
}
var X= 82; //Defining variable
document.write(X); //Computing the expression with document.getElementById
{
    let X=33; //Defining variable
    document.write("<br>" + X); //Computing the expression with document.getElementById
}
document.write("<br>" + X); //Computing the expression with document.getElementById