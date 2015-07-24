var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var ActionTypes = AppConstants.ActionTypes;
var util = require('utils/util');

var SomeActions = {
  loadSomething:function(param) {
    var requestKey = util.requestKey([param]);
    AppDispatcher.dispatch({
      type: ActionTypes.LOAD_SOMETHING,
      param: param,
      requestKey: requestKey,
    });
    return requestKey;
  }
};

module.exports = SomeActions;
