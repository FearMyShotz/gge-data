Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function TreasureMapVO() {
    this._mapID = 0;
    this._initialPieces = 0;
    this._totalPieces = 0;
    this._costPiece = 0;
    this._initialPos = 0;
    this._mapType = 0;
    this._travelTime = 0;
    this._resourceTravelTaxRate = 0;
    this._unitTravelTaxRate = 0;
    this._endNodeID = 0;
    this._hasCamp = false;
    this._skipCostC2 = 0;
    this._durationInSeconds = 0;
    this._piecesFound = 0;
    this._progressType = 0;
    this._goodsArivalTimestamp = 0;
    this._troopsArivalTimestamp = 0;
    this._unitStorage = 0;
    this._maxSoldiers = 0;
    this._unitCount = 0;
    this._unitInventory = new d.UnitInventoryDictionary();
    this._morality = 0;
    this._mapbackground = 0;
    this._kingdomID = 0;
    this._endTimeStamp = 0;
    this._unitInventory.addEventListener(f.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
    this._resourceStorageCapacity = new r.CollectableList();
    this._resourcesStorage = new r.CollectableList();
  }
  TreasureMapVO.prototype.destroy = function () {
    this._unitInventory.removeEventListener(f.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
  };
  TreasureMapVO.prototype.loadFromParamObject = function (e) {
    this._achivedNodes = [];
    for (var t = 0, i = e.N; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = this.getNodeById(n.NID);
        if (o) {
          o.parseParamObject(n);
          if (n.A == 1) {
            this._achivedNodes.push(n.NID);
          }
        }
      }
    }
    this.fillAchivedNodes();
    this._piecesFound = C.int(e.PF ? e.PF : 0);
    this._progressType = C.int(e.PT);
    this.parseGoodsTransfer(e.RT);
    this.parseTroopsTransfer(e.UT);
    this.parseStorage(e.S);
    this._morality = C.int(e.M);
    this.parseUnitInventory(e.I);
    this._endTimeStamp = e.RS && e.RS > -1 ? O.CachedTimer.getCachedTimer() + e.RS * h.ClientConstTime.SEC_2_MILLISEC : -1;
  };
  TreasureMapVO.prototype.parseUnitInventory = function (e) {
    this._unitInventory.fillFromWodAmountArray(e);
  };
  TreasureMapVO.prototype.onUnitInventoryUpdated = function (e) {
    E.CastleBasicController.getInstance().dispatchEvent(new m.CastleMilitaryDataEvent(m.CastleMilitaryDataEvent.INVENTORY_UPDATED));
  };
  TreasureMapVO.prototype.fillFromParamXML = function (e) {
    this._mapID = parseInt(_.CastleXMLUtils.getValueOrDefault("mapID", e, "-1", true));
    this._tMapNodeIDs = _.CastleXMLUtils.getValueOrDefault("tmapnodeIDs", e, "", true).split("+");
    this._initialPieces = parseInt(_.CastleXMLUtils.getValueOrDefault("initialpieces", e, "0"));
    this._totalPieces = parseInt(_.CastleXMLUtils.getValueOrDefault("totalpieces", e, "0"));
    this._costPiece = parseInt(_.CastleXMLUtils.getValueOrDefault("costpiece", e, "0"));
    this._initialPos = parseInt(_.CastleXMLUtils.getValueOrDefault("initialpos", e, "0", false));
    this._mapType = parseInt(_.CastleXMLUtils.getValueOrDefault("maptype", e, "0"));
    this._travelTime = parseInt(_.CastleXMLUtils.getValueOrDefault("travelTime", e, "0"));
    this._resourceTravelTaxRate = parseInt(_.CastleXMLUtils.getValueOrDefault("resourceTravelTaxRate", e, "0"));
    this._unitTravelTaxRate = parseInt(_.CastleXMLUtils.getValueOrDefault("unitTravelTaxRate", e, "0"));
    this._hasCamp = parseInt(_.CastleXMLUtils.getValueOrDefault("hasCamp", e, "0")) == 1;
    this._endNodeID = parseInt(_.CastleXMLUtils.getValueOrDefault("endNodeID", e, "0"));
    this._skipCostC2 = parseInt(_.CastleXMLUtils.getValueOrDefault("skipCostC2", e, "0"));
    this._rewardList = y.CastleModel.rewardData.getListById(parseInt(_.CastleXMLUtils.getValueOrDefault("rewardID", e, "0")));
    this._maxSoldiers = e.maxSoldiers !== undefined ? C.int(e.maxSoldiers) : Number.MAX_VALUE;
    var t = _.CastleXMLUtils.getValueOrDefault("pixelSize", e, "10x10").split("x");
    this._pixelSize = new n(parseInt(t[0]), parseInt(t[1]));
    this._durationInSeconds = parseInt(_.CastleXMLUtils.getValueOrDefault("duration", e, "-1"));
    this._mapbackground = parseInt(_.CastleXMLUtils.getValueOrDefault("mapbackground", e, "", true));
    this._kingdomID = parseInt(_.CastleXMLUtils.getValueOrDefault("kID", e, "0"));
    this._eventPackages = [];
    this.addEventPackages(String(e.packages || "").split("+"), this._eventPackages);
  };
  TreasureMapVO.prototype.addEventPackages = function (e, t) {
    for (var i = 0; i < e.length; i++) {
      var n = y.CastleModel.eventPackageData.getEventPackageByID(e[i]);
      if (n) {
        t.push(n);
      }
    }
  };
  TreasureMapVO.prototype.parseStorage = function (e) {
    var t = 0;
    var i = 0;
    var n = 0;
    var o = 0;
    var a = 0;
    var s = 0;
    if (e) {
      this._unitStorage = C.int(e.MU);
      this._unitCount = C.int(e.U);
      t = C.int(e.MRF);
      i = C.int(e.MRW);
      n = C.int(e.MRS);
      o = C.int(e.F);
      a = C.int(e.W);
      s = C.int(e.S);
    }
    this._resourceStorageCapacity.clear();
    this._resourcesStorage.clear();
    this._resourceStorageCapacity.addItem(new u.CollectableItemWoodVO(i));
    this._resourceStorageCapacity.addItem(new c.CollectableItemStoneVO(n));
    this._resourceStorageCapacity.addItem(new l.CollectableItemFoodVO(t));
    this._resourcesStorage.addItem(new u.CollectableItemWoodVO(a));
    this._resourcesStorage.addItem(new c.CollectableItemStoneVO(s));
    this._resourcesStorage.addItem(new l.CollectableItemFoodVO(o));
  };
  TreasureMapVO.prototype.fillAchivedNodes = function () {
    this._achivedNodes.push(p.TMapNodeVO.START_NODE_ID);
    this._tMapPortNodesVOs = [];
    if (this._tMapNodeVOs != null) {
      for (var e = 0, t = this._tMapNodeVOs; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          for (var n = 0, o = i.orUnlockIDs; n < o.length; n++) {
            var a = o[n];
            if (a !== undefined && this._achivedNodes.indexOf(parseInt(a)) >= 0) {
              i.isUnlocked = true;
              break;
            }
          }
          if (i.andUnlockIDs != null) {
            for (var s = 0, r = i.andUnlockIDs; s < r.length; s++) {
              var l = r[s];
              if (l !== undefined && this._achivedNodes.indexOf(parseInt(l)) < 0) {
                i.isUnlocked = false;
                i.isUnockedByPortLevel = false;
                break;
              }
            }
          }
          if (this._achivedNodes.indexOf(i.nodeID) >= 0) {
            i.isDefeated = true;
          }
          if (i.isPort) {
            this._tMapPortNodesVOs.push(i);
          }
        }
      }
    }
    if (this._tMapPortNodesVOs.length > 0) {
      this.sortPortNodes();
    }
  };
  TreasureMapVO.prototype.sortPortNodes = function () {
    var e;
    var t = [];
    if (this._tMapPortNodesVOs != null) {
      for (var i = 0, n = this._tMapPortNodesVOs; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = false;
          if (this._tMapPortNodesVOs != null) {
            for (var s = 0, r = this._tMapPortNodesVOs; s < r.length; s++) {
              var l = r[s];
              if (l !== undefined) {
                a = a || l.orUnlockIDs[0] == o.nodeID;
              }
            }
          }
          if (!a) {
            e = o;
            break;
          }
        }
      }
    }
    while (e.orUnlockIDs[0] != 0) {
      t.push(e);
      e = this.getNodeById(e.orUnlockIDs[0]);
    }
    t.push(e);
    this._tMapPortNodesVOs = t.reverse();
  };
  TreasureMapVO.prototype.fillNodes = function (e) {
    this._tMapNodeVOs = [];
    var t = C.int(y.CastleModel.specialEventData.activeSeasonVO ? y.CastleModel.specialEventData.activeSeasonVO.eventId : 0);
    this._tMapNodeVOs.push(this.generateStartNode());
    for (var i = 0; i < this._tMapNodeIDs.length; i++) {
      var n = C.int(this._tMapNodeIDs[i]);
      var o = this.createNode(e, n);
      o.eventID = t;
      this._tMapNodeVOs.push(o);
    }
  };
  TreasureMapVO.prototype.createNode = function (e, t) {
    var i = new p.TMapNodeVO();
    i.fillFromParamXML(e.get(t));
    i.isEndNode = t == this.endNodeID;
    i.mapID = this._mapID;
    return i;
  };
  TreasureMapVO.prototype.generateStartNode = function () {
    var e = new p.TMapNodeVO();
    e.pos = this._initialPos;
    e.nodeID = C.int(p.TMapNodeVO.START_NODE_ID);
    e.isUnlocked = true;
    e.isDefeated = true;
    e.orUnlockIDs = [0];
    return e;
  };
  TreasureMapVO.prototype.getNodeById = function (e) {
    if (this._tMapNodeVOs != null) {
      for (var t = 0, i = this._tMapNodeVOs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.nodeID == e) {
          return n;
        }
      }
    }
    return null;
  };
  TreasureMapVO.prototype.getEndNode = function () {
    return this.getNodeById(this._endNodeID);
  };
  TreasureMapVO.prototype.endNodeRewards = function () {
    return this.getEndNode().rewardLists;
  };
  TreasureMapVO.prototype.parseGoodsTransfer = function (e) {
    if (!e) {
      this._goodsArivalTimestamp = 0;
      this._goods = null;
      return;
    }
    this._goodsArivalTimestamp = O.CachedTimer.getCachedTimer() + e.RS * h.ClientConstTime.SEC_2_MILLISEC;
    this._goods = a.CollectableManager.parser.s2cParamList.createList(e.G);
  };
  TreasureMapVO.prototype.parseTroopsTransfer = function (e) {
    if (!e) {
      this._troopsArivalTimestamp = 0;
      this._troops = null;
      return;
    }
    this._troopsArivalTimestamp = O.CachedTimer.getCachedTimer() + e.RS * h.ClientConstTime.SEC_2_MILLISEC;
    this._troops = new d.UnitInventoryDictionary();
    this._troops.fillFromWodAmountArray(e.I);
  };
  Object.defineProperty(TreasureMapVO.prototype, "remainingGoodsTransferTimeInSeconds", {
    get: function () {
      return Math.ceil((this._goodsArivalTimestamp - O.CachedTimer.getCachedTimer()) * h.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "remainingTroopsTransferTimeInSeconds", {
    get: function () {
      return Math.ceil((this._troopsArivalTimestamp - O.CachedTimer.getCachedTimer()) * h.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "goodsTransferProgress", {
    get: function () {
      return 1 - Math.max(0, Math.min(1, this.remainingGoodsTransferTimeInSeconds / this.travelTime));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "troopsTransferProgress", {
    get: function () {
      return 1 - Math.max(0, Math.min(1, this.remainingTroopsTransferTimeInSeconds / this.travelTime));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "isGoodsTransferActive", {
    get: function () {
      return !!this._goods && this.remainingGoodsTransferTimeInSeconds > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "isTroopsTransferActive", {
    get: function () {
      return !!this._troops && this.remainingTroopsTransferTimeInSeconds > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "isGoodsTransferReady", {
    get: function () {
      return !!(this.remainingGoodsTransferTimeInSeconds < 0) && !!this._goods && (this._goods = null, true);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "isTroopTransferReady", {
    get: function () {
      return !!(this.remainingTroopsTransferTimeInSeconds < 0) && !!this._troops && (this._troops = null, true);
    },
    enumerable: true,
    configurable: true
  });
  TreasureMapVO.prototype.getShuffledPieces = function () {
    var e = [];
    for (var t = 0; t < this.totalPieces; t++) {
      e.push(t);
    }
    for (var i = C.int(e.length), n = 0, o = 0, a = new g.SimpleRandom(this.mapID); i--;) {
      n = Math.floor(a.nextInt(99) / 100 * (i + 1));
      o = C.int(e[i]);
      e[i] = e[n];
      e[n] = o;
    }
    return e;
  };
  Object.defineProperty(TreasureMapVO.prototype, "tMapNodeVOs", {
    get: function () {
      return this._tMapNodeVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "mapID", {
    get: function () {
      return this._mapID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "tMapNodeIDs", {
    get: function () {
      return this._tMapNodeIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "totalPieces", {
    get: function () {
      return this._totalPieces;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "initialPos", {
    get: function () {
      return this._initialPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "mapType", {
    get: function () {
      return this._mapType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "costPiece", {
    get: function () {
      return this._costPiece;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "missigPieces", {
    get: function () {
      return this._totalPieces - this._piecesFound;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "hasAllPieces", {
    get: function () {
      return this._totalPieces == this._piecesFound;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "mapbackground", {
    get: function () {
      return this._mapbackground;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "progressType", {
    get: function () {
      return this._progressType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "piecesFound", {
    get: function () {
      return this._piecesFound;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "endNodeID", {
    get: function () {
      return this._endNodeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "unitStorage", {
    get: function () {
      return this._unitStorage;
    },
    set: function (e) {
      this._unitStorage = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "unitCount", {
    get: function () {
      return this._unitCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "freeUnitSlots", {
    get: function () {
      return Math.max(0, this._unitStorage - this._unitCount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageMinMixedCapacity", {
    get: function () {
      var e = 0;
      for (var t = 0; t < this._resourceStorageCapacity.length; t++) {
        var i = this._resourceStorageCapacity.getItemByIndex(t).amount;
        if (i < e) {
          e = i;
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageMaxMixedCapacity", {
    get: function () {
      var e = 0;
      for (var t = 0; t < this._resourceStorageCapacity.length; t++) {
        var i = this._resourceStorageCapacity.getItemByIndex(t).amount;
        if (i > e) {
          e = i;
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageCapacityWood", {
    get: function () {
      return this._resourceStorageCapacity.getItemByType(s.CollectableEnum.WOOD).amount;
    },
    set: function (e) {
      this.getResourceCapacityItemFromStorageCapacity(s.CollectableEnum.WOOD).amount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageCapacityStone", {
    get: function () {
      return this._resourceStorageCapacity.getItemByType(s.CollectableEnum.STONE).amount;
    },
    set: function (e) {
      this.getResourceCapacityItemFromStorageCapacity(s.CollectableEnum.STONE).amount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageCapacityFood", {
    get: function () {
      return this._resourceStorageCapacity.getItemByType(s.CollectableEnum.FOOD).amount;
    },
    set: function (e) {
      this.getResourceCapacityItemFromStorageCapacity(s.CollectableEnum.FOOD).amount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "freeWoodCapacity", {
    get: function () {
      return this.resStorageCapacityWood - this.resStorageWood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "freeStoneCapacity", {
    get: function () {
      return this.resStorageCapacityStone - this.resStorageStone;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "freeFoodCapacity", {
    get: function () {
      return this.resStorageCapacityFood - this.resStorageFood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageWood", {
    get: function () {
      return this._resourcesStorage.getItemByType(s.CollectableEnum.WOOD).amount;
    },
    set: function (e) {
      this.getResourceItemFromStorage(s.CollectableEnum.WOOD).amount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageStone", {
    get: function () {
      return this._resourcesStorage.getItemByType(s.CollectableEnum.STONE).amount;
    },
    set: function (e) {
      this.getResourceItemFromStorage(s.CollectableEnum.STONE).amount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageFood", {
    get: function () {
      return this._resourcesStorage.getItemByType(s.CollectableEnum.FOOD).amount;
    },
    enumerable: true,
    configurable: true
  });
  TreasureMapVO.prototype.getRandomAchivedNodeByNodeID = function (e) {
    for (var t = 0, i = this.getNodeById(e).orUnlockIDs; t < i.length; t++) {
      var n = i[t];
      var o = parseInt(n);
      if (o !== undefined && this._achivedNodes != null) {
        for (var a = 0, s = this._achivedNodes; a < s.length; a++) {
          var r = s[a];
          if (r !== undefined && o == r) {
            var l = true;
            var c = this.getNodeById(o).andUnlockIDs;
            if (c) {
              for (var u = 0, d = c; u < d.length; u++) {
                var p = d[u];
                var h = parseInt(p);
                if (h !== undefined && this._achivedNodes.indexOf(h) < 0) {
                  l = false;
                }
              }
            }
            if (!l) {
              continue;
            }
            if (this.getNodeById(o).isBridge) {
              return this.getRandomAchivedNodeByNodeID(o);
            } else {
              return this.getNodeById(o);
            }
          }
        }
      }
    }
    return null;
  };
  Object.defineProperty(TreasureMapVO.prototype, "treasureMovementsVOs", {
    get: function () {
      return y.CastleModel.armyData.getTreasureMovementsByMapID(this._mapID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "hasDefeatedAll", {
    get: function () {
      var e = 0;
      if (this._tMapNodeVOs != null) {
        for (var t = 0, i = this._tMapNodeVOs; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && this._achivedNodes != null) {
            for (var o = 0, a = this._achivedNodes; o < a.length; o++) {
              var s = a[o];
              if (s !== undefined && n.nodeID == s) {
                e++;
              }
            }
          }
        }
      }
      return this._tMapNodeVOs.length == e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "hasDefeatedEndNode", {
    get: function () {
      if (this._achivedNodes != null) {
        for (var e = 0, t = this._achivedNodes; e < t.length; e++) {
          var i = t[e];
          if (i !== undefined && i == this.endNodeID) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "morality", {
    get: function () {
      return this._morality;
    },
    set: function (e) {
      this._morality = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "skipCostC2", {
    get: function () {
      return this._skipCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "hasCamp", {
    get: function () {
      return this._hasCamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "travelTime", {
    get: function () {
      return this._travelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resourceTravelTaxRate", {
    get: function () {
      return this._resourceTravelTaxRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "unitTravelTaxRate", {
    get: function () {
      return this._unitTravelTaxRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "troops", {
    get: function () {
      return this._troops;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "durationInSeconds", {
    get: function () {
      return this._durationInSeconds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "hasDuration", {
    get: function () {
      return this._durationInSeconds != -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "portLevel", {
    get: function () {
      var e = 0;
      if (this._tMapPortNodesVOs != null) {
        for (var t = 0, i = this._tMapPortNodesVOs; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && n.isDefeated) {
            e++;
          }
        }
      }
      return e + 1;
    },
    enumerable: true,
    configurable: true
  });
  TreasureMapVO.prototype.getNextLockedPortNode = function () {
    if (this._tMapPortNodesVOs != null) {
      for (var e = 0, t = this._tMapPortNodesVOs; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && !i.isDefeated) {
          return i;
        }
      }
    }
    return null;
  };
  Object.defineProperty(TreasureMapVO.prototype, "maxPortLevel", {
    get: function () {
      return this._tMapPortNodesVOs.length + 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "maxSoldiers", {
    get: function () {
      return this._maxSoldiers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "isTreasureMap", {
    get: function () {
      return this._mapType == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "pixelSize", {
    get: function () {
      return this._pixelSize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resources", {
    get: function () {
      return this._resourcesStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resourceStorageCapacity", {
    get: function () {
      return this._resourceStorageCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "goods", {
    get: function () {
      return this._goods;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "eventPackages", {
    get: function () {
      return this._eventPackages;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "remainingMapTimeInSeconds", {
    get: function () {
      if (this.hasRemainingTime) {
        return Math.max(0, (this._endTimeStamp - O.CachedTimer.getCachedTimer()) * h.ClientConstTime.MILLISEC_2_SEC);
      } else {
        return Number.MAX_VALUE;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "hasRemainingTime", {
    get: function () {
      return this._endTimeStamp > 0;
    },
    enumerable: true,
    configurable: true
  });
  TreasureMapVO.prototype.setMapHighlights = function (e) {
    if (this._mapHighlights != null) {
      for (var t = 0, i = this._mapHighlights; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this.getNodeById(n).isHighlighted = false;
        }
      }
    }
    this._mapHighlights = e;
    if (this._mapHighlights != null) {
      for (var o = 0, a = this._mapHighlights; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          this.getNodeById(s).isHighlighted = true;
        }
      }
    }
  };
  Object.defineProperty(TreasureMapVO.prototype, "mapHighlights", {
    get: function () {
      return this._mapHighlights;
    },
    enumerable: true,
    configurable: true
  });
  TreasureMapVO.prototype.getTotalSoldierCount = function () {
    var e = C.int(y.CastleModel.militaryData.unitInventory.getSoldierCount());
    var t = 0;
    if (this.treasureMovementsVOs != null) {
      for (var i = 0, n = this.treasureMovementsVOs; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t += C.int(o.attackArmyVO.unitAmount);
        }
      }
    }
    return e + t + C.int(this.troops ? this.troops.getSoldierCount() : 0);
  };
  TreasureMapVO.prototype.getRemainingSoldierCapacity = function () {
    return this.unitStorage - this.getTotalSoldierCount();
  };
  TreasureMapVO.prototype.getResourceItemFromStorage = function (e) {
    return this._resourcesStorage.getItemByType(e);
  };
  TreasureMapVO.prototype.getResourceCapacityItemFromStorageCapacity = function (e) {
    return this._resourceStorageCapacity.getItemByType(e);
  };
  TreasureMapVO.prototype.getAvailableNodeIDs = function (e = null) {
    var t = [];
    if (this.tMapNodeVOs != null) {
      for (var i = 0, n = this.tMapNodeVOs; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && e && e(o)) {
          t.push(o.nodeID);
        }
      }
    }
    return t;
  };
  return TreasureMapVO;
}();
exports.TreasureMapVO = o;
var a = require("./50.js");
var s = require("./12.js");
var r = require("./48.js");
var l = require("./453.js");
var c = require("./267.js");
var u = require("./268.js");
var d = require("./156.js");
var p = require("./735.js");
var h = require("./28.js");
var g = require("./2.js");
var C = require("./6.js");
var _ = require("./22.js");
var m = require("./129.js");
var f = require("./889.js");
var O = require("./30.js");
var E = require("./15.js");
var y = require("./4.js");