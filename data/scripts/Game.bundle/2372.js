Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./4.js");
var d = require("./384.js");
var p = function (e) {
  function RenderArmyAttack() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RenderArmyAttack, e);
  RenderArmyAttack.getToolAmountText = function (e) {
    if (e.armyState == h.ArmyAttackMapmovementVO.ARMY_SHORT) {
      return new l.TextVO("?");
    } else {
      return new s.LocalizedNumberVO(e.attackArmyVO.toolAmount);
    }
  };
  RenderArmyAttack.getUnitAmountText = function (e) {
    if (e.armyState == h.ArmyAttackMapmovementVO.ARMY_SHORT) {
      return new r.LocalizedTextVO(o.GenericTextIds.VALUE_CIRCA_NOMINAL, [e.armySize]);
    } else {
      return new s.LocalizedNumberVO(e.attackArmyVO.unitAmount);
    }
  };
  RenderArmyAttack.getTitleTextID = function (e) {
    if (e.isConquerMovement) {
      return "dialog_moveOverview_conquerAttack";
    } else if (e.isMyMovement) {
      return "dialog_moveOverview_attack";
    } else if (e.isAttackingMovement) {
      return "dialog_moveOverview_underAttack";
    } else if (u.CastleModel.userData.isUserInMyAllianceAndCheckFactionKingdom(e)) {
      return "dialog_moveOverview_attack";
    } else {
      return "dialog_moveOverview_underAttack";
    }
  };
  RenderArmyAttack.getDecoFrame = function (e) {
    if (e.isMyMovement) {
      return c.int(d.AMovementRenderStrategy.FRAME_MY_ATTACK);
    } else if (e.isAttackingMovement) {
      if (e.armyState == h.ArmyAttackMapmovementVO.ARMY_SHORT) {
        return c.int(d.AMovementRenderStrategy.FRAME_ENEMY_ATTACK);
      } else {
        return c.int(d.AMovementRenderStrategy.FRAME_ENEMY_ATTACK_CLOSE);
      }
    } else if (u.CastleModel.userData.isUserInMyAllianceAndCheckFactionKingdom(e)) {
      return c.int(d.AMovementRenderStrategy.FRAME_ALLIED_ATTACK);
    } else if (e.armyState == h.ArmyAttackMapmovementVO.ARMY_SHORT) {
      return c.int(d.AMovementRenderStrategy.FRAME_OTHER_ATTACK);
    } else {
      return c.int(d.AMovementRenderStrategy.FRAME_OTHER_ATTACK_CLOSE);
    }
  };
  RenderArmyAttack.prototype.renderData = function (e, t) {
    var i = t;
    var n = RenderArmyAttack.getUnitAmountText(i);
    var o = RenderArmyAttack.getToolAmountText(i);
    var s = RenderArmyAttack.getTitleTextID(i);
    var l = c.int(RenderArmyAttack.getDecoFrame(i));
    d.AMovementRenderStrategy.setDecoFrame(e, l);
    e.fieldUnitCount = this.textFieldManager.registerTextField(e.btn_armyInfo.txt_units, n, new a.InternalGGSTextFieldConfigVO(true));
    e.fieldToolCount = this.textFieldManager.registerTextField(e.btn_armyInfo.txt_tools, o, new a.InternalGGSTextFieldConfigVO(true));
    e.fieldAction = this.textFieldManager.registerTextField(e.txt_action, new r.LocalizedTextVO(s), new a.InternalGGSTextFieldConfigVO(true));
    e.btn_armyInfo.visible = true;
  };
  return RenderArmyAttack;
}(d.AMovementRenderStrategy);
exports.RenderArmyAttack = p;
var h = require("./385.js");