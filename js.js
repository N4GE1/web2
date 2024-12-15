let url = 'https://my-json-server.typicode.com/N4GE1/work/db'

let productsGrid = document.getElementById('products-grid')
let productsArray = []

fetch(url)
 .then(async function(responce) {
    let data = await responce.json()
        console.log(data)
        productsGrid.innerHTML = null
      data.products.forEach(p => {
            productsArray.push(p);
            let pElem = document.createElement('div')
            pElem.classList.add('product')
            pElem.innerHTML = `
            <h2 class="product-name">${p.name}</h2>
            <img class="product-photo" src="${p.photo_url}">
            <p class="product-price"> Price: ${p.price}</p>
            <p class = "product-description">Description:${p.description}</p>
            <a href="">Seller profile</a>
            <button>Buy</button>
            `
            productsGrid.append(pElem)
        })
    
})