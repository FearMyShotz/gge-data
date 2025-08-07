Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./57.js");
var l = require("./13.js");
var c = require("./8.js");
var u = function () {
  function ABasicFilterPanel(e, t) {
    this.changed = new r.Signal();
    this._disp = e;
    this._emptyFilterMC = t;
    c.ButtonHelper.initButtons([this._disp.btn_reset, this._disp.btn_filter], p.ClickFeedbackButton, 1);
    c.ButtonHelper.initButtons([this._disp.mc_input.btn_del], h.ClickFeedbackButtonHover);
    c.ButtonHelper.initCheckBoxes([this._disp.cbx_set, this._disp.cbx_favorite]);
    this.cbx_set = c.ButtonHelper.getBasicButton(this._disp.cbx_set);
    this.cbx_favorite = c.ButtonHelper.getBasicButton(this._disp.cbx_favorite);
    this._disp.btn_filter.mc_arrow.gotoAndStop(1);
    this._disp.mc_input.txt_input.type = o.TextFieldType.INPUT;
    this.textFieldManager.registerTextField(this._disp.btn_reset.txt_value, new a.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("equipmentFilter_reset")));
    this._disp.btn_filter.toolTipText = "filterPanel_collapse";
    this._disp.btn_reset.toolTipText = "equipmentFilter_reset_tt";
    this._disp.cbx_favorite.toolTipText = "equipmentFilter_favorites";
    this.updateSetButtonToolTip();
  }
  ABasicFilterPanel.prototype.toggleShowHideSetsOption = function (e, t) {
    this._disp.icon_set.visible = e;
    this._disp.cbx_set.visible = e;
    if (t && !e) {
      this._disp.cbx_favorite.x -= this._disp.cbx_favorite.width / 4;
      this._disp.icon_favorite.x -= this._disp.icon_favorite.width / 4;
    }
  };
  ABasicFilterPanel.prototype.updateSetButtonToolTip = function () {
    if (d.instanceOfClass(this._selectedLord, "CommanderVO")) {
      this._disp.cbx_set.toolTipText = "equipmentFilter_setPieces_" + this.setButtonWordID() + "_com_tt";
    }
    if (d.instanceOfClass(this._selectedLord, "BaronVO")) {
      this._disp.cbx_set.toolTipText = "equipmentFilter_setPieces_" + this.setButtonWordID() + "_cast_tt";
    }
  };
  ABasicFilterPanel.prototype.setButtonWordID = function () {
    return "";
  };
  ABasicFilterPanel.prototype.showEmptyFilterMC = function () {
    this._emptyFilterMC.visible = true;
    this.textFieldManager.registerTextField(this._emptyFilterMC.txt_none, new a.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("equipmentFilter_empty")));
  };
  ABasicFilterPanel.prototype.hideEmptyFilterMC = function () {
    this._emptyFilterMC.visible = false;
  };
  ABasicFilterPanel.prototype.onClick = function (e) {
    switch (e.target) {
      case this._disp.cbx_set:
        this.toggleCheckbox(this.cbx_set);
        this._disp.mc_blockInput.visible = this.cbx_set.isSelected;
        break;
      case this._disp.cbx_favorite:
        this.toggleCheckbox(this.cbx_favorite);
        break;
      case this._disp.btn_filter:
        this.hide();
        break;
      case this._disp.btn_reset:
        this.reset(true);
        break;
      case this._disp.mc_input.btn_del:
        this.resetInputTextField();
        this.changed.dispatch();
    }
  };
  ABasicFilterPanel.prototype.onTyping = function (e) {
    this.changed.dispatch();
  };
  ABasicFilterPanel.prototype.onFocusIn = function (e) {
    if (e == this.tf_input && this.tf_input.text == this.defaultSearchString) {
      this.tf_input.textContentVO.stringValue = "";
    }
    var t = e.originalTextField.parent.mc_selected;
    var i = e.originalTextField.parent.btn_del;
    var n = e.originalTextField.parent.mc_input;
    if (t) {
      t.visible = true;
    }
    if (i) {
      i.visible = true;
      if (n) {
        n.visible = !i.visible;
      }
    }
  };
  ABasicFilterPanel.prototype.onFocusOut = function (e) {
    if (e == this.tf_input && (this.searchString == "" || this.searchString == this.defaultSearchString)) {
      this.resetInputTextField();
    }
    var t = e.originalTextField.parent.mc_selected;
    if (t) {
      t.visible = false;
    }
  };
  ABasicFilterPanel.prototype.show = function () {
    this._disp.visible = true;
    this.tf_input.keyUp.add(this.bindFunction(this.onTyping));
    this.tf_input.focusIn.add(this.bindFunction(this.onFocusIn));
    this.tf_input.focusOut.add(this.bindFunction(this.onFocusOut));
    this.changed.dispatch();
  };
  ABasicFilterPanel.prototype.hide = function () {
    this._disp.visible = false;
    this.tf_input.keyUp.remove(this.bindFunction(this.onTyping));
    this.tf_input.focusIn.remove(this.bindFunction(this.onFocusIn));
    this.tf_input.focusOut.remove(this.bindFunction(this.onFocusOut));
  };
  ABasicFilterPanel.prototype.toggleCheckbox = function (e) {
    e.toggleSelected();
    this.changed.dispatch();
  };
  ABasicFilterPanel.prototype.reset = function (e = false) {
    this.cbx_set.deselected();
    this.cbx_favorite.deselected();
    this._disp.mc_blockInput.visible = false;
    this.resetInputTextField();
    if (e) {
      this.changed.dispatch();
    }
  };
  ABasicFilterPanel.prototype.resetInputTextField = function () {
    this.tf_input ||= this.textFieldManager.registerTextField(this._disp.mc_input.txt_input, new a.TextVO(""));
    this.tf_input.textContentVO.stringValue = this.defaultSearchString;
    this._disp.mc_input.mc_selected.visible = false;
    this._disp.mc_input.mc_input.visible = true;
    this._disp.mc_input.btn_del.visible = false;
  };
  Object.defineProperty(ABasicFilterPanel.prototype, "searchString", {
    get: function () {
      if (this.tf_input.text == this.defaultSearchString) {
        return "";
      } else {
        return this.tf_input.text;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicFilterPanel.prototype, "defaultSearchString", {
    get: function () {
      return s.Localize.text("generic_btn_search");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicFilterPanel.prototype, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicFilterPanel.prototype, "selectedLord", {
    set: function (e) {
      this._selectedLord = e;
      this.updateSetButtonToolTip();
    },
    enumerable: true,
    configurable: true
  });
  return ABasicFilterPanel;
}();
exports.ABasicFilterPanel = u;
var d = require("./1.js");
var p = require("./36.js");
var h = require("./20.js");