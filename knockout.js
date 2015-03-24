function ViewModel() {
  this.email = observable();
}

function observable() {
  var value;
  var observable = function(newValue) {
    if (typeof(newValue) === 'undefined') {
      return value;
    } else {
      value = newValue;
      observable.valueChanged();
    }
  };
  observable.valueChanged = function() {
    observable['subscriber'](value);
  }

  return observable;
}

function bindViewModel(viewModel) {

}

var viewModel = new ViewModel();
bindViewModel(viewModel);
viewModel.email('aokishinichi@gmail.com');
