Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./51.js");
var r = require("./122.js");
var l = require("./92.js");
var c = function (e) {
  function TutorialExpandCastleActionCommand() {
    var t = this;
    t._addedExpansions = [];
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._questGiverID = s.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER;
    return t;
  }
  n.__extends(TutorialExpandCastleActionCommand, e);
  TutorialExpandCastleActionCommand.prototype.handleUntilPlayerClickedOnShowMe = function () {
    e.prototype.handleUntilPlayerClickedOnShowMe.call(this);
    this.tutorialController.waitForDialogHide(p.CastleQuestDialog, this.bindFunction(this.onCloseQuestBookDialog));
  };
  TutorialExpandCastleActionCommand.prototype.onCloseQuestBookDialog = function () {
    this.trackStep("030_040_expansion_shortcut_selected");
    this.clearBlockers();
    this.filter.replace(d.CastleExpansionDialog);
    if (this.layoutManager.isInMyCastleBuildMode) {
      this.addArrowsToExpansion();
    } else {
      this.tutorialController.registerComplexListener(this.controller, l.IsoEvent.ON_EXPANSION_ARROW_ADDED, this.bindFunction(this.onExpansionArrowAddedToCastle));
      this.tutorialController.registerComplexListener(this.controller, l.IsoEvent.ON_EXPANSION_ARROW_REMOVED, this.bindFunction(this.onExpansionArrowRemovedFromCastle));
    }
    this.tutorialController.waitForExternalDialogShow(d.CastleExpansionDialog, this.bindFunction(this.onShowBuyExpansionDialog));
  };
  TutorialExpandCastleActionCommand.prototype.onCastleSwitchedToBuildMode = function (e = null) {
    if (u.Iso.renderer.strategies.currentStrategy.isActive(r.IsoRenderStrategyEnum.BUILD_MODE)) {
      this.tutorialController.removeComplexListener(this.controller, l.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onCastleSwitchedToBuildMode));
      this.tutorialController.registerComplexListener(this.controller, l.IsoEvent.ON_EXPANSION_ARROW_ADDED, this.bindFunction(this.onExpansionArrowAddedToCastle));
      this.tutorialController.registerComplexListener(this.controller, l.IsoEvent.ON_EXPANSION_ARROW_REMOVED, this.bindFunction(this.onExpansionArrowRemovedFromCastle));
    }
  };
  TutorialExpandCastleActionCommand.prototype.onExpansionArrowAddedToCastle = function (e) {
    var t = e.params[0];
    this.addArrowToSingleExpansion(t);
  };
  TutorialExpandCastleActionCommand.prototype.onExpansionArrowRemovedFromCastle = function (e) {
    var t = e.params[0];
    this.removeArrowFromExpansion(t);
  };
  TutorialExpandCastleActionCommand.prototype.removeArrowFromExpansion = function (e) {
    var t = a.int(this._addedExpansions.indexOf(e));
    if (t >= 0) {
      this._addedExpansions.splice(t, 1);
      this.arrows.remove(t);
      this.blocker.remove(t);
    }
  };
  TutorialExpandCastleActionCommand.prototype.addArrowsToExpansion = function () {
    var e = u.Iso.renderer.objects.expansions.list;
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this.addArrowToSingleExpansion(n);
        }
      }
    }
  };
  TutorialExpandCastleActionCommand.prototype.addArrowToSingleExpansion = function (e) {
    if (e.expandArrow) {
      this.removeArrowFromExpansion(e);
      var t = e.expandArrow.arrow_normal;
      var i = e.vo.rotation % 2 != 0;
      this.arrows.add(t, i, false, 0.75);
      this.blocker.add(t);
      this._addedExpansions.push(e);
    } else {
      e.addFunctionOnWaitForLoadComplete(this.bindFunction(function (t) {
        this.addArrowToSingleExpansion(e);
      }));
    }
  };
  TutorialExpandCastleActionCommand.prototype.onShowBuyExpansionDialog = function () {
    this.trackStep("030_060_expansion_iso_selected");
    this.tutorialController.removeComplexListener(this.controller, l.IsoEvent.ON_EXPANSION_ARROW_REMOVED, this.bindFunction(this.onExpansionArrowRemovedFromCastle));
    this.tutorialController.removeComplexListener(this.controller, l.IsoEvent.ON_EXPANSION_ARROW_ADDED, this.bindFunction(this.onExpansionArrowAddedToCastle));
    var e = this.getDialogDisp(d.CastleExpansionDialog);
    this.arrows.replace(e.btn_ok, false, true);
    this.blocker.replace(e.btn_ok);
    this.tutorialController.registerComplexListener(this.controller, l.IsoEvent.ON_BUY_EXPANSION, this.bindFunction(this.onPlayerBoughtCastleExpansion));
  };
  TutorialExpandCastleActionCommand.prototype.onPlayerBoughtCastleExpansion = function (e) {
    this.trackStep("030_070_expansion_confirmed");
    u.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
    this._addedExpansions = [];
    this.finishStep();
  };
  TutorialExpandCastleActionCommand.prototype.getQuestInfoOpenedTrackingID = function () {
    return "030_030_quest_opened";
  };
  TutorialExpandCastleActionCommand.prototype.getQuestBookOpenedTrackingID = function () {
    return "030_020_questbook_opened";
  };
  return TutorialExpandCastleActionCommand;
}(require("./1973.js").TutorialStartFromQuestBookActionCommand);
exports.TutorialExpandCastleActionCommand = c;
var u = require("./33.js");
var d = require("./1605.js");
var p = require("./653.js");
o.classImplementsInterfaces(c, "ISimpleCommand");