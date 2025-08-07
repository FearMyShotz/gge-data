Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./4.js");
var l = function (e) {
  function CastleHandleSeasonDialogProperties(t) {
    var i = e.call(this) || this;
    i._seasonEventVO = t;
    return i;
  }
  n.__extends(CastleHandleSeasonDialogProperties, e);
  CastleHandleSeasonDialogProperties.prototype.hasTimer = function () {
    return true;
  };
  CastleHandleSeasonDialogProperties.prototype.getRemainingTime = function () {
    if (r.CastleModel.specialEventData.activeSeasonVO != null) {
      return s.int(this._seasonEventVO.remainingEventTimeInSeconds);
    } else {
      return 0;
    }
  };
  CastleHandleSeasonDialogProperties.prototype.getTitleString = function () {
    return this._seasonEventVO.seasonNameString;
  };
  CastleHandleSeasonDialogProperties.prototype.getName = function () {
    return this._seasonEventVO.eventType;
  };
  CastleHandleSeasonDialogProperties.prototype.getBackgroundSkinClassName = function () {
    return "SeasonDialogBackground_" + this._seasonEventVO.eventId;
  };
  CastleHandleSeasonDialogProperties.prototype.getSpaceID = function () {
    return this._seasonEventVO.mapID;
  };
  CastleHandleSeasonDialogProperties.prototype.getCrestLeft = function () {
    return c.CastleNPCOwnerFactory.getCrusadeCrest(this._seasonEventVO.eventId);
  };
  CastleHandleSeasonDialogProperties.prototype.getCrestRight = function () {
    return this.getCrestLeft();
  };
  CastleHandleSeasonDialogProperties.prototype.isUnlocked = function () {
    return !this._seasonEventVO.isLocked;
  };
  CastleHandleSeasonDialogProperties.prototype.getFirstSeasonReward = function () {
    return this._seasonEventVO.rewardList.getItemByIndexSave(0);
  };
  CastleHandleSeasonDialogProperties.prototype.getEventId = function () {
    return s.int(this._seasonEventVO.eventId);
  };
  Object.defineProperty(CastleHandleSeasonDialogProperties.prototype, "seasonEventVO", {
    get: function () {
      return this._seasonEventVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleHandleSeasonDialogProperties;
}(o.BasicProperties);
exports.CastleHandleSeasonDialogProperties = l;
var c = require("./387.js");
a.classImplementsInterfaces(l, "ICastleHandleSpaceDialogProperties");