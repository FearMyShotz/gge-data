Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./5538.js");
var r = require("./83.js");
var l = require("./99.js");
var c = function (e) {
  function MessageThankYouPackageVO() {
    var t = this;
    t.subtypePackage = 0;
    t.rewardAmount = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageThankYouPackageVO, e);
  MessageThankYouPackageVO.prototype.parseMessageHeader = function (e) {
    var t = e.split("-");
    this.subtypePackage = parseInt(t[0]);
    this.rewardAmount = parseInt(t[1]);
    var i = t[2].split("#");
    this.unitArray = [];
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          this.unitArray.push([parseInt(a.split("+")[0]), parseInt(a.split("+")[1])]);
        }
      }
    }
  };
  MessageThankYouPackageVO.prototype.parseSubject = function () {
    if (this.subtypePackage == o.MessageConst.SUBTYPE_SUPPORT_PACKAGE_LOST_FACTION_TOWERS) {
      return a.Localize.text("supportpacket_title");
    } else {
      return a.Localize.text("carepacket_title");
    }
  };
  MessageThankYouPackageVO.prototype.parseSender = function () {
    return a.Localize.text("system");
  };
  Object.defineProperty(MessageThankYouPackageVO.prototype, "dialogInfo", {
    get: function () {
      if (this.subtypePackage == o.MessageConst.SUBTYPE_THANK_YOU_PACKAGE_DESTROYED_FACTION_TOWERS) {
        return new r.DialogInfoVO(u.CastleFactionThankYouPackageDialog, new s.CastleFactionThankYouPackageDialogProperties(this.rewardAmount, this.unitArray, "carepacket_copy", true));
      } else if (this.subtypePackage == o.MessageConst.SUBTYPE_SUPPORT_PACKAGE_LOST_FACTION_TOWERS) {
        return new r.DialogInfoVO(u.CastleFactionThankYouPackageDialog, new s.CastleFactionThankYouPackageDialogProperties(this.rewardAmount, this.unitArray, "supportPackage_copy", false));
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return MessageThankYouPackageVO;
}(l.AMessageVO);
exports.MessageThankYouPackageVO = c;
var u = require("./5539.js");