Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./4.js");
var l = function (e) {
  function QA_TextIDCheckerDialog() {
    var t = this;
    t._showExistingTextIDs = false;
    t._scrollByLineAmount = 10;
    CONSTRUCTOR_HACK;
    return t = e.call(this, QA_TextIDCheckerDialog.NAME) || this;
  }
  n.__extends(QA_TextIDCheckerDialog, e);
  QA_TextIDCheckerDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_show_existing, this.dialogDisp.btn_show_missing, this.dialogDisp.checkbox_short_descriptions, this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_up, this.dialogDisp.btn_down]);
    this._checkboxShowShortDescriptions = new o.CheckBoxButton(this.dialogDisp.checkbox_short_descriptions);
    this._checkboxShowShortDescriptions.deselected();
    this._showExistingTextIDs = false;
    this.createHelpTooltip();
    this.checkEffectTextIDs();
  };
  QA_TextIDCheckerDialog.prototype.checkEffectTextIDs = function () {
    this.dialogDisp.txt_output.text = "";
    var e;
    var t;
    var i = "equip_effect_description_";
    var n = 0;
    if (this._checkboxShowShortDescriptions.isSelected) {
      i = "equip_effect_description_short_";
    }
    for (var o = 1; o < 333; o++) {
      var a = r.CastleModel.effectsData.getEffectByID(o);
      e = a ? a.name : "";
      t = s.Localize.text(i + e);
      if (e != "") {
        if (this._showExistingTextIDs || i + e != t) {
          if (this._showExistingTextIDs && i + e != t) {
            this.dialogDisp.txt_title.text = "show existing textIDs with translation";
            n++;
            this.dialogDisp.txt_output.text += "\n--------------------\n(" + n + ") textID: " + (i + e) + ":\nlocalized text: " + t;
          }
        } else {
          this.dialogDisp.txt_title.text = "show missing textIDs";
          n++;
          this.dialogDisp.txt_output.text += "\n--------------------\n(" + n + ") textID: " + (i + e);
        }
      }
    }
  };
  QA_TextIDCheckerDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_show_existing:
        this._showExistingTextIDs = true;
        this.checkEffectTextIDs();
        break;
      case this.dialogDisp.btn_show_missing:
        this._showExistingTextIDs = false;
        this.checkEffectTextIDs();
        break;
      case this._checkboxShowShortDescriptions.disp:
        if (this._checkboxShowShortDescriptions.isSelected) {
          this._checkboxShowShortDescriptions.deselected();
        } else {
          this._checkboxShowShortDescriptions.selected();
        }
        this.checkEffectTextIDs();
        break;
      case this.dialogDisp.btn_up:
        this.scrollText(-this._scrollByLineAmount);
        break;
      case this.dialogDisp.btn_down:
        this.scrollText(this._scrollByLineAmount);
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  QA_TextIDCheckerDialog.prototype.scrollText = function (e) {
    this.dialogDisp.txt_output.scrollV += e;
  };
  QA_TextIDCheckerDialog.prototype.createHelpTooltip = function () {
    var e = "HELP!";
    e += "\nThis dialog shows:";
    e += "\n- existing textIDs for the hero-effects and the localized textIDs";
    e += "\nor";
    e += "\n- missing textIDs";
    e += "\n\nchoose the short or the long version of effect descriptions by toggling the checkbox";
    this.dialogDisp.btn_help.toolTipText = e;
  };
  QA_TextIDCheckerDialog.NAME = "QA_TextIDCheckerDialog";
  return QA_TextIDCheckerDialog;
}(require("./11.js").CastleExternalDialog);
exports.QA_TextIDCheckerDialog = l;
a.classImplementsInterfaces(l, "ICollectableRendererList");