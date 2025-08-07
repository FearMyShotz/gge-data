Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./81.js");
var s = require("./8.js");
var r = require("./20.js");
var l = require("./14.js");
var c = require("./2.js");
var u = function (e) {
  function AllianceLanguageSelectionItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AllianceLanguageSelectionItem, e);
  AllianceLanguageSelectionItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    s.ButtonHelper.initButtons([this.getItemMc()], r.ClickFeedbackButtonHover, 1);
    this._itxt_default = l.CastleComponent.textFieldManager.registerTextField(this.getItemMc().mc_default.txt_name, new o.TextVO(""));
    this._itxt_selected = l.CastleComponent.textFieldManager.registerTextField(this.getItemMc().mc_selected.txt_name, new o.TextVO(""));
  };
  AllianceLanguageSelectionItem.prototype.fill = function () {
    this._itxt_default.textAlign = this.vo.languageCode == "ar" ? c.GGSTextAlign.RIGHT : c.GGSTextAlign.LEFT;
    this._itxt_selected.textAlign = this.vo.languageCode == "ar" ? c.GGSTextAlign.RIGHT : c.GGSTextAlign.LEFT;
    this._itxt_default.textContentVO.stringValue = this.vo.localizedLanguage;
    this._itxt_selected.textContentVO.stringValue = this.vo.localizedLanguage;
    this.getItemMc().mc_selected.visible = this.vo.languageCode == this.vo.parentDialog.selectedLanguageCode;
  };
  AllianceLanguageSelectionItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (!this.getItemMc().mc_selected.visible) {
      this.vo.parentDialog.selectedLanguageCode = this.vo.languageCode;
    }
  };
  Object.defineProperty(AllianceLanguageSelectionItem.prototype, "vo", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceLanguageSelectionItem;
}(a.AInfiniteScrollListItem);
exports.AllianceLanguageSelectionItem = u;