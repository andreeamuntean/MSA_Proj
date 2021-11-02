const userLogic = require('../users/logic')
const StatusCodes = require('http-status-codes')
const {
    INVALID_EMAIL,
    INVALID_PASSWORD,
    JWT: { SECRET }
} = require('../../utils/constants')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    login: async (email, password) => {
        let user = await userLogic.getByEmail(email)

        if (!user) {
            let error = new Error(INVALID_EMAIL)
            error.status = StatusCodes.NOT_FOUND

            return error
        }

        let passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            let error = new Error(INVALID_PASSWORD)
            error.status = StatusCodes.NOT_ACCEPTABLE

            return error
        }

        let token = jwt.sign(
            {
                _id: user._id,
                name: user.name,
                surname: user.surname,
                email: user.email,
                role: user.role
            },
            SECRET
        )

        return { user, token }
    }
}
