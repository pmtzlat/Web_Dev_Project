


let carts = document.getElementById('button');
carts.addEventListener("click", () => {
    prod = document.getElementById('product')

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/addcart', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    // FIXME: Express returns the HTML for login redirect but doesn't navigate the browser
    xhr.send(JSON.stringify({
        product: '4 GB Raspberry Pi 4'
    }));
})