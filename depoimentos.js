function showDepoimento() {
    document.getElementById("divFormDepoimento").style.display = "block"
    document.getElementById("showDepoimento").style.display = "none"
}
function cadastrarDepoimento() {
    var mae = document.getElementById("nomeMae").value
    var crianca = document.getElementById("maedo").value
    // var idade = document.getElementById("idadeCrianca").value
    var mensagem = document.getElementById("depoimento").value

    // alert(`${mae} - ${crianca} - ${idade} - ${depoimento}`)
    
    var card = document.createElement("div")
    card.classList.add("testimonial-card")

    var depoimento = document.createElement("p")
    depoimento.classList.add("testimonial-text")
    depoimento.textContent = mensagem;
    
    var autor = document.createElement("div")
    autor.classList.add("author-info")
    
    var nomeDiv = document.createElement("h4")
    nomeDiv.textContent = mae
    autor.appendChild(nomeDiv)

    var maedo = document.createElement("h4")
    maedo.textContent = crianca
    autor.appendChild(maedo)

    card.appendChild(depoimento)
    card.appendChild(autor)

    document.getElementById("testimonials").appendChild(card)
}
