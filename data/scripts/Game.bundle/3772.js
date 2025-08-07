Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./49.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./266.js");
var m = require("./18.js");
var f = require("./51.js");
var O = require("./16.js");
var E = require("./107.js");
var y = require("./169.js");
var b = require("./53.js");
var D = require("./207.js");
var I = require("./13.js");
var T = require("./85.js");
var v = require("./4.js");
var S = require("./830.js");
var A = require("./36.js");
var L = require("./900.js");
var P = require("./8.js");
var M = require("./106.js");
var R = require("./282.js");
var V = require("./222.js");
var x = function (e) {
  function CastlePostAttackHorseDialog() {
    var t = e.call(this, CastlePostAttackHorseDialog.NAME) || this;
    t._currentAutoSkipCooldownType = 0;
    return t;
  }
  n.__extends(CastlePostAttackHorseDialog, e);
  CastlePostAttackHorseDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initAutoskip();
    this.initAdvisorInfo();
  };
  CastlePostAttackHorseDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    M.CharacterHelper.createCharacterBig(this.getCharID(), this.dialogDisp.mc_char, 102, 133);
    if (F.instanceOfClass(this.dialogProperties.attackInfoVO.targetArea, "ResourceIsleMapobjectVO")) {
      var i = v.CastleModel.eilandData.getIsleBlueprint(this.dialogProperties.attackInfoVO.targetArea.isleID);
      if (this.i_siegetime_txt_value) {
        this.i_siegetime_txt_value.textContentVO.stringValue = s.TimeStringHelper.getTimeToString(i.occupationTime, s.TimeStringHelper.ONE_TIME_FORMAT, v.CastleModel.languageData.bindFunction(v.CastleModel.languageData.getTextById));
      }
    }
    this.initChargeCosts();
    this.showAutoSkip();
    this.showAdvisorInfo();
    if (b.ABGHelper.isOnABGAndCollector && F.instanceOfClass(this.dialogProperties.attackInfoVO.targetArea, "CapitalMapobjectVO") && this.isActionTypeAnAttack) {
      var n = C.int(b.ABGHelper.abgEvent.settingVO.scoringSystemVO.allianceSteal);
      var o = C.int(v.CastleModel.collectEventData.lastGotAmountForTarget * (n / 100));
      w.CastleDialogHandler.getInstance().registerDialogs(B.CastleStandardOkDialog, new r.BasicStandardOkDialogProperties(g.Localize.text("dialog_beyondTheHorizon_gainInfluence_title"), g.Localize.text("lootedInfluence_colonValue", [o]) + "\n\n" + g.Localize.text("dialog_beyondTheHorizon_gainInfluence_desc", [n])));
    }
  };
  CastlePostAttackHorseDialog.prototype.initChargeCosts = function () {
    if (this.dialogDisp.mc_charge) {
      this.dialogDisp.mc_charge.visible = false;
      this.dialogDisp.mc_charge.visible;
    }
  };
  Object.defineProperty(CastlePostAttackHorseDialog.prototype, "isActionTypeAnAttack", {
    get: function () {
      switch (this.fightScreenInfoVO.targetActionType) {
        case m.ClientConstCastle.ACTION_TYPE_ATTACK:
        case m.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK:
        case m.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK:
        case m.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK:
        case m.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK:
        case m.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK:
        case m.ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastlePostAttackHorseDialog.prototype.getHelperTextID = function () {
    if (F.instanceOfClass(this.dialogProperties.attackInfoVO, "CastleSupportDefenceVO")) {
      return "help_extendedtravelPlanning_support";
    }
    var t = v.CastleModel.subscriptionData.isAutoSkipTarget(this.fightScreenInfoVO.targetArea);
    var i = v.CastleModel.subscriptionData.isAutoSkipActiveForArea(this.fightScreenInfoVO.targetArea);
    if (t && i) {
      return "help_travelPlanning_autoCooldownSkip";
    } else {
      return e.prototype.getHelperTextID.call(this);
    }
  };
  CastlePostAttackHorseDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this.supportTimePicker) {
      this.supportTimePicker.disp.removeEventListener(y.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerChange));
      this.supportTimePicker.itxt_pick.change.remove(this.bindFunction(this.onTypeAmount));
    }
  };
  CastlePostAttackHorseDialog.prototype.initTimeSelection = function () {
    if (!this.supportTimePicker) {
      this.supportTimePicker = new L.UnitPicker(this.dialogDisp.mc_supportTime.mc_picker);
      this.supportTimePicker.setNumItems(u.TravelConst.DEFENSE_SUPPORT_DURATION_HOURS_MAX);
      this.supportTimePicker.itxt_pick.restrict = "0-9";
      this.supportTimePicker.itxt_pick.maxChars = 2;
      this.supportTimePicker.itxt_pick.multiline = false;
    }
    this.supportTimePicker.disp.addEventListener(y.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerChange));
    this.supportTimePicker.itxt_pick.change.add(this.bindFunction(this.onTypeAmount));
    this.itxt_c2Cost_support = this.textFieldManager.registerTextField(this.dialogDisp.mc_supportTime.mc_c2Cost.txt_c2, new T.CastleLocalizedNumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_supportTime.txt_supportTime, new h.LocalizedTextVO("generic_Supporttime")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_supportTime.txt_hours, new h.LocalizedTextVO("generic_hours"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_supportTime.mc_c2Cost.txt_info, new h.LocalizedTextVO("dialog_travelPlanning_buyMoreTime_C2"));
    this.dialogDisp.mc_supportTime.visible = this.fightScreenInfoVO.targetActionType == m.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE && this.fightScreenInfoVO.targetArea.areaType != d.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER;
  };
  CastlePostAttackHorseDialog.prototype.onPickerChange = function (e) {
    this.updateC2Costs();
  };
  CastlePostAttackHorseDialog.prototype.getWaitTime = function () {
    return this.supportTimePicker.selectedValue + 1;
  };
  CastlePostAttackHorseDialog.prototype.onTypeAmount = function () {
    this.supportTimePicker.setValue(parseInt(this.supportTimePicker.itxt_pick.text) || 1);
  };
  CastlePostAttackHorseDialog.prototype.updateC2Costs = function () {
    e.prototype.updateC2Costs.call(this);
    var t = this.getC2CostSupport();
    var i = v.CastleModel.currencyData.c2Amount >= t;
    this.dialogDisp.mc_supportTime.mc_c2Cost.visible = t > 0;
    this.dialogDisp.mc_supportTime.deco_noC2.visible = t <= 0;
    this.itxt_c2Cost_support.textContentVO.numberValue = t;
    this.itxt_c2Cost_support.color = i ? O.ClientConstColor.FONT_DEFAULT_COLOR : O.ClientConstColor.FONT_INSUFFICIENT_COLOR;
  };
  CastlePostAttackHorseDialog.prototype.getTotalCostsC2 = function () {
    var t = e.prototype.getTotalCostsC2.call(this);
    return t += this.getC2CostSupport();
  };
  CastlePostAttackHorseDialog.prototype.getC2CostSupport = function () {
    var e = 0;
    if (this.dialogDisp.mc_supportTime.visible) {
      var t = this.fightScreenInfoVO.targetArea.isUnderConquerControl;
      var i = F.instanceOfClass(this.fightScreenInfoVO.targetArea, "CapitalMapobjectVO");
      var n = F.instanceOfClass(this.fightScreenInfoVO.targetArea, "MetropolMapobjectVO");
      e = u.TravelConst.getSupportDurationCostC2(this.supportTimePicker.selectedValue + 1, t, i, n);
    }
    return e;
  };
  CastlePostAttackHorseDialog.prototype.initAutoskip = function () {
    this._autoSkipCooldownTypesByAreaID = new Map();
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.txt_preview, new h.LocalizedTextVO("dialog_travelPlanning_autoCooldownSkip_preview_unlock_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.mc_tooltip.txt_title, new p.TextVO(I.TextHelper.toUpperCaseLocaSafeTextId("dialog_travelPlanning_autoCooldownSkip_preview_help_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.mc_tooltip.txt_description, new h.LocalizedTextVO("dialog_travelPlanning_autoCooldownSkip_preview_help_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.btn_buy.txt_label, new p.TextVO(I.TextHelper.toUpperCaseLocaSafeTextId("toTheShop")));
    this.dialogDisp.mc_autoskip_preview.icon_info.mouseChildren = false;
    this.dialogDisp.mc_autoskip_preview.mc_tooltip.visible = false;
    P.ButtonHelper.initButtons([this.dialogDisp.mc_autoskip_preview.btn_buy], A.ClickFeedbackButton);
    _.registerUIComponentToCXF(this.dialogDisp.mc_autoskip_preview.btn_buy, "btn_webshop", {
      page: "subscriptions",
      route: "/offer/3",
      sourceId: E.CXFSourceTrackingConstants.CXF_SOURCE_TRAVEL_PLANNING_DIALOG_AUTOSKIP_PREVIEW
    });
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_options.txt_autoskip_off, new h.LocalizedTextVO("dialog_travelPlanning_autoCooldownSkip_active_radioButton_noSkip"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_options.txt_autoskip_minuteskip, new h.LocalizedTextVO("dialog_travelPlanning_autoCooldownSkip_active_radioButton_timeSkip"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_options.txt_autoskip_c2, new h.LocalizedTextVO(""));
    P.ButtonHelper.initButtons([this.dialogDisp.mc_autoskip_options.radio_autoskip_off, this.dialogDisp.mc_autoskip_options.radio_autoskip_minuteskip, this.dialogDisp.mc_autoskip_options.radio_autoskip_c2], l.TwoStateButton);
    this.dialogDisp.mc_autoskip_options.radio_autoskip_off.autoSkipCooldownType = c.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF;
    this.dialogDisp.mc_autoskip_options.radio_autoskip_minuteskip.autoSkipCooldownType = c.AutoSkipCooldownConst.AUTO_SKIP_TYPE_MINUTE_SKIP;
    this.dialogDisp.mc_autoskip_options.radio_autoskip_c2.autoSkipCooldownType = c.AutoSkipCooldownConst.AUTO_SKIP_TYPE_C2;
    this.dialogDisp.mc_autoskip_options.txt_autoskip_c2.visible = false;
    this.dialogDisp.mc_autoskip_options.radio_autoskip_c2.visible = false;
  };
  CastlePostAttackHorseDialog.prototype.showAutoSkip = function () {
    var e = this.dialogProperties.attackInfoVO.advisorAttacks > 0;
    var t = v.CastleModel.subscriptionData.isAutoSkipTarget(this.fightScreenInfoVO.targetArea);
    var i = v.CastleModel.subscriptionData.isAutoSkipActiveForArea(this.fightScreenInfoVO.targetArea);
    this.dialogDisp.mc_autoskip_preview.visible = t && !i && !e;
    this.dialogDisp.mc_autoskip_options.visible = t && i && !e;
    if (this._autoSkipCooldownTypesByAreaID.has(this.fightScreenInfoVO.targetArea.areaType) && !e) {
      this.selectAutoskipOption(this._autoSkipCooldownTypesByAreaID.get(this.fightScreenInfoVO.targetArea.areaType));
    } else {
      this.selectAutoskipOption(c.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF);
    }
  };
  CastlePostAttackHorseDialog.prototype.initAdvisorInfo = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_advisor.txt_title, new h.LocalizedTextVO("attack_advisor"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_advisor.txt_description, new h.LocalizedTextVO("advisor_attackInfo"));
  };
  CastlePostAttackHorseDialog.prototype.showAdvisorInfo = function () {
    this.dialogDisp.mc_advisor.visible = this.dialogProperties.attackInfoVO.advisorAttacks > 0;
  };
  CastlePostAttackHorseDialog.prototype.selectAutoskipOption = function (e) {
    [this.dialogDisp.mc_autoskip_options.radio_autoskip_off, this.dialogDisp.mc_autoskip_options.radio_autoskip_minuteskip, this.dialogDisp.mc_autoskip_options.radio_autoskip_c2].forEach(function (t) {
      if (e == t.autoSkipCooldownType) {
        P.ButtonHelper.getBasicButton(t).selected();
      } else {
        P.ButtonHelper.getBasicButton(t).deselected();
      }
    });
    this._currentAutoSkipCooldownType = e;
  };
  CastlePostAttackHorseDialog.prototype.saveAutoskipSelection = function () {
    if (this.dialogProperties.attackInfoVO instanceof S.CastleAttackInfoVO) {
      this.dialogProperties.attackInfoVO.autoSkipCooldownType = this._currentAutoSkipCooldownType;
      this._autoSkipCooldownTypesByAreaID.set(this.fightScreenInfoVO.targetArea.areaType, this._currentAutoSkipCooldownType);
    }
  };
  CastlePostAttackHorseDialog.prototype.sendAttack = function (t, i) {
    this.saveAutoskipSelection();
    e.prototype.sendAttack.call(this, t, i);
  };
  CastlePostAttackHorseDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    switch (t.target) {
      case this.dialogDisp.mc_autoskip_preview.icon_info:
        this.dialogDisp.mc_autoskip_preview.parent.addChild(this.dialogDisp.mc_autoskip_preview);
        this.dialogDisp.mc_autoskip_preview.mc_tooltip.visible = true;
    }
  };
  CastlePostAttackHorseDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    switch (t.target) {
      case this.dialogDisp.mc_autoskip_preview.icon_info:
        this.dialogDisp.mc_autoskip_preview.mc_tooltip.visible = false;
    }
  };
  CastlePostAttackHorseDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.mc_autoskip_options.radio_autoskip_off:
      case this.dialogDisp.mc_autoskip_options.radio_autoskip_minuteskip:
      case this.dialogDisp.mc_autoskip_options.radio_autoskip_c2:
        this.selectAutoskipOption(t.target.autoSkipCooldownType);
    }
  };
  CastlePostAttackHorseDialog.prototype.startTravelAction = function () {
    if (this._currentAutoSkipCooldownType > c.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF && v.CastleModel.subscriptionData.isPackageActive(V.SubscriptionPackageEnum.PREMIUM) && this.getTotalTravelTime() > v.CastleModel.subscriptionData.getActivePackage(V.SubscriptionPackageEnum.PREMIUM).getRemainingSeconds()) {
      w.CastleDialogHandler.getInstance().registerDefaultDialogs(R.ModernYesNoDialog, new o.BasicStandardYesNoDialogProperties("generic_alert_watchout", "dialog_travelPlanning_autoCooldownSkip_warning_desc", this.bindFunction(this.startAttack)));
    } else {
      this.startAttack();
    }
  };
  CastlePostAttackHorseDialog.prototype.initCleanState = function () {
    e.prototype.initCleanState.call(this);
    this.dialogDisp.mc_autoskip_preview.parent.addChild(this.dialogDisp.mc_autoskip_preview);
  };
  CastlePostAttackHorseDialog.prototype.getCharID = function () {
    var e = D.AdvisorAttackHelper.getAdvisorTypeByAreaType(this.dialogProperties.attackInfoVO.targetArea.areaType);
    if (this.dialogProperties.attackInfoVO.advisorAttacks > 0) {
      return D.AdvisorAttackHelper.getCharacterByAdvisorType(e);
    } else {
      return f.ClientConstCharacter.CHAR_ID_GENERAL;
    }
  };
  CastlePostAttackHorseDialog.NAME = "CastlePostActionHorse_APR25";
  return CastlePostAttackHorseDialog;
}(require("./1102.js").CastlePostAttackDialog);
exports.CastlePostAttackHorseDialog = x;
var w = require("./9.js");
var B = require("./38.js");
a.classImplementsInterfaces(x, "ICollectableRendererList");
var F = require("./1.js");