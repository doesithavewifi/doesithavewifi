var React = require('react');
var Link = require('react-router').Link;

var Logo = require('./logo');

module.exports = React.createClass({
  render: function() {    
    return (
      <header className="header">
        <div className="logo-wrapper">
          <Logo />
          <span className="dropdown">Taipei</span>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="about">About</Link></li>
          </ul>
        </nav>
      </header>
    );    
  },
});
