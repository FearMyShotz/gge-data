Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./4.js");
var l = function (e) {
  function CastleStandardOkLoginDialog() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new (o.getDefinitionByName("CastleStandardOkLogin"))()) || this).itxt_btn_label = t.textFieldManager.registerTextField(t.dialogDisp.btn_login.txt_label, new s.LocalizedTextVO("generic_login_login"));
    t.itxt_title = t.textFieldManager.registerTextField(t.dialogDisp.txt_title, new s.LocalizedTextVO(""));
    t.itxt_copy = t.textFieldManager.registerTextField(t.dialogDisp.txt_copy, new s.LocalizedTextVO(""));
    return t;
  }
  n.__extends(CastleStandardOkLoginDialog, e);
  CastleStandardOkLoginDialog.prototype.applyProperties = function () {
    this.itxt_title.textContentVO.textId = this.standardDialogProperties.title;
    this.itxt_copy.textContentVO.textId = this.standardDialogProperties.copy;
    this.dialogDisp.btn_login.mouseChildren = false;
    this.dialogDisp.btn_login.mc_hoverState.visible = false;
    this.dialogDisp.btn_login.mc_pressedState.visible = false;
    this.dialogDisp.btn_login.actLikeButton = true;
    this.dialogDisp.btn_login.mouseChildren = false;
  };
  CastleStandardOkLoginDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_login:
        this.hide();
        if (this.standardDialogProperties.functionOk != null) {
          this.standardDialogProperties.functionOk();
        }
    }
  };
  CastleStandardOkLoginDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.btn_login) {
      this.dialogDisp.btn_login.mc_hoverState.visible = true;
    }
  };
  CastleStandardOkLoginDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (t.target == this.dialogDisp.btn_login) {
      this.dialogDisp.btn_login.mc_hoverState.visible = false;
      this.dialogDisp.btn_login.mc_pressedState.visible = false;
    }
  };
  CastleStandardOkLoginDialog.prototype.onMouseDown = function (t) {
    e.prototype.onMouseDown.call(this, t);
    if (t.target == this.dialogDisp.btn_login) {
      this.dialogDisp.btn_login.mc_pressedState.visible = true;
      this.dialogDisp.btn_login.mc_hoverState.visible = true;
    }
  };
  CastleStandardOkLoginDialog.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    if (t.target == this.dialogDisp.btn_login) {
      this.dialogDisp.btn_login.mc_pressedState.visible = false;
    }
  };
  CastleStandardOkLoginDialog.prototype.hide = function () {
    r.CastleModel.userData.blockDialogs = false;
    e.prototype.hide.call(this);
  };
  Object.defineProperty(CastleStandardOkLoginDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStandardOkLoginDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleStandardOkLoginDialog.__initialize_static_members = function () {
    CastleStandardOkLoginDialog.NAME = "StandardOkLoginDialog";
  };
  return CastleStandardOkLoginDialog;
}(require("./229.js").CastleDialog);
exports.CastleStandardOkLoginDialog = l;
a.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();