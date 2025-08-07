Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./596.js");
var a = require("./4.js");
var s = require("./57.js");
var r = require("./2.js");
var l = require("./514.js");
var c = require("./283.js");
var u = require("./727.js");
var d = require("./9.js");
var p = require("./2286.js");
var h = require("./2287.js");
var g = function (e) {
  function CastleDeleteAccountMicroservice() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleDeleteAccountMicroservice, e);
  Object.defineProperty(CastleDeleteAccountMicroservice, "Instance", {
    get: function () {
      return this._instance ||= new this();
    },
    enumerable: true,
    configurable: true
  });
  CastleDeleteAccountMicroservice.prototype.initialize = function () {
    if (!this._isInitialized) {
      this._isInitialized = true;
      this.onDeleteAccountSignal = new s.Signal();
      this.onAbortDeleteSignal = new s.Signal();
      a.CastleModel.userData.onAPITokenRequestSignal.add(this.bindFunction(this.onForceRequest));
    }
  };
  CastleDeleteAccountMicroservice.prototype.onForceRequest = function (e) {
    if (e == c.CastleUserData.CALLER_METHOD_PUT) {
      this.deleteAccount();
    } else if (e == c.CastleUserData.CALLER_METHOD_DELETE) {
      this.abortDeletion();
    }
  };
  CastleDeleteAccountMicroservice.prototype.deleteAccount = function () {
    if (a.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(c.CastleUserData.CALLER_METHOD_PUT, false)) {
      var e = {
        endPoint: this.getDataEndpoint(this.pingParams()),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + a.CastleModel.userData.apiToken
        }
      };
      this.requestPUT(e).then(this.bindFunction(function (e) {
        a.CastleModel.deleteAccountData.remainingTimeTillDeleteTimeStamp = e.data.endTimeSeconds;
        var t = new h.CastleDeleteAccountConfirmationDialogProperties("dialog_deleteAccount_secondConfirmation_popup_title", "dialog_deleteAccount_secondConfirmation_popup_desc", [a.CastleModel.deleteAccountData.getDateForDelete()]);
        d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleDeleteAccountConfirmationDialog, t, false, r.BasicDialogHandler.PRIORITY_HIGH);
        this.onDeleteAccountSignal.dispatch();
      })).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleDeleteAccountMicroservice.prototype.abortDeletion = function () {
    if (a.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(c.CastleUserData.CALLER_METHOD_DELETE, false)) {
      var e = {
        endPoint: this.getDataEndpoint(this.pingParams()),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + a.CastleModel.userData.apiToken
        }
      };
      this.requestDELETE(e).then(this.bindFunction(function (e) {
        a.CastleModel.deleteAccountData.remainingTimeTillDeleteTimeStamp = -1;
        var t = new h.CastleDeleteAccountConfirmationDialogProperties("dialog_deleteAccount_cancelDeletion_popup_title", "dialog_deleteAccount_cancelDeletion_popup_desc");
        d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleDeleteAccountConfirmationDialog, t, false, r.BasicDialogHandler.PRIORITY_HIGH);
        this.onAbortDeleteSignal.dispatch();
      })).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleDeleteAccountMicroservice.prototype.requestPUT = function (e = null) {
    return o.default.put(e.endPoint, {}, {
      headers: e.headers
    });
  };
  CastleDeleteAccountMicroservice.prototype.requestDELETE = function (e = null) {
    return o.default.delete(e.endPoint, {
      headers: e.headers
    });
  };
  CastleDeleteAccountMicroservice.prototype.getDataEndpoint = function (e) {
    if (l.ClientConstABTests.isOnQAServerInstance) {
      return CastleDeleteAccountMicroservice.QA_DATA_ENDPOINT + "/players/" + e + "/" + CastleDeleteAccountMicroservice.DELETE_ACCOUNT_KEY;
    } else if (l.ClientConstABTests.isOnDevServerInstance) {
      return CastleDeleteAccountMicroservice.DEV_DATA_ENDPOINT + "/players/" + e + "/" + CastleDeleteAccountMicroservice.DELETE_ACCOUNT_KEY;
    } else {
      return CastleDeleteAccountMicroservice.LIVE_DATA_ENDPOINT + "/players/" + e + "/" + CastleDeleteAccountMicroservice.DELETE_ACCOUNT_KEY;
    }
  };
  CastleDeleteAccountMicroservice.prototype.pingParams = function () {
    return r.EnvGlobalsHandler.globals.gameId + "-" + r.EnvGlobalsHandler.globals.networkId + "-" + r.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + a.CastleModel.userData.playerID;
  };
  CastleDeleteAccountMicroservice.prototype.reset = function () {
    this._isInitialized = false;
    this.onDeleteAccountSignal = null;
    this.onAbortDeleteSignal = null;
    a.CastleModel.deleteAccountData.remainingTimeTillDeleteTimeStamp = -1;
    a.CastleModel.userData.onAPITokenRequestSignal.remove(this.bindFunction(this.onForceRequest));
    CastleDeleteAccountMicroservice._instance = null;
  };
  CastleDeleteAccountMicroservice.DELETE_ACCOUNT_KEY = "deletion-request";
  CastleDeleteAccountMicroservice.LIVE_DATA_ENDPOINT = "https://gdpr-delete.public.ggs-ep.com";
  CastleDeleteAccountMicroservice.QA_DATA_ENDPOINT = "https://gdpr-delete-test.public.ggs-ep.com";
  CastleDeleteAccountMicroservice.DEV_DATA_ENDPOINT = "https://gdpr-delete-dev.public.ggs-ep.com";
  return CastleDeleteAccountMicroservice;
}(u.BasicMicroservice);
exports.CastleDeleteAccountMicroservice = g;