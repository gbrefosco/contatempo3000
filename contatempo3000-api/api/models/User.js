/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'usersy',

  attributes: {

    id: {
      type: 'number',
      autoIncrement: true,
      columnName: 'user_id'
    },

    login: {
      type: 'string',
      maxLength: 69,
      required: true,
      columnName: 'nickname'
    },

    password: {
      type: 'string',
      maxLength: 69,
      required: true,
      columnName: 'password'
    },

    email: {
      type: 'string',
      maxLength: 69,
      columnName: 'email'
    },

    secretAnswer: {
      type: 'string',
      maxLength: 269,
      columnName: 'secretanswer'
    },

    secretQuestion: {
      type: 'string',
      maxLength: 269,
      columnName: 'secretquestion'
    },


    times: {
      collection: 'time',
      via: 'user'
    },

    activities: {
      collection: 'activity',
      via: 'user'
    }
  },
};

