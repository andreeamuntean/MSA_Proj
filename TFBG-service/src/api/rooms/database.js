const { Room } = require('../../database/models')

module.exports = {
    getAll: (options) => {
        let query = {}
        if (options && options.search && options.search.length) {
            query.name = new RegExp(options.search, 'i')
        }
        if (options && options.filter && options.filter.length) {
            query.status = new RegExp(options.filter, 'i')
        }

        return Room.find({ ...query })
            .skip(options.from)
            .limit(options.limit)
            .populate({ populate: { path: 'product' } })
            .lean()
            .exec()
    },
    getOne: (id) =>
        Room.findById(id)
            .populate({ populate: { path: 'product' } })
            .lean()
            .exec(),
    update: (id, room) =>
        Room.findByIdAndUpdate(id, { ...room })
            .lean()
            .exec(),
    delete: (id) => Room.findByIdAndDelete(id),
    create: (room) => Room.create(room),
    count: () => Room.count().lean().exec()
}
