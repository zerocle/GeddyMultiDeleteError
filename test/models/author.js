var assert = require('assert')
  , tests
  , Author = geddy.model.Author;

tests = {

  'after': function (next) {
    // cleanup DB
    Author.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var author = Author.create({});
    author.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
