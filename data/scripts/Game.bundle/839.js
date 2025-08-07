Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = createjs.MouseEvent;
var a = require("./49.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./157.js");
var c = require("./20.js");
var u = require("./8.js");
var d = require("./115.js");
var p = require("./361.js");
var h = require("./838.js");
var g = function (e) {
  function AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut(t, i) {
    var n = e.call(this, new (r.getDefinitionByName("WaveListItem_FinalWave_FoldBig"))(), i) || this;
    n.CONST_MAX_SLOTS = 8;
    n.selectWave = false;
    n.cbx = new a.CheckBoxButton(n.itemMc.headerMC.cbx_select, true);
    n.init(t);
    return n;
  }
  n.__extends(AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut, e);
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.init = function (e) {
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
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.onSelectionChanged));
    this.controller.updateAllWaveInfo.remove(this.bindFunction(this.fill));
    this.controller.onAutoFillALLSelectionChanged.remove(this.bindFunction(this.updateAutoFillSelection));
    this.controller.updateAutoFillSelections.remove(this.bindFunction(this.updateAutoFillSelection));
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.updateAutoFillSelection = function () {
    if (this.controller.getIsWaveSelectedForAutoFill(AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME)) {
      this.cbx.selected();
    } else {
      this.cbx.deselected();
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.onSelectionChanged = function () {
    this.fill();
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.fill = function () {
    var e;
    u.ButtonHelper.initButtons([this.itemMc.headerMC.btn_clear], c.ClickFeedbackButtonHover, 1);
    this.itemMc.headerMC.btn_expand.mouseChildren = false;
    this.itemMc.headerMC.btn_expand.actLikeButton = true;
    this.itemMc.headerMC.btn_clear.toolTipText = "deleteAll";
    this.itemMc.headerMC.mc_units.gotoAndStop(1);
    this.selectWave = false;
    e = 0;
    for (; e < this.CONST_MAX_SLOTS; e++) {
      p.AttackDialogWaveInfoHelper.fillUnitContainer(e, this.itemMc.headerMC.mc_units, this.controller.attackVO.yardWaveContainer, false);
    }
    this.itemMc.headerMC.mc_selected.visible = this.controller.selectedWaveName == h.AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME;
    this.itemMc.headerMC.btn_clear.visible = this.getSelectedSlot().sumOfItems > 0;
    p.AttackDialogWaveInfoHelper.showFinalWave(this.itemMc.contentMC, this.getSelectedSlot());
    if (this.contentMC.cacheCanvas) {
      this.contentMC.updateCache();
    } else {
      this.contentMC.doCache();
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.itemMc.headerMC.cbx_select:
        this.cbx.toggleSelected();
        this.controller.changeSelectionForAutoFill(h.AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME, this.cbx.isSelected);
        break;
      case this.itemMc.headerMC.btn_expand:
        this.expand(!this.isExpanded, false);
        this.controller.trackExpandWaves(this.isExpanded);
        break;
      case this.itemMc.headerMC.btn_clear:
        p.AttackDialogWaveInfoHelper.clearContainer(this.controller.attackVO.yardWaveContainer);
        this.controller.updateAllWaveInfo.dispatch();
    }
    if (!this.controller.draggedUnitVO) {
      switch (t.target.parent) {
        case this.itemMc.headerMC.mc_units:
          this.selectContainer();
      }
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.selectContainer = function () {
    this.controller.setSelectedWaveInfoSlotMC(this.getSelectedSlot(), null, -1, h.AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME);
    if (this.controller.selectedWaveInfoSlotContainer) {
      this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
      this.controller.openSpyInfoFlank("keep");
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(o.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(o.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(o.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(o.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.onMouseDown = function (e) {
    if (e.target == this.itemMc.headerMC.btn_expand) {
      this.itemMc.headerMC.mc_down.visible = true;
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.onMouseUp = function (e) {
    this.itemMc.headerMC.mc_down.visible = false;
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.onMouseOver = function (e) {
    if (!s.MovieClipHelper.isChildrenOf(e.target, this.contentMC)) {
      this.controller.onMouseOverWave.dispatch(this.getSelectedSlot(), this.disp);
      if (e.target == this.itemMc.headerMC.btn_expand) {
        this.itemMc.headerMC.mc_hover.visible = true;
      }
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.onMouseOut = function (e) {
    this.controller.onMouseOutWave.dispatch(this.getSelectedSlot(), this.disp);
    this.itemMc.headerMC.mc_hover.visible = false;
    this.itemMc.headerMC.mc_down.visible = false;
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.getSelectedSlot = function () {
    return this.controller.attackVO.yardWaveContainer;
  };
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype, "controller", {
    get: function () {
      return d.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype, "height", {
    get: function () {
      if (this._contentMC && this._contentMC.visible) {
        return 90;
      } else {
        return this._headerMC.height;
      }
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.expand = function (t, i, n = false) {
    e.prototype.expand.call(this, t, i, n);
    this.itemMc.headerMC.arrow_right.visible = !t;
    this.itemMc.headerMC.arrow_down.visible = t;
    this.controller.addToExpandWaveTrackingTemp("RW");
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME = "yardWave";
  return AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut;
}(l.ACollapsibleItem);
exports.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut = g;
r.classImplementsInterfaces(g, "ICollectableRendererList");