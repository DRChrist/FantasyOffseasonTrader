/**
 * TeamController
 *
 * @description :: Server-side logic for managing teams
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require('fs');
var lineReader = require('line-reader');

module.exports = {

  addPlayersFromTsv: function(req, res) {
    Team.create( {name: req.param('team').toString()} ).exec(function(err, createdTeam) {
      if(err) {
        console.error(err);
        return res.negotiate(err);
      }
      lineReader.eachLine(req.param('path').toString(), function(line)
      {
        console.log(line);
        Player.findOne({
          name: line
        }).exec(function(err, foundPlayer) {
          if(err) {
            console.error(err);
            return res.negotiate(err);
          }
          console.log('Found player: ' + foundPlayer.id);
          // Team.addToCollection(createdTeam.id, 'players').members([foundPlayer.id]);
          createdTeam.players.add(foundPlayer.id);
          createdTeam.save(function(err) {
            if(err) {
              return res.serverError(err);
            }
          });
        });
      }); 
      // .then(function(err) {
      //   if(err) {
      //     return res.serverError(err);
      //   }
      //   console.log('*****************DONE READING!!******************');
      // });
      // lineReader.open(req.param('path').toString(), function(err, reader, next)
      // {
      //   if(err) {
      //     console.error(err);
      //     return res.negotiate(err);
      //   }
      //   if(reader.hasNextLine()) {
      //     reader.nextLine(function(err, line) {
      //       try{
      //         if(err)
      //         {
      //           console.error(err);
      //           return res.negotiate(err);
      //         }
      //         console.log(line);
      //         Player.findOne({ name: line}).exec(function(err, foundPlayer) {
      //           if(err) {
      //             console.error(err);
      //             return res.negotiate(err);
      //           }
      //           console.log(foundPlayer.id);
      //           createdTeam.players.add(foundPlayer.id);
      //         });
      //       } finally {
      //         reader.close(function(err) {
      //           if(err) {
      //             console.error(err);
      //             return res.negotiate(err);
      //           }
      //           console.log('Closing Reader');
      //           next();
      //         });
      //       }
      //     });
      //   } else {
      //     reader.close(function(err) {
      //       if(err) {
      //         console.error(err);
      //         return res.negotiate(err);
      //       }
      //       console.log(createdTeam);
      //       createdTeam.save(function(err) {
      //         if(err) {
      //           console.error(err);
      //           return res.negotiate(err);
      //         }
      //       });
      //     });
      //   }
      // });
    });
  }
};

