Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./4.js");
var u = createjs.Point;
var d = function () {
  function RingmenuBuildingPriceInfo(e) {
    this.currentAction = 0;
    this._disp = e;
    this.itxtInfo = o.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_info, new s.LocalizedTextVO("destroy"));
    this.itxtInfo.textAlign = n.GGSTextAlign.CENTER;
    this.itxtValue = o.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_time.txt_value, new r.TextVO(""));
    this.itxtValue.autoFitToBounds = true;
  }
  RingmenuBuildingPriceInfo.prototype.init = function (e) {
    this.targetBuilding = e;
    this._currentCostList = null;
  };
  RingmenuBuildingPriceInfo.prototype.update = function () {
    var e;
    if (this.targetBuilding) {
      this._disp.txt_time.visible = true;
      switch (this.currentAction) {
        case O.RingMenuBuilding.ACTION_UPGRADE:
          var t = l.int(this.targetBuilding.buildingVO.getEstimatedUpgradeDuration());
          this.itxtValue.textContentVO.stringValue = a.TimeStringHelper.getShortTimeStringBySeconds(t);
          this.itxtInfo.textContentVO.textId = "upgrade";
          e = m.BuildingCostHelper.getUpgradeCostList(this.targetBuilding.buildingVO);
          if (this.areCostsDifferent(e)) {
            this._currentCostList = e;
            f.CostHelper.initAsCosts(e, this._disp, true, true, null, new u(30, 14));
          }
          break;
        case O.RingMenuBuilding.ACTION_REPAIR:
          this.itxtValue.textContentVO.stringValue = a.TimeStringHelper.getShortTimeStringBySeconds(this.targetBuilding.buildingVO.getEstimatedRepairDuration());
          this.itxtInfo.textContentVO.textId = "repair";
          e = RingmenuBuildingPriceInfo.getCostList(this.bindFunction(this.targetBuilding.buildingVO.bindFunction(this.targetBuilding.buildingVO.getRepairCostByType)));
          if (this.areCostsDifferent(e)) {
            this._currentCostList = e;
            f.CostHelper.initAsCosts(e, this._disp, true, true, null, new u(30, 14));
          }
          break;
        case O.RingMenuBuilding.ACTION_DISASSEMBLE:
          this.itxtValue.textContentVO.stringValue = a.TimeStringHelper.getShortTimeStringBySeconds(this.targetBuilding.buildingVO.getEstimatedDisassembleDuration());
          this.itxtInfo.textContentVO.textId = "destroy";
          e = RingmenuBuildingPriceInfo.getCostList(this.bindFunction(this.targetBuilding.buildingVO.bindFunction(this.targetBuilding.buildingVO.getRefundPriceByType)));
          if (this.areCostsDifferent(e)) {
            this._currentCostList = e;
            f.CostHelper.initAsRefund(e, this._disp);
          }
          break;
        case O.RingMenuBuilding.ACTION_INSTANT_BUILD:
          this._disp.txt_time.visible = false;
          this.itxtInfo.textContentVO.textId = "instantBuild";
          var i = l.int(c.CastleModel.specialEventData.getSkipCosts(this.targetBuilding, c.CastleModel.skipDiscountData.getBoostedSkipDiscount()));
          e = h.CollectableManager.parser.createGoodsList(C.CollectableHelper.createVO(g.CollectableEnum.C2, i));
          f.CostHelper.initAsCosts(e, this._disp);
          break;
        default:
          f.CostHelper.initAsCosts(null, this._disp);
      }
    }
  };
  RingmenuBuildingPriceInfo.prototype.areCostsDifferent = function (e) {
    if (!this._currentCostList || e.length != this._currentCostList.length) {
      return true;
    }
    var t;
    var i;
    for (var n = 0; n < e.length; n++) {
      t = this._currentCostList.list[n];
      if ((i = e.list[n]).itemType.name != t.itemType.name || i.amount != t.amount) {
        return true;
      }
    }
    return false;
  };
  RingmenuBuildingPriceInfo.prototype.setAction = function (e) {
    this.currentAction = e;
    this.update();
  };
  RingmenuBuildingPriceInfo.getCostList = function (e) {
    var t = new _.CollectableList();
    for (var i = 0, n = p.ClientConstCollectable.GROUP_LIST_GOODS; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        var a = l.int(e(o));
        if (a > 0) {
          t.addItem(C.CollectableHelper.createVO(o, a));
        }
      }
    }
    return t;
  };
  return RingmenuBuildingPriceInfo;
}();
exports.RingmenuBuildingPriceInfo = d;
var p = require("./86.js");
var h = require("./50.js");
var g = require("./12.js");
var C = require("./45.js");
var _ = require("./48.js");
var m = require("./1199.js");
var f = require("./66.js");
var O = require("./369.js");