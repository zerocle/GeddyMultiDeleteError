var CreateAuthors = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('name', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('Author', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('Author', callback);
  };
};

exports.CreateAuthors = CreateAuthors;
