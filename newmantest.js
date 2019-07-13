// eslint-disable-next-line linebreak-style
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
import { run } from 'newman'; // require newman in your project

// call newman.run to pass `options` object and wait for callback
run({
    collection: require('./scripts.postman_collection.json'),
    reporters: 'cli',
}, (err) => {
    if (err) { throw err; }
    console.log('collection run complete!');
});