Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./13.js");
var u = require("./4.js");
var d = require("./52.js");
var p = require("./217.js");
var h = function (e) {
  function DecorationForgeCatalystConversionDialogInfoBoxDisassemble(t) {
    return e.call(this, t) || this;
  }
  n.__extends(DecorationForgeCatalystConversionDialogInfoBoxDisassemble, e);
  DecorationForgeCatalystConversionDialogInfoBoxDisassemble.prototype.init = function () {
    e.prototype.init.call(this);
    g.CastleComponent.textFieldManager.registerTextField(this.disp.txt_title, new r.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("fusionDisassemble"))).autoFitToBounds = true;
    g.CastleComponent.textFieldManager.registerTextField(this.disp.mc_buttons.btn_execute.txt_text, new s.LocalizedTextVO("fusionDisassemble")).autoFitToBounds = true;
  };
  DecorationForgeCatalystConversionDialogInfoBoxDisassemble.prototype.updateValues = function () {
    e.prototype.updateValues.call(this);
    var t = l.int(this.catalystVO.amount);
    var i = l.int(this.getSelectedAmount());
    if (i <= 0) {
      i = 1;
    }
    var n = l.int(u.CastleModel.fusionForgeData.getForge(a.FusionConst.DECORATION_FORGE_ID).currentEnergy);
    var o = l.int(u.CastleModel.fusionForgeData.xml.getFusionSystem(a.FusionConst.DECORATION_FORGE_ID).disassembleCatalystEnergyCost) * i;
    var s = l.int(u.CastleModel.currencyData.getAmountById(d.ClientConstCurrency.ID_DECO_DUST));
    var r = l.int(u.CastleModel.fusionForgeData.xml.getCatalystInfo(a.FusionConst.DECORATION_FORGE_ID, this.catalystVO.id).addDecoDust) * i;
    this.fillValue(this.getValueMc(0), 1, t - i, -i);
    this.fillValue(this.getValueMc(1), 2, n - o, -o);
    this.fillValue(this.getValueMc(2), 3, s + r, r);
  };
  DecorationForgeCatalystConversionDialogInfoBoxDisassemble.prototype.getMaxSelectableValue = function () {
    return l.int(this.catalystVO.amount);
  };
  DecorationForgeCatalystConversionDialogInfoBoxDisassemble.prototype.getAffordableEnergy = function () {
    return l.int(u.CastleModel.fusionForgeData.xml.getFusionSystem(a.FusionConst.DECORATION_FORGE_ID).disassembleCatalystEnergyCost * this.getSelectedAmount());
  };
  DecorationForgeCatalystConversionDialogInfoBoxDisassemble.prototype.getConversionDirection = function () {
    return l.int(p.ClientConstFusion.CATALYST_CONVERSION_DIRECTION_DISASSEMBLE);
  };
  return DecorationForgeCatalystConversionDialogInfoBoxDisassemble;
}(require("./1447.js").ADecorationForgeCatalystConversionDialogInfoBox);
exports.DecorationForgeCatalystConversionDialogInfoBoxDisassemble = h;
var g = require("./14.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");