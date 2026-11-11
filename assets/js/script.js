const toggleTema = document.getElementById('toggle-tema')
const prodotti = [{
    img:"https://placehold.co/600x400",
    description:"lorem aaaaaaaaaaa",
    title:"Sneaker Run",
    price:76
},
{
    img:"https://placehold.co/600x400",
    description:"lorem aaaaaaaaaaa",
    title:"T-shirt basic",
    price:76
},
{
    img:"https://placehold.co/600x400",
    description:"lorem aaaaaaaaaaa",
    title:"Borsa city",
    price:76
},
]

const containerProduct = document.querySelector('#containerProduct')

let prodottoSelezionato;

function dettaglio(prodotto){
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

console.log(containerProduct)
prodotti.forEach((p,i)=>{
    const article = document.createElement('article')
    article.classList.add('col-12','col-sm-6','col-xl-4','mb-3')
    const div1 = document.createElement('div')
    div1.classList.add('card', 'p-3')
    const div2 = document.createElement('div')
    div2.classList.add('mb-2','rounded')
    const titolo = document.createElement('h4')
    titolo.classList.add('card-title')
    titolo.textContent = p.title
    const image = document.createElement('img')
    image.setAttribute('src',p.img)
    image.classList.add('img-fluid')
    const description = document.createElement('p')
    description.classList.add('card-text')
    description.textContent = p.description
    const price = document.createElement('p')
    price.textContent = p.price
    const apriDettaglio = document.createElement('button')
    apriDettaglio.textContent = 'Apri dettaglio'
    apriDettaglio.setAttribute('data-bs-target','#exampleModal')
    apriDettaglio.setAttribute('data-bs-toggle','modal')
    apriDettaglio.classList.add('btn','btn-primary','w-100')
    prodottoSelezionato = prodotti[i];
    apriDettaglio.addEventListener('click',(e)=>{
        dettaglio(prodottoSelezionato)
    })
    containerProduct.appendChild(article)
    article.appendChild(div1)
    div1.appendChild(div2)
    div2.appendChild(image)
    div2.appendChild(titolo)
    div2.appendChild(description)
    div2.appendChild(apriDettaglio)
    
})

toggleTema.addEventListener('click', () => {
    const temaScuro = document.body.classList.toggle('dark')
    toggleTema.textContent = temaScuro ? 'Tema chiaro' : 'Tema scuro'
})
