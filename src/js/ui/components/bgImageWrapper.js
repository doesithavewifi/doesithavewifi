var React = require('react'),
  Classnames = require('classnames');

var Icon = require('./icon'),
  Utils = require('../../utils');



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

  getInitialState: function() {
    return {
      showCreditText: false
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

    var credit = null;
    if (this.props.imgCredit) {
      console.log(this.state.showCreditText);

      if (this.state.showCreditText) {
        if (Utils.isUrl(this.props.imgCredit)) {
          credit = (
            <a href={this.props.imgCredit} target="_blank">link</a>
          );
        } else {
          credit = this.props.imgCredit;
        }

        credit = (
          <em>photo credit: {credit}</em>
        );
      } else {
        credit = (
          <Icon name="help" onClick={this._showCredits} />
        );
      }
    }

    return (
      <div {...attrs}>
        {this.props.children}
        <span className="bg-image-credit">{credit}</span>
      </div>
    );
  },


  _showCredits: function() {
    this.setState({
      showCreditText: true
    });
  }

});
