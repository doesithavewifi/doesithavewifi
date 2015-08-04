var React = require('react'),
  Classnames = require('classnames');



module.exports = React.createClass({
  propTypes: {
    show: React.PropTypes.bool,
    onClick: React.PropTypes.onClick,
    bgColor: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      show: false,
      bgColor: null,
      onClick: null,
    };
  },

  render: function() {  
    var classes = Classnames({
      'overlay-modal': true,
      'show': this.props.show,
    });

    var style = {};
    if (this.props.bgColor) {
      style.backgroundColor = this.props.bgColor;
    }

    return (
      <div className={classes} onClick={this.props.onClick} style={style}>
        {this.props.children}
      </div>
    );
  },

});
