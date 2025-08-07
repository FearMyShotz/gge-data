Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./44.js");
var l = require("./5435.js");
var c = require("./5436.js");
var u = require("./112.js");
var d = require("./83.js");
var p = require("./99.js");
var h = function (e) {
  function MessageConquerableAreaVO() {
    var t = this;
    t._subtypeSiege = 0;
    t._areaType = 0;
    t._kingdomID = 0;
    t._ownerID = 0;
    t._attackerID = 0;
    t._attackerName = "";
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageConquerableAreaVO, e);
  MessageConquerableAreaVO.prototype.parseMessageHeader = function (e) {
    var t = e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER)[0].split("+");
    var i = e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER)[1].split("+");
    this._areaType = parseInt(t[0]);
    if (t.length > 2) {
      this._subtypeSiege = parseInt(t[2]);
    } else {
      this._subtypeSiege = parseInt(t[1]);
    }
    this._kingdomID = parseInt(i[0]);
    this._ownerID = parseInt(i[1]);
    this._areaName = i[2];
    if (i.length > 3) {
      this._attackerID = parseInt(i[3]);
      this._attackerName = i[4];
    }
  };
  MessageConquerableAreaVO.prototype.parseSubject = function () {
    if (this.forwarded) {
      return this._senderName;
    }
    if (this.subtypeSiege == o.MessageConst.SUBTYPE_CONQUERABLE_AREA_LOST) {
      if (this.areaType == a.WorldConst.AREA_TYPE_OUTPOST) {
        return s.Localize.text("dialog_messageHeader_outpostLost");
      }
      if (this.areaType == a.WorldConst.AREA_TYPE_FACTION_CAMP) {
        return s.Localize.text("dialog_messageHeader_factionCampLost");
      }
      if (this.areaType == a.WorldConst.AREA_TYPE_METROPOL) {
        return s.Localize.text(r.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_metropolLost"));
      }
      if (this.areaType == a.WorldConst.AREA_TYPE_CAPITAL) {
        return s.Localize.text("dialog_messageHeader_capitalLost");
      }
    } else if (this.subtypeSiege == o.MessageConst.SUBTYPE_NEW_SIEGE) {
      if (this.areaType == a.WorldConst.AREA_TYPE_OUTPOST) {
        return s.Localize.text("dialog_messageHeader_outpostNewConquering");
      }
      if (this.areaType == a.WorldConst.AREA_TYPE_METROPOL) {
        return s.Localize.text(r.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_metropolConquered"));
      }
      if (this.areaType == a.WorldConst.AREA_TYPE_CAPITAL) {
        return s.Localize.text("dialog_messageHeader_capitalConquered");
      }
    } else if (this.subtypeSiege == o.MessageConst.SUBTYPE_SIEGE_CANCELED) {
      if (this.areaType == a.WorldConst.AREA_TYPE_OUTPOST) {
        return s.Localize.text("dialog_messageHeader_siegeCancelledByPlayer");
      }
      if (this.areaType == a.WorldConst.AREA_TYPE_FACTION_CAMP) {
        return s.Localize.text("dialog_messageHeader_siegeCancelledByPlayer");
      }
      if (this.areaType == a.WorldConst.AREA_TYPE_METROPOL) {
        return s.Localize.text(r.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_metropolConquered"));
      }
      if (this.areaType == a.WorldConst.AREA_TYPE_CAPITAL) {
        return s.Localize.text("dialog_messageHeader_capitalConquered");
      }
    } else if (this.subtypeSiege == o.MessageConst.SUBTYPE_CONQUERABLE_AREA_CONQUERED) {
      if (this.areaType == a.WorldConst.AREA_TYPE_OUTPOST) {
        return s.Localize.text("dialog_messageHeader_outpostConquered");
      }
      if (this.areaType == a.WorldConst.AREA_TYPE_FACTION_CAMP) {
        return s.Localize.text("dialog_messageHeader_factionCampConquered");
      }
      if (this.areaType == a.WorldConst.AREA_TYPE_VILLAGE) {
        return s.Localize.text("dialog_messageHeader_villageConquered");
      }
      if (this.areaType == a.WorldConst.AREA_TYPE_METROPOL) {
        return s.Localize.text(r.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_metropolConquered"));
      }
      if (this.areaType == a.WorldConst.AREA_TYPE_CAPITAL) {
        return s.Localize.text("dialog_messageHeader_capitalConquered");
      }
      if (this.areaType == a.WorldConst.AREA_TYPE_MONUMENT) {
        return s.Localize.text("dialog_messageHeader_monumentConquered");
      }
      if (this.areaType == a.WorldConst.AREA_TYPE_LABORATORY) {
        return s.Localize.text("dialog_messageHeader_laboratoryConquered");
      }
      if (this.areaType == a.WorldConst.AREA_TYPE_KINGS_TOWER) {
        return s.Localize.text(r.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_kingstowerConquered"));
      }
    }
    return "";
  };
  MessageConquerableAreaVO.prototype.parseSender = function () {
    if (this.areaName && this.areaName != "") {
      return this.areaName;
    } else {
      return u.PlayerHelper.getNPCCastleName(this.kingdomID, this.ownerID, this.areaType);
    }
  };
  Object.defineProperty(MessageConquerableAreaVO.prototype, "dialogInfo", {
    get: function () {
      if (this.areaType == a.WorldConst.AREA_TYPE_OUTPOST || this.areaType == a.WorldConst.AREA_TYPE_METROPOL || this.areaType == a.WorldConst.AREA_TYPE_CAPITAL || this.areaType == a.WorldConst.AREA_TYPE_FACTION_CAMP) {
        return new d.DialogInfoVO(l.CastleSiegeMessageDialog, new c.CastleSiegeMessageDialogProperties(this));
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageConquerableAreaVO.prototype, "subtypeSiege", {
    get: function () {
      return this._subtypeSiege;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageConquerableAreaVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageConquerableAreaVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageConquerableAreaVO.prototype, "ownerID", {
    get: function () {
      return this._ownerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageConquerableAreaVO.prototype, "areaName", {
    get: function () {
      return this._areaName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageConquerableAreaVO.prototype, "attackerID", {
    get: function () {
      return this._attackerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageConquerableAreaVO.prototype, "attackerName", {
    get: function () {
      return this._attackerName;
    },
    enumerable: true,
    configurable: true
  });
  return MessageConquerableAreaVO;
}(p.AMessageVO);
exports.MessageConquerableAreaVO = h;