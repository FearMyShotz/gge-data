Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./16.js");
var p = require("./28.js");
var h = require("./21.js");
var g = require("./31.js");
var C = require("./19.js");
var _ = require("./30.js");
var m = require("./4.js");
var f = require("./8.js");
var O = require("./14.js");
var E = createjs.Point;
var y = function (e) {
  function ResourceWaitComponent(t) {
    var i = e.call(this) || this;
    i._boosted = false;
    i._resourceAmountNeeded = 0;
    i._resourceProduction = 0;
    i._skipEnabled = false;
    i.startTime = 0;
    i.disp = t;
    i.itxt_time = O.CastleComponent.textFieldManager.registerTextField(i.disp.mc_time_res.txt_value, new c.TextVO("-"));
    i.itxt_resource = O.CastleComponent.textFieldManager.registerTextField(i.disp.mc_res.txt_value, new l.LocalizedNumberVO(0));
    i.disp.visible = false;
    i.disp.mc_time_res.toolTipText = "dialog_resourceWait_timeTillAvalible";
    return i;
  }
  n.__extends(ResourceWaitComponent, e);
  Object.defineProperty(ResourceWaitComponent.prototype, "boosterId", {
    get: function () {
      switch (this.resourceType) {
        case b.CollectableEnum.WOOD:
          return s.BoosterConst.OVERSEER_WOOD;
        case b.CollectableEnum.STONE:
          return s.BoosterConst.OVERSEER_STONE;
        case b.CollectableEnum.FOOD:
          return s.BoosterConst.OVERSEER_FOOD;
      }
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  ResourceWaitComponent.prototype.setResource = function (e, t, i, n) {
    m.CastleModel.timerData.removeEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this._resourceType = e;
    this._boosted = false;
    this._resourceAmountNeeded = t;
    this._resourceProduction = i;
    this._skipEnabled = n;
    this.startTime = u.int(_.CachedTimer.getCachedTimer());
    this.disp.visible = !!this._resourceType;
    if (this._resourceType) {
      m.CastleModel.timerData.addEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
      this.updateResource();
      this.updateTime();
    }
  };
  ResourceWaitComponent.prototype.setBoosted = function (e) {
    this._boosted = e;
    this.updateTime();
  };
  ResourceWaitComponent.prototype.onTimer = function (e = null) {
    this.updateResourceAmount();
    this.updateTime();
  };
  ResourceWaitComponent.prototype.updateTime = function () {
    var e;
    var t = Math.max(this._resourceAmountNeeded / this._resourceProduction * p.ClientConstTime.HOURES_2_SEC, 0);
    if (this._boosted && this.boosterActive) {
      t /= (100 + s.BoosterConst.OVERSEER_BOOST) / 100;
    }
    e = t != Infinity ? (t -= (_.CachedTimer.getCachedTimer() - this.startTime) / 1000) < 0 ? "-" : o.TimeStringHelper.getTimeToString(t, o.TimeStringHelper.TWO_TIME_FORMAT, r.Localize.text) : r.Localize.text("noProduction");
    this.itxt_time.color = this._boosted && this.boosterActive ? d.ClientConstColor.GENERIC_DARK_GREEN : d.ClientConstColor.GENERIC_BLACK;
    this.itxt_time.textContentVO.stringValue = e;
  };
  ResourceWaitComponent.prototype.updateResource = function () {
    this.disp.btn_skip_production.visible = false;
    m.CastleModel.boosterSaleData.handleMc(this.disp.btn_skip_production.mc_discount, this.boosterId);
    var e = new g.CollectableRenderClips();
    e.addIconMc(this.disp.mc_res.mc_icon);
    v.CollectableRenderHelper.displaySingleItem(e, D.CollectableHelper.createVO(this.resourceType), new C.CollectableRenderOptions(C.CollectableRenderOptions.ICON, new E(20, 20)));
    var t = new this._resourceType.dataClass();
    this.disp.mc_res.toolTipText = t.getTooltipTextId();
    this.updateResourceAmount();
    if (this._resourceProduction > 0 && this._skipEnabled && m.CastleModel.boostData.getOverseer(this.resourceType)) {
      this.disp.btn_skip_production.visible = true;
    }
    f.ButtonHelper.enableButton(this.disp.btn_skip_production, this.boosterActive);
    this.disp.btn_skip_production.toolTipText = this.boosterActive ? "" : "dialog_resourceWait_overseerActive_tooltip";
  };
  ResourceWaitComponent.prototype.updateResourceAmount = function () {
    var e = u.int((_.CachedTimer.getCachedTimer() - this.startTime) / 1000 / 60 / 60 * this._resourceProduction);
    this.itxt_resource.textContentVO.numberValue = Math.max(0, this._resourceAmountNeeded - e);
  };
  Object.defineProperty(ResourceWaitComponent.prototype, "boosterActive", {
    get: function () {
      var e = m.CastleModel.boostData.getOverseer(this.resourceType);
      return !!e && !e.isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceWaitComponent.prototype, "resourceType", {
    get: function () {
      return this._resourceType;
    },
    enumerable: true,
    configurable: true
  });
  ResourceWaitComponent.prototype.onClickSkipProduction = function () {
    I.CastleDialogHandler.getInstance().registerDefaultDialogs(T.CastleResourceBoostDialog);
  };
  return ResourceWaitComponent;
}(O.CastleComponent);
exports.ResourceWaitComponent = y;
var b = require("./12.js");
var D = require("./45.js");
var I = require("./9.js");
var T = require("./874.js");
var v = require("./25.js");
a.classImplementsInterfaces(y, "ICollectableRendererList");