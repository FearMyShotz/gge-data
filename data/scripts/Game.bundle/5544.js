Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./83.js");
var s = require("./99.js");
var r = require("./5545.js");
var l = require("./4.js");
var c = require("./1.js");
var u = require("./5547.js");
var d = function (e) {
  function MessageBuildingDisabledInfoVO() {
    var t = this;
    t.wodID = -1;
    t.objectID = -1;
    t.areaType = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageBuildingDisabledInfoVO, e);
  MessageBuildingDisabledInfoVO.prototype.parseMessageHeader = function (e) {
    var t = e.split("+");
    this.resourceKey = t[0];
    this.kingdomID = parseInt(t[1]);
    this.areaID = parseInt(t[2]);
    this.wodID = parseInt(t[3]);
    this.objectID = parseInt(t[4]);
    this.areaName = t[5];
    this.areaType = parseInt(t[6]);
  };
  MessageBuildingDisabledInfoVO.prototype.parseSubject = function () {
    if (this.isBreweryMessage) {
      return o.Localize.text("message_header_relicBrewery_insufficientResources");
    } else {
      return null;
    }
  };
  MessageBuildingDisabledInfoVO.prototype.parseSender = function () {
    return this.areaName;
  };
  Object.defineProperty(MessageBuildingDisabledInfoVO.prototype, "dialogInfo", {
    get: function () {
      if (this.isBreweryMessage) {
        return new a.DialogInfoVO(r.CastleBreweryShortageDialog, new u.CastleBreweryShortageDialogProperties(this));
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBuildingDisabledInfoVO.prototype, "isBreweryMessage", {
    get: function () {
      var e = l.CastleModel.wodData.getBuildingVOById(this.wodID);
      return c.instanceOfClass(e, "RelicBreweryBuildingVO");
    },
    enumerable: true,
    configurable: true
  });
  return MessageBuildingDisabledInfoVO;
}(s.AMessageVO);
exports.MessageBuildingDisabledInfoVO = d;