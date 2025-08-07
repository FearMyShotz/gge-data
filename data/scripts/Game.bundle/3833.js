Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./51.js");
var a = require("./199.js");
var s = require("./4.js");
var r = require("./426.js");
var l = require("./1791.js");
var c = createjs.Point;
var u = function (e) {
  function GeneralIntroductionGuidanceAssignBaronCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GeneralIntroductionGuidanceAssignBaronCommand, e);
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.internalExecute = function () {
    this.waitForExternalDialog(r.CastleDefenceDialog, this.bindFunction(this.hintGeneralIcon));
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.hintGeneralIcon = function () {
    var e = s.CastleModel.userData.castleList.getHomeCastle();
    if (this.defenceDialog.sourceArea.equalsOtherWMO(e.objectId, e.kingdomID)) {
      this.removeGuidance();
      var t = s.CastleModel.lordData.getBaronByCastleMapObjectVO(e).assignedGeneralVO;
      if (!t || t && t.generalID != this.targetGeneralID) {
        this.arrows.add(this.defenceDialog.dialogDisp.mc_generalIcon, true, true, 1, new c(-25, 55));
        this.showGuidance(o.ClientConstCharacter.CHAR_ID_HORATIO, "generals_introduction_guidance_03");
        this.waitForOpenGeneralsPanel();
        this.waitForExternalDialogClose(r.CastleDefenceDialog, this.bindFunction(this.onCloseDialog));
      }
    }
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.hintOpenGeneralSelection = function () {
    this.removeGuidance();
    var e = this.defenceDialog.dialogDisp.mc_generals.mc_generalInfo.btn_switch;
    this.arrows.add(e, true, false, 1);
    this.waitForOpenGeneralsSelection();
    this.waitForCloseGeneralsPanel();
    this.waitForExternalDialogClose(r.CastleDefenceDialog, this.bindFunction(this.onCloseDialog));
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.hintGeneralSelection = function () {
    var e = this;
    this.removeGuidance();
    this.defenceDialog.openGeneralSelection();
    var t = this.defenceDialog.generalSelection.items.find(function (t) {
      return t.generalVO && t.generalVO.generalID == e.targetGeneralID;
    });
    if (t) {
      this.arrows.add(t.disp, false, true, 1, new c(25, 55));
    }
    this.waitForCloseGeneralsPanel();
    this.waitForCloseGeneralsSelection();
    this.waitForExternalDialogClose(r.CastleDefenceDialog, this.bindFunction(this.onCloseDialog));
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.waitForOpenGeneralsPanel = function () {
    s.CastleModel.generalsIntroductionData.registerListener(this.controller, a.CastleDialogEvent.DEFENCE_SCREEN_OPEN_GENERALS, this.bindFunction(this.hintGeneralSelection));
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.waitForCloseGeneralsPanel = function () {
    s.CastleModel.generalsIntroductionData.registerListener(this.controller, a.CastleDialogEvent.DEFENCE_SCREEN_CLOSE_GENERALS, this.bindFunction(this.hintGeneralIcon));
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.waitForOpenGeneralsSelection = function () {
    s.CastleModel.generalsIntroductionData.registerListener(this.controller, a.CastleDialogEvent.DEFENCE_SCREEN_OPEN_GENERALS_SELECTION, this.bindFunction(this.hintGeneralSelection));
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.waitForCloseGeneralsSelection = function () {
    s.CastleModel.generalsIntroductionData.registerListener(this.controller, a.CastleDialogEvent.DEFENCE_SCREEN_CLOSE_GENERALS_SELECTION, this.bindFunction(this.hintOpenGeneralSelection));
  };
  GeneralIntroductionGuidanceAssignBaronCommand.prototype.onCloseDialog = function () {
    this.removeGuidance();
    this.internalExecute();
  };
  Object.defineProperty(GeneralIntroductionGuidanceAssignBaronCommand.prototype, "targetGeneralID", {
    get: function () {
      return this._questConditionVO.conditionData[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralIntroductionGuidanceAssignBaronCommand.prototype, "defenceDialog", {
    get: function () {
      return this.layoutManager.getDialog(r.CastleDefenceDialog);
    },
    enumerable: true,
    configurable: true
  });
  return GeneralIntroductionGuidanceAssignBaronCommand;
}(l.GeneralIntroductionGuidanceBasicCommand);
exports.GeneralIntroductionGuidanceAssignBaronCommand = u;