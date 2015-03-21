var stream1 = Rx.Observable.from([1, null, null, 2, 3])
              .filter(function(n) { return n != null; });
var stream2 = Rx.Observable.from([null, 10, 20, null, null, 30])
              .filter(function(n) { return n != null; });
Rx.Observable.combineLatest(stream1, stream2, function(n1, n2) {
  return n1 + n2;
})
.subscribe(function(n) { console.log(n); });
