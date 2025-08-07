Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./1027.js");
var c = function (e) {
  function AutoRecruitmentCopyListItemToolsVE(t) {
    return e.call(this, t) || this;
  }
  n.__extends(AutoRecruitmentCopyListItemToolsVE, e);
  AutoRecruitmentCopyListItemToolsVE.prototype.applyNewVO = function () {
    u.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new r.TextVO(this.vo.data.CN)).autoFitToBounds = true;
    u.CastleComponent.textFieldManager.registerTextField(this.disp.txt_production, new s.LocalizedNumberVO(this.vo.data.P)).autoFitToBounds = true;
    u.CastleComponent.textFieldManager.registerTextField(this.disp.txt_tools, new s.LocalizedNumberVO(this.vo.data.T)).autoFitToBounds = true;
    u.CastleComponent.textFieldManager.registerTextField(this.disp.txt_wood, new s.LocalizedNumberVO(this.vo.data.W)).autoFitToBounds = true;
    u.CastleComponent.textFieldManager.registerTextField(this.disp.txt_stone, new s.LocalizedNumberVO(this.vo.data.S)).autoFitToBounds = true;
  };
  AutoRecruitmentCopyListItemToolsVE.prototype.getErrorToolTipTextId = function (t) {
    switch (t) {
      case a.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        return "dialog_copyQueue_disabled_producing";
      case a.ERROR.MISSING_REQUIRED_BUILDING:
        return "dialog_copyQueue_disabled_toolsUnavailable";
      default:
        return e.prototype.getErrorToolTipTextId.call(this, t);
    }
  };
  Object.defineProperty(AutoRecruitmentCopyListItemToolsVE.prototype, "eventTimeWarningTextId", {
    get: function () {
      return "dialog_copyQueue_tools_eventEnd";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AAutoRecruitmentCopyListItemVE.prototype, "eventTimeWarningTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentCopyListItemToolsVE;
}(l.AAutoRecruitmentCopyListItemVE);
exports.AutoRecruitmentCopyListItemToolsVE = c;
var u = require("./14.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");