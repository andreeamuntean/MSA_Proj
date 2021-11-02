var express = require('express')
var router = express.Router()
const logic = require('./logic')

router
    .route('/')
    .post((req, res) => {
        logic.create(req.body.room).then((rooms) => {
            res.json(rooms)
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
        logic.edit(req.params.ID, req.body.room).then((rooms) => {
            res.json(rooms)
        })
    })
    .get((req, res) => {
        logic.getOne(req.params.ID).then((rooms) => {
            res.send(rooms)
        })
    })
    .delete((req, res) => {
        logic.delete(req.params.ID).then((response) => {
            res.send(response)
        })
    })

module.exports = router
