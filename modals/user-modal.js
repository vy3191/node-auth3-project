const db = require('../database/dbConfig');
const bcrypt = require("bcryptjs");

function find() {
  return db('users').select()
}

function findById(id) {
   return db('users').where({id}).first();
}

function findBy(filter) {
  return db('users').where(filter).first();
}

async function add(user) {
  user.password = await bcrypt.hash(user.password,16);
  const [id] = await db('users').insert(user);
  return await db('users').where('id', id).first();
}

module.exports = {
  find, findById, findBy, add
}