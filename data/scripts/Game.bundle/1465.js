Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./155.js");
var l = require("./31.js");
var c = require("./67.js");
var u = require("./19.js");
var d = require("./4.js");
var p = require("./52.js");
var h = require("./9.js");
var g = require("./8.js");
var C = require("./25.js");
var _ = require("./768.js");
var m = require("./323.js");
var f = require("./357.js");
var O = require("./239.js");
var E = createjs.Point;
var y = function (e) {
  function CastleConstructionItemsDisassembledDialog(t = null) {
    CONSTRUCTOR_HACK;
    return e.call(this, t || CastleConstructionItemsDisassembledDialog.NAME) || this;
  }
  n.__extends(CastleConstructionItemsDisassembledDialog, e);
  CastleConstructionItemsDisassembledDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    g.ButtonHelper.initBasicButtons(this.buttons);
    this.textFieldManager.registerTextField(this.dialogDisp.text_header, new s.LocalizedTextVO("dialog_ciDisassembled_header")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.additionalInit();
  };
  CastleConstructionItemsDisassembledDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.mc_boosterDrop.visible = this.dialogProperties.constructionItemVO.isTemporary;
    this.dialogDisp.mc_costs.visible = !this.dialogProperties.constructionItemVO.isTemporary;
    this.textFieldManager.registerTextField(this.dialogDisp.text_description, new s.LocalizedTextVO(this.getDescriptionTextID(), [s.Localize.text(this.dialogProperties.constructionItemVO.nameTextId)]));
    if (this.resourceListComponent) {
      this.resourceListComponent.destroy();
    }
    if (this.dialogProperties.constructionItemVO.isTemporary) {
      this.showTempCIDisassembling();
      if (this.dialogDisp.btn_showMe) {
        this.dialogDisp.btn_showMe.visible = false;
      }
    } else {
      this.updateResourceList();
      if (this.dialogDisp.btn_showMe) {
        this.dialogDisp.btn_showMe.visible = true;
      }
    }
  };
  CastleConstructionItemsDisassembledDialog.prototype.updateResourceList = function () {
    if (this.resourceListComponent) {
      this.resourceListComponent.destroy();
    }
    this.resourceListComponent = O.ConstructionItemsHelper.fillDisassembledMaterials(this.dialogDisp.mc_costs, this.dialogProperties.constructionItemVO, this.selectedAmountForResources);
  };
  CastleConstructionItemsDisassembledDialog.prototype.showTempCIDisassembling = function () {
    this.destroyCollectableRenderList();
    if (this.dialogProperties.additionalParams) {
      var e = d.CastleModel.rewardData.getListByIdArray(this.dialogProperties.additionalParams.RIDS, true);
      var t = new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_DEFAULT, new E(64, 62));
      C.CollectableRenderHelper.displayMultipleItemsComplete(this, new c.CollectableRenderClipsList(this.dialogDisp.mc_boosterDrop, "item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), e, t);
    } else {
      var i = d.CastleModel.constructionItemData.getDisassemblingTobola(this.dialogProperties.constructionItemVO.disassemblingTombolaID);
      t = new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_DEFAULT, new E(64, 62));
      for (var n = 0; n < CastleConstructionItemsDisassembledDialog.MAX_TOMBOLA_ITEMS; n++) {
        var a = this.dialogDisp.mc_boosterDrop["item" + n];
        if (i.length > n) {
          var r = i[n];
          C.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new l.CollectableRenderClips(a.mc_item).addInfoBtn(a.btn_info).addBuildingLevelMc(a.mc_buildingLevel), r.rewards.getItemByIndex(0), t);
          if (this.isBoosterDisassemble()) {
            this.textFieldManager.registerTextField(a.mc_item.txt_text, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [r.shares]));
          }
          a.visible = true;
        } else {
          a.visible = false;
        }
      }
    }
  };
  CastleConstructionItemsDisassembledDialog.prototype.getDescriptionTextID = function () {
    if (this.dialogProperties.constructionItemVO.isTemporary) {
      if (this.isBoosterDisassemble()) {
        return "dialog_ciDisassembled_tempCI_booster_desc";
      } else {
        return "dialog_ciDisassembled_tempCI_currency_desc";
      }
    } else {
      return "dialog_ciDisassembled_desc";
    }
  };
  CastleConstructionItemsDisassembledDialog.prototype.additionalInit = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.btn_showMe.text, new s.LocalizedTextVO("dialog_questInfo_showMe"));
  };
  CastleConstructionItemsDisassembledDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this.dialogProperties.hideCallback) {
      this.dialogProperties.hideCallback();
    }
  };
  Object.defineProperty(CastleConstructionItemsDisassembledDialog.prototype, "buttons", {
    get: function () {
      return [this.dialogDisp.btn_showMe];
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsDisassembledDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_showMe:
          this.showMainDialogCraftingTab();
      }
    }
  };
  Object.defineProperty(CastleConstructionItemsDisassembledDialog.prototype, "selectedAmountForResources", {
    get: function () {
      if (this.dialogProperties.additionalParams && this.dialogProperties.additionalParams) {
        return this.dialogProperties.additionalParams.AMT;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsDisassembledDialog.prototype.showMainDialogCraftingTab = function () {
    this.hide();
    var e = new f.CastleConstructionItemsMainDialogProperties(m.CastleConstructionItemsMainDialog.SUBLAYER_CRAFTING);
    h.CastleDialogHandler.getInstance().removeDisplayedDialogFromList(m.CastleConstructionItemsMainDialog);
    h.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleConstructionItemsMainDialog, e);
  };
  CastleConstructionItemsDisassembledDialog.prototype.isBoosterDisassemble = function () {
    if (this.dialogProperties.constructionItemVO.isTemporary) {
      var e = undefined;
      if (this.dialogProperties.additionalParams) {
        e = d.CastleModel.rewardData.getListByIdArray(this.dialogProperties.additionalParams.RIDS, true).list[0];
      } else {
        var t = d.CastleModel.constructionItemData.getDisassemblingTobola(this.dialogProperties.constructionItemVO.disassemblingTombolaID);
        if (t.length > 0) {
          e = t[0].rewards.list[0];
        }
      }
      if (e instanceof r.CollectableItemGenericCurrencyVO && d.CastleModel.currencyData.getCurrencyRangeByID(p.ClientConstCurrency.ID_RANGE_CI_BOOSTER).indexOf(e.xmlCurrencyVO.id) > -1) {
        return true;
      }
    }
    return false;
  };
  CastleConstructionItemsDisassembledDialog.NAME = "CastleConstructionItemsDisassembled_Z";
  CastleConstructionItemsDisassembledDialog.MAX_TOMBOLA_ITEMS = 3;
  return CastleConstructionItemsDisassembledDialog;
}(_.AConstructionItemsActionDialog);
exports.CastleConstructionItemsDisassembledDialog = y;
a.classImplementsInterfaces(y, "ICollectableRendererList");