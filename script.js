// datatypes
// numeric value '45', string ' '/" ", boolean


// var, const, let

// var a=32;
const a=32;

var b=0;

// a=b;

//console.log(a); //this cause error because we are tryong to change the value of const variable

// alert("this is output using alert");

document.getElementsByClassName("docWrite");
// const btn = document.getElementById("click");
const output = document.getElementById("output");

function clickHandle(){
    
    // document.write(" you click me")
    b++;//b=b+1
    console.log("you have clicked me " + b  + " times");

    output.innerHTML = "you clicked me " +b+ " times.";
    alert("you clicked me " +b+ " times.");
}


