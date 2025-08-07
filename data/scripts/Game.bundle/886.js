Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./18.js");
var r = require("./41.js");
var l = require("./64.js");
var c = require("./275.js");
var u = require("./1220.js");
var d = createjs.Event;
var p = require("./408.js");
var h = require("./17.js");
var g = function (e) {
  function BasicMapobject() {
    return e.call(this) || this;
  }
  n.__extends(BasicMapobject, e);
  BasicMapobject.prototype.addObjectContainer = function () {
    if (this.objectContainer) {
      this.disp.addChild(this.objectContainer.asDisplayObject());
      this.objectContainer.asDisplayObject().scaleX = this.objectContainer.asDisplayObject().scaleY /= c.CastleWorldmapConst.ZOOM_MAX;
      var e = castAs(this.objectContainer, "CastleDisplayObjectClipContainer");
      if (e) {
        if (e.areAllClipsLoaded()) {
          this.onAllClipsLoaded(null);
        } else {
          e.addEventListener(d.COMPLETE, this.bindFunction(this.onAllClipsLoaded));
        }
      }
    }
  };
  BasicMapobject.prototype.onAllClipsLoaded = function (e) {
    var t = this;
    if (this.objectContainer) {
      r.CastleMovieClipHelper.uncacheSafe(this.objectContainer.asDisplayObject());
      p.renderScheduler.addTask(function () {
        return !t.objectContainer || !t.objectContainer.asDisplayObject().stage || (t.objectContainer.asDisplayObject().doCache(BasicMapobject.ADDITIONAL_CACHE_SIZE, 1), h.CastleLayoutManager.getInstance().renderStaticStage(), false);
      });
      this.objectContainer.removeEventListener(d.COMPLETE, this.bindFunction(this.onAllClipsLoaded));
    }
  };
  BasicMapobject.prototype.onVOChange = function (e) {
    this.initVisualRep();
  };
  Object.defineProperty(BasicMapobject.prototype, "initialX", {
    get: function () {
      return this.vo.x * s.ClientConstCastle.MAPTILESIZE_X;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.VisualMapElement.prototype, "initialX").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobject.prototype, "initialY", {
    get: function () {
      return this.vo.y * s.ClientConstCastle.MAPTILESIZE_Y;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.VisualMapElement.prototype, "initialY").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobject.prototype, "mapobjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  BasicMapobject.prototype.remove = function () {
    if (this.objectContainer) {
      this.objectContainer.dispose();
      this.objectContainer.removeEventListener(d.COMPLETE, this.bindFunction(this.onAllClipsLoaded));
    }
    this.mapobjectVO.removeEventListener(l.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    e.prototype.remove.call(this);
  };
  Object.defineProperty(BasicMapobject.prototype, "hasRingMenu", {
    get: function () {
      return false;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapobject.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  BasicMapobject.ADDITIONAL_CACHE_SIZE = 6;
  return BasicMapobject;
}(u.VisualMapElement);
exports.BasicMapobject = g;
a.classImplementsInterfaces(g, "IIngameUICapable");