Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./16.js");
var _ = createjs.MouseEvent;
var m = function () {
  function LinkComponent(e, t, i) {
    this.verticalAlign = s.GGSVerticalAlign.MIDDLE;
    this._colorData = [];
    this._disp = e;
    this._textId = t;
    this._navigateURL = i;
    this._disp.addEventListener(_.ROLL_OVER, this.bindFunction(this.onOverAGB));
    this._disp.addEventListener(_.ROLL_OUT, this.bindFunction(this.onOutAGB));
  }
  LinkComponent.prototype.update = function (e = null, t = null) {
    if (e) {
      this._navigateURL = e;
    }
    if (t) {
      this._textId = t;
    }
    this.build();
  };
  LinkComponent.prototype.build = function () {
    var e = this._disp.txt_desc.defaultTextFormat.color;
    var t = new h.HTMLTextCustomVO();
    t.addLocalizedTextVO(new g.LocalizedTextVO(this._textId));
    var i = new d.HTMLLinkFormatVO(this._colorData[0] || e, a.GGSTextDecoration.UNDERLINE);
    var n = new d.HTMLLinkFormatVO(this._colorData[1] || e, a.GGSTextDecoration.UNDERLINE);
    var o = new d.HTMLLinkFormatVO(this._colorData[2] || C.ClientConstColor.DEFAULT_LINK_COLOR, a.GGSTextDecoration.UNDERLINE);
    t.linkFormats = new p.HTMLLinkFormatsVO(i, n, o);
    this._txtLabel = r.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_desc, t);
    this._txtLabel.verticalAlign = this.verticalAlign;
    this._txtLabel.htmlLinkClick.add(this.bindFunction(this.onClick));
  };
  LinkComponent.prototype.dispose = function () {
    if (this._disp) {
      r.GoodgameTextFieldManager.getInstance().unregisterTextField(this._disp.txt_desc);
      this._disp.removeEventListener(_.ROLL_OVER, this.bindFunction(this.onOverAGB));
      this._disp.removeEventListener(_.ROLL_OUT, this.bindFunction(this.onOutAGB));
      this._disp = null;
    }
    if (this._txtLabel) {
      this._txtLabel.htmlLinkClick.removeAll();
      this._txtLabel = null;
    }
  };
  LinkComponent.prototype.onClick = function (e, t) {
    try {
      var i = new c.URLRequest(this.getLinkURL(t));
      u.navigateToURL(i, "goodgamestudios");
    } catch (e) {
      l.error("cant navigate to url");
    }
  };
  LinkComponent.prototype.getLinkURL = function (e) {
    if (this._navigateURL != "") {
      return this._navigateURL;
    } else {
      return e;
    }
  };
  LinkComponent.prototype.onOverAGB = function (e) {
    try {
      this.layoutManager.customCursor.setCursorType(n.BasicCustomCursor.CURSOR_CLICK);
    } catch (e) {
      l.error("User hovered to early on the link...");
    }
  };
  LinkComponent.prototype.onOutAGB = function (e) {
    try {
      this.layoutManager.customCursor.setCursorType(n.BasicCustomCursor.CURSOR_ARROW);
    } catch (e) {
      l.error("User hovered to early out of the link...");
    }
  };
  Object.defineProperty(LinkComponent.prototype, "layoutManager", {
    get: function () {
      return o.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LinkComponent.prototype, "navigateURL", {
    get: function () {
      return this._navigateURL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LinkComponent.prototype, "colorData", {
    get: function () {
      return this._colorData;
    },
    set: function (e) {
      this._colorData = e;
    },
    enumerable: true,
    configurable: true
  });
  return LinkComponent;
}();
exports.LinkComponent = m;