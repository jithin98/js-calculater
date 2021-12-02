function buttonclick(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function clearDisplay()
{
    document.getElementById("screen").value="";
}

function equalclick()
{
var text=document.getElementById("screen").value
var result=eval(text)
// eval () is already desined  i n js library
document.getElementById('screen').value=result

}