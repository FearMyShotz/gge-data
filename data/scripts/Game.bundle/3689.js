Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = function (e) {
  function CastleKingdomChooseLocalizationDialog() {
    var t = this;
    t._currentLocationID = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleKingdomChooseLocalizationDialog.NAME) || this;
  }
  n.__extends(CastleKingdomChooseLocalizationDialog, e);
  CastleKingdomChooseLocalizationDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.cbx_Random, this.dialogDisp.cbx_North, this.dialogDisp.cbx_West, this.dialogDisp.cbx_East, this.dialogDisp.cbx_South]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_initial_East, new l.LocalizedTextVO("kingdom_direction_initial_east")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_initial_West, new l.LocalizedTextVO("kingdom_direction_initial_west")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_initial_South, new l.LocalizedTextVO("kingdom_direction_initial_south")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_initial_North, new l.LocalizedTextVO("kingdom_direction_initial_north")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_kingdom_direction_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_kingdom_direction_copy"));
    this.dialogDisp.cbx_Random.toolTipText = "kingdom_direction_random";
    this.dialogDisp.cbx_East.toolTipText = "kingdom_direction_east";
    this.dialogDisp.cbx_North.toolTipText = "kingdom_direction_north";
    this.dialogDisp.cbx_South.toolTipText = "kingdom_direction_south";
    this.dialogDisp.cbx_West.toolTipText = "kingdom_direction_west";
    this.resetAllCheckboxButtons();
    this.selectCheckboxButton(this.dialogDisp.cbx_Random);
  };
  CastleKingdomChooseLocalizationDialog.prototype.onClick = function (e) {
    if (CastleKingdomChooseLocalizationDialog.isCheckboxButton(e.target)) {
      if (e.target.currentFrame == 0) {
        this.selectCheckboxButton(e.target);
      } else {
        this.selectCheckboxButton();
      }
    }
    switch (e.target) {
      case this.dialogDisp.btn_ok:
        this.onClickOK();
    }
  };
  CastleKingdomChooseLocalizationDialog.prototype.onClickOK = function () {
    if (this._currentLocationID != -1) {
      this.hide();
      this.dialogProperties.onDirectionSelected(this._currentLocationID);
    } else {
      u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("dialog_kingdom_direction_nothingSelectet")));
    }
  };
  CastleKingdomChooseLocalizationDialog.prototype.selectCheckboxButton = function (e = null) {
    this.resetAllCheckboxButtons();
    switch (e ? e.name.substr(CastleKingdomChooseLocalizationDialog.CHECKBOX_PREFIX.length) : "") {
      case "North":
        this._currentLocationID = 1;
        break;
      case "West":
        this._currentLocationID = 2;
        break;
      case "East":
        this._currentLocationID = 3;
        break;
      case "South":
        this._currentLocationID = 4;
        break;
      case "Random":
        this._currentLocationID = 0;
        break;
      default:
        this._currentLocationID = -1;
    }
    if (e) {
      e.gotoAndStop(2);
    }
  };
  CastleKingdomChooseLocalizationDialog.prototype.resetAllCheckboxButtons = function () {
    for (var e = 0; e < this.dialogDisp.numChildren; e++) {
      if (s.instanceOfClass(this.dialogDisp.getChildAt(e), "MovieClip") && CastleKingdomChooseLocalizationDialog.isCheckboxButton(this.dialogDisp.getChildAt(e))) {
        this.dialogDisp.getChildAt(e).gotoAndStop(1);
      }
    }
  };
  CastleKingdomChooseLocalizationDialog.isCheckboxButton = function (e) {
    return !!e && e.name !== undefined && e.name !== null && e.name.indexOf(CastleKingdomChooseLocalizationDialog.CHECKBOX_PREFIX) >= 0;
  };
  Object.defineProperty(CastleKingdomChooseLocalizationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomChooseLocalizationDialog.__initialize_static_members = function () {
    CastleKingdomChooseLocalizationDialog.NAME = "CastleKingdomChooseLocalEx";
    CastleKingdomChooseLocalizationDialog.CHECKBOX_PREFIX = "cbx_";
  };
  return CastleKingdomChooseLocalizationDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleKingdomChooseLocalizationDialog = c;
var u = require("./9.js");
var d = require("./38.js");
a.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();