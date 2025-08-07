Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./595.js");
var a = require("./4.js");
var s = require("./57.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./513.js");
var u = require("./284.js");
var d = require("./725.js");
var p = function (e) {
  function CastleEquipmentFavoritesMicroservice() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.retriedGetEquip = false;
    return t;
  }
  n.__extends(CastleEquipmentFavoritesMicroservice, e);
  Object.defineProperty(CastleEquipmentFavoritesMicroservice, "Instance", {
    get: function () {
      return this._instance ||= new this();
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentFavoritesMicroservice.prototype.initialize = function () {
    if (!this._isInitialized) {
      this._isInitialized = true;
      this.equipmentItemUpdatedSignal = new s.Signal();
      this.gemItemUpdatedSignal = new s.Signal();
      this.gemMarkedAsFavorite = new s.Signal();
      this.favoriteListDataArrivedSignal = new s.Signal();
      this.getFavoriteEquipmentSignal = new s.Signal();
      this.putFavoriteEquipmentSignal = new s.Signal();
      this.equipmentItemUpdatedSignal.add(this.bindFunction(this.onEquipmentItemUpdated));
      this.gemItemUpdatedSignal.add(this.bindFunction(this.onGemItemUpdated));
      this.getFavoriteEquipmentSignal.add(this.bindFunction(this.onRequestFavoriteEquipment));
      this.putFavoriteEquipmentSignal.add(this.bindFunction(this.onSaveFavoriteEquipment));
      a.CastleModel.userData.onAPITokenRequestSignal.add(this.bindFunction(this.onForceRequestFavoriteEquipment));
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.reset = function () {
    this._isInitialized = false;
    this.equipmentItemUpdatedSignal.remove(this.bindFunction(this.onEquipmentItemUpdated));
    this.gemItemUpdatedSignal.remove(this.bindFunction(this.onGemItemUpdated));
    this.getFavoriteEquipmentSignal.remove(this.bindFunction(this.onRequestFavoriteEquipment));
    this.putFavoriteEquipmentSignal.remove(this.bindFunction(this.onSaveFavoriteEquipment));
    a.CastleModel.userData.onAPITokenRequestSignal.remove(this.bindFunction(this.onForceRequestFavoriteEquipment));
  };
  CastleEquipmentFavoritesMicroservice.prototype.onEquipmentItemUpdated = function (e) {
    this.updateCurrentList(e, a.CastleModel.equipData.favoriteEquipmentIdsList);
  };
  CastleEquipmentFavoritesMicroservice.prototype.onGemItemUpdated = function (e) {
    this.gemMarkedAsFavorite.dispatch(e);
    this.updateCurrentList(e, l.instanceOfClass(e, "RelicGemVO") ? a.CastleModel.equipData.favoriteRelicGemsIdsList : a.CastleModel.equipData.favoriteGemsIdsList);
  };
  CastleEquipmentFavoritesMicroservice.prototype.updateCurrentList = function (e, t) {
    if (t) {
      var i = false;
      for (var n = 0; n < t.length; n++) {
        if (t[n] == e.id && !e.isFavorite) {
          t.splice(t.indexOf(e.id, 0), 1);
          i = true;
          break;
        }
      }
      if (!i && e.isFavorite) {
        t.push(e.id);
      }
      var o;
      var a = [];
      for (n = 0; n < t.length; n++) {
        o = t[n];
        if (a.indexOf(o) === -1) {
          a.push(o);
        } else {
          t.splice(t.indexOf(e.id, 0), 1);
        }
      }
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.getFavoriteEquipment = function () {
    if (a.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(u.CastleUserData.CALLER_METHOD_GET, true)) {
      var e = {
        method: d.BasicMicroservice.REQUEST_METHOD_GET,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + a.CastleModel.userData.apiToken
        },
        body: ""
      };
      var t = {
        endPoint: this.getDataEndpoint(this.pingParams()),
        options: e
      };
      this.axiosLog(d.BasicMicroservice.REQUEST_METHOD_GET, false);
      this.requestGET(t).then(this.bindFunction(this.requestGETSuccess)).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.onForceRequestFavoriteEquipment = function (e) {
    if (e == u.CastleUserData.CALLER_METHOD_GET) {
      this.getFavoriteEquipment();
    } else if (e == u.CastleUserData.CALLER_METHOD_PUT) {
      this.saveFavoriteEquipment();
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.onRequestFavoriteEquipment = function () {
    this.getFavoriteEquipment();
  };
  CastleEquipmentFavoritesMicroservice.prototype.onSaveFavoriteEquipment = function () {
    this.updateModels(true);
    this.saveFavoriteEquipment();
  };
  CastleEquipmentFavoritesMicroservice.prototype.saveFavoriteEquipment = function () {
    if (a.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(u.CastleUserData.CALLER_METHOD_PUT, true)) {
      var e = {
        equipment: a.CastleModel.equipData.favoriteEquipmentIdsList,
        gem: a.CastleModel.equipData.favoriteGemsIdsList,
        relicGem: a.CastleModel.equipData.favoriteRelicGemsIdsList
      };
      var t = {
        endPoint: this.getDataEndpoint(this.pingParams()),
        options: e,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + a.CastleModel.userData.apiToken
        }
      };
      this.requestPUT(t).then(function (e) {}).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.updateModelFavorites = function (e, t, i) {
    var n;
    var o = false;
    for (var a = 0; a < t.length; a++) {
      o = false;
      for (var s = 0; s < e.length; s++) {
        if ((n = e[s]).id == t[a]) {
          n.isFavorite = true;
          o = true;
        }
      }
      if (!o && i) {
        t.splice(t.indexOf(t[a], 0), 1);
      }
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.requestGET = function (e = null) {
    return o.default.get(e.endPoint, e.options);
  };
  CastleEquipmentFavoritesMicroservice.prototype.requestPUT = function (e = null) {
    return o.default.put(e.endPoint, e.options, {
      headers: e.headers
    });
  };
  CastleEquipmentFavoritesMicroservice.prototype.requestGETSuccess = function (e) {
    a.CastleModel.equipData.favoriteEquipmentIdsList = e.data.favequip.equipment || [];
    a.CastleModel.equipData.favoriteGemsIdsList = e.data.favequip.gem || [];
    a.CastleModel.equipData.favoriteRelicGemsIdsList = e.data.favequip.relicGem || [];
    this.updateModels(false);
    this.favoriteListDataArrivedSignal.dispatch();
  };
  CastleEquipmentFavoritesMicroservice.prototype.requestFail = function (t) {
    e.prototype.requestFail.call(this, t);
    if (this.retriedGetEquip) {
      this.retriedGetEquip = false;
    } else {
      a.CastleModel.userData.resetApiToken();
      this.retriedGetEquip = true;
      this.getFavoriteEquipment();
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.updateModels = function (e) {
    var t = [].concat(a.CastleModel.equipData.playerInventory).concat(a.CastleModel.equipData.craftingInventory).concat(a.CastleModel.equipData.dragInventory);
    t = (t = t.concat(this.getFavoriteEquipmentFromSlots(a.CastleModel.lordData.commanders))).concat(this.getFavoriteEquipmentFromSlots(a.CastleModel.lordData.barons));
    this.updateModelFavorites(t, a.CastleModel.equipData.favoriteEquipmentIdsList, e);
    var i = [].concat(a.CastleModel.gemData.playerInventory).concat(a.CastleModel.gemData.craftingInventory).concat(a.CastleModel.gemData.craftingCenterInventory).concat(a.CastleModel.gemData.dragInventory);
    var n = [].concat(a.CastleModel.gemData.relicGemsInventory).concat(a.CastleModel.gemData.relicDragInventory);
    this.updateModelFavorites(i, a.CastleModel.equipData.favoriteGemsIdsList, e);
    this.updateModelFavorites(n, a.CastleModel.equipData.favoriteRelicGemsIdsList, e);
  };
  CastleEquipmentFavoritesMicroservice.prototype.getFavoriteEquipmentFromSlots = function (e) {
    if (!e) {
      return [];
    }
    var t;
    var i;
    var n = [];
    for (var o = 0; o < e.length; o++) {
      for (var a in (t = e[o]).equipmentSlots) {
        if ((i = t.equipmentSlots[a]).equipmentVO && i.equipmentVO.isFavorite) {
          n.push(i.equipmentVO);
        }
      }
    }
    return n;
  };
  CastleEquipmentFavoritesMicroservice.prototype.getDataEndpoint = function (e) {
    if (c.ClientConstABTests.isOnQAServerInstance) {
      return "" + CastleEquipmentFavoritesMicroservice.QA_DATA_ENDPOINT + e + "/data/" + CastleEquipmentFavoritesMicroservice.FAVORITE_EQUIPMENT_KEY;
    } else if (c.ClientConstABTests.isOnDevServerInstance) {
      return "" + CastleEquipmentFavoritesMicroservice.DEV_DATA_ENDPOINT + e + "/data/" + CastleEquipmentFavoritesMicroservice.FAVORITE_EQUIPMENT_KEY;
    } else {
      return "" + CastleEquipmentFavoritesMicroservice.LIVE_DATA_ENDPOINT + e + "/data/" + CastleEquipmentFavoritesMicroservice.FAVORITE_EQUIPMENT_KEY;
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.pingParams = function () {
    return r.EnvGlobalsHandler.globals.gameId + "-" + r.EnvGlobalsHandler.globals.networkId + "-" + r.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + a.CastleModel.userData.playerID;
  };
  CastleEquipmentFavoritesMicroservice.FAVORITE_EQUIPMENT_KEY_TEST = "thiskeyisnonsense";
  CastleEquipmentFavoritesMicroservice.FAVORITE_EQUIPMENT_KEY = "favequip";
  CastleEquipmentFavoritesMicroservice.LIVE_DATA_ENDPOINT = "https://player-kv.public.ggs-ep.com/api/players/";
  CastleEquipmentFavoritesMicroservice.QA_DATA_ENDPOINT = "https://player-kv-test.public.ggs-ep.com/api/players/";
  CastleEquipmentFavoritesMicroservice.DEV_DATA_ENDPOINT = "https://player-kv-dev.public.ggs-ep.com/api/players/";
  return CastleEquipmentFavoritesMicroservice;
}(d.BasicMicroservice);
exports.CastleEquipmentFavoritesMicroservice = p;