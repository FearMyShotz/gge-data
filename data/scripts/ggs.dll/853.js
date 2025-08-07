Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./74.js");
var a = require("./5.js");
var s = function () {
  function BasicWodData(e) {
    this.versionXmlInfo = a.EnvGlobalsHandler.globals.versionInformation;
    this.wodXML = e;
    this.parseWodXML();
    this.versionXmlInfo.parseItemXML(e);
  }
  BasicWodData.prototype.parseWodXML = function () {
    var e;
    var t = this.wodXML.elements("wods").children();
    this._wodXMLList = new Map();
    for (var n = 0, i = t; n < i.length; n++) {
      e = i[n];
      var a = parseInt(e.attribute("wodID"));
      this._wodXMLList.set(a, e);
    }
  };
  BasicWodData.prototype.voIsForWorld = function (e) {
    var t = a.EnvGlobalsHandler.globals;
    switch (e) {
      case 0:
        return true;
      case 1:
        return t.isLocal || i.GoodgamePartners.NETWORK_GENERAL == t.networkId || !t.hasNetworkBuddies;
      case 2:
        return t.hasNetworkBuddies;
      default:
        return true;
    }
  };
  return BasicWodData;
}();
exports.BasicWodData = s;