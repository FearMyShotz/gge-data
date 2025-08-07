Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./4.js");
var r = require("./3822.js");
var l = function (e) {
  function SendMarkedBuildingsInStorage() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SendMarkedBuildingsInStorage, e);
  SendMarkedBuildingsInStorage.prototype.execute = function (e = null) {
    var t = s.CastleModel.decoStorage.getCurrentStorage();
    if (!(t.getNewAmount() <= 0)) {
      for (var i = 0; i < t.storageIDs.length; i++) {
        var n = t.storageIDs[i];
        s.CastleModel.smartfoxClient.sendCommandVO(new r.C2SMarkBuildingInStorageVO(n));
      }
      t.markAllDecosAsSeen();
    }
  };
  return SendMarkedBuildingsInStorage;
}(o.SimpleCommand);
exports.SendMarkedBuildingsInStorage = l;
a.classImplementsInterfaces(l, "ISimpleCommand");