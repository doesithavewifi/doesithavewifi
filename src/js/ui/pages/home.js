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
    if (this.props.database) {
      return (
        <div>
          <ItemList items={this.props.database} />
        </div>
      );    
    } else {
      return (
        <div>Not yet loaded!</div>
      );
    }
  },
});
