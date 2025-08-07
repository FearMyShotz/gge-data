Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./27.js");
var h = require("./157.js");
var g = require("./42.js");
var C = require("./8.js");
var _ = function (e) {
  function QuestListItem(t, i, n, a = false) {
    var r = this;
    r.selected = false;
    CONSTRUCTOR_HACK;
    (r = e.call(this, new (s.getDefinitionByName("QuestListItemMC" + (a ? "_Recommended" : "")))(), n) || this)._questVO = t;
    r.questSelectCallBack = i;
    C.ButtonHelper.initBasicButton(r._headerMC, a ? 1.015 : 1.02);
    r._headerMC.mouseChildren = true;
    r.itxt_regular = m.CastleComponent.textFieldManager.registerTextField(r._headerMC.txt_regular, new c.TextVO(t.getQuestName()), new o.InternalGGSTextFieldConfigVO(true));
    r.itxt_regular.verticalAlign = g.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    r.itxt_regular.autoFitToBounds = true;
    r.itxt_regular.mouseEnabled = false;
    r.itxt_bold = m.CastleComponent.textFieldManager.registerTextField(r._headerMC.txt_bold, new c.TextVO(t.getQuestName()), new o.InternalGGSTextFieldConfigVO(true));
    r.itxt_bold.verticalAlign = g.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    r.itxt_bold.autoFitToBounds = true;
    r.itxt_bold.visible = false;
    r.itxt_bold.mouseEnabled = false;
    if (a) {
      m.CastleComponent.textFieldManager.registerTextField(r._headerMC.mc_recommended.txt_recommended, new c.TextVO(u.TextHelper.toUpperCaseLocaSafe(l.Localize.text("recommended_quest"))), new o.InternalGGSTextFieldConfigVO(true));
      r._headerMC.mc_recommended.mouseChildren = false;
      r._headerMC.mc_recommended.actLikeButton = true;
    }
    r._headerMC.bg.gotoAndStop(1);
    r._headerMC.bg.actLikeButton = true;
    r._headerMC.bg.mouseChildren = false;
    r.updateStateIcon();
    r.setQuestItemIcon();
    r._headerMC.doCache(0, 2);
    return r;
  }
  n.__extends(QuestListItem, e);
  QuestListItem.prototype.updateStateIcon = function () {
    var e = 0;
    if (this._questVO.isLocked) {
      e = QuestListItem.QUEST_STATE_LOCKED;
      this._headerMC.stateIcon.toolTipText = "dialog_questbook_questStatusFuture";
    } else if (this._questVO.isFailed) {
      e = QuestListItem.QUEST_STATE_FAILED;
      this._headerMC.stateIcon.toolTipText = "dialog_questbook_questStatusFailed";
    } else if (this._questVO.isCompleted) {
      e = QuestListItem.QUEST_STATE_COMPLETED;
      this._headerMC.stateIcon.toolTipText = "dialog_questbook_questStatusFinished";
    } else if (this._questVO.isInProgress()) {
      e = QuestListItem.QUEST_STATE_PROGRESS;
      if (this._questVO.isCampaignQuest || this._questVO.isEpicQuest) {
        this._headerMC.stateIcon.toolTipText = "dialog_questbook_questStatusActive";
      } else {
        this._headerMC.stateIcon.toolTipText = "dialog_questbook_questStatusInProgress";
      }
    } else {
      e = QuestListItem.QUEST_STATE_NEW;
      this._headerMC.stateIcon.toolTipText = "";
    }
    if (e) {
      this._headerMC.stateIcon.gotoAndStop(e);
    }
    this._headerMC.stateIcon.actLikeButton = true;
  };
  QuestListItem.prototype.setQuestItemIcon = function () {
    if (this._questVO.isCampaignQuest) {
      this._headerMC.mc_icon.gotoAndStop(6);
      this._headerMC.mc_icon.toolTipText = null;
    } else if (this._questVO.isEpicQuest) {
      this._headerMC.mc_icon.gotoAndStop(7);
      this._headerMC.mc_icon.toolTipText = null;
    } else if (this._questVO.eventID > 0) {
      this._headerMC.mc_icon.gotoAndStop(2);
      switch (this._questVO.eventID) {
        case r.EventConst.EVENTTYPE_CRUSADE_THORNKING:
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_thornKing";
          this._headerMC.mc_icon.icon_event.gotoAndStop(2);
          break;
        case r.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_bladeCoast";
          this._headerMC.mc_icon.icon_event.gotoAndStop(4);
          break;
        case r.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_underworld";
          this._headerMC.mc_icon.icon_event.gotoAndStop(6);
          break;
        case r.EventConst.EVENTTYPE_FACTION:
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_Berimond";
          this._headerMC.mc_icon.icon_event.gotoAndStop(3);
          break;
        case r.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
          this._headerMC.mc_icon.icon_event.gotoAndStop(5);
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_nomadInvasion";
          break;
        case r.EventConst.EVENTTYPE_SAMURAI_INVASION:
          this._headerMC.mc_icon.icon_event.gotoAndStop(7);
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_samuraiInvasion";
          break;
        case r.EventConst.EVENTTYPE_FACTION_INVASION:
          this._headerMC.mc_icon.icon_event.gotoAndStop(8);
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_factionInvasion";
          break;
        case r.EventConst.EVENTTYPE_EVENT_TEMPORARY_QUESTS:
          this._headerMC.mc_icon.gotoAndStop(5);
          this._headerMC.mc_icon.toolTipText = {
            t: "dialog_questbook_countdownIcon_tooltip",
            p: [p.CastleTimeStringHelper.getEventTimeString(this._questVO.duration)]
          };
          break;
        case r.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT:
          this._headerMC.mc_icon.icon_event.gotoAndStop(9);
          this._headerMC.mc_icon.toolTipText = null;
          break;
        case r.EventConst.EVENTTYPE_TEMPSERVER:
          this._headerMC.mc_icon.icon_event.gotoAndStop(10);
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_tempServer";
          break;
        case r.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
          this._headerMC.mc_icon.icon_event.gotoAndStop(11);
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_redAlienInvasion";
          break;
        case r.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
          this._headerMC.mc_icon.icon_event.gotoAndStop(12);
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_alienInvasion";
      }
    } else if (this._questVO.mapID > 0) {
      this._headerMC.mc_icon.gotoAndStop(2);
    } else if (this._questVO.isGettingXpFromThisQuest) {
      this._headerMC.mc_icon.gotoAndStop(d.CastleModel.userData.isLegend ? 4 : 1);
      this._headerMC.mc_icon.toolTipText = d.CastleModel.userData.isLegend ? "dialog_questReward_tooltip_XP_legend" : "dialog_questReward_tooltip_XP";
    } else if (this._questVO.isC2RewardQuest) {
      this._headerMC.mc_icon.gotoAndStop(3);
      this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_Ruby";
    } else {
      this._headerMC.mc_icon.gotoAndStop(8);
    }
    this._headerMC.mc_icon.mouseChildren = false;
    this._headerMC.mc_icon.actLikeButton = true;
  };
  Object.defineProperty(QuestListItem.prototype, "questVO", {
    get: function () {
      return this._questVO;
    },
    enumerable: true,
    configurable: true
  });
  QuestListItem.prototype.onClick = function (e) {
    this.select(!this.selected, true);
  };
  QuestListItem.prototype.select = function (e, t) {
    this.selected = e;
    this._headerMC.bg.gotoAndStop(this.selected ? 2 : 1);
    if (this.itxt_regular.model) {
      this.itxt_regular.visible = !this.selected;
    }
    if (this.itxt_bold && this.itxt_bold.model) {
      this.itxt_bold.visible = this.selected;
    }
    if (t) {
      this.questSelectCallBack(this, this.selected);
    }
    this._headerMC.doCache(0, 1.5);
  };
  QuestListItem.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._headerMC.removeAllEventListeners();
  };
  Object.defineProperty(QuestListItem.prototype, "campaignEventVO", {
    get: function () {
      return d.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(QuestListItem.prototype, "height", {
    get: function () {
      return this._headerMC.y + this._headerMC.bg.height + (this._headerMC.mc_recommended ? this._headerMC.mc_recommended.height : 0);
    },
    enumerable: true,
    configurable: true
  });
  QuestListItem.QUEST_STATE_NEW = 4;
  QuestListItem.QUEST_STATE_COMPLETED = 1;
  QuestListItem.QUEST_STATE_FAILED = 3;
  QuestListItem.QUEST_STATE_PROGRESS = 2;
  QuestListItem.QUEST_STATE_LOCKED = 5;
  return QuestListItem;
}(h.ACollapsibleItem);
exports.QuestListItem = _;
var m = require("./14.js");
a.classImplementsInterfaces(_, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");