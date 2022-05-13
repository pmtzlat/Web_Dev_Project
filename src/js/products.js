

prod = document.querySelector('.product').innerHTML;

let carts = document.getElementById('button');
carts.addEventListener("click", () => {
    alert('Item added to cart!');

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/addcart', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({ product: prod, image: document.getElementById('product-image').src }));

    
})