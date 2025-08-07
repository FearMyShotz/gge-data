Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./265.js");
var r = require("./15.js");
var l = require("./34.js");
var c = require("./1820.js");
var u = require("./1822.js");
var d = require("./1823.js");
var p = require("./1824.js");
var h = require("./1825.js");
var g = require("./1826.js");
var C = require("./1827.js");
var _ = require("./1828.js");
var m = require("./1829.js");
var f = function (e) {
  function GachaEventMainDistrict(t) {
    var i = e.call(this, t) || this;
    i._gachaComponents = [];
    i.addGachaComponent(u.GachaComponentBackground, t.mc_bg);
    i.addGachaComponent(c.GachaComponentAnimation, t.mc_animation);
    i.addGachaComponent(d.GachaComponentCurrency, t.mc_currency);
    i.addGachaComponent(h.GachaComponentMerchantButton, t.btn_merchant);
    i.addGachaComponent(_.GachaComponentRanking, t.mc_ranking);
    i.addGachaComponent(p.GachaComponentLevelRewards, t.mc_levelRewards);
    i.addGachaComponent(C.GachaComponentPull, t.mc_pull, "cashoffers");
    i.addGachaComponent(g.GachaComponentMilestones, t.mc_milestones);
    i.addGachaComponent(m.GachaComponentRewards, t.mc_rewards);
    o.loadAsset("Rewards_Animation").then(function (e) {
      r.CastleBasicController.getInstance().dispatchEvent(new s.GachaEvent(s.GachaEvent.SHINE_ANIMATION_LOADED, null, null));
    });
    return i;
  }
  n.__extends(GachaEventMainDistrict, e);
  GachaEventMainDistrict.prototype.addGachaComponent = function (e, t, i = null) {
    if (t) {
      if (i) {
        this._gachaComponents.push(new e(t, i));
      } else {
        this._gachaComponents.push(new e(t));
      }
    }
  };
  GachaEventMainDistrict.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._gachaComponents.forEach(function (e) {
      e.show(t);
    });
    this.updatePosition();
  };
  GachaEventMainDistrict.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._gachaComponents.forEach(function (e) {
      e.onHide();
    });
  };
  GachaEventMainDistrict.prototype.updatePosition = function () {
    var e = this.getEventVO().pointThresholds.length > 0 ? GachaEventMainDistrict.MILESTONE_OFFSET_X : 0;
    this.moveDisp(this.subLayerDisp.mc_bg, e);
    this.moveDisp(this.subLayerDisp.mc_animation, e);
    this.moveDisp(this.subLayerDisp.mc_levelRewards, e);
    this.moveDisp(this.subLayerDisp.mc_pull, e);
  };
  GachaEventMainDistrict.prototype.moveDisp = function (e, t) {
    e.originalX ||= e.x;
    e.x = e.originalX + t;
  };
  GachaEventMainDistrict.prototype.getEventVO = function () {
    return this._params[0];
  };
  GachaEventMainDistrict.MILESTONE_OFFSET_X = 0;
  return GachaEventMainDistrict;
}(l.CastleDialogSubLayer);
exports.GachaEventMainDistrict = f;
a.classImplementsInterfaces(f, "ICollectableRendererList", "ISublayer");