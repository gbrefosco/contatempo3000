/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fullName: {
      type: 'string',
      maxLength: 100
    },

    login: {
      type: 'string',
      maxLength: 100,
      required: true
    },

    password: {
      type: 'string',
      maxLength: 100,
      required: true
    },

    email: {
      type: 'string',
      maxLength: 100
    },

    times: {
      collection: 'time',
      via: 'user'
    }

  },
};

