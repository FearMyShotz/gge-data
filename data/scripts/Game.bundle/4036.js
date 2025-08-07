Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./442.js");
var u = require("./4.js");
var d = require("./27.js");
var p = require("./259.js");
var h = function (e) {
  function CastlePersonalFameBoosterDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePersonalFameBoosterDialog.NAME) || this;
  }
  n.__extends(CastlePersonalFameBoosterDialog, e);
  CastlePersonalFameBoosterDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btnClose]);
    this.tfTitle = this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new r.LocalizedTextVO("dialog_fameBoost_package_title"));
    this.tfDesc = this.textFieldManager.registerTextField(this.dialogDisp.tfDesc, new r.LocalizedTextVO("dialog_fameBoost_package_description"));
    this.tfTime = this.textFieldManager.registerTextField(this.dialogDisp.timeContainer.tfTime, new l.TextVO(""));
    this.tfTime.mouseEnabled = false;
    this.tfBonus = this.textFieldManager.registerTextField(this.dialogDisp.bonusContainer.tfBonus, new r.LocalizedTextVO("value_percentage_add"));
    this.tfBonus.mouseEnabled = false;
    this.dialogDisp.timeContainer.toolTipText = "resttime";
    this.remainingTimeComponent = new p.CastleTimerComponent(this.tfTime, this.bindFunction(this.getTimerText));
  };
  CastlePersonalFameBoosterDialog.prototype.getTimerText = function (e) {
    return d.CastleTimeStringHelper.getEventTimeString(e);
  };
  CastlePersonalFameBoosterDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.remainingTimeComponent.start(this.boosterVO.remainingTimeInSeconds);
    this.dialogDisp.bonusContainer.toolTipText = {
      t: "dialog_fameBoost_bonus_tooltip",
      p: [this.boosterVO.bonusPercentage]
    };
    this.tfDesc.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
    this.tfBonus.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
    this.colorCrest();
  };
  CastlePersonalFameBoosterDialog.prototype.colorCrest = function () {
    for (var e = u.CastleModel.userData.playerCrest.colorsTwo, t = 0; t < e.length; t++) {
      var i = new o.ColorTransform();
      i.color = e[t];
      this.dialogDisp.colorChange["cc" + t].useFilters([new createjs.ColorFilter(i.redMultiplier, i.greenMultiplier, i.blueMultiplier, i.alphaMultiplier, i.redOffset, i.greenOffset, i.blueOffset, i.alphaOffset)]);
    }
  };
  CastlePersonalFameBoosterDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.remainingTimeComponent.addEventListener(c.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
  };
  CastlePersonalFameBoosterDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.remainingTimeComponent.removeEventListener(c.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
  };
  CastlePersonalFameBoosterDialog.prototype.onTimerExpired = function (e) {
    this.hide();
  };
  CastlePersonalFameBoosterDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.remainingTimeComponent.stop();
  };
  CastlePersonalFameBoosterDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.btnClose) {
      this.hide();
    }
  };
  Object.defineProperty(CastlePersonalFameBoosterDialog.prototype, "boosterVO", {
    get: function () {
      return u.CastleModel.boostData.getBoosterByID(s.BoosterConst.PERSONAL_GLORY_BOOST_ID);
    },
    enumerable: true,
    configurable: true
  });
  CastlePersonalFameBoosterDialog.__initialize_static_members = function () {
    CastlePersonalFameBoosterDialog.NAME = "CastlePersonalFameBoosterExternal";
  };
  return CastlePersonalFameBoosterDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastlePersonalFameBoosterDialog = h;
a.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();