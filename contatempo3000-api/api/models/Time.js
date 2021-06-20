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
      required: true
    },

    end: {
      type: 'string',
      required: true
    },

    task: {
      model: 'task',
      required: true
    },

    user: {
      model: 'user',
      required: true
    },


  },

};

