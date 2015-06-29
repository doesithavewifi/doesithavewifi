var React = require('react');


module.exports = React.createClass({
  render: function() {    
    return (
      <header className="header">
        <div className="logo-wrapper">
          <h1 className="logo">Does it have Wifi?</h1>
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
