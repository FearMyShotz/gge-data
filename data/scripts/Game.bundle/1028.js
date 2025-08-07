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
  function CastleInventoryTooltipComponent(e) {
    this.disp = e;
    this.i_iselect_txt_name = CastleInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_name, new a.LocalizedTextVO(""));
    this.i_iselect_txt_info = CastleInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_info, new a.LocalizedTextVO(""));
    this.i_iselect_txt_status = CastleInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_status, new a.LocalizedTextVO(""));
    this.i_uTooltip_txt_food = CastleInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_food, new s.TextVO(""));
    this.disp.visible = false;
    this.disp.mouseChildren = false;
    this.disp.mouseEnabled = false;
  }
  CastleInventoryTooltipComponent.prototype.show = function (e, t) {
    this.i_iselect_txt_name.textContentVO.textId = e.getNameString();
    this.i_iselect_txt_info.textContentVO.textId = e.getShortInfoString();
    this.i_iselect_txt_name.autoFitToBounds = true;
    if (e.isAuxiliary) {
      this.i_iselect_txt_status.textContentVO.textId = "auxiliaries";
    } else if (e.isStronghold) {
      this.i_iselect_txt_status.textContentVO.textId = "stronghold_UnitInside";
    } else {
      this.i_iselect_txt_status.textContentVO.textId = "";
    }
    if (e.foodSupply > 0 || e.meadSupply > 0 || e.beefSupply > 0) {
      this.i_uTooltip_txt_food.textContentVO.stringValue = String(Math.max(e.meadSupply, e.foodSupply, e.beefSupply));
      this.disp.mc_mead.visible = e.meadSupply > 0;
      this.disp.mc_food.visible = e.foodSupply > 0;
      this.disp.mc_beef.visible = e.beefSupply > 0;
    } else {
      this.disp.mc_mead.visible = false;
      this.disp.mc_beef.visible = false;
      this.disp.mc_food.visible = true;
      this.i_uTooltip_txt_food.textContentVO.stringValue = "-";
    }
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
  CastleInventoryTooltipComponent.prototype.hide = function () {
    this.disp.visible = false;
  };
  Object.defineProperty(CastleInventoryTooltipComponent, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleInventoryTooltipComponent;
}();
exports.CastleInventoryTooltipComponent = c;
o.classImplementsInterfaces(c, "IInventoryTooltip");