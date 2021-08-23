/**
 * Client.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'client',

  attributes: {

    id: {
      type: 'number',
      autoIncrement: true,
      columnName: 'client_id'
    },
    
    name: {
      type: 'string',
      maxLength: 69,
      columnName:'client_name'
    },

    user: {
      model: 'user',
      columnName: 'user_id'
    },

    activities: {
      collection: 'activity',
      via: 'client'
    }
  },
};

