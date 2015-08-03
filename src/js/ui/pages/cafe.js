var _ = require('lodash');

var React = require('react');

var Router = require('react-router'),
  State = Router.State,
  StaticMap = require('../components/staticMap'),
  Hero = require('../components/hero'),
  RatingItem = require('../components/ratingItem'),
  SectionHeader = require('../components/sectionHeader'),
  OpeningTimes = require('../components/openingTimes'),
  Utils = require('../../utils'),
  Loader = require('../components/loader');

import { FluxComponent } from '../../flux';


module.exports = React.createClass({
  mixins: [State],

  render: function() {
    var content = null;

    if(this.props.appDatabase){

      var id = this.getParams().id,
          item = this.props.appDatabase[id],
          heroUrl = "/img/cafes/default-header.jpg",
          description,
          openingTimes;


      var heroUrl = "/img/cafes/default-header.jpg";
      if (item.header_image) {
        heroUrl = item.header_image;
      }

      if(item.description) {
        description = <p className="cafe-description">{item.description}</p>
      }

      if(item.opening_times) {
        openingTimes = <OpeningTimes data={item.opening_times} />
      } else {
        openingTimes = <p>No Opening Times data available</p>
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

      var map = (<p>Map currently not available</p>),
        distance = null;

      if (item.coords) {
        map = <StaticMap lat={item.coords.lat} lng={item.coords.lng} link={item.google_maps_link}/>
      }
      
      content = 
        <div className="cafe">
          <Hero 
            heroUrl={heroUrl} 
            title={item.name} 
            rating={item.editor_rating} 
            address={item.address} 
            distance={item.distance_from_user} />
          <main>
            {description}
            <section id="opening-times">
              <SectionHeader>Opening Times</SectionHeader>
              {openingTimes}
            </section>
            <section id="information">
              <SectionHeader>Ratings &amp; Information</SectionHeader>
              <RatingItem title="Affordability" value={Utils.getRatingFromPrice(item.affordability.avge)} />
              <RatingItem title="Wifi Quality" value={item.wifi_quality} />
              <RatingItem title="Ambience" value={item.ambience} />
              <RatingItem title="Drink's Quality" value={item.drinks_quality} />
              <RatingItem title="Food/snack selection" value={item.food_snack_selection} />
              <RatingItem title="Power Outlet" value={item.power_outlet} />
              <RatingItem title="Toilet Hygiene" value={item.toilet_hygiene} />
              <RatingItem title="Ergonomics" value={item.desk_chair} />
              <RatingItem title="Website" value={item.website} />
              <RatingItem title="Closest Station" value={item.closest_station.original} />
              <RatingItem title="Minimum Order" value={item.minimum_order} />
              <RatingItem title="Smoking Area" value={item.smoking_area} />
              <RatingItem title="Serves Alcohol" value={item.smoking_area} />
            </section>
            
            <section id="map">
              <SectionHeader className="no-marg">Map</SectionHeader>
              {map}
            </section>
          </main>
        </div>
      ;
    }

    return (
      <FluxComponent connectToStores={['app']}>
        {content}
      </FluxComponent>
    );
  },
});
