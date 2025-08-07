Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./127.js");
var l = require("./8.js");
var c = function (e) {
  function GemFilterPanel(t, i) {
    var n = e.call(this, t, i) || this;
    l.ButtonHelper.initCheckBoxes([n._disp.cbx_unique, n._disp.cbx_relic]);
    n.cbx_unique = l.ButtonHelper.getBasicButton(n._disp.cbx_unique);
    n.cbx_relic = l.ButtonHelper.getBasicButton(n._disp.cbx_relic);
    n._disp.cbx_relic.toolTipText = "equipment_rarity_relic";
    n._disp.cbx_unique.toolTipText = "equipment_rarity_unique";
    n.reset();
    return n;
  }
  n.__extends(GemFilterPanel, e);
  GemFilterPanel.prototype.setButtonWordID = function () {
    return "gem";
  };
  GemFilterPanel.prototype.resetInputTextFields = function () {
    if (!this.tf_input_min) {
      this.tf_input_min = this.textFieldManager.registerTextField(this._disp.mc_min.txt_input, new a.TextVO("0"));
      this.tf_input_min.restrict = "0-9";
      this._disp.mc_min.txt_input.type = o.TextFieldType.INPUT;
    }
    if (!this.tf_input_max) {
      this.tf_input_max = this.textFieldManager.registerTextField(this._disp.mc_max.txt_input, new a.TextVO("13"));
      this.tf_input_max.restrict = "0-9";
      this._disp.mc_max.txt_input.type = o.TextFieldType.INPUT;
    }
    this.tf_input_min.textContentVO.stringValue = "0";
    this.tf_input_max.textContentVO.stringValue = "13";
    this._disp.mc_min.mc_selected.visible = false;
    this._disp.mc_max.mc_selected.visible = false;
  };
  GemFilterPanel.prototype.show = function () {
    e.prototype.show.call(this);
    this.tf_input_min.keyUp.add(this.bindFunction(this.onTypingLevel));
    this.tf_input_min.focusOut.add(this.bindFunction(this.onFocusOutLevel));
    this.tf_input_min.focusIn.add(this.bindFunction(this.onFocusIn));
    this.tf_input_min.focusOut.add(this.bindFunction(this.onFocusOut));
    this.tf_input_max.keyUp.add(this.bindFunction(this.onTypingLevel));
    this.tf_input_max.focusOut.add(this.bindFunction(this.onFocusOutLevel));
    this.tf_input_max.focusIn.add(this.bindFunction(this.onFocusIn));
    this.tf_input_max.focusOut.add(this.bindFunction(this.onFocusOut));
  };
  GemFilterPanel.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.tf_input_min.keyUp.remove(this.bindFunction(this.onTypingLevel));
    this.tf_input_min.focusOut.remove(this.bindFunction(this.onFocusOutLevel));
    this.tf_input_min.focusIn.remove(this.bindFunction(this.onFocusIn));
    this.tf_input_min.focusOut.remove(this.bindFunction(this.onFocusOut));
    this.tf_input_max.keyUp.remove(this.bindFunction(this.onTypingLevel));
    this.tf_input_max.focusOut.remove(this.bindFunction(this.onFocusOutLevel));
    this.tf_input_max.focusIn.remove(this.bindFunction(this.onFocusIn));
    this.tf_input_max.focusOut.remove(this.bindFunction(this.onFocusOut));
  };
  GemFilterPanel.prototype.checkLevelInput = function () {
    var e = Math.min(13, Math.max(parseInt(this.tf_input_min.text), 0));
    this.tf_input_min.textContentVO.stringValue = e.toString();
    e = Math.min(13, Math.max(parseInt(this.tf_input_max.text), 0));
    this.tf_input_max.textContentVO.stringValue = e.toString();
    this.changed.dispatch();
  };
  GemFilterPanel.prototype.onTypingLevel = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    this.checkLevelInput();
  };
  GemFilterPanel.prototype.onFocusOutLevel = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    this.checkLevelInput();
  };
  GemFilterPanel.prototype.filter = function (e) {
    var t = [];
    for (var i = 0; i < e.length; i++) {
      if (e[i] && (!this.cbx_favorite.isSelected || this.checkForFavorite(e[i]))) {
        if (u.instanceOfClass(e[i], "RelicGemVO")) {
          var n = e[i];
          if (n.lordType == r.BasicEquippableVO.LORD_TYPE_BARON && !u.instanceOfClass(this._selectedLord, "BaronVO") || n.lordType != r.BasicEquippableVO.LORD_TYPE_BARON && u.instanceOfClass(this._selectedLord, "BaronVO")) {
            continue;
          }
        }
        if (this.cbx_set.isSelected) {
          if (!this.checkForSetID(e[i], this._selectedLord)) {
            continue;
          }
        } else {
          if (!this.eqFitsRareness(e[i])) {
            continue;
          }
          if (this.searchString != "" && !this.searchForNameString(e[i])) {
            continue;
          }
        }
        t.push(e[i]);
      }
    }
    return t;
  };
  GemFilterPanel.prototype.eqFitsRareness = function (e) {
    if (u.instanceOfClass(e, "RelicGemVO")) {
      return this.cbx_relic.isSelected;
    }
    var t = e;
    if (t.isUnique) {
      return this.cbx_unique.isSelected;
    } else {
      return parseInt(this.tf_input_max.text) >= parseInt(this.tf_input_min.text) && t.level <= parseInt(this.tf_input_max.text) && t.level >= parseInt(this.tf_input_min.text) || parseInt(this.tf_input_max.text) < parseInt(this.tf_input_min.text) && t.level <= parseInt(this.tf_input_max.text);
    }
  };
  GemFilterPanel.prototype.searchForNameString = function (e) {
    if (e.nameString.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (e.extraText.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (e.typeDescriptionText.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (e.bonusDescriptionText.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (e.setVO) {
      if (e.setVO.name.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
        return true;
      }
      if (e.setVO.getSetBonusText().toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
        return true;
      }
    }
    return false;
  };
  GemFilterPanel.prototype.checkForFavorite = function (e) {
    return !!e.isFavoriteSaved;
  };
  GemFilterPanel.prototype.checkForSetID = function (e, t) {
    if (!this._selectedLord) {
      return false;
    }
    var i = e.setID;
    var n = 0;
    var o = 0;
    for (var a in t.equipmentSlots) {
      var r = t.equipmentSlots[a];
      if (r !== undefined && r.equipmentVO) {
        n = s.int(r.equipmentVO.setID);
        o = s.int(r.equipmentVO.gemVO ? r.equipmentVO.gemVO.setID : -1);
        if (i > 0 && i == n) {
          return true;
        }
        if (i > 0 && i == o) {
          return true;
        }
      }
    }
    return false;
  };
  GemFilterPanel.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this._disp.cbx_unique:
        this.toggleCheckbox(this.cbx_unique);
        break;
      case this._disp.cbx_relic:
        this.toggleCheckbox(this.cbx_relic);
    }
  };
  GemFilterPanel.prototype.reset = function (t = false) {
    e.prototype.reset.call(this, t);
    this.cbx_unique.selected();
    this.cbx_relic.selected();
    this.resetInputTextFields();
    if (t) {
      this.changed.dispatch();
    }
  };
  return GemFilterPanel;
}(require("./1272.js").ABasicFilterPanel);
exports.GemFilterPanel = c;
var u = require("./1.js");