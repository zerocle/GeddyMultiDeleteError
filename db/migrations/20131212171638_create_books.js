var CreateBooks = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('title', 'string');
          t.column('authorId', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('Book', def, callback);
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
    this.dropTable('Book', callback);
  };
};

exports.CreateBooks = CreateBooks;
