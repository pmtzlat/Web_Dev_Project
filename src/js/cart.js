displayCart()
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector(".products-container")
    if(cartItems && productContainer){
        productContainer.innerHTML = "";
        console.log(localStorage.cartItems)
        
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += 
            `
            <table class="cart-row" width="100%" style="margin-bottom:20px; background-color:lightgray; border-radius: 25px;">
              
              <tr>
                
                <td width="20%">
                  <img
                    src="${item.picture}"
                    width="200"
                    alt="Arduino Starter Kit"
                    style="border-radius:20px"
                    />
                  <br />
                </td>
                <td width="60%">
                  <p style="font-size:larger;font-weight:bold">${item.title}</p><br />
                  <label for="item2quantity">Quantity</label>
                  <input class="cart-quantity-input" type="number" value="${item.inCart}" size="10" id="item2quantity" style="width:50px;border-radius:3px">
                </td>
                <td><span class="cart-price" style="font-weight:bolder">${item.price}</span></td>
                <td>
                  <button class="rem" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; width:100px">
                    Remove
                  </button>
                </td>
              </tr>
              
            </table>
            ` 
        })
        
    }
}

if (document.readyState == "loading"){
    document.addEventListener( "DOMContentLoaded", ready)
} else {
    ready()
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




