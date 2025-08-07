Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5767.js");
var o = function () {
  function CastleNewsletterData(e) {
    this.parseXML(e);
  }
  CastleNewsletterData.prototype.parseXML = function (e) {
    this._newsletterVOs ||= new Array();
    var t = e.newsletterRewards;
    if (t != null) {
      for (var i = 0, o = t; i < o.length; i++) {
        var a = o[i];
        var s = new n.CastleNewsletterVO();
        s.parseXML(a);
        this._newsletterVOs.push(s);
      }
    }
  };
  Object.defineProperty(CastleNewsletterData.prototype, "newsletterVOs", {
    get: function () {
      return this._newsletterVOs;
    },
    enumerable: true,
    configurable: true
  });
  return CastleNewsletterData;
}();
exports.CastleNewsletterData = o;