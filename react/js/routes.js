let React = require('react');
let Router = require('react-router');
let Route = Router.Route;
let Base = require('route-handlers/Base');
let Index = require('route-handlers/Index');
let User = require('route-handlers/User');

let routes = (
  <Route handler={Base}>
    <Route name="index" path="index/?" handle={Index} />
    <Route name="user" path="user/?" handler={User} />
    <Route name="missing" path="*" handler={Index} />
  </Route>
);

module.exports = routes;
