import UserSchema from '.\users'
import gameSchema from '.\games'

const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
    id: String,
    roomOwner: userSchema.name,
    participants: userSchema.name[],
    description: String,
    game: gameSchema.name,
    scheduleDate: Date,
    joinRequest: Array
})
<<<<<<< HEAD
mongoose.model("rooms", RoomSchema);
=======
mongoose.model("rooms", RoomSchema);
module.exports = ("rooms", RoomSchema);
