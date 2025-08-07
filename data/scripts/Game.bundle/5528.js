Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./481.js");
var u = require("./5529.js");
var d = require("./83.js");
var p = require("./99.js");
var h = function (e) {
  function MessageStarveInfoVO() {
    var t = this;
    t._dieCount = 0;
    t._kingdomID = -1;
    t._areaID = -1;
    t._areaType = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageStarveInfoVO, e);
  MessageStarveInfoVO.prototype.parseMessageHeader = function (e) {
    var t = e.split("+");
    this._dieCount = parseInt(t[0]);
    if (t.length > 1) {
      this._areaName = t[1];
    }
    if (t.length > 2) {
      this._kingdomID = l.int(t[2]);
      this._areaID = l.int(t[3]);
    }
    this._areaType = l.int(t[4]);
    this._resourceKey = t[5];
  };
  MessageStarveInfoVO.prototype.parseSubject = function () {
    if (this.areaType > -1) {
      if (this.kingdomID != -1 || this.areaID != -1) {
        return r.Localize.text("dialog_desertedTroops_title");
      }
      switch (this.areaType) {
        case s.WorldConst.AREA_TYPE_VILLAGE:
          return r.Localize.text("dialog_messageHeader_villageLost");
        case s.WorldConst.AREA_TYPE_ISLE_RESOURCE:
          return r.Localize.text("dialog_messageHeader_islandLost");
        case s.WorldConst.AREA_TYPE_MONUMENT:
          return r.Localize.text("dialog_messageHeader_monumentLost");
        case s.WorldConst.AREA_TYPE_LABORATORY:
          return r.Localize.text("dialog_messageHeader_laboratoryLost");
        case s.WorldConst.AREA_TYPE_KINGS_TOWER:
          return r.Localize.text("dialog_messageHeader_kingstowerLost");
        default:
          return r.Localize.text("dialog_desertedTroops_title");
      }
    } else {
      switch (this.messageType) {
        case a.MessageConst.MESSAGE_TYPE_STARVE_INFO:
          return r.Localize.text(this.isBeef ? "message_header_desertedTroops_beefUnits_title" : this.isMead ? "message_header_desertedTroops_meadUnits_title" : "dialog_desertedTroops_title");
        case a.MessageConst.MESSAGE_TYPE_STARVE_VILLAGE_LOST:
          return r.Localize.text("dialog_messageHeader_villageLost");
        case a.MessageConst.MESSAGE_TYPE_STARVE_ISLE_RESOURCE_LOST:
          return r.Localize.text("dialog_messageHeader_islandLost");
        default:
          return r.Localize.text(this.isBeef ? "message_header_desertedTroops_beefUnits_title" : this.isMead ? "message_header_desertedTroops_meadUnits_title" : "dialog_desertedTroops_title");
      }
    }
  };
  MessageStarveInfoVO.prototype.parseSender = function () {
    if (parseInt(this.areaName) == o.EventConst.EVENTCAMP_AREA_ID) {
      return r.Localize.text("dialog_seasonEvent_2_Camp");
    } else {
      return this.areaName;
    }
  };
  Object.defineProperty(MessageStarveInfoVO.prototype, "dialogInfo", {
    get: function () {
      return new d.DialogInfoVO(g.CastleDesertedTroopsDialog, new u.CastleDesertedTroopsDialogProperties(this));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "dieCount", {
    get: function () {
      return this._dieCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "areaName", {
    get: function () {
      return this._areaName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "resourceKey", {
    get: function () {
      return this._resourceKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "areaID", {
    get: function () {
      return this._areaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "isMead", {
    get: function () {
      return this.resourceKey == C.CollectableItemMeadVO.SERVER_KEY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "isBeef", {
    get: function () {
      return this.resourceKey == c.CollectableItemBeefVO.SERVER_KEY;
    },
    enumerable: true,
    configurable: true
  });
  return MessageStarveInfoVO;
}(p.AMessageVO);
exports.MessageStarveInfoVO = h;
var g = require("./5530.js");
var C = require("./532.js");