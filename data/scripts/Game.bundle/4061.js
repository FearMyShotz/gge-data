Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./4062.js");
var c = require("./161.js");
var u = require("./4.js");
var d = require("./587.js");
var p = require("./8.js");
var h = function (e) {
  function ButtonBuyLevelComponent(t) {
    return e.call(this, o.instanceOfClass(t, "BasicButton") ? t : t.basicButton) || this;
  }
  n.__extends(ButtonBuyLevelComponent, e);
  ButtonBuyLevelComponent.prototype.init = function () {
    e.prototype.init.call(this);
    this.controller.addEventListener(c.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    this.updateButtonVisibility();
  };
  ButtonBuyLevelComponent.prototype.destroy = function () {
    this.controller.removeEventListener(c.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    e.prototype.destroy.call(this);
  };
  ButtonBuyLevelComponent.prototype.onXPChanged = function (e) {
    this.updateButtonVisibility();
  };
  ButtonBuyLevelComponent.prototype.onClickButton = function () {
    if (p.ButtonHelper.isButtonEnabled(this._button)) {
      var e = r.int(u.CastleModel.userData.level);
      var t = new g.CollectableList();
      t.addItem(new C.CollectableItemC2VO(u.CastleModel.buyLevelData.getLevelUpCost(e, e + 1)));
      _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleBuyLevelDialog, new d.CastleConfirmCostsDialogProperties(s.Localize.text("dialog_skipLevel_header"), s.Localize.text("dialog_skipLevel_desc"), t, null, this.bindFunction(this.onConfirm)));
    }
  };
  ButtonBuyLevelComponent.prototype.onConfirm = function (e) {
    u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SBuyLevelVO(u.CastleModel.userData.level + 1));
  };
  ButtonBuyLevelComponent.prototype.updateButtonVisibility = function () {
    var e = u.CastleModel.userData.splitRunData.getBooleanParam(a.SplitRunConst.BUY_LEVEL_TEST_PARAM, false);
    var t = r.int(u.CastleModel.userData.userLevel);
    this._button.visible = e && t >= a.SplitRunConst.MIN_LEVEL_TO_BUY_LEVEL && t <= a.SplitRunConst.MAX_LEVEL_TO_BUY_LEVEL;
  };
  return ButtonBuyLevelComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonBuyLevelComponent = h;
var g = require("./48.js");
var C = require("./128.js");
var _ = require("./9.js");
var m = require("./4063.js");