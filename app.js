Rx.Observable.from([1, 2, 3])
             .map(function(n) { return 2 * n; })
             .subscribe(function(n) { console.log(n); });
