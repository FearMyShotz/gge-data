Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = function () {
  function LaboratoryBonusComponent() {}
  LaboratoryBonusComponent.prototype.init = function (e, t) {
    this._landmarkVO = t;
    this._disp = e;
    for (var i = 0; i < this._disp.numChildren; i++) {
      this._disp.getChildAt(i).visible = false;
    }
    this._disp.mc_resource.visible = true;
    this._disp.mc_resource.mouseChildren = false;
    this._disp.mc_resource.resourceIcon.gotoAndStop(this._landmarkVO.kingdomID + 1);
    this._disp.mc_resource.toolTipText = {
      t: "dialog_laboratory_resourceBonus_tooltip",
      p: [this._landmarkVO.landmarkBonus]
    };
    this._itxt_bonus = n.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.mc_resource.txt_bonus, new c.LocalizedTextVO("value_percentage_add", []));
  };
  LaboratoryBonusComponent.prototype.update = function () {
    var e;
    switch (this._landmarkVO.kingdomID) {
      case a.WorldClassic.KINGDOM_ID:
        e = "dialog_laboratory_EisenerzBonus_tooltip";
        break;
      case r.WorldIce.KINGDOM_ID:
        e = "dialog_laboratory_coalBonus_tooltip";
        break;
      case s.WorldDessert.KINGDOM_ID:
        e = "dialog_laboratory_oilBonus_tooltip";
        break;
      case l.WorldVolcano.KINGDOM_ID:
        e = "dialog_laboratory_glasBonus_tooltip";
        break;
      default:
        e = "dialog_laboratory_resourceBonus_tooltip";
    }
    this._itxt_bonus.textContentVO.textReplacements = [this._landmarkVO.landmarkBonus];
    this._disp.mc_resource.toolTipText = {
      t: e,
      p: [this._landmarkVO.landmarkBonus]
    };
  };
  return LaboratoryBonusComponent;
}();
exports.LaboratoryBonusComponent = u;
o.classImplementsInterfaces(u, "IUpgradableLandmarkBonusComponent");