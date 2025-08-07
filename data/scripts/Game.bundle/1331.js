Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./69.js");
var s = require("./139.js");
var r = require("./183.js");
var l = require("./15.js");
var c = require("./72.js");
var u = require("./4.js");
var d = createjs.MovieClip;
var p = createjs.Event;
var h = function (e) {
  function CastleBaseTreasureMapRenderer() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleBaseTreasureMapRenderer, e);
  Object.defineProperty(CastleBaseTreasureMapRenderer.prototype, "treasureMapVO", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBaseTreasureMapRenderer.prototype, "mapItemCreator", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBaseTreasureMapRenderer.prototype, "movementCreator", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBaseTreasureMapRenderer.prototype, "treasureUpdateComponents", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBaseTreasureMapRenderer.prototype, "routeManager", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  CastleBaseTreasureMapRenderer.prototype.init = function (e, t = null) {
    this.mapLayer = e;
    this.createMovementLayer(t);
    this.createRouteManager();
    this.createMapItems();
    this.createTreasureUpdateComponents();
    this.createMovements();
    this.setMapItemsActivity();
    this.addListeners();
  };
  CastleBaseTreasureMapRenderer.prototype.destroy = function () {
    this.removeListeners();
    if (this._mapMovements != null) {
      for (var e = 0, t = this._mapMovements; e < t.length; e++) {
        r = t[e];
        if (r !== undefined) {
          r.dispose();
        }
      }
    }
    if (this._mapItems != null) {
      for (var i = 0, n = this._mapItems; i < n.length; i++) {
        r = n[i];
        if (r !== undefined) {
          r.dispose();
        }
      }
    }
    if (this._treasureUpdateComponents && this._treasureUpdateComponents != null) {
      for (var a = 0, s = this._treasureUpdateComponents; a < s.length; a++) {
        var r;
        r = s[a];
        if (r !== undefined) {
          r.destroy();
        }
      }
    }
    o.MovieClipHelper.clearMovieClip(this._movementLayer);
    if (this.mapLayer && this.mapLayer.contains(this._movementLayer)) {
      this.mapLayer.removeChild(this._movementLayer);
    }
  };
  CastleBaseTreasureMapRenderer.prototype.addListeners = function () {
    u.CastleModel.treasureMapData.addEventListener(r.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapDataUpdated));
    this._movementLayer.addEventListener(p.ENTER_FRAME, this.bindFunction(this.onTreasurehuntMovementUpdate));
    this.controller.addEventListener(s.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementsChanged));
  };
  CastleBaseTreasureMapRenderer.prototype.removeListeners = function () {
    u.CastleModel.treasureMapData.removeEventListener(r.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapDataUpdated));
    if (this._movementLayer) {
      this._movementLayer.removeEventListener(p.ENTER_FRAME, this.bindFunction(this.onTreasurehuntMovementUpdate));
    }
    this.controller.removeEventListener(s.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementsChanged));
  };
  CastleBaseTreasureMapRenderer.prototype.createRouteManager = function () {
    this._routeManager = this.routeManager;
    if (this._routeManager) {
      this._routeManager.initComponent(this.treasureMapVO, this._mapItems, this.mapLayer);
    }
  };
  CastleBaseTreasureMapRenderer.prototype.createMapItems = function () {
    this._mapItemCreator = this.mapItemCreator;
    this._mapItems = this._mapItemCreator.createTreasureMapItems(this.mapLayer, this.treasureMapVO.tMapNodeVOs);
  };
  CastleBaseTreasureMapRenderer.prototype.createMovements = function () {
    o.MovieClipHelper.clearMovieClip(this._movementLayer);
    this._movementCreator = this.movementCreator;
    this._mapMovements = this._movementCreator.createMovements(this.mapLayer, this.treasureMapVO);
    if (this._mapMovements != null) {
      for (var e = 0, t = this._mapMovements; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          this._movementLayer.addChild(i.disp);
          i.update();
        }
      }
    }
    this.setMapItemsActivity();
  };
  CastleBaseTreasureMapRenderer.prototype.createMovementLayer = function (e) {
    if (e) {
      this._movementLayer = e;
    } else {
      this._movementLayer = new d();
      this.mapLayer.addChild(this._movementLayer);
    }
  };
  CastleBaseTreasureMapRenderer.prototype.createTreasureUpdateComponents = function () {
    this._treasureUpdateComponents = this.treasureUpdateComponents;
    if (this._treasureUpdateComponents && this._treasureUpdateComponents != null) {
      for (var e = 0, t = this._treasureUpdateComponents; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.initComponent(this.treasureMapVO, this._mapItems, this.mapLayer);
        }
      }
    }
  };
  CastleBaseTreasureMapRenderer.prototype.updateMapItems = function () {
    for (var e = 0; e < this._mapItems.length; e++) {
      this._mapItems[e].updateVO(this.treasureMapVO.tMapNodeVOs[e]);
    }
  };
  CastleBaseTreasureMapRenderer.prototype.updateRoutes = function () {
    if (this._routeManager) {
      this._routeManager.updateComponent(this.treasureMapVO);
    }
  };
  CastleBaseTreasureMapRenderer.prototype.onTreasureMapDataUpdated = function (e) {
    if (this.treasureMapVO) {
      this.updateMapItems();
      this.updateTreasureUpdateComponents();
      this.updateRoutes();
    }
  };
  CastleBaseTreasureMapRenderer.prototype.updateTreasureUpdateComponents = function () {
    if (this._treasureUpdateComponents && this._treasureUpdateComponents != null) {
      for (var e = 0, t = this._treasureUpdateComponents; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.updateComponent(this.treasureMapVO);
        }
      }
    }
  };
  CastleBaseTreasureMapRenderer.prototype.onTreasurehuntMovementUpdate = function (e) {
    if (this._mapMovements != null) {
      for (var t = 0, i = this._mapMovements; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.update();
        }
      }
    }
  };
  Object.defineProperty(CastleBaseTreasureMapRenderer.prototype, "setMapActivity", {
    set: function (e) {
      if (e) {
        this.addListeners();
        this.setMapItemsActivity();
        this.onTreasureMapDataUpdated(null);
      } else {
        this.removeListeners();
        if (this._mapItems != null) {
          for (var t = 0, i = this._mapItems; t < i.length; t++) {
            var n = i[t];
            if (n !== undefined) {
              n.isActive = false;
            }
          }
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleBaseTreasureMapRenderer.prototype.setMapItemsActivity = function () {
    if (this._mapItems != null) {
      for (var e = 0, t = this._mapItems; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var n = true;
          if (this._mapMovements != null) {
            for (var o = 0, a = this._mapMovements; o < a.length; o++) {
              var s = a[o];
              if (s !== undefined && s.target == i.tMapNodeVO.nodeID && s.movementVO) {
                n = false;
              }
            }
          }
          i.isActive = n;
        }
      }
    }
  };
  CastleBaseTreasureMapRenderer.prototype.onMovementsChanged = function (e) {
    this.createMovements();
    this.updateTreasureUpdateComponents();
    this.updateRoutes();
  };
  Object.defineProperty(CastleBaseTreasureMapRenderer.prototype, "controller", {
    get: function () {
      return l.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleBaseTreasureMapRenderer;
}(c.CastleEventDispatcher);
exports.CastleBaseTreasureMapRenderer = h;