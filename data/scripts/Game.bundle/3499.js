Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleFactionEventWinBlueDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFactionEventWinBlueDialog.NAME) || this;
  }
  n.__extends(CastleFactionEventWinBlueDialog, e);
  CastleFactionEventWinBlueDialog.prototype.updateTexts = function () {
    e.prototype.updateTexts.call(this);
    var t = this.dialogProperties.rewardList.length > 0;
    if (this.dialogProperties.hasWon) {
      this.setTitleText("dialog_factionEventEnd_win_blue_title");
      this.setCopyText(t ? "dialog_factionEventEnd_win_blue_copy_1" : "dialog_factionEventEnd_win_NoPoints_blue_copy_1");
    } else {
      this.setTitleText("dialog_factionEventEnd_lostBlue_title");
      this.setCopyText(t ? "dialog_factionEventEnd_lost_blue_copy" : "dialog_factionEventEnd_lost_NoPoints_blue_copy_1");
    }
  };
  CastleFactionEventWinBlueDialog.__initialize_static_members = function () {
    CastleFactionEventWinBlueDialog.NAME = "CastleFactionEventWinBlue";
  };
  return CastleFactionEventWinBlueDialog;
}(require("./1692.js").CastleFactionEventWinBasicDialog);
exports.CastleFactionEventWinBlueDialog = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");
a.__initialize_static_members();