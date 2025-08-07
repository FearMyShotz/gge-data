Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./607.js");
var d = require("./140.js");
var p = require("./4.js");
var h = require("./11.js");
var g = require("./1088.js");
var C = function (e) {
  function CastleEilandTitleMessageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleEilandTitleMessageDialog.NAME) || this;
  }
  n.__extends(CastleEilandTitleMessageDialog, e);
  CastleEilandTitleMessageDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_help, this.dialogDisp.btn_cancel, this.dialogDisp.btn_titleMenu]);
    this.dialogDisp.btn_titleMenu.toolTipText = "dialog_eiland_titleMessage_titleOverview_tooltip";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleEilandTitleMessageDialog.prototype.applyProperties = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO(this.dialogProperties.messageVO.subject)).autoFitToBounds = true;
    p.CastleModel.smartfoxClient.sendCommandVO(new u.C2SReadMessagesVO(this.dialogProperties.messageVO.messageID));
    this.controller.addEventListener(d.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onGetTitleData));
  };
  CastleEilandTitleMessageDialog.prototype.onGetTitleData = function (e) {
    this.parseParams(e.params);
    this.controller.removeEventListener(d.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onGetTitleData));
  };
  CastleEilandTitleMessageDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.controller.removeEventListener(d.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onGetTitleData));
  };
  CastleEilandTitleMessageDialog.prototype.parseParams = function (e) {
    this.paramArray = e[0].split(s.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    var t = c.int(this.paramArray[0]);
    this.titleVO = p.CastleModel.titleData.getTitleByTitleID(t);
    this.kingName = this.paramArray[1];
  };
  CastleEilandTitleMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_cancel:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        _.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_eiland_titleMessage"));
        break;
      case this.dialogDisp.btn_titleMenu:
        this.hide();
        _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleEilandRankingDialog, new g.CastleEilandRankingDialogProperties(g.CastleEilandRankingDialogProperties.SUBLAYER_TITLE));
    }
  };
  Object.defineProperty(CastleEilandTitleMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandTitleMessageDialog.prototype.adjustTextSize = function () {
    this.dialogDisp.txt_copy.wordWrap = true;
    this.dialogDisp.txt_copy.multiline = true;
    this.dialogDisp.txt_copy.autoSize = o.TextFieldAutoSize.CENTER;
  };
  CastleEilandTitleMessageDialog.__initialize_static_members = function () {
    CastleEilandTitleMessageDialog.NAME = "CastleEilandTitleMessage";
  };
  return CastleEilandTitleMessageDialog;
}(h.CastleExternalDialog);
exports.CastleEilandTitleMessageDialog = C;
var _ = require("./9.js");
var m = require("./1089.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();