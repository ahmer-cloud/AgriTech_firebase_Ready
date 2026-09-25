const fs = require('fs');

fs.writeFileSync('firebase-init.js', process.env.FIREBASE_INIT_CONTENT || '');
fs.writeFileSync('weather.js', process.env.WEATHER_JS_CONTENT || '');

console.log('Secret files generated successfully.');