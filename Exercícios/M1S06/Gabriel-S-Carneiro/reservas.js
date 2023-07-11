import { booking } from "./resgistered-books.js";

let dadosReserva = [...booking]

// id:
// numQuarto:
// Cliente:
// CPF:
// per_entry:
// per_exit:


//controlador de linhas da tabela

function addLine()
{
    dadosReserva.map((reserva) => {
        const tr = document.createElement('tr')

        const tdnumQuarto = document.createElement('td')
        tdnumQuarto.innerHTML = reserva.numQuarto
        tr.appendChild(tdnumQuarto)

        const tdCliente = document.createElement('td')
        tdCliente.innerHTML = reserva.Cliente
        tr.appendChild(tdCliente)

        const tdCPF = document.createElement('td')
        tdCPF.innerHTML = reserva.CPF
        tr.appendChild(tdCPF)

        const tdData = document.createElement('td')
        tdData.innerHTML = `${reserva.per_entry} - ${reserva.per_exit}`
        tr.appendChild(tdData)

        const tdAcoes = document.createElement('td')

        const ButDel = document.createElement('button')
        ButDel.innerText = 'Deletar Reserva'

        ButDel.addEventListener('click', () => delLine(reserva.id))

        tdAcoes.appendChild(ButDel)

        tr.appendChild(tdAcoes)

        document.getElementById('table-body').appendChild(tr)
    })
}

function delLine (id)
{
    const filtered = dadosReserva.filter(item => item.id !== id)
    document.getElementById('table-body').innerHTML = ''
    dadosReserva = filtered

    filtered.map((reserva) => {
        const tr = document.createElement('tr')

        const tdnumQuarto = document.createElement('td')
        tdnumQuarto.innerHTML = reserva.numQuarto
        tr.appendChild(tdnumQuarto)

        const tdCliente = document.createElement('td')
        tdCliente.innerHTML = reserva.Cliente
        tr.appendChild(tdCliente)

        const tdCPF = document.createElement('td')
        tdCPF.innerHTML = reserva.CPF
        tr.appendChild(tdCPF)

        const tdData = document.createElement('td')
        tdData.innerHTML = reserva.per_entry + ' - ' + reserva.per_exit
        tr.appendChild(tdData)

        const tdAcoes = document.createElement('td')

        const ButDel = document.createElement('button')
        ButDel.innerText = 'Deletar Reserva'

        ButDel.addEventListener('click', () => delLine(reserva.id))

        tdAcoes.appendChild(ButDel)

        tr.appendChild(tdAcoes)

        document.getElementById('table-body').appendChild(tr)
    })
}

//logout
document.getElementById('logout').addEventListener('click', () => {
    window.location.href = "login.html"
})

//trigger para gerar as linhas quando a page carrega

window.onload = addLine