function test()
{
    var a = 27;
    var b = 81;
     
    var temp = a;
    a = b;
    b = temp;
     
    console.log("Swapped Value of a is " +a);
    console.log("Swapped value of b is " +b);

}


test();