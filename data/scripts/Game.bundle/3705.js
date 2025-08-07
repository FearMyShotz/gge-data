Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./258.js");
var d = require("./3706.js");
var p = require("./4.js");
var h = require("./819.js");
var g = require("./11.js");
var C = createjs.FocusEvent;
var _ = function (e) {
  function CastleEilandAssignTitleDialog() {
    return e.call(this, CastleEilandAssignTitleDialog.NAME) || this;
  }
  n.__extends(CastleEilandAssignTitleDialog, e);
  CastleEilandAssignTitleDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel]);
  };
  CastleEilandAssignTitleDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    var i;
    var n;
    var o = this.dialogProperties.revokeAssignedTitle ? "dialog_eiland_titleMenu_title_take_header" : "dialog_eiland_titleMenu_title_give_header";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new l.LocalizedTextVO(o)).autoFitToBounds = true;
    this.dialogDisp.mc_assignComponent.titleBackground.gotoAndStop(this.dialogProperties.titleVO.isPositive ? 1 : 2);
    this.dialogDisp.mc_assignComponent.visible = !this.dialogProperties.revokeAssignedTitle;
    this.itxt_description_long = this.textFieldManager.registerTextField(this.dialogDisp.txt_description_long, new l.LocalizedTextVO(""));
    this.itxt_description_long.autoFitToBounds = true;
    this.itxt_description_short = this.textFieldManager.registerTextField(this.dialogDisp.txt_description_short, new l.LocalizedTextVO(""));
    this.itxt_description_short.autoFitToBounds = true;
    if (this.dialogProperties.revokeAssignedTitle) {
      i = "dialog_eiland_titleMenu_title_take_text";
      n = [this.dialogProperties.titleVO.textID, this.dialogProperties.titleVO.currentAssignee];
      this.itxt_description_long.textContentVO.textId = i;
      this.itxt_description_long.textContentVO.textReplacements = n;
      this.dialogDisp.txt_description_short.visible = false;
      this.itxt_description_long.visible = true;
      this.itxt_description_long.mouseEnabled = true;
    } else {
      if (this.alreadyAssigned) {
        i = "dialog_eiland_titleMenu_title_text_giveAgain";
        n = [this.dialogProperties.titleVO.textID, this.dialogProperties.titleVO.currentAssignee];
      } else {
        i = "dialog_eiland_titleMenu_title_text_give";
        n = [this.dialogProperties.titleVO.textID];
      }
      this.itxt_description_short.textContentVO.textId = i;
      this.itxt_description_short.textContentVO.textReplacements = n;
      this.dialogDisp.txt_description_short.visible = true;
      this.dialogDisp.txt_description_long.visible = false;
      this.itxt_description_long.visible = false;
      this.itxt_description_long.mouseEnabled = false;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.mc_assignComponent.txt_bonus, new c.TextVO(h.CastleEilandTextComposer.generateBonusText(this.dialogProperties.titleVO))).autoFitToBounds = true;
    this.dialogDisp.mc_assignComponent.txt_name.type = s.TextFieldType.INPUT;
    this.dialogDisp.mc_assignComponent.txt_name.maxChars = u.CredentialsValidationConstants.USERNAME_MAX_LENGTH + 6;
    this.nameInputText = this.textFieldManager.registerTextField(this.dialogDisp.mc_assignComponent.txt_name, new l.LocalizedTextVO(CastleEilandAssignTitleDialog.DEFAULT_INPUT_TEXT_ID));
    this.defaultInputText = this.nameInputText.text;
  };
  CastleEilandAssignTitleDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    if (!this.dialogProperties.revokeAssignedTitle) {
      this.dialogDisp.mc_assignComponent.txt_name.addEventListener(C.FOCUS_IN, this.bindFunction(this.onFocusInInputText));
      this.dialogDisp.mc_assignComponent.txt_name.addEventListener(C.FOCUS_OUT, this.bindFunction(this.onFocusOutInputText));
      this.dialogDisp.mc_assignComponent.txt_name.addEventListener(a.KeyboardEvent.KEY_DOWN, this.bindFunction(this.inputKeyDown));
    }
  };
  CastleEilandAssignTitleDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    if (!this.dialogProperties.revokeAssignedTitle) {
      this.dialogDisp.mc_assignComponent.txt_name.removeEventListener(C.FOCUS_IN, this.bindFunction(this.onFocusInInputText));
      this.dialogDisp.mc_assignComponent.txt_name.removeEventListener(C.FOCUS_OUT, this.bindFunction(this.onFocusOutInputText));
      this.dialogDisp.mc_assignComponent.txt_name.removeEventListener(a.KeyboardEvent.KEY_DOWN, this.bindFunction(this.inputKeyDown));
    }
  };
  CastleEilandAssignTitleDialog.prototype.inputKeyDown = function (e) {
    if (e.key == o.Keyboard.ENTER && this.nameInputText.text != "" && this.nameInputText.text != this.defaultInputText && !this.dialogProperties.revokeAssignedTitle) {
      document.activeElement.blur();
      this.onConfirmAssignment();
    }
  };
  CastleEilandAssignTitleDialog.prototype.onFocusInInputText = function (e) {
    if (this.nameInputText.text == this.defaultInputText) {
      this.nameInputText.clearText();
    }
  };
  CastleEilandAssignTitleDialog.prototype.onFocusOutInputText = function (e) {
    if (this.nameInputText.text == "") {
      this.nameInputText.textContentVO = new l.LocalizedTextVO(CastleEilandAssignTitleDialog.DEFAULT_INPUT_TEXT_ID);
    }
  };
  CastleEilandAssignTitleDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancel:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.onConfirmAssignment();
    }
  };
  CastleEilandAssignTitleDialog.prototype.onConfirmAssignment = function () {
    if (this.dialogProperties.revokeAssignedTitle) {
      p.CastleModel.smartfoxClient.sendCommandVO(new d.C2SAssignTitleVO(this.dialogProperties.titleVO.titleID, ""));
    } else {
      this.inputText = this.nameInputText.text;
      p.CastleModel.smartfoxClient.sendCommandVO(new d.C2SAssignTitleVO(this.dialogProperties.titleVO.titleID, this.inputText));
    }
    this.hide();
  };
  Object.defineProperty(CastleEilandAssignTitleDialog.prototype, "alreadyAssigned", {
    get: function () {
      return !!this.dialogProperties.titleVO.currentAssignee && this.dialogProperties.titleVO.currentAssignee != "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandAssignTitleDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandAssignTitleDialog.NAME = "CastleEilandAssignTitle";
  CastleEilandAssignTitleDialog.DEFAULT_INPUT_TEXT_ID = "dialog_renameLord_insertText";
  return CastleEilandAssignTitleDialog;
}(g.CastleExternalDialog);
exports.CastleEilandAssignTitleDialog = _;
r.classImplementsInterfaces(_, "ICollectableRendererList");