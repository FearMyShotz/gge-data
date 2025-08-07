Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function () {
  function MonumentBonusComponent() {}
  MonumentBonusComponent.prototype.init = function (e, t) {
    this._disp = e;
    for (var i = 0; i < this._disp.numChildren; i++) {
      this._disp.getChildAt(i).visible = false;
    }
    this._disp.mc_honor.visible = true;
    this._disp.mc_honor.mouseChildren = false;
    this._disp.mc_honor.toolTipText = "dialog_monument_fameMonuments_tooltip";
    this._landmarkVO = t;
    this._itxt_bonus = n.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.mc_honor.txt_honor, new a.LocalizedTextVO("value_percentage_add", []));
  };
  MonumentBonusComponent.prototype.update = function () {
    this._itxt_bonus.textContentVO.textReplacements = [this._landmarkVO.landmarkBonus];
  };
  return MonumentBonusComponent;
}();
exports.MonumentBonusComponent = s;
o.classImplementsInterfaces(s, "IUpgradableLandmarkBonusComponent");