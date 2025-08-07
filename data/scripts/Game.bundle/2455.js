Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./1381.js");
var u = require("./4.js");
var d = require("./224.js");
var p = require("./938.js");
var h = function (e) {
  function CastleChangeDescriptionDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleChangeDescriptionDialog.NAME) || this;
  }
  n.__extends(CastleChangeDescriptionDialog, e);
  CastleChangeDescriptionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    m.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_no, this.dialogDisp.btn_yes], f.ClickFeedbackButtonHover);
    this.dialogDisp.mc_description.txt_description.height = 270;
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.mc_description.txt_description, new l.TextVO(""));
    this.itxt_description.type = a.TextFieldType.INPUT;
    this._scrollComponent = new C.ModernTextScrollComponent(new g.SimpleScrollVO().initByParent(this.dialogDisp).addVisualElements([this.dialogDisp.bg_slider]).addMouseWheelElements([this.dialogDisp]), this.dialogDisp.mc_description.txt_description);
  };
  CastleChangeDescriptionDialog.prototype.showLoaded = function (t = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_alliance_editDescription"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_descTitle, new r.LocalizedTextVO("dialog_alliance_description_new"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_description_copy")));
    this._messageTextRestrictor = new p.CastleJSONTextFieldRestrictor();
    this._messageTextRestrictor.init(this.itxt_description, s.AllianceConst.DESCRIPTION_MAX_LENGTH);
    this.itxt_description.textContentVO.stringValue = this.dialogProperties.allianceVO.allianceDescription;
    this.itxt_description.selectable = true;
    this._inputBehaviourDesc = new _.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_description, this.itxt_description, false);
    this._scrollComponent.scrollToStart();
    this._scrollComponent.onShow();
    this._inputBehaviourDesc.onShow();
    e.prototype.showLoaded.call(this, t);
  };
  CastleChangeDescriptionDialog.prototype.hideLoaded = function (t = null) {
    this._scrollComponent.onHide();
    this._inputBehaviourDesc.onHide();
    e.prototype.hideLoaded.call(this);
  };
  CastleChangeDescriptionDialog.prototype.onClick = function (t) {
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
  CastleChangeDescriptionDialog.prototype.onCursorOver = function (t) {
    e.prototype.onCursorOver.call(this, t);
    if (t.target == this.dialogDisp.txt_description) {
      this.layoutManager.customCursor.hideCustomCursor();
    }
  };
  CastleChangeDescriptionDialog.prototype.onCursorOut = function (t) {
    e.prototype.onCursorOut.call(this, t);
    if (t.target == this.dialogDisp.txt_description) {
      this.layoutManager.customCursor.showCustomCursor();
    }
  };
  CastleChangeDescriptionDialog.prototype.sendDescription = function () {
    if (this.dialogProperties.allianceVO.allianceDescription != this.itxt_description.text) {
      if (this.itxt_description.text == "") {
        u.CastleModel.smartfoxClient.sendCommandVO(new c.C2SAllianceChangeDescriptionVO("", 1));
      } else {
        var e = d.CastleAllianceForumData.getForumValidText(this.itxt_description.text);
        u.CastleModel.smartfoxClient.sendCommandVO(new c.C2SAllianceChangeDescriptionVO(e, 1));
      }
    }
  };
  Object.defineProperty(CastleChangeDescriptionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleChangeDescriptionDialog.NAME = "CastleChangeDescriptionEx_W";
  return CastleChangeDescriptionDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleChangeDescriptionDialog = h;
var g = require("./47.js");
var C = require("./745.js");
var _ = require("./284.js");
var m = require("./8.js");
var f = require("./20.js");
var O = require("./13.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");