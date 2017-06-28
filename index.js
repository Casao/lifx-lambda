const lifxObj = require('lifx-http-api');
const lifx = new lifxObj({ bearerToken: process.env.LIFX_KEY });

const bedTimeLight = {
  "power": "on",
  "brightness": 0.15,
  "color": "kelvin:2750"
};

const dayTimeLight = {
  "power": "on",  
  "brightness": 1,
  "color": "kelvin:5500"
};

const target = `id:${process.env.TARGET_ID}`;

// For development/testing purposes
exports.handler = function(event, context, callback) {
  if (event.clickType === 'LONG') {
    lifx.togglePower(target, 0, callback)
  } 
  else if (event.clickType === 'SINGLE') {
    lifx.setState(target, bedTimeLight, callback);
  }
  else if (event.clickType === 'DOUBLE') {
    lifx.setState(target, dayTimeLight, callback);
  }
};
