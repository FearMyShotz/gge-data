Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function FactionGuardpostBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionGuardpostBuildingVO, e);
  FactionGuardpostBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Guards, "guards", new a.LocalizedNumberVO(this.guards));
  };
  return FactionGuardpostBuildingVO;
}(require("./1016.js").GuardpostBuildingVO);
exports.FactionGuardpostBuildingVO = s;
o.classImplementsInterfaces(s, "IShopVO", "ICostVO", "IInventoryVO");