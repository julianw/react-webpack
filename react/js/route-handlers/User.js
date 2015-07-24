let React = require('react');
let Link = require('react-router').Link;

let User = React.createClass({
  render:function() {
    return (
      <div>
        <h1>User page</h1>
        <Link to="index">back to index</Link>
      </div>
    );
  }
});

module.exports = User;
