Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./188.js");
var r = require("./30.js");
var l = require("./1463.js");
var c = require("./4.js");
var u = function (e) {
  function GloryHUDModel() {
    var t = e.call(this) || this;
    t._progress = 0;
    t._triggerAnimationStart = false;
    t._isAnimating = false;
    t._breakAnimation = false;
    t._currentTooltip = {
      t: "panel_state_yourTitle"
    };
    t._initialUpdate = a.int(r.CachedTimer.getCachedTimer());
    return t;
  }
  n.__extends(GloryHUDModel, e);
  GloryHUDModel.prototype.getCurrentTitle = function () {
    return c.CastleModel.titleData.getHighestTitleCurrentlyHeldByThisUser(s.ClientConstTitle.GLORY_TITLE);
  };
  Object.defineProperty(GloryHUDModel.prototype, "currentTooltip", {
    get: function () {
      return this._currentTooltip;
    },
    set: function (e) {
      this._currentTooltip = e;
      this.dispatchUpdate();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GloryHUDModel.prototype, "userReachedHighestRank", {
    get: function () {
      var e = a.int(c.CastleModel.titleData.getProgressPointsForNextTitleInSystem(s.ClientConstTitle.GLORY_TITLE));
      return c.CastleModel.titleData.getHighestTitleCurrentlyHeldByThisUser(s.ClientConstTitle.GLORY_TITLE) == c.CastleModel.titleData.getHighestPossibleTitleInSystem(s.ClientConstTitle.GLORY_TITLE) || e < 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GloryHUDModel.prototype, "triggerAnimationStart", {
    get: function () {
      return this._triggerAnimationStart;
    },
    set: function (e) {
      this._triggerAnimationStart = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GloryHUDModel.prototype, "isAnimating", {
    get: function () {
      return this._isAnimating;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GloryHUDModel.prototype, "breakAnimation", {
    get: function () {
      return this._breakAnimation;
    },
    enumerable: true,
    configurable: true
  });
  GloryHUDModel.prototype.startAnimation = function () {
    if (!(r.CachedTimer.getCachedTimer() - this._initialUpdate < GloryHUDModel.THRESHOLD_ANIMATE)) {
      this._triggerAnimationStart = true;
      this._isAnimating = true;
      this._breakAnimation = false;
      this.dispatchUpdate();
    }
  };
  GloryHUDModel.prototype.stopAnimation = function () {
    this._triggerAnimationStart = false;
    this._isAnimating = false;
    this._breakAnimation = true;
    this.dispatchUpdate();
  };
  Object.defineProperty(GloryHUDModel.prototype, "currentPoints", {
    get: function () {
      return c.CastleModel.titleData.getPointsInSystem(s.ClientConstTitle.GLORY_TITLE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GloryHUDModel.prototype, "neededPoints", {
    get: function () {
      return c.CastleModel.titleData.getTitleByTitleID(c.CastleModel.titleData.getHighestTitleCurrentlyHeldByThisUser(s.ClientConstTitle.GLORY_TITLE).nextTitleID).threshold;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GloryHUDModel.prototype, "progress", {
    get: function () {
      return this._progress;
    },
    set: function (e) {
      this._progress = e;
      this.dispatchUpdate();
    },
    enumerable: true,
    configurable: true
  });
  GloryHUDModel.__initialize_static_members = function () {
    GloryHUDModel.THRESHOLD_ANIMATE = 1000;
  };
  return GloryHUDModel;
}(l.AModel);
exports.GloryHUDModel = u;
o.classImplementsInterfaces(u, "IModel", "IGloryHUDModel");
u.__initialize_static_members();