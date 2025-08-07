Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./16.js");
var _ = require("./55.js");
var m = require("./3881.js");
var f = require("./131.js");
var O = createjs.MovieClip;
var E = createjs.Point;
var y = createjs.Shape;
var b = function (e) {
  function CastleLocationCheatPanel() {
    var t = this;
    t.isShown = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, new O()) || this;
  }
  n.__extends(CastleLocationCheatPanel, e);
  CastleLocationCheatPanel.prototype.addEventListenerOnInit = function () {
    this._input = s.Input.instance;
    if (this.env.isTest || this.env.urlVariables.forceToShowTestServers) {
      document.addEventListener("keypress", this.bindFunction(this.keyboardInput));
    }
  };
  CastleLocationCheatPanel.prototype.removeEventListenerOnDestroy = function () {
    document.removeEventListener("keypress", this.bindFunction(this.keyboardInput));
  };
  CastleLocationCheatPanel.prototype.keyboardInput = function (e) {
    if (!e.ctrlKey || e.keyCode != 17 || this.isShown) {
      if (!e.ctrlKey || e.keyCode != 25 || this.isShown) {
        if (e.keyCode == 32) {
          this.clearLayer();
        }
      } else {
        this.showAllTextfieldBoxes(false);
      }
    } else {
      this.showAllTextfieldBoxes(true);
    }
  };
  CastleLocationCheatPanel.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (d.instanceOfClass(t.target, "MovieClip") && t.target.toolTipText) {
      c.System.setClipboard(t.target.toolTipText);
      this.setTextFromCheatPanel(t.target);
      if (t.target.close) {
        this.clearLayer();
      }
    }
  };
  CastleLocationCheatPanel.prototype.showAllTextfieldBoxes = function (e) {
    this.clearLayer();
    var t = this.textFieldManager.textFieldList;
    if (t != null) {
      for (var i = 0, n = Array.from(t.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && this.isTfVisible(o)) {
          this.setTextBoxByTextfield(o, e);
        }
      }
    }
    this.isShown = true;
  };
  CastleLocationCheatPanel.prototype.setTextBoxByTextfield = function (e, t) {
    var i = new O();
    var n = new y();
    n.graphics.beginFill(l.Random.integer(0, C.ClientConstColor.GENERIC_WHITE), 1);
    var o = this.disp.globalToLocal(e.originalTextField.localToGlobal(new E(0, 0)));
    var a = this.disp.globalToLocal(e.originalTextField.localToGlobal(new E(e.originalTextField.getBounds(null).width, e.originalTextField.getBounds(null).height)));
    var s = a.x - o.x;
    var r = a.y - o.y;
    n.graphics.drawRect(0, 0, s, r);
    n.graphics.endFill();
    n.setBounds(0, 0, s, r);
    i.addChild(n);
    i.x = o.x;
    i.y = o.y;
    this.disp.addChild(i);
    i.mouseChildren = false;
    i.tf = e;
    this.setToolTip(i, e, t);
  };
  CastleLocationCheatPanel.prototype.setToolTip = function (e, t, i) {
    var n;
    var s = t.textContentVO;
    var r = t.autoFitToBounds;
    t.textContentVO = new h.TextVO("");
    t.autoFitToBounds = false;
    switch (a.GGSCountryController.instance.currentCountry.ggsLanguageCode) {
      case o.BasicConstants.LANGUAGE_ARABIC:
        n = "Arabic: " + g.int(this.testToFit(t, m.LoremIpsum.ARABIC)) + "\n";
        break;
      case o.BasicConstants.LANGUAGE_JAPANESE:
      case o.BasicConstants.LANGUAGE_KOREAN:
      case o.BasicConstants.LANGUAGE_CHINESE_SIMPLE:
      case o.BasicConstants.LANGUAGE_CHINESE_TRADITIONAL:
        n = "ja/ko/ch: " + g.int(this.testToFit(t, m.LoremIpsum.JAPANESE)) + "\n";
        break;
      default:
        var l = g.int(this.testToFit(t, m.LoremIpsum.LATIN));
        var c = g.int(this.testToFit(t, m.LoremIpsum.GREEK));
        n = "Latin: " + l + "\nCyrillic: " + g.int(this.testToFit(t, m.LoremIpsum.CYRILLIC)) + "\nGreek: " + c + "\n";
    }
    t.textContentVO = s;
    t.autoFitToBounds = r;
    var u = n + "\n";
    if (d.instanceOfClass(s, "LocalizedTextVO")) {
      var p = s;
      u += "TextID:\n" + p.textId + "\n\n";
      if (i && p.textReplacements != null) {
        u += "TextReplacements:\n" + p.textReplacements + "\n\n";
      }
    }
    u += "Text:\n" + t.text;
    if (i) {
      u += "\n\n";
      u += this.getMcSourceText(t);
    }
    e.useHandCursor = true;
    e.toolTipText = u;
  };
  CastleLocationCheatPanel.prototype.getMcSourceText = function (e) {
    var t;
    var i = "*Disp-Hierarchy*\n";
    for (var n = e.originalTextField.parent; n != null && n.parent != n.stage;) {
      i += (t = (t = u.getQualifiedClassName(n)).indexOf("::") > 0 ? t.substr(t.indexOf("::") + 2) : t) + "\n";
      n = n.parent;
    }
    return i;
  };
  CastleLocationCheatPanel.prototype.testToFit = function (e, t) {
    var i;
    for (i = 1; i < t.length; i++) {
      e.textContentVO.stringValue = t.substr(0, i);
      if (e.textWidth > e.width || e.textHeight + (e.numLines > 1 ? CastleLocationCheatPanel.PIXEL_PADDING : 0) > e.height) {
        return i - 1;
      }
    }
    return -1;
  };
  CastleLocationCheatPanel.prototype.clearLayer = function () {
    r.MovieClipHelper.clearMovieClip(this.disp);
    this.isShown = false;
  };
  CastleLocationCheatPanel.prototype.isTfVisible = function (e) {
    return !!e.visible && !!e.originalTextField && !!e.originalTextField.parent && this.isObjectVisible(e.originalTextField.parent);
  };
  CastleLocationCheatPanel.prototype.isObjectVisible = function (e) {
    return !!e && !!e.visible && !!e.parent && !!e.stage && (e.parent == e.stage || this.isObjectVisible(e.parent));
  };
  CastleLocationCheatPanel.prototype.setTextFromCheatPanel = function (e) {
    var t = this.layoutManager.getPanel(D.CastleCheatPanel);
    if (t != null) {
      var i = _.ClientConstUtils.getTrimmedText(t.i_cheat_txt_input.text);
      if (e.tf != null && i.indexOf("/i18n") != -1) {
        var n = e.tf;
        var o = _.ClientConstUtils.getTrimmedText(i.indexOf(" ") > 0 ? i.substr(i.indexOf(" ") + 1) : "");
        if (o.indexOf("\"") != -1) {
          this.fillTextfieldWithTextVO(n, o);
        } else {
          this.fillTextfieldWithLocalizedTextVO(n, o);
        }
      }
    }
  };
  CastleLocationCheatPanel.prototype.fillTextfieldWithLocalizedTextVO = function (e, t) {
    var i = t.substring(0, t.indexOf(" ") > 0 ? t.indexOf(" ") : Number.MAX_VALUE);
    if (i != "") {
      var n = (t = _.ClientConstUtils.getTrimmedText(t.substring(i.length))).split(",");
      if (n.length == 1 && n[0] == "") {
        n = [];
      }
      e.textContentVO = new p.LocalizedTextVO(i, n);
    }
  };
  CastleLocationCheatPanel.prototype.fillTextfieldWithTextVO = function (e, t) {
    e.textContentVO = new h.TextVO(t.replace(/"/g, ""));
  };
  CastleLocationCheatPanel.__initialize_static_members = function () {
    CastleLocationCheatPanel.NAME = "CastleLocationCheatPanel";
    CastleLocationCheatPanel.PIXEL_PADDING = 4.75;
  };
  return CastleLocationCheatPanel;
}(f.CastlePanel);
exports.CastleLocationCheatPanel = b;
var D = require("./1108.js");
b.__initialize_static_members();