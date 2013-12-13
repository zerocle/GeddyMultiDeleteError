var Authors = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Author.all(function(err, authors) {
      if (err) {
        throw err;
      }
      self.respondWith(authors, {type:'Author'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , author = geddy.model.Author.create(params);

    if (!author.isValid()) {
      this.respondWith(author);
    }
    else {
      author.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(author, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Author.first(params.id, function(err, author) {
      if (err) {
        throw err;
      }
      if (!author) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(author);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Author.first(params.id, function(err, author) {
      if (err) {
        throw err;
      }
      if (!author) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(author);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Author.first(params.id, function(err, author) {
      if (err) {
        throw err;
      }
      author.updateProperties(params);

      if (!author.isValid()) {
        self.respondWith(author);
      }
      else {
        author.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(author, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Author.first(params.id, function(err, author) {
      if (err) {
        throw err;
      }
      if (!author) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Book.remove({authorId: author.id}, function(err, data) {
          if(err) throw err;
          geddy.model.Author.remove(params.id, function(err) {
            if (err) {
              throw err;
            }
            self.respondWith(author);
          });
        });
      }
    });
  };

};

exports.Authors = Authors;
