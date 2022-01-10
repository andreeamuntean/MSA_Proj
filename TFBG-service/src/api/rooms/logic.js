const database = require('./database')
const userLogic = require('../users/logic')

module.exports = {
    getAll: (options) => {
        return Promise.all([database.getAll(options), database.count()]).then(
            ([rooms, count]) => ({ rooms, count })
        )
    },
    getOne: (id) => database.getOne(id),
    create: async (room) => {
        console.log(room)
        const user = await userLogic.getByEmail(room.user)
        console.log(user)
        if (!user) {
            let error = new Error('Session expired')

            return error
        }

        const roomCopy = { roomOwner: user[0], ...room }

        console.log(roomCopy)

        return await database.create(roomCopy)
    },

    edit: (id, room) => database.update(id, room),
    delete: (id) => database.delete(id)
}
