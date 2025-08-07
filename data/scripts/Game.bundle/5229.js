Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./693.js");
var c = require("./102.js");
var u = require("./26.js");
var d = require("./32.js");
var p = require("./84.js");
var h = require("./4.js");
var g = require("./14.js");
var C = require("./122.js");
var _ = require("./92.js");
var m = require("./325.js");
var f = createjs.Point;
var O = function (e) {
  function IsoUpdaterData(t) {
    var i = e.call(this) || this;
    i._isoData = t;
    i._movementUpdater = new w.IsoUpdaterMovement(t);
    return i;
  }
  n.__extends(IsoUpdaterData, e);
  IsoUpdaterData.prototype.init = function () {
    this.removeEventListener();
    this.addEventListener();
  };
  IsoUpdaterData.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.removeEventListener();
  };
  IsoUpdaterData.prototype.addEventListener = function () {
    g.CastleComponent.controller.addEventListener(d.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    h.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    h.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    g.CastleComponent.controller.addEventListener(_.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onRenderStrategyChanged));
    h.CastleModel.gfxData.addEventListener(l.GFXEvent.ANIMATION_STATE_CHANGED, this.bindFunction(this.onAnimationOptionChanged));
    h.CastleModel.allianceData.addEventListener(c.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdate));
  };
  IsoUpdaterData.prototype.removeEventListener = function () {
    g.CastleComponent.controller.removeEventListener(d.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    h.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    h.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    g.CastleComponent.controller.removeEventListener(_.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onRenderStrategyChanged));
    h.CastleModel.gfxData.removeEventListener(l.GFXEvent.ANIMATION_STATE_CHANGED, this.bindFunction(this.onAnimationOptionChanged));
    h.CastleModel.allianceData.removeEventListener(c.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdate));
  };
  IsoUpdaterData.prototype.updateMultipleObjectInfos = function (e) {
    if (e) {
      if (e != null) {
        for (var t = 0, i = e; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            D.Iso.controller.processor.addPackageToQueue(new V.IsoCommandPackageObjectUpdateInfo(this.isoData, n));
          }
        }
      }
      D.Iso.controller.processor.executeQueue();
    }
  };
  IsoUpdaterData.prototype.updateObjectInfo = function (e) {
    if (e) {
      var t = new V.IsoCommandPackageObjectUpdateInfo(this.isoData, e);
      D.Iso.controller.processor.addPackageToQueue(t);
      var i = !!t.vo && F.instanceOfClass(t.vo, "CastleGroundVO");
      if (i) {
        D.Iso.controller.processor.addPackageToQueue(new M.IsoCommandPackageObjectsInit(this.isoData, y.IsoObjectGroupEnum.GROUNDS));
        D.Iso.controller.processor.addPackageToQueue(new M.IsoCommandPackageObjectsInit(this.isoData, y.IsoObjectGroupEnum.DEFENCE));
        D.Iso.controller.processor.addPackageToQueue(new M.IsoCommandPackageObjectsInit(this.isoData, y.IsoObjectGroupEnum.EXPANSIONS));
        D.Iso.controller.processor.addPackageToQueue(new M.IsoCommandPackageObjectsInit(this.isoData, y.IsoObjectGroupEnum.SURROUNDINGS));
        D.Iso.controller.processor.addPackageToQueue(new M.IsoCommandPackageObjectsInit(this.isoData, y.IsoObjectGroupEnum.EVENT_BUILDINGS));
        D.Iso.controller.processor.addPackageToQueue(new M.IsoCommandPackageObjectsInit(this.isoData, y.IsoObjectGroupEnum.FIXED_POSITIONS));
        D.Iso.controller.processor.addPackageToQueue(new M.IsoCommandPackageObjectsInit(this.isoData, y.IsoObjectGroupEnum.JUDGEMENTS));
        D.Iso.controller.processor.addPackageToQueue(new M.IsoCommandPackageObjectsInit(this.isoData, y.IsoObjectGroupEnum.TREASURE_CHESTS));
      }
      D.Iso.controller.processor.executeQueue();
      if (i && D.Iso.renderer) {
        D.Iso.renderer.camera.onExpansion();
      }
    }
  };
  IsoUpdaterData.prototype.removeObjectByObjectId = function (e) {
    D.Iso.controller.processor.executePackage(new L.IsoCommandPackageObjectRemoveById(this.isoData, e));
  };
  IsoUpdaterData.prototype.removeObjectByVO = function (e) {
    D.Iso.controller.processor.executePackage(new P.IsoCommandPackageObjectRemoveByVO(e));
  };
  IsoUpdaterData.prototype.update = function (e) {
    for (var t = 0, i = this.isoData.objects.getCompleteObjectsList(); t < i.length; t++) {
      i[t].update(e);
    }
  };
  IsoUpdaterData.prototype.updateEventBuildings = function () {
    D.Iso.controller.processor.executePackage(new M.IsoCommandPackageObjectsInit(this.isoData, y.IsoObjectGroupEnum.EVENT_BUILDINGS));
  };
  IsoUpdaterData.prototype.updateSurroundings = function () {
    D.Iso.controller.processor.executePackage(new M.IsoCommandPackageObjectsInit(this.isoData, y.IsoObjectGroupEnum.SURROUNDINGS));
  };
  IsoUpdaterData.prototype.updateSlumBuildings = function () {
    D.Iso.controller.processor.executePackage(new x.IsoCommandPackageUpdateSlums(this.isoData));
  };
  IsoUpdaterData.prototype.updateRubyWishWell = function () {
    this.isoData.objects.fixedPositions.checkAndCreateWishWell();
  };
  IsoUpdaterData.prototype.initObjects = function (e) {
    D.Iso.controller.processor.executePackage(new M.IsoCommandPackageObjectsInit(this.isoData, e));
  };
  IsoUpdaterData.prototype.changePosition = function (e, t) {
    D.Iso.controller.processor.executePackage(new A.IsoCommandPackageObjectChangePos(e, t));
  };
  IsoUpdaterData.prototype.removeAllMovements = function () {
    for (var e = 0, t = this.isoData.objects.movements.list; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        D.Iso.controller.processor.addPackageToQueue(new P.IsoCommandPackageObjectRemoveByVO(i));
      }
    }
    D.Iso.controller.processor.executeQueue();
  };
  IsoUpdaterData.prototype.triggerObjectsUpdate = function (e) {
    D.Iso.controller.processor.executePackage(new R.IsoCommandPackageObjectsTriggerUpdate(this.isoData, e));
  };
  IsoUpdaterData.prototype.spawnAquaPointsEffect = function (e, t) {
    if (this.isoData.areaData.areaInfo.kingdomID == s.WorldIsland.KINGDOM_ID) {
      var i = D.Iso.renderer.objects.provider.getObjectById(e);
      if (i) {
        var n = b.IsoHelper.view.calcPosToCoordinateSystem(i.getLocalDispPosTopCenter(), i.uiDisp, D.Iso.renderer.layers.transformLayer);
        this.spawnGainFadeEffect(n, Library.CastleInterfaceElements_Icons.Icon_islandAlliancePoints_Big, [t]);
      }
    }
  };
  IsoUpdaterData.prototype.spawnCollectableFadeEffect = function (e, t) {
    var i = new I.IsoCollectableFadeEffectVE(t, e);
    i.init(null);
    D.Iso.controller.processor.executeCommand(new S.IsoCommandSpawnEffect(i));
  };
  IsoUpdaterData.prototype.spawnGainFadeEffect = function (e, t, i, n = null) {
    var o = new T.IsoGainFadeEffectVE(e, t, i, n);
    o.init(null);
    D.Iso.controller.processor.executeCommand(new S.IsoCommandSpawnEffect(o));
  };
  IsoUpdaterData.prototype.parseGCA = function (e) {
    var t;
    var i;
    var n;
    for (var o = 0, a = p.CastleEnum.getEnumListByClass(y.IsoObjectGroupEnum); o < a.length; o++) {
      i = a[o];
      if (F.instanceOfClass(i, "IsoObjectGroupEnum")) {
        n = i;
        if (t = this.isoData.objects.getGroupByType(n)) {
          t.destroy();
          t.parseGCA(e);
          t.initObjects();
        }
      }
    }
    this.isoData.objects.invalidateCompleteObjectsList();
    D.Iso.controller.processor.executeCommand(new v.IsoCommandGridUpdate(this.isoData));
  };
  IsoUpdaterData.prototype.onLevelUp = function (e) {
    if (this.isoData && this.isoData.areaData && this.isoData.areaData.areaInfo) {
      this.updateRubyWishWell();
      this.updateEventBuildings();
      this.updateSurroundings();
    }
  };
  IsoUpdaterData.prototype.onRefreshSpecialEvent = function (e) {
    if (this.isoData && this.isoData.areaData && this.isoData.areaData.areaInfo) {
      this.updateEventBuildings();
    }
  };
  IsoUpdaterData.prototype.onRemoveSpecialEvent = function (e) {
    if (F.instanceOfClass(e.specialEventVO, "ASeasonEventVO") && this.isoData.areaData.isSeasonCamp) {
      a.CommandController.instance.executeCommand(E.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
    }
    if (F.instanceOfClass(e.specialEventVO, "EventSkinEventVO")) {
      this.updateSurroundings();
    }
  };
  IsoUpdaterData.prototype.onIsoObjectMoved = function (e, t, i) {
    this.changePosition(e, t);
    D.Iso.controller.server.moveObject(e.objectId, t, i, e.isInBuildingDistrict);
  };
  IsoUpdaterData.prototype.onRenderStrategyChanged = function (e) {
    var t = D.Iso.renderer.strategies;
    if (t.currentStrategy.isActive(C.IsoRenderStrategyEnum.BUILD_MODE)) {
      this.removeAllMovements();
    } else if (t.prevStrategy.isActive(C.IsoRenderStrategyEnum.BUILD_MODE) && t.currentStrategy.isInNormalMode) {
      this.movementUpdater.spawnMaxMovements(true);
    }
  };
  IsoUpdaterData.prototype.onGainedBuildingPoints = function (e, t, i) {
    var n = this;
    if (i === undefined) {
      i = true;
    }
    var o = B.castAs(D.Iso.renderer.objects.provider.getObjectById(e), "ABasicBuildingVE");
    if (o) {
      var a;
      a = i ? r.int(o.buildingVO.getDeltaMightValue()) : r.int(o.buildingVO.mightValue);
      var s = [];
      if (t > 0) {
        if (h.CastleModel.userData.isLegend) {
          s.push([Library.CastleInterfaceElements_Icons.Icon_XP_Legend_Big, [t]]);
        } else {
          s.push([Library.CastleInterfaceElements_Icons.Icon_XP_Big, [t]]);
        }
      }
      if (a > 0) {
        s.push([Library.CastleInterfaceElements_Icons.Icon_Might_Big, [a]]);
      }
      var l = o.buildingVO;
      if (l instanceof m.ADecoBuildingVO && l.allBuildingEffects.length > 0) {
        l.allBuildingEffects.forEach(function (e) {
          s.push([e.effect.effectType.type.simpleEffectIconClass, e.effectValue.textReplacements, e.effect.effectType.type.simpleValueTextID]);
        });
      }
      var c = s.length % 2 != 0;
      var u = 0;
      var d = 0;
      s.forEach(function (e, t) {
        var i = t % 2 != 0;
        d = c && t == s.length - 1 ? 70 : i ? 210 : -70;
        u = Math.floor(t / 2) * 100;
        var a = o.getGlobalDispPosTopCenter().add(new f(d, u));
        n.spawnGainFadeEffect(a, e[0], e[1], e[2]);
      });
    }
  };
  IsoUpdaterData.prototype.onAnimationOptionChanged = function (e) {
    this.movementUpdater.spawnMaxMovements(true);
  };
  Object.defineProperty(IsoUpdaterData.prototype, "isoData", {
    get: function () {
      return D.Iso.data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoUpdaterData.prototype, "movementUpdater", {
    get: function () {
      return this._movementUpdater;
    },
    enumerable: true,
    configurable: true
  });
  IsoUpdaterData.prototype.onMyAllianceUpdate = function (e) {
    this.updateSurroundings();
  };
  return IsoUpdaterData;
}(g.CastleComponent);
exports.IsoUpdaterData = O;
o.classImplementsInterfaces(O, "ICollectableRendererList");
var E = require("./29.js");
var y = require("./143.js");
var b = require("./46.js");
var D = require("./33.js");
var I = require("./1602.js");
var T = require("./1604.js");
var v = require("./864.js");
var S = require("./1190.js");
var A = require("./5230.js");
var L = require("./5233.js");
var P = require("./1490.js");
var M = require("./1946.js");
var R = require("./5236.js");
var V = require("./5239.js");
var x = require("./5242.js");
var w = require("./5245.js");
var B = require("./1.js");
var F = require("./1.js");