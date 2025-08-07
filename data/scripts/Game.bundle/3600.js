Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./4.js");
var r = function (e) {
  function CastleSeasonUpgradePortDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleSeasonUpgradePortDialog, e);
  CastleSeasonUpgradePortDialog.prototype.getClipColor = function () {
    var e = [];
    e.push(new o.ClipColor("flag", s.CastleModel.userData.playerCrest.colorsTwo));
    return e;
  };
  CastleSeasonUpgradePortDialog.prototype.getPictureClassName = function () {
    return "UpgradePortPicture_Level" + (s.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.portLevel + 1);
  };
  CastleSeasonUpgradePortDialog.__initialize_static_members = function () {
    CastleSeasonUpgradePortDialog.NAME = "CastleUpgradePort";
  };
  return CastleSeasonUpgradePortDialog;
}(require("./1079.js").CastleSeasonBaseRepairDialog);
exports.CastleSeasonUpgradePortDialog = r;
a.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();