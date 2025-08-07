Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./847.js");
var a = createjs.Container;
var s = function (e) {
  function CastleIsoScreen() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new a()) || this).disp.tickEnabled = t.disp.tickChildren = false;
    return t;
  }
  n.__extends(CastleIsoScreen, e);
  CastleIsoScreen.prototype.show = function () {
    e.prototype.show.call(this);
    this.isoRenderer.camera.isActive = true;
    this.rebuildIsoRenderer();
  };
  CastleIsoScreen.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.isoController.unregisterViewUpdater();
    this.isoRenderer.destroy();
  };
  CastleIsoScreen.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.isoController.unregisterViewUpdater();
    this.isoRenderer.destroy();
  };
  CastleIsoScreen.prototype.rebuildIsoRenderer = function () {
    var e = r.Iso.data;
    if (this.isoRenderer.isoData != e) {
      this.isoRenderer.build(e, this.renderTarget);
    } else {
      this.isoRenderer.strategies.switchToNormalMode();
    }
  };
  Object.defineProperty(CastleIsoScreen.prototype, "isoRenderer", {
    get: function () {
      return r.Iso.renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsoScreen.prototype, "isoController", {
    get: function () {
      return r.Iso.controller;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsoScreen.prototype, "renderTarget", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleIsoScreen.__initialize_static_members = function () {
    CastleIsoScreen.NAME = "CastleIsoScreen";
  };
  return CastleIsoScreen;
}(o.CastleScreen);
exports.CastleIsoScreen = s;
var r = require("./34.js");
s.__initialize_static_members();