Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./341.js");
var s = function (e) {
  function TreasurechestHighSurroundingsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TreasurechestHighSurroundingsVE, e);
  TreasurechestHighSurroundingsVE.prototype.onMouseClick = function () {
    var e = this.treasureChestBuildingVO.offerVO;
    var t = e.getVisualComponentByName("offerDialog");
    r.CastleComponent.dialogHandler.registerDefaultDialogs(t.dialogName, new a.CastlePrivateOfferDialogProperties(e));
  };
  return TreasurechestHighSurroundingsVE;
}(require("./1615.js").ATreasurechestSurroundingsVE);
exports.TreasurechestHighSurroundingsVE = s;
var r = require("./14.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");