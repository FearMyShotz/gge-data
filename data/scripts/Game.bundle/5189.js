Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./389.js");
var c = require("./4.js");
var u = require("./10.js");
var d = function (e) {
  function GDICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GDICommand, e);
  Object.defineProperty(GDICommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_GET_DETAILPLAYERINFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GDICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = s.int(i.O.OID);
        var o = new p.CastleListVO();
        if (i.gkl && i.gkl.AI.length > 0) {
          this.addGKLToGC(i);
        }
        if (i.gml && i.gml.AI.length > 0) {
          this.addGMLToGC(i);
        }
        if (i.gll && i.gll.AI.length > 0) {
          this.addGLLToGC(i);
        }
        var r = c.CastleModel.otherPlayerData.parseOwnerInfo(i.O);
        if (r && i.atl) {
          r.splitRunData.parse_ATL(i.atl);
        }
        if (i.gcl) {
          o.parseCastleList(i.gcl, r);
        }
        if (i.kgv) {
          o.parseVillageList(i.kgv, r);
        }
        if (i.gac) {
          o.parseAllianceCity(i.gac, r);
        }
        if (i.tie && i.tie.T) {
          o.parseABGTower(i.tie && i.tie.T);
        }
        o.ownerID = n;
        this.controller.dispatchEvent(new l.CastlePlayerInfoEvent(l.CastlePlayerInfoEvent.GET_PLAYERINFO, [o]));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  GDICommand.prototype.addGKLToGC = function (e) {
    var t;
    for (var i = 0, n = e.gkl.AI; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        (t = {}).AI = o[0];
        e.gcl.C[0].AI.push(t);
      }
    }
  };
  GDICommand.prototype.addGMLToGC = function (e) {
    var t;
    for (var i = 0, n = e.gml.AI; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        (t = {}).AI = o[0];
        e.gcl.C[0].AI.push(t);
      }
    }
  };
  GDICommand.prototype.addGLLToGC = function (e) {
    var t;
    for (var i = 0, n = e.gll.AI; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        (t = {}).AI = o[0];
        e.gcl.C[0].AI.push(t);
      }
    }
  };
  return GDICommand;
}(u.CastleCommand);
exports.GDICommand = d;
var p = require("./373.js");
o.classImplementsInterfaces(d, "IExecCommand");