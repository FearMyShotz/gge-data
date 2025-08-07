Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./54.js");
var s = require("./5654.js");
var r = require("./375.js");
var l = function (e) {
  function SamuraiDaimyoData(t) {
    var i = e.call(this) || this;
    i._xml = new r.SamuraiDaimyoDataXml();
    i._server = new s.SamuraiDaimyoDataServer();
    i._xml.parseXml(t);
    return i;
  }
  n.__extends(SamuraiDaimyoData, e);
  Object.defineProperty(SamuraiDaimyoData.prototype, "xml", {
    get: function () {
      return this._xml;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoData.prototype, "server", {
    get: function () {
      return this._server;
    },
    enumerable: true,
    configurable: true
  });
  return SamuraiDaimyoData;
}(a.CastleBasicData);
exports.SamuraiDaimyoData = l;
o.classImplementsInterfaces(l, "IUpdatable", "ICastleBasicData");