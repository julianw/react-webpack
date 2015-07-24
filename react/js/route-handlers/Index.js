let React = require('react');
let Link = require('react-router').Link;

let Index = React.createClass({
  render:function() {
    return (
      <div>
        <h1>react webpack index</h1>
        <Link to="user"> to User page</Link>
      </div>
    );
  }
});

module.exports = Index;
