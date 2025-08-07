Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = createjs.MouseEvent;
var a = require("./49.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./318.js");
var c = require("./157.js");
var u = require("./20.js");
var d = require("./8.js");
var p = require("./115.js");
var h = require("./361.js");
var g = require("./1797.js");
var C = function (e) {
  function AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut(t, i) {
    var n = e.call(this, new (r.getDefinitionByName("WaveListItem_SupportWave_Fold"))(), i) || this;
    n.CONST_MAX_TOOL_SLOTS = 3;
    n.cbx = new a.CheckBoxButton(n.itemMc.headerMC.cbx_select, true);
    n.init(t);
    return n;
  }
  n.__extends(AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut, e);
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.init = function (e) {
    if (e) {
      this.cbx.selected();
    } else {
      this.cbx.deselected();
    }
    this.itemMc.headerMC.mc_down.visible = false;
    this.itemMc.headerMC.mc_hover.visible = false;
    this.itemMc.headerMC.arrow_right.visible = !this._isExpanded;
    this.itemMc.headerMC.arrow_down.visible = this._isExpanded;
    this.fill();
    this.controller.onSelectedWaveInfoSlotContainerChanged.add(this.bindFunction(this.onSelectionChanged));
    this.controller.updateAllWaveInfo.add(this.bindFunction(this.fill));
    this.controller.onAutoFillALLSelectionChanged.add(this.bindFunction(this.updateAutoFillSelection));
    this.controller.updateAutoFillSelections.add(this.bindFunction(this.updateAutoFillSelection));
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.onSelectionChanged));
    this.controller.updateAllWaveInfo.remove(this.bindFunction(this.fill));
    this.controller.onAutoFillALLSelectionChanged.remove(this.bindFunction(this.updateAutoFillSelection));
    this.controller.updateAutoFillSelections.remove(this.bindFunction(this.updateAutoFillSelection));
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.updateAutoFillSelection = function () {
    if (this.controller.getIsWaveSelectedForAutoFill(AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME)) {
      this.cbx.selected();
    } else {
      this.cbx.deselected();
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.onSelectionChanged = function () {
    this.fill();
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.fill = function () {
    var e;
    d.ButtonHelper.initButtons([this.itemMc.headerMC.btn_clear], u.ClickFeedbackButtonHover, 1);
    this.itemMc.headerMC.btn_expand.mouseChildren = false;
    this.itemMc.headerMC.btn_expand.actLikeButton = true;
    this.itemMc.headerMC.btn_clear.toolTipText = "deleteAll";
    this.itemMc.headerMC.mc_tools.gotoAndStop(1);
    e = 0;
    for (; e < this.CONST_MAX_TOOL_SLOTS; e++) {
      h.AttackDialogWaveInfoHelper.fillUnitContainer(e, this.itemMc.headerMC.mc_tools, this.controller.attackVO.supportItemContainer, true, true);
    }
    this.itemMc.headerMC.mc_selected.visible = this.controller.selectedWaveName == g.AttackDialogWaveHandlerSupportToolWaveInfoItem.CONST_WAVE_NAME;
    this.itemMc.headerMC.btn_clear.visible = this.getSelectedSlot().sumOfItems > 0;
    h.AttackDialogWaveInfoHelper.showSupportWave(this.itemMc.contentMC, this.getSelectedSlot());
    if (this.contentMC.cacheCanvas) {
      this.contentMC.updateCache();
    } else {
      this.contentMC.doCache();
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.itemMc.headerMC.cbx_select:
        this.cbx.toggleSelected();
        this.controller.changeSelectionForAutoFill(AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME, this.cbx.isSelected);
        break;
      case this.itemMc.headerMC.btn_expand:
        this.expand(!this.isExpanded, false);
        this.controller.trackExpandWaves(this.isExpanded);
        break;
      case this.itemMc.headerMC.btn_clear:
        var i = this.controller.attackVO.supportItemContainer.getTotalBonusByToolEffect(l.ToolEffectType.ADDITIONAL_WAVE) > 0;
        h.AttackDialogWaveInfoHelper.clearContainer(this.controller.attackVO.supportItemContainer);
        if (i) {
          this.controller.onLordChanged.dispatch();
        }
        this.controller.updateAllWaveInfo.dispatch();
    }
    if (!this.controller.draggedUnitVO) {
      switch (t.target.parent) {
        case this.itemMc.headerMC.mc_tools:
          this.selectContainer();
      }
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.selectContainer = function () {
    this.controller.setSelectedWaveInfoSlotMC(this.controller.attackVO.supportItemContainer, null, -1, g.AttackDialogWaveHandlerSupportToolWaveInfoItem.CONST_WAVE_NAME);
    if (this.controller.selectedWaveInfoSlotContainer) {
      this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(o.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(o.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(o.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(o.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.onMouseDown = function (e) {
    if (e.target == this.itemMc.headerMC.btn_expand) {
      this.itemMc.headerMC.mc_down.visible = true;
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.onMouseUp = function (e) {
    this.itemMc.headerMC.mc_down.visible = false;
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.onMouseOver = function (e) {
    if (!s.MovieClipHelper.isChildrenOf(e.target, this.contentMC)) {
      this.controller.onMouseOverWave.dispatch(this.getSelectedSlot(), this.disp);
      if (e.target == this.itemMc.headerMC.btn_expand) {
        this.itemMc.headerMC.mc_hover.visible = true;
      }
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.onMouseOut = function (e) {
    this.controller.onMouseOutWave.dispatch(this.getSelectedSlot(), this.disp);
    this.itemMc.headerMC.mc_hover.visible = false;
    this.itemMc.headerMC.mc_down.visible = false;
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.getSelectedSlot = function () {
    return this.controller.attackVO.supportItemContainer;
  };
  Object.defineProperty(AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype, "controller", {
    get: function () {
      return p.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype, "height", {
    get: function () {
      if (this._contentMC && this._contentMC.visible) {
        return 120;
      } else {
        return this._headerMC.height;
      }
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.expand = function (t, i, n = false) {
    e.prototype.expand.call(this, t, i, n);
    this.itemMc.headerMC.arrow_right.visible = !t;
    this.itemMc.headerMC.arrow_down.visible = t;
    this.controller.addToExpandWaveTrackingTemp("RW");
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME = "support";
  return AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut;
}(c.ACollapsibleItem);
exports.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut = C;
r.classImplementsInterfaces(C, "ICollectableRendererList");