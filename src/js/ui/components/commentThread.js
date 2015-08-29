var React = require('react');

var Disqus = require('react-disqus-thread');

module.exports = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  },

  render: function() { 
    return (
      <div className="comment-thread">
        <Disqus shortname="doesithavewifi"
          identifier={window.location.href}
          title={this.props.title} />
      </div>
    );
  },
});
