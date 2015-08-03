var React = require('react');



module.exports = React.createClass({
  render: function() {  
    return (
      <div className="overlay-modal">
        {this.props.children}
      </div>
    );
  },

});
