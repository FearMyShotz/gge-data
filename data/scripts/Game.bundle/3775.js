Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./3.js");
var _ = require("./3.js");
var m = require("./6.js");
var f = require("./23.js");
var O = require("./23.js");
var E = require("./18.js");
var y = require("./51.js");
var b = require("./16.js");
var D = require("./28.js");
var I = require("./4.js");
var T = require("./35.js");
var v = require("./27.js");
var S = require("./8.js");
var A = require("./107.js");
var L = require("./11.js");
var P = require("./135.js");
var M = function (e) {
  function CastlePostAttackTreasureDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePostAttackTreasureDialog.NAME) || this;
  }
  n.__extends(CastlePostAttackTreasureDialog, e);
  CastlePostAttackTreasureDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new C.LocalizedTextVO("dialog_postAttack_title")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_toolTip.txt_name, new C.LocalizedTextVO("dialog_postAttack_instantTravel"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_arrivel, new C.LocalizedTextVO("dialog_postAttack_arrival"));
    this.dialogDisp.mc_travelcost.toolTipText = "costs";
    this.dialogDisp.mc_traveltime.toolTipText = "travelTime";
    this.dialogDisp.mc_wait.icon.toolTipText = "dialog_postAttack_supportTime";
    this.dialogDisp.mc_estimatedHonor.toolTipText = "dialog_postAttack_estimatedHonor";
    this.dialogDisp.mc_siegeTime.toolTipText = "dialog_postAttack_siegeTime";
    this.i_travelcost_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_travelcost.txt_value, new _.TextVO(""));
    this.i_txt_cost0 = this.textFieldManager.registerTextField(this.dialogDisp.mc_toolTip.txt_cost0.txt_cost, new g.LocalizedNumberVO(0));
    this.i_siegetime_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_siegeTime.txt_value, new _.TextVO(""));
    this.itxt_date = this.textFieldManager.registerTextField(this.dialogDisp.txt_date, new _.TextVO(""));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new _.TextVO(""));
    this.i_traveltime_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_traveltime.txt_value, new _.TextVO(""));
    this.i_honor_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_estimatedHonor.txt_value, new _.TextVO(""));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_back, this.dialogDisp.btn_travelboost]);
  };
  CastlePostAttackTreasureDialog.prototype.applyPropertiesLoaded = function (e = null) {
    if (this.dialogDisp.mc_charPlaceHolder) {
      A.CharacterHelper.createCharacterBig(y.ClientConstCharacter.CHAR_ID_GENERAL, this.dialogDisp.mc_charPlaceHolder, 144, 186);
    }
    this.setArivalDateAndTime(this.fightScreenInfoVO.getTravelTime(this.dialogProperties.attackInfoVO.targetArea, this.dialogProperties.selectedLord));
    this.i_travelcost_txt_value.textContentVO.stringValue = String(this.fightScreenInfoVO.getTravelCost(this.dialogProperties.selectedLord));
    this.i_txt_cost0.textContentVO.numberValue = I.CastleModel.costsData.getFinalCostsC2(d.TravelConst.getTravelBoostCostC2(this.fightScreenInfoVO.distance));
    this.i_siegetime_txt_value.textContentVO.stringValue = s.TimeStringHelper.getTimeToString(u.OutpostConst.SIEGE_TIME, s.TimeStringHelper.ONE_TIME_FORMAT, h.Localize.text);
    this.dialogDisp.mc_toolTip.visible = false;
    this.dialogDisp.mc_toolTip.txt_cost0.mc_icon.gotoAndStop(5);
    this.dialogDisp.mc_wait.visible = false;
    this.dialogDisp.mc_siegeTime.visible = this.fightScreenInfoVO.isConquerAttack && !this.fightScreenInfoVO.targetOwner.isOutpostOwner;
    this.dialogDisp.mc_estimatedHonor.visible = (this.fightScreenInfoVO.targetActionType == E.ClientConstCastle.ACTION_TYPE_ATTACK || this.fightScreenInfoVO.targetActionType == E.ClientConstCastle.ACTION_TYPE_CONQUERATTACK) && this.fightScreenInfoVO.targetActionType != E.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE && this.fightScreenInfoVO.targetActionType != E.ClientConstCastle.ACTION_TYPE_SENDTROUPS;
    if (l.instanceOfClass(this.fightScreenInfoVO, "CastleTreasureHuntFightscreenVO")) {
      this.dialogDisp.mc_estimatedHonor.visible = false;
    }
    if (this.dialogDisp.mc_estimatedHonor.visible) {
      var t = m.int(c.CombatConst.getHonorChange(I.CastleModel.userData.userHonor, this.fightScreenInfoVO.targetOwner.honor, I.CastleModel.userData.userLevel, this.fightScreenInfoVO.targetOwnerLevel, true) * (1 + I.CastleModel.researchData.getResearchEffectValue(T.EffectTypeEnum.EFFECT_TYPE_HONOR_BONUS).strength / 100));
      this.i_honor_txt_value.textContentVO.stringValue = String(t);
      this.i_honor_txt_value.color = t < 0 ? b.ClientConstColor.FONT_INSUFFICIENT_COLOR : b.ClientConstColor.FONT_DEFAULT_COLOR;
      if (t >= 0) {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_estimatedHonor.txt_value, new C.LocalizedTextVO(a.GenericTextIds.VALUE_NOMINAL_ADD, [this.dialogDisp.mc_estimatedHonor.txt_value.text]));
      }
    }
    this.dialogDisp.btn_travelboost.visible = true;
  };
  CastlePostAttackTreasureDialog.prototype.setArivalDateAndTime = function (e) {
    var t = new Date();
    t.setTime(t.getTime() + e * D.ClientConstTime.SEC_2_MILLISEC);
    this.itxt_date.textContentVO.stringValue = v.CastleTimeStringHelper.getDateStringFromDate(t);
    this.itxt_time.textContentVO.stringValue = h.Localize.datetime(t, p.DateTimeStyle.NONE, p.DateTimeStyle.SHORT);
    this.i_traveltime_txt_value.textContentVO.stringValue = s.TimeStringHelper.getShortTimeStringBySeconds(e);
  };
  CastlePostAttackTreasureDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (S.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_back:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.sendMovement(2, 0);
          this.callHideFunction();
          this.hide();
          break;
        case this.dialogDisp.btn_travelboost:
          if (I.CastleModel.currencyData.c2Amount < I.CastleModel.costsData.getFinalCostsC2(d.TravelConst.getTravelBoostCostC2(this.fightScreenInfoVO.distance))) {
            V.CastleDialogHandler.getInstance().registerDefaultDialogs(x.CastleNoMoneyC2Dialog, new P.CastleNoMoneyC2DialogProperties());
          } else {
            this.sendMovement(1, 0);
            this.callHideFunction();
            this.hide();
          }
      }
    }
  };
  CastlePostAttackTreasureDialog.prototype.sendMovement = function (e, t) {
    if (l.instanceOfClass(this.fightScreenInfoVO, "CastleTreasureHuntFightscreenVO")) {
      this.sendTreasureHuntAttack(e, t);
    } else if (l.instanceOfClass(this.fightScreenInfoVO, "CastleAttackInfoVO")) {
      this.sendAttack(e, t);
    } else if (l.instanceOfClass(this.fightScreenInfoVO, "CastleSupportDefenceVO")) {
      this.sendSupport(e, t);
    } else if (l.instanceOfClass(this.fightScreenInfoVO, "CastleTroopSupportVO")) {
      this.sendTroops(e, t);
    }
  };
  CastlePostAttackTreasureDialog.prototype.sendTreasureHuntAttack = function (e, t) {
    I.CastleModel.treasureMapData.sendTreasureHuntAttack(this.fightScreenInfoVO, e, t, this.dialogProperties.selectedLord, false);
  };
  CastlePostAttackTreasureDialog.prototype.sendAttack = function (e, t) {
    I.CastleModel.attackData.sendAttack(this.fightScreenInfoVO, e, t, false, 0, this.dialogProperties.selectedLord, false, 0);
  };
  CastlePostAttackTreasureDialog.prototype.sendSupport = function (e, t) {
    I.CastleModel.attackData.sendSupport(this.fightScreenInfoVO, e, t, this.dialogProperties.selectedLord, false, 0);
  };
  CastlePostAttackTreasureDialog.prototype.sendTroops = function (e, t) {
    R.CastleTroopSupportData.sendTroops(this.fightScreenInfoVO, e, t, this.dialogProperties.selectedLord, this.fightScreenInfoVO.targetArea.kingdomID, false, 0);
  };
  CastlePostAttackTreasureDialog.prototype.callHideFunction = function () {
    if (this.dialogProperties.hideFunction != null) {
      this.dialogProperties.hideFunction();
    }
  };
  CastlePostAttackTreasureDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.dialogDisp.mc_toolTip.visible = false;
    this.setArivalDateAndTime(this.fightScreenInfoVO.getTravelTime(this.dialogProperties.attackInfoVO.targetArea, this.dialogProperties.selectedLord));
    this.i_traveltime_txt_value.color = b.ClientConstColor.FONT_DEFAULT_COLOR;
  };
  CastlePostAttackTreasureDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.btn_travelboost) {
      this.dialogDisp.setChildIndex(this.dialogDisp.mc_toolTip, this.dialogDisp.numChildren - 1);
      this.dialogDisp.mc_toolTip.visible = true;
      O.TweenMax.fromTo(this.dialogDisp.mc_toolTip, 0.2, {
        alpha: 0
      }, {
        alpha: 1,
        ease: f.Linear.easeIn
      });
      this.i_traveltime_txt_value.color = b.ClientConstColor.GENERIC_DARK_GREEN;
      this.setArivalDateAndTime(this.fightScreenInfoVO.getBoostedTravelTime(this.dialogProperties.attackInfoVO.targetArea, 0, this.dialogProperties.selectedLord));
    }
  };
  Object.defineProperty(CastlePostAttackTreasureDialog.prototype, "fightScreenInfoVO", {
    get: function () {
      return this.dialogProperties.attackInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostAttackTreasureDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePostAttackTreasureDialog.__initialize_static_members = function () {
    CastlePostAttackTreasureDialog.NAME = "CastlePostAttackTreasure";
  };
  return CastlePostAttackTreasureDialog;
}(L.CastleExternalDialog);
exports.CastlePostAttackTreasureDialog = M;
var R = require("./1102.js");
var V = require("./9.js");
var x = require("./138.js");
r.classImplementsInterfaces(M, "ICollectableRendererList");
M.__initialize_static_members();