Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./39.js");
var d = require("./891.js");
var p = require("./2517.js");
var h = require("./37.js");
var g = require("./13.js");
var C = require("./4.js");
var _ = require("./76.js");
var m = require("./77.js");
var f = require("./8.js");
var O = require("./11.js");
var E = require("./135.js");
var y = function (e) {
  function CastleABGTowerEffectsDialog() {
    return e.call(this, CastleABGTowerEffectsDialog.NAME) || this;
  }
  n.__extends(CastleABGTowerEffectsDialog, e);
  CastleABGTowerEffectsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_IncreaseBuff_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_costTxt, new r.LocalizedTextVO("cost"));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new r.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_IncreaseBuff_copy", [0]));
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.txt_cost, new l.LocalizedNumberVO(0));
    this.itxt_discount = this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_value, new r.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [0]));
    this.dialogDisp.mc_discount.mouseChildren = false;
    this.dialogDisp.mc_discount.visible = false;
    this.dialogDisp.mc_c2.toolTipText = u.ClientConstTextIds.C2;
    f.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], A.ClickFeedbackButtonHover);
    var i = new m.InfiniteScrollListOptions(v.CastleABGTowerEffectsDialogItem, "ABGTowerEffects_ListItem", S.CastleAllianceBattleGroundEventDialog.NAME);
    i.itemPaddingY = 4;
    i.useSmoothScroll = true;
    this._list = new D.InfiniteScrollListComponent(new _.InfiniteScrollListClips(this.dialogDisp).addSliderMc(this.dialogDisp.mc_slider), i);
  };
  CastleABGTowerEffectsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._list.setVisibility(false);
    C.CastleModel.smartfoxClient.sendCommandVO(new d.C2SGetAllianceTowerBuffInfoVO(this.dialogProperties.allianceTowerMapObjectVO.absAreaPos, this.dialogProperties.allianceTowerMapObjectVO.ownerInfo.allianceID));
  };
  CastleABGTowerEffectsDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._list.onHide();
    for (var i = 0; i < this._list.dataList.length; i++) {
      var n = this._list.dataList[i][0];
      n.selectedLevel = n.currentLevel;
    }
  };
  CastleABGTowerEffectsDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(h.CastleServerMessageArrivedEvent.ABG_TOWERS_BUFF_INFO, this.bindFunction(this.onAllianceBuffInfoReceived));
  };
  CastleABGTowerEffectsDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(h.CastleServerMessageArrivedEvent.ABG_TOWERS_BUFF_INFO, this.bindFunction(this.onAllianceBuffInfoReceived));
  };
  CastleABGTowerEffectsDialog.prototype.onAllianceBuffInfoReceived = function (e) {
    this._currentAllianceTowerBuffInfoVO = e.params[0];
    var t = [];
    for (var i = 0; i < this._currentAllianceTowerBuffInfoVO.currentEffects.length; i++) {
      var n = this._currentAllianceTowerBuffInfoVO.currentEffects[i];
      t.push([n, this.bindFunction(this.onSelectionChangedCallback)]);
    }
    this._list.setVisibility(true);
    this._list.onShow();
    this._list.updateWithNewData(t);
  };
  CastleABGTowerEffectsDialog.prototype.onSelectionChangedCallback = function () {
    var e = 0;
    var t = 0;
    for (var i = 0; i < this._currentAllianceTowerBuffInfoVO.currentEffects.length; i++) {
      var n = this._currentAllianceTowerBuffInfoVO.currentEffects[i];
      e += n.getTotalCostForSelectedLevel();
      t += n.selectedLevel - n.currentLevel;
    }
    this.itxt_cost.textContentVO.numberValue = e;
    I.CostHelper.setCostC2TextFieldColor(this.itxt_cost, e);
    this.itxt_desc.textContentVO.textReplacements = [t];
  };
  CastleABGTowerEffectsDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          var i = c.int(this.itxt_cost.textContentVO.numberValue);
          if (C.CastleModel.currencyData.c2Amount > i) {
            var n = this._currentAllianceTowerBuffInfoVO.createServerEffectsArray();
            if (n.length > 0) {
              C.CastleModel.smartfoxClient.sendCommandVO(new p.C2SIncreaseAllianceTowerBuffVO(this.dialogProperties.allianceTowerMapObjectVO.absAreaPos, n));
            }
            this.hide();
          } else {
            b.CastleDialogHandler.getInstance().registerDefaultDialogs(T.CastleNoMoneyC2Dialog, new E.CastleNoMoneyC2DialogProperties());
          }
      }
    }
  };
  Object.defineProperty(CastleABGTowerEffectsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleABGTowerEffectsDialog.NAME = "CastleABGTowerEffects";
  return CastleABGTowerEffectsDialog;
}(O.CastleExternalDialog);
exports.CastleABGTowerEffectsDialog = y;
var b = require("./9.js");
var D = require("./78.js");
var I = require("./66.js");
var T = require("./138.js");
var v = require("./2518.js");
var S = require("./249.js");
var A = require("./20.js");
o.classImplementsInterfaces(y, "ICollectableRendererList");