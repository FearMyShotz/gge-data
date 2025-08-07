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
var h = require("./520.js");
var g = require("./183.js");
var C = require("./4.js");
var _ = require("./24.js");
var m = require("./197.js");
var f = require("./8.js");
var O = require("./11.js");
var E = require("./3602.js");
var y = function (e) {
  function CastleSeasonBaseRepairDialog(t = null) {
    CONSTRUCTOR_HACK;
    return e.call(this, t ?? CastleSeasonBaseRepairDialog.ASSET_NAME) || this;
  }
  n.__extends(CastleSeasonBaseRepairDialog, e);
  CastleSeasonBaseRepairDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_premiumpayWoodC2, this.dialogDisp.btn_premiumpayStoneC2, this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_pay]);
  };
  CastleSeasonBaseRepairDialog.prototype.getPictureClassName = function () {
    return "RepairBridgePicture";
  };
  CastleSeasonBaseRepairDialog.prototype.applyPropertiesLoaded = function (e = null) {
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.bridgePictureHolder);
    var t = new _.CastleGoodgameExternalClip(this.getPictureClassName(), o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.getPictureClassName()), this.getClipColor(), 0, false);
    this.dialogDisp.bridgePictureHolder.addChild(t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.LocalizedTextVO(this.dialogProperties.dialogTextPrefix + "_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new u.LocalizedTextVO(this.dialogProperties.dialogTextPrefix + "_copy"));
    this.dialogDisp.cost_stone.icon_res.gotoAndStop(1);
    this.dialogDisp.cost_wood.icon_res.gotoAndStop(2);
    this.dialogDisp.cost_stone.icon_res.toolTipText = p.ClientConstTextIds.STONE;
    this.dialogDisp.cost_wood.icon_res.toolTipText = p.ClientConstTextIds.WOOD;
    this.dialogDisp.btn_pay.toolTipText = this.dialogProperties.dialogTextPrefix + "_payNormal";
    this.updatePayButtons();
  };
  CastleSeasonBaseRepairDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    C.CastleModel.treasureMapData.addEventListener(g.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onDataUpdated));
  };
  CastleSeasonBaseRepairDialog.prototype.onDataUpdated = function (e) {
    if (e.treasureMapVO) {
      if (e.treasureMapVO.mapID == this.dialogProperties.tMapNodeVO.mapID) {
        this.dialogProperties.tMapNodeVO = C.CastleModel.treasureMapData.getTreasureMapByID(e.treasureMapVO.mapID).getNodeById(this.dialogProperties.tMapNodeVO.nodeID);
      }
      if (this.dialogProperties.tMapNodeVO.isDefeated) {
        this.hide();
      } else {
        this.updatePayButtons();
      }
    }
  };
  CastleSeasonBaseRepairDialog.prototype.updatePayButtons = function () {
    var e = d.int(this.dialogProperties.tMapNodeVO.partpaypriceVO.costsList.getAmountOrDefaultByType(b.CollectableEnum.WOOD));
    var t = d.int(this.dialogProperties.tMapNodeVO.partpaypriceVO.costsList.getAmountOrDefaultByType(b.CollectableEnum.STONE));
    var i = d.int(this.dialogProperties.tMapNodeVO.payedGoods.getAmountOrDefaultByType(b.CollectableEnum.WOOD));
    var n = d.int(this.dialogProperties.tMapNodeVO.payedGoods.getAmountOrDefaultByType(b.CollectableEnum.STONE));
    this.textFieldManager.registerTextField(this.dialogDisp.cost_wood.txt_amount, new u.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [i, e]));
    this.textFieldManager.registerTextField(this.dialogDisp.cost_stone.txt_amount, new u.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [n, t]));
    f.ButtonHelper.enableButton(this.dialogDisp.btn_premiumpayWoodC2, this.dialogProperties.tMapNodeVO.costsWoodC2 > 0);
    f.ButtonHelper.enableButton(this.dialogDisp.btn_premiumpayStoneC2, this.dialogProperties.tMapNodeVO.costsStoneC2 > 0);
    this.dialogDisp.btn_premiumpayWoodC2.toolTipText = this.dialogDisp.btn_premiumpayWoodC2.enabled ? "dialog_BeggingKnights_tooltipp" + m.CastleToolTipManager.ID_PARAM_SEPERATOR + C.CastleModel.costsData.getFinalCostsC2(this.dialogProperties.tMapNodeVO.costsWoodC2) : null;
    this.dialogDisp.btn_premiumpayWoodC2.gotoAndStop(this.buttonFrame);
    this.dialogDisp.btn_premiumpayStoneC2.toolTipText = this.dialogDisp.btn_premiumpayStoneC2.enabled ? "dialog_BeggingKnights_tooltipp" + m.CastleToolTipManager.ID_PARAM_SEPERATOR + C.CastleModel.costsData.getFinalCostsC2(this.dialogProperties.tMapNodeVO.costsStoneC2) : null;
    this.dialogDisp.btn_premiumpayStoneC2.gotoAndStop(this.buttonFrame);
  };
  CastleSeasonBaseRepairDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    C.CastleModel.treasureMapData.removeEventListener(g.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onDataUpdated));
  };
  CastleSeasonBaseRepairDialog.prototype.onClick = function (e) {
    if (f.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_pay:
          this.showDonateDialog();
          break;
        case this.dialogDisp.btn_premiumpayWoodC2:
          C.CastleModel.smartfoxClient.sendCommandVO(new h.C2SUnlockEventVO(-1, c.WorldClassic.KINGDOM_ID, 1, 0, 0, 0, this.dialogProperties.tMapNodeVO.partpaypriceVO.id, 1));
          break;
        case this.dialogDisp.btn_premiumpayStoneC2:
          C.CastleModel.smartfoxClient.sendCommandVO(new h.C2SUnlockEventVO(-1, c.WorldClassic.KINGDOM_ID, 0, 1, 0, 0, this.dialogProperties.tMapNodeVO.partpaypriceVO.id, 1));
      }
    }
  };
  CastleSeasonBaseRepairDialog.prototype.showDonateDialog = function () {
    O.CastleExternalDialog.dialogHandler.registerDefaultDialogs(D.CastleSeasonDonateRepairDialog, new E.CastleSeasonDonateRepairDialogProperties(this.dialogProperties.tMapNodeVO, this.dialogProperties.dialogTextPrefix));
  };
  CastleSeasonBaseRepairDialog.prototype.getClipColor = function () {
    return null;
  };
  Object.defineProperty(CastleSeasonBaseRepairDialog.prototype, "buttonFrame", {
    get: function () {
      switch (this.dialogProperties.tMapNodeVO.eventID) {
        case l.EventConst.EVENTTYPE_CRUSADE_THORNKING:
          return 5;
        case l.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
          return 7;
        case l.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
          return 8;
      }
      return 8;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonBaseRepairDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonBaseRepairDialog.__initialize_static_members = function () {
    CastleSeasonBaseRepairDialog.ASSET_NAME = "CastleSeasonRepair";
  };
  return CastleSeasonBaseRepairDialog;
}(O.CastleExternalDialog);
exports.CastleSeasonBaseRepairDialog = y;
var b = require("./12.js");
var D = require("./3603.js");
r.classImplementsInterfaces(y, "ICollectableRendererList");
y.__initialize_static_members();