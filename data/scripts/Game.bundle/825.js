Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./26.js");
var u = require("./67.js");
var d = require("./19.js");
var p = require("./13.js");
var h = require("./4.js");
var g = require("./9.js");
var C = require("./279.js");
var _ = require("./280.js");
var m = require("./163.js");
var f = require("./20.js");
var O = require("./59.js");
var E = require("./8.js");
var y = require("./25.js");
var b = require("./287.js");
var D = require("./11.js");
var I = require("./281.js");
var T = require("./3719.js");
var v = require("./3725.js");
var S = require("./3726.js");
var A = require("./3729.js");
var L = require("./1774.js");
var P = require("./3730.js");
var M = require("./3731.js");
var R = require("./3732.js");
var V = require("./3733.js");
var x = createjs.Point;
var w = function (e) {
  function DifficultyScalingSelectDialog() {
    var t = this;
    t.effectsPageIndex = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, DifficultyScalingSelectDialog.NAME) || this;
  }
  n.__extends(DifficultyScalingSelectDialog, e);
  DifficultyScalingSelectDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    E.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_left, this.dialogDisp.btn_right, this.dialogDisp.btn_overview, this.dialogDisp.btn_select, this.dialogDisp.mc_locked.btn_unlock], f.ClickFeedbackButtonHover, 1);
  };
  DifficultyScalingSelectDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    h.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.initScrollList();
    this.fillScrollList();
    this._itxt_old = this.textFieldManager.registerTextField(this.dialogDisp.mc_old.txt_copy, new r.HTMLTextCustomVO());
    this._itxt_old.htmlLinkClick.add(this.bindFunction(this.onHyperLinkClick));
    var i;
    var n = h.CastleModel.localData.readEventDifficultyForEvent(this.dialogProperties.eventID, h.CastleModel.userData.playerID);
    var o = 0;
    if (n > 0) {
      for (i = 1; i < this.scrollList.numItems; i++) {
        if (h.CastleModel.eventDifficultyScaling.getDifficultiesByEventID(this.dialogProperties.eventID)[i - 1] && h.CastleModel.eventDifficultyScaling.getDifficultiesByEventID(this.dialogProperties.eventID)[i - 1].difficultyID == n) {
          o = i - 1;
        }
      }
    }
    this.selectDifficulty(h.CastleModel.eventDifficultyScaling.getDifficultiesByEventID(this.dialogProperties.eventID)[o]);
    this._itxt_old = this.textFieldManager.registerTextField(this.dialogDisp.mc_old.txt_copy, this.getHtmlTextVOById("dialog_difficultyScaling_classicDifficulty_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rewards, new r.LocalizedTextVO("dialog_difficultyScaling_possibleRewards_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_chooseDifficulty_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_select.txt_copy, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_confirmDifficulty_button")));
  };
  DifficultyScalingSelectDialog.prototype.getHtmlTextVOById = function (e) {
    var t = this.dialogDisp.mc_old.txt_copy.defaultTextFormat.color;
    var i = new r.HTMLTextCustomVO();
    i.addLocalizedTextVO(new r.LocalizedTextVO(e));
    var n = new r.HTMLLinkFormatVO(t, o.GGSTextDecoration.UNDERLINE);
    var a = new r.HTMLLinkFormatVO(t, o.GGSTextDecoration.UNDERLINE);
    var s = new r.HTMLLinkFormatVO(l.ClientConstColor.DARK_LINK_COLOR, o.GGSTextDecoration.UNDERLINE);
    i.linkFormats = new r.HTMLLinkFormatsVO(n, a, s);
    return i;
  };
  DifficultyScalingSelectDialog.prototype.initScrollList = function () {
    var e = new C.AccordionComponentProperties();
    e.scrollStrategy = O.DynamicSizeScrollStrategyVertical;
    e.disableButtons = true;
    this.scrollList = new I.DynamicSliderAccordionComponent(this.dialogDisp.mc_list, e);
    this.scrollList2 = new I.DynamicSliderAccordionComponent(this.dialogDisp.mc_bonusList, e);
  };
  DifficultyScalingSelectDialog.prototype.fillScrollList = function () {
    var e = new _.GenericCollapsibleItemProperties(new m.LayoutMargin(0, 8, 0, 0), true, 0, 0, false);
    var t = new _.GenericCollapsibleItemProperties(new m.LayoutMargin(0, 10, 0, 0), true, 0, 0, false);
    this.scrollList.clear();
    var i = [];
    var n = new V.DifficultyScalingTextListItem(this.dialogProperties.eventID, t);
    i.push(n);
    for (var o = 0; o < h.CastleModel.eventDifficultyScaling.getDifficultiesByEventID(this.dialogProperties.eventID).length; o++) {
      var a = {};
      a.vo = h.CastleModel.eventDifficultyScaling.getDifficultiesByEventID(this.dialogProperties.eventID)[o];
      a.pos = o;
      a.selected = false;
      var s = new R.DifficultyScalingDifficultyListItem(a, e);
      i.push(s);
    }
    for (var r = 0; r < i.length; r++) {
      this.scrollList.addItem(i[r]);
    }
    this.scrollList.show();
    this.scrollList.scrollToTop();
  };
  DifficultyScalingSelectDialog.prototype.selectDifficulty = function (e) {
    this.currentDifficulty = e;
    b.DifficultyScalingHelper.addTeaserImage(this.dialogDisp.mc_teaser, e.difficultyID);
    var t = h.CastleModel.castleAchievementData.getAchievementForUnlockDifficulty(e.difficultyID);
    if (t) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_locked.txt_copy, new r.LocalizedTextVO("dialog_difficultyScaling_difficultyUnlockInfo_desc", [t.achievementSerieVO.nameString, t.achievementSeriesNumber]));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_locked.txt_copy, new r.LocalizedTextVO("dialog_difficultyScaling_difficultyUnlockInfo_rubiesOnly_desc"));
    }
    this.effectsPageIndex = 0;
    this.updateEffectList();
    this.scrollList.items.forEach(function (t) {
      if (t.data) {
        t.data.selected = e.difficultyID == t.data.vo.difficultyID;
      }
    });
    this.scrollList.items.forEach(function (e) {
      if (e) {
        e.fill();
      }
    });
    h.CastleModel.localData.saveEventDifficultyForEvent(this.dialogProperties.eventID, this.currentDifficulty.difficultyID, h.CastleModel.userData.playerID);
    if (this.dialogDisp.mc_locked.btn_unlock) {
      this.dialogDisp.mc_locked.btn_unlock.toolTipText = r.Localize.text("dialog_difficultyScaling_unlockDifficulty_tooltip", [e.unlockC2]);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_locked.btn_unlock.txt_copy, new r.LocalizedNumberVO(e.unlockC2));
    }
  };
  DifficultyScalingSelectDialog.prototype.updateEffectList = function () {
    var e;
    var t = h.CastleModel.eventDifficultyScaling.getDifficultyEffectsByDifficultyID(this.currentDifficulty.difficultyID);
    var i = [];
    var n = [];
    for (e = 0; e < t.length; e++) {
      if (t[e].wearerID == s.EquipmentConst.BARON_WEARER_ID) {
        n.push(t[e]);
      } else if (t[e].wearerID == s.EquipmentConst.COMMANDER_WEARER_ID) {
        i.push(t[e]);
      }
    }
    var o = new _.GenericCollapsibleItemProperties(new m.LayoutMargin(0, 0, 0, 0), true, 0, 0, false);
    var a = [];
    var r = new M.DifficultyScalingBonusTextListItem(this.currentDifficulty.multiplier, o);
    a.push(r);
    if (n.length > 0) {
      var l = {
        header: "dialog_difficultyScaling_defensive_title"
      };
      l.effectList = n;
      var c = new P.DifficultyScalingBonusCategoryListItem(l, o);
      a.push(c);
    }
    if (i.length > 0) {
      var p = {
        header: "dialog_difficultyScaling_offensive_title"
      };
      p.effectList = i;
      var g = new P.DifficultyScalingBonusCategoryListItem(p, o);
      a.push(g);
    }
    this.scrollList2.clear();
    for (var C = 0; C < a.length; C++) {
      this.scrollList2.addItem(a[C]);
    }
    this.scrollList2.show();
    this.scrollList2.scrollToTop();
    var f = (this.singlePlayerScoreEvent ? this.singlePlayerScoreEvent : this.allianceScoreEvent).getHighest4RewardsForDifficulty(this.currentDifficulty.difficultyID);
    y.CollectableRenderHelper.displayMultipleItemsComplete(this, new u.CollectableRenderClipsList(this.dialogDisp, "mc_reward_").addItemMcs("mc_reward").addInfoBtns("parent.btn_info").addBuildingLevelMc("mc_reward.mc_buildingLevel"), f, new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_DEFAULT, new x(50, 50)));
    var O = h.CastleModel.castleAchievementData.isDifficultyUnlocked(this.currentDifficulty.difficultyID);
    if (O && this.currentDifficulty.difficultyType.difficultyTypeID > 10 && this.currentDifficulty.unlockC2 > 0) {
      O = false;
    }
    this.dialogDisp.btn_select.visible = O;
    this.dialogDisp.mc_locked.visible = !O;
  };
  DifficultyScalingSelectDialog.prototype.onClick = function (t) {
    var i = this;
    e.prototype.onClick.call(this, t);
    if (t.target.mc_icon && t.target.mc_locked) {
      this.scrollList.items.forEach(function (e) {
        if (t.target == e.disp && e.data) {
          i.selectDifficulty(e.data.vo);
        }
      });
    }
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        g.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_difficultyScaling"));
        break;
      case this.dialogDisp.btn_left:
        this.effectsPageIndex = this.effectsPageIndex - 1 < 0 ? Math.floor(this.currentEffectList.length / DifficultyScalingSelectDialog.EFFECT_PER_PAGE) : this.effectsPageIndex - 1;
        this.updateEffectList();
        break;
      case this.dialogDisp.btn_right:
        this.effectsPageIndex = this.effectsPageIndex + 1 > Math.floor(this.currentEffectList.length / DifficultyScalingSelectDialog.EFFECT_PER_PAGE) ? 0 : this.effectsPageIndex + 1;
        this.updateEffectList();
        break;
      case this.dialogDisp.btn_select:
        g.CastleDialogHandler.getInstance().registerDialogs(v.EventDifficultyConfirmDialog, new A.EventDifficultyConfirmRewardsDialogProperties(null, this.currentDifficulty, this.dialogProperties.eventID));
        break;
      case this.dialogDisp.mc_locked.btn_unlock:
        g.CastleDialogHandler.getInstance().registerDialogs(v.EventDifficultyConfirmDialog, new A.EventDifficultyConfirmRewardsDialogProperties(null, this.currentDifficulty, this.dialogProperties.eventID, true));
        break;
      case this.dialogDisp.btn_overview:
        g.CastleDialogHandler.getInstance().registerDialogs(T.DifficultyScalingRewardOverviewDialogComplex, new L.EventDifficultyRewardsOverviewDialogProperties(this.currentDifficulty, this.singlePlayerScoreEvent, this.allianceScoreEvent));
    }
  };
  DifficultyScalingSelectDialog.prototype.onHyperLinkClick = function (e, t) {
    g.CastleDialogHandler.getInstance().registerDialogs(S.EventDifficultyConfirmRewardsDialog, new A.EventDifficultyConfirmRewardsDialogProperties((this.singlePlayerScoreEvent ? this.singlePlayerScoreEvent : this.allianceScoreEvent).getHighest4RewardsForDifficulty(0), null, this.dialogProperties.eventID));
  };
  Object.defineProperty(DifficultyScalingSelectDialog.prototype, "currentEffectList", {
    get: function () {
      return h.CastleModel.eventDifficultyScaling.getDifficultyEffectsByDifficultyID(this.currentDifficulty.difficultyID);
    },
    enumerable: true,
    configurable: true
  });
  DifficultyScalingSelectDialog.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.eventID) {
      this.hide();
    }
  };
  DifficultyScalingSelectDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    h.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this._itxt_old.htmlLinkClick.remove(this.bindFunction(this.onHyperLinkClick));
    this.scrollList.destroy();
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
  };
  Object.defineProperty(DifficultyScalingSelectDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingSelectDialog.prototype, "singlePlayerScoreEvent", {
    get: function () {
      return b.DifficultyScalingHelper.getSinglePlayerScoreEvent(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingSelectDialog.prototype, "allianceScoreEvent", {
    get: function () {
      return b.DifficultyScalingHelper.getAllianceScoreEvent(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  DifficultyScalingSelectDialog.__initialize_static_members = function () {
    DifficultyScalingSelectDialog.NAME = "EventDifficultySelect2";
  };
  DifficultyScalingSelectDialog.EFFECT_PER_PAGE = 9;
  return DifficultyScalingSelectDialog;
}(D.CastleExternalDialog);
exports.DifficultyScalingSelectDialog = w;
a.classImplementsInterfaces(w, "ICollectableRendererList");
w.__initialize_static_members();