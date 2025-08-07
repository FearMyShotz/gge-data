Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./20.js");
var o = require("./8.js");
var a = require("./117.js");
var s = require("./361.js");
var r = createjs.MouseEvent;
var l = function () {
  function AttackDialogWaveHandlerWaveInfoDetail(e) {
    this.CONST_MAX_FLANK_SLOTS = 2;
    this.CONST_MAX_MIDDLE_TOOL_SLOTS = 3;
    this.CONST_MAX_MIDDLE_SOLDIER_SLOTS = 6;
    this._waveIndex = 0;
    this._disp = e;
    o.ButtonHelper.initButtons([this._disp.btn_clear], n.ClickFeedbackButtonHover, 1);
    this._disp.btn_clear.toolTipText = "deleteAll";
    this._disp.mc_detailViewBG.doCache();
  }
  AttackDialogWaveHandlerWaveInfoDetail.prototype.setVisibility = function (e, t) {
    this._disp.visible = e;
    this._waveIndex = t;
    if (!this.waveInfo) {
      e = false;
    }
    if (e) {
      this.fill();
      this.controller.onSelectedWaveInfoSlotContainerChanged.add(this.bindFunction(this.fill));
      this.controller.updateAllWaveInfo.add(this.bindFunction(this.fill));
      this._disp.addEventListener(r.CLICK, this.bindFunction(this.onClick));
    } else {
      this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.fill));
      this.controller.updateAllWaveInfo.remove(this.bindFunction(this.fill));
      this._disp.removeEventListener(r.CLICK, this.bindFunction(this.onClick));
    }
  };
  AttackDialogWaveHandlerWaveInfoDetail.prototype.fill = function () {
    if (this.waveInfo) {
      var e;
      this._disp.mc_left_tools.gotoAndStop(1);
      this._disp.mc_right_tools.gotoAndStop(1);
      this._disp.mc_left_units.gotoAndStop(1);
      this._disp.mc_right_units.gotoAndStop(1);
      this._disp.mc_middle_tools.gotoAndStop(1);
      this._disp.mc_middle_units.gotoAndStop(1);
      e = 0;
      for (; e < this.CONST_MAX_FLANK_SLOTS; e++) {
        s.AttackDialogWaveInfoHelper.fillUnitContainer(e, this._disp.mc_left_tools, this.waveInfo.itemsLeftWall_tools, true, false, this._waveIndex);
        s.AttackDialogWaveInfoHelper.fillUnitContainer(e, this._disp.mc_right_tools, this.waveInfo.itemsRightWall_tools, true, false, this._waveIndex);
        s.AttackDialogWaveInfoHelper.fillUnitContainer(e, this._disp.mc_left_units, this.waveInfo.itemsLeftWall_units, false, false, this._waveIndex);
        s.AttackDialogWaveInfoHelper.fillUnitContainer(e, this._disp.mc_right_units, this.waveInfo.itemsRightWall_units, false, false, this._waveIndex);
      }
      for (e = 0; e < this.CONST_MAX_MIDDLE_TOOL_SLOTS; e++) {
        s.AttackDialogWaveInfoHelper.fillUnitContainer(e, this._disp.mc_middle_tools, this.waveInfo.itemsMiddleWall_tools, true, false, this._waveIndex);
      }
      for (e = 0; e < this.CONST_MAX_MIDDLE_SOLDIER_SLOTS; e++) {
        s.AttackDialogWaveInfoHelper.fillUnitContainer(e, this._disp.mc_middle_units, this.waveInfo.itemsMiddleWall_units, false, false, this._waveIndex);
      }
      this._disp.btn_clear.visible = this.waveInfo.getSumOfItems() > 0;
      s.AttackDialogWaveInfoHelper.showNormalWave(this._disp, this.waveInfo, this._waveIndex + 1);
    }
  };
  AttackDialogWaveHandlerWaveInfoDetail.prototype.onClick = function (e) {
    if (this.waveInfo) {
      switch (e.target) {
        case this._disp.btn_clear:
          s.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsLeftWall_tools);
          s.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsLeftWall_units);
          s.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsMiddleWall_tools);
          s.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsMiddleWall_units);
          s.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsRightWall_tools);
          s.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsRightWall_units);
          this.controller.updateAllWaveInfo.dispatch();
      }
      if (!this.controller.draggedUnitVO) {
        switch (e.target.parent) {
          case this._disp.mc_left_tools:
            this.selectContainer(this.waveInfo.itemsLeftWall_tools);
            this.controller.openSpyInfoFlank("left");
            break;
          case this._disp.mc_right_tools:
            this.selectContainer(this.waveInfo.itemsRightWall_tools);
            this.controller.openSpyInfoFlank("right");
            break;
          case this._disp.mc_left_units:
            this.selectContainer(this.waveInfo.itemsLeftWall_units);
            this.controller.openSpyInfoFlank("left");
            break;
          case this._disp.mc_right_units:
            this.selectContainer(this.waveInfo.itemsRightWall_units);
            this.controller.openSpyInfoFlank("right");
            break;
          case this._disp.mc_middle_tools:
            this.selectContainer(this.waveInfo.itemsMiddleWall_tools);
            this.controller.openSpyInfoFlank("middle");
            break;
          case this._disp.mc_middle_units:
            this.selectContainer(this.waveInfo.itemsMiddleWall_units);
            this.controller.openSpyInfoFlank("middle");
        }
      }
    }
  };
  AttackDialogWaveHandlerWaveInfoDetail.prototype.selectContainer = function (e) {
    this.controller.setSelectedWaveInfoSlotMC(e, this.waveInfo, this._waveIndex);
    if (this.controller.selectedWaveInfoSlotContainer) {
      this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
    }
  };
  Object.defineProperty(AttackDialogWaveHandlerWaveInfoDetail.prototype, "waveInfo", {
    get: function () {
      return this.controller.attackVO.army.waves[this._waveIndex];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerWaveInfoDetail.prototype, "controller", {
    get: function () {
      return a.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerWaveInfoDetail.prototype.getSelectedSlot = function () {
    return this.controller.attackVO.supportItemContainer;
  };
  return AttackDialogWaveHandlerWaveInfoDetail;
}();
exports.AttackDialogWaveHandlerWaveInfoDetail = l;