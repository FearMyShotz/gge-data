Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleExternalSubLayerDialog(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleExternalSubLayerDialog, e);
  CastleExternalSubLayerDialog.prototype.changeCategory = function (e) {
    this._currentCategory = e;
    if (this._currentSublayer) {
      this._currentSublayer.hide();
    }
  };
  CastleExternalSubLayerDialog.prototype.showSublayer = function (e, t) {
    e.show(t);
    this._currentSublayer = e;
  };
  CastleExternalSubLayerDialog.prototype.hideAllSublayer = function () {
    var e = this._subLayer ? Array.from(this._subLayer.values()) : null;
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.hide();
        }
      }
    }
  };
  CastleExternalSubLayerDialog.prototype.hideLoaded = function (t = null) {
    this.hideAllSublayer();
    e.prototype.hideLoaded.call(this);
    this._currentSublayer = null;
    this._currentCategory = null;
  };
  return CastleExternalSubLayerDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleExternalSubLayerDialog = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");