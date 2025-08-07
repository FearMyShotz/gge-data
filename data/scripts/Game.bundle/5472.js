Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./44.js");
var l = require("./5473.js");
var c = require("./1955.js");
var u = require("./4.js");
var d = require("./83.js");
var p = require("./99.js");
var h = function (e) {
  function MessagePrivateOfferVO() {
    var t = this;
    t._privateOfferType = 0;
    t._offerID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessagePrivateOfferVO, e);
  MessagePrivateOfferVO.prototype.parseMessageHeader = function (e) {
    var t = e.split("+");
    this._privateOfferType = parseInt(t[0]);
    this._offerID = parseInt(t[1]);
    this.checkMostRecentMessage();
  };
  MessagePrivateOfferVO.prototype.checkMostRecentMessage = function () {
    var e = u.CastleModel.messageData.mostRecentPOMessages.get(this.offerID);
    if (e) {
      var t = o.castAs(u.CastleModel.messageData.getMessageVOById(e), "MessagePrivateOfferVO");
      if (!t || t && t.getCumulativeSecondsSinceSent() > this.getCumulativeSecondsSinceSent()) {
        u.CastleModel.messageData.mostRecentPOMessages.set(this.offerID, this.messageID);
      }
    } else {
      u.CastleModel.messageData.mostRecentPOMessages.set(this.offerID, this.messageID);
    }
  };
  MessagePrivateOfferVO.prototype.parseSubject = function () {
    switch (this._privateOfferType) {
      case a.MessageConst.PRIVATE_OFFER_DUNGEON_TREASURE_CHEST:
        return s.Localize.text("message_header_dungeon_treasure_chest");
      case a.MessageConst.PRIVATE_OFFER_WHALE_CHEST:
        return s.Localize.text("eventBuilding_decoOffer");
      case a.MessageConst.PRIVATE_OFFER_FORUM_ADVERTISING:
        return s.Localize.text(C.CastleForumAdvertisementDialog.MESSAGE_TITLE);
      case a.MessageConst.PRIVATE_OFFER_EVENT_GIFT:
        return s.Localize.text("custom_offer_messageHeader_" + this._offerID);
      case a.MessageConst.PRIVATE_OFFER_DEFENSE:
        return s.Localize.text("custom_offer_messageHeader_DefenseOffer");
      case a.MessageConst.PRIVATE_OFFER_VOUCHER:
        return s.Localize.text("dialog_specialOffer_title_4");
      case a.MessageConst.PRIVATE_OFFER_TIME_CHALLENGE:
        return s.Localize.text("message_header_timeOffer_title");
      case a.MessageConst.PRIVATE_OFFER_BESTSELLER_SHOP:
        return s.Localize.text("dialog_privateBestsellerShop_title");
    }
    return s.Localize.text("dialog_messageTip_title_" + this._offerID);
  };
  Object.defineProperty(MessagePrivateOfferVO.prototype, "subject", {
    get: function () {
      if (p.AMessageVO.showOfferIDsInSubject) {
        return this.offerID.toString() + ":" + this._subject;
      } else {
        return this._subject;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.AMessageVO.prototype, "subject").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MessagePrivateOfferVO.prototype.parseSender = function () {
    if (this._privateOfferType == a.MessageConst.PRIVATE_OFFER_DUNGEON_TREASURE_CHEST) {
      return s.Localize.text(r.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_castleName_0"));
    } else {
      return s.Localize.text("system");
    }
  };
  Object.defineProperty(MessagePrivateOfferVO.prototype, "dialogInfo", {
    get: function () {
      switch (this._privateOfferType) {
        case a.MessageConst.PRIVATE_OFFER_DUNGEON_TREASURE_CHEST:
          return new d.DialogInfoVO(null, null, g.IngameClientCommands.OPEN_DUNGEON_TREASURE_CHEST_OFFER_DIALOG, this);
        case a.MessageConst.PRIVATE_OFFER_WHALE_CHEST:
        case a.MessageConst.PRIVATE_OFFER_EVENT_GIFT:
        case a.MessageConst.PRIVATE_OFFER_DEFENSE:
          return new d.DialogInfoVO(null, null, g.IngameClientCommands.OPEN_WHALE_CHEST_OFFER_DIALOG, this);
        case a.MessageConst.PRIVATE_OFFER_VOUCHER:
          return new d.DialogInfoVO(null, null, g.IngameClientCommands.OPEN_VOUCHER_OFFER_DIALOG, this);
        case a.MessageConst.PRIVATE_OFFER_FORUM_ADVERTISING:
          return new d.DialogInfoVO(C.CastleForumAdvertisementDialog, new l.CastleForumAdvertisementDialogProperties(this));
        case a.MessageConst.PRIVATE_OFFER_TIME_CHALLENGE:
        case a.MessageConst.PRIVATE_OFFER_BESTSELLER_SHOP:
          return new d.DialogInfoVO(null, null, g.IngameClientCommands.OPEN_GENERIC_OFFER_DIALOG, this);
      }
      return new d.DialogInfoVO(_.CastleMessageTipDialog, new c.CastleMessageTipDialogProperties(this));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessagePrivateOfferVO.prototype, "additionalIconName", {
    get: function () {
      if (this.isOfferActive()) {
        switch (this._privateOfferType) {
          case a.MessageConst.PRIVATE_OFFER_VOUCHER:
            return "CastleMessageIconsVoucherOffer";
          case a.MessageConst.PRIVATE_OFFER_TIME_CHALLENGE:
            return "CastleMessageIconsTimeChallenge";
          case a.MessageConst.PRIVATE_OFFER_BESTSELLER_SHOP:
            return "CastleMessageIconsBestsellerShop";
          default:
            return "CastleMessageIconsPrivateOffer";
        }
      }
      return "";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.AMessageVO.prototype, "additionalIconName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessagePrivateOfferVO.prototype, "privateOfferType", {
    get: function () {
      return this._privateOfferType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessagePrivateOfferVO.prototype, "offerID", {
    get: function () {
      return this._offerID;
    },
    enumerable: true,
    configurable: true
  });
  MessagePrivateOfferVO.prototype.isOfferActive = function () {
    switch (this.privateOfferType) {
      case a.MessageConst.PRIVATE_OFFER_DUNGEON_TREASURE_CHEST:
      case a.MessageConst.PRIVATE_OFFER_WHALE_CHEST:
      case a.MessageConst.PRIVATE_OFFER_EVENT_GIFT:
      case a.MessageConst.PRIVATE_OFFER_DEFENSE:
      case a.MessageConst.PRIVATE_OFFER_VOUCHER:
      case a.MessageConst.PRIVATE_OFFER_TIME_CHALLENGE:
      case a.MessageConst.PRIVATE_OFFER_BESTSELLER_SHOP:
        return u.CastleModel.privateOfferData.getOfferById(this.offerID) != null && u.CastleModel.messageData.mostRecentPOMessages.get(this.offerID) == this.messageID;
    }
    return false;
  };
  MessagePrivateOfferVO.prototype.canBeArchived = function () {
    return e.prototype.canBeArchived.call(this) && this._privateOfferType != a.MessageConst.PRIVATE_OFFER_BESTSELLER_SHOP;
  };
  MessagePrivateOfferVO.prototype.canBeDeleted = function () {
    return !this.isOfferActive() || this._privateOfferType == a.MessageConst.PRIVATE_OFFER_TIME_CHALLENGE;
  };
  return MessagePrivateOfferVO;
}(p.AMessageVO);
exports.MessagePrivateOfferVO = h;
var g = require("./29.js");
var C = require("./5474.js");
var _ = require("./1161.js");