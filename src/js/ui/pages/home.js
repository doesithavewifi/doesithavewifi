var React = require('react');

var ItemList = require('../components/itemList'),
  Logo = require('../components/logo'),
  Hero = require('../components/hero');

var heroUrl = "/img/header.jpg",
  title = "Find the best cafes to work in your city";

module.exports = React.createClass({
  propTypes: {
    database : React.PropTypes.array,
  },

  getDefaultProps: function() {
    return {
      database: null,
    };
  },

  render: function() {    
    return (
      <div className="home">
        <Hero heroUrl={heroUrl} title={title} />
        <ItemList items={this.props.database} />
      </div>
    );    
  },
});
