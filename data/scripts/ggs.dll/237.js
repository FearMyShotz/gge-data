Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./28.js");
var a = require("./2.js");
var s = createjs.EventDispatcher;
a.getLogger("sound");
var r = function (e) {
  function SoundChannel() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(SoundChannel, e);
  SoundChannel.prototype.stop = function () {
    var e = this;
    if (this.soundInstance) {
      this.soundInstance.stop();
    } else {
      setTimeout(function () {
        e.stop();
      }, 50);
    }
  };
  Object.defineProperty(SoundChannel.prototype, "soundTransform", {
    get: function () {
      return this._soundTranform;
    },
    set: function (e) {
      this._soundTranform = e;
      if (this.soundInstance) {
        this.soundInstance.applyPlayProps({
          pan: e.pan,
          volume: e.volume
        });
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoundChannel.prototype, "position", {
    get: function () {
      if (this.soundInstance) {
        return this.soundInstance.position;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  return SoundChannel;
}(s);
exports.SoundChannel = r;