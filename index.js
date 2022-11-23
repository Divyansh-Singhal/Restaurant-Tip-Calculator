function calculateTip() {
  const bill = parseInt(document.getElementById("bill").value);
  const tip = parseInt(document.getElementById("tip").value);
  const tipAmount = bill * (tip / 100);
  const total = bill + tipAmount;
  document.getElementById("tipAmount").innerHTML ="Tip Amount is : " +  tipAmount;
  document.getElementById("total").innerHTML ="Total Amount is : " + total;
  document.getElementById("detail").style.display = "block";
  var tip5 = bill * 0.05;
  var total5 = bill + tip5;
  document.getElementById("tip5").innerHTML =tip5;
  document.getElementById("total5").innerHTML =total5;
    var tip10 = bill * 0.1;
    var total10 = bill + tip10;
    document.getElementById("tip10").innerHTML = tip10;
    document.getElementById("total10").innerHTML = total10;
    var tip12 = bill * 0.12;
    var total12 = bill + tip12;
    document.getElementById("tip12").innerHTML = tip12;
    document.getElementById("total12").innerHTML = total12;
    var tip14 = bill * 0.14;
    var total14 = bill + tip14;
    document.getElementById("tip14").innerHTML = tip14;
    document.getElementById("total14").innerHTML = total14;
    var tip15 = bill * 0.15;
    var total15 = bill + tip15;
    document.getElementById("tip15").innerHTML = tip15;
    document.getElementById("total15").innerHTML = total15;
    var tip20 = bill * 0.2;
    var total20 = bill + tip20;
    document.getElementById("tip20").innerHTML = tip20;
    document.getElementById("total20").innerHTML = total20;
    var tip25 = bill * 0.25;
    var total25 = bill + tip25;
    document.getElementById("tip25").innerHTML = tip25;
    document.getElementById("total25").innerHTML = total25;
    var tip50 = bill * 0.5;
    var total50 = bill + tip50;
    document.getElementById("tip50").innerHTML = tip50;
    document.getElementById("total50").innerHTML = total50;
}
function reset(){
    document.getElementById("tipAmount").innerHTML ="";
    document.getElementById("total").innerHTML ="";
    document.getElementById("bill").value = "";
    document.getElementById("tip").value = "";
    document.getElementById("detail").style.display = "none";
}