var React = require('react');

//Sci-Fi nerds will know about star maker!
function starMaker(jsxArray, noOfStars, rating){

    if(noOfStars <= 0){
        return jsxArray;
    }

    else if (rating == 0.5){
        jsxArray.push(<div>Half a star</div>)
        return jsxArray;
    }

    else if(rating >= noOfStars) {
        jsxArray.push(<div>Star</div>)
        return starMaker(jsxArray, (noOfStars - 1), rating)
    }

    else{
        if((rating - noOfStars) == -0.5){
            jsxArray.push(<div>Half a star</div>)
        }else{
            jsxArray.push(<div>Empty Star</div>)
        }
        return starMaker(jsxArray, (noOfStars - 1), rating)
    }
}

module.exports = React.createClass({

    render: function () {
        var starRating = starMaker([] , this.props.stars , this.props.rating );

        return (
            <div>
                <p> Hi there </p>
              {starRating}
            </div>
        );


    }

});

