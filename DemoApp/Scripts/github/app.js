(function() {
  var ViewModel, commitModel, fileModel;

  commitModel = function(data) {
    ko.mapping.fromJS(data, {}, this);
    this.files = ko.observableArray();
  };

  fileModel = function(data) {
    ko.mapping.fromJS(data, {}, this);
    this.badgeStatus = ko.computed(function() {
      switch (this.status()) {
        case 'added':
          return 'badge badge-success';
        case 'modified':
          return 'badge badge-info';
        case 'removed':
          return 'badge badge-important';
        default:
          return 'badge';
      }
    }, this);
  };

  ViewModel = function() {
    var self;
    self = this;
    self.repoName = ko.observable("llaughlin/demoapp");
    self.commits = ko.observableArray();
    self.getCommits = function() {
      var url,
        _this = this;
      url = "https://api.github.com/repos/" + self.repoName() + "/commits";
      return $.get(url).done(function(data) {
        var mapping;
        mapping = {
          'commit': {
            create: function(options) {
              return new commitModel(options.data);
            }
          }
        };
        return ko.mapping.fromJS(data, mapping, self.commits);
      });
    };
    self.getFiles = function(commit) {
      var url;
      if (!commit.commit.files.length) {
        url = "https://api.github.com/repos/" + self.repoName() + "/commits/" + commit.sha();
        return $.get(url).done(function(data) {
          var mapping;
          mapping = {
            'files': {
              create: function(options) {
                return new fileModel(options.data);
              }
            }
          };
          return ko.mapping.fromJS(data, mapping, commit.commit);
        });
      }
    };
    return this;
  };

  $(function() {
    window.viewModel = new ViewModel();
    return ko.applyBindings(viewModel);
  });

}).call(this);
