const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    hashPass: String,
    phone: String,
    games_played: String,
    rooms: String,
    avatarImage: URL,

})
mongoose.model("user", UserSchema);
mongoose.exports = ("user", UserSchema);
