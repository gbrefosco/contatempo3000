/**
 * Activity.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'ACTIVITY',

  attributes: {
    name: {
      type: 'string',
      required: true,
      maxLength: 69,
      columnName: 'ACTIVITY_NAME'
    },

    note: {
      type: 'string',
      maxLength: 69,
      columnName: 'NOTE'
    },

    time: {
      collection: 'time',
      via: 'activity',
    }
  },
};

