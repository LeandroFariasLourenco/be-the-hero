const knex    = require('knex'),
      config  = require('../../knexfile'),
      connect = knex(config.development);

module.exports = connect;