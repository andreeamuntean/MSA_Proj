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
    SALT_ROUNDS: 10,
    INVALID_PASSWORD: 'Invalid password',
    INVALID_EMAIL: 'Invalid email',
    JWT: {
        SECRET: 'ad78312njk&^#nkb()(djlk1256~!$#&^(*)32'
    },
    ORIGIN: 'http://localhost:3000'
}
