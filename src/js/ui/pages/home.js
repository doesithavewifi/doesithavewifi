var React = require('react');

var ItemList = require('../components/itemList'),
  Logo = require('../components/logo');



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
      <ItemList items={this.props.database} />
    );    
  },
});
