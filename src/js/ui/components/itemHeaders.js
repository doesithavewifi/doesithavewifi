var _ = require('lodash'),
  React = require('react');

module.exports = React.createClass({
  propTypes: {
    columns: React.PropTypes.array.isRequired,
  },

  render: function() {    
    var headers = _.map(this.props.columns, (col) => {
      return (
        <div ref={col.key} className={`${col.cssName}-header`}>{col.label}</div>
      );
    });

    return (
      <div className="item-header-wrapper">
        <div className="item-header">
          {headers}
        </div>
      </div>
    );    
  },
});
