(function() {
  var ViewModel;

  ViewModel = function() {
    var self;
    self = this;
    self.repoName = ko.observable("llaughlin/demoapp");
    self.commits = ko.observableArray();
    /*[
            {commit:{message: "First Commit"}, 
            committer:{login: "llaughlin"}, sha: ko.observable("123")}
    ]
    */

    self.getCommits = function() {
      var url,
        _this = this;
      url = "https://api.github.com/repos/" + self.repoName() + "/commits";
      return $.get(url).done(function(data) {
        return ko.mapping.fromJS(data, {}, self.commits);
      });
    };
    self.getFiles = function(commit) {
      var url;
      if (!commit.commit.files) {
        url = "https://api.github.com/repos/" + self.repoName() + "/commits/" + commit.sha();
        /*$.get(url)
        .done((data) =>
            console.log("GitHub data", data)
            ko.mapping.fromJS(data, {}, commit.commit)
            console.log("KO Commit", ko.toJS(commit.commit))
        )
        */

        console.log("GitHub data", window.fileData);
        ko.mapping.fromJS(window.fileData, {}, commit.commit);
        return console.log("KO Commit", commit.commit);
      }
    };
    return this;
  };

  $(function() {
    window.viewModel = new ViewModel();
    return ko.applyBindings(viewModel);
  });

}).call(this);
