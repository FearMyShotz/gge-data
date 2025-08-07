Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./18.js");
var r = require("./306.js");
var l = require("./4.js");
var c = function (e) {
  function NFOCastleCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(NFOCastleCommand, e);
  NFOCastleCommand.prototype.executeCommand = function (t, i) {
    switch (t) {
      case a.ERROR.ALL_OK:
        var n = JSON.parse(i[1]);
        s.ClientConstCastle.setWorldmapSizeViaGGC(n.sectorCountX, n.sectorCountY);
        this.env.versionInformation.serverXMLVersion = n.XML_EP;
        if (l.CastleModel.worldmapData) {
          l.CastleModel.worldmapData.reset();
        }
        r.CastleVersionInformation.versionInstance.serverXMLVersion = n.XML_EP;
    }
    return e.prototype.executeCommand.call(this, t, i);
  };
  return NFOCastleCommand;
}(o.NFOCommand);
exports.NFOCastleCommand = c;