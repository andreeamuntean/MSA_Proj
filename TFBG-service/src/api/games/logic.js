const database = require('./database')

module.exports = {
    getAll: (options) => {
        return Promise.all([database.get(options), database.count()]).then(
            ([games, count]) => ({ games, count })
        )
    },
    getOne: (id) => database.getOne(id),
    create: (game) => database.create(game),
    edit: (id, game) => database.update(id, game),
    delete: (id) => database.delete(id)
}
