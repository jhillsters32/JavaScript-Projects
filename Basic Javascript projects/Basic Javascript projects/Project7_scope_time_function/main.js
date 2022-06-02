var x= 10; //Defining variable
function Add_numbers_1() { // Defining and naming function being used 
    document.write(20+x + "<br>"); //Defining expression
}
function Add_numbers_2() { // Defining and naming function being used 
    document.write(x+100); //Defining expression
}
Add_numbers_1();
Add_numbers_2();
{
 function Add_numbers_1() { // Defining and naming function being used 
 var x= 10; //Defining variable
     document.write(20 + x+ "<br>"); //Defining expression
    }
    function Add_numbers_2() { // Defining and naming function being used 
        document.write(x+100); //Defining expression
    }
Add_numbers_1();
Add_numbers_2();
{

}
  function Add_numbers_1() { // Defining and naming function being used 
        var x=10; //Defining variable
        console.log(15+x);
    }
    function Add_numbers_2() { // Defining and naming function being used 
        console.log(x+100); //Defining expression
    }
    Add_numbers_1();
    Add_numbers_2();
    
}


function Time_function() { // Defining and naming function being used
    var Time= new Date().getHours(); //Defining variables
    var Reply;
    if(Time<12==Time >0) { //Defining conditional statements
        Reply= "It is morning time!";
    }
    else if (Time>=12==Time<18) { //Defining conditional statements
        Reply= "It is afternoon.";
    }
    else { //Defining conditional statements
        Reply= "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply; //Computing the expression with document.getElementById
}