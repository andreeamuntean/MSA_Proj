const database = require('./database')

module.exports = {
    getAll: (options) => {
        return Promise.all([database.get(options), database.count()]).then(
            ([users, count]) => ({ users, count })
        )
    },
    getOne: (id) => database.getOne(id),
    create: (user) => database.create(user),
    edit: (id, user) => database.update(id, user),
    delete: (id) => database.delete(id),
    getByEmail: (email) => database.getByEmail(email)
}
