Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./18.js");
var c = require("./39.js");
var u = require("./618.js");
var d = require("./140.js");
var p = require("./32.js");
var h = require("./71.js");
var g = require("./4.js");
var C = require("./43.js");
var _ = require("./525.js");
var m = require("./236.js");
var f = require("./391.js");
var O = require("./93.js");
var E = require("./526.js");
var y = require("./8.js");
var b = function (e) {
  function CastleOtherPlayerInfoPanel() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleInterfaceElements.OtherPlayerInfoPanel()) || this).itxt_name = t.textFieldManager.registerTextField(t.playerPanel.txt_name, new r.TextVO(""));
    t.itxt_castleName = t.textFieldManager.registerTextField(t.playerPanel.txt_castleName, new r.TextVO(""));
    t.itxt_coordX = t.textFieldManager.registerTextField(t.playerPanel.txt_coordX, new r.TextVO(""));
    t.itxt_coordY = t.textFieldManager.registerTextField(t.playerPanel.txt_coordY, new r.TextVO(""));
    return t;
  }
  n.__extends(CastleOtherPlayerInfoPanel, e);
  CastleOtherPlayerInfoPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this._attackButton = new I.ButtonAttackComponent(this.playerPanel.btn_attack);
    this._spyButton = new T.ButtonSpyComponent(this.playerPanel.btn_spy);
    this.playerPanel.btn_message.mc_counter.visible = false;
    this.playerPanel.btn_message.toolTipText = "dialog_newMessage_sendMessage";
    this.playerPanel.btn_info.toolTipText = "ringmenu_playerInfo";
    this.controller.addEventListener(h.AreaDataEvent.ON_SPY_DATA_CHANGED, this.bindFunction(this.onChangeSpyData));
    this.controller.addEventListener(p.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeSpyData));
  };
  CastleOtherPlayerInfoPanel.prototype.onClick = function (t) {
    if (y.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.playerPanel.btn_attack:
          this.onAttackCastle();
          break;
        case this.playerPanel.btn_spy:
          this.onSpyCastle();
          break;
        case this.playerPanel.btn_message:
          D.CastleDialogHandler.getInstance().registerDefaultDialogs(A.CastleNewMessageDialog, new f.CastleNewMessageDialogProperties(g.CastleModel.areaData.activeOwnerInfo.playerName));
          break;
        case this.playerPanel.btn_info:
          D.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(L.CastlePlayerInfoDialog, new O.CastlePlayerInfoDialogProperties(g.CastleModel.areaData.activeOwnerInfo.playerID), C.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastleOtherPlayerInfoPanel.prototype.show = function () {
    if (!o.instanceOfClass(g.CastleModel.areaData.activeAreaInfo, "OutpostMapobjectVO") || !(g.CastleModel.areaData.activeAreaInfo.ownerInfo.playerID < 0)) {
      e.prototype.show.call(this);
      this.updateCastleInfo();
      this.controller.addEventListener(d.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateCastleInfo));
    }
  };
  CastleOtherPlayerInfoPanel.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.controller.removeEventListener(d.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateCastleInfo));
  };
  CastleOtherPlayerInfoPanel.prototype.onChangeSpyData = function (e) {
    this._spyButton.targetWMO = g.CastleModel.areaData.activeAreaInfo;
    this._spyButton.initSpyButton(true);
  };
  CastleOtherPlayerInfoPanel.prototype.updateCastleInfo = function () {
    if (g.CastleModel.areaData.activeArea) {
      this.itxt_name.textContentVO.stringValue = g.CastleModel.areaData.activeAreaInfo.ownerInfo.playerName;
      this.itxt_castleName.textContentVO.stringValue = g.CastleModel.areaData.activeAreaInfo.areaNameString;
      this.itxt_coordX.textContentVO.stringValue = g.CastleModel.areaData.activeAreaInfo.absAreaPosX.toString();
      this.itxt_coordY.textContentVO.stringValue = g.CastleModel.areaData.activeAreaInfo.absAreaPosY.toString();
      this._attackButton.targetWMO = g.CastleModel.areaData.activeAreaInfo;
      this._attackButton.initAttackButton(true);
      this._spyButton.targetWMO = g.CastleModel.areaData.activeAreaInfo;
      this._spyButton.initSpyButton(true);
      var e = g.CastleModel.tutorialData.isTutorialFinished();
      var t = g.CastleModel.userData.playerID == g.CastleModel.areaData.activeOwnerInfo.playerID;
      var i = g.CastleModel.userData.canWriteMessageTo(g.CastleModel.areaData.activeOwnerInfo) && !t;
      var n = e && !t;
      var o = g.CastleModel.messageData.getMessageRestrictionVOByMessageType(a.MessageConst.MESSAGE_TYPE_USER_OUT);
      var s = !!o && o.currentPlayerAmount >= o.dailyLimit;
      y.ButtonHelper.enableButton(this.playerPanel.btn_message, !s && i && g.CastleModel.userData.userLevel >= g.CastleModel.messageData.minLevelForSendingP2PMessages);
      this.playerPanel.btn_message.toolTipText = y.ButtonHelper.isButtonEnabled(this.playerPanel.btn_message) ? g.CastleModel.userData.getMessageTooltip(g.CastleModel.areaData.activeOwnerInfo) : c.ClientConstTextIds.NOT_AVAILABLE;
      if (g.CastleModel.userData.userLevel < g.CastleModel.messageData.minLevelForSendingP2PMessages) {
        this.playerPanel.btn_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_lowLevel_tooltip";
      }
      if (s) {
        this.playerPanel.btn_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip";
      }
      this.playerPanel.btn_info.enableButton = n;
      this.playerPanel.btn_info.toolTipText = n ? "ringmenu_playerInfo" : c.ClientConstTextIds.NOT_AVAILABLE;
    }
  };
  CastleOtherPlayerInfoPanel.prototype.onAttackCastle = function () {
    if (g.CastleModel.userData.userLevel < a.CombatConst.MIN_ATTACK_PLAYER_LEVEL) {
      D.CastleDialogHandler.getInstance().registerDefaultDialogs(S.CastleCharacterYesNoOKDialog, new m.CastleCharacterYesNoOKDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("dialog_attackWithLowLevel", [a.CombatConst.MIN_ATTACK_PLAYER_LEVEL]), 4, null, null, false));
    } else if (g.CastleModel.userData.noobProtected || g.CastleModel.userData.isInPeaceMode) {
      D.CastleDialogHandler.getInstance().registerDefaultDialogs(S.CastleCharacterYesNoOKDialog, new m.CastleCharacterYesNoOKDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("dialog_attackWithNoobProtection"), 4, this.bindFunction(this.showAttackDialog)));
    } else {
      this.showAttackDialog();
    }
  };
  CastleOtherPlayerInfoPanel.prototype.showAttackDialog = function (e = null) {
    D.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleStartAttackDialog, new _.CastleStartAttackDialogProperties(g.CastleModel.areaData.activeAreaInfo, l.ClientConstCastle.ACTION_TYPE_ATTACK));
  };
  CastleOtherPlayerInfoPanel.prototype.onSpyCastle = function () {
    D.CastleDialogHandler.getInstance().registerDefaultDialogs(P.CastleSpyDialog, new E.CastleSpyDialogProperties(g.CastleModel.areaData.activeAreaInfo));
    g.CastleModel.smartfoxClient.sendCommandVO(new u.C2SGetSpyInfo(g.CastleModel.areaData.activeAreaInfo.absAreaPosX, g.CastleModel.areaData.activeAreaInfo.absAreaPosY, g.CastleModel.areaData.activeAreaInfo.kingdomID));
  };
  CastleOtherPlayerInfoPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.x = this.disp.stage.stageWidth / 2;
      this.disp.y = -1;
    }
  };
  Object.defineProperty(CastleOtherPlayerInfoPanel.prototype, "playerPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleOtherPlayerInfoPanel.prototype.destroy = function () {
    this.controller.removeEventListener(h.AreaDataEvent.ON_SPY_DATA_CHANGED, this.bindFunction(this.onChangeSpyData));
    this.controller.removeEventListener(p.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeSpyData));
  };
  CastleOtherPlayerInfoPanel.__initialize_static_members = function () {
    CastleOtherPlayerInfoPanel.NAME = "CastleOtherPlayerInfoPanel";
  };
  return CastleOtherPlayerInfoPanel;
}(require("./131.js").CastlePanel);
exports.CastleOtherPlayerInfoPanel = b;
var D = require("./9.js");
var I = require("./619.js");
var T = require("./1864.js");
var v = require("./395.js");
var S = require("./238.js");
var A = require("./392.js");
var L = require("./94.js");
var P = require("./443.js");
b.__initialize_static_members();