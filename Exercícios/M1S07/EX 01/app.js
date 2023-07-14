class Colaborador{
    nomeFull
    CPF
    salario 

    constructor(n, c, s)
    {
        this.nomeFull = n;
        this.CPF = c;
        this.salario = s.toFixed(2);
    }

    promocaoC()
    {
        console.log("salário original = £$ " + condessa.salario);
        this.salario = (this.salario * 1.15).toFixed(2);
        console.log("novo salário = £$ " + condessa.salario); 
    }

    promocaoA()
    {
        console.log("salário original = £$ " + turing.salario);
        this.salario = (this.salario * 1.15).toFixed(2);
        console.log("novo salário = £$ " + turing.salario); 
    }

    promocaoG()
    {
        console.log("salário original = $ " + gaben.salario);
        this.salario = (this.salario * 1.15).toFixed(2);
        console.log("novo salário = $ " + gaben.salario); 
    }
}

console.log(Colaborador);

const condessa = new Colaborador("Ada Lovelace", "528.442.040-31", 5000)
const turing = new Colaborador("Alan Turing", "564.968.687.-68", 4300)
const gaben = new Colaborador("Gabe Logan Newell", "354.459.841.-93", 19283789)

console.log(condessa);
console.log(turing);
console.log(gaben);


document.getElementById('butCond').addEventListener('click', () => {
    condessa.promocaoC();
})

document.getElementById('butTrng').addEventListener('click', () => {
    turing.promocaoA();
})

document.getElementById('butGbNw').addEventListener('click', () => {
    gaben.promocaoG();
})
