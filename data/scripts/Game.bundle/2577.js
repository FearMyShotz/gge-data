Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./1343.js");
var g = require("./2578.js");
var C = require("./4.js");
var _ = require("./180.js");
var m = require("./379.js");
var f = require("./943.js");
var O = require("./8.js");
var E = function (e) {
  function CastleApplyForMembershipDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleApplyForMembershipDialog.NAME) || this;
  }
  n.__extends(CastleApplyForMembershipDialog, e);
  CastleApplyForMembershipDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_send, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_help]);
  };
  CastleApplyForMembershipDialog.prototype.showLoaded = function (t = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_receiver, new u.LocalizedTextVO("dialog_newMessage_messageTo"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_topic, new u.LocalizedTextVO(s.GenericTextIds.VALUE_COLON, [c.Localize.text("dialog_inbox_topic")]));
    this.itxt_receiverName = this.textFieldManager.registerTextField(this.dialogDisp.txt_receiverName, new d.TextVO(this.dialogProperties.allianceVO.allianceName));
    this.itxt_header = this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new u.LocalizedTextVO("dialog_alliance_applicationHeader"));
    this._itxt_input = this.textFieldManager.registerTextField(this.dialogDisp.txt_input, new d.TextVO(""));
    this.itxt_yourtext = this.textFieldManager.registerTextField(this.dialogDisp.txt_yourtext, new u.LocalizedTextVO("dialog_newMessage_yourText"));
    this.dialogDisp.btn_cancel.toolTipText = "generic_btn_cancel";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this._letterLimiter = new f.LetterLimiter(this.dialogDisp.mc_letterLimit, this._itxt_input);
    this._scrollComponent = new b.CastleTextScrollComponent(new _.CastleTextScrollVO(this.dialogDisp.txt_input, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    o.BasicLayoutManager.getInstance().revertFullscreen();
    this._itxt_input.maxChars = l.MessageConst.MAX_LENGTH_TEXT;
    new m.CastleFullScreenInputBlocker(this.dialogDisp.mc_block);
    this._scrollComponent.onShow();
    this._itxt_input.change.add(this.bindFunction(this.updateSendButton));
    this.updateSendButton();
    e.prototype.showLoaded.call(this, t);
  };
  CastleApplyForMembershipDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this._letterLimiter.addEventListeners();
  };
  CastleApplyForMembershipDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this._letterLimiter.removeEventListeners();
  };
  CastleApplyForMembershipDialog.prototype.updateSendButton = function (e = null) {
    switch (p.int(h.ClientConstMessage.isValidText(this._itxt_input.text))) {
      case h.ClientConstMessage.TEXT_INVALID_TEXT_TOO_SHORT:
        O.ButtonHelper.enableButton(this.dialogDisp.btn_send, false);
        this.dialogDisp.btn_send.toolTipText = {
          t: "dialog_alliance_communication_shortText_tooltip",
          p: [h.ClientConstMessage.MINIMUM_LENGTH]
        };
        break;
      case h.ClientConstMessage.TEXT_INVALID_MISSING_TEXT:
        O.ButtonHelper.enableButton(this.dialogDisp.btn_send, false);
        this.dialogDisp.btn_send.toolTipText = "dialog_newMessage_missingText";
        break;
      case h.ClientConstMessage.TEXT_VALID:
      default:
        O.ButtonHelper.enableButton(this.dialogDisp.btn_send, true);
        this.dialogDisp.btn_send.toolTipText = "dialog_alliance_applyForMembership";
    }
  };
  CastleApplyForMembershipDialog.prototype.hideLoaded = function (t = null) {
    this._scrollComponent.onHide();
    this._itxt_input.change.remove(this.bindFunction(this.updateSendButton));
    e.prototype.hideLoaded.call(this);
  };
  CastleApplyForMembershipDialog.prototype.onClick = function (t) {
    if (O.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_send:
          this.onSendApplication();
          this.hide();
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          y.CastleDialogHandler.getInstance().showHelper("", c.Localize.text("help_alliance_application"));
      }
    }
  };
  CastleApplyForMembershipDialog.prototype.onSendApplication = function () {
    var e = this._itxt_input.text;
    if (e && e != "") {
      C.CastleModel.smartfoxClient.sendCommandVO(new g.C2SAllianceSendApplicationVO(this.dialogProperties.allianceVO.allianceId, e));
    } else {
      y.CastleDialogHandler.getInstance().registerDefaultDialogs(D.CastleStandardOkDialog, new a.BasicStandardOkDialogProperties(c.Localize.text("dialog_newMessage_message"), c.Localize.text("dialog_newMessage_missingText")));
    }
  };
  Object.defineProperty(CastleApplyForMembershipDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleApplyForMembershipDialog.__initialize_static_members = function () {
    CastleApplyForMembershipDialog.NAME = "CastleApplyForMembershipEx";
  };
  return CastleApplyForMembershipDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleApplyForMembershipDialog = E;
var y = require("./9.js");
var b = require("./182.js");
var D = require("./38.js");
r.classImplementsInterfaces(E, "ICollectableRendererList");
E.__initialize_static_members();