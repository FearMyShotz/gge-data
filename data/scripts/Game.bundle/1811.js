Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = function (e) {
  function CastleReconnectDialog() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleInterfaceElements.CastleReconnect()) || this).itxt_title = t.textFieldManager.registerTextField(t.dialogDisp.txt_title, new s.TextVO(""));
    t.itxt_copy = t.textFieldManager.registerTextField(t.dialogDisp.txt_copy, new s.TextVO(""));
    return t;
  }
  n.__extends(CastleReconnectDialog, e);
  CastleReconnectDialog.prototype.applyProperties = function () {
    this.dialogDisp.btn_reconnect.label = this.dialogProperties.buttonLabel_reconnect;
    this.itxt_title.textContentVO.stringValue = this.dialogProperties.title;
    this.itxt_copy.textContentVO.stringValue = this.dialogProperties.copy;
  };
  CastleReconnectDialog.prototype.show = function () {
    e.prototype.show.call(this);
  };
  CastleReconnectDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_reconnect:
        this.hide();
        if (this.dialogProperties.functionReconnect != null) {
          this.dialogProperties.functionReconnect();
        }
        break;
      case this.dialogDisp.btn_hidden.children[0]:
        this.hide();
        l.CastleDialogHandler.getInstance().registerDialogs(c.CastleWorldSelectionDialog);
    }
  };
  Object.defineProperty(CastleReconnectDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReconnectDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleReconnectDialog.__initialize_static_members = function () {
    CastleReconnectDialog.NAME = o.CommonDialogNames.ReconnectDialog_NAME;
  };
  return CastleReconnectDialog;
}(require("./229.js").CastleDialog);
exports.CastleReconnectDialog = r;
var l = require("./9.js");
var c = require("./1115.js");
a.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();