Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./51.js");
var s = require("./199.js");
var r = require("./118.js");
var l = require("./4.js");
var c = require("./211.js");
var u = require("./115.js");
var d = require("./8.js");
var p = require("./1793.js");
var h = createjs.Point;
var g = function (e) {
  function GeneralIntroductionGuidanceAttackWolfkingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GeneralIntroductionGuidanceAttackWolfkingCommand, e);
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.internalExecute = function () {
    this.waitForExternalDialog(c.AttackDialog, this.bindFunction(this.onOpenAttackDialog));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.onOpenAttackDialog = function () {
    if (this.attackInfoVO.targetArea.areaType == o.WorldConst.AREA_TYPE_WOLF_KING) {
      d.ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack, false);
      d.ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_bottom_800.btn_attack, false);
      if (this.assignedGeneralVO && this.assignedGeneralVO.generalID == this.targetGeneralID) {
        this.hintAttack();
      } else if (this.attackDialog.generalSelection.isVisble) {
        this.hintSelectGeneral();
      } else if (this.attackDialog.dialogDisp.mc_playerInfo.visible) {
        this.hintOpenGeneralSelection();
      } else {
        this.hintOpenPlayerInfo();
      }
    }
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.hintOpenPlayerInfo = function () {
    this.removeGuidance();
    var e = this.attackDialog.dialogDisp.btn_player_left;
    this.arrows.add(e, false, true, 1, new h(25, 55));
    this.waitForOpenPlayerInfo();
    this.waitForExternalDialogClose(c.AttackDialog, this.bindFunction(this.onCloseDialog));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.hintOpenGeneralSelection = function () {
    this.removeGuidance();
    this.showGuidance(a.ClientConstCharacter.CHAR_ID_HORATIO, "generals_introduction_guidance_06");
    var e = this.attackDialog.dialogDisp.mc_playerInfo.btn_switch;
    this.arrows.add(e, false, false, 1);
    this.waitForOpenGeneralsSelection();
    this.waitForClosePlayerInfo();
    this.waitForLordChanged();
    this.waitForExternalDialogClose(c.AttackDialog, this.bindFunction(this.onCloseDialog));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.hintSelectGeneral = function () {
    var e = this;
    this.removeGuidance();
    this.showGuidance(a.ClientConstCharacter.CHAR_ID_HORATIO, "generals_introduction_guidance_06");
    var t = this.attackDialog.generalSelection.generalSelection.items.find(function (t) {
      return t.generalVO && t.generalVO.generalID == e.targetGeneralID;
    });
    if (t) {
      this.arrows.add(t.disp, true, true, 1, new h(-25, 55));
    }
    this.waitForLordChanged();
    this.waitForGeneralAssigned();
    this.waitForCloseGeneralsSelection();
    this.waitForClosePlayerInfo();
    this.waitForExternalDialogClose(c.AttackDialog, this.bindFunction(this.onCloseDialog));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.hintAttack = function () {
    this.removeGuidance();
    this.showGuidance(a.ClientConstCharacter.CHAR_ID_HORATIO, "generals_introduction_guidance_07");
    d.ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack, true);
    d.ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_bottom_800.btn_attack, true);
    this.waitForLordChanged();
    this.waitForGeneralAssigned();
    this.waitForExternalDialogClose(c.AttackDialog, this.bindFunction(this.onCloseDialog));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.waitForOpenPlayerInfo = function () {
    l.CastleModel.generalsIntroductionData.registerListener(this.controller, s.CastleDialogEvent.ATTACK_SCREEN_OPEN_PLAYER_INFO, this.bindFunction(this.hintOpenGeneralSelection));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.waitForClosePlayerInfo = function () {
    l.CastleModel.generalsIntroductionData.registerListener(this.controller, s.CastleDialogEvent.ATTACK_SCREEN_CLOSE_PLAYER_INFO, this.bindFunction(this.hintOpenPlayerInfo));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.waitForOpenGeneralsSelection = function () {
    l.CastleModel.generalsIntroductionData.registerListener(this.controller, s.CastleDialogEvent.ATTACK_SCREEN_OPEN_GENERALS_SELECTION, this.bindFunction(this.hintSelectGeneral));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.waitForCloseGeneralsSelection = function () {
    l.CastleModel.generalsIntroductionData.registerListener(this.controller, s.CastleDialogEvent.ATTACK_SCREEN_CLOSE_GENERALS_SELECTION, this.bindFunction(this.hintOpenGeneralSelection));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.waitForGeneralAssigned = function () {
    l.CastleModel.generalsIntroductionData.registerListener(this.controller, r.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onOpenAttackDialog));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.waitForLordChanged = function () {
    l.CastleModel.generalsIntroductionData.registerListener(this.controller, s.CastleDialogEvent.ATTACK_SCREEN_LORD_SELECTED, this.bindFunction(this.onOpenAttackDialog));
  };
  GeneralIntroductionGuidanceAttackWolfkingCommand.prototype.onCloseDialog = function () {
    d.ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack, true);
    d.ButtonHelper.enableButton(this.attackDialog.dialogDisp.mc_bottom_800.btn_attack, true);
    this.removeGuidance();
    this.internalExecute();
  };
  Object.defineProperty(GeneralIntroductionGuidanceAttackWolfkingCommand.prototype, "assignedGeneralVO", {
    get: function () {
      var e = u.AttackDialogController.getInstance().selectedLord;
      if (e) {
        return e.assignedGeneralVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralIntroductionGuidanceAttackWolfkingCommand.prototype, "targetGeneralID", {
    get: function () {
      return GeneralIntroductionGuidanceAttackWolfkingCommand.GENERAL_ID_HORATIO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralIntroductionGuidanceAttackWolfkingCommand.prototype, "attackInfoVO", {
    get: function () {
      return this.attackDialog.dialogProperties.attackInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralIntroductionGuidanceAttackWolfkingCommand.prototype, "attackDialog", {
    get: function () {
      return this.layoutManager.getDialog(c.AttackDialog);
    },
    enumerable: true,
    configurable: true
  });
  GeneralIntroductionGuidanceAttackWolfkingCommand.GENERAL_ID_HORATIO = 104;
  return GeneralIntroductionGuidanceAttackWolfkingCommand;
}(p.GeneralIntroductionGuidanceBasicCommand);
exports.GeneralIntroductionGuidanceAttackWolfkingCommand = g;