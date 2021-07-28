/**
 * Time.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'HOURSY',

  attributes: {

    start: {
      type: 'string',
      required: true,
      columnName: 'HOUR_START'
    },

    end: {
      type: 'string',
      required: true,
      columnName: 'HOUR_STOP'
    },

    activity: {
      model: 'activity',
      required: true,
      columnName: 'ACTIVITY_ID'
    },

    user: {
      model: 'user',
      required: true,
      columnName: 'USER_ID'
    },


  },

};

