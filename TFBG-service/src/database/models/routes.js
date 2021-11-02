var express = require('express');

var app = express();

routes.get('/', function (req, res) {
    res.send('get games')

})

routes.post('/', function (req, res) {
    res.post('POST games')
})

routes.get('/games', function (req, res) {
    res.send('get games')
})
routes.post('/games', function (req, res) {
    res.post('post games')
})

routes.get('/users', function (req, res) {
    res.send('get users')
})
routes.post('/users', function (res, req) {
    res.post('post users')
})