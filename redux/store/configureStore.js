/* eslint no-process-env:0 */
if (process.env.NEXT_PUBLIC_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
