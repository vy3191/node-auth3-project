
exports.seed = async function(knex) {
   await knex('users').truncate();
   await knex('users').insert([
     {username:'venky', password:'12345', department:'mathematics'},
     {username:'yagatilee', password:'54321', department:'chemistry'},
     {username:'venkat', password:'abcde', department:'physics'}
   ]);
};


