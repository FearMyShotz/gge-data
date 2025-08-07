Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./753.js");
var u = require("./21.js");
var d = require("./4.js");
var p = require("./27.js");
var h = require("./259.js");
var g = function (e) {
  function CastleFameBoosterEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFameBoosterEventDialog.NAME) || this;
  }
  n.__extends(CastleFameBoosterEventDialog, e);
  CastleFameBoosterEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btnClose]);
    this.tfTitle = this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new r.LocalizedTextVO("eventBuilding_fameBoost"));
    this.tfDesc = this.textFieldManager.registerTextField(this.dialogDisp.tfDesc, new r.LocalizedTextVO("dialog_fameBoost_eventcamp_description"));
    this.tfTime = this.textFieldManager.registerTextField(this.dialogDisp.timeContainer.tfTime, new l.TextVO(""));
    this.tfTime.mouseEnabled = false;
    this.tfBonus = this.textFieldManager.registerTextField(this.dialogDisp.bonusContainer.tfBonus, new r.LocalizedTextVO("value_percentage_add"));
    this.tfBonus.mouseEnabled = false;
    this.dialogDisp.timeContainer.toolTipText = "resttime";
    this.remainingTimeComponent = new h.CastleTimerComponent(this.tfTime, this.bindFunction(this.getTimerText));
  };
  CastleFameBoosterEventDialog.prototype.getTimerText = function (e) {
    return p.CastleTimeStringHelper.getEventTimeString(e);
  };
  CastleFameBoosterEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateDialog();
  };
  CastleFameBoosterEventDialog.prototype.updateDialog = function () {
    if (this.remainingEventTimeInSeconds == -1) {
      this.hide();
    }
    this.remainingTimeComponent.start(this.remainingEventTimeInSeconds);
    this.dialogDisp.bonusContainer.toolTipText = {
      t: "dialog_fameBoost_bonus_tooltip",
      p: [this.bonusPercentage]
    };
    this.tfDesc.textContentVO.textReplacements = [this.bonusPercentage];
    this.tfBonus.textContentVO.textReplacements = [this.bonusPercentage];
  };
  Object.defineProperty(CastleFameBoosterEventDialog.prototype, "bonusPercentage", {
    get: function () {
      return c.CastleFameHelper.getFameBoosterBonus(true, false);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFameBoosterEventDialog.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      if (c.CastleFameHelper.isOfferBonusBetterThanEvent()) {
        return this.privateFameBooster.remainingTimeInSeconds;
      } else if (this.gloryBoosterEventVO) {
        return this.gloryBoosterEventVO.remainingEventTimeInSeconds;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleFameBoosterEventDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    d.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleFameBoosterEventDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    d.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleFameBoosterEventDialog.prototype.onTimerUpdate = function (e) {
    this.updateDialog();
  };
  CastleFameBoosterEventDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.remainingTimeComponent.stop();
  };
  CastleFameBoosterEventDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.btnClose) {
      this.hide();
    }
  };
  Object.defineProperty(CastleFameBoosterEventDialog.prototype, "privateFameBooster", {
    get: function () {
      return d.CastleModel.boostData.getBoosterByID(a.BoosterConst.GLORY_BOOST_ID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFameBoosterEventDialog.prototype, "gloryBoosterEventVO", {
    get: function () {
      return d.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_GLORY_BOOSTER);
    },
    enumerable: true,
    configurable: true
  });
  CastleFameBoosterEventDialog.__initialize_static_members = function () {
    CastleFameBoosterEventDialog.NAME = "CastleFameBoosterEventExternal";
  };
  return CastleFameBoosterEventDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleFameBoosterEventDialog = g;
o.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();