var phirePhiterApp = angular.module('PhirePhiterApp', []);

phirePhiterApp.controller('PhirePhiterController', function(){
  console.log('PhirePhiter controller loaded');

  var self = this;

  self.people = [
    {
      "firstName": "Luke",
      "lastName": "Schlangen",
      "git_username": "LukeSchlangen",
      "shoutout": "Thanks for being awesome during the angular lecture today."
    }
  ];

  self.newPerson = {};

  self.createPerson = function(){
    console.log(self.newPerson);
    self.people.push(angular.copy(self.newPerson));
    self.newPerson = {};//clears out all fields after clicking submit button
  };

});
