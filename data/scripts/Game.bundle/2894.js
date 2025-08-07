Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./16.js");
var u = require("./39.js");
var d = require("./87.js");
var p = function (e) {
  function RubymineBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RubymineBuildingVO, e);
  RubymineBuildingVO.prototype.getInfoTooltipLine2 = function () {
    if (this.buildingState != d.IsoBuildingStateEnum.BUILD_COMPLETED) {
      return "";
    } else if (this.isoData.areaData.isMyArea) {
      if (this.isCharging) {
        return s.Localize.text("dialog_RubyMine_rubiesToGo", [this.getRestLootAmount()]);
      } else if (this.isFull) {
        return s.Localize.text("rubymine_collect", [u.ClientConstTextIds.C2]);
      } else if (this.isEmpty) {
        return s.Localize.text("alert_rubymine_depleated_title");
      } else {
        return "";
      }
    } else {
      return "";
    }
  };
  RubymineBuildingVO.prototype.createInfoPanelItems = function (e) {
    var t = this.mineVO.amountPerCollect;
    var i = this.mineVO.totalAmount;
    var n = this.mineVO.waitingTime;
    e.addInfoItem(Library.CastleInterfaceElements.Icon_C2_Cluster, "rubymine_infotab_totalamount", new r.LocalizedNumberVO(i, true), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_C2_Time, "rubymine_infotab_dailyamount", new r.LocalizedNumberVO(t), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Time, "mine_infotab_productiontime", new l.TextVO(o.TimeStringHelper.getTimeToString(n, o.TimeStringHelper.ONE_TIME_FORMAT, s.Localize.text, false, true)));
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new r.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return RubymineBuildingVO;
}(require("./536.js").AMineBuildingVO);
exports.RubymineBuildingVO = p;
a.classImplementsInterfaces(p, "IShopVO", "ICostVO", "IInventoryVO");