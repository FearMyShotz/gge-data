Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./91.js");
var r = require("./229.js");
var l = createjs.Point;
var c = function (e) {
  function CastleServerMessageBigDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, new Library.CastleInterfaceElements.CastleServerMessageBig()) || this;
  }
  n.__extends(CastleServerMessageBigDialog, e);
  CastleServerMessageBigDialog.prototype.applyProperties = function () {
    this.textFieldManager.registerTextField(this.dialog.txt_title, new a.TextVO(this.dialogProperties.title));
  };
  CastleServerMessageBigDialog.prototype.show = function () {
    e.prototype.show.call(this);
    if (!this.htmlText) {
      var t = this.dialog.localToGlobal(new l(this.dialog.txt_copy.x, this.dialog.txt_copy.y));
      var i = this.dialog.txt_copy.getTextFormat();
      this.htmlText = document.createElement("div");
      this.htmlText.style.overflow = "auto";
      this.htmlText.style.height = this.dialog.txt_copy.height + "px";
      this.htmlText.style.width = this.dialog.txt_copy.width + "px";
      this.htmlText.style.position = "absolute";
      this.htmlText.style.left = t.x + "px";
      this.htmlText.style.top = t.y + "px";
      this.htmlText.style.fontFamily = i.font;
      this.htmlText.style.fontSize = i.size + "px";
      this.htmlText.style.whiteSpace = "pre-wrap";
      this.htmlText.innerHTML = this.dialogProperties.copy;
      document.body.appendChild(this.htmlText);
    }
    this.controller.addEventListener(s.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onTopDialogChanged));
    this.controller.addEventListener(s.CastleLayoutManagerEvent.HIDE_DIALOG, this.bindFunction(this.onTopDialogChanged));
  };
  CastleServerMessageBigDialog.prototype.onTopDialogChanged = function (e) {
    var t = this.layoutManager.highestShownDialog;
    this.htmlText.style.visibility = t && this == t ? "visible" : "hidden";
  };
  CastleServerMessageBigDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialog.btn_close:
        this.hide();
    }
  };
  CastleServerMessageBigDialog.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.htmlText) {
      this.htmlText.parentElement.removeChild(this.htmlText);
      this.htmlText = null;
    }
    this.controller.removeEventListener(s.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onTopDialogChanged));
    this.controller.removeEventListener(s.CastleLayoutManagerEvent.HIDE_DIALOG, this.bindFunction(this.onTopDialogChanged));
  };
  Object.defineProperty(CastleServerMessageBigDialog.prototype, "dialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleServerMessageBigDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleServerMessageBigDialog.__initialize_static_members = function () {
    CastleServerMessageBigDialog.NAME = "CastleServerMessageBigDialog";
  };
  return CastleServerMessageBigDialog;
}(r.CastleDialog);
exports.CastleServerMessageBigDialog = c;
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();