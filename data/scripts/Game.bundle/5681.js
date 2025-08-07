Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./51.js");
var r = require("./199.js");
var l = require("./4.js");
var c = require("./8.js");
var u = require("./252.js");
var d = createjs.Point;
var p = function (e) {
  function TutorialCollectTaxActionCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialCollectTaxActionCommand, e);
  TutorialCollectTaxActionCommand.prototype.actionConditionValid = function () {
    return l.CastleModel.userData.level < 2;
  };
  TutorialCollectTaxActionCommand.prototype.internalExecute = function () {
    this.filter.allowNoDialogs();
    if (this.layoutManager.isInMyCastle) {
      this.showArrowOnTaxCollectButton();
    } else {
      this.tutorialController.waitForLayoutStateChangeFinished(h.CastleLayoutManager.STATE_ISO, this.bindFunction(this.waitUntilPlayerSwitchToMainCastle));
    }
  };
  TutorialCollectTaxActionCommand.prototype.waitUntilPlayerSwitchToMainCastle = function () {
    this.showArrowOnTaxCollectButton();
  };
  TutorialCollectTaxActionCommand.prototype.showArrowOnTaxCollectButton = function () {
    var e = this.getPanelDisp(f.CastleActionPanel).mc_tax.comp_taxComponent.btn_tax;
    this.arrows.replace(e, true, false, 1, new d(15, 5));
    this.blocker.replace(e);
    this.filter.add(_.CastleCollectTaxStartDialog);
    this.tutorialController.registerComplexListener(this.controller, r.CastleDialogEvent.TAX_ITEMS_FILLED, this.bindFunction(this.onShowCollectTaxStartDialog));
    this.layoutManager.tutorialPanel.showWithText("tut_tax_openTaxDialog_copy_duplicate", s.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
  };
  TutorialCollectTaxActionCommand.prototype.onShowCollectTaxStartDialog = function (e = null) {
    this.tutorialController.removeComplexListener(this.controller, r.CastleDialogEvent.TAX_ITEMS_FILLED, this.bindFunction(this.onShowCollectTaxStartDialog));
    this.trackStep("040_020_taxmenu_opened");
    this.layoutManager.tutorialPanel.showWithText("tut_tax_selectTaxType_copy_duplicate", s.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
    var t = this.getDialogDisp(_.CastleCollectTaxStartDialog);
    this.arrows.replace(t.mc_taxList.item0.btn_collect, false, true);
    this.blocker.replace(t.mc_taxList.item0.btn_collect);
    this.filter.add(C.CastleCollectTaxProgressDialog);
    this.layoutManager.getDialog(_.CastleCollectTaxStartDialog).blockScrollList(true);
    for (var i = 1; i < 4; i++) {
      c.ButtonHelper.enableButton(t.mc_taxList["item" + i].btn_collect, false);
    }
    c.ButtonHelper.enableButton(t.mc_taxList.btn_down, false);
    c.ButtonHelper.enableButton(t.mc_taxList.btn_up, false);
    c.ButtonHelper.enableButton(t.btn_close, false);
    c.ButtonHelper.enableButton(t.mc_taxList.btn_slider, false);
    c.ButtonHelper.enableButton(t.btn_bribe, false);
    o.BasicDialogHandler.getInstance().blockDialogs = true;
    this.filter.add(C.CastleCollectTaxProgressDialog);
    this.tutorialController.waitForExternalDialogShow(C.CastleCollectTaxProgressDialog, this.bindFunction(this.onStartTaxCollection));
  };
  TutorialCollectTaxActionCommand.prototype.onStartTaxCollection = function () {
    this.trackStep("040_030_time_selected");
    this.layoutManager.tutorialPanel.showWithText("tut_tax_waitForTax_copy", s.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER, m.CastleTutorialPanel.POS_BOTTOM_RIGHT);
    this.showBlockerAndArrowsForTaxProgressDialog();
    this.tutorialController.waitForExternalDialogHide(C.CastleCollectTaxProgressDialog, this.bindFunction(this.onTaxProgressDialogClosed));
  };
  TutorialCollectTaxActionCommand.prototype.showBlockerAndArrowsForTaxProgressDialog = function () {
    var e = this.getDialogDisp(C.CastleCollectTaxProgressDialog);
    c.ButtonHelper.enableButton(e.btn_collect, false);
    this.arrows.replace(e.btn_close, false, true);
    this.blocker.replace(e.btn_close);
    c.ButtonHelper.enableButton(e.btn_help, false);
  };
  TutorialCollectTaxActionCommand.prototype.onTaxProgressDialogClosed = function () {
    this.trackStep("040_040_taxmenu_closed");
    this.filter.replace(g.CastleLevelUpDialog);
    this.arrows.clear();
    this.blocker.clear();
    this.tutorialController.waitForExternalDialogShow(g.CastleLevelUpDialog, this.bindFunction(this.onLevelDialogOpened));
    o.BasicDialogHandler.getInstance().blockDialogs = false;
  };
  TutorialCollectTaxActionCommand.prototype.onLevelDialogOpened = function () {
    this.tutorialController.waitForExternalDialogHide(g.CastleLevelUpDialog, this.bindFunction(this.finishStep));
  };
  TutorialCollectTaxActionCommand.prototype.finishStep = function () {
    this.trackStep("050_010_levelUp_2_confirmed");
    e.prototype.finishStep.call(this);
  };
  return TutorialCollectTaxActionCommand;
}(u.TutorialBasicActionCommand);
exports.TutorialCollectTaxActionCommand = p;
var h = require("./17.js");
var g = require("./812.js");
var C = require("./1059.js");
var _ = require("./1646.js");
var m = require("./675.js");
var f = require("./558.js");
a.classImplementsInterfaces(p, "ISimpleCommand");