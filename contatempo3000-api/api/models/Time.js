/**
 * Time.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

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

    task: {
      model: 'task',
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

