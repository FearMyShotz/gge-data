Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./6.js");
var s = require("./270.js");
var r = require("./91.js");
var l = require("./192.js");
var c = require("./122.js");
var u = require("./92.js");
var d = require("./15.js");
var p = require("./72.js");
var h = require("./4.js");
var g = require("./418.js");
var C = require("./3878.js");
var _ = function (e) {
  function CastleTimeSpendTrackingController() {
    var t = this;
    t.trackingActivated = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).initialize();
    return t;
  }
  n.__extends(CastleTimeSpendTrackingController, e);
  CastleTimeSpendTrackingController.getInstance = function () {
    CastleTimeSpendTrackingController._instance ||= new CastleTimeSpendTrackingController();
    return CastleTimeSpendTrackingController._instance;
  };
  CastleTimeSpendTrackingController.prototype.initialize = function () {
    if (this.trackingActivated) {
      this.controller.addEventListener(r.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onCastleLayoutManagerEventShowDialog));
      this.controller.addEventListener(r.CastleLayoutManagerEvent.HIDE_DIALOG, this.bindFunction(this.onCastleLayoutManagerEventHideDialog));
      this.controller.addEventListener(r.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_TIME_TRACKING, this.bindFunction(this.onLayoutStateChanged));
      h.CastleModel.kingdomData.addEventListener(l.CastleKingdomEvent.KINGDOM_SWITCHED, this.bindFunction(this.onCastleKingdomEventKingdomSwitched));
      this.controller.addEventListener(u.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onIsoRenderStrategyChanged));
    }
  };
  Object.defineProperty(CastleTimeSpendTrackingController.prototype, "controller", {
    get: function () {
      return d.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleTimeSpendTrackingController.prototype.onLayoutStateChanged = function (e) {
    this.send(C.CastleTimeSpendTrackingEnum.CHANGE_LAYOUT);
  };
  CastleTimeSpendTrackingController.prototype.onIsoRenderStrategyChanged = function (e) {
    if (m.Iso.renderer.strategies.hasModeChanged(c.IsoRenderStrategyEnum.BUILD_MODE)) {
      var t = CastleTimeSpendTrackingController.getCurrentState();
      if (t == f.CastleLayoutManager.STATE_ISO && m.Iso.renderer.strategies.prevStrategy.isActive(c.IsoRenderStrategyEnum.BUILD_MODE)) {
        t = 11;
      }
      this.sendCustomInfo(C.CastleTimeSpendTrackingEnum.CHANGE_LAYOUT, CastleTimeSpendTrackingController.getAreaType(), CastleTimeSpendTrackingController.getKingdomId(), null, t, new Date().getTime(), this.getUserLevel());
    }
  };
  CastleTimeSpendTrackingController.prototype.onCastleLayoutManagerEventHideDialog = function (e) {
    this.send(C.CastleTimeSpendTrackingEnum.REMOVE_A_DIALOG, e.params[0]);
  };
  CastleTimeSpendTrackingController.prototype.onCastleLayoutManagerEventShowDialog = function (e) {
    this.send(C.CastleTimeSpendTrackingEnum.CHANGE_A_DIALOG, e.params[0]);
  };
  CastleTimeSpendTrackingController.prototype.onCastleKingdomEventKingdomSwitched = function (e) {
    this.send(C.CastleTimeSpendTrackingEnum.CHANGE_KINGDOM);
  };
  CastleTimeSpendTrackingController.prototype.sendCustomInfo = function (e, t, i, n, a, r, l) {
    if (CastleTimeSpendTrackingController.sendUserTrackingData()) {
      var c = {
        [o.CommKeys.ACTION]: e.type,
        [o.CommKeys.AREA_TYPE]: t,
        [o.CommKeys.KINGDOM_ID]: i,
        [o.CommKeys.STATE_LAYOUT]: a,
        [o.CommKeys.TIMESTAMP]: r,
        [o.CommKeys.LEVEL]: l
      };
      if (n) {
        c[o.CommKeys.DIALOG_NAME] = n;
      }
      h.CastleModel.smartfoxClient.sendCommandVO(new g.C2SClientSideTrackingVO(s.ClientConstTracking.INGAME_TIME_SPENT_CLIENT_TRACKING, c));
    }
  };
  CastleTimeSpendTrackingController.sendUserTrackingData = function () {
    return !!h.CastleModel.userData && h.CastleModel.userData.userID % 99 == 0;
  };
  CastleTimeSpendTrackingController.prototype.send = function (e, t = null) {
    this.sendCustomInfo(e, CastleTimeSpendTrackingController.getAreaType(), CastleTimeSpendTrackingController.getKingdomId(), t ? CastleTimeSpendTrackingController.getDialogName(t) : null, CastleTimeSpendTrackingController.getCurrentState(), new Date().getTime(), this.getUserLevel());
  };
  CastleTimeSpendTrackingController.prototype.getUserLevel = function () {
    return a.int(h.CastleModel.userData ? h.CastleModel.userData.level : -1);
  };
  CastleTimeSpendTrackingController.getDialogName = function (e) {
    if (typeof e == "function") {
      return String(e.toString().split(" ")[1]).replace("]", "");
    } else {
      return e.toString();
    }
  };
  CastleTimeSpendTrackingController.getCurrentState = function () {
    try {
      return a.int(f.CastleLayoutManager.getInstance().currentState);
    } catch (e) {
      return CastleTimeSpendTrackingController.ERROR_DEFAULT_INT;
    }
  };
  CastleTimeSpendTrackingController.getKingdomId = function () {
    try {
      return a.int(h.CastleModel.kingdomData.activeKingdomID);
    } catch (e) {
      return CastleTimeSpendTrackingController.ERROR_DEFAULT_INT;
    }
  };
  CastleTimeSpendTrackingController.getAreaType = function () {
    try {
      return a.int(h.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel.areaType);
    } catch (e) {
      return CastleTimeSpendTrackingController.ERROR_DEFAULT_INT;
    }
  };
  CastleTimeSpendTrackingController.ERROR_DEFAULT_INT = -1;
  return CastleTimeSpendTrackingController;
}(p.CastleEventDispatcher);
exports.CastleTimeSpendTrackingController = _;
var m = require("./34.js");
var f = require("./17.js");