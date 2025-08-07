Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./16.js");
var m = require("./39.js");
var f = require("./881.js");
var O = require("./217.js");
var E = require("./218.js");
var y = require("./4.js");
var b = require("./24.js");
var D = require("./197.js");
var I = require("./1214.js");
var T = require("./171.js");
var v = require("./8.js");
var S = function (e) {
  function CastleFestivalDialog() {
    var t = this;
    t.feastCostReduction = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleFestivalDialog.NAME) || this;
  }
  n.__extends(CastleFestivalDialog, e);
  CastleFestivalDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_cancel, this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
  };
  CastleFestivalDialog.prototype.addEventListenerOnShow = function () {
    this._typeComboBox.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onTypeComboboxChange));
    this._castleSelector.castleList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onCastleComboboxChange));
    this.controller.addEventListener(E.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
    this.controller.addEventListener(V.CastleServerMessageArrivedEvent.FCE_ARRIVED, this.bindFunction(this.onFCEArrived));
  };
  CastleFestivalDialog.prototype.removeEventListenerOnHide = function () {
    this._typeComboBox.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onTypeComboboxChange));
    this._castleSelector.castleList.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onCastleComboboxChange));
    this.controller.removeEventListener(E.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
    this.controller.removeEventListener(V.CastleServerMessageArrivedEvent.FCE_ARRIVED, this.bindFunction(this.onFCEArrived));
  };
  CastleFestivalDialog.prototype.showLoaded = function (t = null) {
    this._typeComboBox ||= new P.ComboboxComponent(this.dialogDisp.mc_combobox, "", 1, 40, 45, -1, 0, new I.ComboboxItemRendererLong());
    this._castleSelector ||= new M.CastleSelectorComponent(this.dialogDisp.mc_castleSelector);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new h.LocalizedTextVO("dialog_festival_desc"));
    this.itxt_boost = this.textFieldManager.registerTextField(this.dialogDisp.mc_productivity.txt_boost, new h.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_ADD));
    this.itxt_boost.autoFitToBounds = true;
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_cost, new p.LocalizedNumberVO(0));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new g.TextVO(""));
    this.dialogDisp.mc_productivity.toolTipText = "recruitspeed";
    this.dialogDisp.mc_time.toolTipText = "dialog_moveOverview_waitTime";
    this.dialogDisp.mc_costs.toolTipText = m.ClientConstTextIds.FOOD;
    var i = new L.CastleListVO();
    for (var n = 0; n < y.CastleModel.userData.castleList.list.length; n++) {
      if (y.CastleModel.userData.castleList.list[n].kingdomID != u.FactionConst.KINGDOM_ID) {
        i.addCastle(y.CastleModel.userData.castleList.list[n], y.CastleModel.userData.castleList.list[n].kingdomID);
      }
    }
    this._castleSelector.initComponent(y.CastleModel.otherPlayerData.getOwnInfoVO(), i, this.getCurrentCastleVO());
    this.fillFestivalList();
    y.CastleModel.smartfoxClient.sendCommandVO(new R.C2SGetFeastCostReductionVO());
    y.CastleModel.smartfoxClient.sendCommandVO(new O.C2SGetDetailedCastleListVO());
    e.prototype.showLoaded.call(this, t);
  };
  CastleFestivalDialog.prototype.getCurrentCastleVO = function () {
    if (y.CastleModel.areaData.activeArea.isMyArea) {
      for (var e = 0; e < y.CastleModel.userData.castleList.list.length; e++) {
        if (y.CastleModel.userData.castleList.list[e].objectId == y.CastleModel.areaData.activeAreaInfo.objectId) {
          return y.CastleModel.userData.castleList.list[e];
        }
      }
    }
    return y.CastleModel.userData.castleList.getHomeCastle();
  };
  CastleFestivalDialog.prototype.onTypeComboboxChange = function (e = null) {
    var t = this._typeComboBox.selectedData.vo;
    var i = t.hasC2Costs() ? 1 : 1 - this.feastCostReduction / 100;
    this.itxt_boost.textContentVO.textReplacements = [t.boost];
    this.itxt_cost.textContentVO.numberValue = t.cost * i;
    this.itxt_time.textContentVO.stringValue = l.TimeStringHelper.getTimeToString(t.durationInSeconds, l.TimeStringHelper.ONE_TIME_HOURS_FORMAT, d.Localize.text);
    if (t.hasC2Costs()) {
      this.dialogDisp.mc_costs.toolTipText = m.ClientConstTextIds.C2;
      this.itxt_cost.color = y.CastleModel.currencyData.c2Amount < t.cost ? _.ClientConstColor.FONT_INSUFFICIENT_COLOR : _.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      this.dialogDisp.mc_costs.toolTipText = m.ClientConstTextIds.FOOD;
      this.updateFoodCostColor();
    }
    this.dialogDisp.mc_costs.icon_cost.gotoAndStop(t.hasC2Costs() ? 2 : 1);
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_imageHolder);
    this.dialogDisp.mc_imageHolder.addChild(new b.CastleGoodgameExternalClip(t.assetName, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(t.assetName), null, 0, false).asDisplayObject());
    this.checkUserlevel();
  };
  CastleFestivalDialog.prototype.updateFoodCostColor = function () {
    var e = this._typeComboBox.selectedData.vo;
    var t = y.CastleModel.userCastleListDetailed.getVObyCastleID(this.getSelectedCastleID(), this.getSelectedCastleKingdomID());
    if (t) {
      var i = t.getResource(A.CollectableEnum.FOOD) >= e.cost;
      this.itxt_cost.color = i ? _.ClientConstColor.FONT_DEFAULT_COLOR : _.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
  };
  CastleFestivalDialog.prototype.onCastleComboboxChange = function (e = null) {
    this.updateFoodCostColor();
  };
  CastleFestivalDialog.prototype.onDetailedCastleListArrived = function (e = null) {
    this.updateFoodCostColor();
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
  };
  CastleFestivalDialog.prototype.onFCEArrived = function (e = null) {
    this.feastCostReduction = JSON.parse(e.params[1][1]).FRM;
    this.onTypeComboboxChange();
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
  };
  CastleFestivalDialog.prototype.checkUserlevel = function () {
    var e = this._typeComboBox.selectedData.vo;
    if (y.CastleModel.userData.userLevel < e.minLevel) {
      v.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
      this.dialogDisp.btn_ok.enabled = false;
      this.dialogDisp.btn_ok.toolTipText = "expansion_higherLevelNeeded" + D.CastleToolTipManager.ID_PARAM_SEPERATOR + e.minLevel;
    } else {
      v.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
      this.dialogDisp.btn_ok.enabled = true;
      this.dialogDisp.btn_ok.toolTipText = "";
    }
  };
  CastleFestivalDialog.prototype.getSelectedCastleID = function () {
    return C.int(this._castleSelector.selectedCastleVO.objectId);
  };
  CastleFestivalDialog.prototype.getSelectedCastleKingdomID = function () {
    return C.int(this._castleSelector.selectedCastleVO.kingdomID);
  };
  CastleFestivalDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_cancel:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        if (this.dialogDisp.btn_ok.enabled) {
          var i = this._typeComboBox.selectedData.vo;
          y.CastleModel.smartfoxClient.sendCommandVO(new f.C2SFestivalStartVO(i.id, this.getSelectedCastleID(), this.getSelectedCastleKingdomID()));
          y.CastleModel.boostData.festivalVO.boostAmount = i.boost;
          this.hide();
        }
    }
  };
  CastleFestivalDialog.prototype.fillFestivalList = function () {
    var e;
    this._typeComboBox.clearItems();
    for (var t = y.CastleModel.premiumData.getFestivalItemsByLevel(y.CastleModel.userData.userLevel), i = 0; i < t.length; i++) {
      (e = new T.ComboboxItemRendererVO()).itemLabel = d.Localize.text(t[i].nameTextID);
      e.data = {
        vo: t[i]
      };
      this._typeComboBox.addItem(e);
    }
    this._typeComboBox.selectItemIndex(0);
    this.onTypeComboboxChange();
  };
  CastleFestivalDialog.__initialize_static_members = function () {
    CastleFestivalDialog.NAME = "CastleFestivalEx";
  };
  return CastleFestivalDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleFestivalDialog = S;
var A = require("./12.js");
var L = require("./373.js");
var P = require("./178.js");
var M = require("./321.js");
var R = require("./1213.js");
var V = require("./37.js");
c.classImplementsInterfaces(S, "ICollectableRendererList");
S.__initialize_static_members();