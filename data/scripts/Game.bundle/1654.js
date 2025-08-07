Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./278.js");
var s = require("./69.js");
var r = require("./26.js");
var l = require("./4.js");
var c = require("./8.js");
var u = function (e) {
  function ABasicScoreBarRewardListDialog(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ABasicScoreBarRewardListDialog, e);
  ABasicScoreBarRewardListDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_help]);
    this.sublayerSwitcher = new a.SublayerSwitcher(this.bindFunction(this.createProperties));
    this.generateSublayers();
  };
  ABasicScoreBarRewardListDialog.prototype.generateSublayers = function () {
    for (var e = 0; this.dialogDisp["sublayer_" + e];) {
      this.sublayerSwitcher.add(e, this.dialogDisp["tab_" + e], new d.GenericScoreBarRewardListSublayer(this.dialogDisp["sublayer_" + e]));
      e++;
    }
  };
  ABasicScoreBarRewardListDialog.prototype.onClick = function (e) {
    if (c.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.showHelp();
      }
    }
  };
  ABasicScoreBarRewardListDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.sublayerSwitcher.switchTo(this.dialogProperties.tabID);
    this.sublayerSwitcher.show();
  };
  ABasicScoreBarRewardListDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.sublayerSwitcher.hide();
  };
  ABasicScoreBarRewardListDialog.prototype.addEventListenerOnShow = function () {
    l.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  ABasicScoreBarRewardListDialog.prototype.onEventRemoved = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.eventID) {
      this.hide();
    }
  };
  ABasicScoreBarRewardListDialog.prototype.removeEventListenerOnHide = function () {
    l.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  ABasicScoreBarRewardListDialog.prototype.showHelp = function () {};
  ABasicScoreBarRewardListDialog.prototype.createProperties = function (e) {
    throw new s.AbstractMethodError();
  };
  Object.defineProperty(ABasicScoreBarRewardListDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  return ABasicScoreBarRewardListDialog;
}(require("./11.js").CastleExternalDialog);
exports.ABasicScoreBarRewardListDialog = u;
var d = require("./3415.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");