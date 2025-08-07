Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./28.js");
var r = require("./1535.js");
var l = require("./30.js");
var c = require("./54.js");
var u = require("./4.js");
var d = require("./2835.js");
var p = function (e) {
  function CastleMineData(t) {
    var i = this;
    i.timeStamp = 0;
    i.lastCollectedClickMine = [];
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).generateData(t);
    return i;
  }
  n.__extends(CastleMineData, e);
  CastleMineData.prototype.generateData = function (e) {
    var t = e.mineTypes;
    this.mineVOData = new Map();
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new E.MineVO();
          a.parseXML(o);
          this.mineVOData.set(a.mineTypeID, a);
        }
      }
    }
  };
  CastleMineData.prototype.executeUpdate = function (t) {
    e.prototype.executeUpdate.call(this, t);
    var i = l.CachedTimer.getCachedTimer();
    if (this.existingMines != null) {
      var n;
      var o = a.DictionaryUtil.getKeys(this.existingMines);
      if (o != null) {
        for (var r = 0, c = o; r < c.length; r++) {
          var u = c[r];
          if (u !== undefined) {
            var d = (n = this.existingMines.get(u)).nextCollectInSeconds;
            if (d > 0) {
              if ((d -= (i - this.timeStamp) * s.ClientConstTime.MILLISEC_2_SEC) < 0) {
                d = 0;
                n.nextCollectInSeconds = d;
                this.dispatchStateChangedEvent();
              }
              n.nextCollectInSeconds = d;
            }
          }
        }
      }
    }
    this.timeStamp = i;
  };
  CastleMineData.prototype.dispatchStateChangedEvent = function () {
    this.dispatchEvent(new r.MineStateUpdateEvent(r.MineStateUpdateEvent.STATE_UPDATE, false));
  };
  CastleMineData.prototype.parse_GSM = function (e) {
    this.checkStatusChange(e);
    this.existingMines = new Map();
    var t;
    var i = e.M;
    this.timeStamp = l.CachedTimer.getCachedTimer();
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          (t = new d.ExistingMineVO()).remaingCollectionAmount = a.RC;
          t.nextCollectInSeconds = a.NC;
          this.existingMines.set(a.OID, t);
          if (this.lastCollectedClickMine.indexOf(a.OID) >= 0) {
            this.triggerInfoFlash(a);
            this.lastCollectedClickMine.splice(this.lastCollectedClickMine.indexOf(a.OID), 1);
          }
        }
      }
    }
    this.dispatchStateChangedEvent();
  };
  CastleMineData.prototype.collectMine = function (e) {
    if (this.lastCollectedClickMine.indexOf(e) < 0) {
      this.lastCollectedClickMine.push(e);
    }
  };
  CastleMineData.prototype.triggerInfoFlash = function (e) {
    var t;
    var i = _.Iso.data.objects.provider.getObjectById(e.OID);
    if (i && (e.C1 ? t = new h.CollectableItemC1VO(e.C1) : e.C2 && (t = new g.CollectableItemC2VO(e.C2)), t)) {
      var n = _.Iso.renderer.objects.provider.getObjectByVO(i).getGlobalDispPosTopCenter();
      _.Iso.controller.dataUpdater.spawnCollectableFadeEffect(t, n);
    }
  };
  CastleMineData.prototype.checkStatusChange = function (e) {
    if (this.existingMines && !e) {
      var t = e.M;
      if (t != null) {
        for (var i = 0, n = t; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined) {
            if (a.DictionaryUtil.containsKey(this.existingMines, o.OID) && o.NC == -1 && this.existingMines.get(o.OID).nextCollectInSeconds != -1) {
              if (_.Iso.data.objects.provider.getObjectById(o.OID).objectType == C.IsoObjectEnum.RUBY_MINE) {
                m.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastlePrivateOfferRubymineDoneDialog);
              } else {
                m.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastlePrivateOfferCoinmineDoneDialog);
              }
            }
          }
        }
      }
    }
  };
  CastleMineData.prototype.getPercentRechargingCompletion = function (e, t) {
    var i = this.existingMines.get(e);
    var n = this.mineVOData.get(t);
    return 1 - i.nextCollectInSeconds / n.waitingTime;
  };
  CastleMineData.prototype.getRemainingRechargeTime = function (e) {
    return this.existingMines.get(e).nextCollectInSeconds;
  };
  CastleMineData.prototype.getRestAmountByMineID = function (e, t) {
    var i = this.existingMines.get(e);
    var n = this.mineVOData.get(t);
    return i.remaingCollectionAmount * n.amountPerCollect;
  };
  CastleMineData.prototype.getMineStateByObjectId = function (e) {
    if (!u.CastleModel.areaData.activeArea.isMyArea) {
      return CastleMineData.STATE_RECHARGING;
    }
    if (!this.existingMines || !a.DictionaryUtil.containsKey(this.existingMines, e)) {
      return CastleMineData.STATE_COLLECTABLE;
    }
    var t = this.existingMines.get(e).nextCollectInSeconds;
    if (t == -1) {
      return CastleMineData.STATE_EMPTY;
    } else if (t == 0) {
      return CastleMineData.STATE_COLLECTABLE;
    } else {
      return CastleMineData.STATE_RECHARGING;
    }
  };
  CastleMineData.prototype.destroy = function () {
    this.existingMines = null;
    e.prototype.destroy.call(this);
  };
  CastleMineData.prototype.getMineVOByObjectID = function (e) {
    return this.mineVOData.get(e);
  };
  CastleMineData.STATE_RECHARGING = "Charging";
  CastleMineData.STATE_COLLECTABLE = "Full";
  CastleMineData.STATE_EMPTY = "Empty";
  return CastleMineData;
}(c.CastleBasicData);
exports.CastleMineData = p;
o.classImplementsInterfaces(p, "IUpdatable", "ICastleBasicData");
var h = require("./234.js");
var g = require("./128.js");
var C = require("./80.js");
var _ = require("./34.js");
var m = require("./9.js");
var f = require("./1536.js");
var O = require("./1537.js");
var E = require("./2836.js");