'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console (just a convenience)
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(JSON.stringify(results, null, 2)));

// knex.select().table('restaurants')
//   .then(results => console.log(JSON.stringify(results, null, 2)));

// knex
//   .select()
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .then(results => console.log(JSON.stringify(results, null, 2)));

// knex
//   .select('id', 'name')
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .limit(10)
//   .then(results => console.log(JSON.stringify(results, null, 2)));

// knex
//   .count()
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .andWhere('address_zipcode', '10012')
//   .orWhere('address_zipcode', '10013')
//   .orWhere('address_zipcode', '10014') 
//   // .limit(10)
//   .then(results => console.log(JSON.stringify(results, null, 2)));

// knex
//   .insert([{ name: 'Byte Cafe' }, { borough: 'Brooklyn' }, { cuisine: 'coffee' }, { address_building_number: '123' }, { address_street: 'Atlantic Avenue' }, { address_zipcode: '11231' }])
//   .into('restaurants')
//   .returning('id', 'name')
//   .then(console.log);

// knex
//   .insert({ name: 'Byte Cafe', borough: 'Brooklyn', cuisine: 'coffe', address_building_number: '123', address_street: 'Atlantic Avenue', address_zipcode: '11231'})
//   .into('restaurants')
//   .returning(['id', 'name'])
//   .then(console.log);

// knex
//   .insert([{ name: 'Byte Cafe' }, { name: 'Applebees' }, { name: 'TGIF' }])
//   .into('restaurants')
//   .returning(['id', 'name'])
//   .then(console.log);

// knex('restaurants')
//   .update('name', 'DJ Reynolds Pub And Restaurant')
//   .where('nyc_restaurant_id', '30191841')
//   .then(results => console.log(JSON.stringify(results, null, 2)));

// knex('restaurants')
//   .select()
//   .where('nyc_restaurant_id', '30191841')
//   .then(results => console.log(JSON.stringify(results, null, 2)));

// knex('grades')
//   .where('id', '11')
//   .del()
//   .then(console.log);

knex('restaurants')
  // .select()
  .where('id', '22')
  .del()
  // .then(results => console.log(JSON.stringify(results, null, 2)));
  .then(console.log);