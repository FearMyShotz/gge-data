Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./2.js");
var h = require("./2.js");
var g = require("./1.js");
var C = require("./1.js");
var _ = require("./5.js");
var m = require("./5.js");
var f = require("./5.js");
var O = require("./5.js");
var E = require("./5.js");
var y = require("./5.js");
var b = require("./5.js");
var D = require("./5.js");
var I = require("./5.js");
var T = require("./5.js");
var v = require("./5.js");
var S = require("./5.js");
var A = require("./3.js");
var L = require("./6.js");
var P = require("./258.js");
var M = require("./51.js");
var R = require("./368.js");
var V = require("./58.js");
var x = require("./39.js");
var w = require("./28.js");
var B = require("./2267.js");
var F = require("./725.js");
var N = require("./192.js");
var k = require("./221.js");
var U = require("./32.js");
var G = require("./161.js");
var H = require("./30.js");
var j = require("./15.js");
var W = require("./197.js");
var Y = require("./910.js");
var K = require("./4.js");
var z = require("./110.js");
var q = require("./2268.js");
var X = require("./142.js");
var Q = require("./2270.js");
var J = require("./308.js");
var Z = require("./726.js");
var $ = require("./203.js");
var ee = function (e) {
  function CastleUserData(t) {
    var i = e.call(this) || this;
    i._nextUpdateInterval = 0;
    i._updateInterval = 1000;
    i.firstLogin = false;
    i._hasValidatedEmail = false;
    i._hasSentMailVerification = false;
    i.currency = new Map();
    i._userXP = 0;
    i._userXPcurrentLevel = 0;
    i._userXPtoNextLevel = 0;
    i._userHonor = 0;
    i._userRanking = 0;
    i._userLegendLevel = 0;
    i._allianceID = 0;
    i._allianceRank = 0;
    i._allianceCurrentFame = 0;
    i._isSearchingAlliance = false;
    i._isPayUser = false;
    i._paymentDoppler = 0;
    i._isCheater = false;
    i._noobProtected = false;
    i._noobProtectionRemainingTime = 0;
    i._peaceProtectionRemainingStatusTime = 0;
    i._noobTimeOffset = 0;
    i._peaceStatusTimeOffset = 0;
    i._peaceModeStatus = 0;
    i._lifeTimeSpent = 0;
    i.blockDialogs = false;
    i.joinCastleCount = 0;
    i._mayChangeCrest = false;
    i._hasPremiumFlag = false;
    i._relocationCount = 0;
    i._relocationDurationEndTime = 0;
    i._relocationCooldownEndTime = 0;
    i._destinationX = 0;
    i._destinationY = 0;
    i._aquaPoints = -1;
    i._noobProtectedPerKingdom = new Map();
    i._selectedHeroID = 801;
    i._levelUpInSession = false;
    i._facebookCookie = "";
    i._facebookEmail = "";
    i._isConnectedToFacebook = false;
    i._isPlayerNameTemporary = false;
    i._isPasswordTemporary = false;
    i._isEmailTemporary = false;
    i._persistentLogin = false;
    i._acceptedTermsAndConditions = false;
    i._connectToTempServer = false;
    i._connectToABGServer = false;
    i._apiTokenExpirationSeconds = 0;
    i._foodFrozen = false;
    i._newCapTooNotifications = 0;
    i.toShowDialogsAfterJAA = [];
    i._kingstowerList = new ue.CastleKingstowerList();
    i._monumentList = new he.CastleMonumentList();
    i._laboratoryList = new de.CastleLaboratoryList();
    i.splitRunData = new q.CastleOwnSplitRunData(i);
    i.attackCounter = new Q.AttackCounterVO();
    i._globalConstructionItemEffects = new Map();
    i._globalConstructionItemBoni = new Map();
    if (K.CastleModel.userData) {
      i.connectToTempServer = K.CastleModel.userData.connectToTempServer;
      i.specialServerLoginToken = K.CastleModel.userData.specialServerLoginToken;
    }
    i.onAPITokenRequestSignal = new Ce.Signal();
    return i;
  }
  n.__extends(CastleUserData, e);
  CastleUserData.prototype.parse_GPI = function (e) {
    this.userID = e[m.CommKeys.USER_ID];
    this.playerID = e[m.CommKeys.TARGET_PLAYER_ID];
    this.userName = e[m.CommKeys.PLAYER_NAME];
    this.email = e[m.CommKeys.EMAIL_2] != "-1" ? e[m.CommKeys.EMAIL_2] : "";
    this._hasValidatedEmail = e[m.CommKeys.HAS_CONFIRMED_EMAIL] == 1;
    this._isEmailTemporary = !this.hasValidatedEmail;
    this._isCheater = e[m.CommKeys.ADMIN_SECURITY_LEVEL] > 0;
    this._acceptedTermsAndConditions = e.CTAC > 0;
    if (this._acceptedTermsAndConditions == 0 && this.env.useexternallinks) {
      o.BasicDialogHandler.getInstance().registerDialogs(le.CastleAcceptGDPRDialog, null, true, Number.MAX_VALUE);
    }
    this.controller.dispatchEvent(U.CastleUserDataEvent.GPI_UPDATE);
  };
  CastleUserData.prototype.parse_LTS = function (e) {
    if (e) {
      this._lifeTimeSpent = L.int(e.LTS);
      this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT));
    }
  };
  CastleUserData.prototype.parse_GHO = function (e) {
    if (e) {
      this._userHonor = L.int(e.H);
      this._userRanking = L.int(e.RP);
      this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.CHANGE_USERDATA));
    }
  };
  CastleUserData.prototype.parse_GAL = function (e) {
    if (e) {
      this._allianceID = L.int(e.AID);
      this._allianceRank = L.int(e.R);
      this._allianceName = e.AN ? e.AN : "";
      this._allianceCurrentFame = L.int(e.ACF);
      this._isSearchingAlliance = parseInt(e.SA) == 1;
      K.CastleModel.armyData.checkAllAttackMovements();
      if (K.CastleModel.specialEventData.isEventActive(f.EventConst.EVENTTYPE_ALLIANCE_TOURNAMENT) && ie.Iso.controller.dataUpdater) {
        ie.Iso.controller.dataUpdater.updateEventBuildings();
      }
      if (this._allianceID < 0) {
        K.CastleModel.chatData.resetHistory();
        K.CastleModel.allianceData.resetMyAlliance();
      }
      this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED));
    }
  };
  CastleUserData.prototype.parse_GEM = function (e) {
    if (e) {
      this._mayChangeCrest = e.MCE == 1;
      this._playerCrest = new J.CrestVO();
      this._playerCrest.loadFromParamObject(e);
      this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.CHANGE_USER_AVATAR));
    }
  };
  CastleUserData.prototype.parse_GXP = function (e) {
    if (e) {
      var t = this._userXP;
      this._userXP = L.int(e.XP);
      this.userLevel = e.LVL;
      this.userLegendLevel = this.userLevel >= E.PlayerConst.LEVEL_CAP ? E.PlayerConst.getLegendLevelFromXP(this._userXP) : 0;
      if (this.userLegendLevel > 0) {
        this._userXPcurrentLevel = L.int(E.PlayerConst.getXPFromLegendLevel(this.userLegendLevel));
        this._userXPtoNextLevel = L.int(E.PlayerConst.getXPFromLegendLevel(this.userLegendLevel + 1));
      } else {
        this._userXPcurrentLevel = L.int(E.PlayerConst.getXPFromLevel(this.userLevel));
        this._userXPtoNextLevel = L.int(E.PlayerConst.getXPFromLevel(this.userLevel + 1));
      }
      this.controller.dispatchEvent(new G.CastleXPChangedEvent(G.CastleXPChangedEvent.CHANGE_USER_XP, t));
    }
  };
  CastleUserData.prototype.parse_GAP = function (e) {
    if (e) {
      K.CastleModel.userData.aquaPoints = e.P;
      if (K.CastleModel.allianceData.myAllianceVO) {
        K.CastleModel.allianceData.myAllianceVO.aquaPoints = e.A;
      }
      if (e.O > 0) {
        ie.Iso.controller.dataUpdater.spawnAquaPointsEffect(e.O, e.DP);
      }
    }
  };
  CastleUserData.prototype.parse_GCL = function (e) {
    var t;
    if (ae.CastleLayoutManager.getInstance().isInMyCastle && K.CastleModel.kingdomData.activeKingdomID == O.FactionConst.KINGDOM_ID) {
      t = K.CastleModel.areaData.activeAreaInfo;
    }
    this._castleList = new pe.CastleListVO();
    this._castleList.ownerID = L.int(this.playerID);
    if (e) {
      this._castleList.parseCastleList(e, K.CastleModel.otherPlayerData.getOwnerInfoVO(this.playerID));
      if (t && this.getOwnMapObjects(t.areaType, t.kingdomID).length == 0) {
        r.CommandController.instance.executeCommand(ne.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, K.CastleModel.userData.castleList.getMainCastleByKingdomID(O.FactionConst.KINGDOM_ID));
      }
      this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.CHANGE_CASTLELIST));
    }
  };
  CastleUserData.prototype.parse_MIR = function (e) {
    if (e.gcl) {
      K.CastleModel.userData.parse_GCL(e.gcl);
    }
    if (e.gkl) {
      K.CastleModel.userData.kingstowerList.parseGKL(e.gkl);
    }
    if (e.gml) {
      K.CastleModel.userData.monumentList.parseGML(e.gml);
    }
    if (e.gll) {
      K.CastleModel.userData.laboratoryList.parseGLL(e.gll);
    }
  };
  CastleUserData.prototype.parse_MIR_openDialog = function (e) {
    var t = K.CastleModel.userData.getOwnCastle(e.CID, e.KID);
    if (!ae.CastleLayoutManager.getInstance().isIngameState) {
      oe.CastleDialogHandler.getInstance().blockDialogs = true;
    }
    if (t) {
      oe.CastleDialogHandler.getInstance().registerDefaultDialogs(re.CastleNameCastleDialog, new Y.CastleNameCastleDialogProperties(t, e.KID, e.CID), false, o.BasicDialogHandler.PRIORITY_LOW);
    }
  };
  CastleUserData.prototype.parse_UPI = function (e) {
    if (e) {
      this._isPayUser = e.PU == 1;
      this._paymentDoppler = L.int(e.DC);
      this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.CHANGE_PAYUSER_INFO));
    }
  };
  CastleUserData.prototype.parse_GPF = function (e) {
    if (e) {
      this._hasPremiumFlag = e.PF == 1 || e.PF == 1;
      this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.PREMIUM_FLAG_CHANGED));
    }
  };
  CastleUserData.prototype.parse_KGV = function (e) {
    if (e) {
      this._villageList = new ce.CastleDetailedVillageList();
      this._villageList.parseKGV(e);
      K.CastleModel.kingdomData.dispatchEvent(new N.CastleKingdomEvent(N.CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED, this._villageList));
    }
  };
  CastleUserData.prototype.getCastleListWithLandmarks = function (e) {
    var t;
    if (e === undefined) {
      e = true;
    }
    (t = (t = (t = (t = e ? this._castleList.listOfCastlesWithoutEventCamps : this._castleList.list).concat(this._kingstowerList.completeList)).concat(this._monumentList.completeList)).concat(this._laboratoryList.completeList)).sort(te.ClientConstSort.sortByKingdomId);
    return t;
  };
  CastleUserData.prototype.getCastleList = function (e) {
    var t;
    if (e === undefined) {
      e = true;
    }
    (t = e ? this._castleList.listOfCastlesWithoutEventCamps : this._castleList.list).sort(te.ClientConstSort.sortByKingdomId);
    return t;
  };
  Object.defineProperty(CastleUserData.prototype, "allianceCurrentFame", {
    get: function () {
      return this._allianceCurrentFame;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.userValidatedEmail = function () {
    this._hasValidatedEmail = true;
    this._isEmailTemporary = false;
    this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.VALIDATED_EMAIL));
    this.controller.dispatchEvent(U.CastleUserDataEvent.GPI_UPDATE);
  };
  CastleUserData.prototype.parse_MOS = function (e) {
    if (e) {
      var t = this.getOwnCastle(e.CID, e.KID);
      t.remainingOpenGateTime = L.int(e.RPT);
      if (t.remainingOpenGateTime > 0) {
        t.openGateCounter++;
        this.controller.dispatchEvent(new F.OpenGateEvent(F.OpenGateEvent.OPEN_GATE_CHANGED));
      } else {
        this.controller.dispatchEvent(new F.OpenGateEvent(F.OpenGateEvent.OPEN_GATE_FINISHED));
      }
      K.CastleModel.boostData.dispatchEvent(new k.CastleResourceBoosterEvent(k.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, null));
    }
  };
  CastleUserData.prototype.parse_MAS = function (e) {
    if (e) {
      var t = this.getOwnCastle(e.CID, e.KID);
      t.remainingAbandonOutpostTime = L.int(e.AOT);
      t.remainingCancelAbandonOutpostTime = L.int(e.CAT);
    }
  };
  CastleUserData.prototype.parse_MAC = function (e) {
    if (e) {
      var t = this.getOwnCastle(e.CID, e.KID);
      t.remainingAbandonOutpostTime = -1;
      t.remainingCancelAbandonOutpostTime = -1;
    }
  };
  CastleUserData.prototype.parse_UAP = function (e) {
    if (e) {
      this._noobProtectedPerKingdom.set(e.KID, L.int(e.NS) > 0);
      var t = L.int(K.CastleModel.kingdomData.activeKingdomID);
      if (e.KID == t) {
        var i = L.int(e.NS);
        if (i > 0) {
          this._noobProtected = true;
          this._noobProtectionRemainingTime = i;
          this._noobTimeOffset = L.int(H.CachedTimer.getCachedTimer() / 1000);
          this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.NOOB_PROTECTION));
        } else {
          if (this._noobProtected) {
            this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.NOOBTIME_FINISHED));
          }
          this._noobProtected = false;
          this._noobProtectionRemainingTime = 0;
        }
        if (e.KID == O.FactionConst.KINGDOM_ID) {
          var n = g.castAs(K.CastleModel.specialEventData.getActiveEventByEventId(f.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
          if (n) {
            n.parse_uap(e);
          }
        } else {
          this._peaceModeStatus = L.int(e.PMS);
          var o = L.int(e.PMT);
          if (o > 0 && this._peaceModeStatus != CastleUserData.PEACEMODE_STATUS_OFF) {
            this._peaceProtectionRemainingStatusTime = o;
            this._peaceStatusTimeOffset = L.int(H.CachedTimer.getCachedTimer() / 1000);
            this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.PEACE_PROTECTION));
          } else {
            this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.PEACETIME_FINISHED));
          }
          this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.ATTACKPROTECTION_UPDATED));
          K.CastleModel.boostData.dispatchEvent(new k.CastleResourceBoosterEvent(k.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, null));
        }
      }
    }
  };
  CastleUserData.prototype.parse_GRI = function (e) {
    if (e) {
      this._relocationCount = L.int(e.RLC);
      this._relocationDurationEndTime = L.int(e.JM == 0 ? Math.max(0, H.CachedTimer.getCachedTimer() + e.RD * w.ClientConstTime.SEC_2_MILLISEC) : -1);
      this._relocationCooldownEndTime = L.int(Math.max(0, H.CachedTimer.getCachedTimer() + e.RMC * w.ClientConstTime.SEC_2_MILLISEC));
      this._destinationX = L.int(e.DX);
      this._destinationY = L.int(e.DY);
      this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.RELOCATE_INFO_UPDATED));
    }
  };
  CastleUserData.prototype.parse_LEVEL_UP = function (e, t = false) {
    if (t) {
      this.userLegendLevel = e;
      this.userLevel = E.PlayerConst.LEVEL_CAP;
    } else {
      var i = L.int(this.userLevel);
      this.userLevel = e;
      if (i != this.userLevel) {
        K.CastleModel.specialEventData.updateEvents();
      }
    }
    this._levelUpInSession = true;
    this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.LEVEL_UP));
  };
  CastleUserData.prototype.parse_SCD = function (e) {
    this._isPlayerNameTemporary = e[m.CommKeys.IS_PLAYER_NAME_TEMPORARY];
    this._isPasswordTemporary = e[m.CommKeys.IS_PASSWORD_TEMPORARY];
    this._isEmailTemporary = e[m.CommKeys.IS_EMAIL_TEMPORARY];
  };
  CastleUserData.prototype.parse_FCS = function (e) {
    var t = e[m.CommKeys.IS_CONNECTED_TO_FACEBOOK];
    this._isConnectedToFacebook = t;
    if (!t) {
      this.resetFacebookData();
    }
  };
  CastleUserData.prototype.parse_DTS = function (e) {
    if (e) {
      this._foodFrozen = e[m.CommKeys.DOWNTIME_STATUS] == 1;
      this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED));
    }
  };
  Object.defineProperty(CastleUserData.prototype, "userLevel", {
    get: function () {
      return Object.getOwnPropertyDescriptor(s.BasicUserData.prototype, "userLevel").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.BasicUserData.prototype, "userLevel").set.call(this, e);
      u.PerformanceMonitoringService.getInstance().externalLogCommand.userLevel = this.userLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userLegendLevel", {
    get: function () {
      return this._userLegendLevel;
    },
    set: function (e) {
      this._userLegendLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.executeUpdate = function (e) {
    if (this._noobProtected && this.getRemainingNoobTime() <= 0) {
      this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.NOOBTIME_FINISHED));
      this._noobProtected = false;
    }
    if (!(this.getRemainingPeaceStatusTime() > 0) || this._peaceModeStatus == CastleUserData.PEACEMODE_STATUS_OFF) {
      switch (this._peaceModeStatus) {
        case CastleUserData.PEACEMODE_STATUS_PRETIME:
        case CastleUserData.PEACEMODE_STATUS_PEACETIME:
        case CastleUserData.PEACEMODE_STATUS_POSTTIME:
          K.CastleModel.smartfoxClient.sendCommandVO(new B.C2SUserAttackProtectionVO(K.CastleModel.kingdomData.activeKingdomID));
      }
    }
  };
  CastleUserData.prototype.getRemainingNoobTime = function () {
    return L.int(this._noobProtectionRemainingTime - (H.CachedTimer.getCachedTimer() / 1000 - this._noobTimeOffset));
  };
  CastleUserData.prototype.isInNormalNoobProtection = function () {
    return this.getRemainingNoobTime() > 0 && K.CastleModel.kingdomData.activeKingdomID != O.FactionConst.KINGDOM_ID && K.CastleModel.kingdomData.activeKingdomID != v.WorldIsland.KINGDOM_ID;
  };
  CastleUserData.prototype.getRemainingPeaceStatusTime = function () {
    return L.int(this._peaceProtectionRemainingStatusTime - (H.CachedTimer.getCachedTimer() / 1000 - this._peaceStatusTimeOffset));
  };
  CastleUserData.prototype.getOwnCastle = function (e, t = -1) {
    if (t == -1) {
      t = L.int(K.CastleModel.kingdomData.activeKingdomID);
    }
    for (var i = 0, n = this._castleList.list; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined && o.equalsOtherWMO(e, t)) {
        return o;
      }
    }
    if (this._villageList && this.isVillageKingdom(t)) {
      for (var a = 0, s = this._villageList.completeList; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined && r.villageMapObjectVO.equalsOtherWMO(e, t)) {
          return r.villageMapObjectVO;
        }
      }
    }
    if (this._kingstowerList && this._kingstowerList.completeList && t == D.WorldClassic.KINGDOM_ID) {
      for (var l = 0, c = this._kingstowerList.completeList; l < c.length; l++) {
        var u = c[l];
        if (u !== undefined && u.equalsOtherWMO(e, t)) {
          return u;
        }
      }
    }
    if (this._monumentList && this._monumentList.completeList && t == D.WorldClassic.KINGDOM_ID) {
      for (var d = 0, p = this._monumentList.completeList; d < p.length; d++) {
        var h = p[d];
        if (h !== undefined && h.equalsOtherWMO(e, t)) {
          return h;
        }
      }
    }
    if (this._laboratoryList && this._laboratoryList.completeList) {
      for (var g = 0, C = this._laboratoryList.completeList; g < C.length; g++) {
        var _ = C[g];
        if (_ !== undefined && _.equalsOtherWMO(e, t)) {
          return _;
        }
      }
    }
    return null;
  };
  CastleUserData.prototype.isVillageKingdom = function (e) {
    return e == D.WorldClassic.KINGDOM_ID || e == I.WorldDessert.KINGDOM_ID || e == T.WorldIce.KINGDOM_ID || e == S.WorldVolcano.KINGDOM_ID || e == v.WorldIsland.KINGDOM_ID;
  };
  Object.defineProperty(CastleUserData.prototype, "controller", {
    get: function () {
      return j.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userXP", {
    get: function () {
      return this._userXP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userXPcurrentLevel", {
    get: function () {
      return this._userXPcurrentLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userXPtoNextLevel", {
    get: function () {
      return this._userXPtoNextLevel - this._userXP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userXPcurrentLevelRange", {
    get: function () {
      return this._userXPtoNextLevel - this._userXPcurrentLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "xpPercentToNextLevel", {
    get: function () {
      return 1 - this.userXPtoNextLevel / this.userXPcurrentLevelRange;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "playerCrest", {
    get: function () {
      if (this.userLevel < 1 || this._playerCrest && this._playerCrest.isBlack) {
        return R.ClientConstCrest.tutorialCrestVO;
      } else {
        return this._playerCrest;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "castleList", {
    get: function () {
      return this._castleList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "noobProtected", {
    get: function () {
      return this._noobProtected;
    },
    set: function (e) {
      this._noobProtected = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hasValidatedEmail", {
    get: function () {
      return this._hasValidatedEmail;
    },
    set: function (e) {
      this._hasValidatedEmail = e;
      if (e) {
        this._isEmailTemporary = false;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userHonor", {
    get: function () {
      return this._userHonor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "allianceID", {
    get: function () {
      return this._allianceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "allianceRank", {
    get: function () {
      return this._allianceRank;
    },
    set: function (e) {
      this._allianceRank = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isLeader", {
    get: function () {
      return this.allianceRank == _.AllianceConst.RANK_LEADER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "allianceName", {
    get: function () {
      if (this.isInAlliance && K.CastleModel.allianceData.myAllianceVO) {
        return K.CastleModel.allianceData.myAllianceVO.allianceName;
      } else {
        return this._allianceName;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isInAlliance", {
    get: function () {
      return this._allianceID >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "playerID", {
    get: function () {
      return this._playerID;
    },
    set: function (e) {
      this._playerID = e;
      K.CastleModel.localData.savePlayerID(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isAllianceLeader", {
    get: function () {
      var e = K.CastleModel.allianceData.myAllianceVO;
      return !!e && !!e.allianceLeader && e.allianceLeader.playerID == this.playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "canInviteToAlliance", {
    get: function () {
      return this.isInAlliance && K.CastleModel.allianceData.hasRight(this._allianceRank, _.AllianceConst.RIGHT_INVITE);
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.canWriteMessageTo = function (e) {
    return !!e && e.playerLevel >= b.TutorialConst.LAST_TUTORIAL_STEP_LEVEL && this.userLevel >= b.TutorialConst.LAST_TUTORIAL_STEP_LEVEL;
  };
  CastleUserData.prototype.getMessageTooltip = function (e) {
    if (this.canWriteMessageTo(e)) {
      return "dialog_inbox_writeNewMessage";
    } else if (this.userLevel >= b.TutorialConst.LAST_TUTORIAL_STEP_LEVEL) {
      return "player_notReceiveMessages";
    } else {
      return x.ClientConstTextIds.NOT_AVAILABLE;
    }
  };
  CastleUserData.prototype.canTradeResourcesTo = function (e) {
    return !e.isRuin && !(this.userLevel < V.ClientConstLevelRestrictions.MIN_LEVEL_TRADE) && !(e.playerLevel < V.ClientConstLevelRestrictions.MIN_LEVEL_RECEIVE_RESOURCE_WAGONS) && e.playerID != this.playerID;
  };
  CastleUserData.prototype.getTradeResourceTooltip = function (e) {
    if (e.isRuin) {
      return "isRuin";
    } else if (this.userLevel < V.ClientConstLevelRestrictions.MIN_LEVEL_TRADE) {
      return x.ClientConstTextIds.LEVEL_NEEDED + W.CastleToolTipManager.ID_PARAM_SEPERATOR + V.ClientConstLevelRestrictions.MIN_LEVEL_TRADE;
    } else if (e.playerLevel < V.ClientConstLevelRestrictions.MIN_LEVEL_RECEIVE_RESOURCE_WAGONS) {
      return "needLevel_resourceTransport" + W.CastleToolTipManager.ID_PARAM_SEPERATOR + V.ClientConstLevelRestrictions.MIN_LEVEL_RECEIVE_RESOURCE_WAGONS;
    } else {
      return "ringmenu_trade_menu";
    }
  };
  CastleUserData.prototype.canSetBookmark = function (e) {
    var t = Z.CastleBookmarkHelper.isBookmarkableForPlayer(e);
    var i = K.CastleModel.bookmarkData.isPlayerListFull;
    var n = this.isInAlliance;
    var o = Z.CastleBookmarkHelper.isBookmarkableForAlliance(e);
    var a = K.CastleModel.bookmarkData.isAllianceListFull;
    var s = K.CastleModel.bookmarkData.getBookmarkForWMO(e, $.EWorldmapBookmarkType.getPlayerTypes()) != null;
    return !!t && !i && !s || !!o && !!n && !a;
  };
  CastleUserData.prototype.getSetBookmarkTooltip = function (e) {
    var t = Z.CastleBookmarkHelper.isBookmarkableForPlayer(e);
    var i = K.CastleModel.bookmarkData.isPlayerListFull;
    var n = this.isInAlliance;
    var o = Z.CastleBookmarkHelper.isBookmarkableForAlliance(e);
    var a = K.CastleModel.bookmarkData.isAllianceListFull;
    var s = K.CastleModel.bookmarkData.getBookmarkForWMO(e, $.EWorldmapBookmarkType.getPlayerTypes()) != null;
    var r = t && !i && !s;
    var l = o && n && !a;
    return this.getSetBookmarkTooltipInner(r, l, s, a, i, true);
  };
  CastleUserData.prototype.getSetBookmarkTooltipInner = function (e, t, i, n, o, a) {
    if (e) {
      if (a) {
        return "ringmenu_markLocation";
      } else {
        return "";
      }
    } else if (t) {
      if (a) {
        return "ringmenu_markLocation";
      } else {
        return "";
      }
    } else if (i) {
      return "Bookmarks_Menu_changeName_tooltip";
    } else if (n || o) {
      return "Bookmarks_markLocation_listFull_tooltip";
    } else {
      return "Bookmarks_markLocation_notBookmarkable_tooltip";
    }
  };
  Object.defineProperty(CastleUserData.prototype, "isPayUser", {
    get: function () {
      return this._isPayUser;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isCheater", {
    get: function () {
      return this._isCheater;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userCanOpenDefenceScreen", {
    get: function () {
      return this.userLevel >= V.ClientConstLevelRestrictions.MIN_LEVEL_DEFENCE_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.isUserInMyAlliance = function (e) {
    return !!e && e.isInAlliance && e.allianceID == this._allianceID;
  };
  CastleUserData.prototype.isUserInMyAllianceAndCheckFactionKingdom = function (e) {
    if (!e || !e.movementOwnerInfo) {
      return false;
    }
    if (e.kingdomID == O.FactionConst.KINGDOM_ID) {
      var t = g.castAs(K.CastleModel.specialEventData.getActiveEventByEventId(f.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      if (t) {
        return e.movementOwnerInfo.factionID == t.ownFaction;
      }
    }
    return this.isUserInMyAlliance(e.movementOwnerInfo);
  };
  Object.defineProperty(CastleUserData.prototype, "peaceModeStatus", {
    get: function () {
      return this._peaceModeStatus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isInPeaceMode", {
    get: function () {
      return this.peaceModeStatus == CastleUserData.PEACEMODE_STATUS_PEACETIME || this.peaceModeStatus == CastleUserData.PEACEMODE_STATUS_PRETIME;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.hasOutpostsInKingdom = function (e) {
    return this._castleList.getFilteredList(e).length > 1;
  };
  Object.defineProperty(CastleUserData.prototype, "hasMetropol", {
    get: function () {
      return this._castleList.getMetropol() != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hasCapital", {
    get: function () {
      return this._castleList.getCapital() != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "mayChangeCrest", {
    get: function () {
      return this._mayChangeCrest;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.hasLevelFor = function (e) {
    return this.userLevel >= e;
  };
  Object.defineProperty(CastleUserData.prototype, "isSearchingAlliance", {
    get: function () {
      return this._isSearchingAlliance;
    },
    set: function (e) {
      this._isSearchingAlliance = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "paymentDopplerCount", {
    get: function () {
      return this._paymentDoppler;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hasPaymentDoppler", {
    get: function () {
      return this._paymentDoppler > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hasPremiumFlag", {
    get: function () {
      return this._hasPremiumFlag;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.update = function (e) {
    if (e > this._nextUpdateInterval) {
      this._nextUpdateInterval = e + this._updateInterval;
      this.executeUpdate(e);
    }
  };
  Object.defineProperty(CastleUserData.prototype, "villageList", {
    get: function () {
      return this._villageList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "relocationCount", {
    get: function () {
      return this._relocationCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "nextRelocationDuration", {
    get: function () {
      return y.RelocationConst.RELOCATION_DURATION[this._relocationCount == 0 ? 0 : 1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "remainingRelocationCooldown", {
    get: function () {
      return Math.max(0, (this._relocationCooldownEndTime - H.CachedTimer.getCachedTimer()) * w.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "remainingRelocationDuration", {
    get: function () {
      return Math.max(0, (this._relocationDurationEndTime - H.CachedTimer.getCachedTimer()) * w.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hasAlternativeQuestGiver", {
    get: function () {
      var e = L.int(a.BasicModel.instanceProxy.selectedInstanceVO.instanceId);
      var t = this.env.networkId == 1;
      var i = e == 1 || e == 2 || e == 3 || this.env.isTest;
      var n = this.playerID % 2 == 0;
      var o = false;
      switch (e) {
        case 1:
          if (this.playerID > 1686000) {
            o = true;
          }
          break;
        case 2:
          if (this.playerID > 1188000) {
            o = true;
          }
          break;
        case 3:
          if (this.playerID > 1929000) {
            o = true;
          }
      }
      if (this.env.isTest) {
        o = true;
      }
      return t && i && n && o;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.sendInviterCodeToServer = function () {
    if (this.env.inviterCode) {
      j.CastleBasicController.getInstance().addEventListener(d.SetInviteCodeEvent.INVITE_CODE_SET, this.bindFunction(this.onInviteCodeSet));
      j.CastleBasicController.getInstance().addEventListener(d.SetInviteCodeEvent.SET_INVITE_CODE_FAILED, this.bindFunction(this.onInviteCodeSet));
      K.CastleModel.smartfoxClient.sendCommandVO(new l.CoreC2SSetInviteCodeVO(this.env.inviterCode, this.env.invite_refer_method));
    }
  };
  CastleUserData.prototype.onInviteCodeSet = function (e) {
    if (e.type == d.SetInviteCodeEvent.INVITE_CODE_SET) {
      p.debug("invite code correctly set! yeay!");
    } else {
      h.error("invite code failed");
      switch (e.statusId) {
        case P.CoreErrorIdConstants.FRIENDINVITE_WRONG_ZONE_ERROR:
          var t;
          var i = this.env.inviterCode ? parseInt(this.env.inviterCode.split("-")[0], 36) : -1;
          if (i >= 0) {
            var n = a.BasicModel.instanceProxy.instanceMap;
            if (n != null) {
              for (var o = 0, s = n; o < s.length; o++) {
                var r = s[o];
                if (r !== undefined && r.zoneId == i) {
                  t = r;
                  break;
                }
              }
            }
            if (r) {
              h.error("you should be connecting to zone " + i + " (" + A.Localize.text(t.instanceLocaId) + ")");
            } else {
              h.error("can't find correct instance");
            }
          }
          break;
        case P.CoreErrorIdConstants.FRIENDINVITE_UNKNOWN_INVITER_ERROR:
          h.error("could not find the user who invited you");
      }
    }
    j.CastleBasicController.getInstance().removeEventListener(d.SetInviteCodeEvent.INVITE_CODE_SET, this.bindFunction(this.onInviteCodeSet));
    j.CastleBasicController.getInstance().removeEventListener(d.SetInviteCodeEvent.SET_INVITE_CODE_FAILED, this.bindFunction(this.onInviteCodeSet));
  };
  Object.defineProperty(CastleUserData.prototype, "env", {
    get: function () {
      return c.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "kingstowerList", {
    get: function () {
      return this._kingstowerList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "monumentList", {
    get: function () {
      return this._monumentList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "laboratoryList", {
    get: function () {
      return this._laboratoryList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hasSentMailVerification", {
    get: function () {
      return this._hasSentMailVerification;
    },
    set: function (e) {
      this._hasSentMailVerification = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "aquaPoints", {
    get: function () {
      return this._aquaPoints;
    },
    set: function (e) {
      this._aquaPoints = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.isNoobProtectedInKingdom = function (e) {
    return !!this._noobProtectedPerKingdom.get(e) && !!this._noobProtectedPerKingdom.get(e);
  };
  Object.defineProperty(CastleUserData.prototype, "isLegend", {
    get: function () {
      return this._userLegendLevel > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "lifeTimeSpent", {
    get: function () {
      return this._lifeTimeSpent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "levelUpInSession", {
    get: function () {
      return this._levelUpInSession;
    },
    set: function (e) {
      this._levelUpInSession = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "selectedHeroID", {
    get: function () {
      return this._selectedHeroID;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.parse_HDC = function (e) {
    if (e.HID == -1) {
      oe.CastleDialogHandler.getInstance().registerDefaultDialogs(se.CastleChooseHeroDialog, null, true);
    } else if (e.HID > 0) {
      this._selectedHeroID = L.int(e.HID);
      M.ClientConstCharacter.updateHeroQuestCharacter();
    }
  };
  CastleUserData.prototype.parse_CH = function (e) {
    this._selectedHeroID = L.int(e.HID);
  };
  Object.defineProperty(CastleUserData.prototype, "level", {
    get: function () {
      return this.userLevel + this.userLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.getOwnMapObjects = function (e = -1, t = -1) {
    var i = [];
    var n = function (n) {
      var o = [];
      for (var a = 1; a < arguments.length; a++) {
        o[a - 1] = arguments[a];
      }
      if ((t == -1 || n.kingdomID == t) && (e == -1 || n.areaType == e)) {
        i.push(n);
      }
    };
    for (var o = 0, a = this.villageList.getSortedVillageListByKingdomID(t); o < a.length; o++) {
      var s = a[o];
      i.push(s.villageMapObjectVO);
    }
    this.kingstowerList.completeList.forEach(n);
    this.monumentList.completeList.forEach(n);
    this.laboratoryList.completeList.forEach(n);
    this.castleList.getFilteredList().forEach(n);
    return i;
  };
  Object.defineProperty(CastleUserData.prototype, "isConnectedToFacebook", {
    get: function () {
      return this._isConnectedToFacebook;
    },
    set: function (e) {
      this._isConnectedToFacebook = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isPlayerNameTemporary", {
    get: function () {
      return this._isPlayerNameTemporary;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isPasswordTemporary", {
    get: function () {
      return this._isPasswordTemporary;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "isEmailTemporary", {
    get: function () {
      return this._isEmailTemporary;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "facebookEmail", {
    get: function () {
      return this._facebookEmail;
    },
    set: function (e) {
      this._facebookEmail = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hasEmail", {
    get: function () {
      return !this._isEmailTemporary && !!this.email && this.email.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.resetFacebookData = function () {
    this._isConnectedToFacebook = false;
    this._facebookEmail = "";
    K.CastleModel.localData.saveFacebookID("");
  };
  CastleUserData.prototype.setGlobalConstructionItemEffects = function (e, t) {
    if (e && e.effects && e.effects.some(function (e) {
      return e.type.isGlobal;
    })) {
      this._globalConstructionItemEffects.set(t, e.effects.filter(function (e) {
        return e.type.isGlobal;
      }));
    }
  };
  CastleUserData.prototype.getGlobalConstructionItemEffectByType = function (e) {
    var t = 0;
    if (this._globalConstructionItemEffects) {
      Array.from(this._globalConstructionItemEffects.values()).forEach(function (i) {
        i.forEach(function (i) {
          if (i.type == e) {
            t += i.value;
          }
        });
      });
    }
    return t;
  };
  CastleUserData.prototype.removeGlobalConstructionItemEffect = function (e) {
    if (this._globalConstructionItemEffects.get(e)) {
      this._globalConstructionItemEffects.delete(e);
    }
  };
  CastleUserData.prototype.setGlobalConstructionItemBoni = function (e, t) {
    if (e) {
      e.boni;
    }
  };
  CastleUserData.prototype.getGlobalConstructionItemEffectsByType = function (e, t = null) {
    t = t || X.CastleEffectConditionVO.NULL_CONDITION;
    if (this._globalConstructionItemBoni != null) {
      Array.from(this._globalConstructionItemBoni.values()).forEach(function (i) {
        i.forEach(function (n) {
          if (n.matchesConditions(e, t.areaType, t.spaceId, t.wodId, t.otherPlayer)) {
            i.push(n);
          }
        });
      });
    }
    return [];
  };
  CastleUserData.prototype.getGlobalConstructionItemEffectValue = function (e, t = -1, i = -1, n = -1) {
    var o = z.CastleEffectsHelper.getTotalEffectValue(this.getGlobalConstructionItemEffectsByType(e, new X.CastleEffectConditionVO(i, n, t)));
    return o || new e.valueClass();
  };
  CastleUserData.prototype.removeGlobalConstructionItemBonus = function (e) {
    if (this._globalConstructionItemBoni.get(e)) {
      this._globalConstructionItemBoni.delete(e);
    }
  };
  Object.defineProperty(CastleUserData.prototype, "persistentLogin", {
    get: function () {
      return this._persistentLogin;
    },
    set: function (e) {
      this._persistentLogin = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.reset = function () {
    this._noobProtected = false;
    this._noobProtectionRemainingTime = 0;
    this._peaceProtectionRemainingStatusTime = 0;
    this._noobTimeOffset = 0;
    this._peaceStatusTimeOffset = 0;
    this._peaceModeStatus = 0;
    this._aquaPoints = -1;
    this._kingstowerList = new ue.CastleKingstowerList();
    this._monumentList = new he.CastleMonumentList();
    this._laboratoryList = new de.CastleLaboratoryList();
    this.splitRunData = new q.CastleOwnSplitRunData(this);
    this._globalConstructionItemEffects = new Map();
  };
  CastleUserData.prototype.parse_ATO = function (e) {
    this._apiToken = e.ABT;
    this._apiTokenExpirationSeconds = H.CachedTimer.getCachedTimer() / 1000 + (e.ES || 0);
    this._apiTokenV2 = e.ABTV2;
    this._zoneId = e.ZNID;
    if (this._apiToken && this._apiTokenV2 && this._apiTokenExpirationSeconds > 0 && this.onAPITokenRequestSignal && this._restRequestMethod) {
      this.onAPITokenRequestSignal.dispatch(this._restRequestMethod);
      this._restRequestMethod = null;
    }
  };
  Object.defineProperty(CastleUserData.prototype, "isApiTokenExpired", {
    get: function () {
      return !this._apiToken || !this._apiTokenV2 || L.int(this._apiTokenExpirationSeconds - H.CachedTimer.getCachedTimer() / 1000) <= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "apiToken", {
    get: function () {
      return this._apiToken;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "apiTokenV2", {
    get: function () {
      return this._apiTokenV2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "zoneId", {
    get: function () {
      return this._zoneId;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.checkAndRequestApiTokenForRequestMethod = function (e, t) {
    var i = false;
    if (this.isApiTokenExpired) {
      if (!this._restRequestMethod && (!!t && (!this._apiToken || !!this.isApiTokenExpired) || !t && (!this._apiTokenV2 || !!this.isApiTokenExpired))) {
        K.CastleModel.smartfoxClient.sendCommandVO(new ge.C2SSetApiToken());
        this._restRequestMethod = e;
        i = false;
      }
    } else {
      i = true;
    }
    return i;
  };
  CastleUserData.prototype.resetApiToken = function () {
    this._apiToken = null;
    this._apiTokenV2 = null;
    this._restRequestMethod = null;
    this._apiTokenExpirationSeconds = 0;
  };
  Object.defineProperty(CastleUserData.prototype, "connectToSpecialServer", {
    get: function () {
      return this._connectToABGServer || this._connectToTempServer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "connectToTempServer", {
    get: function () {
      return this._connectToTempServer;
    },
    set: function (e) {
      this._connectToTempServer = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "connectToABGServer", {
    get: function () {
      return this._connectToABGServer;
    },
    set: function (e) {
      this._connectToABGServer = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.resetConnectToFlags = function () {
    this._connectToABGServer = false;
    this._connectToTempServer = false;
  };
  Object.defineProperty(CastleUserData.prototype, "foodFrozen", {
    get: function () {
      return this._foodFrozen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "userName", {
    get: function () {
      return Object.getOwnPropertyDescriptor(s.BasicUserData.prototype, "userName").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.BasicUserData.prototype, "userName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "currentIslandRank", {
    get: function () {
      return this._currentIslandRank;
    },
    set: function (e) {
      this._currentIslandRank = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "newCapTooNotifications", {
    get: function () {
      return this._newCapTooNotifications;
    },
    set: function (e) {
      this._newCapTooNotifications = e;
      this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.CAP_TOOL_NOTIFICATIONS_UPDATED));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "hideCapToolNotifications", {
    get: function () {
      return this._hideCapToolNotifications;
    },
    set: function (e) {
      this._hideCapToolNotifications = e;
      this.controller.dispatchEvent(new U.CastleUserDataEvent(U.CastleUserDataEvent.CAP_TOOL_NOTIFICATIONS_UPDATED));
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.prototype.parse_FTF = function (e) {
    this._enableIGSRedirect = e.ESHS == 1;
    this._disableRubyShop = e.DRS == 1;
  };
  Object.defineProperty(CastleUserData.prototype, "enableIGSRedirect", {
    get: function () {
      return this._enableIGSRedirect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUserData.prototype, "disableRubyShop", {
    get: function () {
      return this._disableRubyShop;
    },
    enumerable: true,
    configurable: true
  });
  CastleUserData.CALLER_METHOD_GET = "CALLER_METHOD_GET";
  CastleUserData.CALLER_METHOD_PUT = "CALLER_METHOD_PUT";
  CastleUserData.CALLER_METHOD_POST = "CALLER_METHOD_POST";
  CastleUserData.CALLER_METHOD_DELETE = "CALLER_METHOD_DELETE";
  CastleUserData.PEACEMODE_STATUS_OFF = -1;
  CastleUserData.PEACEMODE_STATUS_PRETIME = 0;
  CastleUserData.PEACEMODE_STATUS_PEACETIME = 1;
  CastleUserData.PEACEMODE_STATUS_POSTTIME = 2;
  return CastleUserData;
}(s.BasicUserData);
exports.CastleUserData = ee;
var te = require("./75.js");
var ie = require("./34.js");
var ne = require("./29.js");
var oe = require("./9.js");
var ae = require("./17.js");
var se = require("./1292.js");
var re = require("./911.js");
var le = require("./2273.js");
var ce = require("./2310.js");
var ue = require("./2313.js");
var de = require("./2314.js");
var pe = require("./373.js");
var he = require("./2315.js");
var ge = require("./2316.js");
var Ce = require("./57.js");
C.classImplementsInterfaces(ee, "IUpdatable", "IPlayer", "ICastleBasicData");