Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./557.js");
var a = require("./4.js");
var s = require("./110.js");
var r = function (e) {
  function StatusIconStartupLoginBonusComponent() {
    var t = e.call(this, "Btn_Registration_Reward", 0) || this;
    t.setTooltip("dialog_registerreward_title");
    return t;
  }
  n.__extends(StatusIconStartupLoginBonusComponent, e);
  StatusIconStartupLoginBonusComponent.prototype.addEventListenerForVisibility = function () {
    a.CastleModel.startUpBonusData.addEventListener(o.CastleLoginBonusEvent.LOGINBONUS_UPDATE, this.bindFunction(this.onLoginBonusUpdate));
  };
  StatusIconStartupLoginBonusComponent.prototype.removeEventListenerForVisibility = function () {
    a.CastleModel.startUpBonusData.removeEventListener(o.CastleLoginBonusEvent.LOGINBONUS_UPDATE, this.bindFunction(this.onLoginBonusUpdate));
  };
  StatusIconStartupLoginBonusComponent.prototype.onLoginBonusUpdate = function (e) {
    this.setVisibility();
  };
  StatusIconStartupLoginBonusComponent.prototype.onClick = function () {
    if (!a.CastleModel.tutorialData.isTutorialActive) {
      l.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastleStartupLoginBonusDialog);
    }
  };
  StatusIconStartupLoginBonusComponent.prototype.setVisibilityLoaded = function () {
    var e = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    if (a.CastleModel.userData.userLevel >= 5 && a.CastleModel.startUpBonusData.nextStartupLoginBonusID >= 0 && this.layoutManager.currentState != c.CastleLayoutManager.STATE_KINGDOMMAP && e) {
      if (a.CastleModel.startUpBonusData.canCollectBonus) {
        this.iconDisp.gotoAndStop(2);
      } else {
        this.iconDisp.gotoAndStop(1);
      }
      this.show();
    } else {
      this.hide();
    }
  };
  Object.defineProperty(StatusIconStartupLoginBonusComponent.prototype, "width", {
    get: function () {
      return 68;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ACastleStatusIcon.prototype, "width").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return StatusIconStartupLoginBonusComponent;
}(s.ACastleStatusIcon);
exports.StatusIconStartupLoginBonusComponent = r;
var l = require("./9.js");
var c = require("./17.js");
var u = require("./1834.js");