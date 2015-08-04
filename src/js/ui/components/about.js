var React = require('react');
var Classnames = require('classnames');

module.exports = React.createClass({
  render: function() {
    var classes = Classnames({
      'show': this.props.show
    });

    var classesOverlay = Classnames({
      'overlay': true,
      'show': this.props.show
    });

    return (
      <div className={classes} >
        <div className="about-popup">
          <h2>About this project</h2>
          <p>
            Does it have Wifi is a project to document all the working cafes in a city. The team behind Does it have wifi are all based in Taiwan and predominantly work from home or cafes, but finding cafes with the right environment for working is difficult. Does it have wifi makes it easy for you to find those cafes.
          </p>
          <p>
            By <a href="https://twitter.com/Jef_Lau">@Jef_Lau</a>, <a href="https://twitter.com/hiddentao">@hiddentao</a> and <a href="https://twitter.com/leemanrolls">@leemanrolls</a>.
          </p>
        </div>
        <div className={classesOverlay} onClick={this.props.toggleAbout}></div>
      </div>
    );    
  },
});
