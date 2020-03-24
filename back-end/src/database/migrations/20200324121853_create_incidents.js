
exports.up = function(knex) {
  return knex.schema.createTable('T_HERO_INCIDENTS' , (table) => {
    table.increments();

    table.string('DS_TITULO').notNullable();
    table.string('DS_DESCRICAO').notNullable();
    table.decimal('VL_CUSTO').notNullable();
    
    table.string('T_HERO_ONGS_ID').notNullable();

    table.foreign('T_HERO_ONGS_ID').references('ID_CODIGO').inTable('T_HERO_ONGS');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('T_HERO_INCIDENTS');
};
