const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('index.html');
})
routes.get('/shedule', (req, res) => {
    console.log(req.body);
    res.render('shedule.html');
})

routes.post('/', (req, res) => {
    const body = req.body;
    const bdate = new Date(body.bdate);
    const now = new Date();
    if ((now.getFullYear() - bdate.getFullYear()) <= 12) {
        res.send('You are not authorized.');
    }
    res.render('shedule.html', { ...body })

});



module.exports = routes;