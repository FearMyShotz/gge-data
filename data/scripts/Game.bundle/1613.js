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
var u = require("./5.js");
var d = require("./3.js");
var p = require("./39.js");
var h = require("./192.js");
var g = require("./71.js");
var C = require("./4.js");
var _ = require("./24.js");
var m = function (e) {
  function CastleSlumDonateCharacterDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSlumDonateCharacterDialog.NAME) || this;
  }
  n.__extends(CastleSlumDonateCharacterDialog, e);
  CastleSlumDonateCharacterDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_donate]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.LocalizedTextVO("dialog_village_unlock_title"));
    this.dialogDisp.btn_donate.toolTipText = "dialog_season_payRessources_title";
    this.dialogDisp.icon_c1.toolTipText = p.ClientConstTextIds.C1;
    this.dialogDisp.icon_wood.toolTipText = p.ClientConstTextIds.WOOD;
    this.dialogDisp.icon_stone.toolTipText = p.ClientConstTextIds.STONE;
  };
  CastleSlumDonateCharacterDialog.prototype.updateResources = function (e = null) {
    if (this.payedGoods) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_wood, new d.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.payedGoods.getAmountOrDefaultByType(f.CollectableEnum.WOOD), this.partpaypriceVO.costsList.getAmountOrDefaultByType(f.CollectableEnum.WOOD)]));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_stone, new d.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.payedGoods.getAmountOrDefaultByType(f.CollectableEnum.STONE), this.partpaypriceVO.costsList.getAmountOrDefaultByType(f.CollectableEnum.STONE)]));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_c1, new d.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.payedGoods.getAmountOrDefaultByType(f.CollectableEnum.C1), this.partpaypriceVO.costsList.getAmountOrDefaultByType(f.CollectableEnum.C1)]));
    } else {
      this.hide();
    }
  };
  CastleSlumDonateCharacterDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_donate:
        O.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CastleSlumDonateDialog);
    }
  };
  CastleSlumDonateCharacterDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_decoHolder);
    this.dialogDisp.mc_decoHolder.addChild(new _.CastleGoodgameExternalClip(CastleSlumDonateCharacterDialog.NAME + "_" + this.kingdomVO.kingdomName, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleSlumDonateCharacterDialog.NAME + "_" + this.kingdomVO.kingdomName), null, 0, false).asDisplayObject());
    C.CastleModel.kingdomData.addEventListener(h.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.updateResources));
    this.controller.addEventListener(g.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.onNewSlumLevel));
    switch (this.kingdomVO.kID) {
      case l.WorldDessert.KINGDOM_ID:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new d.LocalizedTextVO("dialog_village_unlock_copy_desert"));
        break;
      case u.WorldVolcano.KINGDOM_ID:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new d.LocalizedTextVO("dialog_village_unlock_copy_vulcan"));
        break;
      case c.WorldIce.KINGDOM_ID:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new d.LocalizedTextVO("dialog_village_unlock_copy_ice"));
    }
    this.updateResources();
  };
  Object.defineProperty(CastleSlumDonateCharacterDialog.prototype, "kingdomVO", {
    get: function () {
      return C.CastleModel.kingdomData.activeKingdomVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDonateCharacterDialog.prototype, "payedGoods", {
    get: function () {
      if (this.kingdomVO.getSlumVOByLevel(this.kingdomVO.activeSlumLevel + 1)) {
        return this.kingdomVO.getSlumVOByLevel(this.kingdomVO.activeSlumLevel + 1).payedGoods;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDonateCharacterDialog.prototype, "partpaypriceVO", {
    get: function () {
      return this.kingdomVO.getSlumVOByLevel(this.kingdomVO.activeSlumLevel + 1).partpaypriceVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleSlumDonateCharacterDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    C.CastleModel.kingdomData.removeEventListener(h.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.updateResources));
    this.controller.removeEventListener(g.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.onNewSlumLevel));
  };
  CastleSlumDonateCharacterDialog.prototype.onNewSlumLevel = function (e) {
    this.hide();
  };
  CastleSlumDonateCharacterDialog.__initialize_static_members = function () {
    CastleSlumDonateCharacterDialog.NAME = "CastleSlumDonateCharacter";
  };
  return CastleSlumDonateCharacterDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleSlumDonateCharacterDialog = m;
var f = require("./12.js");
var O = require("./9.js");
var E = require("./3193.js");
r.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();