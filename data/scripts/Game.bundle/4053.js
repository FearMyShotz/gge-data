Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./21.js");
var c = require("./30.js");
var u = require("./4.js");
var d = require("./11.js");
var p = require("./27.js");
var h = function (e) {
  function CastleFactionInvasionBoosterDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFactionInvasionBoosterDialog.NAME) || this;
  }
  n.__extends(CastleFactionInvasionBoosterDialog, e);
  CastleFactionInvasionBoosterDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_reputationBooster_title")).autoFitToBounds = true;
    this.txt_message = this.textFieldManager.registerTextField(this.dialogDisp.txt_message, new s.LocalizedTextVO("dialog_reputationBooster_copy", [0]));
    this.txt_message.autoFitToBounds = true;
    this.txt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new r.TextVO(""));
    this.txt_boost = this.textFieldManager.registerTextField(this.dialogDisp.txt_boost, new s.LocalizedTextVO(""));
  };
  CastleFactionInvasionBoosterDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.txt_message.textContentVO.textReplacements = [this.dialogProperties.boost];
    this.dialogDisp.mc_gallantry.toolTipText = {
      t: "dialog_reputationBooster_boost_tt",
      p: [this.dialogProperties.boost]
    };
    this.dialogDisp.mc_time.toolTipText = "dialog_reputationBooster_time_tt";
    this.txt_boost.textContentVO.textId = o.GenericTextIds.VALUE_PERCENTAGE_ADD;
    this.txt_boost.textContentVO.textReplacements = [this.dialogProperties.boost];
    this.onTimerUpdate();
  };
  CastleFactionInvasionBoosterDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    u.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleFactionInvasionBoosterDialog.prototype.hideLoaded = function (t = null) {
    u.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    e.prototype.hideLoaded.call(this);
  };
  CastleFactionInvasionBoosterDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleFactionInvasionBoosterDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionInvasionBoosterDialog.prototype.onTimerUpdate = function (e = null) {
    var t = this.dialogProperties.remainingDuration(e ? e.nowValue : c.CachedTimer.getCachedTimer());
    if (this.txt_time) {
      this.txt_time.textContentVO.stringValue = p.CastleTimeStringHelper.getEventTimeString(t);
      this.txt_time.autoFitToBounds = true;
    }
    if (t <= 0) {
      this.hide();
    }
  };
  CastleFactionInvasionBoosterDialog.__initialize_static_members = function () {
    CastleFactionInvasionBoosterDialog.NAME = "CastleFactionInvasionBooster";
  };
  return CastleFactionInvasionBoosterDialog;
}(d.CastleExternalDialog);
exports.CastleFactionInvasionBoosterDialog = h;
a.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();