Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./51.js");
var l = require("./37.js");
var c = require("./252.js");
var u = createjs.Point;
var d = function (e) {
  function TutorialReadBattleLogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialReadBattleLogCommand, e);
  TutorialReadBattleLogCommand.prototype.internalExecute = function () {
    this.filter.replace(h.CastleMessageInboxDialog);
    var e = this.layoutManager.getPanel(g.CastleMultiInfoPanel).buttons.getAnyButtonByClass(_.MessagePanelButton);
    var t = e.buttonMc;
    this.arrows.replace(t, true, false, 1, new u(17, 2));
    this.blocker.replace(e.disp);
    this.blocker.add(e.buttonMc);
    this.spotlight.replace(t);
    this.layoutManager.tutorialPanel.showWithText("tut_dungeon_winDungeon_copy_duplicate", r.ClientConstCharacter.CHAR_ID_GENERAL);
    this.tutorialController.waitForExternalDialogShow(h.CastleMessageInboxDialog, this.bindFunction(this.onInbox));
  };
  TutorialReadBattleLogCommand.prototype.onInbox = function () {
    this.trackStep("s_080_160_messages_menu_opened");
    this.layoutManager.tutorialPanel.hide();
    var e = this.layoutManager.getDialog(h.CastleMessageInboxDialog);
    e.changeMessageCategory(h.CastleMessageInboxDialog.MESSAGE_CATEGORY_INBOX);
    var t = e.getCurrentSublayer();
    if (t && s.instanceOfClass(t, "ACastleBaseInboxMessageList")) {
      var i = t.getLatestBattleLog();
      if (!i) {
        this.finishStep();
        return;
      }
      var n = i.disp;
      this.arrows.replace(n);
      this.blocker.replace(n);
      this.spotlight.clear();
      this.filter.add(p.CastleBattleLogMessageAdvanced);
      this.tutorialController.waitForExternalDialogShow(p.CastleBattleLogMessageAdvanced, this.bindFunction(this.onBattleLog));
    }
  };
  TutorialReadBattleLogCommand.prototype.onBattleLog = function () {
    this.trackStep("s_080_170_battlereport_opened");
    var e = this.layoutManager.getDialog(p.CastleBattleLogMessageAdvanced);
    var t = o.castAs(e, "CastleBattleLogMessageAdvanced");
    if (t != null) {
      var i = t.dialogDisp.btn_ok;
      this.arrows.replace(i);
      this.blocker.replace(i);
    }
    this.tutorialController.waitForDialogHide(p.CastleBattleLogMessageAdvanced, this.bindFunction(this.waitForInboxHide));
    this.finishTriggerQuest();
  };
  TutorialReadBattleLogCommand.prototype.waitForInboxHide = function () {
    this.trackStep("s_080_180_battlereport_confirmed");
    var e = this.layoutManager.getDialog(h.CastleMessageInboxDialog).dialogDisp.btn_cancel;
    this.arrows.replace(e);
    this.blocker.replace(e);
    if (this.layoutManager.isOnMap) {
      this.tutorialController.waitForDialogHide(h.CastleMessageInboxDialog, this.bindFunction(this.goToMainCastle));
    } else {
      this.tutorialController.waitForDialogHide(h.CastleMessageInboxDialog, this.bindFunction(this.finishStep));
    }
  };
  TutorialReadBattleLogCommand.prototype.goToMainCastle = function () {
    this.trackStep("s_080_190_messages_menu_closed");
    this.arrows.replace(this.getActionPanelButtonDisp(C.CastlePanelButton));
    this.replaceActionPanelButtonInBlocker(C.CastlePanelButton);
    this.layoutManager.tutorialPanel.showWithText("tut_dungeon_returntocastle_copy_duplicate", r.ClientConstCharacter.CHAR_ID_GENERAL);
    this.tutorialController.registerComplexListener(this.controller, l.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.arrivedAtCastle));
  };
  TutorialReadBattleLogCommand.prototype.arrivedAtCastle = function (e) {
    this.trackStep("s_080_210_castle_entered");
    this.finishStep();
  };
  return TutorialReadBattleLogCommand;
}(c.TutorialBasicActionCommand);
exports.TutorialReadBattleLogCommand = d;
var p = require("./1954.js");
var h = require("./1128.js");
var g = require("./675.js");
var C = require("./1857.js");
var _ = require("./1851.js");
a.classImplementsInterfaces(d, "ISimpleCommand");