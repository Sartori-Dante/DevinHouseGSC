//Calculadora de Tabuáda

var parcel;
var calc;
const multiTable = [0,1,2,3,4,5,6,7,8,9,10];

function calcOutput ()
{
    parcel = document.getElementById("calc-tab").value;
    calc = [parcel + " X 0 = " + parcel * 0, parcel + " X 1 = " + parcel * 1, parcel + " X 2 = " +  parcel * 2, parcel + " X 3 = " + parcel * 3, parcel + " X 4 = " + parcel * 4, parcel + " X 5 = " + parcel *5, parcel + " X 6 = " + parcel * 6, parcel + " X 7 = " + parcel * 7, parcel + " X 8 = " + parcel * 8, parcel + " X 9 = " + parcel * 9, parcel + " X 10 = " + parcel * 10];

    document.getElementById('res0').textContent = calc[0];
    document.getElementById('res1').textContent = calc[1];
    document.getElementById('res2').textContent = calc[2];
    document.getElementById('res3').textContent = calc[3];
    document.getElementById('res4').textContent = calc[4];
    document.getElementById('res5').textContent = calc[5];
    document.getElementById('res6').textContent = calc[6];
    document.getElementById('res7').textContent = calc[7];
    document.getElementById('res8').textContent = calc[8];
    document.getElementById('res9').textContent = calc[9];
    document.getElementById('res10').textContent = calc[10];
}