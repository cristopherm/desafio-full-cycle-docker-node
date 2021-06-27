const knex = require('../db/config');

exports.insert = async (name) => {
    await knex('people').insert({
        name: name || 'nome da pessoa'
    });
}

exports.table = async () => {
    const exists = await knex.schema.hasTable('people');

    if (!exists) {
        await knex.schema.createTable('people', (table) => {
            table.increments();
            table.string('name');
        })
    }
}

exports.get = async () => {
    const res = await knex.select('*').from('people');
    return res;
}