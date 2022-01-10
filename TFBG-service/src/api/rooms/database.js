const { Room } = require('../../database/models')

module.exports = {
    getAll: (options) => {
        let query = {}
        if (options && options.filter && options.filter.length) {
            query.game = new RegExp(options.filter, 'i')
        }

        return Room.find({ ...query })
            .skip(options.from)
            .limit(options.limit)
            .lean()
            .exec()
    },
    getOne: (id) => Room.findById(id).lean().exec(),
    update: (id, room) =>
        Room.findByIdAndUpdate(id, { ...room })
            .lean()
            .exec(),
    delete: (id) => Room.findByIdAndDelete(id),
    create: (room) => Room.create(room),
    count: () => Room.count().lean().exec()
}
