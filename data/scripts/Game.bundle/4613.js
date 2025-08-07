Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./6.js");
var u = require("./16.js");
var d = require("./4614.js");
var p = require("./4615.js");
var h = require("./4616.js");
var g = require("./4617.js");
var C = require("./4618.js");
var _ = require("./4619.js");
var m = require("./22.js");
var f = require("./678.js");
var O = require("./48.js");
var E = require("./15.js");
var y = require("./54.js");
var b = require("./17.js");
var D = require("./221.js");
var I = require("./4.js");
var T = require("./111.js");
var v = require("./142.js");
var S = require("./35.js");
var A = require("./4620.js");
var L = require("./4623.js");
var P = require("./4624.js");
var M = require("./383.js");
var R = require("./4625.js");
var V = require("./4626.js");
var x = require("./4627.js");
var w = function (e) {
  function SubscriptionData(t) {
    var i = this;
    i._packages = [];
    i._providers = [];
    i._subscriptionBuffs = new Map();
    i._autoSpyAreaIds = [];
    i._autoSkipAreaIds = [];
    i._activePackages = [];
    i._allianceSubscriberCount = 0;
    i._autoSell = new A.AutoSellVO();
    i._autoSpy = new L.AutoSpyVO();
    i._gscWasRequested = false;
    i.loyaltyBonusByMonth = [];
    i._subscriptionTypeRewards = new Map();
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._subscriptionBuffs = m.CastleXMLUtils.createDicFromXmlNode(t, "subscriptionsBuffs", x.XmlSubscriptionBuffVO);
    i._autoSpyAreaIds = [];
    for (var n = 0, o = i.getSubscriptionBuffByEffectType(S.EffectTypeEnum.EFFECT_TYPE_AUTO_SPY).boni[0].effect.areaTypes; n < o.length; n++) {
      if ((r = o[n]) !== undefined) {
        i._autoSpyAreaIds.push(r);
      }
    }
    i._autoSkipAreaIds = [];
    for (var a = 0, s = i.getSubscriptionBuffByEffectType(S.EffectTypeEnum.EFFECT_TYPE_AUTO_SKIP).boni[0].effect.areaTypes; a < s.length; a++) {
      var r;
      if ((r = s[a]) !== undefined) {
        i._autoSkipAreaIds.push(r);
      }
    }
    var l = t.subscriptionLoyalties;
    if (l != null) {
      for (var c = 0, u = l; c < u.length; c++) {
        var d = u[c];
        if (d !== undefined) {
          var p = parseInt(m.CastleXMLUtils.getValueOrDefault("boost", d, "0", true));
          var h = parseInt(m.CastleXMLUtils.getValueOrDefault("month", d, "0", true));
          i.loyaltyBonusByMonth[h - 1] = p;
        }
      }
    }
    for (var g = 0, C = t.subscriptionsRewards; g < C.length; g++) {
      var _ = C[g];
      if (_ !== undefined) {
        var O = parseInt(m.CastleXMLUtils.getValueOrDefault("subscriptionTypeID", _, "0", true));
        var y = I.CastleModel.rewardData.getCopiedListById(parseInt(m.CastleXMLUtils.getValueOrDefault("rewardIDs", _, "0", true)));
        if (i._subscriptionTypeRewards.get(O)) {
          i._subscriptionTypeRewards.get(O).addList(y);
        } else {
          i._subscriptionTypeRewards.set(O, y);
        }
      }
    }
    E.CastleBasicController.getInstance().addEventListener(f.CastleLoginEvent.ON_GBD_ARRIVED, i.bindFunction(i.onGbdArrived));
    return i;
  }
  n.__extends(SubscriptionData, e);
  SubscriptionData.prototype.reset = function () {
    this._activePackages = [];
    this._allianceSubscriberCount = 0;
    this._gscWasRequested = false;
  };
  SubscriptionData.prototype.destroy = function () {
    E.CastleBasicController.getInstance().removeEventListener(f.CastleLoginEvent.ON_GBD_ARRIVED, this.bindFunction(this.onGbdArrived));
  };
  SubscriptionData.prototype.parseASG = function (e) {
    this.autoSell.parseASG(e);
    E.CastleBasicController.getInstance().dispatchEvent(new M.SubscriptionEvent(M.SubscriptionEvent.ON_AUTO_SELL_CONFIG_UPDATED));
  };
  SubscriptionData.prototype.requestASG = function () {
    I.CastleModel.smartfoxClient.sendCommandVO(new h.C2SGetAutoSellConditionsEventVO());
  };
  SubscriptionData.prototype.requestGSC = function (e = false) {
    if (!this._gscWasRequested || !!e) {
      I.CastleModel.smartfoxClient.sendCommandVO(new g.C2SGetShopCatalogEventVO());
      this._gscWasRequested = true;
    }
  };
  SubscriptionData.prototype.parseGSC = function (e) {
    this._packages = [];
    var t = e.categories;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          if (o.id == "subscription") {
            var a = o.items;
            if (a != null) {
              for (var s = 0, r = a; s < r.length; s++) {
                var l = r[s];
                if (l !== undefined) {
                  var c = new R.SubscriptionPackageVO();
                  c.parseServerObject(l);
                  this._packages.push(c);
                }
              }
            }
          }
        }
      }
    }
    this._providers = [];
    var u = e.providers;
    if (u != null) {
      for (var d = 0, p = u; d < p.length; d++) {
        var h = p[d];
        if (h !== undefined) {
          var g = new V.SubscriptionProviderVO();
          g.parseServerObject(h);
          this._providers.push(g);
        }
      }
    }
    E.CastleBasicController.getInstance().dispatchEvent(new M.SubscriptionEvent(M.SubscriptionEvent.ON_SHOP_PACKAGES_RECEIVED));
  };
  SubscriptionData.prototype.requestSPC = function (e) {
    var t = this.getPackage(e);
    var i = this.getProvider(t.getFirstProviderId());
    I.CastleModel.smartfoxClient.sendCommandVO(new _.C2SShopCheckoutEventVO(t.shopId, i.id, o.EnvGlobalsHandler.globals.currentCountryLanguageCode, o.EnvGlobalsHandler.globals.sessionId));
  };
  SubscriptionData.prototype.parseSPC = function (e) {
    var t = e.url;
    if (l.ExternalInterface.available) {
      l.ExternalInterface.call("ggsOpenIngameOverlay", t, {
        width: 1024,
        height: 768
      });
    } else {
      a.BrowserUtil.openWindow(new r.URLRequest(t));
    }
  };
  SubscriptionData.prototype.requestSIE = function () {
    I.CastleModel.smartfoxClient.sendCommandVO(new C.C2SGetSubscriptionInfoEventVO());
  };
  SubscriptionData.prototype.parseSIE = function (e) {
    this._activePackages = [];
    var t = e.SP;
    if (t) {
      if (t != null) {
        for (var i = 0, n = t; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined) {
            var a = new P.SubscriptionActivePackageVO();
            a.parseServerObject(o);
            this._activePackages.push(a);
          }
        }
      }
      if (this.isEffectTypeActive(S.EffectTypeEnum.EFFECT_TYPE_AUTO_SELL)) {
        this.requestASG();
      }
      E.CastleBasicController.getInstance().dispatchEvent(new M.SubscriptionEvent(M.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED));
      if (b.CastleLayoutManager.getInstance().isOnMap && I.CastleModel.worldmapData) {
        I.CastleModel.worldmapData.areaTiles.updateAllObjects();
      }
    }
  };
  SubscriptionData.prototype.requestASC = function () {
    I.CastleModel.smartfoxClient.sendCommandVO(new p.C2SGetAllianceSubscriberCountEventVO());
  };
  SubscriptionData.prototype.parseASC = function (e) {
    this._allianceSubscriberCount = c.int(e.ASC);
    E.CastleBasicController.getInstance().dispatchEvent(new M.SubscriptionEvent(M.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED));
  };
  SubscriptionData.prototype.getPackage = function (e) {
    if (this._packages != null) {
      for (var t = 0, i = this._packages; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.type == e) {
          return n;
        }
      }
    }
    return null;
  };
  SubscriptionData.prototype.getProvider = function (e) {
    if (this._providers != null) {
      for (var t = 0, i = this._providers; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.id == e) {
          return n;
        }
      }
    }
    return null;
  };
  SubscriptionData.prototype.getPriceString = function (e) {
    var t = this.getPackage(e);
    if (t) {
      var i = this.getProvider(t.getFirstProviderId());
      if (i) {
        return d.ClientConstRealCurrency.formatShopValue(t.price, t.currencyCode, i.countryCode);
      }
    }
    return "-";
  };
  SubscriptionData.prototype.isPackageActive = function (e) {
    if (this._activePackages != null) {
      for (var t = 0, i = this._activePackages; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.type == e) {
          return n.isActive();
        }
      }
    }
    return false;
  };
  SubscriptionData.prototype.getSubscriptionEffectsByType = function (e, t = null) {
    t = t ?? v.CastleEffectConditionVO.NULL_CONDITION;
    var i = [];
    var n = [];
    if (this._subscriptionBuffs != null) {
      for (var o = 0, a = Array.from(this._subscriptionBuffs.values()); o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && (this.isPackageActive(s.packageType) || s.packageType == D.SubscriptionPackageEnum.ALLIANCE && this.allianceSubscriberCount >= s.requiredMembers)) {
          if (s.seriesId >= 0) {
            if (i.indexOf(s.seriesId) >= 0) {
              continue;
            }
            var r = this.getHighestBuffVOBySeriesId(s.seriesId, this._allianceSubscriberCount);
            if (!r) {
              continue;
            }
            i.push(r.seriesId);
            for (var l = 0, c = r.boni; l < c.length; l++) {
              var u = c[l];
              if (u !== undefined && u.matchesConditions(e, t.areaType, t.spaceId, t.wodId)) {
                n.push(u);
              }
            }
          } else {
            for (var d = 0, p = s.boni; d < p.length; d++) {
              if ((u = p[d]).matchesConditions(e, t.areaType, t.spaceId)) {
                n.push(u);
              }
            }
          }
        }
      }
    }
    return n;
  };
  SubscriptionData.prototype.getSubscriptionEffectValue = function (e, t = -1, i = -1, n = -1) {
    var o = T.CastleEffectsHelper.getTotalEffectValue(this.getSubscriptionEffectsByType(e, new v.CastleEffectConditionVO(i, n, t)), true);
    return o || new e.valueClass();
  };
  SubscriptionData.prototype.getEffectValue = function (e, t = -1, i = -1) {
    var n = c.int(t < 0 ? I.CastleModel.areaData.activeArea.areaInfo.areaType : t);
    var o = c.int(i < 0 ? I.CastleModel.areaData.activeArea.spaceId : i);
    return this.getSubscriptionEffectValue(e, -1, n, o).strength;
  };
  SubscriptionData.prototype.getHighestBuffVOBySeriesId = function (e, t) {
    var i;
    if (t === undefined) {
      t = -1;
    }
    if (this._subscriptionBuffs != null) {
      for (var n = 0, o = Array.from(this._subscriptionBuffs.values()); n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.seriesId == e && (t < 0 || t >= a.requiredMembers)) {
          if (i) {
            if (a.requiredMembers > i.requiredMembers) {
              i = a;
            }
          } else {
            i = a;
          }
        }
      }
    }
    return i;
  };
  SubscriptionData.prototype.isEffectTypeActive = function (e) {
    var t = this.getSubscriptionBuffByEffectType(e);
    return !!t && (t.seriesId >= 0 ? this._allianceSubscriberCount >= t.requiredMembers : this.isPackageActive(t.packageType));
  };
  SubscriptionData.prototype.getSubscriptionBuffByEffectType = function (e) {
    if (this._subscriptionBuffs != null) {
      for (var t = 0, i = Array.from(this._subscriptionBuffs.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          for (var o = 0, a = n.boni; o < a.length; o++) {
            var s = a[o];
            if (s !== undefined && s.effect.effectType.type == e) {
              return n;
            }
          }
        }
      }
    }
    return null;
  };
  SubscriptionData.prototype.getSubscriptionBuffs = function (e) {
    var t = [];
    if (this._subscriptionBuffs != null) {
      for (var i = 0, n = Array.from(this._subscriptionBuffs.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.packageType == e) {
          t.push(o);
        }
      }
    }
    t.sort(this.bindFunction(this.sortSubscriptionBuffs));
    return t;
  };
  SubscriptionData.prototype.getSubscriptionSeriesBuffs = function (e, t = -1) {
    var i = [];
    var n = [];
    if (this._subscriptionBuffs != null) {
      for (var o = 0, a = Array.from(this._subscriptionBuffs.values()); o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && s.packageType == e) {
          var r = s.seriesId;
          if (r >= 0) {
            if (i.indexOf(r) >= 0) {
              continue;
            }
            i.push(r);
            var l = this.getHighestBuffVOBySeriesId(r, t >= 0 ? t : this._allianceSubscriberCount);
            if (l) {
              n.push(l);
            }
          } else {
            n.push(s);
          }
        }
      }
    }
    n.sort(this.bindFunction(this.sortSubscriptionBuffs));
    return n;
  };
  SubscriptionData.prototype.getRequiredMembersThreshold = function (e) {
    var t = this.getSubscriptionBuffs(e);
    var i = [];
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.requiredMembers >= 1 && i.indexOf(a.requiredMembers) < 0) {
          i.push(a.requiredMembers);
        }
      }
    }
    i.sort(this.bindFunction(this.sortRequiredMembers));
    return i;
  };
  SubscriptionData.prototype.isAutoSpyActiveForArea = function (e) {
    return this.isEffectTypeActive(S.EffectTypeEnum.EFFECT_TYPE_AUTO_SPY) && this._autoSpyAreaIds.indexOf(e.areaType) >= 0;
  };
  SubscriptionData.prototype.isAutoSkipActiveForArea = function (e) {
    return this.isAutoSkipTarget(e) && this.isEffectTypeActive(S.EffectTypeEnum.EFFECT_TYPE_AUTO_SKIP);
  };
  SubscriptionData.prototype.isAutoSkipTarget = function (e) {
    return this._autoSkipAreaIds.indexOf(e.areaType) > -1;
  };
  SubscriptionData.prototype.isAnyPackageActive = function () {
    if (this._activePackages != null) {
      for (var e = 0, t = this._activePackages; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && i.isActive()) {
          return true;
        }
      }
    }
    return false;
  };
  SubscriptionData.prototype.getActivePackage = function (e) {
    if (this._activePackages != null) {
      for (var t = 0, i = this._activePackages; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.type == e) {
          return n;
        }
      }
    }
    return null;
  };
  SubscriptionData.prototype.getPackageSeriesIds = function (e) {
    var t = [];
    if (this._subscriptionBuffs != null) {
      for (var i = 0, n = Array.from(this._subscriptionBuffs.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.packageType == e && o.seriesId >= 0 && t.indexOf(o.seriesId) < 0) {
          t.push(o.seriesId);
        }
      }
    }
    return t;
  };
  SubscriptionData.prototype.getPackageSeriesBuffs = function (e, t) {
    var i = [];
    if (this._subscriptionBuffs != null) {
      for (var n = 0, o = Array.from(this._subscriptionBuffs.values()); n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.packageType == e && a.seriesId >= 0 && a.seriesId == t) {
          i.push(a);
        }
      }
    }
    return i;
  };
  SubscriptionData.prototype.setText = function (e, t = null, i = null, n = u.ClientConstColor.MODERN_DEFAULT) {
    var o = I.CastleModel.subscriptionData.isEffectTypeActive(e);
    if (t) {
      t.color = o ? u.ClientConstColor.MODERN_SUBSCRIPTION : n;
    }
    if (i) {
      i.visible = o;
    }
    return o;
  };
  SubscriptionData.prototype.isFeatureEnabled = function () {
    return !o.EnvGlobalsHandler.globals.isOnSpecialServer;
  };
  SubscriptionData.prototype.hasReceivedShopPackage = function () {
    return this._packages.length > 0;
  };
  SubscriptionData.prototype.sortSubscriptionBuffs = function (e, t) {
    return e.displayOrder - t.displayOrder;
  };
  SubscriptionData.prototype.sortRequiredMembers = function (e, t) {
    return e - t;
  };
  SubscriptionData.prototype.onGbdArrived = function (e) {
    if (this.isFeatureEnabled()) {
      this.requestASC();
      this.requestSIE();
    }
  };
  Object.defineProperty(SubscriptionData.prototype, "autoSell", {
    get: function () {
      return this._autoSell;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionData.prototype, "autoSpy", {
    get: function () {
      return this._autoSpy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionData.prototype, "packages", {
    get: function () {
      return this._packages;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionData.prototype, "providers", {
    get: function () {
      return this._providers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionData.prototype, "allianceSubscriberCount", {
    get: function () {
      return this._allianceSubscriberCount;
    },
    enumerable: true,
    configurable: true
  });
  SubscriptionData.prototype.getSubscriptionRewardsByTypeID = function (e) {
    if (this._subscriptionTypeRewards.get(e)) {
      return this._subscriptionTypeRewards.get(e);
    } else {
      return new O.CollectableList();
    }
  };
  return SubscriptionData;
}(y.CastleBasicData);
exports.SubscriptionData = w;
s.classImplementsInterfaces(w, "IUpdatable", "ICastleBasicData");