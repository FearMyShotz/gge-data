Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./18.js");
var l = require("./37.js");
var c = require("./4.js");
var u = require("./14.js");
var d = require("./71.js");
var p = function (e) {
  function AreaDataUpdater(t) {
    var i = e.call(this) || this;
    i._areaData = t;
    return i;
  }
  n.__extends(AreaDataUpdater, e);
  AreaDataUpdater.prototype.parseJAA = function (e) {
    if (e) {
      this.parseGCA(e.gca);
      this.parseCSL(e.csl);
      this.parseGRC(e.grc);
      this.parseGPA(e.gpa);
      this.parseGAB(e.gab);
    }
  };
  AreaDataUpdater.prototype.parseGCA = function (e) {
    if (e) {
      if (this.areaData.storage) {
        this.areaData.storage.parseGCA(e);
      }
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.parseGCA(e);
      }
      this.parseSCL(e.scl);
      this.parseConstructionItems(e.CI);
      c.CastleModel.worldmapCameraData.lastVisitedCastlePosition = this.areaData.areaInfo.absAreaPos;
      if (this.areaData.isoData) {
        _.Iso.controller.processor.executeCommand(new g.IsoCommandAreaDataUpdated(this.areaData.isoData, false));
      }
    }
  };
  AreaDataUpdater.prototype.parseCSL = function (e) {
    if (e && this.areaData.slum) {
      this.areaData.slum.parseCSL(e);
    }
  };
  AreaDataUpdater.prototype.parseSCL = function (e) {
    if (e && this.areaData.constructionList) {
      this.areaData.constructionList.parseSCL(e);
    }
  };
  AreaDataUpdater.prototype.parseGAB = function (e) {
    if (e && this.areaData.commonInfo) {
      this.areaData.commonInfo.parseGAB(e);
    }
  };
  AreaDataUpdater.prototype.parseGRC = function (e) {
    if (e) {
      if (this.areaData.storage && e.AID == this.areaData.areaId) {
        this.areaData.storage.parseGRC(e);
      }
      if (e.AID == a.EventConst.EVENTCAMP_AREA_ID && c.CastleModel.specialEventData.activeSeasonVO) {
        var t = c.CastleModel.specialEventData.activeSeasonVO.treasureMapVO;
        if (t) {
          t.resStorageWood = s.int(e.W);
          t.resStorageStone = s.int(e.S);
        }
      }
      var i = new h.CastleResourcesVO();
      i.parseGRC(e);
      c.CastleModel.userCastleListDetailed.updateDetailVO(i);
      u.CastleComponent.controller.dispatchEvent(new d.AreaDataEvent(d.AreaDataEvent.ON_RESOURCES_CHANGED, [i]));
    }
  };
  AreaDataUpdater.prototype.parseGPA = function (e) {
    if (e) {
      if (this.areaData.commonInfo) {
        this.areaData.commonInfo.parseGPA(e);
      }
      if (this.areaData.storage) {
        this.areaData.storage.parseGPA(e);
      }
      if (this.areaData.morality) {
        this.areaData.morality.parseGPA(e);
      }
      c.CastleModel.militaryData.resetProductionSpeed();
      c.CastleModel.militaryData.setBuildingProductionSpeed(r.ClientConstCastle.UNIT_BUILDINGTYPE_BARRACKS, e.RS1);
      c.CastleModel.militaryData.setBuildingProductionSpeed(r.ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP, e.RS2);
      c.CastleModel.militaryData.setBuildingProductionSpeed(r.ClientConstCastle.UNIT_BUILDINGTYPE_DWORKSHOP, e.RS3);
      c.CastleModel.militaryData.setBuildingProductionSpeed(r.ClientConstCastle.UNIT_BUILDINGTYPE_HOSPITAL, e.RSH);
    }
  };
  AreaDataUpdater.prototype.parseRBU = function (e) {
    if (e) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateObjectInfo(e.O);
      }
      this.parseSCL(e.scl);
      this.parseGRC(e.grc);
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseIRA = function (e) {
    if (e) {
      this.parseGPA(e.gpa);
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateMultipleObjectInfos(e.B);
      }
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseGCB = function (e) {
    if (e) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateMultipleObjectInfos(e.B);
      }
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseGDB = function (e) {
    if (e) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateMultipleObjectInfos(e.B);
      }
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseEBE = function (e) {
    if (e) {
      if (this.areaData.isoData) {
        this.parseGCA(e.gca);
      }
      this.parseGRC(e.grc);
      this.parseSCL(e.scl);
    }
  };
  AreaDataUpdater.prototype.parseEBU = function (e) {
    if (e) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateObjectInfo(e.NO);
      }
      this.updateCastleInfos();
      this.parseGRC(e.grc);
      this.parseSCL(e.scl);
    }
  };
  AreaDataUpdater.prototype.parseEDO = function (e) {
    if (e) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateObjectInfo(e);
      }
      this.parseSCL(e.scl);
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseEGO = function (e) {
    if (e) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateObjectInfo(e);
      }
      this.updateCastleInfos();
      this.parseSCL(e.scl);
      this.parseGAB(e.gab);
    }
  };
  AreaDataUpdater.prototype.parseEUD = function (e) {
    if (e) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.initObjects(C.IsoObjectGroupEnum.DEFENCE);
        this.areaData.isoData.updater.updateObjectInfo(e.N);
      }
      this.parseGRC(e.grc);
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseEUP = function (e) {
    if (e) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateMultipleObjectInfos(e.O);
      }
      this.updateCastleInfos();
      this.parseGRC(e.grc);
      this.parseSCL(e.scl);
    }
  };
  AreaDataUpdater.prototype.parseETC = function (e) {
    if (e) {
      u.CastleComponent.controller.dispatchEvent(new l.CastleServerMessageArrivedEvent(l.CastleServerMessageArrivedEvent.ETC_ARRIVED, [e.RID, e.OID]));
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.removeObjectByObjectId(e.OID);
      }
    }
  };
  AreaDataUpdater.prototype.parseEMO = function (e) {
    if (e && this.areaData.isoData) {
      this.areaData.isoData.updater.updateObjectInfo(e.MO);
      this.areaData.isoData.objects.movements.initWaypoints();
    }
  };
  AreaDataUpdater.prototype.parseFCO = function (e) {
    if (e && this.areaData.isoData) {
      this.areaData.isoData.updater.updateObjectInfo(e.O);
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseSOB = function (e) {
    if (e && this.areaData.isoData) {
      this.areaData.isoData.updater.removeObjectByObjectId(e.OID);
    }
  };
  AreaDataUpdater.prototype.parseCBX = function (e, t = true) {
    if (e && this.areaData.isoData) {
      this.areaData.isoData.updater.onGainedBuildingPoints(e.OID, e.XP, t);
    }
  };
  AreaDataUpdater.prototype.parseSBD = function (e) {
    if (e) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.removeObjectByObjectId(e.OID);
      }
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseNewIsoObject = function (e) {
    if (e && e.NO) {
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateObjectInfo(e.NO);
      }
      this.updateCastleInfos();
    }
  };
  AreaDataUpdater.prototype.parseConstructionItems = function (e) {
    if (e && this.areaData.constructionItems) {
      this.areaData.constructionItems.updateConstructionItems(e);
    }
  };
  AreaDataUpdater.prototype.updateCastleInfos = function () {
    if (this.areaData.commonInfo) {
      this.areaData.commonInfo.updateInfos();
    }
  };
  Object.defineProperty(AreaDataUpdater.prototype, "areaData", {
    get: function () {
      return this._areaData;
    },
    enumerable: true,
    configurable: true
  });
  return AreaDataUpdater;
}(u.CastleComponent);
exports.AreaDataUpdater = p;
var h = require("./5265.js");
var g = require("./485.js");
var C = require("./143.js");
var _ = require("./34.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");