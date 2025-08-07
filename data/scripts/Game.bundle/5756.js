Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./50.js");
var o = require("./22.js");
var a = function () {
  function StartResourcesVO() {
    this.startResourceID = 0;
  }
  StartResourcesVO.prototype.parseXML = function (e) {
    this.startResourceID = parseInt(o.CastleXMLUtils.getValueOrDefault("startResourceID", e, "0", true));
    this.startResources = n.CollectableManager.parser.x2cRewards.createList(e);
  };
  return StartResourcesVO;
}();
exports.StartResourcesVO = a;