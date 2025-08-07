Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./23.js");
var s = require("./23.js");
var r = require("./91.js");
var l = require("./8.js");
var c = require("./415.js");
var u = function (e) {
  function WorldMapRingMenu(t) {
    var i = this;
    i.hasAnimation = true;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).isPermanent = true;
    return i;
  }
  n.__extends(WorldMapRingMenu, e);
  WorldMapRingMenu.prototype.updateMenuPosition = function () {
    var e = this.layoutManager.worldmapScreen.renderer.camera.getPixelPosForArea(this.worldMapTarget.worldmapObjectVO.absAreaPos);
    this.disp.x = e.x;
    this.disp.y = e.y;
  };
  Object.defineProperty(WorldMapRingMenu.prototype, "worldMapTarget", {
    get: function () {
      return this._target;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapRingMenu.prototype, "target", {
    get: function () {
      return Object.getOwnPropertyDescriptor(c.BasicIngameUIComponent.prototype, "target").get.call(this);
    },
    set: function (e) {
      if (this._target) {
        this._target.hasRingMenu = false;
      }
      if (e == null) {
        this.hide();
        this._target.hasRingMenu = false;
        return;
      }
      this._target = e;
      this._target.hasRingMenu = true;
      this.updateMenuPosition();
      if (this._target) {
        this.initComponent();
        if (this.hasAnimation && this._target != e) {
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
        }
        this.show();
      }
    },
    enumerable: true,
    configurable: true
  });
  WorldMapRingMenu.prototype.show = function () {
    if (this._target) {
      this._target.hasRingMenu = true;
    }
    this.updateMenuPosition();
    e.prototype.show.call(this);
    this.controller.addEventListener(r.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.controller.dispatchEvent(new r.CastleLayoutManagerEvent(r.CastleLayoutManagerEvent.RING_MENU_SHOWN, [this, this._target]));
  };
  WorldMapRingMenu.prototype.onChangeLayoutState = function (e) {
    if (this.layoutManager.currentState == d.CastleLayoutManager.STATE_SEASON_WORLDMAP) {
      this.hide();
    }
  };
  WorldMapRingMenu.prototype.hide = function () {
    if (!p.CastleModel.tutorialData.isTutorialActive) {
      if (this._target) {
        this._target.hasRingMenu = false;
      }
      e.prototype.hide.call(this);
      this.controller.removeEventListener(r.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    }
  };
  WorldMapRingMenu.prototype.onTweenComplete = function () {
    this._isLocked = false;
  };
  Object.defineProperty(WorldMapRingMenu.prototype, "ringDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  WorldMapRingMenu.prototype.initComponent = function () {
    e.prototype.initComponent.call(this);
    this.ringDisp.mouseEnabled = true;
    this.ringDisp.mouseEnabled = true;
    this.ringDisp.bg.mouseChildren = false;
    this.ringDisp.bg.mouseEnabled = false;
  };
  Object.defineProperty(WorldMapRingMenu.prototype, "hoverFilter", {
    get: function () {
      var e = new o.ColorMatrix();
      e.fill(15921906);
      var t = new o.ColorMatrix();
      t.blend(e, 0.35);
      return [t.filter];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapRingMenu.prototype, "downFilter", {
    get: function () {
      var e = new o.ColorMatrix();
      e.fill(0);
      var t = new o.ColorMatrix();
      t.blend(e, 0.35);
      return [t.filter];
    },
    enumerable: true,
    configurable: true
  });
  WorldMapRingMenu.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      t.target.useFilters([]);
      t.target.useFilters(this.hoverFilter);
    }
  };
  WorldMapRingMenu.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      t.target.useFilters([]);
    }
  };
  WorldMapRingMenu.prototype.onMouseDown = function (t) {
    e.prototype.onMouseDown.call(this, t);
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      t.target.useFilters(this.downFilter);
    }
  };
  WorldMapRingMenu.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      t.target.useFilters([]);
    }
  };
  return WorldMapRingMenu;
}(c.BasicIngameUIComponent);
exports.WorldMapRingMenu = u;
var d = require("./17.js");
var p = require("./4.js");