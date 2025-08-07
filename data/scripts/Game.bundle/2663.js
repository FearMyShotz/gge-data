Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./325.js");
var a = require("./4.js");
var s = function () {
  function DecorationStorageDialogListItemVO(e) {
    this._buildingVO = e;
    this._searchName = this._buildingVO.getInfoTooltipLine1().toLowerCase();
  }
  DecorationStorageDialogListItemVO.prototype.getOrderValue = function () {
    if (r.instanceOfClass(this.buildingVO, "CustomDecoBuildingVO")) {
      return n.int(this.buildingVO.decoPoints);
    } else if (r.instanceOfClass(this.buildingVO, "AEffectBuildingVO")) {
      if (a.CastleModel.decoStorage.getCurrentStorage().isEventKingdomStorage()) {
        return n.int(this.buildingVO.morality);
      } else if (this.buildingVO instanceof o.ADecoBuildingVO) {
        return n.int(this.buildingVO.decoPoints);
      } else {
        return n.int(this.buildingVO.level);
      }
    } else {
      return 0;
    }
  };
  DecorationStorageDialogListItemVO.prototype.getMightPoints = function () {
    return n.int(r.instanceOfClass(this.buildingVO, "AEffectBuildingVO") ? this.buildingVO.mightValue : 0);
  };
  DecorationStorageDialogListItemVO.prototype.getSellPrice = function () {
    if (r.instanceOfClass(this.buildingVO, "AShopVO")) {
      var e = this.buildingVO;
      if (e.sellCostC1 > 0) {
        return n.int(e.sellCostC1);
      }
      if (e.sellBuildingVO && e.sellBuildingVO.hasCosts) {
        return n.int(e.sellBuildingVO.list[0].amount);
      }
    }
    return 0;
  };
  DecorationStorageDialogListItemVO.prototype.getFusionLevel = function () {
    if (!r.instanceOfClass(this.buildingVO, "CustomDecoBuildingVO")) {
      var e = this.buildingVO;
      if (e) {
        return n.int(e.fusionInfoVO.getCurrentLevel());
      }
    }
    return -1;
  };
  DecorationStorageDialogListItemVO.prototype.getFusionXP = function () {
    if (this.buildingVO instanceof o.ADecoBuildingVO) {
      var e = this.buildingVO;
      return n.int(e.fusionInfoVO.getCurrentTotalXp());
    }
    return 0;
  };
  DecorationStorageDialogListItemVO.prototype.canBeSold = function () {
    return !r.instanceOfClass(this.buildingVO, "FactionDecoBuildingVO") && !r.instanceOfClass(this.buildingVO, "AllianceDecoBuildingVO") && this.getSellPrice() > 0;
  };
  DecorationStorageDialogListItemVO.prototype.getFusionInfoVO = function () {
    var e = this.buildingVO;
    if (e) {
      return e.fusionInfoVO;
    } else {
      return null;
    }
  };
  Object.defineProperty(DecorationStorageDialogListItemVO.prototype, "buildingVO", {
    get: function () {
      return this._buildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationStorageDialogListItemVO.prototype, "searchName", {
    get: function () {
      return this._searchName;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationStorageDialogListItemVO;
}();
exports.DecorationStorageDialogListItemVO = s;
var r = require("./1.js");