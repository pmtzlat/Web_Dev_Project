function keyPress(e) {
    if (e.keyCode == 13) {
        inpt = document.getElementById('name').value;
        search(inpt);
    }
}

function search(term) {
    console.log(term)
    xhr.open("POST", '/search', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        inpt: term
        page: document.
    }));

    /*if (searchableItems.hasOwnProperty(term.toLowerCase())) {
        let location = searchableItems[term];
        if (window.location.href.indexOf('product') < 0) {
            location = 'product/' + location;
        }
        window.location.href = searchableItems[term];
    }*/
}