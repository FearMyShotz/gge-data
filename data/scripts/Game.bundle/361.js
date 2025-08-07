Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./346.js");
var r = require("./181.js");
var l = require("./20.js");
var c = require("./8.js");
var u = require("./63.js");
var d = require("./115.js");
var p = require("./1796.js");
var h = createjs.Point;
var g = createjs.Event;
var C = function () {
  function AttackDialogWaveInfoHelper() {}
  AttackDialogWaveInfoHelper.showSupportWave = function (e, t) {
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_title, new a.LocalizedTextVO("supportTools"), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_copy, new a.LocalizedTextVO("dialog_attack_rework2022_supportTools_allWaves_desc"), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_amount, new a.LocalizedTextVO("numbersXY", [t.sumOfItems, 3]), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_tools, new a.LocalizedTextVO("dialog_battleLogDetails_vsDialog_tools"), new n.InternalGGSTextFieldConfigVO(true));
    this.fillToolEffects("support", t, e);
  };
  AttackDialogWaveInfoHelper.showFinalWave = function (e, t) {
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_title, new a.LocalizedTextVO("finalWave"), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_copy, new a.LocalizedTextVO("dialog_battleLogDetail_finalWave"), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_amount, new a.LocalizedTextVO("numbersXY", [t.sumOfItems, t.maxItems]), new n.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_units, new a.LocalizedTextVO("dialog_battleLogDetails_vsDialog_units"), new n.InternalGGSTextFieldConfigVO(true));
    this.fillStrength(e.mc_melee, true, t, true);
    this.fillStrength(e.mc_range, false, t, true);
  };
  AttackDialogWaveInfoHelper.showNormalWave = function (e, t, i) {
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_title, new a.LocalizedTextVO("dialog_attack_rework2022_numberedWave_tooltip", [i]), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_title_left, new a.LocalizedTextVO("dialog_defence_leftFlank"), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_title_middle, new a.LocalizedTextVO("dialog_defence_middleFlank"), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_title_right, new a.LocalizedTextVO("dialog_defence_rightFlank"), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_left_amount_units, new a.LocalizedTextVO("numbersXY", [t.itemsLeftWall_units.sumOfItems, t.itemsLeftWall_units.maxItems]), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_left_amount_tools, new a.LocalizedTextVO("numbersXY", [t.itemsLeftWall_tools.sumOfItems, t.itemsLeftWall_tools.maxItems]), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_right_amount_units, new a.LocalizedTextVO("numbersXY", [t.itemsRightWall_units.sumOfItems, t.itemsRightWall_units.maxItems]), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_right_amount_tools, new a.LocalizedTextVO("numbersXY", [t.itemsRightWall_tools.sumOfItems, t.itemsRightWall_tools.maxItems]), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_middle_amount_units, new a.LocalizedTextVO("numbersXY", [t.itemsMiddleWall_units.sumOfItems, t.itemsMiddleWall_units.maxItems]), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_middle_amount_tools, new a.LocalizedTextVO("numbersXY", [t.itemsMiddleWall_tools.sumOfItems, t.itemsMiddleWall_tools.maxItems]), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_left_tools, new a.LocalizedTextVO("dialog_battleLogDetails_vsDialog_tools"), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_middle_tools, new a.LocalizedTextVO("dialog_battleLogDetails_vsDialog_tools"), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_right_tools, new a.LocalizedTextVO("dialog_battleLogDetails_vsDialog_tools"), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_left_units, new a.LocalizedTextVO("dialog_battleLogDetails_vsDialog_units"), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_middle_units, new a.LocalizedTextVO("dialog_battleLogDetails_vsDialog_units"), new n.InternalGGSTextFieldConfigVO(true));
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_right_units, new a.LocalizedTextVO("dialog_battleLogDetails_vsDialog_units"), new n.InternalGGSTextFieldConfigVO(true));
    this.fillToolEffects("left", t.itemsLeftWall_tools, e);
    this.fillToolEffects("middle", t.itemsMiddleWall_tools, e);
    this.fillToolEffects("right", t.itemsRightWall_tools, e);
    this.fillStrength(e.mc_left_unit_strength_0, true, t.itemsLeftWall_units, false, true);
    this.fillStrength(e.mc_left_unit_strength_1, false, t.itemsLeftWall_units, false, true);
    this.fillStrength(e.mc_right_unit_strength_0, true, t.itemsRightWall_units, false, true);
    this.fillStrength(e.mc_right_unit_strength_1, false, t.itemsRightWall_units, false, true);
    this.fillStrength(e.mc_middle_unit_strength_0, true, t.itemsMiddleWall_units, false, false, true);
    this.fillStrength(e.mc_middle_unit_strength_1, false, t.itemsMiddleWall_units, false, false, true);
  };
  AttackDialogWaveInfoHelper.fillStrength = function (e, t, i, o, s, r) {
    var l;
    if (o === undefined) {
      o = false;
    }
    if (s === undefined) {
      s = false;
    }
    if (r === undefined) {
      r = false;
    }
    e.mc_melee.visible = t;
    e.mc_range.visible = !t;
    l = t ? i.getAttackMeleeValue(this.controller.selectedLord, this.controller.attackVO.targetArea, o, s, r) : i.getAttackRangeValue(this.controller.selectedLord, this.controller.attackVO.targetArea, o, s, r);
    e.toolTipText = t ? "attackpower_melee" : "attackpower_range";
    e.mouseChildren = false;
    n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_copy, new a.LocalizedNumberVO(l), new n.InternalGGSTextFieldConfigVO(true));
  };
  AttackDialogWaveInfoHelper.fillToolEffects = function (e, t, i) {
    var n;
    var o = new Map();
    for (var a = 0; a < t.items.length; a++) {
      var s = t.items[a].unitVO;
      if (s) {
        for (var r = 0; r < s.effectTypes.length; r++) {
          var l = s.getDisplayedBonusByEffect(s.effectTypes[r], t.getAmountOfToolInContainer(s));
          var c = s.effectTypes[r];
          if (o.has(c)) {
            o.set(c, o.get(c) + l);
          } else {
            o.set(c, l);
          }
        }
      }
    }
    var u = Array.from(o.entries());
    for (var d = 0; d < 6; d++) {
      n = i["mc_" + e + "_tool_effect_" + d];
      if (d < u.length) {
        n.visible = true;
        this.addSummedEffectIconAndText(u[d][0], n, u[d][1]);
      } else if (n) {
        n.visible = false;
      }
    }
  };
  AttackDialogWaveInfoHelper.addSummedEffectIconAndText = function (e, t, i) {
    n.MovieClipHelper.clearMovieClip(t.mc_icon);
    u.WodPicHelper.addIcon(e.iconClass, t.mc_icon, 18, 18);
    var o = i >= 0 ? n.GenericTextIds.VALUE_PERCENTAGE_ADD : n.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT;
    var s = i >= 0 ? n.GenericTextIds.VALUE_NOMINAL_ADD : n.GenericTextIds.VALUE_NOMINAL_SUBTRACT;
    if (e.hasAbsoluteBonus) {
      n.GoodgameTextFieldManager.getInstance().registerTextField(t.txt_value, new a.LocalizedTextVO(s, [Math.abs(i)]), new n.InternalGGSTextFieldConfigVO(true));
    } else {
      n.GoodgameTextFieldManager.getInstance().registerTextField(t.txt_value, new a.LocalizedTextVO(o, [Math.abs(i)], true), new n.InternalGGSTextFieldConfigVO(true));
    }
    t.mouseChildren = false;
    t.toolTipText = e.tooltipTextId;
  };
  AttackDialogWaveInfoHelper.fillUnitMC = function (e, t, i) {
    if (!c.ButtonHelper.getBasicButton(t)) {
      c.ButtonHelper.initButton(t, 1, l.ClickFeedbackButtonHover);
    }
    t.unitVO = null;
    t.mouseEnabled = false;
    t.mc_unit.mc_selected.visible = false;
    t.mc_unit.mc_error_bg.visible = false;
    t.mc_selected_unit_add.visible = false;
    t.mc_unit_add.visible = false;
    t.mc_selected_tool_add.visible = false;
    t.mc_tool_add.visible = false;
    t.mc_selected.visible = false;
    t.mc_empty.visible = false;
    t.mc_empty_locked.visible = false;
    t.mc_empty_locked_selected.visible = false;
    t.mc_error.visible = false;
    if (!e || !e.isUnlocked()) {
      t.mc_unit.visible = false;
      t.mc_empty_locked.visible = !i;
      t.mc_empty_locked_selected.visible = i;
      return;
    }
    var o = e.unitVO;
    var d = !o;
    t.mc_unit.visible = true;
    t.unitVO = o;
    t.mouseChildren = false;
    t.mouseEnabled = true;
    if (d) {
      t.mc_unit.visible = false;
      t.mc_selected_unit_add.visible = i && e.slotType == r.ToolUnitVO.SLOTTYPE_SOLDIER;
      t.mc_unit_add.visible = !i && e.slotType == r.ToolUnitVO.SLOTTYPE_SOLDIER;
      t.mc_unit.mc_error_bg.visible = e.outline != s.CastleFightItemVO.OUTLINE_NONE;
      t.mc_selected_tool_add.visible = i && e.slotType != r.ToolUnitVO.SLOTTYPE_SOLDIER;
      t.mc_tool_add.visible = !i && e.slotType != r.ToolUnitVO.SLOTTYPE_SOLDIER;
      t.mc_selected.visible = i;
      t.mc_empty.visible = !i;
      t.mouseEnabled = false;
      return;
    }
    t.mouseEnabled = true;
    t.mc_unit.mc_error_bg.visible = e.outline != s.CastleFightItemVO.OUTLINE_NONE;
    t.mc_unit.mc_selected.visible = i;
    n.GoodgameTextFieldManager.getInstance().registerTextField(t.mc_unit.txt_amount, new a.LocalizedNumberVO(e.getAmount()), new n.InternalGGSTextFieldConfigVO(true));
    u.WodPicHelper.addPlayerUnitPicToContainer(o, t.mc_unit, 36, 36, 36, 36, 15, new h(-20, 20), true, null, t.mc_unit.mc_unitLevel);
    t.toolTipText = o.getNameString();
  };
  Object.defineProperty(AttackDialogWaveInfoHelper, "controller", {
    get: function () {
      return d.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveInfoHelper.fillUnitContainer = function (e, t, i, o, C = false, _ = -1) {
    var m;
    var f = t["item" + e];
    var O = this.getSelectedSlot() == i;
    var E = i.items[e];
    var y = !!E.unitVO;
    var b = !E.unitVO;
    var D = E.unitVO;
    c.ButtonHelper.initButton(f, 1, l.ClickFeedbackButtonHover);
    f.mouseChildren = false;
    f.gotoAndStop(1);
    f.mc_unit.visible = y;
    f.mc_unit.mc_selected.visible = O && y;
    f.mc_unit.mc_error_bg.visible = E.outline != s.CastleFightItemVO.OUTLINE_NONE;
    f.mc_error.visible = E.outline != s.CastleFightItemVO.OUTLINE_NONE && b && E.isUnlocked();
    f.mc_selected_unit_add.visible = O && !o && b && E.isUnlocked();
    f.mc_selected_tool_add.visible = O && o && b && E.isUnlocked();
    f.mc_selected.visible = O && b && E.isUnlocked();
    f.mc_unit_add.visible = !O && !o && b && E.isUnlocked();
    f.mc_tool_add.visible = !O && o && b && E.isUnlocked();
    f.mc_empty.visible = !O && b && E.isUnlocked();
    f.mc_empty_locked_selected.visible = O && b && !E.isUnlocked();
    f.mc_empty_locked.visible = !O && b && !E.isUnlocked();
    if (y) {
      var I = d.AttackDialogController.getInstance().isWaveDetailView ? 60 : 36;
      var T = d.AttackDialogController.getInstance().isWaveDetailView ? 20 : 15;
      n.GoodgameTextFieldManager.getInstance().registerTextField(f.mc_unit.txt_amount, new a.LocalizedNumberVO(E.getAmount()), new n.InternalGGSTextFieldConfigVO(true));
      u.WodPicHelper.addPlayerUnitPicToContainer(D, f.mc_unit, I, I, I, I, T, new h(-20, 20), true, null, f.mc_unit.mc_unitLevel);
      f.toolTipText = D.getNameString();
      f.timeline.removeAllEventListeners(g.CHANGE);
      f.timeline.addEventListener(g.CHANGE, AttackDialogWaveInfoHelper.getOnFrameChange(f, i));
      c.ButtonHelper.getBasicButton(f).addMouseEventListener();
      if (f.mc_unit.mc_toolType) {
        if (D instanceof r.ToolUnitVO) {
          f.mc_unit.mc_toolType.visible = true;
          f.mc_unit.mc_toolType.gotoAndStop(AttackDialogWaveInfoHelper.getToolIconFrame(D.toolCategory));
        } else {
          f.mc_unit.mc_toolType.visible = false;
        }
      }
    } else if (b && E.isUnlocked()) {
      f.toolTipText = C ? "dialog_attack_rework2022_slot_supportTools_tooltip" : o ? "dialog_attack_rework2022_slot_tools_tooltip" : "dialog_attack_rework2022_slot_units_tooltip";
      f.timeline.removeAllEventListeners(g.CHANGE);
      f.timeline.addEventListener(g.CHANGE, AttackDialogWaveInfoHelper.getOnFrameChange(f, i));
      c.ButtonHelper.getBasicButton(f).addMouseEventListener();
    } else {
      f.toolTipText = "dialog_attack_rework2022_slot_unavailable_tooltip";
      f.timeline.removeAllEventListeners(g.CHANGE);
      c.ButtonHelper.getBasicButton(f).removeMouseEventListener();
    }
    if (f.dragTarget) {
      m = f.dragTarget;
    } else {
      m = new p.AttackDialogDragTarget(f);
      f.dragTarget = m;
    }
    m.init(e, i, o, C, _);
  };
  AttackDialogWaveInfoHelper.getOnFrameChange = function (e, t) {
    return function (i) {
      var n = 0;
      var o = e.parent;
      for (var a = o["item" + n]; a;) {
        if (t.items[n].isUnlocked()) {
          a.timeline.removeAllEventListeners(g.CHANGE);
          a.gotoAndStop(e.currentFrame + 1);
          a.timeline.addEventListener(g.CHANGE, AttackDialogWaveInfoHelper.getOnFrameChange(a, t));
        }
        a = o["item" + ++n];
      }
    };
  };
  AttackDialogWaveInfoHelper.getToolIconFrame = function (e) {
    return AttackDialogWaveInfoHelper.TOOL_CATEGORIES.indexOf(e) + 1;
  };
  AttackDialogWaveInfoHelper.getSelectedSlot = function () {
    return this.controller.selectedWaveInfoSlotContainer;
  };
  AttackDialogWaveInfoHelper.clearContainer = function (e) {
    for (var t = 0, i = e.items; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        this.clearSlot(n);
      }
    }
  };
  AttackDialogWaveInfoHelper.clearSlot = function (e) {
    if (e.unitVO) {
      d.AttackDialogController.getInstance().attackVO.unitInventory.addUnit(e.unitVO.wodId, e.unitVO.inventoryAmount);
    }
    e.unitVO = null;
    e.outline = s.CastleFightItemVO.OUTLINE_NONE;
  };
  AttackDialogWaveInfoHelper.TOOL_CATEGORIES = ["basic", "premium", "elite", "event", "combo"];
  return AttackDialogWaveInfoHelper;
}();
exports.AttackDialogWaveInfoHelper = C;
o.classImplementsInterfaces(C, "ICollectableRendererList");