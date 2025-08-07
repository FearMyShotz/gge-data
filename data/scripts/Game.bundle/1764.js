Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./4.js");
var d = function (e) {
  function CastleHandleKingdomDialogProperties(t) {
    var i = e.call(this) || this;
    i._kingdomVO = t;
    return i;
  }
  n.__extends(CastleHandleKingdomDialogProperties, e);
  CastleHandleKingdomDialogProperties.prototype.hasTimer = function () {
    return this._kingdomVO.hasTimer;
  };
  CastleHandleKingdomDialogProperties.prototype.getRemainingTime = function () {
    return c.int(this._kingdomVO.resetTime);
  };
  CastleHandleKingdomDialogProperties.prototype.getTitleString = function () {
    return this._kingdomVO.kingdomNameString;
  };
  CastleHandleKingdomDialogProperties.prototype.getName = function () {
    return this._kingdomVO.kingdomName;
  };
  CastleHandleKingdomDialogProperties.prototype.getBackgroundSkinClassName = function () {
    return "KingdomDialogBackground_" + this._kingdomVO.kingdomName;
  };
  CastleHandleKingdomDialogProperties.prototype.getCrestLeft = function () {
    if (this._kingdomVO.kID == s.FactionConst.KINGDOM_ID) {
      return p.FactionEventVO.RED_CREST_VO;
    } else if (this._kingdomVO.kID == r.WorldClassic.KINGDOM_ID) {
      return u.CastleModel.userData.playerCrest;
    } else {
      return h.CastleNPCOwnerFactory.getKingdomOwnerCrest(this._kingdomVO.kID);
    }
  };
  CastleHandleKingdomDialogProperties.prototype.getCrestRight = function () {
    if (this._kingdomVO.kID == s.FactionConst.KINGDOM_ID) {
      return p.FactionEventVO.BLUE_CREST_VO;
    } else {
      return this.getCrestLeft();
    }
  };
  CastleHandleKingdomDialogProperties.prototype.isUnlocked = function () {
    return this._kingdomVO.isPaid;
  };
  CastleHandleKingdomDialogProperties.prototype.getSpaceID = function () {
    return this._kingdomVO.kID;
  };
  CastleHandleKingdomDialogProperties.prototype.isEiland = function () {
    return this._kingdomVO.kID == l.WorldIsland.KINGDOM_ID;
  };
  Object.defineProperty(CastleHandleKingdomDialogProperties.prototype, "kingdomVO", {
    get: function () {
      return this._kingdomVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleHandleKingdomDialogProperties;
}(o.BasicProperties);
exports.CastleHandleKingdomDialogProperties = d;
var p = require("./202.js");
var h = require("./387.js");
a.classImplementsInterfaces(d, "ICastleHandleSpaceDialogProperties");