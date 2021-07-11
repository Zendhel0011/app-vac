const express = require('express');
const routes = express.Router();
const { User } = require('../model/personClass');

routes.get('/', (req, res) => {
    res.render('index.html');
})
routes.get('/shedule', (req, res) => {
    console.log(req.body);
    res.render('shedule.html');
})
routes.post('/shedule', (req, res) => {
    const { ci, bdate, fname, lname, usAddress, phone, gender, date } = req.body;
    const newUser = new User(ci, fname, lname, gender, bdate, usAddress, phone);
    newUser.saveUser();
    res.send('Reserved');

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