Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./8.js");
var l = require("./11.js");
var c = require("./3.js");
var u = require("./37.js");
var d = require("./13.js");
var p = require("./218.js");
var h = require("./4.js");
var g = require("./217.js");
var C = require("./1024.js");
var _ = require("./5546.js");
var m = require("./1023.js");
var f = require("./12.js");
var O = require("./20.js");
var E = require("./5.js");
var y = require("./159.js");
var b = require("./9.js");
var D = require("./1022.js");
var I = function (e) {
  function CastleBreweryShortageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleBreweryShortageDialog.NAME) || this;
  }
  n.__extends(CastleBreweryShortageDialog, e);
  CastleBreweryShortageDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    r.ButtonHelper.initButtons([this.dialogDisp.btn_trader, this.dialogDisp.btn_brewery, this.dialogDisp.btn_close], O.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicBrewery_insufficientResources_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title1, new s.LocalizedTextVO("currentStock_01"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title2, new s.LocalizedTextVO("productionLimit"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_relicBrewery_insufficientResources_copy", [this.infoProperties.messageVO.areaName]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new s.LocalizedTextVO("dialog_resourceWait_traderSpeechBubble"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_trader.txt_text, new c.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_resourceWait_toTraderButton_short")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_brewery.txt_text, new c.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicBrewery_insufficientResources_toBreweryButton")));
    r.ButtonHelper.enableButton(this.dialogDisp.btn_trader, !!this.traderVO);
    this.controller.addEventListener(p.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedListData));
    this.controller.addEventListener(C.CastleBreweryData.ON_BREWERY_INFO_EXTERN, this.bindFunction(this.onBreweryData));
    h.CastleModel.smartfoxClient.sendCommandVO(new g.C2SGetDetailedCastleListVO(0));
    h.CastleModel.breweryData.waitForExternalCommand = true;
    h.CastleModel.smartfoxClient.sendCommandVO(new _.C2SGetAreaBuildingProductionVO(this.infoProperties.messageVO.kingdomID, this.infoProperties.messageVO.areaID, this.infoProperties.messageVO.wodID, this.infoProperties.messageVO.objectID));
  };
  CastleBreweryShortageDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.controller.removeEventListener(p.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedListData));
    this.controller.removeEventListener(C.CastleBreweryData.ON_BREWERY_INFO_EXTERN, this.bindFunction(this.onBreweryData));
  };
  CastleBreweryShortageDialog.prototype.onDetailedListData = function (e = null) {
    var t = h.CastleModel.userCastleListDetailed.getVObyCastleID(this.infoProperties.messageVO.areaID, this.infoProperties.messageVO.kingdomID);
    var i = new m.ResourceComponentWithStorageBar(this.dialogDisp.res_food, f.CollectableEnum.FOOD);
    i.setValue(t.getResource(f.CollectableEnum.FOOD), t.getMaxStorageSpace(f.CollectableEnum.FOOD));
    i.disp.doCache();
    this.dialogDisp.res_food.toolTipText = null;
    this.dialogDisp.res_food.mouseChildren = true;
    this.dialogDisp.res_food.mc_stock_food.toolTipText = "food";
    var n = new m.ResourceComponentWithStorageBar(this.dialogDisp.res_honey, f.CollectableEnum.HONEY);
    n.setValue(t.getResource(f.CollectableEnum.HONEY), t.getMaxStorageSpace(f.CollectableEnum.HONEY));
    n.disp.doCache();
    this.dialogDisp.res_honey.toolTipText = null;
    this.dialogDisp.res_honey.mouseChildren = true;
    this.dialogDisp.res_honey.mc_stock_honey.toolTipText = "honey";
  };
  CastleBreweryShortageDialog.prototype.onBreweryData = function (e = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_limit_food, new a.LocalizedNumberVO(h.CastleModel.breweryData.ex_stopAtFoodAmount));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_limit_honey, new a.LocalizedNumberVO(h.CastleModel.breweryData.ex_stopAtHoneyAmount));
    this.dialogDisp.mc_limit_food.toolTipText = "food";
    this.dialogDisp.mc_limit_honey.toolTipText = "honey";
  };
  CastleBreweryShortageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (r.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_trader:
          this.hide();
          this.joinCastle(this.bindFunction(this.onJAATrader));
          break;
        case this.dialogDisp.btn_brewery:
          this.hide();
          this.joinCastle(this.bindFunction(this.onJAABrewery));
      }
    }
  };
  CastleBreweryShortageDialog.prototype.joinCastle = function (e) {
    if (this.layoutManager.isInMyCastle && h.CastleModel.kingdomData.activeKingdomID == this.infoProperties.messageVO.kingdomID && h.CastleModel.areaData.activeAreaInfo.objectId == this.infoProperties.messageVO.areaID) {
      e();
    } else {
      this.controller.addEventListener(u.CastleServerMessageArrivedEvent.JAA_ARRIVED, e);
      if (h.CastleModel.worldmapData) {
        h.CastleModel.worldmapData.allowGAARequests = false;
      }
      h.CastleModel.smartfoxClient.sendCommandVO(new y.C2SJoinCastleVO(this.infoProperties.messageVO.areaID, this.infoProperties.messageVO.kingdomID));
    }
  };
  CastleBreweryShortageDialog.prototype.onJAABrewery = function (e = null) {
    this.controller.removeEventListener(u.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJAABrewery));
    b.CastleDialogHandler.getInstance().registerDialogs(D.CastleBreweryDialog);
  };
  CastleBreweryShortageDialog.prototype.onJAATrader = function (e = null) {
    this.controller.removeEventListener(u.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJAATrader));
    this.traderVO.openDialog(true);
  };
  Object.defineProperty(CastleBreweryShortageDialog.prototype, "traderVO", {
    get: function () {
      return h.CastleModel.specialEventData.getActiveEventByEventId(E.EventConst.EVENTTYPE_MERCHANT);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryShortageDialog.prototype, "infoProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBreweryShortageDialog.NAME = "CastleBreweryOutOfHoney";
  return CastleBreweryShortageDialog;
}(l.CastleExternalDialog);
exports.CastleBreweryShortageDialog = I;
o.classImplementsInterfaces(I, "ICollectableRendererList");