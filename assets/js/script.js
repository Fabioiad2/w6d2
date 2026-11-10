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
console.log(containerProduct)
prodotti.forEach((p)=>{
    const article = document.createElement('article')
    article.classList.add('col-12','col-sm-6','col-xl-4','mb-3')
    const div1 = document.createElement('div')
    div1.classList.add('border','rounded','p-3','bg-white','shadow-sm')
    const div2 = document.createElement('div')
    div2.classList.add('mb-2','rounded')
    const titolo = document.createElement('h4')
    titolo.textContent = p.title
    const image = document.createElement('img')
    image.setAttribute('src',p.img)
    image.classList.add('img-fluid')
    const description = document.querySelector('p')
    description.textContent = p.description
    const price = document.querySelector('p')
    price.textContent = p.price
    containerProduct.appendChild(article)
    article.appendChild(div1)
    div1.appendChild(div2)
    div2.appendChild(image)
    div2.appendChild(titolo)
    div2.appendChild(description)
})