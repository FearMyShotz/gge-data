Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = createjs.Event;
var s = createjs.MouseEvent;
var r = function (e) {
  function Stats(t = null) {
    var n = e.call(this) || this;
    n._theme = {
      bg: "#000033",
      fps: "#ffff00",
      ms: "#00ff00",
      mem: "#00ffff",
      memmax: "#ff0070"
    };
    if (t) {
      if (t.bg != null) {
        n._theme.bg = t.bg;
      }
      if (t.fps != null) {
        n._theme.fps = t.fps;
      }
      if (t.ms != null) {
        n._theme.ms = t.ms;
      }
      if (t.mem != null) {
        n._theme.mem = t.mem;
      }
      if (t.memmax != null) {
        n._theme.memmax = t.memmax;
      }
    }
    n.addEventListener(a.ADDED_TO_STAGE, n.bindFunction(n.init));
    n.addEventListener(a.REMOVED_FROM_STAGE, n.bindFunction(n.kill));
    return n;
  }
  i.__extends(Stats, e);
  Stats.prototype.kill = function (e) {
    this.removeEventListener(a.ADDED_TO_STAGE, this.bindFunction(this.init));
    this.removeEventListener(a.REMOVED_FROM_STAGE, this.bindFunction(this.kill));
    this.removeEventListener(s.CLICK, this.bindFunction(this.onClick));
    this.removeEventListener(a.ENTER_FRAME, this.bindFunction(this.update));
  };
  Stats.prototype.init = function (e) {};
  Stats.prototype.update = function (e) {};
  Stats.prototype.onClick = function (e) {};
  Stats.prototype.hex2css = function (e) {
    return "#" + e.toString(16);
  };
  return Stats;
}(createjs.Container);
exports.Stats = r;