const router = require('express').Router()

const logic = require('./logic')

router
    .route('/')
    .post((req, res) =>
        logic
            .login(req.body.email, req.body.password)
            .then((user) => res.send(user))
    )

module.exports = router
