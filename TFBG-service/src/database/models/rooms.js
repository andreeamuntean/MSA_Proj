const mongoose = require('mongoose')
const CONSTANTS = require('../../utils/constants')

const { Schema } = mongoose

const RoomSchema = Schema({
    id: String,
    roomOwner: {
        type: Schema.Types.ObjectId,
        ref: CONSTANTS.DATABASE.COLLECTIONS.USERS
    },
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: CONSTANTS.DATABASE.COLLECTIONS.USERS
        }
    ],
    description: String,
    game: {
        type: Schema.Types.ObjectId,
        ref: CONSTANTS.DATABASE.COLLECTIONS.GAMES
    },
    scheduleDate: Date,
    joinRequest: Array
})

const Rooms = mongoose.model(CONSTANTS.DATABASE.COLLECTIONS.ROOMS, RoomSchema)
module.exports = Rooms
