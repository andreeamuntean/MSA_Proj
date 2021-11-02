var express = require('express')
var router = express.Router()
const logic = require('./logic')

router
    .route('/')
    .post((req, res) => {
        logic.create(req.body.user).then((users) => {
            res.json(users)
        })
    })
    .get((req, res) => {
        logic
            .getAll({
                from: Number(req.query.from || 0),
                limit: Number(req.query.limit || 50),
                search: req.query.search || undefined
            })
            .then((response) => {
                res.json(response)
            })
    })
router
    .route('/:ID')
    .put((req, res) => {
        logic.edit(req.params.ID, req.body.user).then((users) => {
            res.json(users)
        })
    })
    .get((req, res) => {
        logic.getOne(req.params.ID).then((users) => {
            res.json(users)
        })
    })
    .delete((req, res) => {
        logic.delete(req.params.ID).then((response) => {
            res.send(response)
        })
    })
module.exports = router
