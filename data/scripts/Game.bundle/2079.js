Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./23.js");
var s = require("./23.js");
var r = require("./92.js");
var l = require("./64.js");
var c = require("./415.js");
var u = function (e) {
  function IsoWorldRingMenu(t) {
    var i = e.call(this, t) || this;
    i.isPermanent = true;
    return i;
  }
  n.__extends(IsoWorldRingMenu, e);
  Object.defineProperty(IsoWorldRingMenu.prototype, "worldLayer", {
    get: function () {
      return d.Iso.renderer.layers.transformLayer;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BasicIngameUIComponent.prototype, "worldLayer").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoWorldRingMenu.prototype, "targetBuilding", {
    get: function () {
      return this._target;
    },
    enumerable: true,
    configurable: true
  });
  IsoWorldRingMenu.prototype.initComponent = function () {
    this.targetBuilding.buildingVO.removeEventListener(l.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onTargetDataChange));
    this.targetBuilding.buildingVO.addEventListener(l.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onTargetDataChange));
  };
  IsoWorldRingMenu.prototype.updateComponent = function () {};
  IsoWorldRingMenu.prototype.updateMenuPosition = function () {
    var e = this.target;
    if (e) {
      var t = e.uiPos;
      if (e.vo && e.vo.isInBuildingDistrict) {
        t.y = Math.max(-80, t.y);
      }
      var i = e.uiDisp.localToGlobal(t);
      this.disp.x = i.x;
      this.disp.y = i.y;
    }
  };
  Object.defineProperty(IsoWorldRingMenu.prototype, "target", {
    get: function () {
      return Object.getOwnPropertyDescriptor(c.BasicIngameUIComponent.prototype, "target").get.call(this);
    },
    set: function (t) {
      if (this.targetBuilding != t) {
        if (this.targetBuilding) {
          this.targetBuilding.buildingVO.removeEventListener(l.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onTargetDataChange));
          this.targetBuilding.hasRingMenu = false;
        }
        this._target = t;
        if (t) {
          this.targetBuilding.hasRingMenu = true;
          e.prototype.updateMenuPosition.call(this);
          this.initComponent();
          this._isLocked = true;
          s.TweenMax.fromTo(this.disp, 0.1, {
            scaleX: 0,
            scaleY: 0
          }, {
            scaleX: 1,
            scaleY: 1,
            ease: a.Linear.easeIn,
            onComplete: this.bindFunction(this.onTweenComplete)
          });
          this.show();
        } else {
          this.hide();
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  IsoWorldRingMenu.prototype.onTweenComplete = function () {
    this._isLocked = false;
  };
  IsoWorldRingMenu.prototype.hide = function () {
    if (this.targetBuilding) {
      this.targetBuilding.hasRingMenu = false;
      this.controller.dispatchEvent(new r.IsoEvent(r.IsoEvent.HIDE_PANEL_INFO, []));
      this.targetBuilding.buildingVO.removeEventListener(l.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onTargetDataChange));
      this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
    }
    e.prototype.hide.call(this);
  };
  IsoWorldRingMenu.prototype.onTargetDataChange = function (e) {
    this.updateComponent();
  };
  return IsoWorldRingMenu;
}(c.BasicIngameUIComponent);
exports.IsoWorldRingMenu = u;
var d = require("./33.js");