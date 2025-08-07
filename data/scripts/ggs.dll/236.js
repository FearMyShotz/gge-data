Object.defineProperty(exports, "__esModule", {
  value: true
});
require("./2.js").getLogger("sound");
var i = function () {
  return function SoundTransform(e = 1, t = 0) {
    this.leftToLeft = 0;
    this.leftToRight = 0;
    this.rightToLeft = 0;
    this.rightToRight = 0;
    this.volume = e;
    this.pan = t;
  };
}();
exports.SoundTransform = i;