let itemId = 0

function salvar(tipo) {
    let input = document.querySelector('#valor')
    let elementoLista = document.querySelector(`#${tipo}`)
    
    elementoLista.innerHTML += `<div class='card' id='item-${itemId}'>
        <p>${input.value}</p>
        <button class='button' onclick='excluir("item-${itemId}")'>Excluir</button>
    </div>`
    input.value = ''
    itemId++
}

function excluir(valor) {
    let elemento = document.querySelector(`#${valor}`)
    elemento.remove()
}