var subject = new Rx.Subject();
subject.subscribe(function(n) {
  console.log(n);
}, null, function() {
           console.log('completed');
         });

subject.onNext(1);
subject.onNext(2);
subject.onCompleted();
