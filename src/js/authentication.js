const signin = document.getElementById('signin');

let username = localStorage.getItem('username');

document.getElementById('cheese2').addEventListener("click",function() {
    let user = document.getElementById('username').value;
    if (user != '') {
        localStorage.setItem('username', user);
    }
})

document.getElementById('cheese').addEventListener("click",function() {
    let user = document.getElementById('rusername').value;
    if (user != '') {
        localStorage.setItem('username', user);
    }
})

function signout() {
    username = '';
    localStorage.removeItem('username');
    location.reload();
}

window.onload = function(_) {
    if(window.location.href.indexOf('settings') > 0) {
        username = localStorage.getItem('username');
        if (username == undefined) {
            document.getElementById('title').innerHTML = 'Hello, guest!';
        } else {
            document.getElementById('title').innerHTML = 'Hello, ' + username + '!';
        }
    }
}