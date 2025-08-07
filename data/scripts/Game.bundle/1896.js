Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./1085.js");
var r = require("./79.js");
var l = function (e) {
  function ArtifactEventVO() {
    var t = this;
    t._artifactParts = 0;
    t._artifactPartsFound = 0;
    t._artifactPartCosts = 0;
    t._artifactLeagueID = 0;
    t._skinID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ArtifactEventVO, e);
  ArtifactEventVO.prototype.parseBasicsFromParamObject = function (t) {
    e.prototype.parseBasicsFromParamObject.call(this, t);
    this._artifactLeagueID = a.int(t.ALID);
  };
  ArtifactEventVO.prototype.parseEventXmlNode = function (e) {
    this._artifactParts = parseInt(e.artifactParts || "");
    this._artifactPartCosts = parseInt(e.artifactPartPrice || "");
    this._artifactType = String(e.artifactType || "");
    this._artifactReward = c.CollectableManager.parser.createListFromRewardIdsString(String(e.rewardIDs || ""));
  };
  ArtifactEventVO.prototype.parseAdditionalXmlFromRoot = function (t) {
    e.prototype.parseAdditionalXmlFromRoot.call(this, t);
    var i = t.artifactsLeagues;
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if (parseInt(a.artifactsLeagueID || "") == this._artifactLeagueID) {
            this._minLevel = parseInt(a.minLevel || "");
            this._maxLevel = parseInt(a.maxLevel || "");
            this._artifactPartCosts = parseInt(a.artifactPrice || "");
            this._artifactReward = c.CollectableManager.parser.createListFromRewardIdsString(String(a.rewardIDs || ""));
            var s = parseInt(a.artifactID || "");
            this.parseArtifact(t, s);
          }
        }
      }
    }
  };
  ArtifactEventVO.prototype.parseArtifact = function (e, t) {
    var i = e.artifacts;
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if (parseInt(a.artifactID || "") == t) {
            this._artifactType = String(a.artifactType || "");
            this._artifactParts = parseInt(a.artifactParts || "");
          }
        }
      }
    }
  };
  Object.defineProperty(ArtifactEventVO.prototype, "artifactClassName", {
    get: function () {
      return "Artifact_" + this._artifactType;
    },
    enumerable: true,
    configurable: true
  });
  ArtifactEventVO.prototype.parseParamObject = function (e) {
    this._artifactPartsFound = a.int(e.PF);
    this._skinID = a.int(e.SID);
  };
  Object.defineProperty(ArtifactEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return ArtifactEventVO.EVENT_BUILDING_WOD_IDS[this._skinID - 1];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Artifact_" + this._skinID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "artifactReward", {
    get: function () {
      return this._artifactReward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "missingParts", {
    get: function () {
      return this._artifactParts - this._artifactPartsFound;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "hasAllParts", {
    get: function () {
      return this._artifactParts == this._artifactPartsFound;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "artifactPartCosts", {
    get: function () {
      return this._artifactPartCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "artifactPartsFound", {
    get: function () {
      return this._artifactPartsFound;
    },
    set: function (e) {
      this._artifactPartsFound = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "artifactParts", {
    get: function () {
      return this._artifactParts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "hasUserSolvedEvent", {
    get: function () {
      return this.hasAllParts;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ASpecialEventVO.prototype, "hasUserSolvedEvent").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ArtifactEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, u.CastleArtifactEventDialog, new s.CastleArtifactEventDialogProperties(this));
  };
  Object.defineProperty(ArtifactEventVO.prototype, "skinID", {
    get: function () {
      return this._skinID;
    },
    enumerable: true,
    configurable: true
  });
  ArtifactEventVO.prototype.hasClickableArtifact = function () {
    return this._artifactType == "Portrait";
  };
  ArtifactEventVO.__initialize_static_members = function () {
    ArtifactEventVO.EVENT_BUILDING_WOD = 279;
    ArtifactEventVO.EVENT_BUILDING_WOD_RENEGADE = 286;
    ArtifactEventVO.EVENT_BUILDING_WOD_NEWKING = 1522;
    ArtifactEventVO.EVENT_BUILDING_WOD_IDS = [ArtifactEventVO.EVENT_BUILDING_WOD, ArtifactEventVO.EVENT_BUILDING_WOD_RENEGADE, ArtifactEventVO.EVENT_BUILDING_WOD_RENEGADE, ArtifactEventVO.EVENT_BUILDING_WOD_RENEGADE, ArtifactEventVO.EVENT_BUILDING_WOD_NEWKING];
  };
  return ArtifactEventVO;
}(r.ASpecialEventVO);
exports.ArtifactEventVO = l;
var c = require("./50.js");
var u = require("./4380.js");
o.classImplementsInterfaces(l, "IEventOverviewable");
l.__initialize_static_members();