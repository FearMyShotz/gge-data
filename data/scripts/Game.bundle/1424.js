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
var u = require("./1.js");
var d = require("./1.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./978.js");
var C = require("./2609.js");
var _ = require("./32.js");
var m = require("./4.js");
var f = require("./8.js");
var O = require("./11.js");
var E = require("./980.js");
var y = function (e) {
  function InviteAFriendLinkDialog() {
    var t = this;
    t._copyBtnStateChangeDelayID = 0;
    t._copyBtnStateChangeDelay = 5000;
    t._tfLinkHasFocus = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, InviteAFriendLinkDialog.NAME) || this;
  }
  n.__extends(InviteAFriendLinkDialog, e);
  InviteAFriendLinkDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_copy_url]);
    this._copyBtnLabel = this.textFieldManager.registerTextField(this.dialogDisp.btn_copy_url.tf_label, new p.LocalizedTextVO(InviteAFriendLinkDialog.TEXT_ID_COPY));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_title, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_linkHeader"));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_instruction, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_linkText")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.tf_desc, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_linkUse")).autoFitToBounds = true;
    this.dialogDisp.tf_invite_link.getTextFormat().align = "left";
  };
  InviteAFriendLinkDialog.prototype.showLoaded = function (t = null) {
    this._iTxtLink = this.textFieldManager.registerTextField(this.dialogDisp.tf_invite_link, new h.TextVO(this.referralLink));
    this.dialogDisp.tf_invite_link.selectable = false;
    this._iTxtLink.wordwrap = false;
    this._iTxtLink.focusIn.add(this.bindFunction(this.onUrlFocusIn));
    this._iTxtLink.focusOut.add(this.bindFunction(this.onUrlFocusOut));
    this.selectCopyBtn(false);
    this.controller.addEventListener(_.CastleUserDataEvent.FRIEND_INVITE_INFO_UPDATED, this.bindFunction(this.onInviteInfoUpdated));
    m.CastleModel.smartfoxClient.sendCommandVO(new g.C2SFriendInviteInfoVO());
    e.prototype.showLoaded.call(this, t);
  };
  Object.defineProperty(InviteAFriendLinkDialog.prototype, "referralLink", {
    get: function () {
      return m.CastleModel.inviteFriendsData.referralLink + b.CastleInviteFriendsData.SUFFIX_REFER_METHOD_LINK;
    },
    enumerable: true,
    configurable: true
  });
  InviteAFriendLinkDialog.prototype.trackLinkEvent = function (e) {
    var t = new r.InvitationTrackingCommandVO();
    t.action = e;
    t.referMethod = b.CastleInviteFriendsData.REFERRAL_CODE_TYPE_LINK;
    a.CommandController.instance.executeCommand(o.BasicController.COMMAND_TRACK_INVITATION, t);
  };
  InviteAFriendLinkDialog.prototype.onInviteInfoUpdated = function (e) {
    this.controller.removeEventListener(_.CastleUserDataEvent.FRIEND_INVITE_INFO_UPDATED, this.bindFunction(this.onInviteInfoUpdated));
  };
  InviteAFriendLinkDialog.prototype.onUrlFocusIn = function (e) {
    this._tfLinkHasFocus = true;
  };
  InviteAFriendLinkDialog.prototype.onUrlFocusOut = function (e) {
    this._tfLinkHasFocus = false;
  };
  InviteAFriendLinkDialog.prototype.onKeyUp = function (t) {
    e.prototype.onKeyUp.call(this, t);
    if (this._tfLinkHasFocus && t.ctrlKey) {
      switch (t.key) {
        case u.Keyboard.C:
        case u.Keyboard.X:
          this.copyUrl();
      }
    }
  };
  InviteAFriendLinkDialog.prototype.selectUrl = function () {
    this._iTxtLink.setFocus();
    this._iTxtLink.setSelection(0, this._iTxtLink.text.length);
    this._iTxtLink.scrollV = 1;
  };
  InviteAFriendLinkDialog.prototype.onClick = function (t) {
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.link_hitarea:
        case this.dialogDisp.tf_invite_link:
          this.selectUrl();
          break;
        case this.dialogDisp.btn_instructions:
          D.CastleDialogHandler.getInstance().registerDefaultDialogs(I.InviteAFriendInstructionsDialog, new E.InviteAFriendInstructionsProperties(I.InviteAFriendInstructionsDialog.PAGE_NUMBER_LINK));
          break;
        case this.dialogDisp.btn_copy_url:
          this.selectUrl();
          this.copyUrl();
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          D.CastleDialogHandler.getInstance().registerDefaultDialogs(I.InviteAFriendInstructionsDialog, new E.InviteAFriendInstructionsProperties(I.InviteAFriendInstructionsDialog.PAGE_NUMBER_LINK));
      }
    }
  };
  InviteAFriendLinkDialog.prototype.copyUrl = function () {
    this.selectCopyBtn(true);
    if (this._copyBtnStateChangeDelayID != -1) {
      window.clearTimeout(this._copyBtnStateChangeDelayID);
    }
    this._copyBtnStateChangeDelayID = window.setTimeout(this.bindFunction(this.selectCopyBtn), this._copyBtnStateChangeDelay, false);
    l.Clipboard.generalClipboard.clear();
    l.Clipboard.generalClipboard.setData(c.ClipboardFormats.TEXT_FORMAT, this.referralLink, false);
    m.CastleModel.smartfoxClient.sendCommandVO(new C.C2SInviteCodeCopiedToClipboardVO());
    this.trackLinkEvent(s.InvitationConst.COPIED_TO_CLIPBOARD);
  };
  InviteAFriendLinkDialog.prototype.selectCopyBtn = function (e) {
    this._copyBtnStateChangeDelayID = -1;
    if (e) {
      f.ButtonHelper.enableButton(this.dialogDisp.btn_copy_url, false);
      this._copyBtnLabel = this.textFieldManager.registerTextField(this.dialogDisp.btn_copy_url.tf_label, new p.LocalizedTextVO("dialog_referFriend_inviteDialog_copied_tooltip"));
      this._copyBtnLabel.autoFitToBounds = true;
      this.dialogDisp.btn_copy_url.toolTipText = "dialog_referFriend_inviteDialog_linkCopied_tooltip";
    } else {
      this._copyBtnLabel = this.textFieldManager.registerTextField(this.dialogDisp.btn_copy_url.tf_label, new p.LocalizedTextVO(InviteAFriendLinkDialog.TEXT_ID_COPY));
      this._copyBtnLabel.autoFitToBounds = true;
      this.dialogDisp.btn_copy_url.toolTipText = "dialog_referFriend_inviteDialog_copyLink_tooltip";
      f.ButtonHelper.enableButton(this.dialogDisp.btn_copy_url, true);
    }
  };
  InviteAFriendLinkDialog.__initialize_static_members = function () {
    InviteAFriendLinkDialog.NAME = "InviteAFriendLink";
    InviteAFriendLinkDialog.TEXT_ID_COPY = "dialog_referFriend_inviteDialog_copy_tooltip";
  };
  return InviteAFriendLinkDialog;
}(O.CastleExternalDialog);
exports.InviteAFriendLinkDialog = y;
var b = require("./434.js");
var D = require("./9.js");
var I = require("./979.js");
d.classImplementsInterfaces(y, "ICollectableRendererList");
y.__initialize_static_members();