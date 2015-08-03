var React = require('react');
var Link = require('react-router').Link;



module.exports = React.createClass({
  propTypes: {
    lat : React.PropTypes.number.isRequired,
    lng : React.PropTypes.number.isRequired,
    link: React.PropTypes.string.isRequired
  },

  render: function() {
    let latlng = this.props.lat + ',' + this.props.lng;

    let url = 'http://maps.googleapis.com/maps/api/staticmap?'
      + 'center=' + latlng
      + '&size=600x300'
      + '&scale=2'
      + '&zoom=14'
      + '&format=png'
      + '&maptype=roadmap'
      + '&markers=color:red|' + latlng
    ;

    return (
      <a href={this.props.link} target="_blank" className="static-map">
        <img src={url} />
      </a>
    );
  }
});
