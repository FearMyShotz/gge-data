Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./21.js");
var d = require("./29.js");
var p = require("./4.js");
var h = require("./27.js");
var g = require("./9.js");
var C = require("./20.js");
var _ = require("./81.js");
var m = require("./133.js");
var f = require("./298.js");
var O = require("./8.js");
var E = require("./73.js");
var y = require("./602.js");
var b = require("./603.js");
var D = function (e) {
  function AdvisorAttackOverviewScrollItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AdvisorAttackOverviewScrollItem, e);
  AdvisorAttackOverviewScrollItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    O.ButtonHelper.initButtons([this.getItemMc().btn_retreat], C.ClickFeedbackButtonHover);
    this._itxt_remainingTime = r.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().mc_progress.txt_time, new c.TextVO(""));
    this._lordTooltipTrigger = new f.LordEffectTooltipTrigger(this.getItemMc().mc_commander);
  };
  AdvisorAttackOverviewScrollItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    p.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    if (this._lordTooltipTrigger) {
      this._lordTooltipTrigger.show();
    }
  };
  AdvisorAttackOverviewScrollItem.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    p.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    if (this._lordTooltipTrigger) {
      this._lordTooltipTrigger.hide();
    }
  };
  AdvisorAttackOverviewScrollItem.prototype.fill = function () {
    if (this.vo) {
      this.onTimerUpdate();
      E.EquipmentIconHelper.addLordIcon(this.vo.movementVO.lordVO, this.getItemMc().mc_commander, 30);
      var e = m.LordEffectHelper.STRATEGY_ATTACK;
      this._lordTooltipTrigger.setProperties(this.vo.movementVO.lordVO, null, this.vo.movementVO.targetArea, e);
      this.getItemMc().mc_arrowDirection.gotoAndStop(this.vo.movementVO.isReturnHome ? 2 : 1);
      this.getItemMc().btn_retreat.visible = this.vo.movementVO.canBeRetreated;
      this.getItemMc().icon_cancelled.visible = this.vo.movementVO.advisorIsLastAttack && this.vo.movementVO.isReturnHome;
      var t = p.CastleModel.lordData.getLordByID(this.vo.movementVO.lordVO.id).playerIndex;
      r.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_commanderIndex, new l.LocalizedTextVO(a.GenericTextIds.VALUE_SIMPLE_COMP, [t, "."]));
      r.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_units, new l.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.vo.movementVO.advisorMovementNumber, this.vo.movementVO.advisorMovementCount]));
    }
  };
  AdvisorAttackOverviewScrollItem.prototype.onTimerUpdate = function (e = null) {
    if (this.vo) {
      var t = this.vo.movementVO.currentEndTimeInSeconds();
      this._itxt_remainingTime.textContentVO.stringValue = h.CastleTimeStringHelper.getShortTimeString(t);
      this.getItemMc().mc_progress.progressbar.scaleX = s.MathBase.clamp(this.vo.movementVO.currentProgress, 0, 1);
    }
  };
  AdvisorAttackOverviewScrollItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.getItemMc().btn_retreat:
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(y.AdvisorAttackOverviewCancelDialog, new b.AdvisorAttackOverviewCancelDialogProperties([this.vo.movementVO]));
        break;
      default:
        o.CommandController.instance.executeCommand(d.IngameClientCommands.OPEN_MOVEMENT_INFO_DIALOG_COMMAND, this.vo.movementVO);
    }
  };
  Object.defineProperty(AdvisorAttackOverviewScrollItem.prototype, "vo", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return AdvisorAttackOverviewScrollItem;
}(_.AInfiniteScrollListItem);
exports.AdvisorAttackOverviewScrollItem = D;