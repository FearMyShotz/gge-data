Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./20.js");
var o = require("./8.js");
var a = require("./115.js");
var s = require("./361.js");
var r = createjs.MouseEvent;
var l = function () {
  function AttackDialogWaveHandlerFinalYardWaveInfoDetail(e) {
    this.CONST_MAX_SLOTS = 8;
    this._disp = e;
    o.ButtonHelper.initButtons([this._disp.btn_clear], n.ClickFeedbackButtonHover, 1);
    this._disp.btn_clear.toolTipText = "deleteAll";
    this._disp.mc_detailViewBG.doCache();
  }
  AttackDialogWaveHandlerFinalYardWaveInfoDetail.prototype.setVisibility = function (e) {
    this._disp.visible = e;
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
  AttackDialogWaveHandlerFinalYardWaveInfoDetail.prototype.fill = function () {
    var e;
    this._disp.mc_units.gotoAndStop(1);
    e = 0;
    for (; e < this.CONST_MAX_SLOTS; e++) {
      s.AttackDialogWaveInfoHelper.fillUnitContainer(e, this._disp.mc_units, this.controller.attackVO.yardWaveContainer, false);
    }
    this._disp.btn_clear.visible = this.getSelectedSlot().sumOfItems > 0;
    s.AttackDialogWaveInfoHelper.showFinalWave(this._disp, this.getSelectedSlot());
  };
  AttackDialogWaveHandlerFinalYardWaveInfoDetail.prototype.onClick = function (e) {
    switch (e.target) {
      case this._disp.btn_clear:
        s.AttackDialogWaveInfoHelper.clearContainer(this.controller.attackVO.yardWaveContainer);
        this.controller.updateAllWaveInfo.dispatch();
    }
    if (!this.controller.draggedUnitVO) {
      switch (e.target.parent) {
        case this._disp.mc_units:
          this.selectContainer();
      }
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoDetail.prototype.selectContainer = function () {
    this.controller.setSelectedWaveInfoSlotMC(this.getSelectedSlot(), null, -1, AttackDialogWaveHandlerFinalYardWaveInfoDetail.CONST_WAVE_NAME);
    if (this.controller.selectedWaveInfoSlotContainer) {
      this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
      this.controller.openSpyInfoFlank("keep");
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoDetail.prototype.getSelectedSlot = function () {
    return this.controller.attackVO.yardWaveContainer;
  };
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoDetail.prototype, "controller", {
    get: function () {
      return a.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerFinalYardWaveInfoDetail.CONST_WAVE_NAME = "yardWave";
  return AttackDialogWaveHandlerFinalYardWaveInfoDetail;
}();
exports.AttackDialogWaveHandlerFinalYardWaveInfoDetail = l;