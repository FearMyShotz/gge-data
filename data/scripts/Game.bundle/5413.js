Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./5414.js");
var r = require("./83.js");
var l = require("./99.js");
var c = function (e) {
  function MessageAllianceWarVO() {
    var t = this;
    t._subtypeAllianceWar = 0;
    t._alliedMemberOrAllianceID = 0;
    t._enemyAllianceID = 0;
    t._enemyPeaceOfferEndTimeStamp = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageAllianceWarVO, e);
  MessageAllianceWarVO.prototype.parseMessageHeader = function (e) {
    var t = e.split("*");
    this._subtypeAllianceWar = parseInt(t[0]);
    this._alliedMemberOrAllianceID = parseInt(t[1]);
    this._alliedMemberOrAllianceName = t[2];
    this._enemyAllianceID = parseInt(t[3]);
    this._enemyAllianceName = t[4];
    if (this.subtypeAllianceWar == o.MessageConst.SUBTYPE_ALLIANCE_ENEMY_END_WAR && t.length > 5) {
      this._enemyPeaceOfferEndTimeStamp = parseFloat(t[5]);
    }
  };
  MessageAllianceWarVO.prototype.parseSubject = function () {
    if (this._subtypeAllianceWar == o.MessageConst.SUBTYPE_ALLIANCE_ENEMY_END_WAR) {
      return a.Localize.text("dialog_allianceDiplomacy_peaceOffer_title");
    } else {
      return a.Localize.text("message_autoWar_subject");
    }
  };
  MessageAllianceWarVO.prototype.parseSender = function () {
    return this._enemyAllianceName;
  };
  Object.defineProperty(MessageAllianceWarVO.prototype, "dialogInfo", {
    get: function () {
      return new r.DialogInfoVO(u.CastleAllianceWarPeaceMessageDialog, new s.CastleAllianceWarPeaceMessageDialogProperties(this));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceWarVO.prototype, "additionalIconName", {
    get: function () {
      return "CastleMessageIconsAutowar";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AMessageVO.prototype, "additionalIconName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceWarVO.prototype, "subtypeAllianceWar", {
    get: function () {
      return this._subtypeAllianceWar;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceWarVO.prototype, "alliedMemberOrAllianceID", {
    get: function () {
      return this._alliedMemberOrAllianceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceWarVO.prototype, "alliedMemberOrAllianceName", {
    get: function () {
      return this._alliedMemberOrAllianceName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceWarVO.prototype, "enemyAllianceID", {
    get: function () {
      return this._enemyAllianceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceWarVO.prototype, "enemyAllianceName", {
    get: function () {
      return this._enemyAllianceName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceWarVO.prototype, "enemyPeaceOfferEndTimeStamp", {
    get: function () {
      return this._enemyPeaceOfferEndTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  return MessageAllianceWarVO;
}(l.AMessageVO);
exports.MessageAllianceWarVO = c;
var u = require("./5415.js");