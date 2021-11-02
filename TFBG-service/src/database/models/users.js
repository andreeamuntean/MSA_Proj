const mongoose = require('mongoose')
const CONSTANTS = require('../../utils/constants')
const bcrypt = require('bcrypt')
const utils = require('util')

bcrypt.genSalt = utils.promisify(bcrypt.genSalt)
bcrypt.hash = utils.promisify(bcrypt.hash)
bcrypt.compare = utils.promisify(bcrypt.compare)
const { SALT_ROUNDS, DATABASE } = require('../../utils/constants')

const usersSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    hashPass: String,
    phone: String,
    games_played: String,
    rooms: [
        {
            type: Schema.Types.ObjectId,
            ref: DATABASE.COLLECTIONS.USERS
        }
    ],
    avatarImage: URL
})

usersSchema.pre('save', function (next) {
    let user = this
    if (!user.isModified('password') || !user.password) return next()

    bcrypt
        .genSalt(SALT_ROUNDS)
        .then((salt) => bcrypt.hash(user.password, salt))
        .then((hash) => {
            user.password = hash

            return next()
        })
        .catch(next)
})

usersSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
}

const User = mongoose.model(CONSTANTS.DATABASE.COLLECTIONS.USERS, usersSchema)

module.exports = User
