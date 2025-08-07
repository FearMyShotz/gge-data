Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./90.js");
var c = require("./4.js");
var u = require("./10.js");
var d = function (e) {
  function HACCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HACCommand, e);
  Object.defineProperty(HACCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_HIDE_ALIEN_CAMP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  HACCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        if (c.CastleModel.worldmapData) {
          var i = JSON.parse(t[1]).CP;
          if (i != null) {
            for (var n = 0, a = i; n < a.length; n++) {
              var r = a[n];
              if (r !== undefined) {
                var u = o.castAs(c.CastleModel.worldmapData.areaTiles.getVOForAreaByXY(r[0], r[1]), "AAlienInvasionMapobjectVO");
                if (u && u.isVisibleOnMap) {
                  u.isVisibleOnMap = false;
                }
              }
            }
          }
          this.controller.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.REMOVED_ALIEN_CASTLE_FROM_MAP, i));
          var d = p.CastleLayoutManager.getInstance();
          if (d.worldmapScreen && d.worldmapScreen.renderer) {
            d.worldmapScreen.renderer.invalidateMap();
            d.worldmapScreen.renderer.invalideteMovements();
          }
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return HACCommand;
}(u.CastleCommand);
exports.HACCommand = d;
var p = require("./17.js");
a.classImplementsInterfaces(d, "IExecCommand");