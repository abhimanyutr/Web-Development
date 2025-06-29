var a = 2;
var b = 6;
function clss(first,second)
{
    var mul = first * second;
    console.log("The Multipication result is "+mul);
    return fResult(mul);
}
function fResult(r)
{
    var f = r / 5;
    console.log("Result with Float= "+ f);
    console.log("Result withOUT Float= "+ Math.floor(f) );
}
clss(a,b);