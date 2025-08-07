Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./4.js");
var u = require("./87.js");
var d = require("./336.js");
var p = require("./633.js");
var h = function (e) {
  function BasicMoatVO() {
    var t = e.call(this) || this;
    t._width = 1;
    t._height = 1;
    t._buildingState = u.IsoBuildingStateEnum.BUILD_COMPLETED;
    t._hitPoints = 100;
    t._rotationType = d.IsoObjectRotationEnum.NONE;
    return t;
  }
  n.__extends(BasicMoatVO, e);
  BasicMoatVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._rotationType = d.IsoObjectRotationEnum._1FrameFor2Dir;
  };
  Object.defineProperty(BasicMoatVO.prototype, "isMoatAvailableByBuildOrder", {
    get: function () {
      var e = C.Iso.data.objects.defences.moat;
      if (e) {
        return this.level == e.level + 1 && e.buildingState != u.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS;
      } else {
        return this.level == 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMoatVO.prototype, "isAvailableByLevel", {
    get: function () {
      return this.isMoatAvailableByBuildOrder && Object.getOwnPropertyDescriptor(g.AShopVO.prototype, "isAvailableByLevel").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ADefenceBuildingVO.prototype, "isAvailableByLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BasicMoatVO.prototype.getNameString = function () {
    return this.name.toLowerCase() + "_" + this.group.toLowerCase() + "_name";
  };
  BasicMoatVO.prototype.getShortInfoString = function () {
    return this.name.toLowerCase() + "_" + this.group.toLowerCase() + "_short_info";
  };
  BasicMoatVO.prototype.getUpgradeInfoString = function () {
    return "castlewall_upgrade_info";
  };
  BasicMoatVO.prototype.getVisualClassName = function () {
    return e.prototype.getVisualClassName.call(this) + "_" + this.getAreaKingdomName();
  };
  BasicMoatVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Btn_Moat, "castlewall_upgrade_info", new r.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.moatBonus]), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  BasicMoatVO.prototype.getShopIconURL = function (e) {
    return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.name + "_Moat_" + (e == "" ? this.getAreaKingdomName() : e));
  };
  BasicMoatVO.prototype.getShopIconName = function (t) {
    return e.prototype.getVisualClassName.call(this) + "_" + (t == "" ? this.getAreaKingdomName() : t);
  };
  Object.defineProperty(BasicMoatVO.prototype, "destAreaData", {
    get: function () {
      if (this.isoData) {
        return this.isoData.areaData;
      } else {
        return c.CastleModel.areaData.activeArea;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMoatVO.prototype, "positions", {
    get: function () {
      return this._positions;
    },
    set: function (e) {
      this._positions = e;
    },
    enumerable: true,
    configurable: true
  });
  return BasicMoatVO;
}(p.ADefenceBuildingVO);
exports.BasicMoatVO = h;
var g = require("./859.js");
var C = require("./34.js");
s.classImplementsInterfaces(h, "IShopVO", "ICostVO", "IInventoryVO");