const { User } = require('../../database/models')

module.exports = {
    get: (options) => {
        let query = {}
        if (options && options.search && options.search.length) {
            query.firstName = new RegExp(options.search, 'i')
        }
        return User.find({ ...query })
            .skip(options.from)
            .limit(options.limit)
            .lean()
            .exec()
    },
    getOne: (id) => User.findById(id).lean().exec(),
    create: (user) => User.create(user),
    update: (id, user) => User.findByIdAndUpdate(id, user).lean().exec(),
    delete: (id) => User.findByIdAndDelete(id),
    count: () => User.count().lean().exec(),
    getByEmail: (email) => User.find({ email: email })
}
