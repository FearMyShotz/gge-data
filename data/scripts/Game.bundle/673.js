Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./23.js");
var c = require("./23.js");
var u = require("./23.js");
var d = require("./231.js");
var p = require("./18.js");
var h = require("./58.js");
var g = require("./585.js");
var C = require("./91.js");
var _ = require("./102.js");
var m = require("./140.js");
var f = require("./32.js");
var O = require("./527.js");
var E = require("./161.js");
var y = require("./463.js");
var b = require("./90.js");
var D = require("./71.js");
var I = require("./92.js");
var T = require("./4.js");
var v = require("./710.js");
var S = require("./136.js");
var A = require("./1848.js");
var L = require("./8.js");
var P = function (e) {
  function CastleMultiInfoPanel() {
    var t = this;
    t._state = -1;
    t.lastState = 0;
    t._CONTENT_WINDOW_TWEEN_VALUE = 48;
    t._isUp = false;
    t._speechBubbleIsUp = false;
    t._isMessageSpeechBubble = true;
    t._oldUnreadMessageCount = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleInterfaceElements.MultiInfoPanel_Relicus()) || this)._isUp = true;
    return t;
  }
  n.__extends(CastleMultiInfoPanel, e);
  CastleMultiInfoPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.initComponents();
    this.setState(CastleMultiInfoPanel.STATE_NO_INFO, false);
    this.setBtns();
    this.setVersionInfo();
    this.initSpeechBubble();
    this._buttons = new w.PanelButtonsComponent(this.multiInfoPanel.mc_buttons, Library.CastleInterfaceElements.MultiInfoPanelButton, w.PanelButtonsComponent.BUILD_DIRECTION_RIGHT);
    this.multiInfoPanel.mc_buttons.mc_backgroundDeco.visible = false;
    if (W.MobileHelper.isScreenTooSmall()) {
      this.multiInfoPanel.scaleX = this.multiInfoPanel.scaleY = 0.8;
    }
  };
  CastleMultiInfoPanel.prototype.show = function () {
    if (this.hasLevelForShow()) {
      this._chatComponent.onShow();
      this._buttons.onShow();
      this.buildButtons();
      this.setMessagesCounter();
      e.prototype.show.call(this);
      if (W.MobileHelper.isScreenTooSmall()) {
        this._isUp = true;
        this.togglePanel();
      }
      this.allowCaching = true;
    } else {
      this.hide();
    }
  };
  CastleMultiInfoPanel.prototype.hide = function () {
    this._buttons.onHide();
    this._chatComponent.onHide();
    e.prototype.hide.call(this);
  };
  CastleMultiInfoPanel.prototype.addEventListenerOnInit = function () {
    e.prototype.addEventListenerOnInit.call(this);
    this.controller.addEventListener(I.IsoEvent.SHOW_PANEL_INFO, this.bindFunction(this.onShowBuildingInfo));
    this.controller.addEventListener(I.IsoEvent.HIDE_PANEL_INFO, this.bindFunction(this.onHideInfo));
    this.controller.addEventListener(b.CastleWorldmapEvent.SHOW_PLAYER_INFO, this.bindFunction(this.onShowMapObjectInfo));
    this.controller.addEventListener(C.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.controller.addEventListener(D.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onChangedCastleParameters));
    this.controller.addEventListener(D.AreaDataEvent.ON_CONSTRUCTION_ITEMS_UPDATED, this.bindFunction(this.onConstructionItemsUpdated));
    this.controller.addEventListener(f.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    this.controller.addEventListener(E.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    this.controller.addEventListener(m.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.setMessagesCounter));
    T.CastleModel.rewardHubData.addEventListener(J.RewardHubPanelNotificationEvent.NEW_REWARDS_ARRIVED, this.bindFunction(this.setRewardCounter));
  };
  CastleMultiInfoPanel.prototype.removeEventListenerOnDestroy = function () {
    this.controller.removeEventListener(m.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.setMessagesCounter));
    this.controller.removeEventListener(b.CastleWorldmapEvent.SHOW_PLAYER_INFO, this.bindFunction(this.onShowMapObjectInfo));
    this.controller.removeEventListener(I.IsoEvent.SHOW_PANEL_INFO, this.bindFunction(this.onShowBuildingInfo));
    this.controller.removeEventListener(I.IsoEvent.HIDE_PANEL_INFO, this.bindFunction(this.onHideInfo));
    this.controller.removeEventListener(C.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.controller.removeEventListener(D.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onChangedCastleParameters));
    this.controller.removeEventListener(D.AreaDataEvent.ON_CONSTRUCTION_ITEMS_UPDATED, this.bindFunction(this.onConstructionItemsUpdated));
    this.controller.removeEventListener(f.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    this.controller.removeEventListener(E.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    T.CastleModel.chatData.removeEventListener(g.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewMessageArrived));
    T.CastleModel.chatData.removeEventListener(g.CastleChatEvent.OPEN_CHAT, this.bindFunction(this.onOtherChatIsOpened));
    T.CastleModel.allianceData.removeEventListener(_.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceUpdate));
    T.CastleModel.settingsData.removeEventListener(y.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onSettingChanged));
    T.CastleModel.vipData.removeEventListener(O.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onVipDataChanged));
    T.CastleModel.rewardHubData.removeEventListener(J.RewardHubPanelNotificationEvent.NEW_REWARDS_ARRIVED, this.bindFunction(this.setRewardCounter));
    e.prototype.removeEventListenerOnDestroy.call(this);
  };
  CastleMultiInfoPanel.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    T.CastleModel.chatData.addEventListener(g.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewMessageArrived));
    T.CastleModel.chatData.addEventListener(g.CastleChatEvent.OPEN_CHAT, this.bindFunction(this.onOtherChatIsOpened));
    T.CastleModel.allianceData.addEventListener(_.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceUpdate));
    T.CastleModel.settingsData.addEventListener(y.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onSettingChanged));
    T.CastleModel.vipData.addEventListener(O.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onVipDataChanged));
  };
  CastleMultiInfoPanel.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._buttons.destroy();
  };
  CastleMultiInfoPanel.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    T.CastleModel.chatData.removeEventListener(g.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewMessageArrived));
    T.CastleModel.chatData.removeEventListener(g.CastleChatEvent.OPEN_CHAT, this.bindFunction(this.onOtherChatIsOpened));
    T.CastleModel.allianceData.removeEventListener(_.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceUpdate));
    T.CastleModel.settingsData.removeEventListener(y.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onSettingChanged));
    T.CastleModel.vipData.removeEventListener(O.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onVipDataChanged));
  };
  CastleMultiInfoPanel.prototype.initComponents = function () {
    this.multiInfoPanel.contentWindow.y += 2;
    this.buildingInfoLayer = new B.CastleMultiInfoBuildingLayer(this.multiInfoPanel.contentWindow.mc_info);
    this.mapObjectInfoLayer = new j.WorldMapInfoLayer(this.multiInfoPanel.contentWindow.mc_playerinfo, this);
    this.multiInfoPanel.contentWindow.mc_chat.addChild(this.multiInfoPanel.contentWindow.mc_chat.txt_input);
    this._chatComponent = new R.CastleChatComponent(new v.CastleChatVO(this.multiInfoPanel.contentWindow.mc_chat.txt_chat, this.multiInfoPanel.contentWindow.mc_chat.txt_input, this.multiInfoPanel.contentWindow.mc_chat.btn_enter, this.multiInfoPanel.contentWindow.mc_chat.mc_blockChat, this.multiInfoPanel.contentWindow.mc_chat.btn_up, this.multiInfoPanel.contentWindow.mc_chat.btn_down, this.multiInfoPanel.contentWindow.mc_chat.btn_slider, this.multiInfoPanel.contentWindow.mc_chat.mc_sliderLine), this);
  };
  CastleMultiInfoPanel.prototype.buildButtons = function () {
    this._buttons.switchCreationMode(true);
    this._buttons.addMainButton(new H.RankingPanelButton()).defineSubButtons([new k.FamePanelButton(), new F.AchievementPanelButton()]);
    this._buttons.addMainButton(new N.AlliancePanelButton());
    this._buttons.addMainButton(new G.MessagePanelButton());
    this._buttons.addMainButton(new z.ABGRankingPanelButton());
    this._buttons.addMainButton(new q.RewardHubPanelButton()).defineSubButtons([new U.LostAndFoundPanelButton()]);
    this._buttons.switchCreationMode(false);
  };
  CastleMultiInfoPanel.prototype.initSpeechBubble = function () {
    this.multiInfoPanel.mc_speechBubble.visible = false;
  };
  CastleMultiInfoPanel.prototype.setVersionInfo = function () {
    this.textFieldManager.registerTextField(this.multiInfoPanel.txt_build, new a.TextVO(K.CastleVersionInformation.versionInstance.versionText.replace(/\n/g, "")), new o.InternalGGSTextFieldConfigVO(true));
  };
  CastleMultiInfoPanel.prototype.setBtns = function () {
    this.multiInfoPanel.contentWindow.btn_infos.toolTipText = "panel_multiinfo_infowindow";
    this.multiInfoPanel.contentWindow.btn_chat.toolTipText = "allianceChat";
    this.multiInfoPanel.contentWindow.btn_showHide.selectButton = this._isUp;
    this.setInfoBtn();
    this.setChatBtn();
  };
  CastleMultiInfoPanel.prototype.setBGTransparency = function (e) {
    this.multiInfoPanel.contentWindow.mc_pattern.alpha = e;
  };
  CastleMultiInfoPanel.prototype.setInfoBtn = function () {
    this.multiInfoPanel.contentWindow.btn_infos.visible = T.CastleModel.userData.isInAlliance && !T.CastleModel.settingsData.miniChatVisible;
  };
  CastleMultiInfoPanel.prototype.setChatBtn = function () {
    this.multiInfoPanel.contentWindow.btn_chat.visible = T.CastleModel.userData.isInAlliance && !T.CastleModel.settingsData.miniChatVisible;
  };
  CastleMultiInfoPanel.prototype.markChatButton = function (e) {
    var t = r.int(e && !T.CastleModel.chatData.isBigAllianceChatOpen ? 2 : 1);
    this.multiInfoPanel.contentWindow.btn_chat.icon.gotoAndStop(t);
  };
  CastleMultiInfoPanel.prototype.togglePanel = function () {
    if (this._isUp) {
      l.TweenMax.fromTo(this.multiInfoPanel.contentWindow, 0.2, {
        y: -this._CONTENT_WINDOW_TWEEN_VALUE
      }, {
        y: CastleMultiInfoPanel.PANEL_HEIGHT - this._CONTENT_WINDOW_TWEEN_VALUE,
        ease: c.Sine.easeIn,
        onUpdate: this.bindFunction(this.onTweenUpdate),
        onComplete: this.bindFunction(this.onTweenComplete)
      });
      this.multiInfoPanel.contentWindow.btn_chat.selectButton = false;
      this.multiInfoPanel.contentWindow.btn_infos.selectButton = false;
    } else {
      l.TweenMax.fromTo(this.multiInfoPanel.contentWindow, 0.2, {
        y: CastleMultiInfoPanel.PANEL_HEIGHT - this._CONTENT_WINDOW_TWEEN_VALUE
      }, {
        y: -this._CONTENT_WINDOW_TWEEN_VALUE,
        ease: c.Sine.easeIn,
        onUpdate: this.bindFunction(this.onTweenUpdate),
        onComplete: this.bindFunction(this.onTweenComplete)
      });
      if (this._state == CastleMultiInfoPanel.STATE_CHAT) {
        this.markChatButton(false);
        this.multiInfoPanel.contentWindow.mc_chat.visible = true;
      }
      this.multiInfoPanel.contentWindow.btn_chat.selectButton = this._state == CastleMultiInfoPanel.STATE_CHAT;
      this.multiInfoPanel.contentWindow.btn_infos.selectButton = this._state != CastleMultiInfoPanel.STATE_CHAT;
    }
    this._isUp = !this._isUp;
    this.lockPanel();
  };
  CastleMultiInfoPanel.prototype.onTweenUpdate = function () {
    if (this._allowCaching && this.dispToCache.cacheCanvas) {
      this.dispToCache.doCache();
    }
  };
  CastleMultiInfoPanel.prototype.onTweenComplete = function () {
    this.unLockPanel();
    this.multiInfoPanel.contentWindow.btn_showHide.selectButton = this._isUp;
    this.multiInfoPanel.contentWindow.mc_chat.visible = this._state == CastleMultiInfoPanel.STATE_CHAT && this._isUp;
    if (this._allowCaching && this.dispToCache.cacheCanvas) {
      this.dispToCache.doCache();
    }
  };
  CastleMultiInfoPanel.prototype.setState = function (e, t = true) {
    if (!this._isUp && t) {
      this.togglePanel();
    }
    if (this._state != e) {
      switch (e) {
        case CastleMultiInfoPanel.STATE_CHAT:
          this.mapObjectInfoLayer.hide();
          this.buildingInfoLayer.hide();
          this.setBGTransparency(1);
          this.markChatButton(false);
          this.multiInfoPanel.contentWindow.mc_chat.visible = true;
          break;
        case CastleMultiInfoPanel.STATE_NO_INFO:
          this.mapObjectInfoLayer.hide();
          this.buildingInfoLayer.hide();
          this.setBGTransparency(1);
          this.multiInfoPanel.contentWindow.mc_chat.visible = false;
          break;
        case CastleMultiInfoPanel.STATE_MAPOBJECT_INFO:
          this.mapObjectInfoLayer.show();
          this.buildingInfoLayer.hide();
          this.multiInfoPanel.contentWindow.mc_chat.visible = false;
          this.setBGTransparency(0.4);
          break;
        case CastleMultiInfoPanel.STATE_BUILDING_INFO:
          this.buildingInfoLayer.show();
          this.mapObjectInfoLayer.hide();
          this.setBGTransparency(0.4);
          this.multiInfoPanel.contentWindow.mc_chat.visible = false;
      }
      this.lastState = this._state;
      this._state = e;
      this.multiInfoPanel.contentWindow.btn_chat.selectButton = this._state == CastleMultiInfoPanel.STATE_CHAT;
      this.multiInfoPanel.contentWindow.btn_infos.selectButton = this._state != CastleMultiInfoPanel.STATE_CHAT;
      this.updateCache();
    }
  };
  CastleMultiInfoPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var e = r.int(this.disp.stage.stageHeight);
      if (this.env.hasNetworkBuddies) {
        e -= r.int(p.ClientConstCastle.BUDDY_PANEL_HEIGHT);
      }
      this.disp.y = e;
      this.disp.x = 0;
    }
  };
  CastleMultiInfoPanel.prototype.setMessagesCounter = function (e = null) {
    var t = r.int(T.CastleModel.messageData.countUnreadUnarchivedMessages([]));
    if (t > this._oldUnreadMessageCount) {
      this.fadeInMessageBubble();
    }
    this._oldUnreadMessageCount = t;
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.setRewardCounter = function (e = null) {
    this.fadeInRewardBubble();
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.fadeInRewardBubble = function () {
    if (!this._speechBubbleIsUp) {
      this.textFieldManager.registerTextField(this.multiInfoPanel.mc_speechBubble.txt_info, new s.LocalizedTextVO("new_rewards"), new o.InternalGGSTextFieldConfigVO(true));
      this.multiInfoPanel.mc_speechBubble.visible = true;
      this._speechBubbleIsUp = true;
      this._isMessageSpeechBubble = false;
      l.TweenMax.fromTo(this.multiInfoPanel.mc_speechBubble, CastleMultiInfoPanel.MESSAGEBUBBLE_POPUP_FADE_DELAY, {
        x: CastleMultiInfoPanel.buttonX4,
        alpha: 0
      }, {
        alpha: 1,
        delay: 1,
        ease: u.Linear.easeIn,
        onUpdate: this.bindFunction(this.onBubbleUpdate),
        onComplete: this.bindFunction(this.fadeOutMessageBubbleDelayed)
      });
    }
  };
  CastleMultiInfoPanel.prototype.fadeInMessageBubble = function () {
    if (!this._speechBubbleIsUp) {
      this.textFieldManager.registerTextField(this.multiInfoPanel.mc_speechBubble.txt_info, new s.LocalizedTextVO("unread_messages"), new o.InternalGGSTextFieldConfigVO(true));
      this.multiInfoPanel.mc_speechBubble.visible = true;
      this._speechBubbleIsUp = true;
      this._isMessageSpeechBubble = true;
      l.TweenMax.fromTo(this.multiInfoPanel.mc_speechBubble, CastleMultiInfoPanel.MESSAGEBUBBLE_POPUP_FADE_DELAY, {
        x: Z.ABGHelper.isOnABGServer ? CastleMultiInfoPanel.buttonX2 : CastleMultiInfoPanel.buttonX3,
        alpha: 0
      }, {
        alpha: 1,
        delay: 1,
        ease: u.Linear.easeIn,
        onUpdate: this.bindFunction(this.onBubbleUpdate),
        onComplete: this.bindFunction(this.fadeOutMessageBubbleDelayed)
      });
    }
  };
  CastleMultiInfoPanel.prototype.fadeOutMessageBubbleDelayed = function () {
    if (this._speechBubbleIsUp) {
      l.TweenMax.fromTo(this.multiInfoPanel.mc_speechBubble, CastleMultiInfoPanel.MESSAGEBUBBLE_POPUP_FADE_DELAY, {
        alpha: 1
      }, {
        alpha: 0,
        delay: CastleMultiInfoPanel.MESSAGEBUBBLE_POPUP_DELAY,
        ease: u.Linear.easeIn,
        onUpdate: this.bindFunction(this.onBubbleUpdate),
        onComplete: this.bindFunction(this.hideMessageBubble)
      });
    }
  };
  CastleMultiInfoPanel.prototype.fadeOutMessageBubble = function () {
    if (this._speechBubbleIsUp) {
      l.TweenMax.fromTo(this.multiInfoPanel.mc_speechBubble, CastleMultiInfoPanel.MESSAGEBUBBLE_POPUP_FADE_DELAY, {
        alpha: 1
      }, {
        alpha: 0,
        ease: u.Linear.easeIn,
        onUpdate: this.bindFunction(this.onBubbleUpdate),
        onComplete: this.bindFunction(this.hideMessageBubble)
      });
    }
  };
  CastleMultiInfoPanel.prototype.onBubbleUpdate = function () {
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.hideMessageBubble = function () {
    this.multiInfoPanel.mc_speechBubble.visible = false;
    this._speechBubbleIsUp = false;
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.hasLevelForShow = function () {
    return T.CastleModel.userData.userLevel >= h.ClientConstLevelRestrictions.MIN_LEVEL_INFO_WINDOW;
  };
  CastleMultiInfoPanel.prototype.onClick = function (t) {
    if (!this.isLocked && L.ButtonHelper.isButtonEnabled(t.target) && (e.prototype.onClick.call(this, t), this.hasLevelForShow || t.target == this.multiInfoPanel.contentWindow.btn_showHide)) {
      switch (t.target) {
        case this.multiInfoPanel.contentWindow.btn_showHide:
          this.togglePanel();
          break;
        case this.multiInfoPanel.contentWindow.btn_infos:
          if (this._state == CastleMultiInfoPanel.STATE_CHAT) {
            this.setState(this.lastState, true);
          } else {
            this.setState(this._state, true);
          }
          break;
        case this.multiInfoPanel.contentWindow.btn_chat:
          this.setState(CastleMultiInfoPanel.STATE_CHAT, true);
          break;
        case this.multiInfoPanel.contentWindow.mc_chat.btn_bigChat:
          M.CastleDialogHandler.getInstance().registerDefaultDialogs(V.CastleAllianceDialog, new S.CastleAllianceDialogProperties(d.ClientConstAlliance.CAT_COMMUNICATION));
          break;
        case this.multiInfoPanel.mc_speechBubble:
          if (this._isMessageSpeechBubble) {
            M.CastleDialogHandler.getInstance().registerDefaultDialogs(x.CastleMessageInboxDialog, new A.CastleInboxDialogProperties());
          } else {
            M.CastleDialogHandler.getInstance().registerDefaultDialogs(X.RewardHubMainDialog, new Q.RewardHubDialogProperties(false));
          }
          this.fadeOutMessageBubble();
      }
    }
  };
  CastleMultiInfoPanel.prototype.onXPChanged = function (e) {
    if (this.disp.visible == 0 && this.hasLevelForShow()) {
      this.show();
    }
    if (this.disp.visible) {
      this._buttons.updateButtons();
    }
  };
  CastleMultiInfoPanel.prototype.onOtherChatIsOpened = function (e) {
    this.markChatButton(false);
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.onShowBuildingInfo = function (e) {
    if (!this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle && Y.instanceOfClass(e.params[0], "AEffectBuildingVO")) {
      var t = e.params[0];
      if (this.buildingInfoLayer.setBuildingInfo(t)) {
        this.lastState = CastleMultiInfoPanel.STATE_BUILDING_INFO;
        if (this._state != CastleMultiInfoPanel.STATE_CHAT) {
          this.setState(CastleMultiInfoPanel.STATE_BUILDING_INFO, false);
        }
      }
    }
  };
  CastleMultiInfoPanel.prototype.onShowMapObjectInfo = function (e) {
    var t = e.params[0];
    if (t) {
      this.mapObjectInfoLayer.setMapObjectInfo(t);
      this.lastState = CastleMultiInfoPanel.STATE_MAPOBJECT_INFO;
      if (this._state != CastleMultiInfoPanel.STATE_CHAT) {
        this.setState(CastleMultiInfoPanel.STATE_MAPOBJECT_INFO, false);
      }
    }
  };
  CastleMultiInfoPanel.prototype.onChangeLayoutState = function (e) {
    if (this._state != CastleMultiInfoPanel.STATE_CHAT) {
      this.onHideInfo(null);
    }
  };
  CastleMultiInfoPanel.prototype.onNewMessageArrived = function (e) {
    var t = T.CastleModel.chatData.getLastAllianceMessage();
    if (!!t && (this._state != CastleMultiInfoPanel.STATE_CHAT || !this._isUp) && t.playerID != T.CastleModel.userData.playerID) {
      this.markChatButton(true);
      this.updateCache();
    }
  };
  CastleMultiInfoPanel.prototype.onHideInfo = function (e) {
    if (this._state != CastleMultiInfoPanel.STATE_CHAT) {
      this.setState(CastleMultiInfoPanel.STATE_NO_INFO, false);
    } else {
      this.lastState = CastleMultiInfoPanel.STATE_NO_INFO;
    }
  };
  CastleMultiInfoPanel.prototype.onAllianceUpdate = function (e) {
    this.setInfoBtn();
    this.setChatBtn();
  };
  CastleMultiInfoPanel.prototype.onAllianceStatusChanged = function (e) {
    if (!T.CastleModel.userData.isInAlliance) {
      if (this._state == CastleMultiInfoPanel.STATE_CHAT) {
        this.setState(CastleMultiInfoPanel.STATE_NO_INFO, false);
      }
      this.markChatButton(false);
    }
    this.setInfoBtn();
    this.setChatBtn();
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.onSettingChanged = function (e) {
    if (this._state == CastleMultiInfoPanel.STATE_CHAT) {
      this.setState(CastleMultiInfoPanel.STATE_NO_INFO, false);
    }
    this.markChatButton(false);
    this.setInfoBtn();
    this.setChatBtn();
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.onConstructionItemsUpdated = function (e) {
    if (this._state == CastleMultiInfoPanel.STATE_BUILDING_INFO) {
      this.buildingInfoLayer.refreshBuildingInfo();
    }
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.onChangedCastleParameters = function (e) {
    if (this._state == CastleMultiInfoPanel.STATE_BUILDING_INFO) {
      this.buildingInfoLayer.refreshBuildingInfo();
    }
  };
  CastleMultiInfoPanel.prototype.onVipDataChanged = function (e) {
    if (this._state == CastleMultiInfoPanel.STATE_BUILDING_INFO) {
      this.buildingInfoLayer.refreshBuildingInfo();
    }
    this.updateCache();
  };
  Object.defineProperty(CastleMultiInfoPanel.prototype, "multiInfoPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMultiInfoPanel.prototype, "buttons", {
    get: function () {
      return this._buttons;
    },
    enumerable: true,
    configurable: true
  });
  CastleMultiInfoPanel.NAME = "CastleMultiInfoPanel";
  CastleMultiInfoPanel.PANEL_HEIGHT = 135;
  CastleMultiInfoPanel.buttonX2 = 81;
  CastleMultiInfoPanel.buttonX3 = 128;
  CastleMultiInfoPanel.buttonX4 = 165;
  CastleMultiInfoPanel.MESSAGEBUBBLE_POPUP_DELAY = 5;
  CastleMultiInfoPanel.MESSAGEBUBBLE_POPUP_FADE_DELAY = 0.8;
  CastleMultiInfoPanel.STATE_CHAT = 0;
  CastleMultiInfoPanel.STATE_NO_INFO = 1;
  CastleMultiInfoPanel.STATE_BUILDING_INFO = 2;
  CastleMultiInfoPanel.STATE_MAPOBJECT_INFO = 3;
  return CastleMultiInfoPanel;
}(require("./1300.js").CastleSublayerPanel);
exports.CastleMultiInfoPanel = P;
var M = require("./9.js");
var R = require("./712.js");
var V = require("./125.js");
var x = require("./1128.js");
var w = require("./1130.js");
var B = require("./4076.js");
var F = require("./4077.js");
var N = require("./4082.js");
var k = require("./4083.js");
var U = require("./4084.js");
var G = require("./1849.js");
var H = require("./4089.js");
var j = require("./4090.js");
var W = require("./1.js");
var Y = require("./1.js");
var K = require("./306.js");
var z = require("./4093.js");
var q = require("./4095.js");
var X = require("./404.js");
var Q = require("./550.js");
var J = require("./1705.js");
var Z = require("./53.js");