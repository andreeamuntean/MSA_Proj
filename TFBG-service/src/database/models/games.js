const mongoose = require('mongoose')
const CONSTANTS = require('../../utils/constants')

const { Schema } = mongoose

const GamesSchema = Schema({
    imageUrl: String
})

const Games = mongoose.model(CONSTANTS.DATABASE.COLLECTIONS.GAMES, GamesSchema)
module.exports = Games
