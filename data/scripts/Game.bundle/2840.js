Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./16.js");
var c = require("./274.js");
var u = require("./325.js");
var d = function (e) {
  function CustomDecoBuildingVO() {
    var t = this;
    t._customDecoPoints = 0;
    t._customId = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CustomDecoBuildingVO, e);
  CustomDecoBuildingVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this._customDecoPoints = r.int(t.length > 0 ? t.shift() : 0);
  };
  CustomDecoBuildingVO.prototype.parseServerInfoShort = function (t) {
    e.prototype.parseServerInfoShort.call(this, t);
    this._customDecoPoints = r.int(t.DP);
  };
  CustomDecoBuildingVO.prototype.cloneFrom = function (t) {
    e.prototype.cloneFrom.call(this, t);
    var i = t;
    if (i) {
      this._customDecoPoints = i._customDecoPoints;
      this._customId = i._customId;
    }
  };
  CustomDecoBuildingVO.prototype.getNameString = function () {
    var e = this.isoData ? this.isoData.areaData.areaInfo.ownerInfo.playerName : p.Iso.data.areaData.areaInfo.ownerInfo.playerName;
    return a.Localize.text(this.name.toLowerCase() + "_" + this.type.toLowerCase() + "_name", [e]);
  };
  CustomDecoBuildingVO.prototype.getShortInfoString = function () {
    return a.Localize.text("deco_short_info");
  };
  CustomDecoBuildingVO.prototype.getVisualClassName = function () {
    var e = this.name + "_" + this.group + "_" + this.type;
    if (this.type == "Colossus" || this.type == "ColossusRider" || this.type == "CoinColossus") {
      return e + "_Size" + String(c.ClientConstEvent.getColossusSize(this.decoPoints, this.wodId));
    } else {
      return e;
    }
  };
  Object.defineProperty(CustomDecoBuildingVO.prototype, "decoPoints", {
    get: function () {
      return this._customDecoPoints;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ADecoBuildingVO.prototype, "decoPoints").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CustomDecoBuildingVO.prototype.getInfoTooltipLine2 = function () {
    return "";
  };
  CustomDecoBuildingVO.prototype.isFusionRelevant = function () {
    return false;
  };
  Object.defineProperty(CustomDecoBuildingVO.prototype, "uniqueBuildingId", {
    get: function () {
      return this._customId;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ADecoBuildingVO.prototype, "uniqueBuildingId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CustomDecoBuildingVO.prototype.isUnique = function () {
    return true;
  };
  CustomDecoBuildingVO.prototype.createInfoPanelItems = function (e) {
    if (this.morality > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_Morality, "morality", new s.LocalizedNumberVO(this.morality), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    } else {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  Object.defineProperty(CustomDecoBuildingVO.prototype, "customDecoPoints", {
    set: function (e) {
      this._customDecoPoints = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CustomDecoBuildingVO.prototype, "customId", {
    set: function (e) {
      this._customId = e;
    },
    enumerable: true,
    configurable: true
  });
  return CustomDecoBuildingVO;
}(u.ADecoBuildingVO);
exports.CustomDecoBuildingVO = d;
var p = require("./34.js");
o.classImplementsInterfaces(d, "IShopVO", "ICostVO", "IInventoryVO", "IUniqueBuildingVO");