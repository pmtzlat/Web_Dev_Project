

prod = document.getElementById('product').innerHTML;
if (prod == 'iFlight Beast F7 Drone Controller Board'){
    console.log("iFlight Beast F7 Drone Controller Board")
}
else if (prod == 'TS100 Smart Soldering Iron'){
    console.log("TS100 Smart Soldering Iron")
}
else {
    console.log("no valid product string detected")
    console.log(prod)
}


let carts = document.getElementById('button');
carts.addEventListener("click", () => {
    alert('Item added to cart!');
   
    

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/addcart', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    // FIXME: Express returns the HTML for login redirect but doesn't navigate the browser
    if (prod == "4 GB Raspberry Pi 4"){
        xhr.send(JSON.stringify({
            product: '4 GB Raspberry Pi 4'
        }));
    }else if(prod == "iFlight Beast F7 Drone Controller Board"){
        xhr.send(JSON.stringify({
            product: 'iFlight Beast F7 Drone Controller Board'
        }));

    }
    else if(prod == "TS100 Smart Soldering Iron"){
        xhr.send(JSON.stringify({
            product: 'TS100 Smart Soldering Iron'
        }));

    }
    else{
        alert('Error when adding item to cart')
    }
    
})