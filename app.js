Rx.Observable.from([1, 2, 3])
             .filter(function(n) { return n % 2 === 1; })
             .subscribe(function(n) { console.log(n); });
