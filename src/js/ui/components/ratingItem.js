var React = require('react');

var Star = require('./stars');

module.exports = React.createClass({

  render: function() {
    var rating;
    if(typeof this.props.value === "number") {
      rating = <Star rating={this.props.value} />
    } else if(typeof this.props.value === "string") {
      rating = <p>{this.props.value}</p>
    }
    return (
      <div className="rating-item">
        <h3 class="rating-item-title">{this.props.title}</h3>
        <div className="rating-item-value">
          {rating}
        </div>
      </div>
    );    
  },
});



