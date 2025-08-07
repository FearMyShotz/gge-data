Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./32.js");
var u = require("./31.js");
var d = require("./19.js");
var p = require("./4.js");
var h = require("./42.js");
var g = require("./8.js");
var C = require("./11.js");
var _ = require("./351.js");
var m = require("./135.js");
var f = createjs.Point;
var O = function (e) {
  function ACastleSocketDialog(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ACastleSocketDialog, e);
  ACastleSocketDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok, this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO(this.titleTextID)).autoFitToBounds = true;
    this.dialogDisp.mc_gem.mouseChildren = false;
    this.dialogDisp.mc_eq.mouseChildren = false;
  };
  ACastleSocketDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.controller.addEventListener(c.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChanged));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_gem, new a.TextVO(this.dialogProperties.gemVO.nameString)).verticalAlign = h.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_eq, new a.TextVO(this.dialogProperties.eqVO.nameString)).verticalAlign = h.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.renderIcons();
    this.onUserCurrencyChanged(null);
  };
  ACastleSocketDialog.prototype.hide = function () {
    this.controller.removeEventListener(c.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChanged));
    e.prototype.hide.call(this);
  };
  ACastleSocketDialog.prototype.updateCosts = function () {
    this.destroyCollectableRenderList();
    I.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new u.CollectableRenderClips(this.dialogDisp.mc_cost), this.getCosts(), new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_COST_LIST, ACastleSocketDialog.COST_ICON_DIMENSION));
  };
  ACastleSocketDialog.prototype.renderIcons = function () {
    this.dialogDisp.mc_gem.equipmentVO = this.dialogProperties.gemVO;
    this.dialogDisp.mc_gem.addChild(L.CastleGemRenderer.renderAsset(this.dialogProperties.gemVO, null, null, true));
    v.EquipmentIconHelper.addEquipmentIcon(this.dialogProperties.eqVO, this.dialogDisp.mc_eq, 55, 55, null, true, false, false, true, true);
    this.dialogDisp.mc_eq.equipmentVO = this.dialogProperties.eqVO;
    this.dialogDisp.mc_rarity.visible = false;
    this.dialogDisp.mc_rarity.gotoAndStop(this.dialogProperties.eqVO.visualRareID + 1);
  };
  ACastleSocketDialog.prototype.checkAndShowNotEnoughCurrencyMessage = function (e) {
    return !!T.CostHelper.canAfford(y.CollectableHelper.createCostList([e])) || (e.itemType == E.CollectableEnum.C1 ? D.CastleDialogHandler.getInstance().registerDefaultDialogs(S.CastleNoMoneyC1Dialog, new _.CastleNoMoneyC1DialogProperties()) : e.itemType == E.CollectableEnum.C2 ? D.CastleDialogHandler.getInstance().registerDefaultDialogs(A.CastleNoMoneyC2Dialog, new m.CastleNoMoneyC2DialogProperties()) : T.CostHelper.showNotEnoughSpecialCurrencyDialog([new b.CollectableTypeVO().initByCollectable(e).id]), false);
  };
  Object.defineProperty(ACastleSocketDialog.prototype, "titleTextID", {
    get: function () {
      return "dialog_gems_insertGems_header";
    },
    enumerable: true,
    configurable: true
  });
  ACastleSocketDialog.prototype.getCosts = function () {
    var e = l.int(P.instanceOfClass(this.dialogProperties.gemVO, "CastleGemVO") ? p.CastleModel.costsData.getFinalCostsC1(this.dialogProperties.gemVO.levelInfos.insertCostC1) : M.RelicItemConst.INSERT_RELIC_GEM_C1_COST);
    return y.CollectableHelper.createVO(E.CollectableEnum.C1, e);
  };
  ACastleSocketDialog.prototype.onClick = function (t) {
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_ok:
          this.onConfirmButtonClicked();
          break;
        case this.dialogDisp.btn_back:
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          if (this.dialogProperties.onAbort) {
            this.dialogProperties.onAbort();
          }
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          D.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_insertGems"));
      }
    }
  };
  ACastleSocketDialog.prototype.onConfirmButtonClicked = function () {
    if (this.checkAndShowNotEnoughCurrencyMessage(this.getCosts())) {
      this.onValidConfirmClicked();
      if (this.dialogProperties.onConfirm) {
        this.dialogProperties.onConfirm();
      }
      this.hide();
    }
  };
  ACastleSocketDialog.prototype.onUserCurrencyChanged = function (e) {
    this.updateCosts();
  };
  ACastleSocketDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target && t.target.equipmentVO) {
      v.EquipmentIconHelper.showToolTip(t.target, t.target.equipmentVO);
    }
  };
  ACastleSocketDialog.prototype.onValidConfirmClicked = function () {};
  Object.defineProperty(ACastleSocketDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ACastleSocketDialog.__initialize_static_members = function () {
    ACastleSocketDialog.COST_ICON_DIMENSION = new f(35, 35);
  };
  return ACastleSocketDialog;
}(C.CastleExternalDialog);
exports.ACastleSocketDialog = O;
o.classImplementsInterfaces(O, "ICollectableRendererList");
var E = require("./12.js");
var y = require("./45.js");
var b = require("./74.js");
var D = require("./9.js");
var I = require("./25.js");
var T = require("./66.js");
var v = require("./73.js");
var S = require("./352.js");
var A = require("./138.js");
var L = require("./248.js");
O.__initialize_static_members();
var P = require("./1.js");
var M = require("./5.js");