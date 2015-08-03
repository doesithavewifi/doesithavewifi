var _ = require('lodash'),
  moment = require('moment'),
  browserStore = require('store');

import { Flux, Store, Actions } from 'flummox';
import FluxComponent from 'flummox/component';

import { Tabletop } from 'tabletop';

var utils = require('./utils');


const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/17EzWbGUykvBOcy6KZsjJy15jnvfuprmrk5OmBe3oOws/pubhtml?gid=0&single=true";

const CACHE_ENABLED = false;


class AppActions extends Actions {
  loadDatabase() {
    return {};
  }
  setView(viewType) {
    return viewType;
  }
}


class AppStore extends Store {
  constructor(flux) {
    super();

    this.flux = flux;

    const actionIds = this.flux.getActionIds('app');

    _.forEach(actionIds, function(aid, key) {
      this.register(aid, this[key]);
    }, this);

    this.state = {
      appDatabase: null,
      appViewType: 'listing',
    };
  }

  loadDatabase () {
    // check cache?
    if (CACHE_ENABLED) {
      var data = browserStore.get('database');

      // if cache set
      if (data && data.updated && data.entries) {
        if (1 > moment().diff(data.updated, 'hours')) {
          console.log('Cached data available');

          return this.setState({
            appDatabase: data.entries
          });
        }
      }
    }

    console.log('Loading spreadsheet data');

    setTimeout(() => {
      this.setState({
        timedOut: true
      });
    }, 10000);

    Tabletop.init({ 
      key: SPREADSHEET_URL,
      callback: _.bind(function(data, tabletop) {
        if (this.state.timedOut) {
          return;
        }

        var objData = {};
        data.forEach( (d) => {
          var parsed = this._parse(d);

          objData[parsed.slug] = parsed;
        });

        console.log('Got entries', objData);

        this.setState({
          appDatabase: objData,
        });

        browserStore.set('database', {
          updated: new Date(),
          entries: objData,
        });

      }, this),
      callbackContext: this,
      simpleSheet: true
    });

  }

  setView (viewType) {
    this.setState({
      viewType: viewType
    });
  }


  _parse (item) {
    var ret = {};

    var keys = Object.keys(item);

    keys.forEach((key) => {
      var slugified = utils.slugify(key);

      var val = item[key];

      switch (slugified) {
        case 'opening_times':
          val = utils.parseOpeningTimes(val);
          break;
        case 'affordability':
          val = utils.parseAffordability(val);
          break;
        case 'closest_station':
          val = utils.parseClosestStation(val);
          break;
        case 'ambience':        
        case 'desk_chair':
        case 'drinks_quality':
        case 'editor_rating':
        case 'food_snack_selection':
        case 'quietness':
        case 'wifi_quality':
        case 'power_outlet':
        case 'toilet_hygiene':
          var val = parseFloat(item[key]);
          if (isNaN(val)) {
            val = 0;
          }
          break;
        case 'pay_for_power':
        case 'serves_alcohol':
        case 'smoking_area':
          val = ('true' === val.toLowerCase());
          break;
      }

      ret[slugified] = val;
    });

    return ret;
  }




}



export class FluxManager extends Flux {
  constructor() {
    super();

    this.createActions('app', AppActions);
    this.createStore('app', AppStore, this);
  }
}



exports.FluxComponent = FluxComponent;

