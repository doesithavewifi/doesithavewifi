var React = require('react');

var Icon = require('./icon');


module.exports = React.createClass({
  propTypes: {
    stars : React.PropTypes.number,
    rating : React.PropTypes.number,
    fullIcon : React.PropTypes.string,
    halfIcon : React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      stars: 5,
      rating: 0,
      fullIcon: 'full-star',
      halfIcon: 'half-star',
    };
  },


  //Sci-Fi nerds will know about star maker!
  starMaker: function (totalStars, rating) {
    var ret = [];

    while (0 < rating) {
      if (0.5 === rating) {
        ret.push(
          <Icon name={this.props.halfIcon} />
        );
      } else {
        ret.push(
          <Icon name={this.props.fullIcon} />
        );        
      }

      rating--;
    }

    return ret;
  },


  render: function () {
    var starIcons = this.starMaker(this.props.stars, this.props.rating );

    return (
        <div className="star-rating" data-rating={this.props.rating}>
          {starIcons}
        </div>
    );
  }
});

