Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./442.js");
var d = require("./220.js");
var p = require("./4.js");
var h = require("./27.js");
var g = require("./259.js");
var C = function (e) {
  function SamuraiBoosterDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, SamuraiBoosterDialog.NAME) || this;
  }
  n.__extends(SamuraiBoosterDialog, e);
  SamuraiBoosterDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.closeBtn]);
    this.textFieldManager.registerTextField(this.dialogDisp.titleTxt, new l.LocalizedTextVO("dialog_samuraiBooster_title")).autoFitToBounds = true;
    this.txt_message = this.textFieldManager.registerTextField(this.dialogDisp.msgTxt, new l.LocalizedTextVO("dialog_samuraiBooster_copy", [0]));
    this.txt_message.autoFitToBounds = true;
    this.txt_time = this.textFieldManager.registerTextField(this.dialogDisp.timeTxt, new c.TextVO(""));
    this.txt_time.mouseEnabled = false;
    this.txt_boost = this.textFieldManager.registerTextField(this.dialogDisp.boostTxt, new l.LocalizedTextVO(""));
    this.remainingTimeComponent = new g.CastleTimerComponent(this.txt_time, this.bindFunction(this.getTimerText));
  };
  SamuraiBoosterDialog.prototype.getTimerText = function (e) {
    return h.CastleTimeStringHelper.getEventTimeString(e);
  };
  SamuraiBoosterDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.txt_message.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
    this.dialogDisp.boostMC.toolTipText = {
      t: "dialog_samuraiBooster_boost_tt",
      p: [this.boosterVO.bonusPercentage]
    };
    this.dialogDisp.timeMC.toolTipText = "dialog_samuraiBooster_time_tt";
    this.txt_boost.textContentVO.textId = o.GenericTextIds.VALUE_PERCENTAGE_ADD;
    this.txt_boost.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
    this.updateDialog();
  };
  SamuraiBoosterDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.remainingTimeComponent.addEventListener(u.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
    p.CastleModel.boostData.addEventListener(d.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterChanged));
  };
  SamuraiBoosterDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.remainingTimeComponent.removeEventListener(u.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
    p.CastleModel.boostData.removeEventListener(d.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterChanged));
  };
  SamuraiBoosterDialog.prototype.onBoosterChanged = function (e) {
    if (s.instanceOfClass(e.boosterVO, "SamuraiBoosterShopVO")) {
      this.updateDialog();
    }
  };
  SamuraiBoosterDialog.prototype.onTimerExpired = function (e) {
    this.hide();
  };
  SamuraiBoosterDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.remainingTimeComponent.stop();
  };
  SamuraiBoosterDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.closeBtn:
        this.hide();
    }
  };
  SamuraiBoosterDialog.prototype.updateDialog = function () {
    this.remainingTimeComponent.start(this.boosterVO.remainingTimeInSeconds);
    this.dialogDisp.boostMC.toolTipText = {
      t: "dialog_samuraiBooster_boost_tt",
      p: [this.boosterVO.bonusPercentage]
    };
    this.txt_message.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
    this.txt_boost.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
  };
  Object.defineProperty(SamuraiBoosterDialog.prototype, "boosterVO", {
    get: function () {
      return p.CastleModel.boostData.getBoosterByID(r.BoosterConst.SAMURA_TOKEN_BOOST_ID);
    },
    enumerable: true,
    configurable: true
  });
  SamuraiBoosterDialog.__initialize_static_members = function () {
    SamuraiBoosterDialog.NAME = "SamuraiBooster";
  };
  return SamuraiBoosterDialog;
}(require("./11.js").CastleExternalDialog);
exports.SamuraiBoosterDialog = C;
a.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();