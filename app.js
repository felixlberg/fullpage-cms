var path = require('path');

var apos = require('apostrophe')({
  shortName: 'fullpage-cms',
  baseUrl: process.env.BASE_URL,

  modules: {

    //Style modules
    'fullpage': {},
    'apostrophe-video-widgets': {},
    'color-picker': {},
    'background-widgets': {},
    'materialize': {},
    'materialize-video-widgets': {},
    'materialize-card-widgets': {},
    'materialize-text-widgets': {},
    'materialize-double-widgets': {},
    'materialize-events': {},
    'materialize-events-widgets': {},
    //Production modules
    'apostrophe-seo': {},
    'apostrophe-open-graph': {},
    'apostrophe-global': {
      seoGoogleFields: true
    },
    'apostrophe-site-map': {
      excludeTypes: []
    }
    //Templates
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') }
  }
});
