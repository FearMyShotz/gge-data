Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./1819.js");
var s = require("./1118.js");
var r = createjs.Container;
var l = function (e) {
  function CastleStatusBar(t, i = false) {
    var n = e.call(this) || this;
    n._disp = new r();
    n._icons = [];
    n._expandTo = t;
    n._disp.tickEnabled = i;
    n._positionResets = [];
    return n;
  }
  n.__extends(CastleStatusBar, e);
  Object.defineProperty(CastleStatusBar.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStatusBar.prototype, "anchorItem", {
    get: function () {
      return this._anchorItem;
    },
    enumerable: true,
    configurable: true
  });
  CastleStatusBar.prototype.clearPositionResets = function () {
    this._positionResets = [];
  };
  CastleStatusBar.prototype.addPositionReset = function (e, t, i, n) {
    if (n) {
      this.clearPositionResets();
    }
    this._positionResets.push([e, t, i]);
  };
  CastleStatusBar.prototype.addIcon = function (e) {
    this._icons.push(e);
    e.addToContainer(this._disp);
    e.changedVisibilityCallback = this.bindFunction(this.onIconChangeVisibility);
    this._icons.sort(this.bindFunction(this.compareIcons));
  };
  CastleStatusBar.prototype.removeIcon = function (e) {
    var t = this._icons.indexOf(e);
    if (!(t < 0)) {
      e.changedVisibilityCallback = null;
      this._icons.splice(t, 1);
      e.removeFromContainer(this._disp);
      this._icons.sort(this.bindFunction(this.compareIcons));
    }
  };
  CastleStatusBar.prototype.dispose = function () {
    if (this._icons != null) {
      for (var e = 0, t = this._icons; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.dispose();
        }
      }
    }
    if (this.disp) {
      while (this.disp.numChildren > 0) {
        this._disp.removeChildAt(0);
      }
      this._disp = null;
      this._icons = null;
    }
  };
  CastleStatusBar.prototype.onChangeLayoutState = function () {
    if (this._icons != null) {
      for (var e = 0, t = this._icons; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.onLayoutStateChanged();
        }
      }
    }
    this.repositioningIcons();
  };
  CastleStatusBar.prototype.onIconChangeVisibility = function () {
    this.repositioningIcons();
  };
  CastleStatusBar.prototype.compareIcons = function (e, t) {
    if (this._expandTo === s.StatusBarExpansionDirectionEnum.EXPAND_LEFT || this._expandTo === s.StatusBarExpansionDirectionEnum.EXPAND_UP) {
      return e.priority - t.priority;
    } else {
      return t.priority - e.priority;
    }
  };
  CastleStatusBar.prototype.repositioningIcons = function () {
    var e = this._expandTo == s.StatusBarExpansionDirectionEnum.EXPAND_LEFT || this._expandTo == s.StatusBarExpansionDirectionEnum.EXPAND_RIGHT ? 15 : 0;
    var t = 0;
    var i = 0;
    var n = 0;
    this._anchorItem = null;
    if (this._icons != null) {
      for (var r = 0, l = this._icons; r < l.length; r++) {
        var c = l[r];
        if (c !== undefined && c.visible) {
          var u = o.int(Math.min(c.width * 0.5, CastleStatusBar.ICON_HEIGHT * 0.5));
          var d = o.int(Math.min(c.height * 0.5, CastleStatusBar.ICON_HEIGHT * 0.5));
          for (var p = 0; p < this._positionResets.length; p++) {
            if (this._positionResets[p][0] == i) {
              e = this._positionResets[p][1];
              t = this._positionResets[p][2];
              n = i;
            }
          }
          if (i == n) {
            u = 0;
            d = 0;
          }
          switch (this._expandTo) {
            case s.StatusBarExpansionDirectionEnum.EXPAND_LEFT:
              e -= u;
              c.setPosition(e, t);
              e -= c.width / 2 + CastleStatusBar.SPACE_X;
              break;
            case s.StatusBarExpansionDirectionEnum.EXPAND_RIGHT:
              e += u;
              c.setPosition(e, t);
              e += c.width / 2 + CastleStatusBar.SPACE_X;
              break;
            case s.StatusBarExpansionDirectionEnum.EXPAND_UP:
              t -= d;
              c.setPosition(e, t);
              t -= c.height / 2 + CastleStatusBar.SPACE_Y;
              break;
            case s.StatusBarExpansionDirectionEnum.EXPAND_DOWN:
              t += d;
              c.setPosition(e, t);
              t += c.height / 2 + CastleStatusBar.SPACE_Y;
          }
          this.checkAnchorItem(c);
          i++;
        }
      }
    }
    this.dispatchEvent(new a.CastleStatusBarEvent(a.CastleStatusBarEvent.ICONS_REPOSITIONED));
  };
  CastleStatusBar.prototype.checkAnchorItem = function (e) {
    if (this._anchorItem == null) {
      this._anchorItem = e;
    } else {
      switch (this._expandTo) {
        case s.StatusBarExpansionDirectionEnum.EXPAND_LEFT:
          this._anchorItem = e.iconDisp.x > this._anchorItem.iconDisp.x ? e : this._anchorItem;
          break;
        case s.StatusBarExpansionDirectionEnum.EXPAND_RIGHT:
          this._anchorItem = e.iconDisp.x < this._anchorItem.iconDisp.x ? e : this._anchorItem;
          break;
        case s.StatusBarExpansionDirectionEnum.EXPAND_UP:
          this._anchorItem = e.iconDisp.y > this._anchorItem.iconDisp.y ? e : this._anchorItem;
          break;
        case s.StatusBarExpansionDirectionEnum.EXPAND_DOWN:
          this._anchorItem = e.iconDisp.y < this._anchorItem.iconDisp.y ? e : this._anchorItem;
      }
    }
  };
  CastleStatusBar.prototype.hasIcon = function (e) {
    return this._icons.indexOf(e) >= 0;
  };
  Object.defineProperty(CastleStatusBar.prototype, "expandTo", {
    get: function () {
      return this._expandTo;
    },
    set: function (e) {
      var t = this._expandTo != e;
      this._expandTo = e;
      if (t) {
        this.repositioningIcons();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleStatusBar.prototype.getCountOfVisibleSlots = function () {
    var e = 0;
    if (this._icons != null) {
      for (var t = 0, i = this._icons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.visible) {
          e++;
        }
      }
    }
    return e;
  };
  CastleStatusBar.SPACE_X = 15;
  CastleStatusBar.SPACE_Y = 15;
  CastleStatusBar.ICON_HEIGHT = 100;
  return CastleStatusBar;
}(createjs.EventDispatcher);
exports.CastleStatusBar = l;