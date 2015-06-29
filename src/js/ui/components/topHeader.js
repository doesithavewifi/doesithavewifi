var React = require('react');


module.exports = React.createClass({
  render: function() {    
    return (
      <header>
        <h1>Does it have Wifi?</h1>
        <span className="dropdown">Taipei</span>
        <nav>
          <ul>
            <li>Listing</li>
            <li>Map</li>
          </ul>
        </nav>
      </header>
    );    
  },
});
