Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./18.js");
var l = require("./4.js");
var c = function (e) {
  function TutorialBuildToolsCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialBuildToolsCommand, e);
  TutorialBuildToolsCommand.prototype.getButtonClass = function () {
    return h.BuildToolsPanelButton;
  };
  TutorialBuildToolsCommand.prototype.waitForDialog = function () {
    var e = this.layoutManager.getDialog(u.CastleRecruitDialog);
    e.changeCategoryWithParams(r.ClientConstCastle.UNIT_CATEGORY_TOOLS, [r.ClientConstCastle.UNIT_CATEGORY_TOOLS, null]);
    var t = e.subLayer.get(r.ClientConstCastle.UNIT_CATEGORY_TOOLS);
    if (a.instanceOfClass(t, "CastleRecruitDialogUnits")) {
      var i = s.int(this._tutorialStepVO.attributes.get(p.TutorialBasicActionCommand.WODID));
      var n = l.CastleModel.wodData.getUnitVOByWodId(i);
      var o = d.CastleRecruitDialogUnits.FILTER_TOOLS_ATTACK;
      if (n.isDefensive) {
        o = d.CastleRecruitDialogUnits.FILTER_TOOLS_DEFENCE;
      }
      t.changeCurrentFilter(o, -1, true);
    }
    this.waitForSelectUnit();
  };
  return TutorialBuildToolsCommand;
}(require("./1971.js").TutorialAbstractMilitaryCommand);
exports.TutorialBuildToolsCommand = c;
var u = require("./224.js");
var d = require("./643.js");
var p = require("./252.js");
var h = require("./1854.js");
o.classImplementsInterfaces(c, "ISimpleCommand");