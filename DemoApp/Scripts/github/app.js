(function() {
  var ViewModel;

  ViewModel = function() {
    var self;
    self = this;
    self.repoName = ko.observable("llaughlin/demoapp");
    self.commits = ko.observableArray([
      {
        commit: {
          message: "First Commit",
          files: ko.observableArray()
        },
        committer: {
          login: "llaughlin"
        },
        timestamp: "2h",
        sha: ko.observable("123")
      }, {
        commit: {
          message: "Second Commit",
          files: ko.observableArray()
        },
        committer: {
          login: "lambdatime"
        },
        timestamp: "3h",
        sha: ko.observable("456")
      }
    ]);
    self.getCommits = function() {
      var url;
      console.log("Getting commits");
      url = "https://api.github.com/repos/" + self.repoName() + "/commits";
      return ko.mapping.fromJS(window.commitData, {}, self.commits);
    };
    self.getFiles = function(commit) {
      console.log(commit);
      return commit.files = ko.observable(window.fileData.files);
    };
    return this;
  };

  $(function() {
    window.viewModel = new ViewModel();
    return ko.applyBindings(viewModel);
  });

  window.commitData = [
    {
      "sha": "46a0a3107ef02f4edbb136d0ae3056d66c862b84",
      "commit": {
        "author": {
          "name": "Logan Laughlin",
          "email": "loganlaughlin@gmail.com",
          "date": "2013-07-19T20:23:17Z"
        },
        "committer": {
          "name": "Logan Laughlin",
          "email": "loganlaughlin@gmail.com",
          "date": "2013-07-19T20:23:17Z"
        },
        "message": "Added coffeescript bundle.",
        "tree": {
          "sha": "81184914f5e8d84651439a060ac1762d7890155e",
          "url": "https://api.github.com/repos/llaughlin/DemoApp/git/trees/81184914f5e8d84651439a060ac1762d7890155e"
        },
        "url": "https://api.github.com/repos/llaughlin/DemoApp/git/commits/46a0a3107ef02f4edbb136d0ae3056d66c862b84",
        "comment_count": 0
      },
      "url": "https://api.github.com/repos/llaughlin/DemoApp/commits/46a0a3107ef02f4edbb136d0ae3056d66c862b84",
      "html_url": "https://github.com/llaughlin/DemoApp/commit/46a0a3107ef02f4edbb136d0ae3056d66c862b84",
      "comments_url": "https://api.github.com/repos/llaughlin/DemoApp/commits/46a0a3107ef02f4edbb136d0ae3056d66c862b84/comments",
      "author": {
        "login": "llaughlin",
        "id": 1325514,
        "avatar_url": "https://secure.gravatar.com/avatar/e2e8ea1aa36a140ceb008c3f219eac3e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
        "gravatar_id": "e2e8ea1aa36a140ceb008c3f219eac3e",
        "url": "https://api.github.com/users/llaughlin",
        "html_url": "https://github.com/llaughlin",
        "followers_url": "https://api.github.com/users/llaughlin/followers",
        "following_url": "https://api.github.com/users/llaughlin/following{/other_user}",
        "gists_url": "https://api.github.com/users/llaughlin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/llaughlin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/llaughlin/subscriptions",
        "organizations_url": "https://api.github.com/users/llaughlin/orgs",
        "repos_url": "https://api.github.com/users/llaughlin/repos",
        "events_url": "https://api.github.com/users/llaughlin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/llaughlin/received_events",
        "type": "User"
      },
      "committer": {
        "login": "llaughlin",
        "id": 1325514,
        "avatar_url": "https://secure.gravatar.com/avatar/e2e8ea1aa36a140ceb008c3f219eac3e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
        "gravatar_id": "e2e8ea1aa36a140ceb008c3f219eac3e",
        "url": "https://api.github.com/users/llaughlin",
        "html_url": "https://github.com/llaughlin",
        "followers_url": "https://api.github.com/users/llaughlin/followers",
        "following_url": "https://api.github.com/users/llaughlin/following{/other_user}",
        "gists_url": "https://api.github.com/users/llaughlin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/llaughlin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/llaughlin/subscriptions",
        "organizations_url": "https://api.github.com/users/llaughlin/orgs",
        "repos_url": "https://api.github.com/users/llaughlin/repos",
        "events_url": "https://api.github.com/users/llaughlin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/llaughlin/received_events",
        "type": "User"
      },
      "parents": [
        {
          "sha": "090d4c5041e99c3e0e2086d078dc161afefaf3e0",
          "url": "https://api.github.com/repos/llaughlin/DemoApp/commits/090d4c5041e99c3e0e2086d078dc161afefaf3e0",
          "html_url": "https://github.com/llaughlin/DemoApp/commit/090d4c5041e99c3e0e2086d078dc161afefaf3e0"
        }
      ]
    }, {
      "sha": "090d4c5041e99c3e0e2086d078dc161afefaf3e0",
      "commit": {
        "author": {
          "name": "Logan Laughlin",
          "email": "loganlaughlin@gmail.com",
          "date": "2013-07-19T20:19:17Z"
        },
        "committer": {
          "name": "Logan Laughlin",
          "email": "loganlaughlin@gmail.com",
          "date": "2013-07-19T20:19:17Z"
        },
        "message": "Aded coffeescript script.",
        "tree": {
          "sha": "22f293b1d4e346f077106ac9c8e146c824056eb9",
          "url": "https://api.github.com/repos/llaughlin/DemoApp/git/trees/22f293b1d4e346f077106ac9c8e146c824056eb9"
        },
        "url": "https://api.github.com/repos/llaughlin/DemoApp/git/commits/090d4c5041e99c3e0e2086d078dc161afefaf3e0",
        "comment_count": 0
      },
      "url": "https://api.github.com/repos/llaughlin/DemoApp/commits/090d4c5041e99c3e0e2086d078dc161afefaf3e0",
      "html_url": "https://github.com/llaughlin/DemoApp/commit/090d4c5041e99c3e0e2086d078dc161afefaf3e0",
      "comments_url": "https://api.github.com/repos/llaughlin/DemoApp/commits/090d4c5041e99c3e0e2086d078dc161afefaf3e0/comments",
      "author": {
        "login": "llaughlin",
        "id": 1325514,
        "avatar_url": "https://secure.gravatar.com/avatar/e2e8ea1aa36a140ceb008c3f219eac3e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
        "gravatar_id": "e2e8ea1aa36a140ceb008c3f219eac3e",
        "url": "https://api.github.com/users/llaughlin",
        "html_url": "https://github.com/llaughlin",
        "followers_url": "https://api.github.com/users/llaughlin/followers",
        "following_url": "https://api.github.com/users/llaughlin/following{/other_user}",
        "gists_url": "https://api.github.com/users/llaughlin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/llaughlin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/llaughlin/subscriptions",
        "organizations_url": "https://api.github.com/users/llaughlin/orgs",
        "repos_url": "https://api.github.com/users/llaughlin/repos",
        "events_url": "https://api.github.com/users/llaughlin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/llaughlin/received_events",
        "type": "User"
      },
      "committer": {
        "login": "llaughlin",
        "id": 1325514,
        "avatar_url": "https://secure.gravatar.com/avatar/e2e8ea1aa36a140ceb008c3f219eac3e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
        "gravatar_id": "e2e8ea1aa36a140ceb008c3f219eac3e",
        "url": "https://api.github.com/users/llaughlin",
        "html_url": "https://github.com/llaughlin",
        "followers_url": "https://api.github.com/users/llaughlin/followers",
        "following_url": "https://api.github.com/users/llaughlin/following{/other_user}",
        "gists_url": "https://api.github.com/users/llaughlin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/llaughlin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/llaughlin/subscriptions",
        "organizations_url": "https://api.github.com/users/llaughlin/orgs",
        "repos_url": "https://api.github.com/users/llaughlin/repos",
        "events_url": "https://api.github.com/users/llaughlin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/llaughlin/received_events",
        "type": "User"
      },
      "parents": [
        {
          "sha": "505014059dc6ddcb8734d289b73e0f187a5d0f28",
          "url": "https://api.github.com/repos/llaughlin/DemoApp/commits/505014059dc6ddcb8734d289b73e0f187a5d0f28",
          "html_url": "https://github.com/llaughlin/DemoApp/commit/505014059dc6ddcb8734d289b73e0f187a5d0f28"
        }
      ]
    }, {
      "sha": "505014059dc6ddcb8734d289b73e0f187a5d0f28",
      "commit": {
        "author": {
          "name": "Logan Laughlin",
          "email": "loganlaughlin@gmail.com",
          "date": "2013-07-19T19:50:55Z"
        },
        "committer": {
          "name": "Logan Laughlin",
          "email": "loganlaughlin@gmail.com",
          "date": "2013-07-19T19:50:55Z"
        },
        "message": "Added bootstrap.",
        "tree": {
          "sha": "64dac250afb0fd956e2cc5837fa96e182a5d5b25",
          "url": "https://api.github.com/repos/llaughlin/DemoApp/git/trees/64dac250afb0fd956e2cc5837fa96e182a5d5b25"
        },
        "url": "https://api.github.com/repos/llaughlin/DemoApp/git/commits/505014059dc6ddcb8734d289b73e0f187a5d0f28",
        "comment_count": 0
      },
      "url": "https://api.github.com/repos/llaughlin/DemoApp/commits/505014059dc6ddcb8734d289b73e0f187a5d0f28",
      "html_url": "https://github.com/llaughlin/DemoApp/commit/505014059dc6ddcb8734d289b73e0f187a5d0f28",
      "comments_url": "https://api.github.com/repos/llaughlin/DemoApp/commits/505014059dc6ddcb8734d289b73e0f187a5d0f28/comments",
      "author": {
        "login": "llaughlin",
        "id": 1325514,
        "avatar_url": "https://secure.gravatar.com/avatar/e2e8ea1aa36a140ceb008c3f219eac3e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
        "gravatar_id": "e2e8ea1aa36a140ceb008c3f219eac3e",
        "url": "https://api.github.com/users/llaughlin",
        "html_url": "https://github.com/llaughlin",
        "followers_url": "https://api.github.com/users/llaughlin/followers",
        "following_url": "https://api.github.com/users/llaughlin/following{/other_user}",
        "gists_url": "https://api.github.com/users/llaughlin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/llaughlin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/llaughlin/subscriptions",
        "organizations_url": "https://api.github.com/users/llaughlin/orgs",
        "repos_url": "https://api.github.com/users/llaughlin/repos",
        "events_url": "https://api.github.com/users/llaughlin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/llaughlin/received_events",
        "type": "User"
      },
      "committer": {
        "login": "llaughlin",
        "id": 1325514,
        "avatar_url": "https://secure.gravatar.com/avatar/e2e8ea1aa36a140ceb008c3f219eac3e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
        "gravatar_id": "e2e8ea1aa36a140ceb008c3f219eac3e",
        "url": "https://api.github.com/users/llaughlin",
        "html_url": "https://github.com/llaughlin",
        "followers_url": "https://api.github.com/users/llaughlin/followers",
        "following_url": "https://api.github.com/users/llaughlin/following{/other_user}",
        "gists_url": "https://api.github.com/users/llaughlin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/llaughlin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/llaughlin/subscriptions",
        "organizations_url": "https://api.github.com/users/llaughlin/orgs",
        "repos_url": "https://api.github.com/users/llaughlin/repos",
        "events_url": "https://api.github.com/users/llaughlin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/llaughlin/received_events",
        "type": "User"
      },
      "parents": [
        {
          "sha": "d09d477368a0c38e21cecf06d156dbe13c89991d",
          "url": "https://api.github.com/repos/llaughlin/DemoApp/commits/d09d477368a0c38e21cecf06d156dbe13c89991d",
          "html_url": "https://github.com/llaughlin/DemoApp/commit/d09d477368a0c38e21cecf06d156dbe13c89991d"
        }
      ]
    }, {
      "sha": "d09d477368a0c38e21cecf06d156dbe13c89991d",
      "commit": {
        "author": {
          "name": "Logan Laughlin",
          "email": "loganlaughlin@gmail.com",
          "date": "2013-07-19T19:40:17Z"
        },
        "committer": {
          "name": "Logan Laughlin",
          "email": "loganlaughlin@gmail.com",
          "date": "2013-07-19T19:40:17Z"
        },
        "message": "Removed everything except Index, HomeController, and scripts and css.",
        "tree": {
          "sha": "720c2d86b2497e570e9a6122fe738d65a62533b9",
          "url": "https://api.github.com/repos/llaughlin/DemoApp/git/trees/720c2d86b2497e570e9a6122fe738d65a62533b9"
        },
        "url": "https://api.github.com/repos/llaughlin/DemoApp/git/commits/d09d477368a0c38e21cecf06d156dbe13c89991d",
        "comment_count": 0
      },
      "url": "https://api.github.com/repos/llaughlin/DemoApp/commits/d09d477368a0c38e21cecf06d156dbe13c89991d",
      "html_url": "https://github.com/llaughlin/DemoApp/commit/d09d477368a0c38e21cecf06d156dbe13c89991d",
      "comments_url": "https://api.github.com/repos/llaughlin/DemoApp/commits/d09d477368a0c38e21cecf06d156dbe13c89991d/comments",
      "author": {
        "login": "llaughlin",
        "id": 1325514,
        "avatar_url": "https://secure.gravatar.com/avatar/e2e8ea1aa36a140ceb008c3f219eac3e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
        "gravatar_id": "e2e8ea1aa36a140ceb008c3f219eac3e",
        "url": "https://api.github.com/users/llaughlin",
        "html_url": "https://github.com/llaughlin",
        "followers_url": "https://api.github.com/users/llaughlin/followers",
        "following_url": "https://api.github.com/users/llaughlin/following{/other_user}",
        "gists_url": "https://api.github.com/users/llaughlin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/llaughlin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/llaughlin/subscriptions",
        "organizations_url": "https://api.github.com/users/llaughlin/orgs",
        "repos_url": "https://api.github.com/users/llaughlin/repos",
        "events_url": "https://api.github.com/users/llaughlin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/llaughlin/received_events",
        "type": "User"
      },
      "committer": {
        "login": "llaughlin",
        "id": 1325514,
        "avatar_url": "https://secure.gravatar.com/avatar/e2e8ea1aa36a140ceb008c3f219eac3e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
        "gravatar_id": "e2e8ea1aa36a140ceb008c3f219eac3e",
        "url": "https://api.github.com/users/llaughlin",
        "html_url": "https://github.com/llaughlin",
        "followers_url": "https://api.github.com/users/llaughlin/followers",
        "following_url": "https://api.github.com/users/llaughlin/following{/other_user}",
        "gists_url": "https://api.github.com/users/llaughlin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/llaughlin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/llaughlin/subscriptions",
        "organizations_url": "https://api.github.com/users/llaughlin/orgs",
        "repos_url": "https://api.github.com/users/llaughlin/repos",
        "events_url": "https://api.github.com/users/llaughlin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/llaughlin/received_events",
        "type": "User"
      },
      "parents": [
        {
          "sha": "5064770c5c97742041a767d527b33ea8c4295e52",
          "url": "https://api.github.com/repos/llaughlin/DemoApp/commits/5064770c5c97742041a767d527b33ea8c4295e52",
          "html_url": "https://github.com/llaughlin/DemoApp/commit/5064770c5c97742041a767d527b33ea8c4295e52"
        }
      ]
    }, {
      "sha": "5064770c5c97742041a767d527b33ea8c4295e52",
      "commit": {
        "author": {
          "name": "Logan Laughlin",
          "email": "loganlaughlin@gmail.com",
          "date": "2013-07-19T19:28:57Z"
        },
        "committer": {
          "name": "Logan Laughlin",
          "email": "loganlaughlin@gmail.com",
          "date": "2013-07-19T19:28:57Z"
        },
        "message": "Initial Commit",
        "tree": {
          "sha": "1edd1c3179b3eb0fe9cbcb15fc7503ff81bda372",
          "url": "https://api.github.com/repos/llaughlin/DemoApp/git/trees/1edd1c3179b3eb0fe9cbcb15fc7503ff81bda372"
        },
        "url": "https://api.github.com/repos/llaughlin/DemoApp/git/commits/5064770c5c97742041a767d527b33ea8c4295e52",
        "comment_count": 0
      },
      "url": "https://api.github.com/repos/llaughlin/DemoApp/commits/5064770c5c97742041a767d527b33ea8c4295e52",
      "html_url": "https://github.com/llaughlin/DemoApp/commit/5064770c5c97742041a767d527b33ea8c4295e52",
      "comments_url": "https://api.github.com/repos/llaughlin/DemoApp/commits/5064770c5c97742041a767d527b33ea8c4295e52/comments",
      "author": {
        "login": "llaughlin",
        "id": 1325514,
        "avatar_url": "https://secure.gravatar.com/avatar/e2e8ea1aa36a140ceb008c3f219eac3e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
        "gravatar_id": "e2e8ea1aa36a140ceb008c3f219eac3e",
        "url": "https://api.github.com/users/llaughlin",
        "html_url": "https://github.com/llaughlin",
        "followers_url": "https://api.github.com/users/llaughlin/followers",
        "following_url": "https://api.github.com/users/llaughlin/following{/other_user}",
        "gists_url": "https://api.github.com/users/llaughlin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/llaughlin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/llaughlin/subscriptions",
        "organizations_url": "https://api.github.com/users/llaughlin/orgs",
        "repos_url": "https://api.github.com/users/llaughlin/repos",
        "events_url": "https://api.github.com/users/llaughlin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/llaughlin/received_events",
        "type": "User"
      },
      "committer": {
        "login": "llaughlin",
        "id": 1325514,
        "avatar_url": "https://secure.gravatar.com/avatar/e2e8ea1aa36a140ceb008c3f219eac3e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
        "gravatar_id": "e2e8ea1aa36a140ceb008c3f219eac3e",
        "url": "https://api.github.com/users/llaughlin",
        "html_url": "https://github.com/llaughlin",
        "followers_url": "https://api.github.com/users/llaughlin/followers",
        "following_url": "https://api.github.com/users/llaughlin/following{/other_user}",
        "gists_url": "https://api.github.com/users/llaughlin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/llaughlin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/llaughlin/subscriptions",
        "organizations_url": "https://api.github.com/users/llaughlin/orgs",
        "repos_url": "https://api.github.com/users/llaughlin/repos",
        "events_url": "https://api.github.com/users/llaughlin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/llaughlin/received_events",
        "type": "User"
      },
      "parents": [
        {
          "sha": "7ab97fdf8994fd178c0f17dd0fb34ee93dea7046",
          "url": "https://api.github.com/repos/llaughlin/DemoApp/commits/7ab97fdf8994fd178c0f17dd0fb34ee93dea7046",
          "html_url": "https://github.com/llaughlin/DemoApp/commit/7ab97fdf8994fd178c0f17dd0fb34ee93dea7046"
        }
      ]
    }, {
      "sha": "7ab97fdf8994fd178c0f17dd0fb34ee93dea7046",
      "commit": {
        "author": {
          "name": "Logan Laughlin",
          "email": "loganlaughlin@gmail.com",
          "date": "2013-07-19T18:54:19Z"
        },
        "committer": {
          "name": "Logan Laughlin",
          "email": "loganlaughlin@gmail.com",
          "date": "2013-07-19T18:54:19Z"
        },
        "message": "Initial commit to add default .gitIgnore and .gitAttribute files.",
        "tree": {
          "sha": "cf90900df56ab45a95f4c608ac6038485041c6c3",
          "url": "https://api.github.com/repos/llaughlin/DemoApp/git/trees/cf90900df56ab45a95f4c608ac6038485041c6c3"
        },
        "url": "https://api.github.com/repos/llaughlin/DemoApp/git/commits/7ab97fdf8994fd178c0f17dd0fb34ee93dea7046",
        "comment_count": 0
      },
      "url": "https://api.github.com/repos/llaughlin/DemoApp/commits/7ab97fdf8994fd178c0f17dd0fb34ee93dea7046",
      "html_url": "https://github.com/llaughlin/DemoApp/commit/7ab97fdf8994fd178c0f17dd0fb34ee93dea7046",
      "comments_url": "https://api.github.com/repos/llaughlin/DemoApp/commits/7ab97fdf8994fd178c0f17dd0fb34ee93dea7046/comments",
      "author": {
        "login": "llaughlin",
        "id": 1325514,
        "avatar_url": "https://secure.gravatar.com/avatar/e2e8ea1aa36a140ceb008c3f219eac3e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
        "gravatar_id": "e2e8ea1aa36a140ceb008c3f219eac3e",
        "url": "https://api.github.com/users/llaughlin",
        "html_url": "https://github.com/llaughlin",
        "followers_url": "https://api.github.com/users/llaughlin/followers",
        "following_url": "https://api.github.com/users/llaughlin/following{/other_user}",
        "gists_url": "https://api.github.com/users/llaughlin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/llaughlin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/llaughlin/subscriptions",
        "organizations_url": "https://api.github.com/users/llaughlin/orgs",
        "repos_url": "https://api.github.com/users/llaughlin/repos",
        "events_url": "https://api.github.com/users/llaughlin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/llaughlin/received_events",
        "type": "User"
      },
      "committer": {
        "login": "llaughlin",
        "id": 1325514,
        "avatar_url": "https://secure.gravatar.com/avatar/e2e8ea1aa36a140ceb008c3f219eac3e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
        "gravatar_id": "e2e8ea1aa36a140ceb008c3f219eac3e",
        "url": "https://api.github.com/users/llaughlin",
        "html_url": "https://github.com/llaughlin",
        "followers_url": "https://api.github.com/users/llaughlin/followers",
        "following_url": "https://api.github.com/users/llaughlin/following{/other_user}",
        "gists_url": "https://api.github.com/users/llaughlin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/llaughlin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/llaughlin/subscriptions",
        "organizations_url": "https://api.github.com/users/llaughlin/orgs",
        "repos_url": "https://api.github.com/users/llaughlin/repos",
        "events_url": "https://api.github.com/users/llaughlin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/llaughlin/received_events",
        "type": "User"
      },
      "parents": []
    }
  ];

  window.fileData = {
    "sha": "7ab97fdf8994fd178c0f17dd0fb34ee93dea7046",
    "commit": {
      "author": {
        "name": "Logan Laughlin",
        "email": "loganlaughlin@gmail.com",
        "date": "2013-07-19T18:54:19Z"
      },
      "committer": {
        "name": "Logan Laughlin",
        "email": "loganlaughlin@gmail.com",
        "date": "2013-07-19T18:54:19Z"
      },
      "message": "Initial commit to add default .gitIgnore and .gitAttribute files.",
      "tree": {
        "sha": "cf90900df56ab45a95f4c608ac6038485041c6c3",
        "url": "https://api.github.com/repos/llaughlin/DemoApp/git/trees/cf90900df56ab45a95f4c608ac6038485041c6c3"
      },
      "url": "https://api.github.com/repos/llaughlin/DemoApp/git/commits/7ab97fdf8994fd178c0f17dd0fb34ee93dea7046",
      "comment_count": 0
    },
    "url": "https://api.github.com/repos/llaughlin/DemoApp/commits/7ab97fdf8994fd178c0f17dd0fb34ee93dea7046",
    "html_url": "https://github.com/llaughlin/DemoApp/commit/7ab97fdf8994fd178c0f17dd0fb34ee93dea7046",
    "comments_url": "https://api.github.com/repos/llaughlin/DemoApp/commits/7ab97fdf8994fd178c0f17dd0fb34ee93dea7046/comments",
    "author": {
      "login": "llaughlin",
      "id": 1325514,
      "avatar_url": "https://secure.gravatar.com/avatar/e2e8ea1aa36a140ceb008c3f219eac3e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
      "gravatar_id": "e2e8ea1aa36a140ceb008c3f219eac3e",
      "url": "https://api.github.com/users/llaughlin",
      "html_url": "https://github.com/llaughlin",
      "followers_url": "https://api.github.com/users/llaughlin/followers",
      "following_url": "https://api.github.com/users/llaughlin/following{/other_user}",
      "gists_url": "https://api.github.com/users/llaughlin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/llaughlin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/llaughlin/subscriptions",
      "organizations_url": "https://api.github.com/users/llaughlin/orgs",
      "repos_url": "https://api.github.com/users/llaughlin/repos",
      "events_url": "https://api.github.com/users/llaughlin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/llaughlin/received_events",
      "type": "User"
    },
    "committer": {
      "login": "llaughlin",
      "id": 1325514,
      "avatar_url": "https://secure.gravatar.com/avatar/e2e8ea1aa36a140ceb008c3f219eac3e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
      "gravatar_id": "e2e8ea1aa36a140ceb008c3f219eac3e",
      "url": "https://api.github.com/users/llaughlin",
      "html_url": "https://github.com/llaughlin",
      "followers_url": "https://api.github.com/users/llaughlin/followers",
      "following_url": "https://api.github.com/users/llaughlin/following{/other_user}",
      "gists_url": "https://api.github.com/users/llaughlin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/llaughlin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/llaughlin/subscriptions",
      "organizations_url": "https://api.github.com/users/llaughlin/orgs",
      "repos_url": "https://api.github.com/users/llaughlin/repos",
      "events_url": "https://api.github.com/users/llaughlin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/llaughlin/received_events",
      "type": "User"
    },
    "parents": [],
    "stats": {
      "total": 217,
      "additions": 217,
      "deletions": 0
    },
    "files": [
      {
        "sha": "1ff0c423042b46cb1d617b81efb715defbe8054d",
        "filename": ".gitattributes",
        "status": "added",
        "additions": 63,
        "deletions": 0,
        "changes": 63,
        "blob_url": "https://github.com/llaughlin/DemoApp/blob/7ab97fdf8994fd178c0f17dd0fb34ee93dea7046/.gitattributes",
        "raw_url": "https://github.com/llaughlin/DemoApp/raw/7ab97fdf8994fd178c0f17dd0fb34ee93dea7046/.gitattributes",
        "contents_url": "https://api.github.com/repos/llaughlin/DemoApp/contents/.gitattributes?ref=7ab97fdf8994fd178c0f17dd0fb34ee93dea7046",
        "patch": "@@ -0,0 +1,63 @@\n+###############################################################################\n+# Set default behavior to automatically normalize line endings.\n+###############################################################################\n+* text=auto\n+\n+###############################################################################\n+# Set default behavior for command prompt diff.\n+#\n+# This is need for earlier builds of msysgit that does not have it on by\n+# default for csharp files.\n+# Note: This is only used by command line\n+###############################################################################\n+#*.cs     diff=csharp\n+\n+###############################################################################\n+# Set the merge driver for project and solution files\n+#\n+# Merging from the command prompt will add diff markers to the files if there\n+# are conflicts (Merging from VS is not affected by the settings below, in VS\n+# the diff markers are never inserted). Diff markers may cause the following \n+# file extensions to fail to load in VS. An alternative would be to treat\n+# these files as binary and thus will always conflict and require user\n+# intervention with every merge. To do so, just uncomment the entries below\n+###############################################################################\n+#*.sln       merge=binary\n+#*.csproj    merge=binary\n+#*.vbproj    merge=binary\n+#*.vcxproj   merge=binary\n+#*.vcproj    merge=binary\n+#*.dbproj    merge=binary\n+#*.fsproj    merge=binary\n+#*.lsproj    merge=binary\n+#*.wixproj   merge=binary\n+#*.modelproj merge=binary\n+#*.sqlproj   merge=binary\n+#*.wwaproj   merge=binary\n+\n+###############################################################################\n+# behavior for image files\n+#\n+# image files are treated as binary by default.\n+###############################################################################\n+#*.jpg   binary\n+#*.png   binary\n+#*.gif   binary\n+\n+###############################################################################\n+# diff behavior for common document formats\n+# \n+# Convert binary document formats to text before diffing them. This feature\n+# is only available from the command line. Turn it on by uncommenting the \n+# entries below.\n+###############################################################################\n+#*.doc   diff=astextplain\n+#*.DOC   diff=astextplain\n+#*.docx  diff=astextplain\n+#*.DOCX  diff=astextplain\n+#*.dot   diff=astextplain\n+#*.DOT   diff=astextplain\n+#*.pdf   diff=astextplain\n+#*.PDF   diff=astextplain\n+#*.rtf   diff=astextplain\n+#*.RTF   diff=astextplain"
      }, {
        "sha": "31a08b732b9f91b05d5f102a16d236cfb3c89570",
        "filename": ".gitignore",
        "status": "added",
        "additions": 154,
        "deletions": 0,
        "changes": 154,
        "blob_url": "https://github.com/llaughlin/DemoApp/blob/7ab97fdf8994fd178c0f17dd0fb34ee93dea7046/.gitignore",
        "raw_url": "https://github.com/llaughlin/DemoApp/raw/7ab97fdf8994fd178c0f17dd0fb34ee93dea7046/.gitignore",
        "contents_url": "https://api.github.com/repos/llaughlin/DemoApp/contents/.gitignore?ref=7ab97fdf8994fd178c0f17dd0fb34ee93dea7046",
        "patch": "@@ -0,0 +1,154 @@\n+## Ignore Visual Studio temporary files, build results, and\n+## files generated by popular Visual Studio add-ons.\n+\n+# User-specific files\n+*.suo\n+*.user\n+*.sln.docstates\n+\n+# Build results\n+\n+[Dd]ebug/\n+[Rr]elease/\n+x64/\n+build/\n+[Bb]in/\n+[Oo]bj/\n+\n+# MSTest test Results\n+[Tt]est[Rr]esult*/\n+[Bb]uild[Ll]og.*\n+\n+*_i.c\n+*_p.c\n+*.ilk\n+*.meta\n+*.obj\n+*.pch\n+*.pdb\n+*.pgc\n+*.pgd\n+*.rsp\n+*.sbr\n+*.tlb\n+*.tli\n+*.tlh\n+*.tmp\n+*.tmp_proj\n+*.log\n+*.vspscc\n+*.vssscc\n+.builds\n+*.pidb\n+*.log\n+*.scc\n+\n+# Visual C++ cache files\n+ipch/\n+*.aps\n+*.ncb\n+*.opensdf\n+*.sdf\n+*.cachefile\n+\n+# Visual Studio profiler\n+*.psess\n+*.vsp\n+*.vspx\n+\n+# Guidance Automation Toolkit\n+*.gpState\n+\n+# ReSharper is a .NET coding add-in\n+_ReSharper*/\n+*.[Rr]e[Ss]harper\n+\n+# TeamCity is a build add-in\n+_TeamCity*\n+\n+# DotCover is a Code Coverage Tool\n+*.dotCover\n+\n+# NCrunch\n+*.ncrunch*\n+.*crunch*.local.xml\n+\n+# Installshield output folder\n+[Ee]xpress/\n+\n+# DocProject is a documentation generator add-in\n+DocProject/buildhelp/\n+DocProject/Help/*.HxT\n+DocProject/Help/*.HxC\n+DocProject/Help/*.hhc\n+DocProject/Help/*.hhk\n+DocProject/Help/*.hhp\n+DocProject/Help/Html2\n+DocProject/Help/html\n+\n+# Click-Once directory\n+publish/\n+\n+# Publish Web Output\n+*.Publish.xml\n+*.pubxml\n+\n+# NuGet Packages Directory\n+## TODO: If you have NuGet Package Restore enabled, uncomment the next line\n+#packages/\n+\n+# Windows Azure Build Output\n+csx\n+*.build.csdef\n+\n+# Windows Store app package directory\n+AppPackages/\n+\n+# Others\n+sql/\n+*.Cache\n+ClientBin/\n+[Ss]tyle[Cc]op.*\n+~$*\n+*~\n+*.dbmdl\n+*.[Pp]ublish.xml\n+*.pfx\n+*.publishsettings\n+\n+# RIA/Silverlight projects\n+Generated_Code/\n+\n+# Backup & report files from converting an old project file to a newer\n+# Visual Studio version. Backup files are not needed, because we have git ;-)\n+_UpgradeReport_Files/\n+Backup*/\n+UpgradeLog*.XML\n+UpgradeLog*.htm\n+\n+# SQL Server files\n+App_Data/*.mdf\n+App_Data/*.ldf\n+\n+\n+#LightSwitch generated files\n+GeneratedArtifacts/\n+_Pvt_Extensions/\n+ModelManifest.xml\n+\n+# =========================\n+# Windows detritus\n+# =========================\n+\n+# Windows image file caches\n+Thumbs.db\n+ehthumbs.db\n+\n+# Folder config file\n+Desktop.ini\n+\n+# Recycle Bin used on file shares\n+$RECYCLE.BIN/\n+\n+# Mac desktop service store files\n+.DS_Store"
      }
    ]
  };

}).call(this);
