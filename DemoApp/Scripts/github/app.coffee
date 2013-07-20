commitModel = (data) ->
    ko.mapping.fromJS(data, {}, this)

    @files = ko.observableArray()
    return

fileModel = (data) ->
    ko.mapping.fromJS(data, {}, this)

    @badgeStatus = ko.computed(->
        switch @status()
            when 'added' then 'badge badge-success'
            when 'modified' then 'badge badge-info'
            when 'removed' then 'badge badge-important'
            else 'badge'
    , this)
    return

ViewModel = -> 
    self = this
    self.repoName = ko.observable("llaughlin/demoapp")
    self.commits = ko.observableArray()
    
    self.getCommits = ->
        url = "https://api.github.com/repos/" + self.repoName() + "/commits"
        $.get(url)
        .done((data) =>
            mapping = {
                'commit' : {
                    create: (options) -> new commitModel(options.data)}
            }

            ko.mapping.fromJS(data, mapping, self.commits)
        )

    self.getFiles = (commit) -> 
        if not commit.commit.files.length
            url = "https://api.github.com/repos/" + self.repoName() + "/commits/" + commit.sha()
            $.get(url)
            .done((data) ->
                mapping = {
                    'files': {
                        create: (options) -> new fileModel(options.data)
                    }
                }

                ko.mapping.fromJS(data, mapping, commit.commit)
            )
    return @
 
$( ->
    window.viewModel = new ViewModel()
    ko.applyBindings(viewModel)
)
