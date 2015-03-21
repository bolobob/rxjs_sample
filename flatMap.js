var stream1 = Rx.Observable.from([10, 20, 30]);
var stream2 = function(n) {
  return Rx.Observable.from([n+1, n+2, n+3]);
};

stream1.flatMap(function(n) { return stream2(n); })
.subscribe(function(n) { console.log(n); });
