'use strict';

var path = require('path');
var fs = require('fs');

function EmberCLIQunitBDD(project) {
  this.project = project;
  this.name    = 'Ember CLI Qunit BDD';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIQunitBDD.prototype.treeFor = function(name) {
  var treePath;

  if (name === 'vendor') {
    treePath = path.join(__dirname, '..', 'lib');
  }

  if (treePath && fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIQunitBDD.prototype.included = function(app) {
  this.app = app;
  if(app.tests) {
    this.app.import('vendor/qunit-bdd.js');
  }
};

module.exports = EmberCLIQunitBDD;
