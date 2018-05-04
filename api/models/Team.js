 /**
 * Team.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var fs = require('fs');

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    logoUrl: {
      type: 'string'
    },
    //Stores draftpicks as integers ie. the first draft pick in the third round is 31
    draftPicks: {
      type: 'array'
    },
    owner: {
      collection: 'user',
      via: 'team'
    },
    players: {
      collection: 'player',
      via: 'fantasyTeam'
    },
  }
};

