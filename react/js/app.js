var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var style = require('../css/style.less');


Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, document.body);
});
