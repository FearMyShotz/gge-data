Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./6.js");
var h = require("./53.js");
var g = require("./44.js");
var C = require("./4.js");
var _ = require("./153.js");
var m = require("./105.js");
var f = require("./1496.js");
var O = createjs.Point;
var E = function () {
  function IsoGeneratorSurroundings() {
    this._resultList = [];
  }
  IsoGeneratorSurroundings.prototype.build = function () {
    this._resultList.length = 0;
    this.addResourceFields();
    if (this.areaType == l.WorldConst.AREA_TYPE_TREASURE_CAMP) {
      var e = C.CastleModel.specialEventData.activeSeasonVO;
      if (e) {
        switch (e.eventType) {
          case _.KingdomEnum.SEAQUEEN.xmlName:
            this.addBySeaQueenSeasonCamp();
        }
      }
    } else {
      switch (this.isoData.areaData.areaInfo.kingdomID) {
        case c.WorldClassic.KINGDOM_ID:
          this.addByClassicKingdom();
          break;
        case s.WorldIce.KINGDOM_ID:
          this.addByIceKingdom();
          break;
        case r.WorldDessert.KINGDOM_ID:
          this.addByDessertKingdom();
          break;
        case o.WorldVolcano.KINGDOM_ID:
          this.addByVolcanoKingdom();
          break;
        case a.WorldIsland.KINGDOM_ID:
          this.addByIslandKingdom();
      }
    }
    return this.resultList;
  };
  IsoGeneratorSurroundings.prototype.addResourceFields = function () {
    this.addToResultList(new A.WoodResourceFieldVO());
    this.addToResultList(new S.StoneResourceFieldVO());
    this.addToResultList(new v.FoodResourceFieldVO());
  };
  IsoGeneratorSurroundings.prototype.addBySeaQueenSeasonCamp = function () {
    this.addToResultList(new M.CliffsSurroundingsVO());
    this.addToResultList(new B.HarborSurroundingsVO());
    this.addToResultList(new H.ShipSurroundingsVO());
    this.addToResultList(new G.SeaShieldSurroundingsVO());
  };
  IsoGeneratorSurroundings.prototype.addByClassicKingdom = function () {
    if (this.isoData.areaData.isMyHomeCastle) {
      if (!g.SpecialServerHelper.isCrossplay()) {
        for (var e = 0; e < b.CastleResourceCartsData.RESOURCE_TYPE_COUNT; ++e) {
          var t = new U.ResourceCartSurroundingsVO();
          t.resourceType = b.CastleResourceCartsData.getEnumItemFromIndex(e);
          this.addToResultList(t);
        }
      }
      if (C.CastleModel.userData.allianceID > 0) {
        this.addToResultList(new f.AllianceCrestSurroundingsVO());
      }
      if (!h.ABGHelper.isOnABGServer) {
        var i = p.int(this.isoData.grid.origins.groundDimension.y);
        if (C.CastleModel.userData.hasLevelFor(u.TutorialConst.LAST_TUTORIAL_STEP_LEVEL)) {
          this.addToResultList(new k.PathSurroundingsVO());
          if (!n.EnvGlobalsHandler.globals.isOnSpecialServer) {
            this.addToResultList(new w.FriendInviteSurroundingsVO());
          }
          this.addToResultList(new N.OutpostSurroundingsVO());
          this.addToResultList(new F.MercenarySurroundingsVO());
        }
        if (i >= 30) {
          this.addToResultList(new V.FillerSurroundingsVO("Paving_Surroundings_Short_Full", new O(11, -29), m.IsoGridOriginEnum.BOTTOM_CORNER, true));
        }
        if (i >= 40) {
          this.addToResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_Half", new O(11, -39)));
          this.addToResultList(new V.FillerSurroundingsVO("Stones_Surroundings_Short_Half", new O(21, -39)));
        }
        if (i >= 50) {
          this.addToResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new O(11, -49)));
          this.addToResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Short_Quarter", new O(21, -49)));
        }
        if (i >= 60) {
          this.addToResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_Full", new O(11, -59)));
        }
        if (y.FillerSurroundingEditor.IS_ACTIVE) {
          for (var o = 0, a = y.FillerSurroundingEditor.getInstance().spawnedFillers; o < a.length; o++) {
            var s = a[o];
            if (s !== undefined) {
              this.addToResultList(s);
            }
          }
        }
        var r = K.castAs(C.CastleModel.specialEventData.getActiveEventByEventId(d.EventConst.EVENTTYPE_EVENT_SKIN), "EventSkinEventVO");
        if (r && r.canUseIsoSkin() && r.skinString == D.EventSkinEventVO.SKIN_TYPE_WINTER_OFFENSIVE) {
          this.addWinterOffensiveSurroundings();
        }
      }
    }
  };
  IsoGeneratorSurroundings.prototype.addByDessertKingdom = function () {
    if (this.canAddSlum) {
      var e = [];
      e.push(new j.SlumBuildingPartBuildingVO(new O(-10, 0), 0));
      e.push(new j.SlumBuildingPartBuildingVO(new O(-44, 19), 1));
      e.push(new j.SlumBuildingPartBuildingVO(new O(-47, -2), 2));
      e.push(new j.SlumBuildingPartBuildingVO(new O(-26, 0), 3));
      e.push(new j.SlumBuildingPartBuildingVO(new O(-50, 10), 4));
      e.push(new W.SlumBuildingPartCharacterVO(new O(-38, 15), new O(-16, 17)));
      this.addToResultList(new Y.SlumSurroundingsVO(new O(0, 0), e));
    }
  };
  IsoGeneratorSurroundings.prototype.addByIceKingdom = function () {
    if (this.canAddSlum) {
      var e = [];
      e.push(new j.SlumBuildingPartBuildingVO(new O(-48, 22), 0));
      e.push(new j.SlumBuildingPartBuildingVO(new O(-25, 5), 1));
      e.push(new j.SlumBuildingPartBuildingVO(new O(-48, 10), 2));
      e.push(new j.SlumBuildingPartBuildingVO(new O(-45, -10), 3));
      e.push(new j.SlumBuildingPartBuildingVO(new O(-29, -10), 4));
      e.push(new W.SlumBuildingPartCharacterVO(new O(-28, 10), new O(-13, 14)));
      this.addToResultList(new Y.SlumSurroundingsVO(new O(0, 0), e));
    }
  };
  IsoGeneratorSurroundings.prototype.addByVolcanoKingdom = function () {
    if (this.canAddSlum) {
      var e = [];
      e.push(new j.SlumBuildingPartBuildingVO(new O(-32, 3), 0));
      e.push(new j.SlumBuildingPartBuildingVO(new O(-30, 11), 1));
      e.push(new j.SlumBuildingPartBuildingVO(new O(-39, 14), 2));
      e.push(new j.SlumBuildingPartBuildingVO(new O(-41, 0), 3));
      e.push(new j.SlumBuildingPartBuildingVO(new O(-24, -1), 4));
      e.push(new W.SlumBuildingPartCharacterVO(new O(-28, 18), new O(-13, 19)));
      this.addToResultList(new Y.SlumSurroundingsVO(new O(0, 0), e));
    }
  };
  IsoGeneratorSurroundings.prototype.addByIslandKingdom = function () {
    if (this.canAddSlum) {
      var e = [];
      e.push(new j.SlumBuildingPartBuildingVO(new O(), 1));
      this.addToResultList(new R.EilandSlumSurroundingVO(new O(20, 25), e));
    }
    this.addToResultList(new P.BeachTopSurroundingsVO());
    this.addToResultList(new L.BeachBottomSurroundingsVO());
  };
  IsoGeneratorSurroundings.prototype.addToResultList = function (e) {
    if (e && e.isUserInLevelRange()) {
      this.resultList.push(e);
    }
  };
  Object.defineProperty(IsoGeneratorSurroundings.prototype, "canAddSlum", {
    get: function () {
      return this.areaType != l.WorldConst.AREA_TYPE_CAPITAL && this.areaType != l.WorldConst.AREA_TYPE_METROPOL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorSurroundings.prototype, "userLevel", {
    get: function () {
      return C.CastleModel.userData.level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorSurroundings.prototype, "areaType", {
    get: function () {
      return this.isoData.areaData.areaInfo.areaType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorSurroundings.prototype, "isoData", {
    get: function () {
      return T.Iso.data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorSurroundings.prototype, "resultList", {
    get: function () {
      return this._resultList;
    },
    enumerable: true,
    configurable: true
  });
  IsoGeneratorSurroundings.prototype.addToEditableResultList = function (e) {
    if (y.FillerSurroundingEditor.IS_ACTIVE) {
      y.FillerSurroundingEditor.getInstance().addAsEditable(e);
    }
    this.addToResultList(e);
  };
  IsoGeneratorSurroundings.prototype.addWinterOffensiveSurroundings = function () {
    var e = T.Iso.data.grid.origins.getOriginPos(m.IsoGridOriginEnum.BOTTOM_CORNER);
    var t = T.Iso.data.objects.getGroupByType(I.IsoObjectGroupEnum.DEFENCE).gate.pos;
    this.addToResultList(new V.FillerSurroundingsVO("Road_Surroundings", t.subtract(e), m.IsoGridOriginEnum.BOTTOM_CORNER, true));
    this.addToResultList(new x.FogSurroundingsVO());
    if (!y.FillerSurroundingEditor.IS_ACTIVE || !(y.FillerSurroundingEditor.getInstance().spawnedFillers.length > 0)) {
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_B", new O(-18, -12), m.IsoGridOriginEnum.TOP_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_L", new O(-2, -2), m.IsoGridOriginEnum.TOP_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_B", new O(-2, -9), m.IsoGridOriginEnum.LEFT_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new O(-15, 8), m.IsoGridOriginEnum.LEFT_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Short_Quarter", new O(-23, 2), m.IsoGridOriginEnum.LEFT_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Short_Quarter", new O(-1, 24), m.IsoGridOriginEnum.LEFT_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_L", new O(-10, 12), m.IsoGridOriginEnum.LEFT_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_M", new O(7, 20), m.IsoGridOriginEnum.LEFT_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_I", new O(-11, 5), m.IsoGridOriginEnum.LEFT_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new O(-2, 10), m.IsoGridOriginEnum.LEFT_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_Half", new O(25, -2), m.IsoGridOriginEnum.RIGHT_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_C", new O(17, 2), m.IsoGridOriginEnum.RIGHT_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Stones_Surroundings_Short_Half", new O(13, -4), m.IsoGridOriginEnum.RIGHT_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new O(-2, -21), m.IsoGridOriginEnum.RIGHT_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_Half", new O(8, -19), m.IsoGridOriginEnum.RIGHT_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_Full", new O(27, 6), m.IsoGridOriginEnum.RIGHT_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Stones_Surroundings_Short_Half", new O(12, -16), m.IsoGridOriginEnum.RIGHT_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_F", new O(-4, -1), m.IsoGridOriginEnum.RIGHT_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_M", new O(4, -11), m.IsoGridOriginEnum.RIGHT_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_Full", new O(1, 41), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_A", new O(-2, 9), m.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_K", new O(-8, -14), m.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_I", new O(14, 0), m.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Short_Quarter", new O(7, 1), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Short_Quarter", new O(-1, 30), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_Half", new O(28, 0), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_Full", new O(19, 13), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_B", new O(23, 3), m.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_I", new O(5, 34), m.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_E", new O(15, 20), m.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new O(11, 22), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_Half", new O(16, 32), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_Half", new O(-18, 38), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Stones_Surroundings_Short_Half", new O(-10, 40), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_Full", new O(-28, 36), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new O(-13, 48), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new O(33, 12), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_Full", new O(46, 0), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_L", new O(40, -4), m.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Stones_Surroundings_Short_Half", new O(23, 17), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Snowpile_Surroundings_J", new O(-6, 49), m.IsoGridOriginEnum.BOTTOM_CORNER, true));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_ThreeQuarters", new O(19, 46), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_Half", new O(3, 48), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
      this.addToEditableResultList(new V.FillerSurroundingsVO("Trees_Surroundings_Tall_Full", new O(-4, 64), m.IsoGridOriginEnum.BOTTOM_CORNER, false));
    }
  };
  return IsoGeneratorSurroundings;
}();
exports.IsoGeneratorSurroundings = E;
var y = require("./1001.js");
var b = require("./776.js");
var D = require("./1004.js");
var I = require("./143.js");
var T = require("./34.js");
var v = require("./1005.js");
var S = require("./1006.js");
var A = require("./1007.js");
var L = require("./1500.js");
var P = require("./1502.js");
var M = require("./1503.js");
var R = require("./1504.js");
var V = require("./1002.js");
var x = require("./1505.js");
var w = require("./1506.js");
var B = require("./1507.js");
var F = require("./1508.js");
var N = require("./1509.js");
var k = require("./1510.js");
var U = require("./1511.js");
var G = require("./1512.js");
var H = require("./1513.js");
var j = require("./2773.js");
var W = require("./2774.js");
var Y = require("./1008.js");
var K = require("./1.js");