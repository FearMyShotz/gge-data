Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./18.js");
var _ = require("./16.js");
var m = require("./58.js");
var f = require("./39.js");
var O = require("./146.js");
var E = require("./32.js");
var y = require("./161.js");
var b = require("./528.js");
var D = require("./85.js");
var I = require("./4.js");
var T = require("./383.js");
var v = require("./4054.js");
var S = require("./371.js");
var A = require("./1720.js");
var L = require("./4055.js");
var P = require("./954.js");
var M = require("./608.js");
var R = require("./8.js");
var V = require("./41.js");
var x = require("./131.js");
var w = require("./4056.js");
var B = require("./4058.js");
var F = require("./4059.js");
var N = createjs.Container;
var k = function (e) {
  function CastleUserStatePanel() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new N()) || this).createPanelDisp();
    t.i_txt_userLevel = t.textFieldManager.registerTextField(t.userStatePanel.mc_normalBg.mc_level_bg.txt_userLevel, new h.TextVO(""));
    t.i_txt_userLegendLevel = t.textFieldManager.registerTextField(t.userStatePanel.mc_paragonBg.mc_button.txt_legendLevel, new h.TextVO(""));
    t.i_txt_userMight = t.textFieldManager.registerTextField(t.userStatePanel.txt_userMight, new d.LocalizedNumberVO(0));
    t.i_xpBar_txt_userXP = t.textFieldManager.registerTextField(t.userStatePanel.mc_xpBar.txt_userXP, new p.LocalizedTextVO(a.GenericTextIds.VALUE_XP, [new D.CastleLocalizedNumberVO(I.CastleModel.userData.userXP, {
      compactThreshold: f.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 0
    })]));
    t.i_txt_userCurrency1 = t.textFieldManager.registerTextField(t.userStatePanel.mc_currency1.txt_userCurrency1, new D.CastleLocalizedNumberVO(0, {
      compactThreshold: f.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    t.i_txt_userCurrency2 = t.textFieldManager.registerTextField(t.userStatePanel.mc_currency2.txt_userCurrency2, new D.CastleLocalizedNumberVO(0, {
      compactThreshold: f.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    return t;
  }
  n.__extends(CastleUserStatePanel, e);
  CastleUserStatePanel.prototype.createPanelDisp = function () {
    this.panelDisp = new Library.CastleInterfaceElements.CastleUserState_X();
    this.gloryHUDDisp = this.panelDisp.mc_gloryHUD;
    this.disp.addChild(this.gloryHUDDisp);
    this.disp.addChild(this.panelDisp);
    return this.disp;
  };
  CastleUserStatePanel.prototype.init = function () {
    e.prototype.init.call(this);
    R.ButtonHelper.initButton(this.userStatePanel.mc_subscription.btn_subscription, -1, Q.ClickFeedbackButton);
    this.addGoldComp = new G.ButtonAddGoldComponent(this.userStatePanel.btn_payment);
    this.buyLevelComp = new H.ButtonBuyLevelComponent(this.userStatePanel.btn_buyLevel);
    this.userStatePanel.btn_buyLevel.toolTipText = "addXp_tt";
    this.userStatePanel.btn_buyLevel.mouseOverScale = 1.2;
    this.i_txt_username = this.textFieldManager.registerTextField(this.userStatePanel.txt_userName, new h.TextVO(I.CastleModel.userData.userName));
    this.i_txt_username.autoFitToBounds = true;
    this.userStatePanel.mc_currency1.toolTipText = f.ClientConstTextIds.C1;
    this.userStatePanel.mc_currency2.toolTipText = f.ClientConstTextIds.C2;
    this.userStatePanel.mc_xpBar.toolTipText = {
      t: "panel_state_xpToLevelUp",
      p: [I.CastleModel.userData.userXPtoNextLevel]
    };
    this.userStatePanel.txt_userMight.mouseEnabled = false;
    this.userStatePanel.mc_mightBar.mouseChildren = false;
    this.userStatePanel.mc_crest_normal.mouseChildren = false;
    this.userStatePanel.mc_crest_paragon.mouseChildren = false;
    this.userStatePanel.mc_paragonBg.mc_button.mouseChildren = false;
    this.userStatePanel.mc_normalBg.mc_level_bg.mouseChildren = false;
    V.CastleMovieClipHelper.createHitArea(this.userStatePanel.mc_xpBar);
    this.createGloryHUDComponent();
    this.onChangeXP();
    this.onChangeCurrency();
    this.updateCrest();
    this.controller.addEventListener(y.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangeXP));
    this.controller.addEventListener(y.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.updateCrest));
    this.controller.addEventListener(E.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeCurrency));
    this.controller.addEventListener(E.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.updateCrest));
    this.controller.addEventListener(E.CastleUserDataEvent.CHANGE_USER_MIGHT, this.bindFunction(this.onChangeMight));
    this.controller.addEventListener(E.CastleUserDataEvent.CHANGE_USER_NAME, this.bindFunction(this.onChangeName));
    this.controller.addEventListener(T.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    if (I.CastleModel.legendSkillData.hasLegendTemple()) {
      this.onHasLegendTemple(null);
    } else {
      this.controller.addEventListener(b.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onHasLegendTemple));
    }
    if (l.MobileHelper.isScreenTooSmall()) {
      this.disp.scaleX = this.disp.scaleY = 0.8;
    }
  };
  CastleUserStatePanel.prototype.onChangeName = function (e = null) {
    this.i_txt_username.textContentVO.stringValue = I.CastleModel.userData.userName;
    if (e) {
      this.updateCache();
    }
  };
  CastleUserStatePanel.prototype.createGloryHUDComponent = function () {
    this._gloryHUD = new v.ABundleMVC();
    var e = new B.GloryHUDModel();
    var t = new F.GloryHUDView(this.gloryHUDDisp);
    var i = new w.GloryHUDAnimationController();
    this._gloryHUD.setModel(e);
    this._gloryHUD.addView(t);
    this._gloryHUD.setController(i);
    this.gloryHUDDisp.mouseChildren = false;
  };
  CastleUserStatePanel.prototype.updateSubscription = function () {
    this.userStatePanel.mc_subscription.visible = false;
    var e = I.CastleModel.userData.userLevel >= m.ClientConstLevelRestrictions.MIN_LEVEL_SUBSCRIPTION;
    var t = this.userStatePanel.mc_subscription.btn_subscription;
    R.ButtonHelper.enableButton(t, e);
    t.toolTipText = e ? "dialog_subscriptions_name_generic" : "dialog_accountInfo_notAvailable_tooltip";
    this.userStatePanel.mc_subscription.mc_background.gotoAndStop(I.CastleModel.subscriptionData.isAnyPackageActive() ? 2 : 1);
    this.updateCache();
  };
  CastleUserStatePanel.prototype.onHasLegendTemple = function (e) {
    if (I.CastleModel.legendSkillData.hasLegendTemple()) {
      R.ButtonHelper.initBasicButtons([this.userStatePanel.mc_paragonBg.mc_button]);
      this.controller.removeEventListener(b.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onHasLegendTemple));
    }
  };
  CastleUserStatePanel.prototype.show = function () {
    this.onChangeXP();
    this.onChangeMight();
    this.onChangeCurrency();
    this.onChangeName();
    this.updateCrest();
    this.addGoldComp.init();
    e.prototype.show.call(this);
    this.allowCaching = true;
  };
  CastleUserStatePanel.prototype.onChangeMight = function (e = null) {
    if (this.i_txt_userMight && this.i_txt_userMight.textContentVO && this.userStatePanel && this.userStatePanel.mc_mightBar && this.userStatePanel.mc_mightBar.mightBar) {
      this.i_txt_userMight.textContentVO.numberValue = I.CastleModel.mightData.userCurrentMight;
      try {
        var t = I.CastleModel.mightData.getNextMightRank(I.CastleModel.mightData.userHighestMightAchieved);
        if (t) {
          this.userStatePanel.mc_mightBar.toolTipText = {
            t: "might_display_info_tooltip",
            p: [I.CastleModel.mightData.userMightToNextLevel]
          };
          this.userStatePanel.mc_mightBar.mightBar.scaleX = Math.min(Math.max(I.CastleModel.mightData.userCurrentMight / t.threshold, 0), 1);
        } else {
          this.userStatePanel.mc_mightBar.toolTipText = "might_display_max_tooltip";
          this.userStatePanel.mc_mightBar.mightBar.scaleX = 1;
        }
      } catch (e) {
        r.debug(e.stack);
        console.log(e.stack);
      }
      if (e) {
        this.updateCache();
      }
    }
  };
  CastleUserStatePanel.prototype.onChangeXP = function (e = null) {
    this.i_xpBar_txt_userXP.textContentVO.textId = a.GenericTextIds.VALUE_XP;
    var t = g.int(I.CastleModel.userData.userXP - (I.CastleModel.userData.isLegend ? c.PlayerConst.LEVEL_CAP_XP : 0));
    this.i_xpBar_txt_userXP.textContentVO.textReplacements = [new d.LocalizedNumberVO(t)];
    if (I.CastleModel.userData.isLegend) {
      this.userStatePanel.mc_paragonBg.mc_button.toolTipText = "panel_state_LegendLevel";
      this.userStatePanel.mc_normalBg.visible = false;
      this.userStatePanel.mc_paragonBg.visible = true;
      this.i_txt_userLegendLevel.textContentVO.stringValue = u.Localize.integer(I.CastleModel.userData.userLegendLevel);
      this.userStatePanel.mc_xpBar.icon_xpLegend.visible = true;
    } else {
      this.userStatePanel.mc_normalBg.mc_level_bg.toolTipText = "panel_state_Level";
      this.userStatePanel.mc_normalBg.visible = true;
      this.userStatePanel.mc_paragonBg.visible = false;
      var i = this.i_txt_userLevel.y;
      this.i_txt_userLevel.textContentVO.stringValue = u.Localize.integer(I.CastleModel.userData.userLevel);
      if (this.i_txt_userLevel.y != i) {
        this.i_txt_userLevel.y = i;
      }
      this.userStatePanel.mc_xpBar.icon_xpLegend.visible = false;
    }
    if (I.CastleModel.userData.userLegendLevel >= c.PlayerConst.LEGEND_LEVEL_CAP) {
      this.userStatePanel.mc_xpBar.toolTipText = "panel_state_levelCap_legend";
      var n = new l.ColorTransform();
      n.color = _.ClientConstColor.GENERIC_DIRTY_GREEN;
      this.userStatePanel.mc_xpBar.xpbar.useFilters([new createjs.ColorFilter(n.redMultiplier, n.greenMultiplier, n.blueMultiplier, n.alphaMultiplier, n.redOffset, n.greenOffset, n.blueOffset, n.alphaOffset)]);
      this.userStatePanel.mc_xpBar.xpbar.scaleX = 1;
    } else {
      var o = I.CastleModel.userData.isLegend ? "panel_state_xpToLevelUp_legend" : "panel_state_xpToLevelUp";
      this.userStatePanel.mc_xpBar.toolTipText = {
        t: o,
        p: [I.CastleModel.userData.userXPtoNextLevel]
      };
      this.userStatePanel.mc_xpBar.xpbar.scaleX = Math.max(0, I.CastleModel.userData.xpPercentToNextLevel);
    }
    this.userStatePanel.mc_crest_paragon.actLikeButton = this.userStatePanel.mc_crest_normal.actLikeButton = I.CastleModel.userData.userLevel >= m.ClientConstLevelRestrictions.MIN_LEVEL_CHANGE_CREST;
    this.userStatePanel.mc_mightBar.actLikeButton = this.enableGloryHud;
    this.gloryHUDDisp.actLikeButton = this.enableGloryHud;
    this.updateSubscription();
    if (e) {
      this.updateCache();
    }
  };
  CastleUserStatePanel.prototype.onChangeCurrency = function (e = null) {
    if (this.i_txt_userCurrency1) {
      this.i_txt_userCurrency1.textContentVO.numberValue = I.CastleModel.currencyData.c1Amount;
    } else {
      this.i_txt_userCurrency1 = this.textFieldManager.registerTextField(this.userStatePanel.txt_userCurrency1, new D.CastleLocalizedNumberVO(I.CastleModel.currencyData.c1Amount, {
        compactThreshold: 10000000,
        compactFractionalDigits: 0
      }), new s.InternalGGSTextFieldConfigVO(true));
    }
    if (this.i_txt_userCurrency2) {
      this.i_txt_userCurrency2.textContentVO.numberValue = I.CastleModel.currencyData.c2Amount;
    } else {
      this.i_txt_userCurrency2 = this.textFieldManager.registerTextField(this.userStatePanel.txt_userCurrency2, new D.CastleLocalizedNumberVO(I.CastleModel.currencyData.c2Amount, {
        compactThreshold: 10000000,
        compactFractionalDigits: 0
      }), new s.InternalGGSTextFieldConfigVO(true));
    }
    if (e) {
      this.updateCache();
    }
  };
  CastleUserStatePanel.prototype.updateCrest = function (e) {
    var t;
    var i;
    var n = this;
    if (e === undefined) {
      e = null;
    }
    if (I.CastleModel.userData.playerCrest) {
      if (I.CastleModel.userData.isLegend) {
        this.userStatePanel.mc_crest_normal.visible = false;
        this.userStatePanel.mc_crest_paragon.visible = true;
        t = this.userStatePanel.mc_crest_paragon;
      } else {
        this.userStatePanel.mc_crest_paragon.visible = false;
        this.userStatePanel.mc_crest_normal.visible = true;
        t = this.userStatePanel.mc_crest_normal;
      }
      t.visible = true;
      X.CrestHelper.setCrestGraphics(t, I.CastleModel.userData.playerCrest, null, false).then(function () {
        n.updateCache();
      }).catch(function (e) {
        o.warn("failed to set crest Graphics", e);
      });
      i = I.CastleModel.userData.userLevel >= m.ClientConstLevelRestrictions.MIN_LEVEL_CHANGE_CREST ? u.Localize.text("crest_tooltip") + (I.CastleModel.userData.playerCrest.tooltipText != null ? "\n\n" + I.CastleModel.userData.playerCrest.tooltipText : "") : {
        t: f.ClientConstTextIds.LEVEL_NEEDED,
        p: [m.ClientConstLevelRestrictions.MIN_LEVEL_CHANGE_CREST]
      };
      t.toolTipText = i;
      if (e) {
        this.updateCache();
      }
    }
  };
  CastleUserStatePanel.prototype.onClick = function (t) {
    if (R.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.userStatePanel.btn_payment:
          this.addGoldComp.onClickButton(O.CastleOpenShopExecutor.SOURCE_USER_STATE_PANEL, J.CXFSourceTrackingConstants.SOURCE_USER_STATE_PANEL);
          break;
        case this.userStatePanel.mc_crest_paragon:
        case this.userStatePanel.mc_crest_normal:
          if (I.CastleModel.userData.userLevel >= m.ClientConstLevelRestrictions.MIN_LEVEL_CHANGE_CREST) {
            U.CastleDialogHandler.getInstance().registerDefaultDialogs(Y.CastlePremiumMarketPlaceDialog, new S.CastlePremiumMarketPlaceDialogProperties(C.ClientConstCastle.CATEGORY_MARKETPLACE_CREST));
          }
          break;
        case this.userStatePanel.mc_paragonBg.mc_button:
          if (I.CastleModel.legendSkillData.hasLegendTemple()) {
            U.CastleDialogHandler.getInstance().registerDefaultDialogs(W.CastleLegendSkillDialog);
          }
          break;
        case this.gloryHUDDisp:
          if (this.gloryHUD_model().isAnimating) {
            this.gloryHUD_controller().stopAnimation();
          }
          if (!this.enableGloryHud) {
            break;
          }
          U.CastleDialogHandler.getInstance().registerDefaultDialogs(q.CastleTitleMainDialog, new M.CastleTitleMainDialogProperties());
          break;
        case this.userStatePanel.mc_mightBar:
          U.CastleDialogHandler.getInstance().registerDefaultDialogs(j.CastleIngameHelpDialog, new L.CastleInGameHelpDialogProperties(A.CastleInGameHelpCategoriesEnum.MIGHT_POINTS));
          break;
        case this.userStatePanel.btn_buyLevel:
          this.buyLevelComp.onClickButton();
          break;
        case this.userStatePanel.mc_subscription.btn_subscription:
          if (I.CastleModel.subscriptionData.isAnyPackageActive()) {
            x.CastlePanel.dialogHandler.registerDefaultDialogs(K.SubscriptionDialog, new P.SubscriptionDialogProperties());
          } else {
            x.CastlePanel.dialogHandler.registerDefaultDialogs(z.SubscriptionTeaserDialog);
          }
      }
    }
  };
  Object.defineProperty(CastleUserStatePanel.prototype, "enableGloryHud", {
    get: function () {
      return I.CastleModel.userData.userLevel >= m.ClientConstLevelRestrictions.MIN_LEVEL_GLORY_TITLE;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserStatePanel.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._gloryHUD.destroy();
    this.addGoldComp.destroy();
    this.buyLevelComp.destroy();
    this.controller.removeEventListener(y.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangeXP));
    this.controller.removeEventListener(y.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.updateCrest));
    this.controller.removeEventListener(E.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeCurrency));
    this.controller.removeEventListener(E.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.updateCrest));
    this.controller.removeEventListener(E.CastleUserDataEvent.CHANGE_USER_NAME, this.bindFunction(this.onChangeName));
    this.controller.removeEventListener(E.CastleUserDataEvent.CHANGE_USER_MIGHT, this.bindFunction(this.onChangeMight));
    this.controller.removeEventListener(b.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onHasLegendTemple));
    this.controller.removeEventListener(T.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    this.textFieldManager.unregisterTextFieldByReference(this.i_txt_userLevel);
    this.textFieldManager.unregisterTextFieldByReference(this.i_xpBar_txt_userXP);
    this.textFieldManager.unregisterTextFieldByReference(this.i_txt_userCurrency1);
    this.textFieldManager.unregisterTextFieldByReference(this.i_txt_userCurrency2);
    this.textFieldManager.unregisterTextFieldByReference(this.i_txt_userMight);
    this.textFieldManager.unregisterTextFieldByReference(this.i_txt_username);
    this.i_txt_userLevel = null;
    this.i_txt_userLegendLevel = null;
    this.i_txt_userMight = null;
    this.i_xpBar_txt_userXP = null;
    this.i_txt_userCurrency1 = null;
    this.i_txt_userCurrency2 = null;
    this.i_txt_username = null;
  };
  CastleUserStatePanel.prototype.onSubscriptionChanged = function (e) {
    this.updateSubscription();
  };
  CastleUserStatePanel.prototype.gloryHUD_model = function () {
    return this._gloryHUD.getModel();
  };
  CastleUserStatePanel.prototype.gloryHUD_controller = function () {
    return this._gloryHUD.controllers[0];
  };
  Object.defineProperty(CastleUserStatePanel.prototype, "userStatePanel", {
    get: function () {
      return this.panelDisp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserStatePanel.prototype, "dispToCache", {
    get: function () {
      return this.panelDisp;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserStatePanel.NAME = "CastleUserState_X";
  return CastleUserStatePanel;
}(x.CastlePanel);
exports.CastleUserStatePanel = k;
var U = require("./9.js");
var G = require("./428.js");
var H = require("./4061.js");
var j = require("./1075.js");
var W = require("./448.js");
var Y = require("./315.js");
var K = require("./522.js");
var z = require("./4064.js");
var q = require("./609.js");
var X = require("./61.js");
var Q = require("./36.js");
var J = require("./108.js");