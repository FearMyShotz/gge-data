Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./28.js");
var u = require("./21.js");
var d = require("./30.js");
var p = require("./4.js");
var h = require("./176.js");
var g = function (e) {
  function CastlePostPostAttackFactionDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePostPostAttackFactionDialog.NAME) || this;
  }
  n.__extends(CastlePostPostAttackFactionDialog, e);
  CastlePostPostAttackFactionDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_no, this.dialogDisp.btn_yes]);
    this.iAttackWrningTxt ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("faction_attackwarning_copy1"));
    this.iAttackWarningTxt2 ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new r.LocalizedTextVO("faction_attackwarning_copy2"));
    this.iTitleTxt ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("generic_alert_watchout"));
    this.iUnitAmountTxt ||= this.textFieldManager.registerTextField(this.dialogDisp.info_units.txt_value, new l.TextVO(this.dialogProperties.armySize.toString()));
    this.iTimerTxt ||= this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new l.TextVO(""));
    e.prototype.initLoaded.call(this, t);
  };
  CastlePostPostAttackFactionDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.dialogDisp.info_time.toolTipText = "travelTime";
    this.dialogDisp.info_units.toolTipText = "dialog_shortArmy_title";
    this.onUpdateTimer();
  };
  CastlePostPostAttackFactionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_no:
        this.hide();
        break;
      case this.dialogDisp.btn_yes:
        if (h.CastleDataHolder.instance.commandVO != null) {
          h.CastleDataHolder.instance.commandVO.FC = 1;
          p.CastleModel.smartfoxClient.sendCommandVO(h.CastleDataHolder.instance.commandVO);
          h.CastleDataHolder.instance.commandVO = null;
        }
        this.hide();
    }
  };
  CastlePostPostAttackFactionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    p.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
  };
  CastlePostPostAttackFactionDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    p.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
  };
  CastlePostPostAttackFactionDialog.prototype.onUpdateTimer = function (e = null) {
    var t = Math.max(this.dialogProperties.armyArrivedTimeStamp - d.CachedTimer.getCachedTimer(), 0);
    this.iTimerTxt.textContentVO.stringValue = o.TimeStringHelper.getTimeToString(t * c.ClientConstTime.MILLISEC_2_SEC, o.TimeStringHelper.TWO_TIME_FORMAT, s.Localize.text);
  };
  Object.defineProperty(CastlePostPostAttackFactionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePostPostAttackFactionDialog.__initialize_static_members = function () {
    CastlePostPostAttackFactionDialog.NAME = "CastlePostPostAttackFactionEx";
  };
  return CastlePostPostAttackFactionDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastlePostPostAttackFactionDialog = g;
a.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();