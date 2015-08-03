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
          <h2>About Does it have Wifi</h2>
          <p>
            Does it have Wifi is a project to document all the working cafes in a city. The team behind Does it have wifi are all based in Taiwan and predominantly work from home or cafes, but finding cafes with the right environment for working is difficult. We want to make it easier for remote workers everywhere to work from a cafe that has great wifi, decent drinks and plug sockets for your devices.
          </p>
        </div>
        <div className={classesOverlay} onClick={this.props.toggleAbout}></div>
      </div>
    );    
  },
});
