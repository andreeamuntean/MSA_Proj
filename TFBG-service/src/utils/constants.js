module.exports = {
    PORT: 9000,
    DATABASE: {
        COLLECTIONS: {
            GAMES: 'games',
            ROOMS: 'rooms',
            USERS: 'users'
        },
        URL: 'mongodb://localhost/TFBG'
    },
    SALT_ROUNDS: 10
}
