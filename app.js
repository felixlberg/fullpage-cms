var path = require('path');

var apos = require('apostrophe')({
  shortName: 'fullpage-cms',
  modules: {
    // Ordering Module for Pieces
    'apostrophe-pieces-orderings-bundle': {},
    // Custom Modules
    'card-widgets': {},
    'contact-form': {},
    'contact-form-widgets': {},
    'btn-widgets':{},
    'double-widgets': {},
    'events': {},
    'events-widgets': {},
    'footer-widgets':{},
    'galleries':{
      orderings: true
    },
    'galleries-orderings': {
      extend: 'apostrophe-pieces-orderings'
    },
    'galleries-pages': {
      orderings: true
    },
    'galleries-widgets': {},
    'nav-widgets': {},
    'people': {
      ordering: true
    },
    'people-orderings': {
      extend: 'apostrophe-pieces-orderings'
    },
    'people-pages': {
      orderings: true
    },
    'people-widgets': {},
    'sections': {
      orderings: true
    },
    'sections-orderings': {
      extend: 'apostrophe-pieces-orderings'
    },
    'sections-pages': {
      orderings: true
    },
    'sections-widgets': {},
    'share-widgets':{},
    'slider-widgets':{},
    'tables': {
      orderings: true
    },
    'tables-orderings': {
      extend: 'apostrophe-pieces-orderings'
    },
    'tables-pages': {
      orderings: true
    },
    'tables-widgets': {},
    'tabs-widgets': {},
    'texts': {
      orderings: true
    },
    'texts-orderings': {
      extend: 'apostrophe-pieces-orderings'
    },
    'texts-pages': {
      orderings: true
    },
    'texts-carousels-widgets': {},
    'texts-widgets': {},
    'video-widgets': {},

    // CSS in context editing
    'apostrophe-palette-widgets': {},
    'apostrophe-palette': {},
    'apostrophe-palette-global': {},

    // Production Modules
    'apostrophe-db': {
      connect: {
        useUnifiedTopology: true
      }
    },
    'apostrophe-caches-redis': {},
    'apostrophe-caches': {
      redis: {}
    },
    'apostrophe-seo': {},
    'apostrophe-open-graph': {},
    'apostrophe-global': {
      seoGoogleFields: true
    },
    'apostrophe-site-map': {
      noPriority: true,
      excludeTypes: [
        'apostrophe-global',
        'contact-form'

      ],
      childPageDepth: 3
    },
    'apostrophe-optimizer': {
      enable: false,
      stats: false,
      debug: false
    },
    'apostrophe-favicons': {},
    'apostrophe-favicons-global': {
      destinationDir: '/fav/',
      faviconConfig : {
        icons: {
          windows: false
        }
      }
    },
    // Serve Attacments over SSL only
    'apostrophe-attachments': {
      uploadfs: {
        https: true
      }
    },
    // Allow svgs
    'apostrophe-attachments': {
      svgImages: true,
      /*
      addImageSizes: [{
        name: 'side',
        width: 380,
        height: 600
      }]
      */
    },

    // Templates
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') }

  // << End of Modules
  }
});
