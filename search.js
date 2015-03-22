$(function() {
var inputStream = Rx.Observable.fromEvent($('#query'), 'input')
                  .map(function(e) {
                    return e.target.value;
                  })
var queryStream = inputStream
                  .throttle(300)
                  .filter(function(text) { return text.length > 0; })
                  .distinctUntilChanged()
                  .map(function(text) {
                    return 'http://api.github.com/search/repositories?q=' + text;
                  });
var repositoriesStream = queryStream
                         .flatMap(function(query) {
                           var promise = $.ajax({url: query});
                           return Rx.Observable.fromPromise(promise);
                         })
                         .map(function(res) {
                           return res.items;
                         });
repositoriesStream.subscribe(function(repos) {
  console.log(repos);
});
});
