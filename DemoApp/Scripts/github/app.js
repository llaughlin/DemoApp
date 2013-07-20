﻿(function() {
  var ViewModel;

  ViewModel = function() {
    var self;
    self = this;
    self.repoName = ko.observable("llaughlin/demoapp");
    self.commits = ko.observableArray([
      {
        commit: {
          message: "First Commit"
        },
        committer: {
          login: "llaughlin"
        },
        timestamp: "2h",
        sha: ko.observable("123")
      }, {
        commit: {
          message: "Second Commit"
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
      return console.log(commit);
    };
    return this;
  };

  $(function() {
    window.viewModel = new ViewModel();
    ko.applyBindings(viewModel);
    return $('.commitFiles.collapse').on('show', function() {});
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

}).call(this);
