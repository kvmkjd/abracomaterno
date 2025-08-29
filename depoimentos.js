function cadastrarDepoimento() {
    var nome = document.getElementById("nameDepoimento").value
    // alert(nome)
    
    var card = document.createElement("div")
    card.classList.add("Deixe seu depoimento-card")
    
    var autor = document.createElement("div")
    autor.classList.add("author-info")
    
    var nomeDiv = document.createElement("h4")
    nomeDiv.value = nome

    card.appendChild(autor)
    autor.appendChild(nomeDiv)

    document.getElementById("testimonials").appendChild(card)
}
