Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./26.js");
var s = require("./161.js");
var r = require("./4.js");
var l = require("./9.js");
var c = require("./839.js");
var u = require("./840.js");
var d = function (e) {
  function AStatusIconSeasonGacha(t) {
    return e.call(this, t, new o.TextVO("")) || this;
  }
  n.__extends(AStatusIconSeasonGacha, e);
  AStatusIconSeasonGacha.prototype.addEventListenerForVisibility = function () {
    this.controller.addEventListener(s.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onRefreshItem));
    r.CastleModel.specialEventData.addEventListener(a.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshItem));
    r.CastleModel.specialEventData.addEventListener(a.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRefreshItem));
    r.CastleModel.specialEventData.addEventListener(a.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onRefreshItem));
  };
  AStatusIconSeasonGacha.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
  };
  AStatusIconSeasonGacha.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(s.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onRefreshItem));
    r.CastleModel.specialEventData.removeEventListener(a.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshItem));
    r.CastleModel.specialEventData.removeEventListener(a.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRefreshItem));
    r.CastleModel.specialEventData.removeEventListener(a.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onRefreshItem));
  };
  AStatusIconSeasonGacha.prototype.onRefreshItem = function (e = null) {
    this.update();
  };
  AStatusIconSeasonGacha.prototype.updateLoaded = function () {
    this.setVisibilityLoaded();
  };
  AStatusIconSeasonGacha.prototype.setVisibilityLoaded = function () {
    if (this.eventVO && this.eventVO.minLevel <= r.CastleModel.userData.level) {
      this.show();
    } else {
      this.hide();
    }
  };
  AStatusIconSeasonGacha.prototype.onClick = function () {
    l.CastleDialogHandler.getInstance().registerDefaultDialogs(c.SeasonGachaEventMainDialog, new u.SeasonGachaEventMainDialogProperties(this.eventVO));
  };
  Object.defineProperty(AStatusIconSeasonGacha.prototype, "eventVO", {
    get: function () {
      return r.CastleModel.specialEventData.getActiveEventByEventId(this.eventID);
    },
    enumerable: true,
    configurable: true
  });
  AStatusIconSeasonGacha.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.eventVO) {
      this.setTooltip("event_title_" + this.eventVO.eventId);
    }
  };
  AStatusIconSeasonGacha.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
  };
  AStatusIconSeasonGacha.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
  };
  Object.defineProperty(AStatusIconSeasonGacha.prototype, "eventID", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  return AStatusIconSeasonGacha;
}(require("./363.js").AEventHubItemStatusIcon);
exports.AStatusIconSeasonGacha = d;