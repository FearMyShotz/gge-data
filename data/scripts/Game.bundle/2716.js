Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./28.js");
var d = require("./532.js");
var p = require("./1433.js");
var h = require("./531.js");
var g = require("./26.js");
var C = require("./71.js");
var _ = require("./13.js");
var m = require("./15.js");
var f = require("./85.js");
var O = require("./4.js");
var E = require("./33.js");
var y = require("./27.js");
var b = require("./20.js");
var D = require("./8.js");
var I = require("./185.js");
var T = require("./120.js");
var v = createjs.MouseEvent;
var S = createjs.Point;
var A = function () {
  function ResearchInfo(e) {
    this.DAYS_THRESHOLD = c.int(u.ClientConstTime.SECONDS_PER_DAY * 2);
    this.DECIMAL_DIGITS = 1;
    this._disp = e;
    o.GoodgameTextFieldManager.getInstance().registerTextField(e.mc_buy.btn_buy.txt_label, new l.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("research_start"))).autoFitToBounds = true;
    this.itxt_researchTitle = o.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_researchTitle, new l.TextVO(""));
    this.itxt_researchTitle.autoFitToBounds = true;
    this.itxt_researchDescription = o.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_researchDescription, new r.LocalizedTextVO(""));
    this.itxt_researchDescription.autoFitToBounds = true;
    this.itxt_researchRequirments = o.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_researchRequirements, new l.TextVO(""));
    this.itxt_researchRequirments.autoFitToBounds = true;
    this.itxt_bigBonus = o.GoodgameTextFieldManager.getInstance().registerTextField(e.mc_bonus.txt_bigBonus, new l.TextVO(""));
    this.itxt_bigBonus.autoFitToBounds = true;
    this.itxt_level = o.GoodgameTextFieldManager.getInstance().registerTextField(e.mc_bonus.txt_level, new r.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this.itxt_level.autoFitToBounds = true;
    this.itxt_time = o.GoodgameTextFieldManager.getInstance().registerTextField(e.mc_buy.info_time.txt_cost, new l.TextVO(""));
    this.itxt_time.autoFitToBounds = true;
    this._disp.mc_bonus.mc_bonusMouseArea.toolTipText = "effect";
    this._disp.mc_buy.info_time.toolTipText = "researchTime";
    this._disp.mc_buy.info_time.mouseChildren = false;
    this._disp.mc_bonus.mc_ResearchIconHolder.mouseChildren = false;
    D.ButtonHelper.initBasicButtons([e.mc_bonus.btn_info]);
    D.ButtonHelper.initButtons([e.mc_buy.btn_buy], b.ClickFeedbackButtonHover);
  }
  ResearchInfo.prototype.show = function () {
    this._disp.addEventListener(v.CLICK, this.bindFunction(this.onClick));
    this._disp.mc_bonus.mc_ResearchIconHolder.addEventListener(v.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.mc_bonus.mc_ResearchIconHolder.addEventListener(v.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    m.CastleBasicController.getInstance().addEventListener(C.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    O.CastleModel.researchData.addEventListener(h.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.onResearchUpdate));
    O.CastleModel.specialEventData.addEventListener(g.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshEvent));
    O.CastleModel.specialEventData.addEventListener(g.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    var e = O.CastleModel.userData.castleList.getHomeCastle();
    O.CastleModel.smartfoxClient.sendCommandVO(new d.C2SGetCastleResourcesVO(e.objectId, e.kingdomID));
    this.update();
  };
  ResearchInfo.prototype.onMouseOver = function (e) {
    this._researchVO.onMouseOverResearchIcon(this._disp.mc_bonus.mc_ResearchIconHolder);
  };
  ResearchInfo.prototype.onMouseOut = function (e) {
    this._researchVO.onMouseOutResearchIcon();
  };
  ResearchInfo.prototype.hide = function () {
    this._disp.removeEventListener(v.CLICK, this.bindFunction(this.onClick));
    this._disp.mc_bonus.mc_ResearchIconHolder.removeEventListener(v.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.mc_bonus.mc_ResearchIconHolder.removeEventListener(v.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    m.CastleBasicController.getInstance().removeEventListener(C.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    O.CastleModel.researchData.removeEventListener(h.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.onResearchUpdate));
    O.CastleModel.specialEventData.removeEventListener(g.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshEvent));
    O.CastleModel.specialEventData.removeEventListener(g.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  ResearchInfo.prototype.setResearchGroup = function (e) {
    var t = null;
    if (e != null) {
      t = e.topResearch;
    }
    this._researchVO = t;
    this.update();
  };
  ResearchInfo.prototype.update = function () {
    this._disp.visible = true;
    if (this._researchVO) {
      this.updateBuyArea();
      this.updateNameAndDescription();
      this.updateBonusArea();
      this.updateIcon();
    } else {
      this._disp.visible = false;
    }
  };
  ResearchInfo.prototype.updateBuyArea = function () {
    var e = this._researchVO.isResearchable;
    this._disp.mc_buy.visible = e;
    this._disp.mc_noBuy_deco.visible = this._researchVO.groupVO.isFullyResearched;
    this.itxt_researchRequirments.textContentVO.stringValue = this._researchVO.groupVO.requirementsText;
    if (e) {
      if (this._researchVO.researchDuration > this.DAYS_THRESHOLD) {
        this.itxt_time.textContentVO.stringValue = n.TimeStringHelper.getTimeToString(this._researchVO.researchDuration, n.TimeStringHelper.TWO_TIME_FORMAT, s.Localize.text, false, true);
      } else {
        var t = y.CastleTimeStringHelper.getEventTimeString(this._researchVO.researchDuration, this.DAYS_THRESHOLD, this.DECIMAL_DIGITS);
        this.itxt_time.textContentVO.stringValue = s.Localize.digitalClock(t);
      }
      I.SubscriptionHelper.showSubscriptionStarToTextField(this.itxt_time, O.CastleModel.subscriptionData.getEffectValue(E.EffectTypeEnum.EFFECT_TYPE_RESEARCH_BOOST) > 0, 15, new S(-3, 0), true);
      if (this._researchVO.researchDuration > this.DAYS_THRESHOLD) {
        t = y.CastleTimeStringHelper.getShortTimeString(this._researchVO.researchDuration);
        this._disp.mc_buy.info_time.toolTipText = s.Localize.text("researchTime") + "\n" + s.Localize.digitalClock(t);
      } else {
        this._disp.mc_buy.info_time.toolTipText = "researchTime";
      }
      var i = this._researchVO.getFinalCosts();
      x.CostHelper.initAsCostsFromOtherStorage(i, this._disp.mc_buy, O.CastleModel.researchData.currentResearchVO != this._researchVO, this.createResourceListForCosts());
      this.handleActiveResearch();
      if (this._disp.mc_buy.mc_overlay) {
        if (i.getAmountOrDefaultByType(L.CollectableEnum.C2) > 0) {
          this._disp.mc_buy.mc_overlay.gotoAndStop(2);
        } else {
          this._disp.mc_buy.mc_overlay.gotoAndStop(1);
        }
        this._disp.mc_buy.mc_overlay.visible = O.CastleModel.researchData.currentResearchVO == this._researchVO;
      }
    }
  };
  ResearchInfo.prototype.updateNameAndDescription = function () {
    this.itxt_researchTitle.textContentVO.stringValue = this._researchVO.fullNameText;
    this.itxt_researchDescription.textContentVO.textId = this._researchVO.descriptionTextId;
    this.itxt_researchDescription.textContentVO.textReplacements = this._researchVO.descriptionTextReplacements;
    this.itxt_researchDescription.y = this.itxt_researchTitle.y + this.itxt_researchTitle.textHeight + 3;
  };
  ResearchInfo.prototype.updateBonusArea = function () {
    var e = this._researchVO.totalEffectiveBonus;
    this.itxt_bigBonus.textContentVO.stringValue = this._researchVO.getBonusText(e.textReplacements);
    this._disp.mc_bonus.btn_info.visible = this._researchVO.showInfoBtn;
    this.itxt_bigBonus.visible = this._researchVO.showEffectValue;
    this._disp.mc_bonus.mc_bonusMouseArea.visible = this._researchVO.showEffectValue;
    var t = 0;
    var i = 0;
    if (this._researchVO && this._researchVO.groupVO) {
      t = this._researchVO.groupVO.currentLevel;
      i = this._researchVO.groupVO.maxLevel;
    } else {
      t = i = 0;
    }
    this.itxt_level.textContentVO.textReplacements = [t, i];
  };
  ResearchInfo.prototype.updateIcon = function () {
    w.ResearchIconHelper.addResearchIcon(this._researchVO.groupVO, this._disp.mc_bonus.mc_ResearchIconHolder, ResearchInfo.ICON_SIZE);
    this._disp.mc_bonus.mc_level.visible = false;
    if (this._researchVO.hasOneOrMoreEffectTypes([E.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS])) {
      var e = this._researchVO.getEffectValueByType(E.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS).strength;
      var t = O.CastleModel.wodData.getUnitVOByWodId(e);
      if (t.level > 0) {
        this._disp.mc_bonus.mc_level.visible = true;
        o.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.mc_bonus.mc_level.txt_value, new f.CastleLocalizedNumberVO(t.level));
      }
    }
  };
  ResearchInfo.prototype.createResourceListForCosts = function () {
    if (!this._ressourceVO) {
      return null;
    }
    var e = this._ressourceVO.resources.clone();
    e.addItem(new P.CollectableItemC1VO(O.CastleModel.currencyData.c1Amount));
    e.addItem(new M.CollectableItemC2VO(O.CastleModel.currencyData.c2Amount));
    return e;
  };
  ResearchInfo.prototype.onRefreshEvent = function (e) {
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_RESEARCH_EXPERT) {
      this.handleActiveResearch();
    }
  };
  ResearchInfo.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_RESEARCH_EXPERT) {
      this.handleActiveResearch();
    }
  };
  ResearchInfo.prototype.handleActiveResearch = function () {
    if (this._researchVO) {
      if (this._researchVO.onlyWithResearchExpert && !O.CastleModel.specialEventData.isEventActive(a.EventConst.EVENTTYPE_RESEARCH_EXPERT)) {
        D.ButtonHelper.enableButton(this._disp.mc_buy.btn_buy, false);
        this._disp.mc_buy.btn_buy.toolTipText = "needResearchEvent";
      } else if (O.CastleModel.researchData.isSomeResearchActive) {
        D.ButtonHelper.enableButton(this._disp.mc_buy.btn_buy, false);
        this._disp.mc_buy.btn_buy.toolTipText = "research_already";
      } else {
        D.ButtonHelper.enableButton(this._disp.mc_buy.btn_buy, true);
        this._disp.mc_buy.btn_buy.toolTipText = null;
      }
    }
  };
  ResearchInfo.prototype.onChangeResources = function (e) {
    if (e.params[0].castleID == O.CastleModel.userData.castleList.getHomeCastle().objectId) {
      this._ressourceVO = e.params[0];
    }
    if (this._researchVO) {
      this.updateBuyArea();
    }
  };
  ResearchInfo.prototype.onResearchUpdate = function (e) {
    if (this._researchVO) {
      this.setResearchGroup(this._researchVO.groupVO);
    }
  };
  ResearchInfo.prototype.onClick = function (e) {
    if (D.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this._disp.mc_buy.btn_buy:
          this.buyResearch();
          break;
        case this._disp.mc_bonus.btn_info:
          if (this._researchVO.hasOneOrMoreEffectTypes([E.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE])) {
            var t = this._researchVO.getEffectValueByType(E.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE).rawValues[0];
            var i = O.CastleModel.craftingData.getRecipeByID(t);
            V.CastleDialogHandler.getInstance().registerDefaultDialogs(F.CastleResearchRecipeInfoDialog, new N.CastleResearchRecipeInfoDialogProperties(i));
          } else {
            V.CastleDialogHandler.getInstance().registerDefaultDialogs(B.CastleRecruitInfoDialog, new T.CastleRecruitInfoDialogProperties(O.CastleModel.wodData.voSubList(R.CastleWodData.TYPE_UNIT).get(this._researchVO.getBoniVOByFirstFoundEffectType([E.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS, E.EffectTypeEnum.EFFECT_TYPE_STRONGER_PEASANT]).strength)));
          }
      }
    }
  };
  ResearchInfo.prototype.buyResearch = function () {
    D.ButtonHelper.enableButton(this._disp.mc_buy.btn_buy, false);
    O.CastleModel.smartfoxClient.sendCommandVO(new p.C2SResearchStartVO(this._researchVO.researchID));
    var e = O.CastleModel.userData.castleList.getHomeCastle();
    O.CastleModel.smartfoxClient.sendCommandVO(new d.C2SGetCastleResourcesVO(e.objectId, e.kingdomID));
  };
  ResearchInfo.__initialize_static_members = function () {
    ResearchInfo.ICON_SIZE = 65;
  };
  return ResearchInfo;
}();
exports.ResearchInfo = A;
var L = require("./12.js");
var P = require("./234.js");
var M = require("./128.js");
var R = require("./56.js");
var V = require("./9.js");
var x = require("./66.js");
var w = require("./631.js");
var B = require("./113.js");
var F = require("./2717.js");
var N = require("./2718.js");
A.__initialize_static_members();