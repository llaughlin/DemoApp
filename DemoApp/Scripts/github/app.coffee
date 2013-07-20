

ViewModel = -> 
    self = this
    self.repoName = ko.observable("llaughlin/demoapp")
    self.commits = ko.observableArray()
    ###[
            {commit:{message: "First Commit"}, 
            committer:{login: "llaughlin"}, sha: ko.observable("123")}
    ]###
    #)
    
    
    self.getCommits = ->
        #console.log("Getting commits")
        url = "https://api.github.com/repos/" + self.repoName() + "/commits"
       # mapping = 'commit': {create: -> (new -> this.files = ko.observableArray())}
        $.get(url)
        .done((data) =>
            #console.log(data)
            $.each(data, (i, elem) ->
                $.extend(elem.commit, {files: ko.observableArray()})
            )
            ko.mapping.fromJS(data, {}, self.commits)
        )
        #ko.mapping.fromJS(window.commitData, {}, self.commits)

    self.getFiles = (commit) -> 
        #console.log(commit)
        if not commit.commit.files.length
            url = "https://api.github.com/repos/" + self.repoName() + "/commits/" + commit.sha()
            ###$.get(url)
            .done((data) =>
                console.log("GitHub data", data)
                ko.mapping.fromJS(data, {}, commit.commit)
                console.log("KO Commit", ko.toJS(commit.commit))
            )###
            console.log("GitHub data", window.fileData)
            ko.mapping.fromJS(window.fileData, {}, commit.commit)
            console.log("KO Commit", commit.commit)
    return @
 

$( ->

    window.viewModel = new ViewModel()
    ko.applyBindings(viewModel)

    
)
