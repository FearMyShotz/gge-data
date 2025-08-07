Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./1575.js");
var r = function (e) {
  function AutoRecruitmentCopyUnitsDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, AutoRecruitmentCopyUnitsDialog.NAME) || this;
  }
  n.__extends(AutoRecruitmentCopyUnitsDialog, e);
  AutoRecruitmentCopyUnitsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_title.txt_value, new a.LocalizedTextVO("dialog_copyQueue_units_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new a.LocalizedTextVO("dialog_copyQueue_units_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_resource0.txt_title, new a.LocalizedTextVO("costs")).autoFitToBounds = true;
    this.dialogDisp.mc_list.icon_food.toolTipText = "food";
    this.dialogDisp.mc_list.icon_foodProduction.toolTipText = "foodproduction";
    this.dialogDisp.mc_list.icon_foodCycle.toolTipText = "dialog_copyQueue_foodProductionFinal";
    this.dialogDisp.mc_list.icon_time.toolTipText = "dialog_copyQueue_recruitTime";
    this.dialogDisp.mc_list.icon_timeStarve.toolTipText = "dialog_copyQueue_starvationFinal";
    this.dialogDisp.mc_list.icon_units.toolTipText = "allUnits";
  };
  Object.defineProperty(AutoRecruitmentCopyUnitsDialog.prototype, "listItemClass", {
    get: function () {
      return c.AutoRecruitmentCopyListItemUnitsVE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAutoRecruitmentCopyDialog.prototype, "listItemClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyUnitsDialog.prototype, "recruitmentAmountToolTip", {
    get: function () {
      return "dialog_copyQueue_units_total_tooltip";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAutoRecruitmentCopyDialog.prototype, "recruitmentAmountToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyUnitsDialog.prototype, "overviewTabTextID", {
    get: function () {
      return "dialog_copyQueue_units_overview_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAutoRecruitmentCopyDialog.prototype, "overviewTabTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyUnitsDialog.prototype, "costTabTextID", {
    get: function () {
      return "dialog_copyQueue_units_cost_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAutoRecruitmentCopyDialog.prototype, "costTabTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCopyUnitsDialog.prototype.onHelpButton = function () {
    l.CastleDialogHandler.getInstance().showHelper("", "help_copyQueue_units");
  };
  Object.defineProperty(AutoRecruitmentCopyUnitsDialog.prototype, "alertOnCloseTextID", {
    get: function () {
      return "dialog_copyQueue_units_queueEmpty";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AAutoRecruitmentCopyDialog.prototype, "alertOnCloseTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCopyUnitsDialog.__initialize_static_members = function () {
    AutoRecruitmentCopyUnitsDialog.NAME = "AutoRecruitmentCopyUnits";
  };
  return AutoRecruitmentCopyUnitsDialog;
}(s.AAutoRecruitmentCopyDialog);
exports.AutoRecruitmentCopyUnitsDialog = r;
var l = require("./9.js");
var c = require("./2962.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();