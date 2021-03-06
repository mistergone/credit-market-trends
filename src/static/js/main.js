'use strict';

// The following line imports jQuery into your project. If you don't need jQuery, delete it.
global.$ = require( 'jquery' );

// If you'd like to include cf-expandables (or any other node module in your project),
// run `npm install cf-expandables --save` and require() it in this file.
require( 'cf-expandables' );
require( './bar.js' );
require( './formatDates.js' );
require( './line.js' );

var getMetadata = require( './metadata.js' );

getMetadata.init();