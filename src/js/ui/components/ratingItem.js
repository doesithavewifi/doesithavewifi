var React = require('react');

module.exports = React.createClass({

  render: function() {    
    return (
      <div className="rating-item">
        <h3>{this.props.title}</h3><p>{this.props.value}</p>
      </div>
    );    
  },
});



