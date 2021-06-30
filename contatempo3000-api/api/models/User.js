/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    login: {
      type: 'string',
      maxLength: 69,
      columnName: 'NICKNAME'
    },

    password: {
      type: 'string',
      maxLength: 69,
      required: true,
      columnName: 'PASSWORD'
    },

    email: {
      type: 'string',
      maxLength: 69,
      columnName: 'EMAIL'
    },

    times: {
      collection: 'time',
      via: 'user'
    }

  },
};

