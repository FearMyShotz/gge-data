Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./69.js");
var r = require("./799.js");
var l = require("./1631.js");
var c = function (e) {
  function ResourcePanelToolTipComponent(t) {
    var i = this;
    i._textFields = [];
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._disp = t;
    i.addChild(i._disp);
    return i;
  }
  n.__extends(ResourcePanelToolTipComponent, e);
  ResourcePanelToolTipComponent.prototype.updateTextFieldPositions = function (e = null) {
    var t = [];
    for (var i = 0; i < this._textFields.length; i++) {
      t.push(this._textFields[i].originalTextField);
    }
    if (e == null) {
      l.AlignmentHelper.alignSingleLine(t, l.AlignmentHelper.ALIGN_HORIZONTAL_FROM_LEFT, 15);
    } else {
      l.AlignmentHelper.distributeHorizontally(t, e, 0);
    }
  };
  ResourcePanelToolTipComponent.prototype.updateTextFieldDimensions = function (e) {
    this._textFields.forEach(function (t) {
      t.width = e.width;
    });
  };
  ResourcePanelToolTipComponent.prototype.createTextFields = function () {
    throw new s.AbstractMethodError();
  };
  Object.defineProperty(ResourcePanelToolTipComponent.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipComponent.prototype, "textFields", {
    get: function () {
      return this._textFields;
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipComponent;
}(r.CastleSprite);
exports.ResourcePanelToolTipComponent = c;
a.classImplementsInterfaces(c, "Container");