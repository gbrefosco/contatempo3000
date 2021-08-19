/**
 * Time.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'hoursy',

  attributes: {

    start: {
      type: 'string',
      required: true,
      columnName: 'hour_start'
    },

    end: {
      type: 'string',
      columnName: 'hour_stop'
    },

    activity: {
      model: 'activity',
      //required: true,
      columnName: 'activity_id'
    },

    user: {
      model: 'user',
      required: true,
      columnName: 'user_id'
    },


  },

};

