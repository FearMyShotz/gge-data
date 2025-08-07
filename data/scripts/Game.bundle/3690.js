Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./42.js");
var r = require("./8.js");
var l = require("./1760.js");
var c = createjs.Point;
var u = function (e) {
  function UnlockPrebuiltCastleForResourcesOrRubies(t, i) {
    var n = e.call(this, t, i) || this;
    r.ButtonHelper.initBasicButton(n.subLayerDisp.btn_buyWithResources);
    n.txt_btn_0 = n.textFieldManager.registerTextField(n.subLayerDisp.btn_buyWithResources.txt_value, new a.LocalizedTextVO(""));
    n.txt_btn_0.verticalAlign = s.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    return n;
  }
  n.__extends(UnlockPrebuiltCastleForResourcesOrRubies, e);
  UnlockPrebuiltCastleForResourcesOrRubies.prototype.update = function (t) {
    e.prototype.update.call(this, t);
    r.ButtonHelper.enableButton(this.subLayerDisp.btn_buyWithResources, true);
    this.txt_btn_0.textContentVO.textId = this.unlockButtonTextId;
  };
  UnlockPrebuiltCastleForResourcesOrRubies.prototype.updateCosts = function (t) {
    e.prototype.updateCosts.call(this, t);
    var i = 0;
    for (var n = 0; n < t.primaryCosts.length; ++n) {
      var o = t.primaryCosts.getItemByIndex(n);
      if (o.itemType != d.CollectableEnum.C2) {
        this.renderCost(o, this.subLayerDisp["mc_res" + i++], UnlockPrebuiltCastleForResourcesOrRubies.SMALL_COST_SIZE);
      }
    }
  };
  Object.defineProperty(UnlockPrebuiltCastleForResourcesOrRubies.prototype, "unlockTypeTextId", {
    get: function () {
      return "resource";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.UnlockPrebuiltCastleForRubies.prototype, "unlockTypeTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UnlockPrebuiltCastleForResourcesOrRubies.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.subLayerDisp.btn_buyWithResources) {
      this.buyPrebuiltCastle(this.bindFunction(this.onUnlockRequestSent_0));
    }
  };
  UnlockPrebuiltCastleForResourcesOrRubies.prototype.onUnlockRequestSent_0 = function () {
    this.disableUntilResponse(this.subLayerDisp.btn_buy);
    this.disableUntilResponse(this.subLayerDisp.btn_buyWithResources);
  };
  UnlockPrebuiltCastleForResourcesOrRubies.__initialize_static_members = function () {
    UnlockPrebuiltCastleForResourcesOrRubies.SMALL_COST_SIZE = new c(24, 24);
  };
  return UnlockPrebuiltCastleForResourcesOrRubies;
}(l.UnlockPrebuiltCastleForRubies);
exports.UnlockPrebuiltCastleForResourcesOrRubies = u;
var d = require("./12.js");
o.classImplementsInterfaces(u, "ICollectableRendererList", "ISublayer");
u.__initialize_static_members();