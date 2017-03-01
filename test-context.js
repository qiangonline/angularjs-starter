'use strict';

require('angular');
require('angular-mocks');


let r = require.context('./src', true, /\.spec\.js$/);
r.keys().forEach(r);