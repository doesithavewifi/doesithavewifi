var React = require('react');


var Icon = require('./icon');



module.exports = React.createClass({
    propTypes: {
      stars : React.PropTypes.number,
      rating : React.PropTypes.number,
      fullIcon : React.PropTypes.string,
      halfIcon : React.PropTypes.string,
      emptyIcon : React.PropTypes.string,
    },

    getDefaultProps: function() {
      return {
        stars: 5,
        rating: 0,
        fullIcon: 'full-star',
        halfIcon: 'half-star',
        emptyIcon : 'empty-star',
      };
    },


    //Sci-Fi nerds will know about star maker!
    starMaker: function (jsxArray, noOfStars, rating) {

        if(noOfStars <= 0){
            return jsxArray;
        }

        else if (rating == 0.5){
            jsxArray.push(
                <Icon name={this.props.halfIcon} />
            );

            return jsxArray;
        }

        else if(rating >= noOfStars) {
            jsxArray.push(
                <Icon name={this.props.fullIcon} />
            );
            
            return this.starMaker(jsxArray, (noOfStars - 1), rating)
        }

        else{
            if((rating - noOfStars) == -0.5){
                jsxArray.push(
                    <Icon name={this.props.halfIcon} />
                );
            } else {
                jsxArray.push(
                    <Icon name={this.props.fullIcon} />
                );
            }

            return this.starMaker(jsxArray, (noOfStars - 1), rating)
        }
    },


    render: function () {
        var starRating = this.starMaker([] , this.props.stars , this.props.rating );

        return (
            <div className="star-rating">
              {starRating}
            </div>
        );


    }

});

