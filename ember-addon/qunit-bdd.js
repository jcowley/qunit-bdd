'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'qunit-bdd',

  treeForVendor: function(tree) {
    var treePath = path.join(__dirname, '..', 'lib')

    var qunitBddTree = new Funnel(this.treeGenerator(treePath), {
      srcDir: '/',
      include: ['*.js'],
      destDir: '/qunit-bdd/lib'
    });

    return mergeTrees([tree, qunitBddTree].filter(Boolean));
  },

  included: function(app) {
    app.import('vendor/qunit-bdd/lib/qunit-bdd.js', {
      type: 'test'
    });
  }
};
