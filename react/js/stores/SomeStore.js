var AppDispatcher = require('dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('constants/AppConstants');
var ActionTypes = AppConstants.ActionTypes;
var util = require('utils/util');

var _someData = {};
var _loading = {};

var EventTypes = AppConstants.SomeStore.EventTypes;

var ReportStore = Object.assign({}, EventEmitter.prototype, {
  loadReportData: function(param, requestKey) {
    var that = this;
    if ( _someData[requestKey] ) {
      setTimeout(function() {
        // BUG: if event is emitted immediately, setState in component will have problem. React.addons.update cannot $set a key in state but will always overwrite the entire object with the last key
        that.emit(EventTypes.DATA_LOADED, {param:param, requestKey:requestKey, data:_someData[requestKey]});
      },1);
    } else if ( !_loading[requestKey] ) {
      _loading[requestKey] = true;

      /*
      var promise = $.ajax({
        url:'/api/dataType/' + id,
        type:'get',
        data:param
      });
      promise.done(function(json) {
        _loading[requestKey] = false;
        _reportData[requestKey] = json;
        that.emit(EventTypes.DATA_LOADED, {id:id, param:param, requestKey:requestKey, data:_reportData[requestKey]});
      });
      */

      // fake a async call
      setTimeout(function() {
        _someData[requestKey] = {foo:'bar', hello:'world'};
        _loading[requestKey] = false;
        that.emit(EventTypes.DATA_LOADED, {param:param, requestKey:requestKey, data:_someData[requestKey]});
      },2000);
    }
  },
});

AppDispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.LOAD_SOMETHING:
      SomeStore.loadSOMETHING(action.param, action.requestKey);
      break;
  }
});

module.exports = SomeStore;
