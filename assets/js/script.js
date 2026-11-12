const toggleTema = document.getElementById('toggle-tema')
const prodotti = [{
    img: "https://placehold.co/600x400",
    description: "lorem aaaaaaaaaaa",
    categoria: "scarpe",
    title: "Sneaker Run",
    price: 76
},
{
    img: "https://placehold.co/600x400",
    description: "lorem aaaaaaaaaaa",
    categoria: "t-shirt",

    title: "T-shirt basic",
    price: 76
},
{
    img: "https://placehold.co/600x400",
    description: "lorem aaaaaaaaaaa",
    categoria: "borse",

    title: "Borsa city",
    price: 76
},
]


let cartPrice = prodotti.reduce((acc, p) => {
    return acc + p.price
}, 0)
console.log('prezzo del carrello', cartPrice)


const categorie = [
    'tutti', 'scarpe', 't-shirt', 'borse'
]

const categorieSection = document.querySelector('#categorie')





function filtra(categoria) {
    if (categoria == 'tutti') {
        return prodotti
    }
    return prodotti.filter(l => l.categoria == categoria
    )
}


categorie.forEach((c, i) => {
    const nomeCategoria = document.createElement('button')
    nomeCategoria.textContent = c
    nomeCategoria.classList.add('btn-category', 'btn', 'btn-outline-success')
    nomeCategoria.addEventListener('click', () => {
        const allButtons = document.querySelectorAll('.btn-category')
        allButtons.forEach(b => {
            b.classList.remove('btn-success')
            b.classList.add('btn-outline-success')
        })
        containerProduct.textContent = ''
        console.log(`hai cliccato ${c}`)
        renderProdotti(filtra(c))
        nomeCategoria.classList.remove('btn-outline-success')
        nomeCategoria.classList.add('btn-success')

    })

    categorieSection.appendChild(nomeCategoria)
})






const containerProduct = document.querySelector('#containerProduct')


function dettaglio(prodotto) {
    const titleProduct = document.querySelector('#exampleModalLabel')
    const imgProduct = document.querySelector('#imgProduct')
    const description = document.querySelector('#description1')
    console.log(description)
    const price = document.querySelector('#price')
    price.classList.add('h2')
    titleProduct.textContent = prodotto.title
    imgProduct.src = prodotto.img
    imgProduct.classList.add('img-fluid')
    description.textContent = prodotto.description
    price.textContent = `€${prodotto.price.toFixed(2)}`
}





function renderProdotti(list) {
    list.forEach((p, i) => {
        const article = document.createElement('article')
        article.classList.add('col-12', 'col-sm-6', 'col-xl-4', 'mb-3')

        const div1 = document.createElement('div')
       
        div1.classList.add('card', 'p-3')
        const div2 = document.createElement('div')
        div2.classList.add('mb-2', 'rounded')
        const titolo = document.createElement('h4')
        titolo.classList.add('card-title')
        titolo.textContent = p.title
        const image = document.createElement('img')
        image.setAttribute('src', p.img)
        image.classList.add('img-fluid')
        const description = document.createElement('p')
        description.classList.add('card-text')
        description.textContent = p.description
        const price = document.createElement('p')
        price.textContent = p.price
        const apriDettaglio = document.createElement('button')
        apriDettaglio.textContent = 'Apri dettaglio'
        apriDettaglio.setAttribute('data-bs-target', '#exampleModal')
        apriDettaglio.setAttribute('data-bs-toggle', 'modal')
        apriDettaglio.classList.add('btn', 'btn-primary', 'w-100')
        const prodottoSelezionato = prodotti[i];
        apriDettaglio.addEventListener('click', (e) => {
            dettaglio(prodottoSelezionato)
        })
        containerProduct.appendChild(article)
        article.appendChild(div1)
        div1.appendChild(div2)
        div2.appendChild(image)
        div2.appendChild(titolo)
        div2.appendChild(description)
        div2.appendChild(apriDettaglio)
         if (p.categoria == 'scarpe') {
            div1.style.borderTop = '5px solid blue'
            titolo.style.color = 'blue'
        }
        else if (p.categoria == 'borse') {
            div1.style.borderTop = '5px solid red'
            titolo.style.color = 'red'

        }
        else if (p.categoria == 't-shirt') {
            div1.style.borderTop = '5px solid yellow'
            titolo.style.color = 'yellow'
        }
    })
}

renderProdotti(prodotti)


toggleTema.addEventListener('click', () => {
    const temaScuro = document.body.classList.toggle('dark')
    toggleTema.textContent = temaScuro ? 'Tema chiaro' : 'Tema scuro'
})
