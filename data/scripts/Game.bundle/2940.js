Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./23.js");
var l = require("./23.js");
var c = function () {
  function HospitalInventoryTooltipComponent(e) {
    this.disp = e;
    this.tooltipInfoTextfield = HospitalInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_info, new s.LocalizedTextVO(""));
    this.tooltipNameTextfield = HospitalInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_name, new s.LocalizedTextVO(""));
    this.tooltipCostTextfield = HospitalInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_cost, new a.LocalizedNumberVO(0));
    HospitalInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_status, new s.LocalizedTextVO("hospital_unitInside"));
    this.tooltipNameTextfield.autoFitToBounds = true;
    this.disp.visible = false;
    this.disp.mouseChildren = false;
    this.disp.mouseEnabled = false;
  }
  HospitalInventoryTooltipComponent.prototype.show = function (e, t) {
    var i = e;
    this.tooltipInfoTextfield.textContentVO.textId = i.getShortInfoString();
    this.tooltipNameTextfield.textContentVO.textId = i.getNameString();
    var n = 0;
    var o = 0;
    if (i.healingCostC2 > 0) {
      n = i.healingCostC2;
      o = 2;
    } else {
      n = i.healingCostC1;
      o = 1;
    }
    this.tooltipCostTextfield.textContentVO.numberValue = n;
    this.disp.cost_icon.gotoAndStop(o);
    this.disp.x = t.x;
    this.disp.visible = true;
    l.TweenMax.fromTo(this.disp, 0.2, {
      y: t.y + 60
    }, {
      y: t.y + 40,
      ease: r.Linear.easeIn
    });
    l.TweenMax.fromTo(this.disp, 0.2, {
      alpha: 0
    }, {
      alpha: 1,
      ease: r.Linear.easeIn
    });
  };
  HospitalInventoryTooltipComponent.prototype.hide = function () {
    this.disp.visible = false;
  };
  Object.defineProperty(HospitalInventoryTooltipComponent, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return HospitalInventoryTooltipComponent;
}();
exports.HospitalInventoryTooltipComponent = c;
o.classImplementsInterfaces(c, "IInventoryTooltip");