const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const { authHandler } = require('./src/utils/middleware.js')
const { users, games, rooms } = require('./src/api')
const authRouter = require('./src/api/auth/router')

const CONSTANTS = require('./src/utils/constants')
const connection = require('./src/database/connection')
const cors = require('cors')

const app = express()

connection()
    .then(() => {
        app.use(
            cors({
                origin: CONSTANTS.ORIGIN,
                credentials: true
            })
        )

        app.use(logger('dev'))
        app.use(express.json())
        app.use(express.urlencoded({ extended: false }))
        app.use(cookieParser())

        app.use('/login', authRouter)
        app.use(authHandler)
        app.use('/isLogged', (req, resp) => {
            resp.send(req.auth)
        })

        app.use('/users', users)
        app.use('/rooms', rooms)
        app.use('/games', games)

        app.use('/logout', (req, res) => {
            delete req.auth
            res.send('Log out')
        })

        // catch 404 and forward to error handler
        app.use(function (req, res, next) {
            next(createError(404))
        })

        // error handler
        app.use(function (err, req, res, next) {
            // render the error page
            res.status(err.status || 500)
            console.log(err)
            res.json({ message: 'error' })
        })

        app.listen(CONSTANTS.PORT)
        console.log(
            `Listening to port ${CONSTANTS.PORT} and connected to database`
        )
    })
    .catch((err) => {
        console.log('Cannot connect to database', err)
    })

module.exports = app
