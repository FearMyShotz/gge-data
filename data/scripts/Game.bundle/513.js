Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./69.js");
var p = require("./379.js");
var h = require("./8.js");
var g = function (e) {
  function BasicRenameDialog(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t || BasicRenameDialog.NAME) || this;
  }
  n.__extends(BasicRenameDialog, e);
  BasicRenameDialog.prototype.initLoaded = function (t = null) {
    var i = new Array();
    if (this.buttonOk) {
      i.push(this.buttonOk);
    }
    if (this.buttonBack) {
      i.push(this.buttonBack);
    }
    if (this.buttonClose) {
      i.push(this.buttonClose);
    }
    this.initBasicButtons(i);
    e.prototype.initLoaded.call(this, t);
  };
  BasicRenameDialog.prototype.showLoaded = function (t = null) {
    this.itxt_insert = this.initDynamicText(this.nameTextField, this.defaultName);
    this.itxt_insert.type = s.TextFieldType.INPUT;
    this.itxt_insert.maxChars = this.textMaxChars;
    this.newName = this.defaultName;
    if (this.blockMovieClip) {
      new p.CastleFullScreenInputBlocker(this.blockMovieClip);
      o.BasicLayoutManager.getInstance().revertFullscreen();
    }
    e.prototype.showLoaded.call(this, t);
  };
  Object.defineProperty(BasicRenameDialog.prototype, "nameTextField", {
    get: function () {
      return this.disp.txt_insert;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicRenameDialog.prototype, "blockMovieClip", {
    get: function () {
      return this.disp.mc_block;
    },
    enumerable: true,
    configurable: true
  });
  BasicRenameDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.buttonOk:
          this.validateAndSend();
          break;
        case this.buttonBack:
        case this.buttonClose:
          this.hide();
      }
    }
  };
  Object.defineProperty(BasicRenameDialog.prototype, "buttonClose", {
    get: function () {
      return this.disp.btn_close;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicRenameDialog.prototype, "buttonBack", {
    get: function () {
      return this.disp.btn_back;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicRenameDialog.prototype, "buttonOk", {
    get: function () {
      return this.disp.btn_ok;
    },
    enumerable: true,
    configurable: true
  });
  BasicRenameDialog.prototype.validateAndSend = function () {
    if (this.validate()) {
      this.sendCommand();
    }
  };
  BasicRenameDialog.prototype.validate = function () {
    return true;
  };
  BasicRenameDialog.prototype.sendCommand = function () {
    throw new d.AbstractMethodError();
  };
  BasicRenameDialog.prototype.alert = function (e, t) {
    this.layoutManager.showDialog(C.CastleStandardOkDialog, new a.BasicStandardOkDialogProperties(l.Localize.text(e), l.Localize.text(t)));
  };
  BasicRenameDialog.prototype.initStaticText = function (e, t) {
    return this.textFieldManager.registerTextField(e, new c.LocalizedTextVO(t));
  };
  BasicRenameDialog.prototype.initDynamicText = function (e, t) {
    if (this.textFieldManager.getTextField(e)) {
      this.textFieldManager.unregisterTextField(e);
    }
    return this.textFieldManager.registerTextField(e, new u.TextVO(t));
  };
  Object.defineProperty(BasicRenameDialog.prototype, "defaultName", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicRenameDialog.prototype, "textMaxChars", {
    get: function () {
      return BasicRenameDialog.DEFAULT_MAX_CHARS;
    },
    enumerable: true,
    configurable: true
  });
  BasicRenameDialog.prototype.addEventListenerOnShow = function () {
    this.itxt_insert.focusIn.add(this.bindFunction(this.onFocusIn));
    this.itxt_insert.focusOut.add(this.bindFunction(this.onFocusOut));
  };
  BasicRenameDialog.prototype.removeEventListenerOnHide = function () {
    this.itxt_insert.focusIn.remove(this.bindFunction(this.onFocusIn));
    this.itxt_insert.focusOut.remove(this.bindFunction(this.onFocusOut));
  };
  BasicRenameDialog.prototype.onFocusIn = function (e) {
    if (this.itxt_insert.text == this.defaultName) {
      this.newName = "";
      this.itxt_insert.clearText();
    }
  };
  BasicRenameDialog.prototype.onFocusOut = function (e) {
    if (this.itxt_insert.text == "") {
      this.newName = this.defaultName;
    } else {
      this.newName = this.itxt_insert.text.trim();
    }
  };
  Object.defineProperty(BasicRenameDialog.prototype, "newName", {
    get: function () {
      return this.itxt_insert.textContentVO.stringValue;
    },
    set: function (e) {
      this.itxt_insert.textContentVO.stringValue = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicRenameDialog.__initialize_static_members = function () {
    BasicRenameDialog.NAME = "CastleNameAlliance";
    BasicRenameDialog.DEFAULT_MAX_CHARS = 30;
  };
  return BasicRenameDialog;
}(require("./11.js").CastleExternalDialog);
exports.BasicRenameDialog = g;
var C = require("./38.js");
r.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();