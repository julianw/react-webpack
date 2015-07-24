let React = require('react');
let Router = require('react-router');
let Link = Router.Link;
let RouteHandler = Router.RouteHandler;

let Base = React.createClass({
  componentDidMount:function() {
  },
  render:function() {
    return (
      <div>
        <div>Something share for all pages, remove this if there nothing to share <img src="http://media.giphy.com/media/r8vTEpDVsy3xC/giphy.gif" /> across all pages</div>
        <Link to="index">to index</Link><br/>
        <Link to="user">to user</Link>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = Base;
