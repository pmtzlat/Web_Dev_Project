function setCart() {
    localStorage.setItem('productsInCart', '{"4 GB Raspberry Pi 4":{"picture":"https://cdn.sparkfun.com/r/500-500/assets/parts/1/4/0/2/2/15447-Raspberry_Pi_4_Model_B__4_GB_-01.jpg","title":"4 GB Raspberry Pi 4","inCart":1,"price":20},"TS100 Smart Soldering Iron":{"picture":"https://m.media-amazon.com/images/I/517hkMdTmmL._AC_SS450_.jpg","title":"TS100 Smart Ironing","inCart":1,"price":20},"iFlight Beast F7 Drone Controller Board":{"picture":"https://images-na.ssl-images-amazon.com/images/I/41hEKfbBpxL.jpg","title":"iFlight Beast F7 Drone Controller Board","inCart":1,"price":20}}');
}
    
function ready(){
    updateTotal()
    var removeItemButton = document.getElementsByClassName("rem")
    for (var i = 0; i < removeItemButton.length ; i++){
        var button = removeItemButton[i]
        button.addEventListener('click',function(event){
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
            updateTotal()
        })
    }
    var quantityinputs = document.getElementsByClassName("cart-quantity-input")
    for (var i = 0; i < removeItemButton.length ; i++){
        var input = quantityinputs[i]
        input.addEventListener("change", quantityChanged)
    }
}

function quantityChanged(event){
    var input = event.target
    if (input.value <=0 || isNaN(input.value)){
        input.value = 1

    }
    updateTotal()
}

function updateTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length ; i++){ 
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName("cart-price")
        var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0]
        
        for(var j = 0; j < priceElement.length; j++){
            if (priceElement[j]!=undefined){
                var price = parseFloat(priceElement[0].innerHTML.replace("$", ""))
                var quantity = quantityElement.value
                total += (price * quantity)
            }
            
        }
        
    }
    

    total = Math.round(total * 100)/100
    document.getElementsByClassName("cart-total-price")[0].innerText = "$" + total
}




