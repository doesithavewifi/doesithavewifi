var React = require('react');

module.exports = React.createClass({

  render: function() {   
    return (
      <h2 className="section-header">
        {this.props.children}
      </h2>
    );    
  },
});

