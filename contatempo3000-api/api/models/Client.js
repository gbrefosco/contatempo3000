/**
 * Client.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    attributes: {
      name: {
        type: 'string',
        maxLength: 69,
        required: true,
        columnName:'CLIENT_NAME'
      }
    },

  },

};

