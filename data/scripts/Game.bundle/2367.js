Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./39.js");
var h = require("./55.js");
var g = require("./521.js");
var C = require("./183.js");
var _ = require("./4.js");
var m = require("./8.js");
var f = require("./11.js");
var O = function (e) {
  function CastleTreasureMapUnlockObstacleDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleTreasureMapUnlockObstacleDialog.NAME) || this;
  }
  n.__extends(CastleTreasureMapUnlockObstacleDialog, e);
  CastleTreasureMapUnlockObstacleDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_pay, this.dialogDisp.btn_premiumpayWoodC2, this.dialogDisp.btn_premiumpayStoneC2, this.dialogDisp.btn_premiumpayCoinC2]);
    this.dialogDisp.cost_stone.icon_res.gotoAndStop(1);
    this.dialogDisp.cost_wood.icon_res.gotoAndStop(2);
    this.dialogDisp.cost_coin.icon_res.gotoAndStop(3);
    this.dialogDisp.cost_stone.icon_res.toolTipText = p.ClientConstTextIds.STONE;
    this.dialogDisp.cost_wood.icon_res.toolTipText = p.ClientConstTextIds.WOOD;
    this.dialogDisp.cost_coin.icon_res.toolTipText = p.ClientConstTextIds.C1;
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.setTexts();
    this.updatePayButtons();
    this.setComponentsVisibility();
    this.setPreviewPicture();
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.setPreviewPicture = function () {
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.pictureHolder);
    var e = "Picture_" + this.pictureKingdomString + "_" + this.dialogProperties.tMapNodeVO.nodeType;
    var t = s.MovieClipHelper.getMovieClipByClassName(e);
    this.dialogDisp.pictureHolder.addChild(t);
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.setTexts = function () {
    var e = this.hackedKingdomString;
    var t = this.hackedObstacleType;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.LocalizedTextVO("dialog_repair" + e + t + "_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new u.LocalizedTextVO("dialog_repair" + e + t + "_copy"));
    var i = this.dialogProperties.tMapNodeVO.isQuickSand ? "Swamp" : t;
    this.dialogDisp.btn_pay.toolTipText = "dialog_repair" + i + "_payNormal";
  };
  Object.defineProperty(CastleTreasureMapUnlockObstacleDialog.prototype, "hackedObstacleType", {
    get: function () {
      if (this.dialogProperties.tMapNodeVO.isQuickSand) {
        return "SAND";
      } else {
        return h.ClientConstUtils.capitalizeFirstLetter(this.dialogProperties.tMapNodeVO.nodeType, true);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureMapUnlockObstacleDialog.prototype.setComponentsVisibility = function () {
    this.dialogDisp.cost_stone.visible = this.dialogProperties.tMapNodeVO.isBridge;
    this.dialogDisp.cost_wood.visible = this.dialogProperties.tMapNodeVO.isBridge;
    this.dialogDisp.cost_coin.visible = !this.dialogProperties.tMapNodeVO.isBridge;
    this.dialogDisp.btn_premiumpayWoodC2.visible = this.dialogProperties.tMapNodeVO.isBridge;
    this.dialogDisp.btn_premiumpayStoneC2.visible = this.dialogProperties.tMapNodeVO.isBridge;
    this.dialogDisp.btn_premiumpayCoinC2.visible = !this.dialogProperties.tMapNodeVO.isBridge;
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.updatePayButtons = function () {
    var e = this.dialogProperties.tMapNodeVO.partpaypriceVO.costsList;
    var t = this.dialogProperties.tMapNodeVO.payedGoods;
    if (this.dialogProperties.tMapNodeVO.isBridge) {
      var i = d.int(e.getAmountOrDefaultByType(E.CollectableEnum.WOOD));
      var n = d.int(e.getAmountOrDefaultByType(E.CollectableEnum.STONE));
      var s = d.int(t.getAmountOrDefaultByType(E.CollectableEnum.WOOD));
      var r = d.int(t.getAmountOrDefaultByType(E.CollectableEnum.STONE));
      this.textFieldManager.registerTextField(this.dialogDisp.cost_wood.txt_amount, new u.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [s, i]), new a.InternalGGSTextFieldConfigVO(true));
      this.textFieldManager.registerTextField(this.dialogDisp.cost_stone.txt_amount, new u.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [r, n]), new a.InternalGGSTextFieldConfigVO(true));
    } else {
      var l = d.int(e.getAmountOrDefaultByType(E.CollectableEnum.C1));
      var c = d.int(t.getAmountOrDefaultByType(E.CollectableEnum.C1));
      this.textFieldManager.registerTextField(this.dialogDisp.cost_coin.txt_amount, new u.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [c, l]), new a.InternalGGSTextFieldConfigVO(true));
    }
    this.setC2PayButton(this.dialogDisp.btn_premiumpayWoodC2, this.dialogProperties.tMapNodeVO.costsWoodC2);
    this.setC2PayButton(this.dialogDisp.btn_premiumpayStoneC2, this.dialogProperties.tMapNodeVO.costsStoneC2);
    this.setC2PayButton(this.dialogDisp.btn_premiumpayCoinC2, this.dialogProperties.tMapNodeVO.costsC1C2);
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.setC2PayButton = function (e, t) {
    m.ButtonHelper.enableButton(e, t > 0);
    if (this.dialogProperties.tMapNodeVO.isSwamp || this.dialogProperties.tMapNodeVO.isQuickSand) {
      e.toolTipText = e.basicButton.enabled ? {
        t: "dialog_repairSwamp_repairByPremium_tooltip",
        p: [_.CastleModel.costsData.getFinalCostsC2(t)]
      } : null;
    } else {
      e.toolTipText = e.basicButton.enabled ? {
        t: "dialog_BeggingKnights_tooltipp",
        p: [_.CastleModel.costsData.getFinalCostsC2(t)]
      } : null;
    }
    e.gotoAndStop(l.WorldClassic.KINGDOM_ID);
  };
  Object.defineProperty(CastleTreasureMapUnlockObstacleDialog.prototype, "hackedKingdomString", {
    get: function () {
      if (this.dialogProperties.tMapNodeVO.isBridge) {
        return "";
      }
      var e = "";
      switch (_.CastleModel.treasureHuntData.treasureHuntMapVO.kingdomID) {
        case c.WorldIce.KINGDOM_ID:
          e = "Ice_";
          break;
        default:
          e = "";
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapUnlockObstacleDialog.prototype, "pictureKingdomString", {
    get: function () {
      return _.CastleModel.kingdomData.getKingdomVOByID(_.CastleModel.treasureHuntData.treasureHuntMapVO.kingdomID).kingdomName;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureMapUnlockObstacleDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    _.CastleModel.treasureMapData.addEventListener(C.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onDataUpdated));
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    _.CastleModel.treasureMapData.removeEventListener(C.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onDataUpdated));
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.onDataUpdated = function (e) {
    if (e.treasureMapVO) {
      if (e.treasureMapVO.mapID == this.dialogProperties.tMapNodeVO.mapID) {
        this.dialogProperties.tMapNodeVO = _.CastleModel.treasureHuntData.treasureHuntMapVO.getNodeById(this.dialogProperties.tMapNodeVO.nodeID);
      }
      if (this.dialogProperties.tMapNodeVO.isDefeated) {
        this.hide();
      } else {
        this.updatePayButtons();
      }
    }
  };
  CastleTreasureMapUnlockObstacleDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_pay:
        f.CastleExternalDialog.dialogHandler.registerDefaultDialogs(y.CastleTreasureMapDonateDialog, this.dialogProperties);
        break;
      case this.dialogDisp.btn_premiumpayWoodC2:
        _.CastleModel.smartfoxClient.sendCommandVO(new g.C2SUnlockEventVO(-1, l.WorldClassic.KINGDOM_ID, 1, 0, 0, 0, this.dialogProperties.tMapNodeVO.partpaypriceVO.id, 1));
        break;
      case this.dialogDisp.btn_premiumpayStoneC2:
        _.CastleModel.smartfoxClient.sendCommandVO(new g.C2SUnlockEventVO(-1, l.WorldClassic.KINGDOM_ID, 0, 1, 0, 0, this.dialogProperties.tMapNodeVO.partpaypriceVO.id, 1));
        break;
      case this.dialogDisp.btn_premiumpayCoinC2:
        _.CastleModel.smartfoxClient.sendCommandVO(new g.C2SUnlockEventVO(-1, l.WorldClassic.KINGDOM_ID, 0, 0, 0, 1, this.dialogProperties.tMapNodeVO.partpaypriceVO.id, 1));
    }
  };
  Object.defineProperty(CastleTreasureMapUnlockObstacleDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureMapUnlockObstacleDialog.__initialize_static_members = function () {
    CastleTreasureMapUnlockObstacleDialog.NAME = "CastleTreasureMapUnlock";
  };
  return CastleTreasureMapUnlockObstacleDialog;
}(f.CastleExternalDialog);
exports.CastleTreasureMapUnlockObstacleDialog = O;
var E = require("./12.js");
var y = require("./2368.js");
r.classImplementsInterfaces(O, "ICollectableRendererList");
O.__initialize_static_members();