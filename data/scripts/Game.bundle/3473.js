Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./21.js");
var C = require("./26.js");
var _ = require("./19.js");
var m = require("./355.js");
var f = require("./4.js");
var O = require("./27.js");
var E = require("./68.js");
var y = require("./42.js");
var b = require("./8.js");
var D = createjs.Point;
var I = function (e) {
  function EventRewardScrollItem(t) {
    var i = this;
    i.iconSize = new D(44, 41);
    i.rewardFramePlayer = 1;
    i.rewardFrameAlliance = 2;
    i.frameEmptySlot = 3;
    i._collectableRenderList = [];
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(EventRewardScrollItem, e);
  EventRewardScrollItem.prototype.show = function () {
    e.prototype.show.call(this);
    f.CastleModel.specialEventData.addEventListener(C.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.eventStarted));
    f.CastleModel.specialEventData.addEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.eventEnded));
  };
  EventRewardScrollItem.prototype.hide = function () {
    e.prototype.hide.call(this);
    f.CastleModel.timerData.removeEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEverySecond));
    f.CastleModel.specialEventData.removeEventListener(C.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.eventStarted));
    f.CastleModel.specialEventData.removeEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.eventEnded));
    this.destroyRewardList();
  };
  EventRewardScrollItem.prototype.eventEnded = function (e) {
    if (e.specialEventVO.eventId == this.vo.eventID) {
      this.icon.basicButton = null;
    }
  };
  EventRewardScrollItem.prototype.eventStarted = function (e) {
    if (e.specialEventVO.eventId == this.vo.eventID) {
      b.ButtonHelper.initBasicButton(this.icon);
    }
  };
  EventRewardScrollItem.prototype.destroyRewardList = function () {
    if (this.rewardComp) {
      this.rewardComp.removeEventListener(r.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onRewardScroll));
      this.rewardComp.destroy();
    }
    this.rewardComp = null;
  };
  Object.defineProperty(EventRewardScrollItem.prototype, "icon", {
    get: function () {
      return this.disp.icon_placeholder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventRewardScrollItem.prototype, "iconContainer", {
    get: function () {
      return this.disp.icon_placeholder.icon_container;
    },
    enumerable: true,
    configurable: true
  });
  EventRewardScrollItem.prototype.customFillItem = function () {
    this.setupEventIcon();
    this.updateEventState();
    this.setupRewards();
    this.textfieldManager.registerTextField(this.disp.txt_title, new p.LocalizedTextVO(this.vo.eventTitle)).verticalAlign = y.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  EventRewardScrollItem.prototype.setupEventIcon = function () {
    var e = m.EventIconHelper.createEventIconByEventID(this.vo.eventID, new D(this.icon.width, this.icon.height));
    if (e) {
      a.MovieClipHelper.clearMovieClip(this.iconContainer);
      this.iconContainer.addChild(e);
      b.ButtonHelper.initBasicButton(this.icon);
      this.icon.mouseChildren = false;
    }
  };
  EventRewardScrollItem.prototype.updateEventState = function () {
    var e = f.CastleModel.specialEventData.getActiveEventByEventId(this.vo.eventID);
    this.eventRunningInfoMc.visible = e != null;
    this.eventEndedInfoMc.visible = e == null;
    if (e) {
      this.setupRunningEvent();
    } else {
      this.setupEndedEvent();
    }
  };
  EventRewardScrollItem.prototype.setupRewards = function () {
    this.destroyRewardList();
    this.rewardComp = new T.PaginatedCollectableRenderListWrapper(this.disp, this.vo.rewards, this._collectableRenderList, EventRewardScrollItem.numVisibleItems, this.disp.btn_left, this.disp.btn_right, "item_", "mc_item", "parent.btn_info", "icon_container", "parent.txt_text", "parent.mc_textBackground", _.CollectableRenderOptions.SET_DEFAULT, this.iconSize);
    this.rewardComp.addEventListener(r.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onRewardScroll));
    this.setBackgroundForRewards();
  };
  EventRewardScrollItem.prototype.onRewardScroll = function (e) {
    this.setBackgroundForRewards();
  };
  EventRewardScrollItem.prototype.setBackgroundForRewards = function () {
    var e;
    var t;
    var i = 0;
    for (var n = this.rewardComp.currentPage * EventRewardScrollItem.numVisibleItems, o = 0, a = n; a < n + EventRewardScrollItem.numVisibleItems; a++) {
      (e = this.disp.getChildByName("item_" + o)).visible = true;
      if (a >= this.vo.rewards.length) {
        this.showEmptySlot(e);
        o++;
      } else {
        this.resetSlot(e);
        t = this.vo.rewards.getItemByIndex(a);
        i = h.int(t.grantType == u.RewardConst.ALLIANCE ? this.rewardFrameAlliance : this.rewardFramePlayer);
        e.frame.gotoAndStop(i);
        o++;
      }
    }
  };
  EventRewardScrollItem.prototype.resetSlot = function (e) {
    e.btn_info.visible = true;
  };
  EventRewardScrollItem.prototype.showEmptySlot = function (e) {
    a.MovieClipHelper.clearMovieClip(e.mc_item.icon_container);
    e.txt_text.text = "";
    e.btn_info.visible = false;
    e.mc_textBackground.visible = false;
    e.frame.gotoAndStop(this.frameEmptySlot);
  };
  EventRewardScrollItem.prototype.setupEndedEvent = function () {
    b.ButtonHelper.enableButton(this.icon, false);
    this.icon.useFilters(E.BitmapFilterHelper.NO_FILTER);
    this.icon.toolTipText = "dialog_combinedReward_eventOver";
    this.textfieldManager.registerTextField(this.eventEndedInfoMc.txt_event_ended, new p.LocalizedTextVO("dialog_combinedReward_eventOver"));
    this.textfieldManager.registerTextField(this.eventEndedInfoMc.txt_rank_title, new p.LocalizedTextVO("rank"));
    this.textfieldManager.registerTextField(this.eventEndedInfoMc.txt_points_title, new p.LocalizedTextVO("generic_points"));
    var e = h.int(this.vo.topXCount > 0 ? this.vo.topXCount : this.vo.rank);
    this.textfieldManager.registerTextField(this.eventEndedInfoMc.txt_rank, new d.LocalizedNumberVO(e));
    this.textfieldManager.registerTextField(this.eventEndedInfoMc.txt_points, new d.LocalizedNumberVO(this.vo.score));
  };
  EventRewardScrollItem.prototype.setupRunningEvent = function () {
    this.textfieldManager.registerTextField(this.eventRunningInfoMc.txt_description, new p.LocalizedTextVO("dialog_combinedReward_eventInProgress")).verticalAlign = y.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.icon.toolTipText = "panel_action_event";
    b.ButtonHelper.enableButton(this.icon, true);
    f.CastleModel.timerData.addEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEverySecond));
    this.updateRemainingEventTime();
  };
  EventRewardScrollItem.prototype.onTickEverySecond = function (e) {
    this.updateRemainingEventTime();
  };
  EventRewardScrollItem.prototype.updateRemainingEventTime = function () {
    var e = f.CastleModel.specialEventData.getActiveEventByEventId(this.vo.eventID);
    if (!e) {
      f.CastleModel.timerData.removeEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEverySecond));
      this.setupEndedEvent();
      return;
    }
    var t = e.remainingEventTimeInSeconds;
    O.CastleTimeStringHelper.setEventTime(this.eventRunningInfoMc.txt_remaining_time, t);
  };
  EventRewardScrollItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    if (b.ButtonHelper.isButtonEnabled(t.target) && t.target == this.icon) {
      var i = l.castAs(f.CastleModel.specialEventData.getActiveEventByEventId(this.vo.eventID), "ASpecialEventVO");
      if (i) {
        i.openDialog();
      }
    }
  };
  Object.defineProperty(EventRewardScrollItem.prototype, "eventEndedInfoMc", {
    get: function () {
      return this.disp.mc_event_complete_infos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventRewardScrollItem.prototype, "eventRunningInfoMc", {
    get: function () {
      return this.disp.mc_running_event_infos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventRewardScrollItem.prototype, "vo", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventRewardScrollItem.prototype, "textfieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  EventRewardScrollItem.__initialize_static_members = function () {
    EventRewardScrollItem.numVisibleItems = 5;
  };
  return EventRewardScrollItem;
}(s.ScrollItem);
exports.EventRewardScrollItem = I;
var T = require("./1061.js");
c.classImplementsInterfaces(I, "MovieClip");
I.__initialize_static_members();