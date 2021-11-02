const database = require('./databse')

module.exports = {
    getAll: (options) => {
        return Promise.all([database.getAll(options), database.count()]).then(
            ([rooms, count]) => ({ rooms, count })
        )
    },
    getOne: (id) => database.getOne(id),
    create: (room) => database.create(room),
    edit: (id, room) => database.update(id, room),
    delete: (id) => database.delete(id)
}
