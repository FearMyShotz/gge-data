Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./777.js");
var l = require("./32.js");
var c = require("./4.js");
var u = require("./145.js");
var d = require("./194.js");
var p = function (e) {
  function MercenarySurroundingsVE() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(MercenarySurroundingsVE, e);
  MercenarySurroundingsVE.prototype.addEventListener = function () {
    this.mercenaryData.addEventListener(r.CastleMercenaryDataEvent.DATA_CHANGED, this.bindFunction(this.onMercenaryDataChanged));
    g.CastleComponent.controller.addEventListener(l.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    e.prototype.addEventListener.call(this);
  };
  MercenarySurroundingsVE.prototype.removeEventListener = function () {
    this.mercenaryData.removeEventListener(r.CastleMercenaryDataEvent.DATA_CHANGED, this.bindFunction(this.onMercenaryDataChanged));
    g.CastleComponent.controller.removeEventListener(l.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    e.prototype.removeEventListener.call(this);
  };
  MercenarySurroundingsVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this.loadExternalClip(this.assetClipName));
  };
  MercenarySurroundingsVE.prototype.updateCharacterDisps = function () {
    if (this.buildingDisp.currentshownDisplayObject) {
      var e;
      for (var t = 1; t <= MercenarySurroundingsVE.MAX_NUMBER_OF_CHARACTERS; ++t) {
        e = this.buildingDisp.currentshownDisplayObject["merc" + t];
        o.MovieClipHelper.clearMovieClip(e);
      }
      for (var i = this.getNumberOfCharacters(), n = 1; n <= i; ++n) {
        (e = this.buildingDisp.currentshownDisplayObject["merc" + n]).addChild(o.MovieClipHelper.getMovieClipByClassName("CastleMercenary_" + n));
      }
      this.dispComponent.updateCache();
      this.invalidateGlowCache();
    }
  };
  MercenarySurroundingsVE.prototype.createAdditionalClips = function () {
    if (this.mercenaryData.missionCount > 0 && this.mercenaryData.currentMissionState != h.CastleMercenaryData.MISSION_STATE_STARTED) {
      this.additionalClips.addClips(u.IsoAdditionalClipEnum.EXCLAMATION_MARK);
    }
    e.prototype.createAdditionalClips.call(this);
  };
  Object.defineProperty(MercenarySurroundingsVE.prototype, "assetClipName", {
    get: function () {
      return Object.getOwnPropertyDescriptor(_.AIsoObjectVE.prototype, "assetClipName").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ASurroundingBuildingVE.prototype, "assetClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MercenarySurroundingsVE.prototype, "assetFileName", {
    get: function () {
      return Object.getOwnPropertyDescriptor(_.AIsoObjectVE.prototype, "assetFileName").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ASurroundingBuildingVE.prototype, "assetFileName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MercenarySurroundingsVE.prototype.getNumberOfCharacters = function () {
    return s.int(Math.min(MercenarySurroundingsVE.MAX_NUMBER_OF_CHARACTERS, this.mercenaryData.currentMissionState == h.CastleMercenaryData.MISSION_STATE_STARTED ? this.mercenaryData.readyMissionsCount : this.mercenaryData.missionCount));
  };
  Object.defineProperty(MercenarySurroundingsVE.prototype, "buildingDisp", {
    get: function () {
      if (this.dispComponent.clipList.length >= 1) {
        return this.dispComponent.clipList[0];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  MercenarySurroundingsVE.prototype.onAllDispClipsLoaded = function () {
    this.updateCharacterDisps();
    e.prototype.onAllDispClipsLoaded.call(this);
  };
  MercenarySurroundingsVE.prototype.onMercenaryDataChanged = function (e) {
    this.updateCharacterDisps();
    this.updateAdditionalClips();
  };
  MercenarySurroundingsVE.prototype.onMouseClick = function () {
    g.CastleComponent.dialogHandler.registerDefaultDialogs(C.CastleMercenaryOverviewDialog);
  };
  MercenarySurroundingsVE.prototype.onLevelUp = function (e) {
    this.updateDisp();
  };
  Object.defineProperty(MercenarySurroundingsVE.prototype, "mercenaryData", {
    get: function () {
      return c.CastleModel.mercenaryData;
    },
    enumerable: true,
    configurable: true
  });
  MercenarySurroundingsVE.__initialize_static_members = function () {
    MercenarySurroundingsVE.MAX_NUMBER_OF_CHARACTERS = 3;
  };
  return MercenarySurroundingsVE;
}(d.ASurroundingBuildingVE);
exports.MercenarySurroundingsVE = p;
var h = require("./775.js");
var g = require("./14.js");
var C = require("./1612.js");
var _ = require("./313.js");
a.classImplementsInterfaces(p, "ICollectableRendererList", "IIngameUICapable");
p.__initialize_static_members();