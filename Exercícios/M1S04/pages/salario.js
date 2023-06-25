var urlget;
var salarioFuncionario;
var impostoRenda;
var inss;

function GoToRes ()
{
  salarioFuncionario = document.getElementById("sal-value").value;
  window.location.href = "salario-res.html?sal=" + salarioFuncionario;
}

urlget = new URLSearchParams (window.location.search);
salarioFuncionario = urlget.get("sal");
impostoRenda = 0;
inss = 0;

function calcularImpostoRenda(salarioFuncionario){
  if(salarioFuncionario <= 1903.98) {
  impostoRenda = 0
} else if(salarioFuncionario >= 1903.99 && salarioFuncionario <= 2826.65 ) {
  impostoRenda = (salarioFuncionario * 0.075 ) - 142.80
} else if(salarioFuncionario >= 2826.66 && salarioFuncionario <= 3751.05) {
  impostoRenda = ( salarioFuncionario * 0.15) - 354.80
} else if(salarioFuncionario >= 3751.06 && salarioFuncionario <= 4664.68) {
  impostoRenda =( salarioFuncionario * 0.225) - 636.13
} else {
  impostoRenda = (salarioFuncionario * 0.275) - 869.36
}
  return impostoRenda
}

function calcularInss(salarioFuncionario){
  if (salarioFuncionario <= 1302) {
        inss = salarioFuncionario * 0.075 // 7.5%
    } else if (salarioFuncionario >= 1302.01 && salarioFuncionario <= 2571.29) {
        inss = salarioFuncionario * 0.09 // 9%
    } else if (salarioFuncionario >= 2571.30 && salarioFuncionario <= 3856.94) {
        inss = salarioFuncionario * 0.12 // 12%
    } else {
        inss = salarioFuncionario * 0.14 //14%
    }
  
  return inss
}

function calcularSalarioLiquido(salarioFuncionario, impostoRenda, inss){
   var resultadoSalarioLiquido = salarioFuncionario - impostoRenda - inss
   return resultadoSalarioLiquido
}

inss = calcularInss(salarioFuncionario)
impostoRenda = calcularImpostoRenda(salarioFuncionario) 
var salarioLiquido = calcularSalarioLiquido(salarioFuncionario,impostoRenda, inss)

var FimpostoRenda = impostoRenda.toFixed(2);
var Finss = inss.toFixed(2);
var FsalarioLiquido = salarioLiquido.toFixed(2);

document.getElementById('ir').textContent = "R$ " + FimpostoRenda;
document.getElementById('inss').textContent = "R$ " + Finss;
document.getElementById('liquid').textContent = "R$ " + FsalarioLiquido;

function backPageinput()
{
  window.location.href = "salario.html";
}