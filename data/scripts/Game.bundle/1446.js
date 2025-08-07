Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./57.js");
var l = require("./40.js");
var c = createjs.MouseEvent;
var u = createjs.Point;
var d = function (e) {
  function ADecorationForgeSelectionListItemVE(t) {
    var i = this;
    i._onClicked = new r.Signal(ADecorationForgeSelectionListItemVE);
    i._isMouseDown = false;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(ADecorationForgeSelectionListItemVE, e);
  ADecorationForgeSelectionListItemVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.disp.addEventListener(c.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(c.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  ADecorationForgeSelectionListItemVE.prototype.removeEventListener = function () {
    this.disp.removeEventListener(c.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(c.MOUSE_UP, this.bindFunction(this.onMouseUp));
    e.prototype.removeEventListener.call(this);
  };
  ADecorationForgeSelectionListItemVE.prototype.updateWithNewData = function (e) {
    this._itemVO = e;
    this.update();
  };
  ADecorationForgeSelectionListItemVE.prototype.update = function () {
    this.updateSelection();
  };
  ADecorationForgeSelectionListItemVE.prototype.updateSelection = function () {
    this.disp.mc_background.gotoAndStop(s.int(this.itemVO && this.itemVO.isSelected ? 2 : 1));
  };
  ADecorationForgeSelectionListItemVE.prototype.isMouseOverItem = function (e) {
    var t = p.IsoHelper.view.calcPosToCoordinateSystem(new u(e.target.mouseX, e.target.mouseY), e.target, this.disp);
    var i = this.disp.getBounds(null);
    return t.x >= i.left && t.x <= i.right && t.y >= i.top && t.y <= i.bottom;
  };
  ADecorationForgeSelectionListItemVE.prototype.isSelectable = function () {
    return true;
  };
  ADecorationForgeSelectionListItemVE.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (this.isMouseOverItem(t)) {
      h.CastleComponent.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  ADecorationForgeSelectionListItemVE.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (!this.isMouseOverItem(t)) {
      h.CastleComponent.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  ADecorationForgeSelectionListItemVE.prototype.onMouseDown = function (e) {
    this._isMouseDown = true;
  };
  ADecorationForgeSelectionListItemVE.prototype.onMouseUp = function (e) {
    if (this._isMouseDown && this.isShown && this.isSelectable() && this._onClicked) {
      this._onClicked.dispatch(this);
    }
    this._isMouseDown = false;
  };
  Object.defineProperty(ADecorationForgeSelectionListItemVE.prototype, "itemVO", {
    get: function () {
      return this._itemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADecorationForgeSelectionListItemVE.prototype, "onClicked", {
    get: function () {
      return this._onClicked;
    },
    enumerable: true,
    configurable: true
  });
  return ADecorationForgeSelectionListItemVE;
}(l.CastleItemRenderer);
exports.ADecorationForgeSelectionListItemVE = d;
var p = require("./46.js");
var h = require("./14.js");
a.classImplementsInterfaces(d, "ICollectableRendererList");