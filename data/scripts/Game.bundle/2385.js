Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./586.js");
var p = require("./102.js");
var h = require("./4.js");
var g = require("./712.js");
var C = require("./43.js");
var _ = require("./8.js");
var m = require("./35.js");
var f = require("./93.js");
var O = function (e) {
  function CastleCommunicationChat(t) {
    var i = this;
    i._memberListStartIndex = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).textFieldManager.registerTextField(i.subLayerDisp.txt_onlineTitle, new c.LocalizedTextVO("dialog_alliance_online"));
    i._itxt_miniChatVisible = i.textFieldManager.registerTextField(i.subLayerDisp.txt_miniChatVisible, new c.LocalizedTextVO("dialog_alliance_communication_minichat"));
    i._itxt_miniChatVisible.autoFitToBounds = true;
    i.subLayerDisp.mc_chatComponent.btn_enter.toolTipText = "dialog_alliance_communication_sendAnswer_button";
    i._miniChatCheckBox = i.subLayerDisp.cbx_miniChatVisible;
    _.ButtonHelper.initCheckBox(i._miniChatCheckBox);
    _.ButtonHelper.initBasicButtons([i.subLayerDisp.btn_up, i.subLayerDisp.btn_down]);
    return i;
  }
  n.__extends(CastleCommunicationChat, e);
  CastleCommunicationChat.prototype.show = function (t) {
    this.chatComponent ||= new y.CastleChatComponent(new g.CastleChatVO(this.subLayerDisp.mc_chatComponent.txt_chat, this.subLayerDisp.mc_chatComponent.txt_input, this.subLayerDisp.mc_chatComponent.btn_enter, this.subLayerDisp.mc_chatComponent.mc_blockChat, this.subLayerDisp.mc_chatComponent.btn_up, this.subLayerDisp.mc_chatComponent.btn_down, this.subLayerDisp.mc_chatComponent.btn_slider, this.subLayerDisp.mc_chatComponent.mc_sliderLine));
    this.chatComponent.onShow();
    if (!r.currentBrowserInfo.isMobile) {
      this.chatComponent.focusInput();
    }
    _.ButtonHelper.setButtonSelected(this._miniChatCheckBox, h.CastleModel.settingsData.miniChatVisible);
    h.CastleModel.chatData.isBigAllianceChatOpen = true;
    e.prototype.show.call(this, t);
    this.fillOnlineList();
    h.CastleModel.allianceData.addEventListener(p.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceInfoUpdated));
    h.CastleModel.chatData.addEventListener(d.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewMessage));
  };
  CastleCommunicationChat.prototype.hide = function () {
    h.CastleModel.chatData.isBigAllianceChatOpen = false;
    this.chatComponent.onHide();
    h.CastleModel.allianceData.removeEventListener(p.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceInfoUpdated));
    h.CastleModel.chatData.removeEventListener(d.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewMessage));
    e.prototype.hide.call(this);
  };
  CastleCommunicationChat.prototype.onAllianceInfoUpdated = function (e) {
    this.fillOnlineList();
  };
  CastleCommunicationChat.prototype.onNewMessage = function (e) {
    this.fillOnlineList();
  };
  CastleCommunicationChat.prototype.onMouseUp = function (e) {
    if (l.instanceOfClass(e.target, "CastleAllianceChatOnlineMemberItem")) {
      E.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(b.CastlePlayerInfoDialog, new f.CastlePlayerInfoDialogProperties(e.target.properties.playerID), C.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
    switch (e.target) {
      case this.subLayerDisp.btn_down:
        this._memberListStartIndex++;
        this.fillOnlineList();
        break;
      case this.subLayerDisp.btn_up:
        this._memberListStartIndex--;
        this.fillOnlineList();
        break;
      case this._miniChatCheckBox:
        h.CastleModel.settingsData.miniChatVisible = !h.CastleModel.settingsData.miniChatVisible;
        _.ButtonHelper.setButtonSelected(this._miniChatCheckBox, h.CastleModel.settingsData.miniChatVisible);
    }
  };
  CastleCommunicationChat.prototype.fillOnlineList = function () {
    s.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_onlineListHolder);
    var e = this._params[0].getOnlineUserList();
    if (e.length <= CastleCommunicationChat.MEMBER_PER_PAGE) {
      this._memberListStartIndex = 0;
    }
    this.subLayerDisp.btn_up.visible = this._memberListStartIndex > 0;
    this.subLayerDisp.btn_down.visible = e.length - this._memberListStartIndex > CastleCommunicationChat.MEMBER_PER_PAGE;
    for (var t = 0; t < CastleCommunicationChat.MEMBER_PER_PAGE; ++t) {
      var i = this._memberListStartIndex + t;
      if (i >= e.length) {
        break;
      }
      var n = new Library.CastleInterfaceElements.CastleAllianceChatOnlineMemberItem();
      n.mouseChildren = false;
      this.textFieldManager.registerTextField(n.txt_value, new u.TextVO(e[i].playerName), new a.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
      n.properties = e[i];
      n.y = t * CastleCommunicationChat.MEMBERITEM_HEIGHT;
      this.subLayerDisp.mc_onlineListHolder.addChild(n);
    }
  };
  CastleCommunicationChat.prototype.onMouseOver = function (e) {
    if (l.instanceOfClass(e.target, "CastleAllianceChatOnlineMemberItem")) {
      this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleCommunicationChat.__initialize_static_members = function () {
    CastleCommunicationChat.MEMBERITEM_HEIGHT = 15;
    CastleCommunicationChat.MEMBER_PER_PAGE = 18;
  };
  return CastleCommunicationChat;
}(m.CastleDialogSubLayer);
exports.CastleCommunicationChat = O;
var E = require("./9.js");
var y = require("./714.js");
var b = require("./94.js");
r.classImplementsInterfaces(O, "ICollectableRendererList", "ISublayer");
O.__initialize_static_members();