const event = require('./eventEmitter');
event.on('someEvent', (...args) => {
  console.log('some_event triggered', ...args);
});
event.emit('someEvent', 'abc', '123');