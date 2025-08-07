Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./23.js");
var d = require("./23.js");
var p = require("./853.js");
var h = function (e) {
  function CastleToolTipManager(t, i, n) {
    var o = this;
    o.MAX_WIDTH_NORMAL = 265;
    CONSTRUCTOR_HACK;
    o = e.call(this, t, i, n) || this;
    t.mouseChildren = t.mouseEnabled = false;
    o._tooltipLayer.cacheAsBitmap = false;
    o._tooltipLayer.mouseChildren = o._tooltipLayer.mouseEnabled = false;
    o.textFieldHeightAdditive = 1;
    o.textFieldWidthAdditive = 1;
    o._max_width = o.MAX_WIDTH_NORMAL;
    return o;
  }
  n.__extends(CastleToolTipManager, e);
  CastleToolTipManager.prototype.showWithScale = function (t, i, n, o = null) {
    var a = o.width;
    var s = o.height;
    o.width = i;
    o.height = n;
    e.prototype.show.call(this, t, o);
    o.width = a;
    o.height = s;
    d.TweenMax.fromTo(this._disp, 0.2, {
      alpha: 1
    }, {
      alpha: 1,
      ease: u.Linear.easeIn
    });
  };
  CastleToolTipManager.prototype.show = function (t, i = null) {
    if (i && r.instanceOfClass(i, "MovieClip") && i.hasOwnProperty("tooltip") && i.tooltip) {
      i = i.tooltip;
    }
    if (t && t.hasOwnProperty("width")) {
      this._max_width = t.width;
    } else {
      this._max_width = this.MAX_WIDTH_NORMAL;
    }
    e.prototype.show.call(this, t, i);
    if (t && t.hasOwnProperty("ox")) {
      this._disp.x += t.ox;
    }
    d.TweenMax.fromTo(this._disp, 0.2, {
      alpha: 1
    }, {
      alpha: 1,
      ease: u.Linear.easeIn
    });
  };
  Object.defineProperty(CastleToolTipManager.prototype, "languageFontmanager", {
    get: function () {
      return o.BasicLanguageFontManager.getInstance();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.BasicToolTipManager.prototype, "languageFontmanager").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleToolTipManager.prototype.assignToolTipText = function (e) {
    var t = new l.HTMLTextCustomVO();
    if (typeof e == "string") {
      var i = e.split(CastleToolTipManager.ID_PARAM_SEPERATOR);
      var n = i.shift();
      if (i.length > 0) {
        var o = i[0].split(",");
        t.addLocalizedTextVO(new c.LocalizedTextVO(n, o));
        if (this.registrationIsNeeded()) {
          this._ggsTextField = this.textFieldManager.registerTextField(this._textField, t);
          this._ggsTextField.textAlign = s.GGSTextAlign.CENTER;
        } else {
          this._ggsTextField.textContentVO = t;
        }
      } else {
        t.addLocalizedTextVO(new c.LocalizedTextVO(n));
        if (this.registrationIsNeeded()) {
          this._ggsTextField = this.textFieldManager.registerTextField(this._textField, t);
          this._ggsTextField.textAlign = s.GGSTextAlign.CENTER;
        } else {
          this._ggsTextField.textContentVO = t;
        }
      }
    } else if (r.instanceOfClass(e, "AbstractTextContentVO")) {
      t.addLocalizedTextVO(e);
      if (this.registrationIsNeeded()) {
        this._ggsTextField = this.textFieldManager.registerTextField(this._textField, t);
        this._ggsTextField.textAlign = s.GGSTextAlign.CENTER;
      } else {
        this._ggsTextField.textContentVO = t;
      }
    } else {
      t.addLocalizedTextVO(new c.LocalizedTextVO(e.t, e.p));
      if (e.hasOwnProperty("t")) {
        if (this.registrationIsNeeded()) {
          this._ggsTextField = this.textFieldManager.registerTextField(this._textField, t);
        } else {
          this._ggsTextField.textContentVO = t;
        }
      } else {
        p.DebugError.handle(new Error("Invalid paramobject for textfield: " + e.toString()));
      }
    }
  };
  Object.defineProperty(CastleToolTipManager.prototype, "target", {
    get: function () {
      return this._target;
    },
    enumerable: true,
    configurable: true
  });
  CastleToolTipManager.prototype.updateText = function (e, t) {
    if (this._target == t) {
      this.assignToolTipText(e);
    }
  };
  CastleToolTipManager.prototype.registrationIsNeeded = function () {
    return !this._ggsTextField;
  };
  CastleToolTipManager.__initialize_static_members = function () {
    CastleToolTipManager.ID_PARAM_SEPERATOR = "$$";
  };
  return CastleToolTipManager;
}(a.BasicToolTipManager);
exports.CastleToolTipManager = h;
h.__initialize_static_members();