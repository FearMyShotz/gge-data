Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./1575.js");
var r = function (e) {
  function AutoRecruitmentCopyToolsDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, AutoRecruitmentCopyToolsDialog.NAME) || this;
  }
  n.__extends(AutoRecruitmentCopyToolsDialog, e);
  AutoRecruitmentCopyToolsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_title.txt_value, new a.LocalizedTextVO("dialog_copyQueue_tools_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new a.LocalizedTextVO("dialog_copyQueue_tools_desc")).autoFitToBounds = true;
    this.dialogDisp.mc_list.icon_production.toolTipText = "productionspeed";
    this.dialogDisp.mc_list.icon_toolAmount.toolTipText = "dialog_recuit_toolsavailable";
    this.dialogDisp.mc_list.icon_wood.toolTipText = "wood";
    this.dialogDisp.mc_list.icon_stone.toolTipText = "stone";
  };
  Object.defineProperty(AutoRecruitmentCopyToolsDialog.prototype, "listItemClass", {
    get: function () {
      return c.AutoRecruitmentCopyListItemToolsVE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAutoRecruitmentCopyDialog.prototype, "listItemClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyToolsDialog.prototype, "recruitmentAmountToolTip", {
    get: function () {
      return "dialog_copyQueue_tools_total_tooltip";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAutoRecruitmentCopyDialog.prototype, "recruitmentAmountToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyToolsDialog.prototype, "overviewTabTextID", {
    get: function () {
      return "dialog_copyQueue_tools_overview_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAutoRecruitmentCopyDialog.prototype, "overviewTabTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyToolsDialog.prototype, "costTabTextID", {
    get: function () {
      return "dialog_copyQueue_tools_cost_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAutoRecruitmentCopyDialog.prototype, "costTabTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCopyToolsDialog.prototype.onHelpButton = function () {
    l.CastleDialogHandler.getInstance().showHelper("", "help_copyQueue_tools");
  };
  Object.defineProperty(AutoRecruitmentCopyToolsDialog.prototype, "alertOnCloseTextID", {
    get: function () {
      return "dialog_copyQueue_tools_queueEmpty";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAutoRecruitmentCopyDialog.prototype, "alertOnCloseTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCopyToolsDialog.__initialize_static_members = function () {
    AutoRecruitmentCopyToolsDialog.NAME = "AutoRecruitmentCopyTools";
  };
  return AutoRecruitmentCopyToolsDialog;
}(s.AAutoRecruitmentCopyDialog);
exports.AutoRecruitmentCopyToolsDialog = r;
var l = require("./9.js");
var c = require("./2960.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();