Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./5459.js");
var p = require("./5460.js");
var h = require("./938.js");
var g = require("./374.js");
var C = require("./735.js");
var _ = require("./389.js");
var m = require("./4.js");
var f = require("./43.js");
var O = require("./8.js");
var E = require("./11.js");
var y = require("./93.js");
var b = function (e) {
  function CastleFriendRequestDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFriendRequestDialog.NAME) || this;
  }
  n.__extends(CastleFriendRequestDialog, e);
  CastleFriendRequestDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    O.ButtonHelper.initBasicButtons([this.dialogDisp.btn_no, this.dialogDisp.btn_yes, this.dialogDisp.btn_close, this.dialogDisp.textAndButton.buttonHolder.button]);
    O.ButtonHelper.initBasicButton(this.dialogDisp.playerInfo, 1);
    this.textFieldManager.registerTextField(this.dialogDisp.playerInfo.title, new l.LocalizedTextVO("dialog_friendRequest_message_yourFriend"));
    this.textFieldManager.registerTextField(this.dialogDisp.playerInfo.labelLevel, new l.LocalizedTextVO("level"));
    this.textFieldManager.registerTextField(this.dialogDisp.playerInfo.labelAlliance, new l.LocalizedTextVO("dialog_alliance_name")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.textAndButton.buttonHolder.button.text, new l.LocalizedTextVO("dialog_friendsList_header")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
  };
  CastleFriendRequestDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (!m.CastleModel.friendListData.isInitialised()) {
      m.CastleModel.smartfoxClient.sendCommandVO(new h.C2SGetFriendConnectionsVO());
      O.ButtonHelper.enableButton(this.dialogDisp.btn_yes, false);
    }
    this.updateDialogType();
    m.CastleModel.smartfoxClient.sendCommandVO(new g.C2SGetDetailPlayerInfo(this.dialogProperties.messageVO.otherPlayerID));
  };
  CastleFriendRequestDialog.prototype.addEventListenerOnShow = function () {
    m.CastleModel.friendListData.addEventListener(C.CastleFriendListEvent.FRIEND_LIST_UPDATED, this.bindFunction(this.onDataUpdate));
    this.controller.addEventListener(_.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onGetPlayerInfo));
  };
  CastleFriendRequestDialog.prototype.onGetPlayerInfo = function (e) {
    if (m.CastleModel.otherPlayerData.getOwnerInfoVO(this.dialogProperties.messageVO.otherPlayerID)) {
      this.updatePlayerInfo();
      this.updateDialogType();
      this.controller.removeEventListener(_.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onGetPlayerInfo));
    }
  };
  CastleFriendRequestDialog.prototype.removeEventListenerOnHide = function () {
    m.CastleModel.friendListData.removeEventListener(C.CastleFriendListEvent.FRIEND_LIST_UPDATED, this.bindFunction(this.onDataUpdate));
  };
  CastleFriendRequestDialog.prototype.onDataUpdate = function (e) {
    this.updateDialogType();
  };
  CastleFriendRequestDialog.prototype.updatePlayerInfo = function () {
    var e = m.CastleModel.otherPlayerData.getOwnerInfoVO(this.dialogProperties.messageVO.otherPlayerID);
    this.textFieldManager.registerTextField(this.dialogDisp.playerInfo.textName, new u.TextVO(e.playerName));
    this.textFieldManager.registerTextField(this.dialogDisp.playerInfo.textLevel, new c.NumberVO(e.playerLevel));
    this.textFieldManager.registerTextField(this.dialogDisp.playerInfo.textAlliance, new u.TextVO(e.allianceName));
    I.CrestHelper.replaceIntoPlaceHolder(this.dialogDisp.playerInfo.shield_placeholder.shield, e.crest);
  };
  CastleFriendRequestDialog.prototype.updateDialogType = function () {
    var e = m.CastleModel.friendListData.friendList.length >= r.PlayerConst.PLAYER_MAX_FRIEND_CONNECTIONS;
    var t = this.dialogProperties.messageVO.messageType == s.MessageConst.MESSAGE_TYPE_NEW_FRIENDSHIP || !e;
    this.dialogDisp.textOnly.visible = t;
    this.dialogDisp.textAndButton.visible = !t;
    this.dialogDisp.textAndButton.buttonHolder.visible = e;
    O.ButtonHelper.enableButton(this.dialogDisp.btn_yes, !e);
    this.dialogDisp.btn_no.visible = this.dialogProperties.messageVO.messageType == s.MessageConst.MESSAGE_TYPE_FRIEND_INVITE;
    var i;
    var n = t ? this.dialogDisp.textOnly : this.dialogDisp.textAndButton;
    this.textFieldManager.registerTextField(this.dialogDisp.textHeader, new l.LocalizedTextVO(this.dialogProperties.messageVO.subject));
    if (this.dialogProperties.messageVO.messageType == s.MessageConst.MESSAGE_TYPE_FRIEND_INVITE) {
      i = e ? "dialog_friendRequest_message_desc_noSpace" : "dialog_friendRequest_message_desc";
    } else if (this.dialogProperties.messageVO.messageType == s.MessageConst.MESSAGE_TYPE_NEW_FRIENDSHIP) {
      i = this.dialogProperties.messageVO.isNewFriendship ? "dialog_friendAccepted_message_desc_receiver" : "dialog_friendAccepted_message_desc_sender";
    }
    var o = m.CastleModel.otherPlayerData.getOwnerInfoVO(this.dialogProperties.messageVO.otherPlayerID);
    if (o) {
      this.textFieldManager.registerTextField(n.text, new l.LocalizedTextVO(i, [o.playerName]));
    }
  };
  CastleFriendRequestDialog.prototype.onClick = function (e) {
    if (O.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_no:
          if (m.CastleModel.friendListData.friendList.length >= r.PlayerConst.PLAYER_MAX_FRIEND_CONNECTIONS) {
            m.CastleModel.smartfoxClient.sendCommandVO(new p.C2SDeclineFriendRequestVO(this.dialogProperties.messageVO.otherPlayerID, this.dialogProperties.messageVO.messageID));
          }
          this.hide();
          break;
        case this.dialogDisp.btn_yes:
          if (this.dialogProperties.messageVO.messageType == s.MessageConst.MESSAGE_TYPE_FRIEND_INVITE) {
            m.CastleModel.smartfoxClient.sendCommandVO(new d.C2SAcceptFriendRequestVO(this.dialogProperties.messageVO.otherPlayerID, this.dialogProperties.messageVO.messageID));
          }
          this.hide();
          break;
        case this.dialogDisp.textAndButton.buttonHolder.button:
          D.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleFriendListDialog);
          this.hide();
          break;
        case this.dialogDisp.playerInfo:
          D.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(T.CastlePlayerInfoDialog, new y.CastlePlayerInfoDialogProperties(this.dialogProperties.messageVO.otherPlayerID), f.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  Object.defineProperty(CastleFriendRequestDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleFriendRequestDialog.__initialize_static_members = function () {
    CastleFriendRequestDialog.NAME = "CastleFriendRequest";
  };
  return CastleFriendRequestDialog;
}(E.CastleExternalDialog);
exports.CastleFriendRequestDialog = b;
var D = require("./9.js");
var I = require("./61.js");
var T = require("./94.js");
var v = require("./759.js");
a.classImplementsInterfaces(b, "ICollectableRendererList");
b.__initialize_static_members();