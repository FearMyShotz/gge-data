Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./169.js");
var s = require("./119.js");
var r = require("./15.js");
var l = require("./72.js");
var c = require("./4.js");
var u = require("./350.js");
var d = require("./2200.js");
var p = require("./340.js");
var h = require("./8.js");
var g = require("./73.js");
var C = require("./277.js");
var _ = require("./20.js");
var m = require("./237.js");
var f = createjs.MouseEvent;
var O = function (e) {
  function GeneralOverviewLordPicker(t) {
    var i = e.call(this) || this;
    i._disp = t;
    h.ButtonHelper.initButtons([t.btn_equipCommander], _.ClickFeedbackButtonHover);
    h.ButtonHelper.initButtons([t.mc_lordCombobox.btn_slider], p.ClickFeedBackHoverSliderButton, 1);
    h.ButtonHelper.initBasicButton(t.mc_lordCombobox.btn_arrow, 1);
    i._clickFeedBack = new m.ClickFeedbackHoverBehaviour(t.mc_lordCombobox.btn_arrow);
    i._lordTooltipTrigger = new b.LordEffectTooltipTrigger(i._disp.btn_equipCommander, true);
    var n = new I.SimpleScrollVO().initByParent(i._disp.mc_lordCombobox).addSliderBackground(i._disp.mc_lordCombobox.mc_sliderBackground).addMouseWheelElements([i._disp.mc_lordCombobox]);
    var o = new C.SimpleLayoutStrategyVertical(C.SimpleLayoutStrategyVertical.ALIGNMENT_BOTTOM);
    i._lordComboBox = new D.ScrollableComboboxComponent(i._disp.mc_lordCombobox, n, o);
    return i;
  }
  n.__extends(GeneralOverviewLordPicker, e);
  GeneralOverviewLordPicker.prototype.show = function (e, t) {
    this._lordComboBox.clear();
    this._lordList = e;
    this._generalVO = t;
    var i;
    var n = this._generalVO.assignedLord;
    var o = false;
    for (var a = e.length - 1; a >= 0; a--) {
      var l = e[a];
      i = new d.ScrollableComboboxItemGeneralOverviewLord(l);
      if (n && n.id == l.id) {
        i.setSelected(true);
        o = true;
      } else {
        i.setSelected(false);
      }
      this._lordComboBox.addItem(i);
    }
    i = new d.ScrollableComboboxItemGeneralOverviewLord(null);
    if (!o) {
      i.setSelected(true);
    }
    this._lordComboBox.addItem(i);
    if (n) {
      this._lordComboBox.enableComponent(n.isAvailableForGeneralAssignement);
      this._lordComboBox.disp.mouseChildren = n.isAvailableForGeneralAssignement;
      this._lordComboBox.disp.toolTipText = n.isAvailableForGeneralAssignement ? null : {
        t: "dialog_generals_generalTravelling_tooltip",
        p: [n.assignedGeneralVO.nameTextShort]
      };
    } else {
      this._lordComboBox.enableComponent(true);
      this._lordComboBox.disp.mouseChildren = true;
      this._lordComboBox.disp.toolTipText = null;
    }
    this._lordTooltipTrigger.show();
    this._lordComboBox.onShow();
    this.updateDisp();
    this._lordComboBox.onSelectSignal.add(this.bindFunction(this.onSelectLord));
    this._clickFeedBack.addEventListener();
    this._disp.btn_equipCommander.addEventListener(f.CLICK, this.bindFunction(this.onEquipClick));
    r.CastleBasicController.getInstance().addEventListener(s.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onEquipOrRename));
  };
  GeneralOverviewLordPicker.prototype.hide = function () {
    this._lordTooltipTrigger.hide();
    this._lordComboBox.onHide();
    this._lordComboBox.onSelectSignal.remove(this.bindFunction(this.onSelectLord));
    this._clickFeedBack.removeEventListener();
    this._disp.btn_equipCommander.removeEventListener(f.CLICK, this.bindFunction(this.onEquipClick));
    r.CastleBasicController.getInstance().removeEventListener(s.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onEquipOrRename));
  };
  GeneralOverviewLordPicker.prototype.onSelectLord = function (e) {
    this.updateDisp();
    this.dispatchEvent(new a.BasicPickerEvent(a.BasicPickerEvent.PICKER_CHANGE_VALUE));
  };
  GeneralOverviewLordPicker.prototype.onEquipOrRename = function (e) {
    this._lordComboBox.selectItem(this._lordComboBox.selectedItem, true);
  };
  GeneralOverviewLordPicker.prototype.onEquipClick = function (e) {
    if (h.ButtonHelper.isButtonEnabled(this._disp.btn_equipCommander) && !c.CastleModel.tutorialData.isTutorialActive && this.selectedLord) {
      E.CastleDialogHandler.getInstance().registerDefaultDialogs(y.CastleEquipmentDialog, new u.CastleEquipmentDialogProperties(null, this.selectedLord ? this.selectedLord.id : -1, this.selectedLord.isBaron));
    }
  };
  GeneralOverviewLordPicker.prototype.updateDisp = function () {
    var e = this.selectedLord;
    h.ButtonHelper.enableButton(this._disp.btn_equipCommander, true);
    this.addLordIcon(e);
    h.ButtonHelper.enableButton(this._disp.btn_equipCommander, e && e.isAvailableForEquip);
    this._disp.btn_equipCommander.mouseEnabled = !!e;
  };
  GeneralOverviewLordPicker.prototype.addLordIcon = function (e) {
    o.MovieClipHelper.clearMovieClip(this._disp.btn_equipCommander.mc_lordHolder);
    if (e) {
      g.EquipmentIconHelper.addLordIcon(e, this._disp.btn_equipCommander.mc_lordHolder, 106, -1, null, false);
    }
    if (this._disp.btn_equipCommander.mc_empty) {
      this._disp.btn_equipCommander.mc_empty.visible = !e;
    }
  };
  Object.defineProperty(GeneralOverviewLordPicker.prototype, "lordTooltipTrigger", {
    get: function () {
      return this._lordTooltipTrigger;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralOverviewLordPicker.prototype, "selectedLord", {
    get: function () {
      if (this._lordComboBox.selectedItem) {
        return this._lordComboBox.selectedItem.data;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return GeneralOverviewLordPicker;
}(l.CastleEventDispatcher);
exports.GeneralOverviewLordPicker = O;
var E = require("./9.js");
var y = require("./246.js");
var b = require("./298.js");
var D = require("./2202.js");
var I = require("./47.js");