Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./16.js");
var u = function (e) {
  function CastleLocaToolDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, new Library.CastleInterfaceElements.CastleServerMessageBig()) || this;
  }
  n.__extends(CastleLocaToolDialog, e);
  CastleLocaToolDialog.prototype.applyProperties = function () {
    var e = new s.HTMLTextCustomVO();
    var t = this.createContent();
    e.addLocalizedTextVO(new l.LocalizedTextVO(t));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, e);
  };
  CastleLocaToolDialog.prototype.createContent = function () {
    var e = this.dialogProperties.textId;
    if (e == "") {
      return this.errorTextNoTextID + "\n\n" + this.howToUseText;
    }
    var t = this.dialogProperties.params.concat();
    if (t.length == 1 && t[0] == "") {
      t = [];
    } else {
      for (var i = 0; i < t.length; i++) {
        t[i] = "<font color=\"#" + o.Random.integer(0, c.ClientConstColor.GENERIC_WHITE) + "\">" + t[i] + "</font>";
      }
    }
    var n = "TextID : " + e + "<br /><br />";
    if (t.length > 0) {
      n += "Params : " + t + "<br /><br />";
    }
    n += "Displayed Text:<br />";
    n += r.Localize.text(e, t);
    return n += "\n\n\n" + this.howToUseText;
  };
  CastleLocaToolDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleLocaToolDialog.prototype, "errorTextNoTextID", {
    get: function () {
      return "No TextID found! Use this Format: <font color=\"#008800\">/i18n</font> <font color=\"#FF0000\">textID</font> <font color=\"#0000FF\">1,2,3,4</font><br /><font color=\"#0000FF\">for more Placeholder use ',' to add them</font>";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLocaToolDialog.prototype, "howToUseText", {
    get: function () {
      return "To insert your text into a textfield:\nuse Ctrl + L\nand click on your target while this cheat is in the input text field of your cheat panel.\n<font color=\"#880000\">You don't need to push ENTER</font>";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLocaToolDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLocaToolDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleLocaToolDialog.__initialize_static_members = function () {
    CastleLocaToolDialog.NAME = "CastleLocaToolDialog";
  };
  return CastleLocaToolDialog;
}(require("./229.js").CastleDialog);
exports.CastleLocaToolDialog = u;
a.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();