Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./123.js");
var g = require("./31.js");
var C = require("./19.js");
var _ = require("./13.js");
var m = require("./4.js");
var f = require("./324.js");
var O = require("./322.js");
var E = require("./682.js");
var y = require("./307.js");
var b = require("./8.js");
var D = require("./11.js");
var I = require("./625.js");
var T = require("./1443.js");
var v = createjs.Point;
var S = function (e) {
  function DecorationForgeSelectSourceAndCatalystDialog() {
    return e.call(this, DecorationForgeSelectSourceAndCatalystDialog.NAME) || this;
  }
  n.__extends(DecorationForgeSelectSourceAndCatalystDialog, e);
  DecorationForgeSelectSourceAndCatalystDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    b.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok], V.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_sourceCatalyst_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_sourceTitle, new d.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_sourceCatalyst_source_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_catalystTitle, new d.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_sourceCatalyst_catalyst_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_emptySource.txt_text, new u.LocalizedTextVO("dialog_decoForge_sourceCatalyst_source_empty")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_emptyCatalyst.txt_text, new u.LocalizedTextVO("dialog_decoForge_sourceCatalyst_catalyst_empty")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new u.LocalizedTextVO("dialog_decoForge_sourceCatalyst_hint")).autoFitToBounds = true;
    this.dialogDisp.mc_targetLevel.toolTipText = "fusionLevel";
    this.dialogDisp.mc_targetXP.toolTipText = "fusionXP";
    this.dialogDisp.mc_resultBonusChance.toolTipText = "bonusFusionXPChance";
    this.dialogDisp.mc_resultBonusXP.toolTipText = "bonusFusionXP";
    this.dialogDisp.mc_resultXP.toolTipText = "fusionXP";
    this.dialogDisp.btn_ok.toolTipText = "confirmSelection";
    this.dialogDisp.btn_help.toolTipText = "help";
    this._sourceList = new P.DecorationForgeSelectionList(this.dialogDisp.mc_sourceList, R.DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE, 5);
    this._catalystList = new P.DecorationForgeSelectionList(this.dialogDisp.mc_catalystList, M.DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE, 5);
    this.dialogDisp.mc_targetLevel.mouseChildren = false;
    this.dialogDisp.mc_targetXP.mouseChildren = false;
    this.dialogDisp.mc_resultBonusChance.mouseChildren = false;
    this.dialogDisp.mc_resultBonusXP.mouseChildren = false;
    this.dialogDisp.mc_resultXP.mouseChildren = false;
    this.dialogDisp.btn_resultInfo.mouseChildren = false;
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._sourceList.onShow();
    this._catalystList.onShow();
    this._sourceList.onSelectionChanged.add(this.bindFunction(this.onSelectionChanged));
    this._catalystList.onSelectionChanged.add(this.bindFunction(this.onSelectionChanged));
    this.updateTargetInfo();
    this.updateSourceList();
    this.updateCatalystList();
    this.updateResultInfo();
    this.updateOkButton();
    this.controller.addEventListener(f.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onStorageUpdated));
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.hide = function () {
    this._sourceList.onSelectionChanged.remove(this.bindFunction(this.onSelectionChanged));
    this._catalystList.onSelectionChanged.remove(this.bindFunction(this.onSelectionChanged));
    this._sourceList.onHide();
    this._catalystList.onHide();
    e.prototype.hide.call(this);
    this.controller.removeEventListener(f.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onStorageUpdated));
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.onStorageUpdated = function (e) {
    this.updateSourceList();
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.updateTargetInfo = function () {
    var e = this.dialogProperties.buttons.buttonTarget.currentSelectionVO;
    var t = e.getBuildingFusionInfoVO();
    L.CollectableRenderHelper.displaySingleItemComplete(this, new g.CollectableRenderClips(this.dialogDisp.mc_targetItem), e.itemVO, new C.CollectableRenderOptions(C.CollectableRenderOptions.SET_ICON, new v(64, 42)));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_targetLevel.txt_value, new c.LocalizedNumberVO(t.getCurrentLevel())).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_targetXP.txt_value, new u.LocalizedTextVO("value_proportional_value", [t.getDeltaXpBetweenCurrentLevels(), t.getDeltaXpForNextLevel()])).autoFitToBounds = true;
    new O.SimpleProgressBarComponent(this.dialogDisp.mc_targetXP.mc_progress, 326).setProgressByPercent(t.getDeltaXpPercentFactor());
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.updateSourceList = function () {
    var e = m.CastleModel.decoStorage.getMainStorage();
    var t = e.getAllDecosAsBuildings();
    var i = [];
    var n = this.dialogProperties.buttons.buttonSource.currentSelectionVO ? this.dialogProperties.buttons.buttonSource.currentSelectionVO.itemVO : null;
    var o = this.dialogProperties.buttons.buttonTarget.currentSelectionVO.itemVO;
    if (t != null) {
      for (var a = 0, r = t; a < r.length; a++) {
        var l = r[a];
        if (l !== undefined && s.instanceOfClass(l, "ADecoBuildingVO")) {
          var c = l;
          if (c.fusionInfoVO.isFusionSource && c) {
            var u = new A.CollectableItemBuildingVO();
            u.buildingVO = c;
            u.amount = c.isUnique() ? 1 : e.getAmount(c.wodId);
            if (u.equals(o)) {
              u.amount--;
            }
            if (u.amount > 0) {
              i.push(new T.DecorationForgeSelectionListItemVO(u, u.equals(n), o));
            }
          }
        }
      }
    }
    for (var d = 0, p = m.CastleModel.fusionForgeData.xml.getFusionShopPackages(h.ClientConstPackages.FUSION_SHOP_ID_HARD); d < p.length; d++) {
      var g = p[d];
      if (s.instanceOfClass(g.reward, "CollectableItemBuildingVO")) {
        var C = false;
        if (i != null) {
          for (var _ = 0, f = i; _ < f.length; _++) {
            var O = f[_];
            if (O !== undefined && g.reward.buildingVO.wodId == O.collectableBuildingVO.buildingVO.wodId) {
              C = true;
              break;
            }
          }
        }
        if (!C) {
          var E = new A.CollectableItemBuildingVO();
          E.buildingVO = g.reward.buildingVO;
          var y = E.buildingVO;
          E.amount = e.getAmount(y.wodId);
          i.push(new T.DecorationForgeSelectionListItemVO(E, E.equals(n), o));
        }
      }
    }
    i.sort(this.bindFunction(this.sortBuildings));
    this._sourceList.updateWithNewData(i);
    this.updateNoDecoText();
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.sortBuildings = function (e, t) {
    return t.fusionXP - e.fusionXP;
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.updateCatalystList = function () {
    var e = this.dialogProperties.buttons.buttonCatalyst.currentSelectionVO ? this.dialogProperties.buttons.buttonCatalyst.currentSelectionVO.itemVO : null;
    var t = this.dialogProperties.buttons.buttonTarget.currentSelectionVO.itemVO;
    var i = p.int(t.buildingVO.fusionInfoVO.getCurrentLevel());
    var n = m.CastleModel.fusionForgeData.getForge(r.FusionConst.DECORATION_FORGE_ID).getAvailableCatalysts(i);
    var o = [];
    if (n != null) {
      for (var a = 0, s = n; a < s.length; a++) {
        var l = s[a];
        if (l !== undefined) {
          o.push(new T.DecorationForgeSelectionListItemVO(l, l.equals(e), t));
        }
      }
    }
    this._catalystList.updateWithNewData(o);
    this.updateNoDecoText();
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.updateNoDecoText = function () {
    this.dialogDisp.mc_emptySource.visible = this._sourceList.itemVOs.length <= 0;
    this.dialogDisp.mc_emptyCatalyst.visible = this._catalystList.itemVOs.length <= 0;
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.updateResultInfo = function () {
    var e = this._sourceList.getSelectedItemVO();
    var t = this._catalystList.getSelectedItemVO();
    if (e && t) {
      var i = m.CastleModel.fusionForgeData.getForge(r.FusionConst.DECORATION_FORGE_ID);
      var n = this.dialogProperties.buttons.buttonTarget.currentSelectionVO.itemVO.buildingVO;
      var a = e.data.buildingVO;
      var s = t.data;
      var l = p.int(r.FusionConst.getBonusFusionXPChance(m.CastleModel.fusionForgeData.xml.getFusionSystem(r.FusionConst.DECORATION_FORGE_ID).baseBonusFusionXPChance, a.fusionInfoVO.getCurrentLevel(), n.fusionInfoVO.getCurrentLevel(), s.xmlCurrencyVO.tier, m.CastleModel.fusionForgeData.xml.getMinimumCatalystTier(r.FusionConst.DECORATION_FORGE_ID, n.fusionInfoVO.getCurrentLevel())));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_resultBonusChance.txt_value, new u.LocalizedTextVO("value_percentage", [l]));
      var c = p.int(r.FusionConst.getBonusFusionXPWithForgeMax(a.fusionInfoVO.getCurrentLevel(), n.fusionInfoVO.getCurrentLevel(), i.level));
      c += p.int(r.FusionConst.getBonusFusionXPBoost(c, l, 0));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_resultBonusXP.txt_value, new u.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [c]));
      var h = p.int(r.FusionConst.getFusionXPFromSource(a.fusionInfoVO.getCurrentLevel(), n.fusionInfoVO.getCurrentLevel()));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_resultXP.txt_value, new u.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [h]));
      this.dialogDisp.btn_resultInfo.toolTipText = null;
    } else {
      this.dialogDisp.btn_resultInfo.toolTipText = "infoArea_tt";
      this.textFieldManager.registerTextField(this.dialogDisp.mc_resultBonusChance.txt_value, new d.TextVO("-"));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_resultBonusXP.txt_value, new d.TextVO("-"));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_resultXP.txt_value, new d.TextVO("-"));
    }
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.updateOkButton = function () {
    b.ButtonHelper.enableButton(this.dialogDisp.btn_ok, this.areAllSelectionsDone());
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.areAllSelectionsDone = function () {
    return !!this._sourceList.getSelectedItemVO() && !!this._catalystList.getSelectedItemVO();
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.onClick = function (t) {
    if (b.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          D.CastleExternalDialog.dialogHandler.showHelper("", l.Localize.text("dialog_decoForge_sourceCatalyst_help"));
          break;
        case this.dialogDisp.btn_ok:
          this.onOkButtonClicked();
          this.hide();
      }
    }
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.onSelectionChanged = function () {
    this.updateResultInfo();
    this.updateOkButton();
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.onOkButtonClicked = function () {
    var e = new I.DecorationForgeSelectResultVO(this._sourceList.getSelectedItemVO().data);
    e.btn = this.dialogProperties.buttons.buttonSource;
    var t = new I.DecorationForgeSelectResultVO(this._catalystList.getSelectedItemVO().data);
    t.btn = this.dialogProperties.buttons.buttonCatalyst;
    this.dialogProperties.onSuccessFunc(e);
    this.dialogProperties.onSuccessFunc(t);
    this.hide();
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.btn_resultInfo) {
      if (!this._sourceList.getSelectedItemVO() || !this._catalystList.getSelectedItemVO()) {
        return;
      }
      var i = this._sourceList.getSelectedItemVO().data.buildingVO;
      var n = this.dialogProperties.buttons.buttonTarget.currentSelectionVO.itemVO.buildingVO;
      var o = this._catalystList.getSelectedItemVO().data;
      E.CastleFusionCompareToolTip.showToolTip(this.dialogDisp.btn_resultInfo, i.fusionInfoVO, n.fusionInfoVO, o);
    }
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    E.CastleFusionCompareToolTip.hideToolTip();
    y.DecoBuildingToolTipManager.hideToolTip();
  };
  Object.defineProperty(DecorationForgeSelectSourceAndCatalystDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeSelectSourceAndCatalystDialog.NAME = "DecorationForgeSelectSourceAndCatalyst";
  return DecorationForgeSelectSourceAndCatalystDialog;
}(D.CastleExternalDialog);
exports.DecorationForgeSelectSourceAndCatalystDialog = S;
var A = require("./291.js");
var L = require("./25.js");
var P = require("./1444.js");
var M = require("./2658.js");
var R = require("./2659.js");
var V = require("./36.js");
a.classImplementsInterfaces(S, "ICollectableRendererList");