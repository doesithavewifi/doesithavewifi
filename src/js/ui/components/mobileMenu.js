var React = require('react'),
    Classnames = require('classnames');

var OverlayModal = require('./overlayModal'),
    Router = require('react-router'),
    Link = Router.Link,
    Navigation = Router.Navigation;

var Constants = require('../../constants');



module.exports = React.createClass({
  mixins: [Navigation],

  _openAbout: function(event){
    this.props.toggleMobileMenu(event);
    this.props.toggleAbout(event);
  },

  _openHome: function(event){
    this.props.toggleMobileMenu(event);
    this.transitionTo('home');
  },
  _closeMenu: function(event){
    this.props.toggleMobileMenu(event);
  },
  render: function() {
    var classes = Classnames({
      'mobile-menu': true,
      'show': this.props.show
    });
    return (
      <div className={classes} >
        <a href="#" className="close" onClick={this._closeMenu}></a>
        <ul>
          <li>
            <a href="#" onClick={this._openHome}>Cafes</a>
          </li>
          <li>
            <a href={Constants.ADD_FORM_URL} target="_blank">Add Cafe</a>
          </li>
          <li>
            <a href="#" onClick={this._openAbout}>About</a>
          </li>
        </ul>
      </div>
    );    
  },
});
