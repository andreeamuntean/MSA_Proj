const { Game } = require('../../database/models')

module.exports = {
    get: (options) => {
        let query = {}
        if (options && options.search && options.search.length) {
            query.firstName = new RegExp(options.search, 'i')
        }
        return Game.find({ ...query })
            .skip(options.from)
            .limit(options.limit)
            .lean()
            .exec()
    },
    getOne: (id) => Game.findById(id).lean().exec(),
    create: (user) => Game.create(user),
    update: (id, user) => Game.findByIdAndUpdate(id, user).lean().exec(),
    delete: (id) => Game.findByIdAndDelete(id),
    count: () => Game.count().lean().exec()
}
