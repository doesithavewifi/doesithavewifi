var React = require('react');

var Router = require('react-router'),
  State = Router.State,
  Hero = require('../components/hero'),
  RatingItem = require('../components/ratingItem'),
  SectionHeader = require('../components/sectionHeader');

import { FluxComponent } from '../../flux';


module.exports = React.createClass({
  mixins: [State],

  render: function() {
    var content = null;

    if(this.props.appDatabase){

      var id = this.getParams().id;
      var item = this.props.appDatabase[id];

      var heroUrl = "/img/cafes/default-header.jpg";
      if (item.image1) {
        heroUrl = item.image1;
      }

      var nav = [
        {
          name: 'Information',
          link: '#information',
        },
        {
          name: 'Opening Times',
          link: '#information',
        },
        {
          name: 'Maps',
          link: '#map',
        }
      ];
      
      content = 
        <div className="cafe">
          <Hero heroUrl={heroUrl} title={item.name} rating={item.editor_rating} address={item.address}/>
          <main>
            <section className="opening-times" id="opening-times">
              <SectionHeader>Opening Times</SectionHeader>
            </section>
            <SectionHeader>Ratings &amp; Information</SectionHeader>
            <section className="information" id="information">
              <p>{item.website}</p>
              <p>{item.description}</p>
              <p>{item.closest_station}</p>
            </section>
            
            <section className="location" id="map">
              Map goes here
            </section>
            <section className="ratings">
              <RatingItem title="Wifi Quality" value={item.wifi_quality}></RatingItem>
              <RatingItem title="Ambience" value={item.ambience}></RatingItem>
              <RatingItem title="Food/snack selection" value={item.food_snack_selection}></RatingItem>
              <RatingItem title="Power Outlet" value={item.power_outlet}></RatingItem>
              <RatingItem title="Toilet Hygiene" value={item.toilet_hygiene}></RatingItem>
              <RatingItem title="Ergonomics" value={item.desk_chair}></RatingItem>
            </section>
            
          </main>
        </div>
      ;
    } else {
      content = <div>Loading data...</div>;
    }

    return (
      <FluxComponent connectToStores={['app']}>
        {content}
      </FluxComponent>
    );
  },
});
