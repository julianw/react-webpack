var keyMirror = require('keymirror');

module.exports = {
  SomeDataStore:{
    EventTypes: keyMirror({
      DATA_LOADED:null,
    }),
  },
  ActionTypes: keyMirror({
    LOAD_SOMETHING:null,
  }),
};
