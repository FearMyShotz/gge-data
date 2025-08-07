Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./69.js");
var s = require("./4.js");
var r = require("./68.js");
var l = createjs.MouseEvent;
var c = createjs.Point;
var u = function () {
  function BasicSimpleWorldMapItem(e, t) {
    this._isActive = false;
    this._line1Content = "";
    this._line2Content = "";
    this._line3Content = "";
    this._disp = e;
    this._tMapNodeVO = t;
    this.updateVO(this._tMapNodeVO);
  }
  BasicSimpleWorldMapItem.prototype.updateVO = function (e) {
    this._tMapNodeVO = e;
    this.setItem();
    this.setToolTip();
    this.removeEventListeners();
    this.addEventListeners();
    if (this.tMapNodeVO.isHighlighted) {
      this.disp.useFilters(r.BitmapFilterHelper.FILTER_GLOW_STANDARD, false);
    } else {
      this.disp.useFilters(null, false);
    }
  };
  BasicSimpleWorldMapItem.prototype.setItem = function () {};
  BasicSimpleWorldMapItem.prototype.setToolTip = function () {};
  BasicSimpleWorldMapItem.prototype.onClickMapItem = function (e) {
    s.CastleModel.treasureMapData.clearMapHighlights(this.tMapNodeVO.mapID);
  };
  BasicSimpleWorldMapItem.prototype.isMouseInteractive = function () {
    return !this._tMapNodeVO.isDefeated && this._tMapNodeVO.isUnlocked && this._isActive;
  };
  BasicSimpleWorldMapItem.prototype.addEventListeners = function () {
    if (this.isMouseInteractive()) {
      this._disp.addEventListener(l.CLICK, this.bindFunction(this.onClickMapItem));
    }
    this._disp.addEventListener(l.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.addEventListener(l.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  BasicSimpleWorldMapItem.prototype.removeEventListeners = function () {
    this._disp.removeEventListener(l.CLICK, this.bindFunction(this.onClickMapItem));
    this._disp.removeEventListener(l.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.removeEventListener(l.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  BasicSimpleWorldMapItem.prototype.onMouseOver = function (e) {
    this._disp.useFilters(r.BitmapFilterHelper.FILTER_GLOW_STANDARD, false);
    d.CastleLayoutManager.getInstance().customCursor.setCursorType(n.BasicCustomCursor.CURSOR_CLICK);
    this.layoutManager.showIngameUIComponent(p.WorldmapInfoTooltip, this);
  };
  BasicSimpleWorldMapItem.prototype.onMouseOut = function (e) {
    if (this.tMapNodeVO.isHighlighted) {
      this._disp.useFilters(r.BitmapFilterHelper.FILTER_GLOW_STANDARD, false);
    } else {
      this._disp.useFilters(null, false);
    }
    d.CastleLayoutManager.getInstance().customCursor.setCursorType(n.BasicCustomCursor.CURSOR_ARROW);
    this.layoutManager.hideIngameUIComponent(p.WorldmapInfoTooltip);
  };
  BasicSimpleWorldMapItem.prototype.dispose = function () {
    this._tMapNodeVO = null;
    if (this._disp) {
      this.removeEventListeners();
    }
  };
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    set: function (e) {
      if (this._isActive != e) {
        this._isActive = e;
        this.updateVO(this._tMapNodeVO);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  BasicSimpleWorldMapItem.prototype.getAdditionalTooltipInfos = function () {
    throw new a.AbstractMethodError();
  };
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "tMapNodeVO", {
    get: function () {
      return this._tMapNodeVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "layoutManager", {
    get: function () {
      return d.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "uiBounds", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "uiPos", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "uiDisp", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "hasRingMenu", {
    get: function () {
      return false;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "line1Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "line2Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "line3Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "isTimerToolTip", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "toolTipPosition", {
    get: function () {
      var e = this._disp.parent.localToGlobal(new c(this._disp.x, this._disp.y));
      return new c(e.x, e.y);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "clampToViewport", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return BasicSimpleWorldMapItem;
}();
exports.BasicSimpleWorldMapItem = u;
var d = require("./17.js");
var p = require("./1333.js");
o.classImplementsInterfaces(u, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");