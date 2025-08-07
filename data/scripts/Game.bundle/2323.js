Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./4.js");
var c = require("./8.js");
var u = function (e) {
  function AutoSellDialog() {
    return e.call(this, AutoSellDialog.NAME) || this;
  }
  n.__extends(AutoSellDialog, e);
  AutoSellDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    c.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_save], g.ClickFeedbackButton);
    c.ButtonHelper.initBasicButton(this.dialogDisp.btn_tab_equipments, 1.025);
    c.ButtonHelper.initBasicButton(this.dialogDisp.btn_tab_gems, 1.025);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_autoSellSettings_title")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO("dialog_autoSellSettings_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_save.txt_text, new s.LocalizedTextVO("save")).autoFitToBounds = true;
    this._tfTabBtnEquipment = this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_equipments.txt_text, new s.LocalizedTextVO("equipment"));
    this._tfTabBtnEquipment.autoFitToBounds = true;
    this._tfTabBtnGems = this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_gems.txt_text, new s.LocalizedTextVO("gems"));
    this._tfTabBtnGems.autoFitToBounds = true;
    this._subLayer = new Map();
    this._subLayer.set(AutoSellDialog.TAB_EQUIPMENTS, new p.AutoSellDialogEquipments(this.dialogDisp.tab_equipments));
    this._subLayer.set(AutoSellDialog.TAB_GEMS, new h.AutoSellDialogGems(this.dialogDisp.tab_gems));
  };
  AutoSellDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.cloneAutoSellVOFromModel();
    this.changeCategory(AutoSellDialog.TAB_EQUIPMENTS);
  };
  AutoSellDialog.prototype.hide = function () {
    e.prototype.hide.call(this);
  };
  AutoSellDialog.prototype.changeCategory = function (t) {
    function updateButton(e, t, i) {
      e.mc_background.gotoAndStop(i ? 2 : 1);
      t.color = i ? AutoSellDialog.TAB_BTN_COLOR_SELECTED : AutoSellDialog.TAB_BTN_COLOR_DEFAULT;
    }
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(t), []);
      updateButton(this.dialogDisp.btn_tab_equipments, this._tfTabBtnEquipment, this._currentCategory == AutoSellDialog.TAB_EQUIPMENTS);
      updateButton(this.dialogDisp.btn_tab_gems, this._tfTabBtnGems, this._currentCategory == AutoSellDialog.TAB_GEMS);
    }
  };
  AutoSellDialog.prototype.cloneAutoSellVOFromModel = function () {
    this._autoSellVO = l.CastleModel.subscriptionData.autoSell.clone();
    if (this._subLayer != null) {
      for (var e = 0, t = Array.from(this._subLayer.values()); e < t.length; e++) {
        t[e].autoSellVO = this._autoSellVO;
      }
    }
  };
  AutoSellDialog.prototype.onClick = function (t) {
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_equipments:
          this.changeCategory(AutoSellDialog.TAB_EQUIPMENTS);
          break;
        case this.dialogDisp.btn_tab_gems:
          this.changeCategory(AutoSellDialog.TAB_GEMS);
          break;
        case this.dialogDisp.btn_help:
          d.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text("dialog_autoSellSettings_help"));
          break;
        case this.dialogDisp.btn_save:
          this.onSaveButtonClicked();
      }
    }
  };
  AutoSellDialog.prototype.onSaveButtonClicked = function () {
    l.CastleModel.subscriptionData.autoSell.applyNewConfig(this._autoSellVO);
    l.CastleModel.subscriptionData.autoSell.sendConfigToServer();
    this.hide();
  };
  AutoSellDialog.__initialize_static_members = function () {
    AutoSellDialog.TAB_BTN_COLOR_DEFAULT = r.ClientConstColor.MODERN_DEFAULT_BRIGHT;
  };
  AutoSellDialog.NAME = "AutoSell";
  AutoSellDialog.TAB_BTN_COLOR_SELECTED = 15921906;
  AutoSellDialog.TAB_EQUIPMENTS = "tab_equipments";
  AutoSellDialog.TAB_GEMS = "tab_gems";
  return AutoSellDialog;
}(require("./112.js").CastleExternalSubLayerDialog);
exports.AutoSellDialog = u;
var d = require("./11.js");
var p = require("./2324.js");
var h = require("./2328.js");
var g = require("./36.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();