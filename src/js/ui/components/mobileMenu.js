var React = require('react'),
    Classnames = require('classnames');

var OverlayModal = require('./overlayModal');


module.exports = React.createClass({
  render: function() {
    var classes = Classnames({
      'mobile-menu': true,
      'show': this.props.show
    });
    return (
      <OverlayModal show={this.props.show} 
          onClick={this.props.toggleMobileMenu}
          bgColor="transparent">
        <div className={classes} >
          <ul>
            <li>
              <a href="#" onClick={this.props.toggleAbout}>About</a>
            </li>
          </ul>
        </div>
      </OverlayModal>
    );    
  },
});
