Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./1381.js");
var u = require("./4.js");
var d = require("./180.js");
var p = require("./379.js");
var h = function (e) {
  function CastleChangeAnouncementDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleChangeAnouncementDialog.NAME) || this;
  }
  n.__extends(CastleChangeAnouncementDialog, e);
  CastleChangeAnouncementDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_no, this.dialogDisp.btn_yes]);
  };
  CastleChangeAnouncementDialog.prototype.showLoaded = function (t = null) {
    this._scrollComponent ||= new g.CastleTextScrollComponent(new d.CastleTextScrollVO(this.dialogDisp.txt_description, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_alliance_changeAnouncement_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_descTitle, new r.LocalizedTextVO("dialog_alliance_changeAnouncement_new"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_alliance_changeAnouncement"));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new l.TextVO(u.CastleModel.allianceData.myAllianceVO.anouncement));
    this.itxt_description.maxChars = s.AllianceConst.DESCRIPTION_MAX_LENGTH;
    this.itxt_description.selectable = true;
    this._scrollComponent.scrollToStart();
    new p.CastleFullScreenInputBlocker(this.dialogDisp.mc_block);
    this._scrollComponent.onShow();
    e.prototype.showLoaded.call(this, t);
  };
  CastleChangeAnouncementDialog.prototype.hideLoaded = function (t = null) {
    this._scrollComponent.onHide();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleChangeAnouncementDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_no:
        this.hide();
        break;
      case this.dialogDisp.btn_yes:
        this.sendDescription();
        this.hide();
    }
  };
  CastleChangeAnouncementDialog.prototype.onCursorOver = function (t) {
    e.prototype.onCursorOver.call(this, t);
    if (t.target == this.dialogDisp.txt_description) {
      this.layoutManager.customCursor.hideCustomCursor();
    }
  };
  CastleChangeAnouncementDialog.prototype.onCursorOut = function (t) {
    e.prototype.onCursorOut.call(this, t);
    if (t.target == this.dialogDisp.txt_description) {
      this.layoutManager.customCursor.showCustomCursor();
    }
  };
  CastleChangeAnouncementDialog.prototype.sendDescription = function () {
    if (this.dialogProperties.allianceVO.anouncement != this.itxt_description.text) {
      if (this.itxt_description.text == "") {
        u.CastleModel.smartfoxClient.sendCommandVO(new c.C2SAllianceChangeDescriptionVO(o.TextValide.getValideSmartFoxJSONTextMessage(""), 0));
      } else if (o.TextValide.isSmartFoxValide(this.itxt_description.text)) {
        u.CastleModel.smartfoxClient.sendCommandVO(new c.C2SAllianceChangeDescriptionVO(o.TextValide.getValideSmartFoxJSONTextMessage(this.itxt_description.text), 0));
      } else {
        u.CastleModel.smartfoxClient.sendCommandVO(new c.C2SAllianceChangeDescriptionVO(o.TextValide.getCleanChatText(this.itxt_description.text), 0));
      }
    }
  };
  Object.defineProperty(CastleChangeAnouncementDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleChangeAnouncementDialog.__initialize_static_members = function () {
    CastleChangeAnouncementDialog.NAME = "CastleChangeDescriptionEx";
  };
  return CastleChangeAnouncementDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleChangeAnouncementDialog = h;
var g = require("./182.js");
a.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();