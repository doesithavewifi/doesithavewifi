var React = require('react');


module.exports = React.createClass({
  propTypes: {
    item : React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      item: {},
    };
  },

  render: function() {    
    return (
      <div className="item">
        item here
      </div>
    );    
  },
});
