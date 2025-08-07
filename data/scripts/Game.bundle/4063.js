Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./32.js");
var l = require("./4.js");
var c = function (e) {
  function CastleBuyLevelDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleBuyLevelDialog.NAME) || this;
  }
  n.__extends(CastleBuyLevelDialog, e);
  CastleBuyLevelDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(r.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  CastleBuyLevelDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(r.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  CastleBuyLevelDialog.prototype.onLevelUp = function (e) {
    var t = s.int(l.CastleModel.userData.level);
    if (t > a.SplitRunConst.MAX_LEVEL_TO_BUY_LEVEL) {
      this.hide();
    } else {
      this.yesNoWithCostsProperties.costs.getFirstItemOfType(u.CollectableEnum.C2).amount = l.CastleModel.buyLevelData.getLevelUpCost(t, t + 1);
    }
  };
  CastleBuyLevelDialog.__initialize_static_members = function () {
    CastleBuyLevelDialog.NAME = "CastleStandardYesNoWithCostsEx";
  };
  return CastleBuyLevelDialog;
}(require("./612.js").CastleConfirmCostsDialog);
exports.CastleBuyLevelDialog = c;
var u = require("./12.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();