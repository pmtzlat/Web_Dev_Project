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
app.use(express.urlencoded({ extended: true }));
app.engine('pug', require('pug').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/img', express.static(`${__dirname}/img`));
app.use('/css', express.static(`${__dirname}/css`));
app.use('/js', express.static(`${__dirname}/js`));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// HTML DYNAMIC ROUTES

app.get('/', function(req, res) {
    connection.query('SELECT * FROM product;' , function(err, rows, fields) {
        if (err) throw err;
        res.render('products-view', { title: 'Home', products: rows });
    });
});

app.get('/category/:category', function(req, res) {
    const params = req.params;
    const id = params.category.substring(0, params.category.length - 1);
    connection.query('SELECT * FROM product WHERE category = ?;', [id], function(err, rows, fields) {
        if (err) throw err;
        res.render('products-view', { title: 'Category', products: rows, username: req.session.username });
    });
});

app.get('/filter/:manufacturer?/:rating?/:price?', function(req, res) {
    const params = req.params;
    let manufacturer = params.manufacturer;
    let rating = params.rating;
    let price = params.price;
    
    let manufacturerQuery = '';
    let ratingQuery = '';
    let priceQuery = '';

    // Build query
    (typeof manufacturer != 'string' ||  manufacturer == 'all') ?
        manufacturerQuery = '1=1':
        manufacturerQuery = `manufacturer = '${manufacturer}'`;
    
    (isNaN(rating) || rating == 0) ?
        ratingQuery = '1=1':
        ratingQuery = `rating >= ${rating}`;
    
    (!isNaN(price)) ?
        priceQuery = `price <= ${price}`:
        priceQuery = '1=1';
    
    const statement = `SELECT * FROM product WHERE ${manufacturerQuery} AND ${ratingQuery} AND ${priceQuery};`;
    console.log(statement);
    connection.query(statement, function(err, rows, fields) {
        if (err) throw err;
        res.render('products-view', { title: 'Filter', products: rows });
    });
});

// HTML STATIC ROUTES

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

app.get('/search', function(req, res) {
    res.sendFile(`${__dirname}/filter.html`);
})

// POST ROUTES

app.post('/auth', function(req, res) {
    const user = req.body.username;
    const pass = req.body.password;

    if (user && pass) {
        connection.query(`SELECT * FROM user WHERE (iduser = ? AND psswrd = ?)`, [user, pass], function(err, results, fields) {
            if (err) throw err;
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = user;
                res.redirect('/');
            } else {
                res.json({ success: false })
            }
            res.end();
        });
    } else {
        res.json({ success: false });
        res.end();
    }
});

app.post('/signup', function(req, res) {
    const user = req.body.username;
    const pass = req.body.password;

    if (!user || !pass) res.status(400).redirect('/login');
    if (pass.length < 8) res.status(400).send('Passwords need to be at least 8 characters in length');
    connection.query('INSERT INTO user(iduser, psswrd) values (?, ?);', [user, pass], function(err, results, fields) {
        if (err) throw err;
        req.session.loggedin = true;
        req.session.username = user;
        res.redirect('/');
    });
    // res.end();
})

app.post('/signout', function(req,res) {
    req.session.loggedin = false;
    req.session.username = undefined;
    res.redirect('/');
});

app.post('/addcart', function(req, res) {
    const user = req.session.username;
    const prod = req.body.product;
    if(!user){
        res.redirect('/login');
    } else if (prod) {
        connection.query(`INSERT INTO relation( user, item, quantity ) VALUES ("Demo1", "4G-Raspberry-Pi-4", 1);`, [user, prod], function(err) {
            if (err) throw err;
           
            res.redirect('/cart');

            res.end();
        });
    }
});
    


app.listen(3000);
console.log('Listening on port 3000...')