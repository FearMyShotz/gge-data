Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./30.js");
var o = require("./41.js");
var a = createjs.Point;
var s = function () {
  function WorldmapObjectFlagHelper() {
    this._id = 0;
    this._busy = false;
    this._flagLoaded = false;
    this._castleMapObjectLoaded = false;
    this._shouldHandleInnerFlag = false;
    this._id = n.CachedTimer.getCachedTimer();
  }
  WorldmapObjectFlagHelper.watchAndFix = function (e, t, i) {
    var n;
    if (i === undefined) {
      i = false;
    }
    WorldmapObjectFlagHelper._pool ||= [];
    if (WorldmapObjectFlagHelper._pool != null) {
      for (var o = 0, a = WorldmapObjectFlagHelper._pool; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && s && !s.isBusy) {
          n = s;
          break;
        }
      }
    }
    if (!n) {
      n = new WorldmapObjectFlagHelper();
      WorldmapObjectFlagHelper._pool.push(n);
    }
    n.align(e, t, i);
  };
  Object.defineProperty(WorldmapObjectFlagHelper.prototype, "isBusy", {
    get: function () {
      return this._busy;
    },
    enumerable: true,
    configurable: true
  });
  WorldmapObjectFlagHelper.prototype.align = function (e, t, i = false) {
    this.resetAndRelease();
    this._shouldHandleInnerFlag = i;
    this._busy = true;
    this._flag = t;
    this._castleMapObject = e;
    if (this._flag && this._castleMapObject) {
      if (this._flag.isLoaded) {
        this.clipLoaded(this._flag);
      } else {
        this._flag.clipLoaded.add(this.bindFunction(this.clipLoaded));
      }
      if (this._castleMapObject.isLoaded) {
        this.clipLoaded(this._castleMapObject);
      } else {
        this._castleMapObject.clipLoaded.add(this.bindFunction(this.clipLoaded));
      }
    } else {
      this.resetAndRelease();
    }
  };
  WorldmapObjectFlagHelper.prototype.resetAndRelease = function () {
    if (this._flag) {
      this._flagLoaded = false;
      this._flag.clipLoaded.remove(this.bindFunction(this.clipLoaded));
    }
    if (this._castleMapObject) {
      this._castleMapObjectLoaded = false;
      this._castleMapObject.clipLoaded.remove(this.bindFunction(this.clipLoaded));
    }
    this._flag = this._castleMapObject = null;
    this._busy = false;
    this._shouldHandleInnerFlag = false;
  };
  Object.defineProperty(WorldmapObjectFlagHelper.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  WorldmapObjectFlagHelper.prototype.clipLoaded = function (e) {
    switch (e) {
      case this._flag:
        this._flagLoaded = true;
        break;
      case this._castleMapObject:
        this._castleMapObjectLoaded = true;
    }
    if (this._flagLoaded && this._castleMapObjectLoaded) {
      this.performFlagAlign();
    }
  };
  WorldmapObjectFlagHelper.prototype.performFlagAlign = function () {
    var e = this._castleMapObject.currentshownDisplayObject;
    var t = e.getChildByName("flag_placeholder");
    if (t) {
      var i = this._flag.currentshownDisplayObject;
      var n = i.getChildByName("flag0");
      if (this._shouldHandleInnerFlag) {
        i.x = t.x;
        i.y = t.y;
      } else if (n) {
        var s = e.localToGlobal(new a(t.x, t.y));
        var r = i.globalToLocal(s);
        n.x = r.x;
        n.y = r.y;
      }
    }
    o.CastleMovieClipHelper.updateParentCache(i);
    this.resetAndRelease();
  };
  return WorldmapObjectFlagHelper;
}();
exports.WorldmapObjectFlagHelper = s;