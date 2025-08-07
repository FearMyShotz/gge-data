Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./63.js");
var s = require("./23.js");
var r = require("./12.js");
var o = require("./6.js");
var l = require("./5.js");
var u = require("./4.js");
var c = require("./165.js");
var _ = require("./3.js");
var d = require("./11.js");
var m = require("./38.js");
var h = require("./56.js");
var p = require("./43.js");
var g = require("./2.js").getLogger("Connection.BasicCheckMaintenanceCommand");
var E = function (e) {
  function BasicCheckMaintenanceCommand() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.MAINTENANCE_TIMER_DELAY = 60;
    t.GGS_UTC_LOAD_TRIGGER_OFFSET_IN_SECONDS = 900;
    t.UTC_REQUEST_URL = d.BasicConstants.DOMAIN_PROTOCOL + "://time.goodgamestudios.com";
    return t;
  }
  i.__extends(BasicCheckMaintenanceCommand, e);
  BasicCheckMaintenanceCommand.prototype.execute = function (e = null) {
    this.noMaintenanceCommandName = e == null ? null : e;
    this.executeDefaultBehavior();
  };
  BasicCheckMaintenanceCommand.prototype.executeDefaultBehavior = function () {
    if (this.env.urlVariables.forcedMaintenance != c.ForcedMaintenanceEnum.OFF) {
      if (this.env.urlVariables.forcedMaintenance != c.ForcedMaintenanceEnum.ON) {
        this.loadMaintenance(p.PathProvider.instance.maintenanceConfigURL);
      } else {
        this.setMaintenance(true);
      }
    } else {
      this.executeNoMaintenance();
    }
  };
  BasicCheckMaintenanceCommand.prototype.loadMaintenance = function (e) {
    var t = this;
    var n = new _.URLLoaderService(new _.URLRequest(e));
    n.load().then(function (e) {
      n.dispose();
      try {
        t.checkMaintenance(JSON.parse(e));
      } catch (e) {
        g.warn("Error while executing something in checkMaintenance: ", e);
        window.bugsnagClient.notify(e);
      }
    }).catch(function (n) {
      g.warn("IOError (" + n + ") while loading Maintenancecheck");
      s.ExternalLog.logger.log(new a.IOErrorLOFactory(a.IOErrorLOFactory.GENERAL_LOADER_IO_ERROR, n.toString(), e));
      t.executeNoMaintenance();
    });
  };
  BasicCheckMaintenanceCommand.prototype.checkMaintenance = function (e) {
    var t = this;
    var n = u.BasicModel.instanceProxy.selectedInstanceVO.zoneId.toString();
    var i = Object.keys(e).find(function (e) {
      return e == n;
    });
    if (i) {
      var r = parseInt(e[n]);
      var o = new Date(r * 1000);
      g.debug(i + " will be in maintenance until " + o);
      var l;
      var c = Date.now() / 1000;
      function d(e) {
        if (e <= 0) {
          g.debug("Mainteance is over!");
          t.setMaintenance(false);
        } else {
          clearTimeout(t.reloadTimeout);
          var n = Math.min(t.MAINTENANCE_TIMER_DELAY, e);
          g.debug("MaintenanceTimer Default delay " + t.MAINTENANCE_TIMER_DELAY + " vs  remainingMaintenance " + e + " --> will reload file in " + n + " seconds");
          t.reloadTimeout = window.setTimeout(function () {
            return t.loadMaintenance(p.PathProvider.instance.maintenanceConfigURL);
          }, n * 1000);
          t.setMaintenance(true);
        }
      }
      if (r > c) {
        this.maintenanceTimeInSeconds = r - c;
        g.debug("Maintenance will last for " + this.maintenanceTimeInSeconds + " more seconds ");
        if (this.maintenanceTimeInSeconds > this.GGS_UTC_LOAD_TRIGGER_OFFSET_IN_SECONDS) {
          new _.URLLoaderService(new _.URLRequest(this.UTC_REQUEST_URL)).load().then(function (e) {
            l = Number(e);
            g.debug("clientUTC " + c + "  -  server UTC " + l);
            t.maintenanceTimeInSeconds = r - l;
            d(t.maintenanceTimeInSeconds);
          }).catch(function (e) {
            g.warn("IOError (" + e.message + ") while loading UTC - will prodeed without Maintenance behaviour");
            s.ExternalLog.logger.log(new a.IOErrorLOFactory(a.IOErrorLOFactory.GENERAL_LOADER_IO_ERROR, e.message, t.UTC_REQUEST_URL));
            t.clearMaintenance();
          });
        } else {
          d(this.maintenanceTimeInSeconds);
        }
      } else {
        g.warn("according to maintenance file our zone is under maintenance - but according to client UTC maintenance time is already over");
        this.setMaintenance(false);
      }
    } else {
      this.setMaintenance(false);
    }
  };
  BasicCheckMaintenanceCommand.prototype.setMaintenance = function (e) {
    if (e) {
      if (this.env.maintenanceMode) {
        this.updateMaintenance();
      } else if (l.EnvGlobalsHandler.globals.loginIsKeyBased) {
        this.executeSocialMaintenance();
      } else {
        this.executeNWMaintenance();
      }
      h.ClientFunnelTrackingController.getInstance().trackState(m.ClientFunnelGameStates.MAINTENANCE_SCREEN);
    } else if (this.env.maintenanceMode) {
      this.clearMaintenance();
    } else {
      this.executeNoMaintenance();
    }
    this.env.maintenanceMode = e;
  };
  BasicCheckMaintenanceCommand.prototype.updateMaintenance = function () {};
  BasicCheckMaintenanceCommand.prototype.clearMaintenance = function () {
    clearTimeout(this.reloadTimeout);
    this.executeNoMaintenance();
  };
  BasicCheckMaintenanceCommand.prototype.executeNWMaintenance = function () {
    this.executeNoMaintenance();
    throw new Error("executeNWMaintenance must be overridden by Game (will proceed with default No_Maintenance behaviour");
  };
  BasicCheckMaintenanceCommand.prototype.executeSocialMaintenance = function () {
    this.executeNoMaintenance();
    throw new Error("executeSocialMaintenance must be overridden by Game (will proceed with default No_Maintenance behaviour");
  };
  BasicCheckMaintenanceCommand.prototype.executeNoMaintenance = function () {
    if (this.noMaintenanceCommandName != null) {
      r.CommandController.instance.executeCommand(this.noMaintenanceCommandName);
    } else {
      g.debug("No noMaintenanceCommandName set! Nothing will happen!");
    }
  };
  Object.defineProperty(BasicCheckMaintenanceCommand.prototype, "env", {
    get: function () {
      return l.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicCheckMaintenanceCommand;
}(o.SimpleCommand);
exports.BasicCheckMaintenanceCommand = E;