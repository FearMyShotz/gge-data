Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./4.js");
var c = require("./97.js");
var u = function (e) {
  function DecoDistrict2x2BuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DecoDistrict2x2BuildingVO, e);
  DecoDistrict2x2BuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "districtSpace_tt", new s.LocalizedNumberVO(this.districtSlots), this.getInfoItemTextColor(c.CastleEffectEnum.DISTRICTSLOTS), true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_DecoPointsCombined, "publicOrder_combined", new s.LocalizedNumberVO(this.getDistrictDecoPoints()), r.ClientConstColor.FONT_DEFAULT_COLOR);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_MightPointsCombined, "mightPoints_combined", new s.LocalizedNumberVO(this.getDistrictMightPoints()), r.ClientConstColor.FONT_DEFAULT_COLOR);
  };
  DecoDistrict2x2BuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "districtSpace_tt", new s.LocalizedNumberVO(this.districtSlots), this.getInfoItemTextColor(c.CastleEffectEnum.DISTRICTSLOTS), true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(c.CastleEffectEnum.DECOPOINTS), true);
    var t = this.getDistrictDecoPoints();
    var i = this.getDistrictMightPoints();
    if (t > 0 && l.CastleModel.areaData && l.CastleModel.areaData.activeCommonInfo && !l.CastleModel.areaData.activeCommonInfo.isDistrictEmpty(this.districtTypeID)) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_DecoPointsCombined, "publicOrder_combined", new s.LocalizedNumberVO(t), r.ClientConstColor.FONT_DEFAULT_COLOR, t > 0);
    }
    if (i > 0 && l.CastleModel.areaData && l.CastleModel.areaData.activeCommonInfo && !l.CastleModel.areaData.activeCommonInfo.isDistrictEmpty(this.districtTypeID)) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_MightPointsCombined, "mightPoints_combined", new s.LocalizedNumberVO(i), r.ClientConstColor.FONT_DEFAULT_COLOR, i > 0);
    }
  };
  Object.defineProperty(DecoDistrict2x2BuildingVO.prototype, "buildingSlotAssetName", {
    get: function () {
      return "BuildingDistrictItem_DecoDistrict2x2";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoDistrict2x2BuildingVO.prototype, "buildingScaleFactor", {
    get: function () {
      return 0.425;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoDistrict2x2BuildingVO.prototype, "gachaEventID", {
    get: function () {
      return a.EventConst.EVENTTYPE_DECO_GACHA;
    },
    enumerable: true,
    configurable: true
  });
  return DecoDistrict2x2BuildingVO;
}(require("./446.js").ADistrictBuildingVO);
exports.DecoDistrict2x2BuildingVO = u;
o.classImplementsInterfaces(u, "IShopVO", "ICostVO", "IInventoryVO");