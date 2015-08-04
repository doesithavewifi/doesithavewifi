var React = require('react');

import { FluxComponent } from '../../flux';

var ItemList = require('../components/itemList'),
  Hero = require('../components/hero');

var imgUrl = "/img/header.jpg",
  imgCredit = "https://www.flickr.com/photos/peronimo/16578087888/",
  title = "Find the best cafes to work in Taipei";


module.exports = React.createClass({
  render: function() {    
    return (
      <div className="home">
        <FluxComponent connectToStores={['app']}>
          <Hero imgUrl={imgUrl} imgCredit={imgCredit} title={title} />
          <ItemList items={this.props.appDatabase} userGeo={this.props.userGeo} />
        </FluxComponent>
      </div>
    );
  },
});
