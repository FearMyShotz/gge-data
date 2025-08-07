Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./16.js");
var h = require("./39.js");
var g = require("./882.js");
var C = require("./218.js");
var _ = require("./21.js");
var m = require("./219.js");
var f = require("./153.js");
var O = require("./13.js");
var E = require("./4.js");
var y = require("./20.js");
var b = require("./497.js");
var D = require("./419.js");
var I = require("./420.js");
var T = require("./8.js");
var v = function (e) {
  function CastleExtendFestivalDialog() {
    var t = this;
    t.feastCostReduction = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleExtendFestivalDialog.NAME) || this;
  }
  n.__extends(CastleExtendFestivalDialog, e);
  CastleExtendFestivalDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    T.ButtonHelper.initButtons([this.dialogDisp.btn_back, this.dialogDisp.btn_ok], y.ClickFeedbackButtonHover);
    this._castleSelector ||= new D.SimpleComboboxComponent(this.dialogDisp.mc_castleSelector, new I.SimpleComboboxComponentConfig(0, 1));
  };
  CastleExtendFestivalDialog.prototype.addEventListenerOnShow = function () {
    this._castleSelector.onSelectionChanged.add(this.bindFunction(this.onCastleComboboxChange));
    this.controller.addEventListener(m.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
    this.controller.addEventListener(L.CastleServerMessageArrivedEvent.FCE_ARRIVED, this.bindFunction(this.onFCEArrived));
    E.CastleModel.timerData.addEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
  };
  CastleExtendFestivalDialog.prototype.removeEventListenerOnHide = function () {
    this._castleSelector.onSelectionChanged.remove(this.bindFunction(this.onCastleComboboxChange));
    this.controller.removeEventListener(m.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
    this.controller.removeEventListener(L.CastleServerMessageArrivedEvent.FCE_ARRIVED, this.bindFunction(this.onFCEArrived));
    E.CastleModel.timerData.removeEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this._castleSelector.onHide();
  };
  CastleExtendFestivalDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initCastleSelector();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("dialog_festival_extend_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_type, new d.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId(this.festivalVO.nameTextID)));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new u.LocalizedTextVO("dialog_festival_extend_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_time_copy, new u.LocalizedTextVO("addedTime_colon"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bonus_copy, new u.LocalizedTextVO("dialog_festival_extend_recruitmentBonus"));
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.txt_costs, new c.LocalizedNumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_costs_copy, new u.LocalizedTextVO("cost_simple"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bonus, new u.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.festivalVO.boost])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new d.TextVO(a.TimeStringHelper.getCommaTimeStringFromSeconds(this.festivalVO.durationInSeconds, l.Localize.text)));
    this.updateCosts();
    this.dialogDisp.mc_bonus.toolTipText = "recruitspeed";
    this.dialogDisp.mc_time.toolTipText = "dialog_moveOverview_waitTime";
    this.dialogDisp.mc_food.toolTipText = h.ClientConstTextIds.FOOD;
    this.dialogDisp.mc_discount.visible = this.feastCostReduction > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_copy, new u.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.feastCostReduction]));
    this.dialogDisp.mc_feast0.visible = this.festivalVO.assetID == 0;
    this.dialogDisp.mc_feast1.visible = this.festivalVO.assetID == 1;
    this.dialogDisp.mc_feast2.visible = this.festivalVO.assetID == 2;
    this.dialogDisp.mc_feast3.visible = this.festivalVO.assetID == 3;
    this.dialogDisp.mc_feast4.visible = this.festivalVO.assetID >= 4;
    E.CastleModel.smartfoxClient.sendCommandVO(new A.C2SGetFeastCostReductionVO());
    E.CastleModel.smartfoxClient.sendCommandVO(new C.C2SGetDetailedCastleListVO());
    this.updateTime();
  };
  CastleExtendFestivalDialog.prototype.initCastleSelector = function () {
    var e = [];
    var t = 0;
    for (var i = 0; i < E.CastleModel.userData.castleList.list.length; i++) {
      if (E.CastleModel.userData.castleList.list[i].kingdomID != r.FactionConst.KINGDOM_ID) {
        var n = new b.ModernComboboxComponentItem("FeastExtendCastleItem", CastleExtendFestivalDialog.NAME, this.bindFunction(this.fillCastleItem), E.CastleModel.userData.castleList.list[i]);
        e.push(n);
        if (E.CastleModel.areaData.activeArea && E.CastleModel.areaData.activeArea.areaId == E.CastleModel.userData.castleList.list[i].objectId && E.CastleModel.kingdomData.activeKingdomID == E.CastleModel.userData.castleList.list[i].kingdomID) {
          t = i;
        }
      }
    }
    this._castleSelector.setVisibility(!this.festivalVO.hasC2Costs());
    this._castleSelector.updateWithNewValues(e);
    this._castleSelector.onShow();
    this._castleSelector.selectIndex(t);
  };
  CastleExtendFestivalDialog.prototype.fillCastleItem = function (e) {
    this.textFieldManager.registerTextField(e.getItemMc().txt_text, new d.TextVO(e.data.areaNameString)).autoFitToBounds = true;
    var t = new s.ColorTransform();
    t.color = f.KingdomEnum.getTypeById(e.data.kingdomID).symbolBgColor;
    e.getItemMc().mc_castle_dot.mc_color.useFilters([new createjs.ColorFilter(t.redMultiplier, t.greenMultiplier, t.blueMultiplier, t.alphaMultiplier, t.redOffset, t.greenOffset, t.blueOffset, t.alphaOffset)]);
  };
  CastleExtendFestivalDialog.prototype.getCurrentCastleVO = function () {
    if (E.CastleModel.areaData.activeArea.isMyArea) {
      for (var e = 0; e < E.CastleModel.userData.castleList.list.length; e++) {
        if (E.CastleModel.userData.castleList.list[e].objectId == E.CastleModel.areaData.activeAreaInfo.objectId) {
          return E.CastleModel.userData.castleList.list[e];
        }
      }
    }
    return E.CastleModel.userData.castleList.getHomeCastle();
  };
  Object.defineProperty(CastleExtendFestivalDialog.prototype, "festivalVO", {
    get: function () {
      return E.CastleModel.boostData.festivalVO.activeFestivalVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExtendFestivalDialog.prototype, "remainingTime", {
    get: function () {
      return E.CastleModel.boostData.festivalVO.remainingTimeInSeconds;
    },
    enumerable: true,
    configurable: true
  });
  CastleExtendFestivalDialog.prototype.updateTime = function (e = null) {
    this.itxt_time.textContentVO.textReplacements = [a.TimeStringHelper.getCommaTimeStringFromSeconds(this.remainingTime, l.Localize.text)];
  };
  CastleExtendFestivalDialog.prototype.updateCosts = function () {
    if (this.itxt_cost) {
      var e = this.festivalVO.hasC2Costs() ? 1 : 1 - this.feastCostReduction / 100;
      this.itxt_cost.textContentVO.numberValue = this.festivalVO.cost * e;
      if (this.festivalVO.hasC2Costs()) {
        this.dialogDisp.mc_ruby.toolTipText = h.ClientConstTextIds.C2;
        this.itxt_cost.color = E.CastleModel.currencyData.c2Amount < this.festivalVO.cost ? p.ClientConstColor.FONT_INSUFFICIENT_COLOR : p.ClientConstColor.FONT_DEFAULT_COLOR;
      } else {
        this.dialogDisp.mc_food.toolTipText = h.ClientConstTextIds.FOOD;
        var t = E.CastleModel.userCastleListDetailed.getVObyCastleID(this.getSelectedCastle().objectId, this.getSelectedCastle().kingdomID);
        if (t) {
          var i = t.getResource(S.CollectableEnum.FOOD) >= this.festivalVO.cost;
          this.itxt_cost.color = i ? p.ClientConstColor.FONT_DEFAULT_COLOR : p.ClientConstColor.FONT_INSUFFICIENT_COLOR;
        }
      }
      this.dialogDisp.mc_ruby.visible = this.festivalVO.hasC2Costs();
      this.dialogDisp.mc_food.visible = !this.festivalVO.hasC2Costs();
    }
  };
  CastleExtendFestivalDialog.prototype.onCastleComboboxChange = function (e = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_castleSelector.mc_selector.txt_copy, new d.TextVO(this.getSelectedCastle().areaNameString)).autoFitToBounds = true;
    var t = new s.ColorTransform();
    this.getSelectedCastle();
    t.color = f.KingdomEnum.getTypeById(this.getSelectedCastle().kingdomID).symbolBgColor;
    this.dialogDisp.mc_castleSelector.mc_selector.mc_castle_dot.mc_color.useFilters([new createjs.ColorFilter(t.redMultiplier, t.greenMultiplier, t.blueMultiplier, t.alphaMultiplier, t.redOffset, t.greenOffset, t.blueOffset, t.alphaOffset)]);
    this.updateCosts();
  };
  CastleExtendFestivalDialog.prototype.onDetailedCastleListArrived = function (e = null) {
    this.updateCosts();
    T.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true, 1);
  };
  CastleExtendFestivalDialog.prototype.onFCEArrived = function (e = null) {
    this.feastCostReduction = JSON.parse(e.params[1][1]).FRM;
    this.updateCosts();
    T.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true, 1);
  };
  CastleExtendFestivalDialog.prototype.getSelectedCastle = function () {
    return this._castleSelector.getSelectedItem().data;
  };
  CastleExtendFestivalDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_back:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        if (this.dialogDisp.btn_ok.enabled) {
          E.CastleModel.smartfoxClient.sendCommandVO(new g.C2SFestivalStartVO(this.festivalVO.id, this.getSelectedCastle().objectId, this.getSelectedCastle().kingdomID));
          this.hide();
        }
    }
  };
  CastleExtendFestivalDialog.__initialize_static_members = function () {
    CastleExtendFestivalDialog.NAME = "Festival2";
  };
  return CastleExtendFestivalDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleExtendFestivalDialog = v;
var S = require("./12.js");
var A = require("./1213.js");
var L = require("./37.js");
s.classImplementsInterfaces(v, "ICollectableRendererList");
v.__initialize_static_members();