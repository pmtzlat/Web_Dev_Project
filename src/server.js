const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SQL is cool123!',
    database: 'mydb'
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/img', express.static(`${__dirname}/img`));
app.use('/css', express.static(`${__dirname}/css`));
app.use('/js', express.static(`${__dirname}/js`));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// HTML ROUTES
app.get('/', function(req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/about', function(req, res) {
    res.sendFile(`${__dirname}/aboutme.html`);
});

app.get('/cart', function(req, res) {
    res.sendFile(`${__dirname}/cart.html`);
});

app.get('/checkout', function(req, res) {
    res.sendFile(`${__dirname}/checkout.html`);
});

app.get('/faq', function(req, res) {
    res.sendFile(`${__dirname}/faq.html`);
});

app.get('/login', function(req, res) {
    res.sendFile(`${__dirname}/login.html`);
});

app.get('/password-reset', function(req, res) {
    res.sendFile(`${__dirname}/password-reset.html`);
});

// TODO: dynamic routes

// JS ROUTES

// app.get('/js/navbar-footer.js', function(req, res) {
//     res.sendFile('./js/navbar-footer.js');
// })

app.post('/auth', function(req, res) {
    const user = req.body.username;
    const pass = req.body.password;

    if (user && pass) {
        connection.query(`SELECT * FROM user WHERE (iduser = ? AND psswrd = ?)`, [user, pass], function(err, results, fields) {
            if (err) throw err;
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = user;
                res.redirect('/home');
            } else {
                res.send('Incorrect Username or Password.')
            }
            res.end();
        });
    } else {
        res.send('Please enter username and password.');
        res.end();
    }
})

app.listen(3000);
console.log('Listening on port 3000...')