Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleFactionEventWinRedDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFactionEventWinRedDialog.NAME) || this;
  }
  n.__extends(CastleFactionEventWinRedDialog, e);
  CastleFactionEventWinRedDialog.prototype.updateTexts = function () {
    e.prototype.updateTexts.call(this);
    var t = this.dialogProperties.rewardList.length > 0;
    if (this.dialogProperties.hasWon) {
      this.setTitleText("dialog_factionEventEnd_win_red_title");
      this.setCopyText(t ? "dialog_factionEventEnd_win_red_copy_1" : "dialog_factionEventEnd_win_NoPoints_red_copy_1");
    } else {
      this.setTitleText("dialog_factionEventEnd_lostRed_title");
      this.setCopyText(t ? "dialog_factionEventEnd_lost_red_copy" : "dialog_factionEventEnd_lost_NoPoints_red_copy_1");
    }
  };
  CastleFactionEventWinRedDialog.__initialize_static_members = function () {
    CastleFactionEventWinRedDialog.NAME = "CastleFactionEventWinRed";
  };
  return CastleFactionEventWinRedDialog;
}(require("./1694.js").CastleFactionEventWinBasicDialog);
exports.CastleFactionEventWinRedDialog = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");
a.__initialize_static_members();