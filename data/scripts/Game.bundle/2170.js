Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1241.js");
var r = function (e) {
  function SamuraiCampDetailView(t, i, n, o) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n, o) || this;
  }
  n.__extends(SamuraiCampDetailView, e);
  SamuraiCampDetailView.prototype.drawCastleVO = function () {
    e.prototype.drawCastleVO.call(this);
    this._layerMiddle.addChildAt(this.getMovieClipByName(SamuraiCampDetailView.CLASSNAME_FENCE_MIDDLE), this._layerMiddle.numChildren - 1);
    this._layerLeft.addChild(this.getMovieClipByName(SamuraiCampDetailView.CLASSNAME_FENCE_LEFT));
    this._layerRight.addChild(this.getMovieClipByName(SamuraiCampDetailView.CLASSNAME_FENCE_RIGHT));
  };
  Object.defineProperty(SamuraiCampDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_SamuraiCamp");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.NomadCampDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiCampDetailView.prototype, "classNameBackwall", {
    get: function () {
      return SamuraiCampDetailView.CLASSNAME_BACKWALL_0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.NomadCampDetailView.prototype, "classNameBackwall").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiCampDetailView.prototype, "classNameKeep", {
    get: function () {
      return SamuraiCampDetailView.CLASSNAME_KEEP_0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.NomadCampDetailView.prototype, "classNameKeep").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiCampDetailView.prototype, "classNameGate", {
    get: function () {
      return SamuraiCampDetailView.CLASSNAME_GATE_0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.NomadCampDetailView.prototype, "classNameGate").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SamuraiCampDetailView.__initialize_static_members = function () {
    SamuraiCampDetailView.CLASSNAME_KEEP_0 = "SamuraiCamp_Keep";
    SamuraiCampDetailView.CLASSNAME_BACKWALL_0 = "SamuraiCamp_BackWall";
    SamuraiCampDetailView.CLASSNAME_GATE_0 = "SamuraiCamp_Gate";
    SamuraiCampDetailView.CLASSNAME_FENCE_MIDDLE = "SamuraiCamp_Fence_Middle";
    SamuraiCampDetailView.CLASSNAME_FENCE_LEFT = "SamuraiCamp_Fence_Left";
    SamuraiCampDetailView.CLASSNAME_FENCE_RIGHT = "SamuraiCamp_Fence_Right";
  };
  return SamuraiCampDetailView;
}(s.NomadCampDetailView);
exports.SamuraiCampDetailView = r;
a.classImplementsInterfaces(r, "IFightDetailView");
r.__initialize_static_members();