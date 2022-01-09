const jwt = require('jsonwebtoken')
const { getOne } = require('../api/users/logic')

const {
    JWT: { SECRET }
} = require('../utils/constants')

module.exports = {
    authHandler: async (req, res, next) => {
        let auth = req.headers.authorization

        console.log(auth)

        if (auth !== undefined) {
            ;[bearer, token] = auth.split(' ')
            let decoded

            try {
                decoded = jwt.verify(token, SECRET)
                req.auth = decoded
            } catch (err) {
                res.send(err)
            }

            let user = await getOne(decoded._id)

            if (user !== null) next()
            else res.send('User not found')
        } else {
            res.send('Not logged')
        }
    }
}
