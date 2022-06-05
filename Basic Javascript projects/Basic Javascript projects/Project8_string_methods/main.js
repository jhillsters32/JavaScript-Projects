function full_Sentence(){ // Defining and naming function being used
    var part_1="I have "; //Defining variable
    var part_2="made this " ; //Defining variable
    var part_3="into a complete " ; //Defining variable
    var part_4="sentence."; //Defining variable
    var whole_sentence=part_1.concat(part_2,part_3,part_4); //Connecting all variables together
    document.getElementById("Concatenate").innerHTML=whole_sentence; //Computing the expression with document.getElementById

}

function slice_Method(){ // Defining and naming function being used
    var Sentence="All work and no play makes Johnny a dull boy.";
    var Section= Sentence.slice(27,33); //Defining variable
    document.getElementById("Slice").innerHTML=Section; //Computing the expression with document.getElementById
}

function string_Method(){ // Defining and naming function being used
    var X=182; //Defining variable
    document.getElementById("Numbers_to_string").innerHTML=X.toString(); //Computing the expression with document.getElementById
}

function precision_Method() { // Defining and naming function being used
    var X= 12999.11111111; //Defining variable
    document.getElementById("Precision").innerHTML=X.toPrecision(10); //Computing the expression with document.getElementById
}