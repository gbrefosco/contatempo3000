/**
 * Time.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'hoursy',

  attributes: {

    id: {
      type: 'number',
      autoIncrement: true,
      columnName: 'hour_id'
    },

    start: {
      type: 'ref',
      columnName: 'hour_start'
    },

    end: {
      type: 'ref',
      columnName: 'hour_stop'
    },

    activity: {
      model: 'activity',
      columnName: 'activity_id'
    },

    user: {
      model: 'user',
      columnName: 'user_id'
    }
  },
};

