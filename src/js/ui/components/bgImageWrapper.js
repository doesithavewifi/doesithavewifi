var React = require('react'),
  Classnames = require('classnames');



module.exports = React.createClass({
  propTypes: {
    imgUrl: React.PropTypes.string.isRequired,
    imgCredit: React.PropTypes.string,
    className: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      imgCredit: null,
      className: '',
    };
  },

  render: function() {  
    var attrs = {
      className: 'bg-image-wrapper ' + this.props.className,
      style: {
        backgroundImage: `url(${this.props.imgUrl})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    };

    return (
      <div {...attrs}>
        {this.props.children}
      </div>
    );
  },

});
