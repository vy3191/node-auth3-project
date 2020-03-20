const db = require('../database/dbConfig');

function find() {
  return db('users').select()
}

function findById(id) {
   return db('users').where({id}).first();
}

function findBy(filter) {
  return db('users').where(filter).first();
}

function add(user) {
  const [id] = db('users').insert(user);
  return db('users').where('id', id).first();
}

module.exports = {
  find, findById, findBy, add
}