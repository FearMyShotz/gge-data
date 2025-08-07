Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./14.js");
var r = require("./87.js");
var l = require("./293.js");
var c = createjs.Point;
var u = function (e) {
  function IsoStatusIconManager() {
    var t = this;
    t._iconList = [];
    t._posOffset = new c();
    t._isVisible = true;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoStatusIconManager, e);
  IsoStatusIconManager.prototype.init = function (e) {
    this._ve = e;
  };
  IsoStatusIconManager.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.removeAllIcons();
  };
  IsoStatusIconManager.prototype.reset = function () {
    this.removeAllIcons();
    this._isVisible = true;
  };
  IsoStatusIconManager.prototype.addIcon = function (e) {
    if (this.canShowStatusIcons()) {
      var t = new e.veClass();
      t.init(this.ve, e);
      this.iconList.push(t);
      t.updateDisp();
      this.updatePosition();
    }
  };
  IsoStatusIconManager.prototype.removeIcon = function (e) {
    for (var t = 0; t < this.iconList.length; ++t) {
      var i = this.iconList[t];
      if (i.iconType == e) {
        i.destroy();
        this.iconList.splice(t, 1);
      }
    }
  };
  IsoStatusIconManager.prototype.removeAllIcons = function () {
    if (this.iconList != null) {
      for (var e = 0, t = this.iconList; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.destroy();
        }
      }
    }
    this._iconList = [];
  };
  IsoStatusIconManager.prototype.update = function (e) {
    if (this.iconList != null) {
      for (var t = 0, i = this.iconList; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.update(e);
        }
      }
    }
  };
  IsoStatusIconManager.prototype.updatePosition = function () {
    var e = 0;
    if (this.iconList != null) {
      for (var t = 0, i = this.iconList; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.dispComponent.dispContainer.y = e;
          e -= a.int(n.getDispHeight() + 10);
        }
      }
    }
    this.ve.isoRenderer.camera.getCurrentZoomValue();
    var o = this.ve.disp._cacheScale;
    var s = 0;
    if (this.ve.disp && this.ve.disp.filters && this.ve.disp.filters.length > 0) {
      s = -o;
    }
    var r = this.ve.getLocalDispPosTopCenter();
    r.x += this.posOffset.x + s;
    r.y = r.y + this.posOffset.y - r.y * 0.1;
    var l = this.getLayer();
    l.x = r.x;
    l.y = r.y;
  };
  IsoStatusIconManager.prototype.setVisibility = function (e) {
    this.getLayer().visible = this._isVisible = e;
  };
  IsoStatusIconManager.prototype.setNewOffset = function (e) {
    this._posOffset = e;
    this.updatePosition();
  };
  IsoStatusIconManager.prototype.getIcon = function (e) {
    if (this.iconList != null) {
      for (var t = 0, i = this.iconList; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.iconType == e) {
          return n;
        }
      }
    }
    return null;
  };
  IsoStatusIconManager.prototype.canShowStatusIcons = function () {
    if (!this.getLayer()) {
      return false;
    }
    if (!this.ve.vo.isOwnArea) {
      return false;
    }
    var e = this.ve;
    return !e || e.buildingVO.buildingState != r.IsoBuildingStateEnum.INITIAL;
  };
  Object.defineProperty(IsoStatusIconManager.prototype, "hasIcon", {
    get: function () {
      return this.iconList.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoStatusIconManager.prototype, "isUpgradeIconActive", {
    get: function () {
      if (this.iconList != null) {
        for (var e = 0, t = this.iconList; e < t.length; e++) {
          var i = t[e];
          if (i !== undefined && (i.iconType == d.IsoStatusIconEnum.UPGRADE || i.iconType == d.IsoStatusIconEnum.UPGRADE_PRIME_SALE)) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  IsoStatusIconManager.prototype.getLayer = function () {
    return this.ve.layers.getLayer(l.IsoObjectLayerEnum.STATUS_ICONS);
  };
  Object.defineProperty(IsoStatusIconManager.prototype, "ve", {
    get: function () {
      return this._ve;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoStatusIconManager.prototype, "posOffset", {
    get: function () {
      return this._posOffset;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoStatusIconManager.prototype, "isVisible", {
    get: function () {
      return this._isVisible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoStatusIconManager.prototype, "iconList", {
    get: function () {
      return this._iconList;
    },
    enumerable: true,
    configurable: true
  });
  return IsoStatusIconManager;
}(s.CastleComponent);
exports.IsoStatusIconManager = u;
var d = require("./177.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");