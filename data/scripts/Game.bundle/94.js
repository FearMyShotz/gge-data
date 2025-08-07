Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./58.js");
var _ = require("./39.js");
var m = require("./889.js");
var f = require("./938.js");
var O = require("./2385.js");
var E = require("./438.js");
var y = require("./374.js");
var b = require("./735.js");
var D = require("./389.js");
var I = require("./102.js");
var T = require("./503.js");
var v = require("./140.js");
var S = require("./390.js");
var A = require("./53.js");
var L = require("./4.js");
var P = require("./43.js");
var M = require("./214.js");
var R = require("./235.js");
var V = require("./187.js");
var x = require("./8.js");
var w = require("./149.js");
var B = require("./136.js");
var F = require("./11.js");
var N = require("./391.js");
var k = require("./201.js");
var U = require("./439.js");
var G = require("./2386.js");
var H = function (e) {
  function CastlePlayerInfoDialog() {
    var t = this;
    t._isLoaded = false;
    t.currentView = 0;
    t.invitedAfterShow = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastlePlayerInfoDialog.NAME) || this;
  }
  n.__extends(CastlePlayerInfoDialog, e);
  CastlePlayerInfoDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.btn_gift, this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_message, this.dialogDisp.btn_allianceInvite, this.dialogDisp.btn_allianceInfo, this.dialogDisp.mc_guild, this.dialogDisp.btn_trade, this.dialogDisp.btn_gift, this.dialogDisp.btn_castleTab, this.dialogDisp.btn_villageTab, this.dialogDisp.btn_friendRequest, this.dialogDisp.mc_castleList.btn_up, this.dialogDisp.mc_castleList.btn_down]);
    this.currentView = CastlePlayerInfoDialog.TAB_CASTLE_LIST;
    this.giftButton ||= new Y.ButtonGiftComponent(this.dialogDisp.btn_gift.basicButton);
    this.showLoading();
    e.prototype.initLoaded.call(this, t);
  };
  CastlePlayerInfoDialog.prototype.onFriendListUpdate = function (e) {
    this.updateDialog();
  };
  CastlePlayerInfoDialog.prototype.onBookmarksUpdated = function (e) {
    this.updateDialog();
  };
  CastlePlayerInfoDialog.prototype.onGetPlayerInfo = function (e) {
    this.controller.removeEventListener(D.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onGetPlayerInfo));
    this.hideLoading();
    this._isLoaded = true;
    this._castleList = e.params[0];
    this.updateDialog();
  };
  CastlePlayerInfoDialog.prototype.updateDialog = function () {
    if (this._isLoaded && this._castleList) {
      this._playerVO = L.CastleModel.otherPlayerData.getOwnerInfoVO(this._castleList.ownerID);
      if (this._playerVO) {
        this.setToolTips_0();
        this.dialogDisp.mc_guild.visible = this._playerVO.isInAlliance;
        this.dialogDisp.mc_guild.toolTipText = "dialog_alliance_info";
        this.dialogDisp.mc_guild.mouseChildren = false;
        this.setTexts();
        this.handleButtons();
        z.CrestHelper.setCrestGraphics(this.dialogDisp.mc_playercrest, this._playerVO.crest, null, true);
        a.MovieClipHelper.clearMovieClip(this.dialogDisp.alliance_symbol_container);
        V.CastleAllianceCrestHelper.setCrestGraphics(this.dialogDisp.alliance_symbol_container, this._playerVO.allianceCrestVO, R.AllianceCrestSizeEnum.SIZE_PLAYERINFO, M.AllianceCrestEnum.DEFAULT_CREST);
        this.fillCastleList();
        this.updateMessageRestrictions();
        this.dialogDisp.visible = true;
        this.hideLoading();
      }
    }
  };
  CastlePlayerInfoDialog.prototype.setTexts = function () {
    if (this.dialogDisp.mc_guild.visible) {
      this.itxt_guildName.textContentVO.stringValue = this._playerVO.allianceName;
    }
    this.dialogDisp.mc_honor.visible = false;
    if (this._playerVO.isLegend) {
      this.itxt_playerLevel.textContentVO.numberValue = this._playerVO.playerLevel;
      this.itxt_playerLevel2.textContentVO.numberValue = this._playerVO.playerLevel;
      this.itxt_playerLegendLevel.textContentVO.numberValue = this._playerVO.playerLegendLevel;
      this.dialogDisp.mc_level.visible = false;
      this.dialogDisp.mc_legendLevel.visible = true;
    } else {
      this.itxt_playerLevel.textContentVO.numberValue = this._playerVO.playerLevel;
      this.itxt_playerLevel2.textContentVO.numberValue = this._playerVO.playerLevel;
      this.itxt_playerLegendLevel.textContentVO.numberValue = this._playerVO.playerLegendLevel;
      this.dialogDisp.mc_level.visible = true;
      this.dialogDisp.mc_legendLevel.visible = false;
    }
    this.itxt_playerName.textContentVO.stringValue = this._playerVO.playerName;
    this.itxt_playerName.selectable = true;
    this.itxt_playerTitle.textContentVO.stringValue = K.CastleTitleSystemHelper.getSingleMoreImportantTitle(this._playerVO);
    this.itxt_honorPoints.textContentVO.numberValue = this._playerVO.honor;
    this.itxt_mightPoints.textContentVO.numberValue = this._playerVO.might;
    this.itxt_achievementPoints.textContentVO.numberValue = this._playerVO.achievementPoints;
    this.itxt_numCastles.textContentVO.numberValue = this._castleList.listForActionPanel.length;
  };
  CastlePlayerInfoDialog.prototype.setToolTips_0 = function () {
    this.dialogDisp.info_castles.toolTipText = "dialog_playerInfo_infoCastles";
    this.dialogDisp.info_achievements.toolTipText = "dialog_playerInfo_infoAchievements";
    this.dialogDisp.btn_message.toolTipText = "dialog_inbox_writeNewMessage";
    this.dialogDisp.mc_level.toolTipText = "level";
    this.dialogDisp.mc_legendLevel.normal.toolTipText = "level";
    this.dialogDisp.mc_legendLevel.legend.toolTipText = "legendLevel";
    this.dialogDisp.mc_honor.toolTipText = "honorPoints";
    this.dialogDisp.mc_might.toolTipText = "playerMight";
    this.dialogDisp.btn_allianceInvite.toolTipText = "dialog_alliance_invite";
    this.dialogDisp.btn_allianceInfo.toolTipText = "dialog_alliance_info";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_might.mouseChildren = false;
    this.dialogDisp.mc_legendLevel.normal.mouseChildren = false;
    this.dialogDisp.mc_legendLevel.legend.mouseChildren = false;
    this.dialogDisp.mc_level.mouseChildren = false;
  };
  CastlePlayerInfoDialog.prototype.handleButtons = function () {
    var e = L.CastleModel.userData.userLevel >= C.ClientConstLevelRestrictions.MIN_LEVEL_TRADE;
    var t = this._playerVO.playerLevel >= C.ClientConstLevelRestrictions.MIN_LEVEL_RECEIVE_RESOURCE_WAGONS;
    this.giftButton.initAsPlayerInfoButton();
    this.dialogDisp.btn_trade.toolTipText = L.CastleModel.userData.getTradeResourceTooltip(this._playerVO);
    this.dialogDisp.btn_trade.visible = !this.isMe;
    x.ButtonHelper.enableButton(this.dialogDisp.btn_trade, !this.isMe && e && t && !this._playerVO.isRuin);
    this.dialogDisp.btn_message.mc_counter.visible = false;
    this.dialogDisp.btn_message.visible = this._playerVO.playerID != L.CastleModel.userData.playerID;
    this.updateMessageRestrictions();
    this.dialogDisp.btn_allianceInvite.visible = !this._playerVO.isInAlliance && L.CastleModel.userData.canInviteToAlliance;
    this.dialogDisp.btn_allianceInfo.visible = this._playerVO.isInAlliance && this._playerVO.allianceID != L.CastleModel.userData.allianceID && !this._playerVO.isRuin;
    x.ButtonHelper.enableButton(this.dialogDisp.btn_allianceInvite, true);
    this.dialogDisp.btn_allianceInvite.toolTipText = "dialog_alliance_invite";
    var i;
    var n = [];
    for (var o = 0, a = this.playerInteractionButtons; o < a.length; o++) {
      if ((i = a[o]).visible) {
        n.push(i);
      }
    }
    var s = g.int((5 - n.length) * 42.5);
    for (var r = 0; r < n.length; r++) {
      (i = n[r]).x = 160 + s + r * 85;
    }
  };
  CastlePlayerInfoDialog.prototype.updateMessageRestrictions = function () {
    if (this._playerVO) {
      this.dialogDisp.btn_friendRequest.visible = !L.CastleModel.friendListData.isFriendAleady(this.infoProperties.playerID) && this.infoProperties.playerID != L.CastleModel.userData.playerID && !A.ABGHelper.isOnABGServer;
      if (this.invitedAfterShow) {
        this.dialogDisp.btn_friendRequest.toolTipText = "error_friend_sendRequest_alreadySent";
      } else if (L.CastleModel.friendListData.isFriendListFull()) {
        this.dialogDisp.btn_friendRequest.toolTipText = "error_friend_sendRequest_listFull";
      } else if (this.currentInvitesToday >= this.limitInvitesToday) {
        this.dialogDisp.btn_friendRequest.toolTipText = "dialog_friend_sendRequest_dailyLimit_tooltip";
      } else {
        this.dialogDisp.btn_friendRequest.toolTipText = "dialog_friend_sendRequest";
      }
      x.ButtonHelper.enableButton(this.dialogDisp.btn_friendRequest, !this.invitedAfterShow && (!L.CastleModel.friendListData.isFriendListFull() || this._playerVO.viaReferAFriend) && this.currentInvitesToday < this.limitInvitesToday);
      var e = L.CastleModel.messageData.getMessageRestrictionVOByMessageType(l.MessageConst.MESSAGE_TYPE_USER_OUT);
      var t = !!e && e.currentPlayerAmount >= e.dailyLimit;
      x.ButtonHelper.enableButton(this.dialogDisp.btn_message, !t && L.CastleModel.userData.canWriteMessageTo(this._playerVO) && L.CastleModel.userData.userLevel >= L.CastleModel.messageData.minLevelForSendingP2PMessages);
      this.dialogDisp.btn_message.toolTipText = x.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_message) ? L.CastleModel.userData.getMessageTooltip(this._playerVO) : _.ClientConstTextIds.NOT_AVAILABLE;
      if (L.CastleModel.userData.userLevel < L.CastleModel.messageData.minLevelForSendingP2PMessages) {
        this.dialogDisp.btn_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_lowLevel_tooltip";
      }
      if (t) {
        this.dialogDisp.btn_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip";
      }
    }
  };
  CastlePlayerInfoDialog.prototype.handleTabs = function () {
    this.dialogDisp.btn_castleTab.mouseChildren = false;
    this.dialogDisp.btn_villageTab.mouseChildren = false;
    this.dialogDisp.btn_castleTab.toolTipText = "castles_tooltip";
    if (this._castleList.hasVillages) {
      x.ButtonHelper.enableButton(this.dialogDisp.btn_villageTab, true);
      this.dialogDisp.btn_villageTab.toolTipText = "dialog_villageListOverview_title";
    } else {
      x.ButtonHelper.enableButton(this.dialogDisp.btn_villageTab, false);
      this.dialogDisp.btn_villageTab.toolTipText = "dialog_villageList_noVillages";
    }
    if (this.currentView == CastlePlayerInfoDialog.TAB_CASTLE_LIST) {
      this.dialogDisp.btn_castleTab.gotoAndStop(1);
      this.dialogDisp.btn_villageTab.gotoAndStop(1);
    } else {
      this.dialogDisp.btn_castleTab.gotoAndStop(2);
      this.dialogDisp.btn_villageTab.gotoAndStop(2);
    }
  };
  Object.defineProperty(CastlePlayerInfoDialog.prototype, "isMe", {
    get: function () {
      return this._playerVO.playerID == L.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerInfoDialog.prototype.fillCastleList = function () {
    if (this._castleList) {
      var e;
      this.handleTabs();
      if (this.scroller) {
        this.scroller.remove();
      }
      this.scroller = new s.ItemScrollList(this.dialogDisp.mc_castleList);
      this.scroller.scrollItemClass = ee.CastlePlayerInfoCastleListEntry;
      if ((e = this.currentView == CastlePlayerInfoDialog.TAB_VILLAGE_LIST ? this._castleList.sortedVillages : this._castleList.listForPlayerInfo) != null) {
        for (var t = 0, i = e; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            this.scroller.pushContent(new G.CastlePlayerInfoCastleListEntryVO(n));
          }
        }
      }
      this.scroller.initList(0);
    }
  };
  CastlePlayerInfoDialog.prototype.onClick = function (t) {
    if (x.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          j.CastleDialogHandler.getInstance().showHelper("", h.Localize.text("help_playerInfo"));
          break;
        case this.dialogDisp.btn_message:
          if (L.CastleModel.otherPlayerData.getOwnerInfoVO(this.infoProperties.playerID)) {
            j.CastleDialogHandler.getInstance().registerDefaultDialogs(J.CastleNewMessageDialog, new N.CastleNewMessageDialogProperties(L.CastleModel.otherPlayerData.getOwnerInfoVO(this.infoProperties.playerID).playerName));
          }
          break;
        case this.dialogDisp.btn_allianceInvite:
          j.CastleDialogHandler.getInstance().registerDefaultDialogs(Q.CastleStandardYesNoDialog, new r.BasicStandardYesNoDialogProperties(h.Localize.text("generic_alert_watchout"), h.Localize.text("dialog_allianceInvitationSecurityAlert_desc"), this.bindFunction(this.onInvitePlayerToAlliance)));
          break;
        case this.dialogDisp.btn_allianceInfo:
        case this.dialogDisp.mc_guild:
          this.onShowAllianceInfo();
          break;
        case this.dialogDisp.btn_trade:
          L.CastleModel.smartfoxClient.sendCommandVO(new E.C2SMarketInfoVO());
          break;
        case this.dialogDisp.btn_gift:
          this.giftButton.onClick();
          break;
        case this.dialogDisp.btn_castleTab:
          if (this.dialogDisp.btn_castleTab.enabled) {
            this.changeTab(CastlePlayerInfoDialog.TAB_CASTLE_LIST);
          }
          break;
        case this.dialogDisp.btn_villageTab:
          if (this.dialogDisp.btn_villageTab.enabled) {
            this.changeTab(CastlePlayerInfoDialog.TAB_VILLAGE_LIST);
          }
          break;
        case this.dialogDisp.btn_friendRequest:
          this.invitedAfterShow = true;
          L.CastleModel.smartfoxClient.sendCommandVO(new O.C2SSendFriendRequestVO(this.infoProperties.playerID));
          x.ButtonHelper.enableButton(this.dialogDisp.btn_friendRequest, false);
          this.dialogDisp.btn_friendRequest.toolTipText = "error_friend_sendRequest_alreadySent";
      }
    }
  };
  CastlePlayerInfoDialog.prototype.changeTab = function (e) {
    if (e != this.currentView) {
      this.currentView = e;
      this.fillCastleList();
    }
  };
  CastlePlayerInfoDialog.prototype.onShowAllianceInfo = function () {
    if (L.CastleModel.userData.isInAlliance && L.CastleModel.userData.allianceID == this._playerVO.allianceID) {
      j.CastleDialogHandler.getInstance().registerDefaultDialogs(X.CastleAllianceDialog, new B.CastleAllianceDialogProperties());
    } else {
      var e;
      var t = L.CastleModel.allianceData.getAllianceInfoVOByID(L.CastleModel.userData.allianceID);
      if (t) {
        var i = t.getStatusListByStatus(c.AllianceConst.DIPLOMACY_SOFT_ALLIED);
        if (i != null) {
          for (var n = 0, o = i; n < o.length; n++) {
            var a = o[n];
            if (a !== undefined && a.allianceID == this._playerVO.allianceID) {
              e = a;
              break;
            }
          }
        }
      }
      if (e == null) {
        j.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(q.CastleAllianceInfoDialog, new w.CastleAllianceInfoDialogProperties(this._playerVO.allianceID), P.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      } else {
        j.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(q.CastleAllianceInfoDialog, new w.CastleAllianceInfoDialogProperties(this._playerVO.allianceID, this._playerVO.allianceName, e.allianceStatus, e.allianceStatusConfirmed), P.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastlePlayerInfoDialog.prototype.onInvitePlayerToAlliance = function (e) {
    L.CastleModel.smartfoxClient.sendCommandVO(new m.C2SAllianceInvitePlayerVO(String(this._playerVO.playerID)));
  };
  CastlePlayerInfoDialog.prototype.showLoading = function () {
    j.CastleDialogHandler.getInstance().registerDialogsWithType(Z.CastleExternalPreloaderDialog, new k.CastleExternalPreloaderDialogProperties(null), false, P.CastleDialogConsts.PRIORITY_TOP, 0, P.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  CastlePlayerInfoDialog.prototype.hideLoading = function () {
    W.CastleLayoutManager.getInstance().hideDialog(Z.CastleExternalPreloaderDialog);
    W.CastleLayoutManager.getInstance().restrictToHighestDialog();
  };
  CastlePlayerInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this._isLoaded) {
      this.hideLoading();
    } else {
      this.showLoading();
    }
    this.invitedAfterShow = false;
    this.dialogDisp.mc_guild.mouseChildren = false;
    this.dialogDisp.mc_guild.actLikeButton = true;
    if (this.playerInteractionButtons == null) {
      this.playerInteractionButtons = [this.dialogDisp.btn_allianceInfo, this.dialogDisp.btn_allianceInvite, this.dialogDisp.btn_trade, this.dialogDisp.btn_message, this.dialogDisp.btn_gift, this.dialogDisp.btn_friendRequest];
    }
    this.itxt_playerName ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new u.TextVO(""));
    this.itxt_playerName.autoFitToBounds = true;
    this.itxt_playerTitle ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.TextVO(""));
    this.itxt_playerLevel ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_level.txt_level, new d.NumberVO(""));
    this.itxt_playerLevel2 ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_legendLevel.normal.txt_level, new d.NumberVO(""));
    this.itxt_playerLegendLevel ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_legendLevel.legend.txt_legendLevel, new d.NumberVO(""));
    if (!this.itxt_guildName) {
      this.dialogDisp.mc_guild.txt_guildname.defaultCacheScale = 2;
      this.itxt_guildName = this.textFieldManager.registerTextField(this.dialogDisp.mc_guild.txt_guildname, new u.TextVO(""));
    }
    this.itxt_guildName.autoFitToBounds = true;
    this.itxt_achievementPoints ||= this.textFieldManager.registerTextField(this.dialogDisp.info_achievements.txt_value, new p.LocalizedNumberVO(0));
    this.itxt_honorPoints ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_honor.txt_honor, new p.LocalizedNumberVO(0));
    this.itxt_mightPoints ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_might.txt_honor, new p.LocalizedNumberVO(0));
    this.itxt_numCastles ||= this.textFieldManager.registerTextField(this.dialogDisp.info_castles.txt_value, new p.LocalizedNumberVO(0));
    this.updateMessageRestrictions();
    this._isLoaded = false;
    this.controller.addEventListener(D.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onGetPlayerInfo));
    L.CastleModel.bookmarkData.addEventListener(T.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onBookmarksUpdated));
    this.controller.addEventListener(v.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateMessageRestrictions));
    L.CastleModel.smartfoxClient.sendCommandVO(new y.C2SGetDetailPlayerInfo(this.infoProperties.playerID));
    if (!L.CastleModel.friendListData.isInitialised()) {
      L.CastleModel.smartfoxClient.sendCommandVO(new f.C2SGetFriendConnectionsVO());
      L.CastleModel.friendListData.addEventListener(b.CastleFriendListEvent.FRIEND_LIST_UPDATED, this.bindFunction(this.onFriendListUpdate));
    }
    this.giftButton.targetPlayerID = this.infoProperties.playerID;
    this.dialogDisp.visible = false;
  };
  CastlePlayerInfoDialog.prototype.hideLoaded = function (t = null) {
    this.currentView = CastlePlayerInfoDialog.TAB_CASTLE_LIST;
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.alliance_symbol_container);
    this.controller.removeEventListener(D.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onGetPlayerInfo));
    L.CastleModel.bookmarkData.removeEventListener(T.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onBookmarksUpdated));
    L.CastleModel.friendListData.removeEventListener(b.CastleFriendListEvent.FRIEND_LIST_UPDATED, this.bindFunction(this.onFriendListUpdate));
    this.controller.removeEventListener(v.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateMessageRestrictions));
    e.prototype.hideLoaded.call(this, t);
  };
  CastlePlayerInfoDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    L.CastleModel.tradeData.addEventListener(S.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    L.CastleModel.allianceData.addEventListener(I.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onOwnAllianceDataUpdated));
  };
  CastlePlayerInfoDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    L.CastleModel.tradeData.removeEventListener(S.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    L.CastleModel.allianceData.removeEventListener(I.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onOwnAllianceDataUpdated));
  };
  Object.defineProperty(CastlePlayerInfoDialog.prototype, "messageRestriction", {
    get: function () {
      return L.CastleModel.messageData.getMessageRestrictionVOByMessageType(l.MessageConst.MESSAGE_TYPE_FRIEND_INVITE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlayerInfoDialog.prototype, "currentInvitesToday", {
    get: function () {
      if (this.messageRestriction) {
        return this.messageRestriction.currentPlayerAmount;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlayerInfoDialog.prototype, "limitInvitesToday", {
    get: function () {
      if (this.messageRestriction) {
        return this.messageRestriction.dailyLimit;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerInfoDialog.prototype.onOwnAllianceDataUpdated = function (e) {
    this.updateDialog();
  };
  CastlePlayerInfoDialog.prototype.onGetMarketInfos = function (e) {
    if (e.openDialog) {
      var t = this._castleList.getMainCastleByKingdomID(L.CastleModel.kingdomData.activeKingdomID);
      if (!t) {
        var i = this._castleList.getFilteredList(L.CastleModel.kingdomData.activeKingdomID);
        i ||= this._castleList.getFilteredList(l.WorldClassic.KINGDOM_ID);
        if (!(t = i[0])) {
          t = this._castleList[0];
        }
      }
      j.CastleDialogHandler.getInstance().registerDefaultDialogs($.CastleSendGoodsDialog, new U.CastleSendGoodsDialogProperties(t, e.tradeInfoVO));
    }
  };
  Object.defineProperty(CastlePlayerInfoDialog.prototype, "infoProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerInfoDialog.NAME = "CastlePlayerInfoEx_ABG";
  CastlePlayerInfoDialog.TAB_CASTLE_LIST = 0;
  CastlePlayerInfoDialog.TAB_VILLAGE_LIST = 1;
  return CastlePlayerInfoDialog;
}(F.CastleExternalDialog);
exports.CastlePlayerInfoDialog = H;
o.classImplementsInterfaces(H, "ICollectableRendererList");
var j = require("./9.js");
var W = require("./17.js");
var Y = require("./1340.js");
var K = require("./106.js");
var z = require("./61.js");
var q = require("./132.js");
var X = require("./125.js");
var Q = require("./151.js");
var J = require("./392.js");
var Z = require("./154.js");
var $ = require("./440.js");
var ee = require("./2395.js");