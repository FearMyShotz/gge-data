Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./265.js");
var r = require("./24.js");
var l = require("./14.js");
var c = require("./362.js");
var u = require("./556.js");
var d = function (e) {
  function GachaComponentBackground(t) {
    return e.call(this, t) || this;
  }
  n.__extends(GachaComponentBackground, e);
  GachaComponentBackground.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.updateBackground();
  };
  GachaComponentBackground.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    l.CastleComponent.controller.addEventListener(s.GachaEvent.SPIN, this.bindFunction(this.onUpdate));
  };
  GachaComponentBackground.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    l.CastleComponent.controller.removeEventListener(s.GachaEvent.SPIN, this.bindFunction(this.onUpdate));
  };
  GachaComponentBackground.prototype.onUpdate = function (e) {
    if (e.eventVO.eventId != this.getEventVO().eventId) {
      this.updateBackground();
    }
  };
  GachaComponentBackground.prototype.updateBackground = function () {
    var e = this;
    var t = this.getEventVO().assetName();
    var i = this.getEventVO().getCurrentGachaVO().skinID;
    var n = u.GachaEventMainDialog.NAME + "_Elements_" + t;
    var s = u.GachaEventMainDialog.NAME + "_Background_" + t + (i ? "_" + i : "");
    var l = new r.CastleGoodgameExternalClip(s, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(n), null, 0, false);
    this._currentBG = l;
    l.doWhenLoaded(function () {
      o.MovieClipHelper.clearMovieClip(e.disp);
      e.disp.addChild(e._currentBG);
    });
  };
  GachaComponentBackground.prototype.getEventVO = function () {
    return this._params[0];
  };
  return GachaComponentBackground;
}(c.AGachaComponent);
exports.GachaComponentBackground = d;