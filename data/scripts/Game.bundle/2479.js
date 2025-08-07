Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./2480.js");
var u = require("./4.js");
var d = require("./180.js");
var p = require("./43.js");
var h = require("./11.js");
var g = require("./93.js");
var C = function (e) {
  function CastleAllianceReadApplicationDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceReadApplicationDialog.NAME) || this;
  }
  n.__extends(CastleAllianceReadApplicationDialog, e);
  CastleAllianceReadApplicationDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_accept, this.dialogDisp.btn_deny, this.dialogDisp.btn_close, this.dialogDisp.btn_playerInfo, this.dialogDisp.btn_help]);
  };
  CastleAllianceReadApplicationDialog.prototype.showLoaded = function (t = null) {
    this._scrollComponent ||= new m.CastleTextScrollComponent(new d.CastleTextScrollVO(this.dialogDisp.txt_application, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this.dialogDisp.btn_playerInfo.toolTipText = "ringmenu_playerInfo";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_from, new r.LocalizedTextVO("dialog_read_messageFrom"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_topic, new r.LocalizedTextVO(o.GenericTextIds.VALUE_COLON, [s.Localize.text("dialog_inbox_topic")]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new r.LocalizedTextVO("dialog_alliance_applicationHeader"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_readAllianceApplicationInfo, new r.LocalizedTextVO("dialog_alliance_readApplicationInfo_confirm"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_senderrName, new l.TextVO(this.dialogProperties.applicationVO.playerOwnerInfo.playerName));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_application, new l.TextVO(this.dialogProperties.applicationVO.applicationText));
    this._scrollComponent.scrollToStart();
    this._scrollComponent.onShow();
    e.prototype.showLoaded.call(this, t);
  };
  CastleAllianceReadApplicationDialog.prototype.hideLoaded = function (t = null) {
    this._scrollComponent.onHide();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleAllianceReadApplicationDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_accept:
        this.onAcceptApplication();
        this.hide();
        break;
      case this.dialogDisp.btn_deny:
        this.onDenyApplication();
        this.hide();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_playerInfo:
        _.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(f.CastlePlayerInfoDialog, new g.CastlePlayerInfoDialogProperties(this.dialogProperties.applicationVO.playerID), p.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        break;
      case this.dialogDisp.btn_help:
        _.CastleDialogHandler.getInstance().showHelper("", s.Localize.text("help_alliance_accept_application"));
    }
  };
  CastleAllianceReadApplicationDialog.prototype.onDenyApplication = function () {
    u.CastleModel.smartfoxClient.sendCommandVO(new c.C2SAllianceAnswerApplicationVO(this.dialogProperties.applicationVO.playerID, false));
  };
  CastleAllianceReadApplicationDialog.prototype.onAcceptApplication = function () {
    u.CastleModel.smartfoxClient.sendCommandVO(new c.C2SAllianceAnswerApplicationVO(this.dialogProperties.applicationVO.playerID, true));
  };
  Object.defineProperty(CastleAllianceReadApplicationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceReadApplicationDialog.__initialize_static_members = function () {
    CastleAllianceReadApplicationDialog.NAME = "CastleReadAllianceApplicationEx";
  };
  return CastleAllianceReadApplicationDialog;
}(h.CastleExternalDialog);
exports.CastleAllianceReadApplicationDialog = C;
var _ = require("./9.js");
var m = require("./182.js");
var f = require("./94.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();