Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./100.js");
var u = require("./1.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./23.js");
var C = require("./23.js");
var _ = require("./18.js");
var m = require("./51.js");
var f = require("./58.js");
var O = require("./271.js");
var E = require("./418.js");
var y = require("./91.js");
var b = require("./199.js");
var D = require("./261.js");
var I = require("./463.js");
var T = require("./4.js");
var v = require("./24.js");
var S = require("./543.js");
var A = require("./41.js");
var L = require("./131.js");
var P = require("./3341.js");
var M = function (e) {
  function CastleQuestStartPanel() {
    var t = this;
    t._dontShowSpeechBubble = false;
    t.questUserSawBefore = null;
    t._questReminderWasShown = false;
    t._showQuestProgressBubble = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, new Library.CastleInterfaceElements.QuestStartPanel()) || this;
  }
  n.__extends(CastleQuestStartPanel, e);
  CastleQuestStartPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.questStartPanel.mc_newQuest.mouseChildren = false;
    this.questStartPanel.mc_newQuest.basicButton = new o.BasicButton(this.questStartPanel.mc_newQuest);
    this.questStartPanel.btn_questGiver.mouseChildren = false;
    this.questStartPanel.btn_questGiver.basicButton = new o.BasicButton(this.questStartPanel.btn_questGiver);
    this.questStartPanel.btn_questBook.txt_questCount.textColor = 16777215;
    this.itxt_questCount = this.textFieldManager.registerTextField(this.questStartPanel.btn_questBook.txt_questCount, new h.TextVO(""));
    this.itxt_quest_txt_title = this.textFieldManager.registerTextField(this.questStartPanel.mc_newQuest.txt_title, new p.LocalizedTextVO(""));
    if (u.MobileHelper.isScreenTooSmall()) {
      this.questStartPanel.mc_newQuest.scaleX = this.questStartPanel.mc_newQuest.scaleY = 0.8;
      this.questStartPanel.btn_questBook.scaleX = this.questStartPanel.btn_questBook.scaleY = 0.8;
    }
    this.questStartPanel.mc_newQuest.doCache();
    this.questStartPanel.btn_questBook.doCache();
  };
  CastleQuestStartPanel.prototype.destroy = function () {
    T.CastleModel.settingsData.removeEventListener(I.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onChatChange));
    T.CastleModel.questData.removeEventListener(D.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    T.CastleModel.questData.removeEventListener(D.CastleQuestDataEvent.QUEST_PROGRESS, this.bindFunction(this.onQuestProgress));
    T.CastleModel.questData.removeEventListener(D.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestFinished));
    T.CastleModel.questData.removeEventListener(D.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onGetQuestList));
    T.CastleModel.settingsData.removeEventListener(I.SettingsEvent.QUESTREMINDER_STATE_CHANGED, this.bindFunction(this.onQuestReminderStateChanged));
    this.controller.removeEventListener(b.CastleDialogEvent.CLOSE_QUESTINFO, this.bindFunction(this.onClosedQuestInfo));
    this.controller.removeEventListener(y.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.hideBubbleOnWorldmap));
  };
  CastleQuestStartPanel.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    T.CastleModel.settingsData.addEventListener(I.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onChatChange));
    T.CastleModel.questData.addEventListener(D.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    T.CastleModel.questData.addEventListener(D.CastleQuestDataEvent.QUEST_PROGRESS, this.bindFunction(this.onQuestProgress));
    T.CastleModel.questData.addEventListener(D.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestFinished));
    T.CastleModel.questData.addEventListener(D.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onGetQuestList));
    T.CastleModel.settingsData.addEventListener(I.SettingsEvent.QUESTREMINDER_STATE_CHANGED, this.bindFunction(this.onQuestReminderStateChanged));
    this.controller.addEventListener(b.CastleDialogEvent.CLOSE_QUESTINFO, this.bindFunction(this.onClosedQuestInfo));
    this.controller.addEventListener(y.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.hideBubbleOnWorldmap));
  };
  CastleQuestStartPanel.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    T.CastleModel.settingsData.removeEventListener(I.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onChatChange));
    T.CastleModel.questData.removeEventListener(D.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    T.CastleModel.questData.removeEventListener(D.CastleQuestDataEvent.QUEST_PROGRESS, this.bindFunction(this.onQuestProgress));
    T.CastleModel.questData.removeEventListener(D.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestFinished));
    T.CastleModel.questData.removeEventListener(D.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onGetQuestList));
    T.CastleModel.settingsData.removeEventListener(I.SettingsEvent.QUESTREMINDER_STATE_CHANGED, this.bindFunction(this.onQuestReminderStateChanged));
    this.controller.removeEventListener(b.CastleDialogEvent.CLOSE_QUESTINFO, this.bindFunction(this.onClosedQuestInfo));
    this.controller.removeEventListener(y.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.hideBubbleOnWorldmap));
  };
  CastleQuestStartPanel.prototype.onClosedQuestInfo = function (e) {
    this.questUserSawBefore = e.params[0];
    this.show();
  };
  CastleQuestStartPanel.prototype.onQuestStart = function (e) {
    if (!e.quest.hidden) {
      if (e.quest || !T.CastleModel.tutorialData.isTutorialFinished()) {
        if (e.quest && e.quest.isStarterQuest) {
          this._focusQuestVO = e.quest;
          this.showSpeechBubble("panel_quest_newMessage");
          this.showQuestGiverById(e.quest.questGiverID);
        } else {
          if (T.CastleModel.questData.activeQuestCount == 1 && T.CastleModel.userData.userLevel < f.ClientConstLevelRestrictions.MIN_LEVEL_TO_SHOW_QUESTBOOK_WHEN_ONLY_ONE_QUEST_ACTIVE) {
            this._focusQuestVO = T.CastleModel.questData.getCurrentSingleQuest();
          }
          if (!this.questUserSawBefore || this._focusQuestVO && this.questUserSawBefore && this._focusQuestVO.questID != this.questUserSawBefore.questID) {
            this.showSpeechBubble("panel_quest_newQuest");
          } else {
            this.hideSpeechBubble();
          }
          if (T.CastleModel.questData.isFirstQuestAfterStarter) {
            if (T.CastleModel.userData.userLevel > f.ClientConstLevelRestrictions.MIN_LEVEL_TO_AUTO_SHOW_QEUST_INFO) {
              V.CastleDialogHandler.getInstance().registerDefaultDialogs(w.CastleQuestDialog, new P.CastleQuestDialogProperties(e.quest));
            }
            if (T.CastleModel.questData.activeQuestCount > 1) {
              this._focusQuestVO = null;
            }
            this.hideSpeechBubble();
          }
        }
      } else {
        this.hide();
      }
    }
  };
  CastleQuestStartPanel.prototype.onQuestProgress = function (e) {
    if (!e.quest.hidden && !e.quest.isObjective) {
      this.initPanel();
      if (!this._focusQuestVO || !this._focusQuestVO.isStarterQuest) {
        this._focusQuestVO = e.quest;
        this.showSpeechBubble("panel_quest_progress");
        this.itxt_questCount.textContentVO.stringValue = d.Localize.integer(T.CastleModel.questData.activeQuestCount) + "";
        this._showQuestProgressBubble = true;
        this.questStartPanel.btn_questBook.doCache();
      }
    }
  };
  CastleQuestStartPanel.prototype.onQuestFinished = function (e) {
    this._focusQuestVO = null;
    this.itxt_questCount.textContentVO.stringValue = d.Localize.integer(T.CastleModel.questData.activeQuestCount) + "";
    this.questStartPanel.btn_questBook.doCache();
  };
  CastleQuestStartPanel.prototype.onGetQuestList = function (e) {
    this._focusQuestVO &&= T.CastleModel.questData.getActiveQuestByID(this._focusQuestVO.questID);
    if (T.CastleModel.questData.getCurrentStarterQuestVO()) {
      this._focusQuestVO = T.CastleModel.questData.getCurrentStarterQuestVO();
      this.showSpeechBubble("panel_quest_newMessage");
    } else if (T.CastleModel.questData.activeQuestCount == 1) {
      this._focusQuestVO = T.CastleModel.questData.getCurrentSingleQuest();
    }
    this.initPanel();
  };
  CastleQuestStartPanel.prototype.onQuestReminderStateChanged = function (e) {
    if (!T.CastleModel.settingsData.questReminderActive) {
      this.hideSpeechBubble();
    }
    this._questReminderWasShown = false;
    this.initFocus();
  };
  CastleQuestStartPanel.prototype.initFocus = function () {
    var e = T.CastleModel.questData.getCurrentStarterQuestVO();
    if (e) {
      this._focusQuestVO = e;
      this.showSpeechBubble("panel_quest_newMessage");
    } else if (T.CastleModel.questData.activeQuestCount == 1) {
      this._focusQuestVO = T.CastleModel.questData.getCurrentSingleQuest();
      if (!this.questUserSawBefore || this._focusQuestVO && this._focusQuestVO.questID != this.questUserSawBefore.questID) {
        this.showSpeechBubble("panel_quest_newQuest");
      } else {
        this.hideSpeechBubble();
      }
    } else {
      this._focusQuestVO = null;
      if (T.CastleModel.settingsData.questReminderActive && !this._questReminderWasShown) {
        this.showSpeechBubble("panel_quest_openQuests");
        this._questReminderWasShown = true;
      } else if (this._showQuestProgressBubble) {
        this.showSpeechBubble("panel_quest_progress");
      } else {
        this.hideSpeechBubble();
      }
    }
  };
  CastleQuestStartPanel.prototype.initPanel = function () {
    if (T.CastleModel.tutorialData.isInTutorial() && T.CastleModel.questData.activeQuestCount < 1) {
      this.disp.visible = false;
    } else {
      this.disp.visible = true;
    }
    var e = T.CastleModel.questData.getCurrentStarterQuestVO();
    if (e) {
      this.showQuestGiverById(e.questGiverID);
    } else {
      e = T.CastleModel.questData.getCurrentSingleQuest();
      if (T.CastleModel.questData.activeQuestCount == 1 && e) {
        this.showQuestGiverById(e.questGiverID);
      } else {
        this.showQuestBook();
      }
    }
    if (e && e.autoShow) {
      r.CommandController.instance.executeCommand(R.IngameClientCommands.AUTO_SHOW_START_QUEST_DIALOG, e);
    }
  };
  CastleQuestStartPanel.prototype.setQuestGiverSymbol = function (e) {
    var t = this;
    l.MovieClipHelper.clearMovieClip(this.questStartPanel.btn_questGiver);
    A.CastleMovieClipHelper.uncacheSafe(this.questStartPanel.btn_questGiver);
    var i;
    var n = T.CastleModel.questData.getQuestGiverSmallClassName(e, T.CastleModel.userData.hasAlternativeQuestGiver);
    if (a.BasicModel.basicLoaderData.wasAssetLoaded("QuestGiverSmall_" + m.ClientConstCharacter.CHAR_ID_UNKNOWN)) {
      var o = u.getDefinitionByName("QuestGiverSmall_" + m.ClientConstCharacter.CHAR_ID_UNKNOWN + "_Button");
      i = new v.CastleGoodgameExternalClip(n + "_Button", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(n), null, 0, false, o);
    } else {
      i = new v.CastleGoodgameExternalClip(n + "_Button", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(n), null, 0, false);
    }
    i.clipSizeComponent = new s.ClipSizeComponent(80, 200);
    this.questStartPanel.btn_questGiver.addChild(i.asDisplayObject());
    i.doWhenLoaded(this.questStartPanel.btn_questGiver.bindFunction(function () {
      t.questStartPanel.btn_questGiver.doCache(0, x.CastleLayoutManager.UI_SCALE_FACTOR);
    }));
  };
  CastleQuestStartPanel.prototype.showQuestGiverById = function (e) {
    if (T.CastleModel.tutorialData.isTutorialFinished()) {
      this.questStartPanel.btn_questBook.visible = false;
      A.CastleMovieClipHelper.uncacheSafe(this.questStartPanel.btn_questBook);
      this.setQuestGiverSymbol(e);
    } else {
      this.showQuestBook();
    }
  };
  CastleQuestStartPanel.prototype.showQuestBook = function () {
    l.MovieClipHelper.clearMovieClip(this.questStartPanel.btn_questGiver);
    A.CastleMovieClipHelper.uncacheSafe(this.questStartPanel.btn_questGiver);
    this.questStartPanel.btn_questBook.visible = true;
    if (this.itxt_questCount && this.itxt_questCount.textContentVO) {
      this.itxt_questCount.textContentVO.stringValue = d.Localize.integer(T.CastleModel.questData.activeQuestCount) + "";
    } else {
      this.itxt_questCount = this.textFieldManager.registerTextField(this.questStartPanel.btn_questBook.txt_questCount, new h.TextVO("" + d.Localize.integer(T.CastleModel.questData.activeQuestCount)), new c.InternalGGSTextFieldConfigVO(true));
    }
    this.questStartPanel.btn_questBook.toolTipText = "quests";
    this.questStartPanel.btn_questBook.doCache();
  };
  CastleQuestStartPanel.prototype.show = function () {
    e.prototype.show.call(this);
    this.initPanel();
    this.initFocus();
  };
  CastleQuestStartPanel.prototype.showWithoutSpeechBubble = function () {
    this._dontShowSpeechBubble = true;
    this.show();
    this._dontShowSpeechBubble = false;
  };
  CastleQuestStartPanel.prototype.showSpeechBubble = function (e) {
    if (!this.questStartPanel.btn_questBook.visible && this.questStartPanel.btn_questGiver.numChildren == 0 || this._dontShowSpeechBubble) {
      this.hideSpeechBubble();
    } else {
      this.itxt_questCount.textContentVO.stringValue = d.Localize.integer(T.CastleModel.questData.activeQuestCount);
      this.itxt_quest_txt_title.textContentVO.textId = e;
      this.questStartPanel.btn_questBook.doCache();
      this.showNewQuestBubble();
    }
  };
  CastleQuestStartPanel.prototype.showNewQuestBubble = function () {
    var e = T.CastleModel.tutorialData.isTutorialActive;
    var t = {
      autoAlpha: 1,
      ease: g.Linear.easeIn
    };
    if (!e) {
      t.onComplete = this.bindFunction(this.hideNewQuestBubble);
      t.onCompleteParams = [true];
    }
    C.TweenMax.killTweensOf(this.questStartPanel.mc_newQuest);
    C.TweenMax.to(this.questStartPanel.mc_newQuest, CastleQuestStartPanel.QUEST_BUBBLE_ANIMATION_TIME, t);
  };
  CastleQuestStartPanel.prototype.hideNewQuestBubble = function (e = false) {
    C.TweenMax.killTweensOf(this.questStartPanel.mc_newQuest);
    if (!T.CastleModel.tutorialData.isTutorialActive && e) {
      C.TweenMax.to(this.questStartPanel.mc_newQuest, CastleQuestStartPanel.QUEST_BUBBLE_ANIMATION_TIME, {
        delay: 4,
        autoAlpha: 0,
        ease: g.Linear.easeOut
      });
    } else {
      this.questStartPanel.mc_newQuest.visible = false;
    }
  };
  CastleQuestStartPanel.prototype.hideSpeechBubble = function () {
    this.hideNewQuestBubble();
    this.itxt_quest_txt_title.clearText();
  };
  CastleQuestStartPanel.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.questStartPanel.btn_questGiver:
      case this.questStartPanel.mc_newQuest:
      case this.questStartPanel.btn_questBook:
        this.onClickQuestPanel();
    }
  };
  CastleQuestStartPanel.prototype.onClickQuestPanel = function () {
    var e = false;
    if (this._focusQuestVO) {
      if (this._focusQuestVO.isStarterQuest) {
        V.CastleDialogHandler.getInstance().registerDefaultDialogs(B.CastleStartQuestDialog, new S.CastleStartQuestDialogProperties(this._focusQuestVO));
      } else {
        if (this._showQuestProgressBubble) {
          V.CastleDialogHandler.getInstance().registerDefaultDialogs(w.CastleQuestDialog, new P.CastleQuestDialogProperties(this._focusQuestVO));
        } else {
          e = true;
          V.CastleDialogHandler.getInstance().registerDefaultDialogs(w.CastleQuestDialog, new P.CastleQuestDialogProperties());
        }
        if (T.CastleModel.questData.activeQuestCount > 1) {
          this._focusQuestVO = null;
        }
      }
    } else if (T.CastleModel.questData.activeQuestCount >= 1) {
      e = true;
      V.CastleDialogHandler.getInstance().registerDefaultDialogs(w.CastleQuestDialog, new P.CastleQuestDialogProperties());
    }
    this.hideSpeechBubble();
    this._showQuestProgressBubble = false;
    if (e) {
      T.CastleModel.smartfoxClient.sendCommandVO(new E.C2SClientSideTrackingVO(O.ClientConstTracking.TRACKING_RECOMMENDED_QUEST, 0));
    }
  };
  CastleQuestStartPanel.prototype.onChatChange = function (e) {
    this.updatePosition();
  };
  CastleQuestStartPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = this.disp.stage.stageHeight + CastleQuestStartPanel.DAILY_QUEST_SPACE_OFFSET;
      this.disp.x = this.disp.stage.stageWidth;
      if (this.env.hasNetworkBuddies) {
        this.disp.y -= _.ClientConstCastle.BUDDY_PANEL_HEIGHT;
      }
      if (CastleQuestStartPanel.movePanelUp()) {
        this.disp.y += _.ClientConstCastle.SEASON_PANEL_OFFSET;
      }
      if (u.MobileHelper.isScreenTooSmall() && u.MobileHelper.isLandscape()) {
        this.disp.x -= 20;
        this.disp.y += 20;
      }
    }
  };
  CastleQuestStartPanel.movePanelUp = function () {
    return !!x.CastleLayoutManager.getInstance().isInTreasureEvent && T.CastleModel.settingsData.miniChatVisible;
  };
  CastleQuestStartPanel.prototype.hideBubbleOnWorldmap = function (e) {
    if (x.CastleLayoutManager.getInstance().currentState != x.CastleLayoutManager.STATE_ISO && this.questStartPanel.mc_newQuest.visible) {
      this.questStartPanel.mc_newQuest.visible = false;
      this.itxt_quest_txt_title = this.textFieldManager.registerTextField(this.questStartPanel.mc_newQuest.txt_title, new p.LocalizedTextVO(""));
    }
  };
  Object.defineProperty(CastleQuestStartPanel.prototype, "questStartPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestStartPanel.__initialize_static_members = function () {
    CastleQuestStartPanel.NAME = "CastleQuestStartPanel";
    CastleQuestStartPanel.DAILY_QUEST_SPACE_OFFSET = 15;
    CastleQuestStartPanel.QUEST_BUBBLE_ANIMATION_TIME = 0.8;
  };
  return CastleQuestStartPanel;
}(L.CastlePanel);
exports.CastleQuestStartPanel = M;
var R = require("./29.js");
var V = require("./9.js");
var x = require("./17.js");
var w = require("./653.js");
var B = require("./461.js");
M.__initialize_static_members();