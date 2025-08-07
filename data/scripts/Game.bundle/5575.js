Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = require("./4.js");
var s = require("./5576.js");
var r = require("./5577.js");
var l = function () {
  function ResearchTabVO() {
    this._tabId = 0;
    this._groups = [];
    this._requiredTowerLevel = 0;
    this._requiredLegendLevel = 0;
    this._rootGroupId = 0;
    this._enableCategories = false;
    this._categoryName = "";
  }
  ResearchTabVO.prototype.fillFromParamXML = function (e) {
    this._tabId = parseInt(o.CastleXMLUtils.getValueOrDefault("tabID", e, "1", true)) - 1;
    this._requiredTowerLevel = parseInt(o.CastleXMLUtils.getValueOrDefault("minResearchTowerLevel", e, "1", true));
    var t = ResearchTabVO.TAB_DATA[this._tabId];
    this._toolTipText = t.toolTipText;
    this._iconClassName = t.iconClassName || ResearchTabVO.UNKNOWN_ICON_CLASS;
    if (t.rootGroupId) {
      this._rootGroupId = n.int(t.rootGroupId);
    }
    if (t.enableCategories) {
      this._enableCategories = t.enableCategories;
    }
    if (t.categoryName) {
      this._categoryName = t.categoryName;
    }
    if (t.requiredLegendLevel) {
      this._requiredLegendLevel = t.requiredLegendLevel;
    }
    this._pathfinderMap = new r.ResearchPathfinderSearchableMap();
    this._pathfinderConnectionFinder = new s.ResearchConnectionFinder();
  };
  Object.defineProperty(ResearchTabVO.prototype, "tabId", {
    get: function () {
      return this._tabId;
    },
    enumerable: true,
    configurable: true
  });
  ResearchTabVO.prototype.addGroup = function (e) {
    this._groups.push(e);
    this._pathfinderMap.setWalkable(e.x, e.y, false);
    if (e.categoryID) {
      this._enableCategories = true;
    }
  };
  ResearchTabVO.prototype.checkRootResearch = function (e) {
    if (this.rootGroupId <= 0 && e.prerequisiteIDs.length == 0) {
      this._rootGroupId = e.groupID;
    }
  };
  ResearchTabVO.prototype.setupConnections = function () {
    var e = this;
    this.groups.forEach(function (t) {
      return e.findConnectionsForGroup(t);
    });
  };
  ResearchTabVO.prototype.findConnectionsForGroup = function (e) {
    var t = this;
    e.prerequisites.forEach(function (i) {
      return e.addPrerequisitePath(i, t._pathfinderConnectionFinder.getPathByVO(e, i, t._pathfinderMap));
    });
  };
  Object.defineProperty(ResearchTabVO.prototype, "toolTipText", {
    get: function () {
      if (this.isAvailable()) {
        return this._toolTipText;
      } else {
        return this.toolTipTextLocked;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchTabVO.prototype, "iconClassName", {
    get: function () {
      return this._iconClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchTabVO.prototype, "groups", {
    get: function () {
      return this._groups;
    },
    enumerable: true,
    configurable: true
  });
  ResearchTabVO.prototype.isAvailable = function () {
    return a.CastleModel.researchData.researchTowerLevel >= this._requiredTowerLevel;
  };
  Object.defineProperty(ResearchTabVO.prototype, "toolTipTextLocked", {
    get: function () {
      var e = [this._requiredTowerLevel];
      if (this._requiredLegendLevel) {
        e.push(this._requiredLegendLevel);
      }
      return {
        t: this._toolTipText + "Locked_tooltip",
        p: e
      };
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchTabVO.prototype, "rootGroupId", {
    get: function () {
      return this._rootGroupId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchTabVO.prototype, "enableCategories", {
    get: function () {
      return this._enableCategories;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchTabVO.prototype, "categoryName", {
    get: function () {
      return this._categoryName;
    },
    enumerable: true,
    configurable: true
  });
  ResearchTabVO.TAB_DATA = [{
    iconClassName: "Tab_Icon_LowLevel",
    toolTipText: "dialog_researchTower_lowLevelResearch",
    rootGroupId: 42
  }, {
    iconClassName: "Tab_Icon_Military",
    toolTipText: "dialog_researchTower_militaryResearch"
  }, {
    iconClassName: "Tab_Icon_Economy",
    toolTipText: "dialog_researchTower_economicResearch"
  }, {
    iconClassName: "Tab_Icon_Blueprints",
    toolTipText: "dialog_researchTower_blueprintResearch",
    rootGroupId: 65,
    enableCategories: true,
    categoryName: "blueprintsCategory"
  }, {
    iconClassName: "Tab_Icon_Recipes",
    toolTipText: "dialog_researchTower_craftingResearch",
    enableCategories: true,
    categoryName: "manualsCategory",
    requiredLegendLevel: 815
  }];
  ResearchTabVO.UNKNOWN_ICON_CLASS = "Tab_Icon_Unknown";
  return ResearchTabVO;
}();
exports.ResearchTabVO = l;