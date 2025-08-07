Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./568.js");
var l = require("./4.js");
var c = require("./569.js");
var u = require("./52.js");
var d = require("./1515.js");
var p = require("./1516.js");
var h = require("./1517.js");
var g = require("./145.js");
var C = function (e) {
  function RubyWishingWellFixedPositionBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RubyWishingWellFixedPositionBuildingVE, e);
  RubyWishingWellFixedPositionBuildingVE.prototype.update = function (t) {
    e.prototype.update.call(this, t);
    if (this.additionalClips.containsClipsByType(g.IsoAdditionalClipEnum.EXCLAMATION_MARK2) != this.shouldHaveExclamationMark()) {
      this.updateAdditionalClips();
    }
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    l.CastleModel.rubyWishingWellData.addEventListener(c.CastleRubyWishingWellData.UPDATE, this.bindFunction(this.onWishingWellDataUpdated));
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    l.CastleModel.rubyWishingWellData.removeEventListener(c.CastleRubyWishingWellData.UPDATE, this.bindFunction(this.onWishingWellDataUpdated));
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.createAdditionalClips = function () {
    if (this.shouldHaveExclamationMark()) {
      this.additionalClips.addClips(g.IsoAdditionalClipEnum.EXCLAMATION_MARK2);
    }
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.createStatusIcons = function () {
    if (l.CastleModel.rubyWishingWellData.isRunning()) {
      this.statusIcons.addIcon(f.IsoStatusIconEnum.PROGRESS_BAR_RUBY_WISH_WELL);
    } else if (l.CastleModel.rubyWishingWellData.isReadyToCollect()) {
      this.statusIcons.addIcon(f.IsoStatusIconEnum.RUBY_WISH_WELL_COLLECTABLE);
    }
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.getRingMenuButtons = function () {
    var e = [];
    e.push(new O.RingMenuButtonUpgradeBuilding());
    e.push(new E.RingMenuButtonInfo());
    e.push(new _.RingMenuButtonWishingWell());
    e.push(new y.RingMenuButtonConstructionHelpRequest());
    e.push(new p.RingMenuButtonGeneralsHub());
    e.push(new h.RingMenuButtonGeneralsOverview());
    e.push(new d.RingMenuButtonGacha());
    return e;
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.onWishingWellDataUpdated = function (e) {
    if (l.CastleModel.rubyWishingWellData.isWaitingForCollectResponse) {
      var t = this.getGlobalDispPosTopCenter();
      var i = s.int(l.CastleModel.rubyWishingWellData.getCurrentNode().entryCosts * c.CastleRubyWishingWellData.MULTIPLIER);
      this.isoRenderer.isoData.updater.spawnCollectableFadeEffect(new m.CollectableItemC2VO(i), t);
    }
    l.CastleModel.rubyWishingWellData.isWaitingForCollectResponse = false;
    this.updateDisp();
    this.updateAdditionalClips();
    this.updateStatusIcon();
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.onMouseClick = function () {
    if (l.CastleModel.rubyWishingWellData.isReadyToCollect() && !l.CastleModel.rubyWishingWellData.isWaitingForCollectResponse) {
      l.CastleModel.rubyWishingWellData.isWaitingForCollectResponse = true;
      l.CastleModel.smartfoxClient.sendCommandVO(new r.C2SWishingWellCommandVO(a.WishingWellConst.OPTION_COLLECT_RUBY_WISHING_WELL));
    }
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.shouldHaveExclamationMark = function () {
    return this.buildingVO.level <= 0 || l.CastleModel.rubyWishingWellData.isReadyToStart() && l.CastleModel.currencyData.getAmountById(u.ClientConstCurrency.ID_WISHING_WELL_COIN) >= l.CastleModel.rubyWishingWellData.getCurrentNode().neededWishingWellCoins;
  };
  return RubyWishingWellFixedPositionBuildingVE;
}(require("./1606.js").AFixedPositionBuildingVE);
exports.RubyWishingWellFixedPositionBuildingVE = C;
var _ = require("./3149.js");
var m = require("./128.js");
var f = require("./177.js");
var O = require("./1522.js");
var E = require("./1519.js");
var y = require("./1518.js");
o.classImplementsInterfaces(C, "ICollectableRendererList", "IIngameUICapable");