Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = function (e) {
  function IsoKeyWordManager() {
    var t = this;
    t._inputBuffer = "";
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoKeyWordManager, e);
  IsoKeyWordManager.prototype.addEventListener = function () {
    l.CastleLayoutManager.getInstance().gamestage.addEventListener(o.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
  };
  IsoKeyWordManager.prototype.removeEventListener = function () {
    l.CastleLayoutManager.getInstance().gamestage.removeEventListener(o.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
  };
  IsoKeyWordManager.prototype.checkForContainingKeyWorld = function () {
    var e = "";
    for (var t = 0, i = Array.from(r.IsoConst.KEY_WORD_FUNCTIONS.keys()); t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && this.inputBuffer.indexOf(n) >= 0) {
        e = n;
        break;
      }
    }
    if (e != "") {
      this._inputBuffer = "";
      var o = r.IsoConst.KEY_WORD_FUNCTIONS.get(e);
      if (o) {
        o();
      }
    }
  };
  IsoKeyWordManager.prototype.onKeyUp = function (e) {
    var t = e.key;
    if (this.inputBuffer.length >= r.IsoConst.KEY_WORD_BUFFER_LENGTH) {
      this._inputBuffer = this.inputBuffer.substring(1, r.IsoConst.KEY_WORD_BUFFER_LENGTH - 1) + t;
    } else {
      this._inputBuffer += t;
    }
    this.checkForContainingKeyWorld();
  };
  Object.defineProperty(IsoKeyWordManager.prototype, "inputBuffer", {
    get: function () {
      return this._inputBuffer;
    },
    enumerable: true,
    configurable: true
  });
  return IsoKeyWordManager;
}(require("./14.js").CastleComponent);
exports.IsoKeyWordManager = s;
var r = require("./144.js");
var l = require("./17.js");
a.classImplementsInterfaces(s, "ICollectableRendererList");