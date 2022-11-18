/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Figaro', food_type_id: 2, pet_type_id: 2},
    {id: 2, name: 'Fat Sam', food_type_id: 3, pet_type_id: 3},
    {id: 3, name: 'Moki', food_type_id: 3, pet_type_id: 3},
    {id: 4, name: 'Cleo', food_type_id: 4, pet_type_id: 4}
  ]);
};



// {id: 1, name: 'Figaro', pet_food_type_id: 2},
// {id: 2, name: 'Fat Sam', pet_food_type_id: 3},
// {id: 3, name: 'Moki', pet_food_type_id: 3},
// {id: 4, name: 'Cleo', pet_food_type_id: 4}

// {id: 1, name: 'Figaro', pet_food_type_id: 2, pet_type_id: 2},
// {id: 2, name: 'Fat Sam', pet_food_type_id: 3, pet_type_id: 3},
// {id: 3, name: 'Moki', pet_food_type_id: 3, pet_type_id: 3},
// {id: 4, name: 'Cleo', pet_food_type_id: 4, pet_type_id: 4}