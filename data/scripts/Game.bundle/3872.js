Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./318.js");
var o = require("./20.js");
var a = require("./8.js");
var s = require("./117.js");
var r = require("./361.js");
var l = require("./1795.js");
var c = createjs.MouseEvent;
var u = function () {
  function AttackDialogWaveHandlerSupportToolDetail(e) {
    this.CONST_MAX_TOOL_SLOTS = 3;
    this._disp = e;
    a.ButtonHelper.initButtons([this._disp.btn_clear], o.ClickFeedbackButtonHover, 1);
    this._disp.btn_clear.toolTipText = "deleteAll";
    this._disp.mc_detailViewBG.doCache();
  }
  AttackDialogWaveHandlerSupportToolDetail.prototype.setVisibility = function (e) {
    this._disp.visible = e;
    if (e) {
      this.fill();
      this.controller.onSelectedWaveInfoSlotContainerChanged.add(this.bindFunction(this.fill));
      this.controller.updateAllWaveInfo.add(this.bindFunction(this.fill));
      this._disp.addEventListener(c.CLICK, this.bindFunction(this.onClick));
    } else {
      this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.fill));
      this.controller.updateAllWaveInfo.remove(this.bindFunction(this.fill));
      this._disp.removeEventListener(c.CLICK, this.bindFunction(this.onClick));
    }
  };
  AttackDialogWaveHandlerSupportToolDetail.prototype.fill = function () {
    var e;
    this._disp.mc_tools.gotoAndStop(1);
    e = 0;
    for (; e < this.CONST_MAX_TOOL_SLOTS; e++) {
      r.AttackDialogWaveInfoHelper.fillUnitContainer(e, this._disp.mc_tools, this.controller.attackVO.supportItemContainer, true, true);
    }
    this._disp.btn_clear.visible = this.getSelectedSlot().sumOfItems > 0;
    r.AttackDialogWaveInfoHelper.showSupportWave(this._disp, this.getSelectedSlot());
  };
  AttackDialogWaveHandlerSupportToolDetail.prototype.onClick = function (e) {
    switch (e.target) {
      case this._disp.btn_clear:
        var t = this.controller.attackVO.supportItemContainer.getTotalBonusByToolEffect(n.ToolEffectType.ADDITIONAL_WAVE) > 0;
        r.AttackDialogWaveInfoHelper.clearContainer(this.controller.attackVO.supportItemContainer);
        if (t) {
          this.controller.onLordChanged.dispatch();
        }
        this.controller.updateAllWaveInfo.dispatch();
    }
    if (!this.controller.draggedUnitVO) {
      switch (e.target.parent) {
        case this._disp.mc_tools:
          this.selectContainer();
      }
    }
  };
  AttackDialogWaveHandlerSupportToolDetail.prototype.selectContainer = function () {
    this.controller.setSelectedWaveInfoSlotMC(this.controller.attackVO.supportItemContainer, null, -1, l.AttackDialogWaveHandlerSupportToolWaveInfoItem.CONST_WAVE_NAME);
    this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
  };
  Object.defineProperty(AttackDialogWaveHandlerSupportToolDetail.prototype, "controller", {
    get: function () {
      return s.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerSupportToolDetail.prototype.getSelectedSlot = function () {
    return this.controller.attackVO.supportItemContainer;
  };
  AttackDialogWaveHandlerSupportToolDetail.CONST_WAVE_NAME = "support";
  return AttackDialogWaveHandlerSupportToolDetail;
}();
exports.AttackDialogWaveHandlerSupportToolDetail = u;