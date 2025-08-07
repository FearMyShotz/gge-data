Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./16.js");
var u = require("./55.js");
var d = function (e) {
  function DecoBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DecoBuildingVO, e);
  DecoBuildingVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    l.int(t.length > 0 ? t.shift() : 0);
    this.fusionInfoVO.serverXP = t.length > 0 ? t.shift() : 0;
  };
  DecoBuildingVO.prototype.getNameString = function () {
    return this.name.toLowerCase() + "_" + this.type.toLowerCase() + "_name";
  };
  DecoBuildingVO.prototype.getShortInfoString = function () {
    if (a.Localize.hasText(this.name.toLowerCase() + "_" + this.type.toLowerCase() + "_short_info")) {
      return this.name.toLowerCase() + "_" + this.type.toLowerCase() + "_short_info";
    } else if (this.fusionInfoVO.isFusionSource && !this.fusionInfoVO.isFusionTarget) {
      return "deco_source_short_info";
    } else if (this.morality > 0) {
      return this.name.toLowerCase() + "_moral_short_info";
    } else {
      return this.name.toLowerCase() + "_short_info";
    }
  };
  DecoBuildingVO.prototype.getVisualClassName = function () {
    if (this.type == "Swineking" && u.ClientConstUtils.isMuslim()) {
      return this.name + "_" + this.group + "_Goatking";
    } else {
      return e.prototype.getVisualClassName.call(this);
    }
  };
  DecoBuildingVO.prototype.getInfoTooltipLine2 = function () {
    return "";
  };
  DecoBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_GridSize_Dark, "gridSize", new s.LocalizedTextVO("filter_gridSize_custom", [this.width, this.height]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this.fusionInfoVO.isFusionSource || this.fusionInfoVO.isFusionTarget) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Fusion_Level, "fusionLevel", new r.LocalizedNumberVO(this.fusionInfoVO.getCurrentLevel()), c.ClientConstColor.FONT_DEFAULT_COLOR, false);
    }
    if (this.morality > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_Morality, "morality", new r.LocalizedNumberVO(this.morality), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    } else {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new r.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (this.mightValue > 0) {
      if (this.isDamaged) {
        e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might, "playerMight", new r.LocalizedNumberVO(0), c.ClientConstColor.FONT_INSUFFICIENT_COLOR, false);
      } else {
        e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might, "playerMight", new r.LocalizedNumberVO(this.mightValue), c.ClientConstColor.FONT_DEFAULT_COLOR, false);
      }
    }
  };
  return DecoBuildingVO;
}(require("./325.js").ADecoBuildingVO);
exports.DecoBuildingVO = d;
o.classImplementsInterfaces(d, "IShopVO", "ICostVO", "IInventoryVO", "IUniqueBuildingVO");