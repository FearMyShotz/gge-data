Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function BasicSoundEvent(t, n = false, i = false) {
    return e.call(this, t, n, i) || this;
  }
  i.__extends(BasicSoundEvent, e);
  BasicSoundEvent.SONG_PLAYED_COMPLETE = "songplayedcomplete";
  BasicSoundEvent.SONG_BUFFERED_COMPLETE = "songbufferedcomplete";
  BasicSoundEvent.SONG_BUFFERED_ENOUGH = "songbufferedenough";
  return BasicSoundEvent;
}(createjs.Event);
exports.BasicSoundEvent = a;