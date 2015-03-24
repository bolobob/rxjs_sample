function ViewModel() {
  this.email = observable();
}

function observable() {

}

function bindViewModel(viewModel) {

}

var viewModel = new ViewModel();
bindViewModel(viewModel);
viewModel.email('aokishinichi@gmail.com');
