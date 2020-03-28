const knex      = require('knex'),
      baseFile  = require('../../knexfile'),
      config    = process.env.NODE_ENV === 'test' ? baseFile.test : baseFile.development,
      connect   = knex(config);

module.exports = connect;