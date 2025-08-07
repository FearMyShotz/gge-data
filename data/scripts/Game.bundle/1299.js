Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./4.js");
var a = require("./57.js");
var s = require("./2.js");
var r = require("./514.js");
var l = require("./283.js");
var c = require("./727.js");
var u = require("./596.js");
var d = function (e) {
  function CastleWebShopAccountIDMicroservice() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleWebShopAccountIDMicroservice, e);
  Object.defineProperty(CastleWebShopAccountIDMicroservice, "Instance", {
    get: function () {
      return this._instance ||= new this();
    },
    enumerable: true,
    configurable: true
  });
  CastleWebShopAccountIDMicroservice.prototype.initialize = function () {
    if (!this._isInitialized) {
      this._isInitialized = true;
      this.onAccountIdRetrievedSignal = new a.Signal();
      o.CastleModel.userData.onAPITokenRequestSignal.add(this.bindFunction(this.onForceRequest));
    }
  };
  CastleWebShopAccountIDMicroservice.prototype.onForceRequest = function (e) {
    if (e == l.CastleUserData.CALLER_METHOD_GET) {
      this.getAccountID();
    }
  };
  CastleWebShopAccountIDMicroservice.prototype.getAccountID = function () {
    if (o.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(l.CastleUserData.CALLER_METHOD_GET, false)) {
      var e = {
        method: c.BasicMicroservice.REQUEST_METHOD_GET,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + o.CastleModel.userData.apiToken
        },
        body: ""
      };
      var t = {
        endPoint: this.getDataEndpoint(this.pingParams()),
        options: e
      };
      this.axiosLog(c.BasicMicroservice.REQUEST_METHOD_GET, false);
      this.requestGET(t).then(this.bindFunction(this.requestGETSuccess)).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleWebShopAccountIDMicroservice.prototype.requestGET = function (e = null) {
    return u.default.get(e.endPoint, e.options);
  };
  CastleWebShopAccountIDMicroservice.prototype.requestGETSuccess = function (e) {
    var t = e.data.gnipPhrase || "";
    o.CastleModel.webShopAccountIdData.accountID = t;
    this.onAccountIdRetrievedSignal.dispatch();
  };
  CastleWebShopAccountIDMicroservice.prototype.getDataEndpoint = function (e) {
    if (r.ClientConstABTests.isOnQAServerInstance) {
      return CastleWebShopAccountIDMicroservice.QA_DATA_ENDPOINT + "/players/" + e + "/" + CastleWebShopAccountIDMicroservice.GNIP_PHRASE_KEY;
    } else if (r.ClientConstABTests.isOnDevServerInstance) {
      return CastleWebShopAccountIDMicroservice.DEV_DATA_ENDPOINT + "/players/" + e + "/" + CastleWebShopAccountIDMicroservice.GNIP_PHRASE_KEY;
    } else {
      return CastleWebShopAccountIDMicroservice.LIVE_DATA_ENDPOINT + "/players/" + e + "/" + CastleWebShopAccountIDMicroservice.GNIP_PHRASE_KEY;
    }
  };
  CastleWebShopAccountIDMicroservice.prototype.pingParams = function () {
    return s.EnvGlobalsHandler.globals.gameId + "-" + s.EnvGlobalsHandler.globals.networkId + "-" + s.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + o.CastleModel.userData.playerID;
  };
  CastleWebShopAccountIDMicroservice.prototype.reset = function () {
    this._isInitialized = false;
    this.onAccountIdRetrievedSignal = null;
    o.CastleModel.webShopAccountIdData.accountID = null;
    o.CastleModel.userData.onAPITokenRequestSignal.remove(this.bindFunction(this.onForceRequest));
    CastleWebShopAccountIDMicroservice._instance = null;
  };
  CastleWebShopAccountIDMicroservice.GNIP_PHRASE_KEY = "gnip-phrase";
  CastleWebShopAccountIDMicroservice.LIVE_DATA_ENDPOINT = "https://accounts.public.ggs-ep.com";
  CastleWebShopAccountIDMicroservice.QA_DATA_ENDPOINT = "https://accounts-test.public.ggs-ep.com";
  CastleWebShopAccountIDMicroservice.DEV_DATA_ENDPOINT = "https://accounts-dev.public.ggs-ep.com";
  return CastleWebShopAccountIDMicroservice;
}(c.BasicMicroservice);
exports.CastleWebShopAccountIDMicroservice = d;