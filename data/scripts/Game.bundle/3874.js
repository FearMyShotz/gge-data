Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = createjs.MouseEvent;
var a = require("./49.js");
var s = require("./2.js");
var r = require("./100.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./157.js");
var d = require("./20.js");
var p = require("./8.js");
var h = require("./117.js");
var g = require("./361.js");
var C = function (e) {
  function AttackDialogWaveHandlerWaveInfoItemFoldOut(t, i, n, o) {
    var a = e.call(this, new (l.getDefinitionByName("WaveListItem_NormalWave_Fold"))(), o) || this;
    a.CONST_MAX_FLANK_SLOTS = 2;
    a.CONST_MAX_MIDDLE_TOOL_SLOTS = 3;
    a.CONST_MAX_MIDDLE_SOLDIER_SLOTS = 6;
    a.selectWave = false;
    a.init(t, i, n);
    return a;
  }
  n.__extends(AttackDialogWaveHandlerWaveInfoItemFoldOut, e);
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.init = function (e, t, i) {
    this.waveInfo = e;
    this.waveIndex = t;
    s.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.headerMC.txt_number, new c.TextVO((this.waveIndex + 1 < 10 ? "0" : "") + (this.waveIndex + 1) + "."), new r.InternalGGSTextFieldConfigVO(true));
    this.cbx ||= new a.CheckBoxButton(this.itemMc.headerMC.cbx_select, true);
    if (i) {
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
    this.controller.onAutoFillALLSelectionChanged.add(this.bindFunction(this.updateAutoFillSelection));
    this.controller.updateAllWaveInfo.add(this.bindFunction(this.fill));
    this.controller.updateAutoFillSelections.add(this.bindFunction(this.updateAutoFillSelection));
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.onSelectionChanged));
    this.controller.onAutoFillALLSelectionChanged.remove(this.bindFunction(this.updateAutoFillSelection));
    this.controller.updateAllWaveInfo.remove(this.bindFunction(this.fill));
    this.controller.updateAutoFillSelections.remove(this.bindFunction(this.updateAutoFillSelection));
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.updateAutoFillSelection = function () {
    if (this.controller.getIsWaveSelectedForAutoFill(this.waveIndex)) {
      this.cbx.selected();
    } else {
      this.cbx.deselected();
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.onSelectionChanged = function () {
    this.fill();
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.fill = function () {
    var e;
    p.ButtonHelper.initButtons([this.itemMc.headerMC.btn_clear], d.ClickFeedbackButtonHover, 1);
    this.itemMc.headerMC.btn_expand.mouseChildren = false;
    this.itemMc.headerMC.btn_expand.actLikeButton = true;
    this.itemMc.headerMC.btn_clear.toolTipText = "deleteAll";
    this.itemMc.headerMC.mc_left_tools.gotoAndStop(1);
    this.itemMc.headerMC.mc_right_tools.gotoAndStop(1);
    this.itemMc.headerMC.mc_left_units.gotoAndStop(1);
    this.itemMc.headerMC.mc_right_units.gotoAndStop(1);
    this.itemMc.headerMC.mc_middle_tools.gotoAndStop(1);
    this.itemMc.headerMC.mc_middle_units.gotoAndStop(1);
    this.selectWave = false;
    e = 0;
    for (; e < this.CONST_MAX_FLANK_SLOTS; e++) {
      g.AttackDialogWaveInfoHelper.fillUnitContainer(e, this.itemMc.headerMC.mc_left_tools, this.waveInfo.itemsLeftWall_tools, true, false, this.waveIndex);
      g.AttackDialogWaveInfoHelper.fillUnitContainer(e, this.itemMc.headerMC.mc_right_tools, this.waveInfo.itemsRightWall_tools, true, false, this.waveIndex);
      g.AttackDialogWaveInfoHelper.fillUnitContainer(e, this.itemMc.headerMC.mc_left_units, this.waveInfo.itemsLeftWall_units, false, false, this.waveIndex);
      g.AttackDialogWaveInfoHelper.fillUnitContainer(e, this.itemMc.headerMC.mc_right_units, this.waveInfo.itemsRightWall_units, false, false, this.waveIndex);
    }
    for (e = 0; e < this.CONST_MAX_MIDDLE_TOOL_SLOTS; e++) {
      g.AttackDialogWaveInfoHelper.fillUnitContainer(e, this.itemMc.headerMC.mc_middle_tools, this.waveInfo.itemsMiddleWall_tools, true, false, this.waveIndex);
    }
    for (e = 0; e < this.CONST_MAX_MIDDLE_SOLDIER_SLOTS; e++) {
      g.AttackDialogWaveInfoHelper.fillUnitContainer(e, this.itemMc.headerMC.mc_middle_units, this.waveInfo.itemsMiddleWall_units, false, false, this.waveIndex);
    }
    this.itemMc.headerMC.mc_selected.visible = this.controller.selectedWaveIndex == this.waveIndex;
    this.itemMc.headerMC.btn_clear.visible = this.waveInfo.getSumOfItems() > 0;
    g.AttackDialogWaveInfoHelper.showNormalWave(this.itemMc.contentMC, this.waveInfo, this.waveIndex + 1);
    if (this.contentMC.cacheCanvas) {
      this.contentMC.updateCache();
    } else {
      this.contentMC.doCache();
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.itemMc.headerMC.cbx_select:
        this.cbx.toggleSelected();
        this.controller.changeSelectionForAutoFill(this.waveIndex, this.cbx.isSelected);
        break;
      case this.itemMc.headerMC.btn_expand:
        this.expand(!this.isExpanded, false);
        this.controller.trackExpandWaves(this.isExpanded);
        break;
      case this.itemMc.headerMC.btn_clear:
        g.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsLeftWall_tools);
        g.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsLeftWall_units);
        g.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsMiddleWall_tools);
        g.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsMiddleWall_units);
        g.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsRightWall_tools);
        g.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsRightWall_units);
        this.controller.updateAllWaveInfo.dispatch();
    }
    if (!this.controller.draggedUnitVO) {
      switch (t.target.parent) {
        case this.itemMc.headerMC.mc_left_tools:
          this.selectContainer(this.waveInfo.itemsLeftWall_tools);
          this.controller.openSpyInfoFlank("left");
          break;
        case this.itemMc.headerMC.mc_right_tools:
          this.selectContainer(this.waveInfo.itemsRightWall_tools);
          this.controller.openSpyInfoFlank("right");
          break;
        case this.itemMc.headerMC.mc_left_units:
          this.selectContainer(this.waveInfo.itemsLeftWall_units);
          this.controller.openSpyInfoFlank("left");
          break;
        case this.itemMc.headerMC.mc_right_units:
          this.selectContainer(this.waveInfo.itemsRightWall_units);
          this.controller.openSpyInfoFlank("right");
          break;
        case this.itemMc.headerMC.mc_middle_tools:
          this.selectContainer(this.waveInfo.itemsMiddleWall_tools);
          this.controller.openSpyInfoFlank("middle");
          break;
        case this.itemMc.headerMC.mc_middle_units:
          this.selectContainer(this.waveInfo.itemsMiddleWall_units);
          this.controller.openSpyInfoFlank("middle");
      }
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.selectContainer = function (e) {
    this.controller.setSelectedWaveInfoSlotMC(e, this.waveInfo, this.waveIndex);
    if (this.controller.selectedWaveInfoSlotContainer) {
      this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.selectForAutoFill = function (e) {
    if (e) {
      this.cbx.selected();
    } else {
      this.cbx.deselected();
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(o.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(o.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(o.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(o.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.onMouseDown = function (e) {
    if (e.target == this.itemMc.headerMC.btn_expand) {
      this.itemMc.headerMC.mc_down.visible = true;
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.onMouseUp = function (e) {
    this.itemMc.headerMC.mc_down.visible = false;
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.onMouseOver = function (e) {
    if (!s.MovieClipHelper.isChildrenOf(e.target, this.contentMC)) {
      this.controller.onMouseOverWave.dispatch(this.waveInfo, this.disp, this.waveIndex);
      if (e.target == this.itemMc.headerMC.btn_expand) {
        this.itemMc.headerMC.mc_hover.visible = true;
      }
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.onMouseOut = function (e) {
    this.controller.onMouseOutWave.dispatch(this.waveInfo, this.disp);
    this.itemMc.headerMC.mc_hover.visible = false;
    this.itemMc.headerMC.mc_down.visible = false;
  };
  Object.defineProperty(AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype, "isSelectedForAutoFill", {
    get: function () {
      return this.cbx.isSelected;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.getSelectedSlot = function () {
    return this.controller.selectedWaveInfoSlotContainer;
  };
  Object.defineProperty(AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype, "controller", {
    get: function () {
      return h.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype, "height", {
    get: function () {
      if (this._contentMC && this._contentMC.visible) {
        return 220;
      } else {
        return this._headerMC.height;
      }
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.expand = function (t, i, n = false) {
    e.prototype.expand.call(this, t, i, n);
    this.itemMc.headerMC.arrow_right.visible = !t;
    this.itemMc.headerMC.arrow_down.visible = t;
    this.controller.addToExpandWaveTrackingTemp(this.waveIndex + 1);
  };
  return AttackDialogWaveHandlerWaveInfoItemFoldOut;
}(u.ACollapsibleItem);
exports.AttackDialogWaveHandlerWaveInfoItemFoldOut = C;
l.classImplementsInterfaces(C, "ICollectableRendererList");