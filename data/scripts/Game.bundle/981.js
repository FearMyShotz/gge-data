Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./7.js");
var c = require("./1338.js");
var u = require("./881.js");
var d = require("./568.js");
var p = require("./867.js");
var h = require("./869.js");
var g = require("./1195.js");
var C = require("./870.js");
var _ = require("./1430.js");
var m = require("./1431.js");
var f = require("./963.js");
var O = require("./982.js");
var E = require("./1432.js");
var y = require("./1433.js");
var b = require("./698.js");
var D = require("./1434.js");
var I = require("./4.js");
var T = function (e) {
  function CastleResourceWaitDialogProperties(t = "") {
    var i = e.call(this) || this;
    i.costs = new Map();
    i.storage = new Map();
    i.production = new Map();
    i.commandId = t;
    return i;
  }
  n.__extends(CastleResourceWaitDialogProperties, e);
  CastleResourceWaitDialogProperties.prototype.getResourceSkipCommand = function (e) {
    var t = r.int(I.CastleModel.privateOfferData.getPrivateOfferMerchantID());
    switch (this.commandId) {
      case l.ClientConstSF.S2C_RESEARCH_START:
        return new y.C2SResearchStartVO(e.RID, t, true);
      case l.ClientConstSF.S2C_FOUND_ALLIANCE:
        return new c.C2SFoundAllianceVO(e.N, e.D, e.ALL, e.IA, t, true);
      case l.ClientConstSF.S2C_BUY_UNIT_PACKAGE:
        return new O.C2SBuyUnitPackageVO(e.LID, e.WID, e.AMT, I.CastleModel.kingdomData.activeKingdomID, I.CastleModel.permanentCastleData.getCurrentCastle().areaId, t, true);
      case l.ClientConstSF.S2C_FESTIVAL_START:
        return new u.C2SFestivalStartVO(e.T, e.CID, e.KID, t, true);
      case l.ClientConstSF.S2C_UPGRADE_DEFENCE:
        return new g.C2SIsoUpgradeDefenceVO(e.OID, t, true);
      case l.ClientConstSF.S2C_REPAIR_BUILDING:
        return new h.C2SIsoRepairBuildingVO(e.OID, t, true);
      case l.ClientConstSF.S2C_UPGRADE_OBJECT:
        return new C.C2SIsoUpgradeObjectVO(e.OID, t, true);
      case l.ClientConstSF.S2C_BUY_OBJECT:
        return new p.C2SIsoBuyObjectVO(e.WID, e.X, e.Y, e.R, t, true);
      case l.ClientConstSF.S2C_RUBY_WISHING_WELL:
        return new d.C2SWishingWellCommandVO(e.WOP, t, true);
      case l.ClientConstSF.S2C_QUEST_DONATE_RESOURCES:
        return new E.C2SQuestDonateRessourcesVO(e.QID, e.F, e.W, e.S, e.C1, 0, 0, 0, 0, t, true);
      case l.ClientConstSF.S2C_BUY_EVENTPACKAGE:
        return new b.C2SBuyEventPackageVO(e.PID, e.BT, e.TID, e.AMT, e.KID, e.AID, e.PC2, e.BA, t, true);
      case l.ClientConstSF.S2C_SELECT_FACTION_CAMP_ID:
        return new m.C2SSelectFactionCampVO(e.ID, false, S.FactionConst.KINGDOM_ID, true);
      case l.ClientConstSF.S2C_SELECT_PREBUILT_CAMP_ID:
        return new D.C2SSelectSeasonCampVO(e.ID, false, I.CastleModel.areaData.activeAreaInfo.spaceID, true);
      case l.ClientConstSF.S2C_SELECT_PREBUILT_CASTLE_ID:
        return new f.C2SSelectKingdomCastleVO(e.ID, e.D, false, e.SID === undefined ? I.CastleModel.areaData.activeAreaInfo.spaceID : e.SID, true);
      case l.ClientConstSF.S2C_CRAFTING_START:
        return new _.C2CraftingStartVO(e.KID, e.AID, e.OID, true, e.CRID);
    }
    return null;
  };
  CastleResourceWaitDialogProperties.prototype.parseParams = function (e) {
    this._skipCommand = this.getResourceSkipCommand(e);
    for (var t = 0, i = v.ClientConstCollectable.GROUP_LIST_RESOURCES; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = n.serverKey;
        var a = n.serverKey + "S";
        var s = n.serverKey + "P";
        this.costs.set(n, o in e ? e[o] : 0);
        this.storage.set(n, a in e ? e[a] : I.CastleModel.areaData.getActiveStorageItem(n).amount);
        this.production.set(n, s in e ? e[s] / 10 : I.CastleModel.areaData.getActiveStorageItem(n).productionPerSec);
      }
    }
  };
  CastleResourceWaitDialogProperties.prototype.parseCosts = function (e) {
    for (var t = 0; t < e.length; ++t) {
      var i = e.getItemByIndex(t);
      if (s.instanceOfClass(i, "ACollectableItemResourceVO")) {
        var n = i.itemType;
        this.costs.set(n, i.amount);
        this.storage.set(n, I.CastleModel.areaData.getActiveStorageItem(n).amount);
        this.production.set(n, I.CastleModel.areaData.getActiveStorageItem(n).productionPerSec);
      }
    }
  };
  CastleResourceWaitDialogProperties.prototype.getCost = function (e) {
    return r.int(this.costs.get(e));
  };
  CastleResourceWaitDialogProperties.prototype.getStorage = function (e) {
    return r.int(this.storage.get(e));
  };
  CastleResourceWaitDialogProperties.prototype.getProduction = function (e) {
    return this.production.get(e);
  };
  CastleResourceWaitDialogProperties.prototype.getMissing = function (e) {
    return r.int(Math.max(0, this.getCost(e) - this.getStorage(e)));
  };
  Object.defineProperty(CastleResourceWaitDialogProperties.prototype, "descriptionTextId", {
    get: function () {
      if (this.commandId == l.ClientConstSF.S2C_FOUND_ALLIANCE) {
        return "dialog_resourceWait_creatingAlliance";
      } else if (I.CastleModel.areaData.activeArea.isFactionCamp) {
        return "dialog_resourceWait_faction";
      } else {
        return "dialog_resourceWait_description";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceWaitDialogProperties.prototype, "isSkippableWithRubies", {
    get: function () {
      return this.skipCommand != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceWaitDialogProperties.prototype, "hasAnyProduction", {
    get: function () {
      for (var e = 0, t = v.ClientConstCollectable.GROUP_LIST_RESOURCES; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && this.getProduction(i) > 0) {
          return true;
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceWaitDialogProperties.prototype.getNumberOfMissingResources = function () {
    var e = 0;
    for (var t = 0, i = v.ClientConstCollectable.GROUP_LIST_RESOURCES; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && this.getMissing(n) > 0) {
        e++;
      }
    }
    return e;
  };
  Object.defineProperty(CastleResourceWaitDialogProperties.prototype, "skipCommand", {
    get: function () {
      return this._skipCommand;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceWaitDialogProperties.prototype.parseSkipCommand = function (e) {
    this._skipCommand = this.getResourceSkipCommand(e);
  };
  return CastleResourceWaitDialogProperties;
}(o.BasicProperties);
exports.CastleResourceWaitDialogProperties = T;
var v = require("./86.js");
var S = require("./5.js");
a.classImplementsInterfaces(T, "IResourceWaitDialogProperties");