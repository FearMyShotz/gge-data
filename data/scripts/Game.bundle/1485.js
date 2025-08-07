Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./183.js");
var c = require("./71.js");
var u = require("./4.js");
var d = require("./42.js");
var p = require("./256.js");
var h = function (e) {
  function CastleUnitDealerEventDialog(t = CastleUnitDealerEventDialog.ASSET_NAME) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleUnitDealerEventDialog, e);
  CastleUnitDealerEventDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    u.CastleModel.treasureMapData.addEventListener(l.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.controller.addEventListener(c.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onMaxUnitInventoryUpdated));
  };
  CastleUnitDealerEventDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    u.CastleModel.treasureMapData.removeEventListener(l.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.controller.removeEventListener(c.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onMaxUnitInventoryUpdated));
  };
  CastleUnitDealerEventDialog.prototype.onInventoryUpdated = function (e) {
    this.initUnitInfos();
  };
  CastleUnitDealerEventDialog.prototype.onMaxUnitInventoryUpdated = function (e) {
    this.initUnitInfos();
  };
  Object.defineProperty(CastleUnitDealerEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return g.CastleUnitDealerEventScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleUnitDealerEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new s.LocalizedTextVO("dialog_unitDealerEvent_speechBubble")).verticalAlign = d.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.itxt_unitCapacity = this.textFieldManager.registerTextField(this.dialogDisp.mc_unitLimit.txt_unitCapacity, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    this.dialogDisp.mc_unitLimit.visible = true;
    this.dialogDisp.mc_unitLimit.toolTipText = "dialog_UnitEvent_totalUnitCount";
    this.dialogDisp.mc_unitLimit.mouseChildren = false;
  };
  CastleUnitDealerEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initUnitInfos();
  };
  CastleUnitDealerEventDialog.prototype.initUnitInfos = function () {
    this.itxt_unitCapacity.textContentVO.textId = o.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
    var e = 0;
    var t = 0;
    if (CastleUnitDealerEventDialog.treasuremapVO) {
      e = r.int(CastleUnitDealerEventDialog.treasuremapVO.getTotalSoldierCount());
      t = r.int(CastleUnitDealerEventDialog.treasuremapVO.unitStorage);
    }
    this.itxt_unitCapacity.textContentVO.textReplacements = [e, t];
  };
  Object.defineProperty(CastleUnitDealerEventDialog, "treasuremapVO", {
    get: function () {
      var e = u.CastleModel.specialEventData.activeSeasonVO;
      if (e) {
        return e.treasureMapVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleUnitDealerEventDialog.NAME = "CastleUnitDealerEventExternal";
  CastleUnitDealerEventDialog.ASSET_NAME = "CastleUnitEvent";
  return CastleUnitDealerEventDialog;
}(p.CastleGenericMerchantDialog);
exports.CastleUnitDealerEventDialog = h;
var g = require("./2749.js");
a.classImplementsInterfaces(h, "ICollectableRendererList");