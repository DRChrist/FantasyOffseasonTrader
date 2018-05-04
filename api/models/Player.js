/**
 * Player.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    age: {
      type: 'number'
    },
    birthday: {
      type: 'string'
    },
    college: {
      type: 'string'
    },
    status: {
      type: 'string',
      // enum: ['Retired', 'Active', 'Injured reserve', 
      //   'Unsigned free agent', 'Suspended', 'Physically unable to perform']
    },
    nflTeam: {
      type: 'string'
    },
    experience: {
      type: 'string'
    },
    height: {
      //in inches
      type: 'number'
    },
    name: {
      type: 'string'
    },
    number: {
      type: 'number'
    },
    position: {
      type: 'string'
    },
    weight: {
      //in lbs
      type: 'number'
    },
    yearsPlayed: {
      type: 'string'
    },
    fantasyTeam: {
      collection: 'team',
      via: 'players'
    }

  }
};

