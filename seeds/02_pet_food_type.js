/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE food_type CASCADE')
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'Bird Seed'},
    {id: 2, name: 'Cat-Nip'},
    {id: 3, name: 'Kibble'}, 
    {id: 4, name: 'Other Fish'}
  ]);
};
