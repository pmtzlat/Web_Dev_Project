




let addtocart = document.getElementById('button');
addtocart.addEventListener("click", () => {
    
    if (Storage.length!=0){
        const uname = Storage.getItem('username')
        const item = document.getElementById('product').innerHTML

        var xhr = new XMLHttpRequest();
        xhr.open("POST", '/addprod', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            item: item
        }));
    }
    else{
        window.location.href = './login.html';
    }
    
})



