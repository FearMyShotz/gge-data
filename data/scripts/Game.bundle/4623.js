Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./4624.js");
var a = require("./4.js");
var s = function (e) {
  function AutoSellGemsVO() {
    var t = this;
    t._actives = new Map();
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._actives = t.createActiveMatrix();
    return t;
  }
  n.__extends(AutoSellGemsVO, e);
  AutoSellGemsVO.prototype.parseASG = function (e) {
    var t = e;
    if (t && (this.setAllActives(0), t != null)) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this.setActive(parseInt(o[1]), o[0]);
        }
      }
    }
  };
  AutoSellGemsVO.prototype.setActive = function (e, t) {
    this._actives.set(e, t);
  };
  AutoSellGemsVO.prototype.setAllActives = function (e) {
    if (this._actives != null) {
      for (var t = 0, i = Array.from(this._actives.keys()); t < i.length; t++) {
        var n = i[t];
        this._actives.set(n, e);
      }
    }
  };
  AutoSellGemsVO.prototype.copy = function (e) {
    for (var t = 0, i = Array.from(e._actives.keys()); t < i.length; t++) {
      var n = i[t];
      this._actives.set(n, e._actives.get(n));
    }
  };
  AutoSellGemsVO.prototype.sendConfigToServer = function () {
    a.CastleModel.smartfoxClient.sendCommandVO(new o.C2SSetAutoSellGemConditionsEventVO(this));
  };
  AutoSellGemsVO.prototype.createActiveMatrix = function () {
    var e = new Map();
    for (var t = 0, i = Array.from(a.CastleModel.gemData.gemColors.keys()); t < i.length; t++) {
      var n = i[t];
      e.set(n, 0);
    }
    return e;
  };
  Object.defineProperty(AutoSellGemsVO.prototype, "actives", {
    get: function () {
      return this._actives;
    },
    enumerable: true,
    configurable: true
  });
  return AutoSellGemsVO;
}(require("./1310.js").ASubAutoSellVO);
exports.AutoSellGemsVO = s;