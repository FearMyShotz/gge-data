Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./23.js");
var g = require("./23.js");
var C = require("./16.js");
var _ = require("./58.js");
var m = require("./1086.js");
var f = require("./21.js");
var O = require("./32.js");
var E = require("./71.js");
var y = require("./44.js");
var b = require("./4.js");
var D = require("./27.js");
var I = require("./42.js");
var T = require("./8.js");
var v = require("./972.js");
var S = require("./974.js");
var A = require("./469.js");
var L = function (e) {
  function CastleRepairTipDialog() {
    return e.call(this, CastleRepairTipDialog.NAME) || this;
  }
  n.__extends(CastleRepairTipDialog, e);
  Object.defineProperty(CastleRepairTipDialog.prototype, "tipPicClassName", {
    get: function () {
      return "RepairTip";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(A.CastleBasicTipDialog.prototype, "tipPicClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleRepairTipDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_repairAll, this.dialogDisp.btn_opengate, this.dialogDisp.btn_peace]);
    this.dialogDisp.btn_opengate.toolTipText = "dialog_startOpenGate_title";
    this.dialogDisp.btn_peace.toolTipText = "dialog_startPeaceMode_title";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO("dialog_tip_title")).verticalAlign = I.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new c.LocalizedTextVO("tip_repair")).autoFitToBounds = true;
    this.itxt_repair = this.textFieldManager.registerTextField(this.dialogDisp.mc_premiumToolTip.txt_name, new c.LocalizedTextVO("repairAll"));
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.mc_premiumToolTip.txt_cost0.txt_cost, new u.LocalizedNumberVO(0));
  };
  CastleRepairTipDialog.prototype.applyPropertiesLoaded = function (e = null) {
    if (b.CastleModel.areaData.activeArea) {
      this.dialogDisp.btn_peace.visible = this.dialogDisp.btn_opengate.visible = b.CastleModel.kingdomData.activeKingdomID != r.FactionConst.KINGDOM_ID;
      this.dialogDisp.mc_premiumToolTip.visible = false;
      this.dialogDisp.mc_premiumToolTip.txt_cost0.mc_icon.gotoAndStop(5);
      this.onUpdateCastleData();
      this.controller.addEventListener(O.CastleUserDataEvent.PEACE_PROTECTION, this.bindFunction(this.onPeaceModeUpdate));
      this.controller.addEventListener(O.CastleUserDataEvent.PEACETIME_FINISHED, this.bindFunction(this.onPeaceModeUpdate));
      b.CastleModel.timerData.addEventListener(f.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
      this.onPeaceModeUpdate();
      var t = !b.CastleModel.areaData.activeArea.isCapital && !b.CastleModel.userData.noobProtected && b.CastleModel.userData.userLevel >= _.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT;
      if (b.CastleModel.areaData.activeArea.isCapital) {
        T.ButtonHelper.enableButton(this.dialogDisp.btn_opengate, false);
        this.dialogDisp.btn_opengate.toolTipText = "not_possible_in_capital";
      } else if (b.CastleModel.areaData.activeArea.isMetropol) {
        T.ButtonHelper.enableButton(this.dialogDisp.btn_opengate, false);
        this.dialogDisp.btn_opengate.toolTipText = y.SpecialServerHelper.checkTextIDForSkinText("not_possible_in_metropol");
      } else if (t) {
        T.ButtonHelper.enableButton(this.dialogDisp.btn_opengate, true);
      } else {
        T.ButtonHelper.enableButton(this.dialogDisp.btn_opengate, false);
        this.dialogDisp.btn_opengate.toolTipText = "dialog_management_openGateNotInNoobProtection";
      }
      this.controller.addEventListener(E.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onUpdateCastleData));
      if (a.currentBrowserInfo.isMobile) {
        this.dialogDisp.mc_premiumToolTip.visible = true;
      }
    }
  };
  CastleRepairTipDialog.prototype.showLoaded = function (t = null) {
    if (b.CastleModel.areaData.activeArea) {
      e.prototype.showLoaded.call(this, t);
    } else {
      this.hide();
    }
  };
  CastleRepairTipDialog.prototype.hideLoaded = function (t = null) {
    this.controller.removeEventListener(E.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onUpdateCastleData));
    this.controller.removeEventListener(O.CastleUserDataEvent.PEACE_PROTECTION, this.bindFunction(this.onPeaceModeUpdate));
    this.controller.removeEventListener(O.CastleUserDataEvent.PEACETIME_FINISHED, this.bindFunction(this.onPeaceModeUpdate));
    b.CastleModel.timerData.removeEventListener(f.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.controller.removeEventListener(O.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
    e.prototype.hideLoaded.call(this, t);
  };
  CastleRepairTipDialog.prototype.onUpdateCastleData = function (e = null) {
    this.onUserCurrencyChange(null);
  };
  CastleRepairTipDialog.prototype.onUserCurrencyChange = function (e) {
    var t = b.CastleModel.boostData.premiumAccountVO.isActive ? l.ConstructionConst.PREMIUM_FACTOR_REPAIR_ALL : 0;
    var i = 0;
    if (b.CastleModel.areaData.activeArea) {
      i = p.int(b.CastleModel.costsData.getFinalCostsC2(b.CastleModel.areaData.activeArea.getTotalRepairCostC2(), false, t));
    }
    this.itxt_repair.textContentVO.textId = i <= 0 ? "repairAll_lowDamage" : "repairAll";
    if (b.CastleModel.currencyData.c2Amount < i) {
      this.itxt_cost.color = C.ClientConstColor.GENERIC_RED;
      this.controller.addEventListener(O.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
    } else {
      this.controller.removeEventListener(O.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
      this.itxt_cost.color = C.ClientConstColor.GENERIC_BLACK;
    }
    this.itxt_cost.textContentVO.numberValue = i;
  };
  CastleRepairTipDialog.prototype.onPeaceModeUpdate = function (e = null) {
    this.dialogDisp.btn_peace.visible = b.CastleModel.kingdomData.activeKingdomID != r.FactionConst.KINGDOM_ID;
    T.ButtonHelper.enableButton(this.dialogDisp.btn_peace, b.CastleModel.userData.peaceModeStatus == P.CastleUserData.PEACEMODE_STATUS_OFF && !b.CastleModel.userData.noobProtected && b.CastleModel.userData.userLevel >= _.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT);
    switch (b.CastleModel.userData.peaceModeStatus) {
      case P.CastleUserData.PEACEMODE_STATUS_PRETIME:
        this.dialogDisp.btn_peace.toolTipText = {
          t: "dialog_management_startIn_tt",
          p: [D.CastleTimeStringHelper.getCantAttackTimeString(b.CastleModel.userData.getRemainingPeaceStatusTime())]
        };
        break;
      case P.CastleUserData.PEACEMODE_STATUS_PEACETIME:
        var t = p.int(b.CastleModel.userData.getRemainingPeaceStatusTime() + s.PlayerConst.PEACE_MODE_COOLDOWN);
        this.dialogDisp.btn_peace.toolTipText = {
          t: "dialog_management_reStartableIn_tt",
          p: [o.TimeStringHelper.getCommaTimeStringFromSeconds(t, d.Localize.text)]
        };
        break;
      case P.CastleUserData.PEACEMODE_STATUS_POSTTIME:
        this.dialogDisp.btn_peace.toolTipText = {
          t: "dialog_management_reStartableIn_tt",
          p: [D.CastleTimeStringHelper.getCantAttackTimeString(b.CastleModel.userData.getRemainingPeaceStatusTime())]
        };
        break;
      case P.CastleUserData.PEACEMODE_STATUS_OFF:
        if (b.CastleModel.userData.noobProtected || b.CastleModel.userData.userLevel < _.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT) {
          this.dialogDisp.btn_peace.toolTipText = "dialog_management_openGateNotInNoobProtection";
        } else {
          this.dialogDisp.btn_peace.toolTipText = "dialog_startPeaceMode_title";
        }
    }
  };
  CastleRepairTipDialog.prototype.onTimerUpdate = function (e = null) {
    this.onPeaceModeUpdate();
  };
  CastleRepairTipDialog.prototype.onClick = function (e) {
    if (T.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_repairAll:
          this.hide();
          b.CastleModel.smartfoxClient.sendCommandVO(new m.C2SIsoRepairAllVO());
          break;
        case this.dialogDisp.btn_opengate:
          this.hide();
          M.CastleExternalDialog.dialogHandler.registerDefaultDialogs(R.CastleStartOpenGateDialog, new v.CastleStartOpenGateDialogProperties(b.CastleModel.areaData.activeArea.areaId, b.CastleModel.areaData.activeAreaInfo.kingdomID, false));
          break;
        case this.dialogDisp.btn_peace:
          if (b.CastleModel.userData.peaceModeStatus == P.CastleUserData.PEACEMODE_STATUS_OFF) {
            M.CastleExternalDialog.dialogHandler.registerDefaultDialogs(V.CastleStartPeaceModeDialog, new S.CastleStartPeaceModeDialogProperties());
            this.hide();
          }
      }
    }
  };
  CastleRepairTipDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.dialogDisp.mc_premiumToolTip.visible = false;
  };
  CastleRepairTipDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.btn_repairAll) {
      this.dialogDisp.mc_premiumToolTip.visible = true;
      h.TweenMax.fromTo(this.dialogDisp.mc_premiumToolTip, 0.2, {
        alpha: 0
      }, {
        alpha: 1,
        ease: g.Linear.easeIn
      });
    }
  };
  CastleRepairTipDialog.NAME = "CastleRepairTipEx";
  return CastleRepairTipDialog;
}(A.CastleBasicTipDialog);
exports.CastleRepairTipDialog = L;
var P = require("./284.js");
var M = require("./11.js");
var R = require("./973.js");
var V = require("./975.js");
a.classImplementsInterfaces(L, "ICollectableRendererList");