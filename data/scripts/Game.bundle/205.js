Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./4.js");
var c = require("./24.js");
var u = function (e) {
  function ContainerBuilderMapobjectVO() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.underConstruction = false;
    t.bgAssetName = "";
    t._graphicClassName = "";
    return t;
  }
  n.__extends(ContainerBuilderMapobjectVO, e);
  ContainerBuilderMapobjectVO.prototype.getBackgroundClip = function () {
    var e = l.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    var t = ContainerBuilderMapobjectVO.BACKGROUND_MAPOBJECT + e;
    return this.getAsExternalClip(t);
  };
  ContainerBuilderMapobjectVO.prototype.getCastleFlagClip = function (e) {
    return this.getFlagClip(e, ContainerBuilderMapobjectVO.VO_NAME_CASTLE);
  };
  ContainerBuilderMapobjectVO.prototype.getFlagClip = function (e, t) {
    var i;
    var n;
    if (e.hasVIPFlag) {
      n = i = t + ContainerBuilderMapobjectVO.FLAG_VIP;
    } else if (e.hasPremiumFlag) {
      i = t + ContainerBuilderMapobjectVO.FLAG_PREMIUM;
      n = ContainerBuilderMapobjectVO.FILE_NAME_FLAGS_PREMIUM;
    } else {
      n = i = t + ContainerBuilderMapobjectVO.FLAG_DEFAULT;
    }
    return this.getAsExternalClip(i, this.assetFileURL(n), this.getClipColor(e));
  };
  Object.defineProperty(ContainerBuilderMapobjectVO.prototype, "graphicClassName", {
    get: function () {
      return this._graphicClassName;
    },
    enumerable: true,
    configurable: true
  });
  ContainerBuilderMapobjectVO.prototype.getAsExternalClip = function (e, t = null, i = null) {
    t ||= this.assetFileURL(e);
    try {
      this.underConstruction = false;
      return new c.CastleGoodgameExternalClip(e, t, i, 0, false, null, false, 1, false, false, false);
    } catch (e) {
      this.underConstruction = true;
      return new c.CastleGoodgameExternalClip("UnderConstruction_Mapobject", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("UnderConstruction_Mapobject"), null, 0, false);
    }
  };
  ContainerBuilderMapobjectVO.prototype.assetFileURL = function (e) {
    return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
  };
  ContainerBuilderMapobjectVO.prototype.getClipColor = function (e) {
    var t = [];
    t.push(new a.ClipColor(ContainerBuilderMapobjectVO.LAYER_NAME_FLAG, e.crest.colorsFour));
    return t;
  };
  ContainerBuilderMapobjectVO.prototype.getFactionTag = function (e) {
    switch (e) {
      case r.FactionConst.BLUE_FACTION:
        return "Blue";
      case r.FactionConst.RED_FACTION:
        return "Red";
      default:
        return "";
    }
  };
  ContainerBuilderMapobjectVO.FILE_NAME_FLAGS_PREMIUM = "FlagsPremium";
  ContainerBuilderMapobjectVO.BACKGROUND_MAPOBJECT = "MapObjectBackground_";
  ContainerBuilderMapobjectVO.VO_NAME_CASTLE = "Castle";
  ContainerBuilderMapobjectVO.FLAG_VIP = "_Flag_VIP";
  ContainerBuilderMapobjectVO.FLAG_PREMIUM = "_Flag_Premium";
  ContainerBuilderMapobjectVO.FLAG_DEFAULT = "_Flag_Default";
  ContainerBuilderMapobjectVO.LAYER_NAME_FLAG = "flag";
  return ContainerBuilderMapobjectVO;
}(require("./101.js").InteractiveMapobjectVO);
exports.ContainerBuilderMapobjectVO = u;
s.classImplementsInterfaces(u, "IDetailViewAble", "IWorldmapObjectVO");