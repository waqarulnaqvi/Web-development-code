function greet(waah="kamchor",name="steven grant")//default value //function parameter.
{
    //return name;//if we uncomment this return then the below code will be unreachable.
    console.log(waah + " kaamchor "+name+ " is a good boy!!");
   // return name;
    
}
console.log("hello")
let name="Waqarul";
console.log(name +" used to be a good boy!!");
console.log(greet("Zaman"))
// Functions is said to be a building blocks in a program.

//if else one liner is a ternary operator.


// Quick quiz:
//WAP to find the minimum and maximum number between 2.
function min(a,b)
{
if(a>b)
{
    return b;
}
else{
    return a;
}
}
function max(a,b)
{
    if(a>b)
    {
        return a;
    }
    else{
        return b;
    }
}

console.log(min(10,3))
console.log(max(10,3))
