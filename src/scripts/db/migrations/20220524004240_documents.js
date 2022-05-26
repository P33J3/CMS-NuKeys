/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('documents', (t) => {
    t.increments('id').unsigned().primary();

    t.string('title').notNull();
    t.string('body').nullable();
    t.string('author_id').nullable();
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.integer('profileId');
  });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('documents');
};
