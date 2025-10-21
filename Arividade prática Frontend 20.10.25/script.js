const meuparagrafo = document.getElementById("p1")
const meubotao = document.querySelector(".botao")
const meuinput = document.getElementById("input1")

meubotao.addEventListener("click",() => {
    if(meuinput.value === "pão com ovo"){
        meuparagrafo.innerText = "é café da manhã!"
    }
    else if(meuinput.value === "feijão com arroz"){
        meuparagrafo.innerText = "é almoço!"
    }
    else{
        meuparagrafo.innerText = "é jantar!"
    }
})

