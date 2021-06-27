module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: 'db',
            database: 'codenation',
            user: 'root',
            password: 'root'
        },
        pool: {
            min: 2,
            max: 10
        },
    },
};