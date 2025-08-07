Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./181.js");
var a = require("./9.js");
var s = require("./751.js");
var r = require("./585.js");
var l = require("./115.js");
var c = require("./471.js");
var u = createjs.Event;
var d = createjs.MouseEvent;
var p = function () {
  function AttackDialogDragTarget(e) {
    this._waveIndex = -1;
    this._disp = e;
    this._disp.mc_drag_default.visible = false;
    this._disp.mc_drag_active.visible = false;
    if (this._disp.stage) {
      this.onAddedToStage(null);
    } else {
      this.onRemovedFromStage(null);
    }
  }
  AttackDialogDragTarget.prototype.init = function (e, t, i, n = false, o = -1) {
    this._index = e;
    this._containerVO = t;
    this._isToolSlot = i;
    this._isSupportToolSlot = n;
    this._waveIndex = o;
  };
  AttackDialogDragTarget.prototype.onRemovedFromStage = function (e) {
    this._disp.addEventListener(u.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage), false, 0, true);
    this._disp.removeEventListener(u.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
    this._disp.removeEventListener("rollover", this.bindFunction(this.onRollOver));
    this._disp.removeEventListener("rollout", this.bindFunction(this.onRollOut));
    this._disp.removeEventListener(d.MOUSE_UP, this.bindFunction(this.onMouseUp));
    l.AttackDialogController.getInstance().onStartDrag.remove(this.bindFunction(this.onStartDrag));
    l.AttackDialogController.getInstance().onStopDrag.remove(this.bindFunction(this.onStopDrag));
  };
  AttackDialogDragTarget.prototype.onAddedToStage = function (e) {
    this._disp.removeEventListener(u.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this._disp.addEventListener(u.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage), false, 0, true);
    this._disp.addEventListener("rollover", this.bindFunction(this.onRollOver));
    this._disp.addEventListener("rollout", this.bindFunction(this.onRollOut));
    this._disp.addEventListener(d.MOUSE_UP, this.bindFunction(this.onMouseUp));
    l.AttackDialogController.getInstance().onStartDrag.add(this.bindFunction(this.onStartDrag));
    l.AttackDialogController.getInstance().onStopDrag.add(this.bindFunction(this.onStopDrag));
  };
  AttackDialogDragTarget.prototype.onMouseUp = function (e) {
    if (this.draggedUnitVO && this.isFittingSlot()) {
      if (this.draggedUnitVO instanceof o.ToolUnitVO && this.draggedUnitVO.hasLimitedAmountPerWave && !this.draggedUnitVO.isSupportTool && !this.fightItemVO.isSameType(this.draggedUnitVO) && this.isMaxAmountPerWaveReached(this.draggedUnitVO)) {
        return;
      }
      if (this._containerVO.exceedsSupportToolSlotLimit(this.fightItemVO, this.draggedUnitVO)) {
        return;
      }
      if (this.fightItemVO.isFree() && this._containerVO.isFull) {
        return;
      }
      this.editUnitSlot();
    }
    l.AttackDialogController.getInstance().stopDrag();
  };
  AttackDialogDragTarget.prototype.editUnitSlot = function () {
    var e = this.draggedUnitVO instanceof o.ToolUnitVO && this.fightItemVO.isSameType(this.draggedUnitVO);
    var t = Number.MAX_VALUE;
    if (this.draggedUnitVO instanceof o.ToolUnitVO && this.draggedUnitVO.amountPerWave > -1 && this._waveIndex > -1) {
      t = n.int(this.draggedUnitVO.amountPerWave - this.attackVO.army.getWaveByID(this._waveIndex).getSumOfToolsByTool(this.draggedUnitVO) + this.fightItemVO.getAmount());
    }
    if (this.draggedUnitVO instanceof o.ToolUnitVO && this.draggedUnitVO.isSupportTool) {
      t = this.draggedUnitVO.amountPerWave;
    }
    var i = new r.CastleBasicAddUnitsDialogProperties(this.draggedUnitVO, this.bindFunction(this.changeItemAmount), this.fightItemVO, e, this._containerVO, t);
    i.targetAreaType = this.attackVO.targetArea.areaType;
    a.CastleDialogHandler.getInstance().registerDefaultDialogs(s.CastleAttackAddUnitsDialog, i);
  };
  AttackDialogDragTarget.prototype.changeItemAmount = function (e, t, i) {
    c.AttackDialogHelper.changeUnitItemAmount(this.attackVO.unitInventory, e, t, i);
  };
  AttackDialogDragTarget.prototype.onRollOut = function (e) {
    if (this.draggedUnitVO && this.isFittingSlot()) {
      this._disp.mc_drag_default.visible = true;
      this._disp.mc_drag_active.visible = false;
    } else {
      this._disp.mc_drag_default.visible = false;
      this._disp.mc_drag_active.visible = false;
    }
  };
  AttackDialogDragTarget.prototype.onRollOver = function (e) {
    if (this.draggedUnitVO && this.isFittingSlot()) {
      this._disp.mc_drag_default.visible = false;
      this._disp.mc_drag_active.visible = true;
    } else {
      this._disp.mc_drag_default.visible = false;
      this._disp.mc_drag_active.visible = false;
    }
  };
  AttackDialogDragTarget.prototype.onStartDrag = function () {
    if (this.isFittingSlot()) {
      this._disp.mc_drag_default.visible = true;
    }
  };
  AttackDialogDragTarget.prototype.onStopDrag = function () {
    this._disp.mc_drag_default.visible = false;
    this._disp.mc_drag_active.visible = false;
  };
  AttackDialogDragTarget.prototype.isMaxAmountPerWaveReached = function (e) {
    return e.amountPerWave <= this.attackVO.army.getWaveByID(this._waveIndex).getSumOfToolsByTool(e) + (this.attackVO.supportItemContainer ? this.attackVO.supportItemContainer.getAmountOfToolInContainer(e) : 0);
  };
  AttackDialogDragTarget.prototype.isFittingSlot = function () {
    return this.draggedUnitVO.isToolForSlotType(this.fightItemVO.slotType) && this.fightItemVO.isUnlocked();
  };
  Object.defineProperty(AttackDialogDragTarget.prototype, "draggedUnitVO", {
    get: function () {
      return l.AttackDialogController.getInstance().draggedUnitVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogDragTarget.prototype, "attackVO", {
    get: function () {
      return l.AttackDialogController.getInstance().attackVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogDragTarget.prototype, "fightItemVO", {
    get: function () {
      return this._containerVO.items[this._index];
    },
    enumerable: true,
    configurable: true
  });
  return AttackDialogDragTarget;
}();
exports.AttackDialogDragTarget = p;