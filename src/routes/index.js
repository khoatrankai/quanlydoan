const newsRouter = require('./news');

function route(app) {
    app.use('/news', newsRouter);

    app.get('/', (req, res) => {
        res.render('home');
    });
    app.get('/order', (req, res) => {
        res.render('order');
    });
    // app.get('/search', (req, res) => {
    //   res.render('search')
    // })

    app.get('/search', (req, res) => {
        console.log('oke ' + req.query + ' oke');
        res.render('search');
    });
    app.post('/search', (req, res) => {
        console.log('oke ' + req.body.q + ' oke');
        res.send('');
    });
}

module.exports = route;
