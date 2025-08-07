Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function LongTermPointEventEventInfoComponent(e, t) {
    this.boosterActive = false;
    this.disp = e;
    this._properties = t;
    this.teaserImages = new Map();
    this.itxt_time = LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(this.disp.mc_eventTime.txt_time, new h.TextVO(""));
    this.itxtDescription = LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(this.disp.txt_description1, new p.LocalizedTextVO(""));
    this.itxtDescription_small = LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(this.disp.txt_description2, new p.LocalizedTextVO(""));
    this.eventIconButton = this.disp.event_details.icon_placeholder;
    this.eventIconButton.mouseChildren = false;
    b.ButtonHelper.initBasicButton(this.eventIconButton);
    b.ButtonHelper.initButtons([this.disp.btn_showMe], E.ClickFeedbackButtonHover, 1);
    this.initConditionTexts();
    this.setupStaticTexts();
    this.setupSeasonSkin();
    this.setupPointEvents();
  }
  LongTermPointEventEventInfoComponent.prototype.reload = function () {
    var e = g.int(this.tabButtonGroup.getSelectedButtonIndex());
    this.setupSeasonSkin();
    this.teaserImages = new Map();
    this.setupPointEvents();
    this.showEvent(e >= 0 ? e : 0);
  };
  LongTermPointEventEventInfoComponent.prototype.updateEventTimer = function () {
    var e = this._properties.remainingSecondsForSelectedEvent;
    this.itxt_time.textContentVO.stringValue = O.CastleTimeStringHelper.getEventTimeString(e);
    this.disp.mc_eventTime.toolTipText = O.CastleTimeStringHelper.getEventToolTipString(e);
  };
  LongTermPointEventEventInfoComponent.prototype.initConditionTexts = function () {
    this.conditionNameTextfields = [];
    this.conditionPointsTextfields = [];
    for (var e = 0; e < LongTermPointEventEventInfoComponent.MAX_CONDITIONS; e++) {
      var t = this.disp.event_details["condition_" + e];
      var i = LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(t.txt_condition_name, new p.LocalizedTextVO(""));
      i.autoFitToBounds = true;
      i.verticalAlign = y.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      this.conditionNameTextfields.push(i);
      var n = LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(t.txt_condition_points, new d.LocalizedNumberVO(0));
      this.conditionPointsTextfields.push(n);
    }
  };
  LongTermPointEventEventInfoComponent.prototype.setupStaticTexts = function () {
    LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(this.disp.txt_coming_soon, new p.LocalizedTextVO(LongTermPointEventEventInfoComponent.TEXTID_COMING_SOON));
    LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(this.disp.event_details.txt_condition_title, new p.LocalizedTextVO(LongTermPointEventEventInfoComponent.TEXT_CONDITIONS_TITLE));
    LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(this.disp.event_details.txt_condition_title_points, new p.LocalizedTextVO(LongTermPointEventEventInfoComponent.TEXT_CONDITIONS_POINTS));
  };
  LongTermPointEventEventInfoComponent.prototype.setupPointEvents = function () {
    var e;
    var t;
    var i;
    var n = 0;
    var o = [];
    for (var s = 0; s < I.LongTermPointEventClientConst.MAX_AMOUNT_OF_TABS; ++s) {
      r.MovieClipHelper.clearMovieClip(this.disp["btn_eventTabPlaceholder_" + s]);
    }
    while (this._properties.hasNextAssetVO() && n < I.LongTermPointEventClientConst.MAX_AMOUNT_OF_TABS) {
      if (i = this._properties.getNextAssetVO()) {
        e = this.disp["btn_eventTabPlaceholder_" + n];
        (t = new (c.getDefinitionByName(i.tabName))()).gotoAndStop(1);
        e.addChild(t);
        t.toolTipText = i.eventNameTextID;
        if (!e.basicButton) {
          b.ButtonHelper.initTwoStateButton(t);
        }
        o.push(t.basicButton);
      }
      n++;
    }
    this.tabButtonGroup = new a.BasicButtonGroup(o, false);
    this._properties.resetNextEvent();
  };
  LongTermPointEventEventInfoComponent.prototype.setupSeasonSkin = function () {
    r.MovieClipHelper.clearMovieClip(this.disp.mc_evenSkinPlaceholder);
    var e = new (c.getDefinitionByName(this._properties.seasonClassName))();
    this.disp.mc_evenSkinPlaceholder.addChild(e);
  };
  LongTermPointEventEventInfoComponent.prototype.handleClickedTab = function (e) {
    if (!e || !e.basicButton || this.tabButtonGroup.buttons.indexOf(e.basicButton) == -1) {
      return false;
    }
    var t = g.int(e.parent.name.split("_").pop());
    this.tabButtonGroup.selectButton(e.basicButton);
    this.showEventInfo(this._properties.getEventAssetAtPosition(t));
    return true;
  };
  LongTermPointEventEventInfoComponent.prototype.handleEventButtonClick = function (e) {
    return !!e && !!b.ButtonHelper.isButtonEnabled(e) && e == this.eventIconButton && LongTermPointEventEventInfoComponent.openEventDialog(this._properties.selectedEvent);
  };
  LongTermPointEventEventInfoComponent.openEventDialog = function (e) {
    var t = f.CastleModel.specialEventData.getActiveEventByEventId(e);
    return !!t && (t.openDialog(true), true);
  };
  LongTermPointEventEventInfoComponent.prototype.showEventInfo = function (e) {
    var t = this._properties.isActiveEvent(e.eventID);
    LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(this.disp.txt_event_title, new p.LocalizedTextVO(e.eventNameTextID));
    this._properties.selectedEvent = e.eventID;
    this.showTeaser(e.eventID, e.teaserName);
    this.showTimerIcon(e, t);
    this.showConditions(e, t);
    this.showDescriptionText(e, t);
  };
  LongTermPointEventEventInfoComponent.prototype.showDescriptionText = function (e, t) {
    this.disp.txt_description1.visible = !t;
    this.disp.btn_showMe.visible = !t;
    if (t) {
      this.itxtDescription.textContentVO.textId = "";
      this.itxtDescription_small.textContentVO.textId = "";
    } else {
      this.itxtDescription.textContentVO.textId = e.eventDescriptionTextID;
      this.itxtDescription_small.textContentVO.textId = e.eventDescriptionTextID;
      if (this.getCurrencyForShowMeButton() != null) {
        r.MovieClipHelper.clearMovieClip(this.disp.btn_showMe.mc_icon);
        var i = new m.CollectableRenderOptions(m.CollectableRenderOptions.ICON, new n(32, 32));
        i.icon.useDropShadowIcon = true;
        var o = new _.CollectableRenderClips();
        o.addIconMc(this.disp.btn_showMe.mc_icon);
        D.CollectableRenderHelper.displaySingleItem(o, this.getCurrencyForShowMeButton(), i);
        this.disp.btn_showMe.toolTipText = "dialog_longPointsEvent_eventcamp_desc_shopbutton";
        this.disp.btn_showMe.visible = f.CastleModel.specialEventData.getActiveEventByEventId(u.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR) && e.eventID <= 0;
      } else {
        this.disp.btn_showMe.visible = false;
      }
    }
    this.updateTextPlacement(this.boosterActive);
  };
  LongTermPointEventEventInfoComponent.prototype.updateTextPlacement = function (e) {
    this.itxtDescription.visible = !e;
    this.itxtDescription_small.visible = e;
    this.boosterActive = e;
  };
  LongTermPointEventEventInfoComponent.prototype.getCurrencyForShowMeButton = function () {
    var e = f.CastleModel.specialEventData.getActiveEventByEventId(u.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    if (!e) {
      return null;
    }
    var t = e.rewardLists[0].getItemByIndex(0);
    var i = f.CastleModel.specialEventData.getActiveEventByEventId(u.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR);
    if (!i) {
      return null;
    }
    if (!l.instanceOfClass(t, "CollectableItemGenericCurrencyVO")) {
      return null;
    }
    var n = false;
    for (var o = 0; o < i.eventPackages.length; o++) {
      if (i.eventPackages[o].getCostList().getItemByIndex(0) && i.eventPackages[o].getCostList().getItemByIndex(0).itemType == C.CollectableEnum.GENERIC_CURRENCY && i.eventPackages[o].getCostList().getItemByIndex(0).id == t.id) {
        n = true;
        break;
      }
    }
    if (n) {
      return t;
    } else {
      return null;
    }
  };
  LongTermPointEventEventInfoComponent.prototype.showConditions = function (e, t) {
    this.disp.event_details.visible = t;
    this.disp.txt_coming_soon.visible = !t && e.eventID != I.LongTermPointEventClientConst.GENERAL_TAB_ID;
    if (t) {
      this.updateConditions(e);
      this.updateLinkButtonIcon(e.iconName);
    }
  };
  LongTermPointEventEventInfoComponent.prototype.showTimerIcon = function (e, t) {
    this.disp.mc_eventTime.visible = t;
    if (t) {
      var i = new (c.getDefinitionByName(e.iconName))();
      i.scaleX = i.scaleY = 50 / i.height;
      r.MovieClipHelper.clearMovieClip(this.disp.mc_eventTime.mc_currentTabEventIcon);
      this.disp.mc_eventTime.mc_currentTabEventIcon.addChild(i);
      this.updateEventTimer();
    }
  };
  LongTermPointEventEventInfoComponent.prototype.showTeaser = function (e, t) {
    r.MovieClipHelper.clearMovieClip(this.disp.mc_eventTeaserPlaceholder);
    if (!this.teaserImages.get(e)) {
      var i = new (c.getDefinitionByName(t))();
      this.teaserImages.set(e, i);
    }
    this.disp.mc_eventTeaserPlaceholder.addChild(this.teaserImages.get(e));
  };
  LongTermPointEventEventInfoComponent.prototype.updateConditions = function (e) {
    for (var t = 0; t < LongTermPointEventEventInfoComponent.MAX_CONDITIONS; t++) {
      var i = t < this._properties.eventVO.getConditionCount(e.eventID);
      this.disp.event_details["condition_" + t].visible = i;
      if (i) {
        var n = this._properties.eventVO.getCondition(e.eventID, t);
        var o = f.CastleModel.boostData.getBoosterByID(u.BoosterConst.LONGTERM_POINT_EVENT_BOOST_ID);
        var a = n.score;
        if (o.isActive) {
          a += g.int(a * (o.bonusPercentage / 100));
        }
        var s = "pointsEvent_longPointsEvent_" + e.eventName.toLowerCase() + "Invasion_condition0" + (t + 1);
        this.conditionNameTextfields[t].textContentVO.textId = s;
        this.conditionNameTextfields[t].textContentVO.textReplacements = n.textReplacements;
        this.conditionPointsTextfields[t].textContentVO.numberValue = a;
        this.conditionNameTextfields[t].verticalAlign = y.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      }
    }
  };
  LongTermPointEventEventInfoComponent.prototype.updateLinkButtonIcon = function (e) {
    r.MovieClipHelper.clearMovieClip(this.eventIconButton);
    var t = new (c.getDefinitionByName(e))();
    this.eventIconButton.addChild(t);
  };
  LongTermPointEventEventInfoComponent.prototype.showEvent = function (e = 0) {
    if (e >= this._properties.eventIDs.length) {
      e = 0;
    }
    var t = this.disp["btn_eventTabPlaceholder_" + e].getChildAt(0);
    this.tabButtonGroup.selectButton(t.basicButton);
    this.showEventInfo(this._properties.getEventAssetAtPosition(e));
  };
  Object.defineProperty(LongTermPointEventEventInfoComponent, "textFieldManager", {
    get: function () {
      return s.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventEventInfoComponent.prototype, "properties", {
    set: function (e) {
      this._properties = e;
      this.reload();
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventEventInfoComponent.__initialize_static_members = function () {
    LongTermPointEventEventInfoComponent.TEXTID_COMING_SOON = "dialog_longPointsEvent_comingSoon";
    LongTermPointEventEventInfoComponent.TEXT_CONDITIONS_TITLE = "judgement_requirements";
    LongTermPointEventEventInfoComponent.TEXT_CONDITIONS_POINTS = "generic_points";
    LongTermPointEventEventInfoComponent.MAX_CONDITIONS = 3;
  };
  return LongTermPointEventEventInfoComponent;
}();
exports.LongTermPointEventEventInfoComponent = o;
var a = require("./49.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./12.js");
var _ = require("./31.js");
var m = require("./19.js");
var f = require("./4.js");
var O = require("./27.js");
var E = require("./20.js");
var y = require("./42.js");
var b = require("./8.js");
var D = require("./25.js");
var I = require("./831.js");
o.__initialize_static_members();