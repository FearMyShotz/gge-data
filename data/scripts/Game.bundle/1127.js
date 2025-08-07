Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./69.js");
var l = require("./442.js");
var c = require("./221.js");
var u = require("./4.js");
var d = require("./27.js");
var p = require("./259.js");
var h = function (e) {
  function ACastlePointBoosterDialog(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ACastlePointBoosterDialog, e);
  ACastlePointBoosterDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this._itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO(this.titleText));
    this._itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO(this.descriptionText));
    this._itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new s.TextVO(""));
    this._itxt_time.mouseEnabled = false;
    this._itxt_bonus = this.textFieldManager.registerTextField(this.dialogDisp.mc_bonus.txt_bonus, new a.LocalizedTextVO("value_percentage_add"));
    this._itxt_bonus.mouseEnabled = false;
    this.dialogDisp.mc_time.toolTipText = "resttime";
    this.remainingTimeComponent = new p.CastleTimerComponent(this._itxt_time, this.bindFunction(this.getTimerText));
  };
  ACastlePointBoosterDialog.prototype.getTimerText = function (e) {
    return d.CastleTimeStringHelper.getEventTimeString(e);
  };
  ACastlePointBoosterDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateDialog();
  };
  ACastlePointBoosterDialog.prototype.updateDialog = function () {
    this.remainingTimeComponent.start(this.boosterVO.remainingTimeInSeconds);
    this.dialogDisp.mc_bonus.toolTipText = {
      t: this.bonusToolTipTextID(),
      p: [this.boosterVO.bonusPercentage]
    };
    this._itxt_copy.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
    this._itxt_bonus.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
  };
  ACastlePointBoosterDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.remainingTimeComponent.addEventListener(l.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
    u.CastleModel.boostData.addEventListener(c.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterChanged));
  };
  ACastlePointBoosterDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.remainingTimeComponent.removeEventListener(l.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
    u.CastleModel.boostData.removeEventListener(c.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterChanged));
  };
  ACastlePointBoosterDialog.prototype.onBoosterChanged = function (e) {
    this.updateDialog();
  };
  ACastlePointBoosterDialog.prototype.onTimerExpired = function (e) {
    this.hide();
  };
  ACastlePointBoosterDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.remainingTimeComponent.stop();
  };
  ACastlePointBoosterDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.btn_close) {
      this.hide();
    }
  };
  Object.defineProperty(ACastlePointBoosterDialog.prototype, "boosterVO", {
    get: function () {
      return u.CastleModel.boostData.getBoosterByID(this.dialogProperties.boosterID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePointBoosterDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePointBoosterDialog.prototype, "titleText", {
    get: function () {
      throw new r.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePointBoosterDialog.prototype, "descriptionText", {
    get: function () {
      throw new r.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  ACastlePointBoosterDialog.prototype.bonusToolTipTextID = function () {
    throw new r.AbstractMethodError();
  };
  return ACastlePointBoosterDialog;
}(require("./11.js").CastleExternalDialog);
exports.ACastlePointBoosterDialog = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");