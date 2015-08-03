var _ = require('lodash'),
  Classnames = require('classnames'),
  React = require('react');

module.exports = React.createClass({
  propTypes: {
    columns: React.PropTypes.array.isRequired,
    sort: React.PropTypes.object.isRequired,
    sortCallback: React.PropTypes.func.isRequired,
  },

  render: function() {    
    var headers = _.map(this.props.columns, (col) => {
      let classes = {};

      classes[[`${col.cssName}-header`]] = true;
      classes[this.props.sort.asc ? 'asc' : 'desc'] = true;
      classes.sorted = (this.props.sort.key === col.key);

      let classNames = Classnames(classes);

      return (
        <div ref={col.key} 
            className={classNames} 
            onClick={this._columnClicked}
            data-key={col.key}>
          {col.label}
        </div>
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


  _columnClicked: function(e) {
    var colKey = $(e.currentTarget).data('key');

    if (this.props.sort.key === colKey) {
      this.props.sortCallback({
        key: colKey,
        asc: !this.props.sort.asc,
      });
    } else {
      this.props.sortCallback({
        key: colKey,
        asc: true,
      });      
    }
  },

});
