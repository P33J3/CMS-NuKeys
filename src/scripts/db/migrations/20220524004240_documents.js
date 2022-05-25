/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('documents', (t) => {
    t.increments('doc_id');
    t.string('title').notNull();
    t.integer('cost').nullable();
    t.text('description').nullable();
    t.integer('id').references('id').inTable('users')
      .onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable('documents');
};
