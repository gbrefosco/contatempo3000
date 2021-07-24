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

    secretAnswer: {
      type: 'string',
      maxLength: 269,
      columnName: 'SECRETANSWER'
    },

    secretQuestion: {
      type: 'string',
      maxLength: 269,
      columnName: 'SECRETQUESTION'
    },

    times: {
      collection: 'time',
      via: 'user'
    }

  },
};

