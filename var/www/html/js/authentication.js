const signin = document.getElementById('signin');

let username = localStorage.getItem('username');

function loginFlow() {
    let user = document.getElementById('username').value;
    if (user != '') {
        localStorage.setItem('username', user);
        location.reload();
    }
}

function signout() {
    username = '';
    localStorage.removeItem('username');
    location.reload();
}

window.onload = function(_) {
    if(window.location.href.indexOf('settings') > 0) {
        username = localStorage.getItem('username');
        if (username == undefined) {
            document.getElementById('title').innerHTML = 'Hello, Guest!';
        } else {
            document.getElementById('title').innerHTML = 'Hello, ' + username + '!';
        }
    }
}