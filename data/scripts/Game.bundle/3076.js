Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./28.js");
var h = require("./3077.js");
var g = require("./3078.js");
var C = require("./21.js");
var _ = require("./1038.js");
var m = require("./31.js");
var f = require("./19.js");
var O = require("./355.js");
var E = require("./13.js");
var y = require("./4.js");
var b = require("./27.js");
var D = require("./76.js");
var I = require("./77.js");
var T = require("./8.js");
var v = require("./35.js");
var S = require("./1591.js");
var A = require("./120.js");
var L = createjs.Point;
var P = function (e) {
  function OfficersSchoolDialogList(t) {
    var i = e.call(this, t) || this;
    i.popupMC = i.subLayerDisp.mc_overlay;
    i.popupMC.visible = false;
    i.initBasicButtons([i.subLayerDisp.mc_activeEffect.mc_unit0.btn_info, i.subLayerDisp.mc_activeEffect.mc_unit1.btn_info]);
    T.ButtonHelper.initButtons([i.subLayerDisp.btn_reroll, i.popupMC.btn_left, i.popupMC.btn_right, i.popupMC.btn_close, i.subLayerDisp.mc_activeEffect.btn_ok], W.ClickFeedbackButton);
    var n = new I.InfiniteScrollListOptions(j.OfficersSchoolEffectItem, "OfficersSchoolListItem", H.OfficersSchoolDialog.NAME);
    n.itemPaddingY = 2;
    n.useSmoothScroll = true;
    i._scrollList = new F.InfiniteScrollListComponent(new D.InfiniteScrollListClips(i.subLayerDisp.mc_list).addMaskMc(i.subLayerDisp.mc_mask).addItemContainerMc(i.subLayerDisp.mc_list).addSliderMc(i.subLayerDisp.mc_slider), n);
    i._scrollList.scrollComponent.scrollVO.addMouseWheelElements([i.disp]);
    return i;
  }
  n.__extends(OfficersSchoolDialogList, e);
  OfficersSchoolDialogList.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    y.CastleModel.timerData.addEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    y.CastleModel.officerSchoolData.addEventListener(_.OfficersSchoolDataEvent.DATA_UPDATED, this.bindFunction(this.updateData));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title0, new l.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_overview_header")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title1, new l.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_selectableEffect_header")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_reroll.txt_copy, new l.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_reroll_button")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy0, new l.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_currentlyActive_header")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_empty.txt_copy, new c.LocalizedTextVO("dialog_trainingProgram_noProgram_desc"));
    this.textFieldManager.registerTextField(this.popupMC.txt_copy, new c.LocalizedTextVO("dialog_trainingProgram_overlay_desc")).autoFitToBounds = true;
    this.remTimeTF = this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy1, new c.LocalizedTextVO("resttime", [" "]));
    this.textFieldManager.registerTextField(this.popupMC.btn_left.txt_value, new l.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_overlay_freeRoll_Button")));
    this.textFieldManager.registerTextField(this.popupMC.btn_right.txt_value, new l.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_overlay_premiumRoll_Button")));
    this.popupMC.mc_free.toolTipText = "dialog_trainingProgram_overlay_freeRoll_tooltip";
    this.popupMC.mc_free.mouseChildren = false;
    r.BasicModel.smartfoxClient.sendCommandVO(new h.C2SGetTrainingProgramInfoVO());
    this._scrollList.onShow();
  };
  OfficersSchoolDialogList.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._scrollList.onHide();
    y.CastleModel.timerData.removeEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    y.CastleModel.officerSchoolData.removeEventListener(_.OfficersSchoolDataEvent.DATA_UPDATED, this.bindFunction(this.updateData));
  };
  OfficersSchoolDialogList.prototype.updateData = function (e = null) {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_time, new l.TextVO(" "));
    this.onTimerTick();
    this.updateActiveEffect();
    this.updateItems();
  };
  OfficersSchoolDialogList.prototype.updateItems = function () {
    var e = [];
    for (var t = 0; t < y.CastleModel.officerSchoolData.availableEffectsList.length; t++) {
      var i = {
        vo: y.CastleModel.officerSchoolData.availableEffectsList[t],
        pos: t
      };
      e.push(i);
    }
    this._scrollList.updateWithNewData(e);
  };
  OfficersSchoolDialogList.prototype.updateActiveEffect = function () {
    if (this.activeEffect) {
      var e = this.subLayerDisp.mc_activeEffect;
      a.MovieClipHelper.clearMovieClip(e.mc_event);
      e.mc_event.addChild(O.EventIconHelper.createEventIconByEventID(this.activeEffect.eventID, new L(70, 70)));
      e.mc_event.toolTipText = "event_title_" + this.activeEffect.eventID;
      e.mc_event.mouseChildren = false;
      for (var t = 0; t < 2; t++) {
        var i = e["mc_unit" + t];
        if (this.activeEffect.wodIDs.length >= t + 1) {
          i.visible = true;
          k.WodPicHelper.addUnitPic(y.CastleModel.wodData.getUnitVOByWodId(this.activeEffect.wodIDs[t]), i.mc_icon, 78, 78, y.CastleModel.userData.playerCrest.colorsTwo[0], y.CastleModel.userData.playerCrest.colorsTwo[1]);
          i.mc_icon.mouseChildren = false;
          i.mc_icon.toolTipText = y.CastleModel.wodData.getUnitVOByWodId(this.activeEffect.wodIDs[t]).getNameString();
        } else {
          i.visible = false;
        }
      }
      this.textFieldManager.registerTextField(e.txt_copy, new c.LocalizedTextVO("dialog_trainingProgram_effect_" + this.activeEffect.effectVO.name, [this.activeEffect.bonusVO.strength]));
      this.textFieldManager.registerTextField(e.mc_cost.txt_cost, new u.LocalizedNumberVO(this.c2ProlongCosts.amount));
      this.setCollItem(e.mc_cost.mc_icon, this.c2ProlongCosts);
      this.textFieldManager.registerTextField(e.btn_ok.txt_copy, new l.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_prolongEffect_button")));
    }
  };
  OfficersSchoolDialogList.prototype.setCollItem = function (e, t) {
    var i = new f.CollectableRenderOptions(f.CollectableRenderOptions.SET_ICON, new L(30, 30));
    i.tooltip.useAmount = false;
    var n = new m.CollectableRenderClips();
    n.addIconMc(e);
    N.CollectableRenderHelper.displaySingleItemComplete(this, n, t, i);
  };
  Object.defineProperty(OfficersSchoolDialogList.prototype, "c2ProlongCosts", {
    get: function () {
      return R.CollectableHelper.createVO(M.CollectableEnum.C2, y.CastleModel.officerSchoolData.getC2ProlongCosts());
    },
    enumerable: true,
    configurable: true
  });
  OfficersSchoolDialogList.prototype.onTimerTick = function (e = null) {
    this.remTimeTF.visible = this.isEffectActive;
    this.subLayerDisp.mc_empty.visible = !this.isEffectActive;
    this.remTime1TF ||= this.textFieldManager.registerTextField(this.subLayerDisp.txt_time, new l.TextVO(" "));
    this.remTime1TF.visible = this.isEffectActive;
    if (this.isEffectActive) {
      this.remTime1TF.textContentVO.stringValue = b.CastleTimeStringHelper.getEventTimeString(this.activeEffect.remainingTimeInSeconds, p.ClientConstTime.SECONDS_PER_DAY, 1);
    }
  };
  OfficersSchoolDialogList.prototype.onClick = function (t) {
    if (T.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.subLayerDisp.btn_reroll:
          this.showPopup();
          break;
        case this.popupMC.btn_close:
          this.popupMC.visible = false;
          break;
        case this.popupMC.btn_left:
          this.layoutManager.showDialog(U.ModernCostConfirmationDialog, new S.ModernCostConfirmationDialogProperties("dialog_trainingProgram_reroll_header", d.Localize.text("dialog_trainingProgram_reroll_desc"), this.softRerollCosts, this.bindFunction(this.onConfirmSoftReroll)));
          break;
        case this.popupMC.btn_right:
          this.layoutManager.showDialog(U.ModernCostConfirmationDialog, new S.ModernCostConfirmationDialogProperties("dialog_trainingProgram_premiumReroll_header", d.Localize.text("dialog_trainingProgram_premiumReroll_desc"), this.hardRerollCosts, this.bindFunction(this.onConfirmHardReroll)));
          break;
        case this.subLayerDisp.mc_activeEffect.mc_unit0.btn_info:
          B.CastleDialogHandler.getInstance().registerDefaultDialogs(G.CastleRecruitInfoDialog, new A.CastleRecruitInfoDialogProperties(new x.CollectableItemUnitVO(this.activeEffect.wodIDs[0]).unitVO));
          break;
        case this.subLayerDisp.mc_activeEffect.mc_unit1.btn_info:
          B.CastleDialogHandler.getInstance().registerDefaultDialogs(G.CastleRecruitInfoDialog, new A.CastleRecruitInfoDialogProperties(new x.CollectableItemUnitVO(this.activeEffect.wodIDs[1]).unitVO));
          break;
        case this.subLayerDisp.mc_activeEffect.btn_ok:
          this.layoutManager.showDialog(U.ModernCostConfirmationDialog, new S.ModernCostConfirmationDialogProperties("dialog_trainingProgram_prolongProgram_header", d.Localize.text(this.activeEffect.prolongDurationInHours <= 1 ? "dialog_trainingProgram_prolongProgram_desc_singular" : "dialog_trainingProgram_prolongProgram_desc", [this.activeEffect.prolongDurationInHours]), this.c2ProlongCosts, this.bindFunction(this.onBuyProlong)));
      }
    }
  };
  OfficersSchoolDialogList.prototype.onConfirmSoftReroll = function (e = null) {
    this.popupMC.visible = false;
    y.CastleModel.officerSchoolData.sendReroll(false);
  };
  OfficersSchoolDialogList.prototype.onConfirmHardReroll = function (e = null) {
    this.popupMC.visible = false;
    y.CastleModel.officerSchoolData.sendReroll(true);
  };
  OfficersSchoolDialogList.prototype.onBuyProlong = function (e = null) {
    r.BasicModel.smartfoxClient.sendCommandVO(new g.C2SProlongTrainingProgramVO());
  };
  Object.defineProperty(OfficersSchoolDialogList.prototype, "isEffectActive", {
    get: function () {
      return !!this.activeEffect && this.activeEffect.remainingTimeInSeconds > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "activeEffect", {
    get: function () {
      return y.CastleModel.officerSchoolData.activeEffectVO;
    },
    enumerable: true,
    configurable: true
  });
  OfficersSchoolDialogList.prototype.showPopup = function () {
    this.popupMC.visible = true;
    this.textFieldManager.registerTextField(this.popupMC.mc_free.txt_free1, new c.LocalizedTextVO(s.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.availableFreeSoftRerolls, this.freeSoftRerolls]));
    this.popupMC.mc_free.visible = this.availableFreeSoftRerolls > 0;
    this.popupMC.mc_cost0.visible = this.availableFreeSoftRerolls <= 0;
    if (y.CastleModel.officerSchoolData.dailyCurrency >= 1) {
      var e = this.reSoftCostVO.getEventCostsAsCollectableVOByID(y.CastleModel.officerSchoolData.dailyCurrency);
      this.setCollItem(this.popupMC.mc_cost0.mc_icon, e);
      this.textFieldManager.registerTextField(this.popupMC.mc_cost0.txt_value, new u.LocalizedNumberVO(e.amount));
    }
    this.setCollItem(this.popupMC.mc_cost1.mc_icon, this.hardRerollCosts);
    this.textFieldManager.registerTextField(this.popupMC.mc_cost1.txt_value, new u.LocalizedNumberVO(this.hardRerollCosts.amount));
  };
  Object.defineProperty(OfficersSchoolDialogList.prototype, "freeSoftRerolls", {
    get: function () {
      return y.CastleModel.rerollCostData.getSoftCurrencyFreeRerollCountByType(w.CastleRerollCostData.REROLL_TYPE_OFFICERS_SCHOOL);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "rerollCountSoft", {
    get: function () {
      return y.CastleModel.officerSchoolData.rerollCountSoftCurrency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "rerollCountHard", {
    get: function () {
      return y.CastleModel.officerSchoolData.rerollCountHardCurrency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "availableFreeSoftRerolls", {
    get: function () {
      return this.freeSoftRerolls - this.rerollCountSoft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "reSoftCostVO", {
    get: function () {
      return y.CastleModel.rerollCostData.getRerollCostsByTypeAndCount(w.CastleRerollCostData.REROLL_TYPE_OFFICERS_SCHOOL, this.rerollCountSoft + 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "reHardCostVO", {
    get: function () {
      return y.CastleModel.rerollCostData.getRerollCostsByTypeAndCount(w.CastleRerollCostData.REROLL_TYPE_OFFICERS_SCHOOL, this.rerollCountHard + 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "softRerollCosts", {
    get: function () {
      var e = this.reSoftCostVO.getEventCostsAsCollectableVOByID(y.CastleModel.officerSchoolData.dailyCurrency);
      if (this.availableFreeSoftRerolls > 0) {
        e.amount = 0;
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolDialogList.prototype, "hardRerollCosts", {
    get: function () {
      return new V.CollectableItemC2VO(this.reHardCostVO.c2Cost);
    },
    enumerable: true,
    configurable: true
  });
  return OfficersSchoolDialogList;
}(v.CastleDialogSubLayer);
exports.OfficersSchoolDialogList = P;
var M = require("./12.js");
var R = require("./45.js");
var V = require("./128.js");
var x = require("./411.js");
var w = require("./649.js");
var B = require("./9.js");
var F = require("./78.js");
var N = require("./25.js");
var k = require("./63.js");
var U = require("./1592.js");
var G = require("./113.js");
var H = require("./1037.js");
var j = require("./3080.js");
var W = require("./36.js");
o.classImplementsInterfaces(P, "ICollectableRendererList", "ISublayer");