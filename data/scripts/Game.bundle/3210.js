Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./341.js");
var r = function (e) {
  function TreasurechestLowSurroundingsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TreasurechestLowSurroundingsVE, e);
  TreasurechestLowSurroundingsVE.prototype.onMouseClick = function () {
    var e = this.treasureChestBuildingVO.offerVO;
    var t = e.id;
    var i = e.getVisualComponentByName("offerDialog");
    if (l.CastleTutorialDialogFilter.instance.isActive()) {
      l.CastleTutorialDialogFilter.instance.add(u.CastleTreasureChestOpenDialog);
    }
    c.CastleComponent.dialogHandler.registerDefaultDialogs(i.dialogName, new s.CastlePrivateOfferDialogProperties(e));
    a.CastleModel.privateOfferData.sendOfferPay(t);
  };
  return TreasurechestLowSurroundingsVE;
}(require("./1615.js").ATreasurechestSurroundingsVE);
exports.TreasurechestLowSurroundingsVE = r;
var l = require("./326.js");
var c = require("./14.js");
var u = require("./800.js");
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");