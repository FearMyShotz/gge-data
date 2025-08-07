Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./4.js");
var l = function (e) {
  function ContorBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ContorBuildingVO, e);
  ContorBuildingVO.prototype.createInfoPanelItems = function (e) {
    var t = s.int(r.CastleModel.kingdomData.activeKingdomID);
    var i = r.CastleModel.userData.villageList;
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood, "kingdom_villageFoodBoost", new a.TextVO(i.getBonusStringByKingdomID(t, "Food")));
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourStone, "kingdom_villageStoneBoost", new a.TextVO(i.getBonusStringByKingdomID(t, "Stone")));
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood, "kingdom_villageWoodBoost", new a.TextVO(i.getBonusStringByKingdomID(t, "Wood")));
  };
  return ContorBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.ContorBuildingVO = l;
o.classImplementsInterfaces(l, "IShopVO", "ICostVO", "IInventoryVO");