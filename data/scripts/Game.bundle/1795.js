Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./18.js");
var r = require("./346.js");
var l = require("./157.js");
var c = require("./20.js");
var u = require("./8.js");
var d = require("./63.js");
var p = require("./117.js");
var h = createjs.MouseEvent;
var g = function (e) {
  function AttackDialogWaveHandlerSupportToolWaveInfoItem(t) {
    var i = e.call(this, new (a.getDefinitionByName("WaveListItem_SupportTools"))(), t) || this;
    i.CONST_MAX_TOOL_SLOTS = 3;
    i.selectWave = false;
    i.itemMc.mc_down.visible = false;
    i.itemMc.mc_hover.visible = false;
    i.itemMc.cbx_select.gotoAndStop(3);
    i.fill();
    i.controller.onSelectedWaveInfoSlotContainerChanged.add(i.bindFunction(i.onSelectionChanged));
    i.controller.updateAllWaveInfo.add(i.bindFunction(i.fill));
    return i;
  }
  n.__extends(AttackDialogWaveHandlerSupportToolWaveInfoItem, e);
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.onSelectionChanged));
    this.controller.updateAllWaveInfo.remove(this.bindFunction(this.fill));
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.onSelectionChanged = function () {
    this.fill();
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.fill = function () {
    var e;
    u.ButtonHelper.initButtons([this.itemMc.mc_tools], c.ClickFeedbackButtonHover, 1);
    this.itemMc.mc_tools.mouseChildren = false;
    this.selectWave = false;
    e = 0;
    for (; e < this.CONST_MAX_TOOL_SLOTS; e++) {
      this.fillUnitContainer(e, this.itemMc.mc_tools, this.controller.attackVO.supportItemContainer, true);
    }
    this.itemMc.mc_selected.visible = this.controller.selectedWaveName == AttackDialogWaveHandlerSupportToolWaveInfoItem.CONST_WAVE_NAME;
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.fillUnitContainer = function (e, t, i, n) {
    var a = t["item" + e];
    var l = this.getSelectedSlot() == i;
    var c = i.items[e];
    var u = !!c.unitVO;
    var p = !c.unitVO;
    a.mc_range.visible = !n && u && c.unitVO.unitType == s.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE;
    a.mc_melee.visible = !n && u && c.unitVO.unitType == s.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE;
    o.MovieClipHelper.clearMovieClip(a.mc_icon);
    if (n && c.unitVO) {
      d.WodPicHelper.addToolEffectIcon(c.unitVO, a.mc_icon, 20, 20, 0);
    }
    a.mc_selected_plus.visible = p && l && c.isUnlocked();
    a.mc_selected_bg.visible = l;
    a.mc_error_frame.visible = c.outline != r.CastleFightItemVO.OUTLINE_NONE;
    a.mc_error_icon.visible = c.outline != r.CastleFightItemVO.OUTLINE_NONE && !c.unitVO;
    a.mc_filled_bg.visible = u && !l;
    a.mc_empty_plus.visible = p && !l && c.isUnlocked();
    a.mc_empty_bg.visible = p && !l;
    this.selectWave = this.selectWave || l;
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.itemMc.mc_tools:
      default:
        this.selectContainer();
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.selectContainer = function () {
    this.controller.setSelectedWaveInfoSlotMC(this.controller.attackVO.supportItemContainer, null, -1, AttackDialogWaveHandlerSupportToolWaveInfoItem.CONST_WAVE_NAME);
    this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(h.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(h.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(h.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(h.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.onMouseDown = function (e) {
    this.itemMc.mc_down.visible = true;
    if (e.target != this.itemMc.mc_tools) {
      this.controller.setSelectedWaveInfoSlotMC(null, null, -1, AttackDialogWaveHandlerSupportToolWaveInfoItem.CONST_WAVE_NAME);
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.onMouseUp = function (e) {
    this.itemMc.mc_down.visible = false;
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.onMouseOver = function (e) {
    this.controller.onMouseOverWave.dispatch(this.controller.attackVO.supportItemContainer, this.disp);
    this.itemMc.mc_hover.visible = true;
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.onMouseOut = function (e) {
    this.controller.onMouseOutWave.dispatch(this.controller.attackVO.supportItemContainer, this.disp);
    this.itemMc.mc_hover.visible = false;
    this.itemMc.mc_down.visible = false;
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.getSelectedSlot = function () {
    return this.controller.selectedWaveInfoSlotContainer;
  };
  Object.defineProperty(AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype, "controller", {
    get: function () {
      return p.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype, "height", {
    get: function () {
      return this.disp.height;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerSupportToolWaveInfoItem.CONST_WAVE_NAME = "support";
  return AttackDialogWaveHandlerSupportToolWaveInfoItem;
}(l.ACollapsibleItem);
exports.AttackDialogWaveHandlerSupportToolWaveInfoItem = g;
a.classImplementsInterfaces(g, "ICollectableRendererList");