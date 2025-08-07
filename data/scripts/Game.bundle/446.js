Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./97.js");
var l = require("./87.js");
var c = require("./65.js");
var u = require("./22.js");
var d = function (e) {
  function ADistrictBuildingVO() {
    var t = this;
    t._districtSlots = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ADistrictBuildingVO, e);
  ADistrictBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._districtSlots = parseInt(u.CastleXMLUtils.getValueOrDefault("districtSlots", t, "0"));
  };
  ADistrictBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "districtSpace_tt", new a.LocalizedNumberVO(this.districtSlots), this.getInfoItemTextColor(r.CastleEffectEnum.DISTRICTSLOTS), true);
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(r.CastleEffectEnum.DECOPOINTS), true);
    }
  };
  Object.defineProperty(ADistrictBuildingVO.prototype, "districtSlots", {
    get: function () {
      return this._districtSlots;
    },
    enumerable: true,
    configurable: true
  });
  ADistrictBuildingVO.prototype.canAddBuilding = function (e) {
    return !!e && e != this && e.districtTypeID == this.districtTypeID && !this.isDistrictFull && !this.isDisassembling();
  };
  Object.defineProperty(ADistrictBuildingVO.prototype, "isDistrictFull", {
    get: function () {
      return s.CastleModel.areaData.activeCommonInfo && s.CastleModel.areaData.activeCommonInfo.isDistrictFull(this.districtTypeID);
    },
    enumerable: true,
    configurable: true
  });
  ADistrictBuildingVO.prototype.isDisassembling = function () {
    return this.buildingState == l.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS || this.buildingState == l.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED;
  };
  ADistrictBuildingVO.prototype.getDistrictDecoPoints = function () {
    if (this.x >= 0 && s.CastleModel.areaData.activeCommonInfo) {
      return s.CastleModel.areaData.activeCommonInfo.getDistrictDecoPoints(this.districtTypeID) + this.decoPoints;
    } else {
      return 0;
    }
  };
  ADistrictBuildingVO.prototype.getDistrictMightPoints = function () {
    if (this.x >= 0 && s.CastleModel.areaData.activeCommonInfo) {
      return s.CastleModel.areaData.activeCommonInfo.getDistrictMightPoints(this.districtTypeID) + this.mightValue;
    } else {
      return 0;
    }
  };
  Object.defineProperty(ADistrictBuildingVO.prototype, "buildingSlotAssetName", {
    get: function () {
      return "BuildingDistrictItem";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADistrictBuildingVO.prototype, "buildingScaleFactor", {
    get: function () {
      return 0.238;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADistrictBuildingVO.prototype, "gachaEventID", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  return ADistrictBuildingVO;
}(c.AEffectBuildingVO);
exports.ADistrictBuildingVO = d;
o.classImplementsInterfaces(d, "IShopVO", "ICostVO", "IInventoryVO");