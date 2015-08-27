var React = require('react');

// var Disqus = require('react-disqus-thread');

module.exports = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  },

  render: function() { 
    console.log(this.props.id);

        // <Disqus shortname="doesithavewifi"
        //   identifier={this.props.id}
        //   title={this.props.title} />
    return (
      <div className="comment-thread">
      </div>
    );
  },
});
