/**
 * Activity.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'activity',

  attributes: {
    
    name: {
      type: 'string',
      required: true,
      maxLength: 69,
      columnName: 'activity_name'
    },

    note: {
      type: 'string',
      maxLength: 69,
      columnName: 'note'
    },

    user: {
      model: 'user',
      columnName: 'user_id'
    },

    client: {
      model: 'client',
      columnName: 'client_id'
    },

    time: {
      collection: 'time',
      via: 'activity',
    }
  },
};

