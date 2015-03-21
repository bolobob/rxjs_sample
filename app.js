Rx.Observable.from([1, 2, 3])
             .filter(function(n) { return n % 2 === 1; })
             .subscribe(function(n) { console.log(n); });

Rx.Observable.fromEvent(document, 'click')
             .throttle(250)
             .subscribe(function(n) { console.log(n); });

// merge
var stream1 = Rx.Observable.from([1, 2, 3, 4, 5]);
var stream2 = Rx.Observable.from([10, 20, 30]);
Rx.Observable.merge(stream1, stream2)
             .subscribe(function(n) { console.log(n); });


