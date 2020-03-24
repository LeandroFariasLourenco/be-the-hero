
exports.up = function(knex) {
  return knex.schema.createTable('T_HERO_ONGS' , (table) => {
      table.string('ID_CODIGO').primary();
      
      table.string('DS_NOME').notNullable();
      table.string('DS_EMAIL').notNullable();
      table.string('DS_TELEFONE').notNullable();
      table.string('DS_CIDADE').notNullable();
      
      table.string('DS_UF', 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('T_HERO_ONGS');
};
