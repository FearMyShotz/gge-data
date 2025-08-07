Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientConstFusion() {}
  ClientConstFusion.getAvailableLevelUps = function (e, t) {
    return Math.floor(-1.5 + Math.sqrt(9 / 4 + Math.pow(e, 2) + e - 2 + t * 0.2) + 1) - e;
  };
  ClientConstFusion.setCatalystTextfield = function (e, t) {
    var i = o.GoodgameTextFieldManager.getInstance().registerTextField(e, new s.LocalizedTextVO("value_multiplied", [t.amount]));
    e.textColor = t.amount > 0 ? r.ClientConstColor.FONT_DEFAULT_COLOR : r.ClientConstColor.MODERN_RED;
    return i;
  };
  ClientConstFusion.alignAddTextField = function (e, t) {
    var i = e;
    var n = t;
    if (i && n) {
      i.autoSize = a.TextFieldAutoSize.LEFT;
      n.autoSize = a.TextFieldAutoSize.LEFT;
      n.x = i.x + i.width + ClientConstFusion.ADD_TEXTFIELD_SPACE_X;
    }
  };
  ClientConstFusion.getSequenceCostIterationIndex = function (e, t) {
    var i = t % e;
    if (i == 0) {
      i = e;
    }
    return i;
  };
  ClientConstFusion.__initialize_static_members = function () {
    ClientConstFusion.FULL_ENERGY_PERCENTAGE = 100;
    ClientConstFusion.MAX_ENERGY_PERCENTAGE = 200;
    ClientConstFusion.POPOVER_ASSET_NAME_ACTION = "DecorationForgeActionPopover";
    ClientConstFusion.POPOVER_ASSET_NAME_COMPLETE = "DecorationForgeFusionCompletePopover";
    ClientConstFusion.CATALYST_CONVERSION_DIRECTION_ASSEMBLE = 0;
    ClientConstFusion.CATALYST_CONVERSION_DIRECTION_DISASSEMBLE = 1;
    ClientConstFusion.ADD_TEXTFIELD_SPACE_X = 5;
    ClientConstFusion.ACTION_POPOVER_FRAME_CUSTOM = 1;
    ClientConstFusion.ACTION_POPOVER_FRAME_LEVEL = 2;
    ClientConstFusion.ACTION_POPOVER_FRAME_DUST = 3;
    ClientConstFusion.ACTION_POPOVER_FRAME_ENERGY = 4;
    ClientConstFusion.FULL_ENERGY_PERCENTAGE_FACTOR = ClientConstFusion.FULL_ENERGY_PERCENTAGE / 100;
    ClientConstFusion.MAX_ENERGY_PERCENTAGE_FACTOR = ClientConstFusion.MAX_ENERGY_PERCENTAGE / 100;
  };
  return ClientConstFusion;
}();
exports.ClientConstFusion = n;
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./16.js");
n.__initialize_static_members();