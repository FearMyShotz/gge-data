Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./5.js");
var a = require("./83.js");
var s = require("./8.js");
var r = require("./372.js");
var o = require("./175.js");
var l = require("./373.js");
var u = require("./4.js");
var c = require("./12.js");
var _ = require("./2.js");
var d = require("./3.js");
var m = _.getLogger("CoreJS.BasicIdentityManagementData");
var h = function () {
  function BasicIdentityManagementData() {
    this.showStuff = false;
  }
  BasicIdentityManagementData.prototype.initialize = function () {
    this.initializeLicenseRefresher();
  };
  BasicIdentityManagementData.prototype.authenticateViaJS = function () {
    d.ExternalInterface.addCallback("triggerLogin", this.bindFunction(this.triggerLogin));
    d.ExternalInterface.addCallback("setIDCheckData", this.bindFunction(this.setIdCheckData));
    var e = u.BasicModel.userData.playerID;
    var t = u.BasicModel.instanceProxy.selectedInstanceVO.instanceId;
    var n = i.EnvGlobalsHandler.globals.networkId;
    var a = i.EnvGlobalsHandler.globals.gameId;
    this.startAgeCheck(e, t, n, a);
  };
  BasicIdentityManagementData.prototype.unregisterJSCallbacks = function () {
    d.ExternalInterface.addCallback("triggerLogin", function () {
      m.debug(" triggerLogin callback was removed. ignoring event");
    });
    d.ExternalInterface.addCallback("setIDCheckData", function () {
      m.debug("setIDCheckData callback was removed.  ignoring event ");
    });
  };
  BasicIdentityManagementData.prototype.startAgeCheck = function (e, t, n, i, a = null) {
    if (a) {
      d.ExternalInterface.call("ggsOpenSirenAuthentification", e, t, n, i, a);
    } else {
      d.ExternalInterface.call("ggsOpenSirenAuthentification", e, t, n, i);
    }
  };
  BasicIdentityManagementData.prototype.triggerLogin = function () {
    this.unregisterJSCallbacks();
    c.CommandController.instance.executeCommand(s.BasicController.COMMAND_LOGIN);
  };
  BasicIdentityManagementData.prototype.setIdCheckData = function (e) {
    var t = e.error;
    if (t) {
      var n;
      try {
        n = JSON.parse(t);
      } catch (e) {
        m.warn("[BasicIdentityManagementData] JSON decoding error occured!");
        c.CommandController.instance.executeCommand(s.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, a.IdentityManagementConstants.ERROR_VERIFICATION_FAILED);
        return;
      }
      if ((n = n ? n.errors[0] : {}).name && n.type) {
        c.CommandController.instance.executeCommand(s.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, a.IdentityManagementConstants.ERROR_VERIFICATION_FAILED);
      }
    }
  };
  Object.defineProperty(BasicIdentityManagementData.prototype, "isUserAuthenticated", {
    get: function () {
      return this.env.identityManagementId != "";
    },
    enumerable: true,
    configurable: true
  });
  BasicIdentityManagementData.prototype.initializeLicenseRefresher = function () {
    this._licenseRefresher = new r.LicenseRefresher(a.IdentityManagementConstants.LICENSE_REFRESHER_INITIAL_SHOW_DELAY_SECONDS, a.IdentityManagementConstants.LICENSE_SHOW_SCHEDULE_MINUTES, a.IdentityManagementConstants.LICENSE_DISPLAY_DURATION_SECONDS);
    this._licenseRefresher.licenseAgeRatingShowed.add(this.bindFunction(this.onLicenseAgeRatingShow));
    this._licenseRefresher.licenseShowed.add(this.bindFunction(this.onLicenseShow));
    this._licenseRefresher.licenseHided.add(this.bindFunction(this.onLicenseHide));
    this._licenseRefresher.startRefreshing();
  };
  BasicIdentityManagementData.prototype.onLicenseAgeRatingShow = function () {
    var e = new o.IdentityManagementEvent(l.IdentityManagementLicenseEvent.SHOW_LICENSE_INITIAL_AGE_RATING_TEXT);
    s.BasicController.getInstance().dispatchEvent(e);
  };
  BasicIdentityManagementData.prototype.onLicenseShow = function () {
    var e = new o.IdentityManagementEvent(l.IdentityManagementLicenseEvent.SHOW_LICENSE_LOGOS);
    s.BasicController.getInstance().dispatchEvent(e);
  };
  BasicIdentityManagementData.prototype.onLicenseHide = function () {
    s.BasicController.getInstance().dispatchEvent(new o.IdentityManagementEvent(l.IdentityManagementLicenseEvent.HIDE_LICENSE));
  };
  BasicIdentityManagementData.prototype.startLicenseRefresher = function () {
    if (this._licenseRefresher) {
      this._licenseRefresher.startRefreshing();
    } else {
      m.warn("licenseRefresher is null");
    }
  };
  BasicIdentityManagementData.prototype.resetLicenseTimer = function () {
    this._licenseRefresher.startRefreshing();
    this._licenseRefresher.onLicenseShowScheduleIntervalReached();
  };
  BasicIdentityManagementData.prototype.stopLicenseRefresher = function () {
    if (this._licenseRefresher) {
      this._licenseRefresher.stopRefreshing();
    } else {
      m.warn("licenseRefresher is null");
    }
  };
  BasicIdentityManagementData.prototype.dispose = function () {
    this.unregisterJSCallbacks();
    this.env.identityManagementId = null;
  };
  Object.defineProperty(BasicIdentityManagementData.prototype, "env", {
    get: function () {
      return i.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicIdentityManagementData;
}();
exports.BasicIdentityManagementData = h;