Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./162.js");
var r = function (e) {
  function NomadCampDetailView(t, i, n, o) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n, o) || this;
  }
  n.__extends(NomadCampDetailView, e);
  NomadCampDetailView.prototype.getBackgroundClassName = function () {
    return "Castle_Landscape_Classic_Dungeon";
  };
  Object.defineProperty(NomadCampDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_NomadCamp");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  NomadCampDetailView.prototype.drawCastleVO = function () {
    this.initLayer();
    this._castleLayer.y = 15;
    this._castleLayer.x = -7;
    this._layerKeep.addChild(this.getMovieClipByName(this.classNameKeep));
    this._layerLeft.addChild(this.getMovieClipByName(this.classNameBackwall + "_Left"));
    this._layerMiddle.addChild(this.getMovieClipByName(this.classNameGate));
    this._layerRight.addChild(this.getMovieClipByName(this.classNameBackwall + "_Right"));
  };
  Object.defineProperty(NomadCampDetailView.prototype, "classNameKeep", {
    get: function () {
      return NomadCampDetailView.CLASSNAME_KEEP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampDetailView.prototype, "classNameBackwall", {
    get: function () {
      return NomadCampDetailView.CLASSNAME_BACKWALL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampDetailView.prototype, "classNameGate", {
    get: function () {
      return NomadCampDetailView.CLASSNAME_GATE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampDetailView.prototype, "classNameFence", {
    get: function () {
      return NomadCampDetailView.CLASSNAME_FENCE;
    },
    enumerable: true,
    configurable: true
  });
  NomadCampDetailView.__initialize_static_members = function () {
    NomadCampDetailView.CLASSNAME_KEEP = "NomadCamp_Keep";
    NomadCampDetailView.CLASSNAME_BACKWALL = "NomadCamp_BackWall";
    NomadCampDetailView.CLASSNAME_GATE = "NomadCamp_Gate";
    NomadCampDetailView.CLASSNAME_FENCE = "NomadCamp_Fence";
  };
  return NomadCampDetailView;
}(s.FightDetailView);
exports.NomadCampDetailView = r;
a.classImplementsInterfaces(r, "IFightDetailView");
r.__initialize_static_members();