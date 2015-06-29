var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function() {    
    return (
      <header className="header">
        <div className="logo-wrapper">
          <Link to="home">
            <h1 className="logo">Does it have Wifi?</h1>
          </Link>
          <span className="dropdown">Taipei</span>
        </div>
        <nav className="main-nav">
          <ul>
            <li>Listing</li>
            <li>Map</li>
          </ul>
        </nav>
      </header>
    );    
  },
});
