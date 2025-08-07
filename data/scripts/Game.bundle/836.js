Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./18.js");
var l = require("./346.js");
var c = require("./157.js");
var u = require("./20.js");
var d = require("./8.js");
var p = require("./63.js");
var h = require("./117.js");
var g = createjs.MouseEvent;
var C = function (e) {
  function AttackDialogWaveHandlerFinalYardWaveInfoItem(t, i) {
    var n = e.call(this, new (s.getDefinitionByName("WaveListItem_FinalWave"))(), i) || this;
    n.CONST_MAX_SLOTS = 8;
    n.selectWave = false;
    n.cbx = new o.CheckBoxButton(n.itemMc.cbx_select, true);
    if (t) {
      n.cbx.selected();
    } else {
      n.cbx.deselected();
    }
    n.itemMc.mc_down.visible = false;
    n.itemMc.mc_hover.visible = false;
    n.fill();
    n.controller.onSelectedWaveInfoSlotContainerChanged.add(n.bindFunction(n.onSelectionChanged));
    n.controller.updateAllWaveInfo.add(n.bindFunction(n.fill));
    n.controller.onAutoFillALLSelectionChanged.add(n.bindFunction(n.updateAutoFillSelection));
    return n;
  }
  n.__extends(AttackDialogWaveHandlerFinalYardWaveInfoItem, e);
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.onSelectionChanged));
    this.controller.updateAllWaveInfo.remove(this.bindFunction(this.fill));
    this.controller.onAutoFillALLSelectionChanged.remove(this.bindFunction(this.updateAutoFillSelection));
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.updateAutoFillSelection = function () {
    if (this.controller.getIsWaveSelectedForAutoFill(AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME)) {
      this.cbx.selected();
    } else {
      this.cbx.deselected();
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.onSelectionChanged = function () {
    this.fill();
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.fill = function () {
    var e;
    d.ButtonHelper.initButtons([this.itemMc.mc_units], u.ClickFeedbackButtonHover, 1);
    this.itemMc.mc_units.mouseChildren = false;
    this.selectWave = false;
    e = 0;
    for (; e < this.CONST_MAX_SLOTS; e++) {
      this.fillUnitContainer(e, this.itemMc.mc_units, this.controller.attackVO.yardWaveContainer, false);
    }
    this.itemMc.mc_selected.visible = this.controller.selectedWaveName == AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME;
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.fillUnitContainer = function (e, t, i, n) {
    var o = t["item" + e];
    var s = this.getSelectedSlot() == i;
    var c = i.items[e];
    var u = !!c.unitVO;
    var d = !c.unitVO;
    o.mc_range.visible = !n && u && c.unitVO.unitType == r.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE;
    o.mc_melee.visible = !n && u && c.unitVO.unitType == r.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE;
    a.MovieClipHelper.clearMovieClip(o.mc_icon);
    if (n && c.unitVO) {
      p.WodPicHelper.addToolEffectIcon(c.unitVO, o.mc_icon, 20, 20, 0);
    }
    o.mc_selected_plus.visible = d && s && c.isUnlocked();
    o.mc_selected_bg.visible = s;
    o.mc_error_frame.visible = c.outline != l.CastleFightItemVO.OUTLINE_NONE;
    o.mc_error_icon.visible = c.outline != l.CastleFightItemVO.OUTLINE_NONE && !c.unitVO;
    o.mc_filled_bg.visible = u && !s;
    o.mc_empty_plus.visible = d && !s && c.isUnlocked();
    o.mc_empty_bg.visible = d && !s;
    this.selectWave = this.selectWave || s;
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.itemMc.mc_units:
        this.selectContainer();
        break;
      case this.itemMc.cbx_select:
        this.cbx.toggleSelected();
        this.controller.changeSelectionForAutoFill(AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME, this.cbx.isSelected);
        break;
      default:
        this.selectContainer();
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.selectForAutoFill = function (e) {
    if (e) {
      this.cbx.selected();
    } else {
      this.cbx.deselected();
    }
  };
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype, "isSelectedForAutoFill", {
    get: function () {
      return this.cbx.isSelected;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.selectContainer = function () {
    this.controller.setSelectedWaveInfoSlotMC(this.controller.attackVO.yardWaveContainer, null, -1, AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME);
    if (this.controller.selectedWaveInfoSlotContainer) {
      this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
      this.controller.openSpyInfoFlank("keep");
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(g.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(g.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(g.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(g.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.onMouseDown = function (e) {
    this.itemMc.mc_down.visible = true;
    if (e.target != this.itemMc.mc_units && e.target != this.itemMc.cbx_select) {
      this.controller.setSelectedWaveInfoSlotMC(null, null, -1, AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME);
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.onMouseUp = function (e) {
    this.itemMc.mc_down.visible = false;
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.onMouseOver = function (e) {
    this.controller.onMouseOverWave.dispatch(this.controller.attackVO.yardWaveContainer, this.disp);
    this.itemMc.mc_hover.visible = true;
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.onMouseOut = function (e) {
    this.controller.onMouseOutWave.dispatch(this.controller.attackVO.yardWaveContainer, this.disp);
    this.itemMc.mc_hover.visible = false;
    this.itemMc.mc_down.visible = false;
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.getSelectedSlot = function () {
    return this.controller.selectedWaveInfoSlotContainer;
  };
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype, "controller", {
    get: function () {
      return h.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype, "height", {
    get: function () {
      return this.disp.height;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME = "yardWave";
  return AttackDialogWaveHandlerFinalYardWaveInfoItem;
}(c.ACollapsibleItem);
exports.AttackDialogWaveHandlerFinalYardWaveInfoItem = C;
s.classImplementsInterfaces(C, "ICollectableRendererList");