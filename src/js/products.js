


let carts = document.getElementById('button');
carts.addEventListener("click", () => {
    prod = document.getElementById('product')

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/addcart', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        product: prod
    }));
}
   