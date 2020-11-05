'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'B R O S' });
});

//get Men page 
router.get('/men', function (req, res, next) {
    res.render('men', { title: 'Men' });
});

//get Women page
router.get('/women', function (req, res, next) {
    res.render('women', { title: 'Women' });
});

//get kids page
router.get('/kids', function (req, res, next) {
    res.render('kids', { title: 'kids' });
});

//get Women page
router.get('/offers', function (req, res, next) {
    res.render('offers', { title: 'Offers' });
});
module.exports = router;
