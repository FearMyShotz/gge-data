Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./531.js");
var h = require("./217.js");
var g = require("./243.js");
var C = require("./218.js");
var _ = require("./71.js");
var m = require("./4.js");
var f = require("./11.js");
var O = function (e) {
  function CastleTransferResourcesDialog() {
    return e.call(this, CastleTransferResourcesDialog.NAME) || this;
  }
  n.__extends(CastleTransferResourcesDialog, e);
  CastleTransferResourcesDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._castleSelector = new b.CastleSelectorComponent(this.dialogDisp.castleSelector);
    this.dialogDisp.mc_infoTime.toolTipText = "travelTime";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.LocalizedTextVO("dialog_season_sendRes_title"));
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_cancle]);
  };
  CastleTransferResourcesDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.mc_infoTime.visible = this.dialogProperties.travelTime > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_infoTime.txt_value, new d.TextVO(r.TimeStringHelper.getTimeToString(this.dialogProperties.travelTime, r.TimeStringHelper.TWO_TIME_FORMAT, c.Localize.text)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new u.LocalizedTextVO(this.dialogProperties.infoText));
    this._castleSelector.castleList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this._castleSelector.initComponent(m.CastleModel.otherPlayerData.getOwnInfoVO(), m.CastleModel.userData.castleList, null, this.dialogProperties.exceptingKingdomIDs);
    this.dialogDisp.tradeComponent.visible = false;
    m.CastleModel.smartfoxClient.sendCommandVO(new h.C2SGetDetailedCastleListVO());
    this.onSelectCastle(null);
  };
  CastleTransferResourcesDialog.prototype.addEventListenerOnShow = function () {
    this.controller.addEventListener(_.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.addEventListener(C.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(g.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
  };
  CastleTransferResourcesDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.removeEventListener(_.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.removeEventListener(C.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(g.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
  };
  CastleTransferResourcesDialog.prototype.onEilandReset = function (e) {
    this.hide();
  };
  CastleTransferResourcesDialog.prototype.onDataUpdated = function (e) {
    this.initSelectors();
  };
  CastleTransferResourcesDialog.prototype.onChangeResources = function (e = null) {
    this._castleRessourcesVO = e.params[0];
    if (this._castleRessourcesVO && this._castleRessourcesVO.castleID == this._castleSelector.selectedCastleVO.objectId && this._castleRessourcesVO.kingdomID == this._castleSelector.selectedCastleVO.kingdomID) {
      this.initSelectors();
    }
  };
  CastleTransferResourcesDialog.prototype.initSelectors = function () {
    var e;
    if (this._tradeComponent) {
      e = this._tradeComponent.selectedIndices;
      this._tradeComponent.hide();
    }
    if (this._castleRessourcesVO && this.sourceDetailedCastleVO && this.dialogProperties.targetInitialized) {
      this.dialogDisp.tradeComponent.visible = true;
      var t = new y.CastleSendGoodsKingdomVO(this.sourceDetailedCastleVO.getResourcesAsCollectableList(), this.dialogProperties.travelTaxRate, this.dialogProperties.targetResources, this.dialogProperties.resourceStorageCapacity, this.dialogProperties.isSubscriptionBuffed);
      this._tradeComponent = new D.CastleSendGoodsComponent(this.dialogDisp.tradeComponent, t, null, this.dialogProperties.hideTabs);
      if (e && e.length > 0) {
        this._tradeComponent.selectedIndices = e;
      }
    }
  };
  CastleTransferResourcesDialog.prototype.onSelectCastle = function (e = null) {
    m.CastleModel.smartfoxClient.sendCommandVO(new p.C2SGetCastleResourcesVO(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID));
  };
  CastleTransferResourcesDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.onOk();
    }
  };
  CastleTransferResourcesDialog.prototype.onOk = function () {
    if (this._tradeComponent) {
      if (this._tradeComponent.getSelectedSum() > 0) {
        if (this.dialogProperties.hasInsufficientTime) {
          f.CastleExternalDialog.dialogHandler.registerDefaultDialogs(T.CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog, new s.BasicStandardYesNoDialogProperties(c.Localize.text("generic_alert_information"), c.Localize.text("alert_season_sendRes_info_insufficentTime"), this.bindFunction(this.sendResources), this.bindFunction(this.dontSendResources)));
        } else {
          this.sendResources();
        }
      } else {
        f.CastleExternalDialog.dialogHandler.registerDefaultDialogs(I.CastleStandardOkDialog, new a.BasicStandardOkDialogProperties(c.Localize.text("generic_alert_information"), c.Localize.text("dialog_sendGoods_noGoods")));
      }
    } else {
      this.hide();
    }
  };
  CastleTransferResourcesDialog.prototype.sendResources = function (e = null) {
    var t = this._castleSelector.selectedCastleVO;
    m.CastleModel.smartfoxClient.sendCommandVO(this.dialogProperties.getSendResourcesCommand(t.objectId, t.kingdomID, this.createC2SRewardList()));
    this.hide();
  };
  CastleTransferResourcesDialog.prototype.dontSendResources = function (e = null) {
    this.hide();
  };
  CastleTransferResourcesDialog.prototype.createC2SRewardList = function () {
    return E.CollectableManager.parser.c2SCosts.createCostsListForServer(E.CollectableManager.parser.createGoodsListSavefromList(this._tradeComponent.rewardList()));
  };
  CastleTransferResourcesDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this._tradeComponent) {
      this._tradeComponent.hide();
    }
    this._castleRessourcesVO = null;
    this._castleSelector.castleList.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
  };
  Object.defineProperty(CastleTransferResourcesDialog.prototype, "sourceDetailedCastleVO", {
    get: function () {
      return m.CastleModel.userCastleListDetailed.getVObyCastleID(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferResourcesDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferResourcesDialog.__initialize_static_members = function () {
    CastleTransferResourcesDialog.NAME = "CastleTransferResources_R2";
  };
  return CastleTransferResourcesDialog;
}(f.CastleExternalDialog);
exports.CastleTransferResourcesDialog = O;
var E = require("./50.js");
var y = require("./3709.js");
var b = require("./321.js");
var D = require("./1347.js");
var I = require("./38.js");
var T = require("./3710.js");
l.classImplementsInterfaces(O, "ICollectableRendererList");
O.__initialize_static_members();