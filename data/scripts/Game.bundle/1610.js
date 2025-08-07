Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./55.js");
var d = require("./4.js");
var p = require("./111.js");
var h = require("./194.js");
var g = createjs.ErrorEvent;
var C = function (e) {
  function AResourceFieldVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AResourceFieldVE, e);
  AResourceFieldVE.prototype.createDisp = function () {
    var e = this;
    if (s.BasicModel.basicLoaderData.isItemAssetVersioned(this.assetSharedLib)) {
      a.loadAsset(this.assetSharedLib).then(function (t) {
        if (!(t instanceof g)) {
          e.loadResourceAsset();
        }
      }).catch(function (e) {
        o.warn("failed to load resource assets", e);
      });
    } else {
      this.loadResourceAsset();
    }
  };
  Object.defineProperty(AResourceFieldVE.prototype, "assetClipName", {
    get: function () {
      var e = "";
      if (this.vo.isoData && !this.vo.isoData.areaData.isSeasonCamp && this.vo.isoData.areaData.areaInfo.kingdomID == c.WorldClassic.KINGDOM_ID && this.fieldVO.fieldEfficiency >= 0) {
        e = "_Level" + this.fieldVO.getGfxLevel();
      }
      return "BackgroundResource_" + this.getKingdomNameWithTheme() + "_" + u.ClientConstUtils.capitalizeFirstLetter(this.fieldVO.resourceType.name) + e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.ASurroundingBuildingVE.prototype, "assetClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVE.prototype, "assetSharedLib", {
    get: function () {
      var e = "";
      if (this.vo.isoData && !this.vo.isoData.areaData.isTreasureCamp) {
        e = "ResourcesAssets_SharedLib_" + this.getKingdomNameWithTheme();
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVE.prototype, "assetFileName", {
    get: function () {
      var e = "ResourcesAssets_";
      if (this.vo.isoData && this.vo.isoData.areaData.isTreasureCamp) {
        e += "Seasoncamp" + d.CastleModel.specialEventData.activeSeasonVO.eventId;
      } else {
        e += this.getKingdomNameWithTheme();
      }
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.ASurroundingBuildingVE.prototype, "assetFileName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AResourceFieldVE.prototype.getVELayerType = function () {
    return p.IsoLayerEnum.RESOURCE_FIELDS;
  };
  AResourceFieldVE.prototype.getKingdomNameWithTheme = function () {
    var e;
    e = this.vo.isoData && this.vo.isoData.areaData.isTreasureCamp && d.CastleModel.specialEventData.activeSeasonVO.eventId == l.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN ? "SeaQueen" : this.vo.getAreaKingdomName();
    if (_.IsoHelper.view.canUseIsoEventSkin()) {
      e += "_" + _.IsoHelper.view.getIsoEventSkinSuffix();
    }
    return e;
  };
  AResourceFieldVE.prototype.onSpecialEventUpdated = function (e) {
    if (e.specialEventVO.eventId == l.EventConst.EVENTTYPE_EVENT_SKIN) {
      this.updateDisp();
    }
  };
  Object.defineProperty(AResourceFieldVE.prototype, "fieldVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVE.prototype, "delayLoadingUntilFree", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return AResourceFieldVE;
}(h.ASurroundingBuildingVE);
exports.AResourceFieldVE = C;
var _ = require("./46.js");
r.classImplementsInterfaces(C, "ICollectableRendererList", "IIngameUICapable");