Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./4.js");
var s = require("./1493.js");
var r = require("./336.js");
var l = require("./566.js");
var c = function (e) {
  function EventJudgementVO(t, i) {
    var n = this;
    n._eventType = s.JudgementEventEnum.NONE;
    n._spotType = u.JudgementSpotEnum.UNKNOWN;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._eventType = t;
    n._spotType = i;
    n._group = "Judgement";
    n._name = "Event";
    n._type = "";
    n._rotationType = r.IsoObjectRotationEnum._1FrameFor2Dir;
    return n;
  }
  n.__extends(EventJudgementVO, e);
  EventJudgementVO.prototype.updateData = function () {
    this.updateRotation();
    e.prototype.updateData.call(this);
  };
  EventJudgementVO.prototype.updateRotation = function () {
    switch (this.spotType) {
      case u.JudgementSpotEnum.RESOURCE_FOOD:
        this._rotation = 1;
        break;
      default:
        this._rotation = 0;
    }
  };
  EventJudgementVO.prototype.getVisualClassName = function () {
    return this.eventType.name + "JudgementIso";
  };
  EventJudgementVO.prototype.getInfoTooltipLine1 = function () {
    return o.Localize.text("judgement_" + a.CastleModel.judgementData.activeJudgement.id + "_name");
  };
  EventJudgementVO.prototype.getInfoTooltipLine2 = function () {
    return o.Localize.text("clickToOpen");
  };
  Object.defineProperty(EventJudgementVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AInteractiveIsoObjectVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventJudgementVO.prototype, "isClickAvailable", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AInteractiveIsoObjectVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventJudgementVO.prototype, "eventType", {
    get: function () {
      return this._eventType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventJudgementVO.prototype, "spotType", {
    get: function () {
      return this._spotType;
    },
    enumerable: true,
    configurable: true
  });
  return EventJudgementVO;
}(l.AInteractiveIsoObjectVO);
exports.EventJudgementVO = c;
var u = require("./773.js");