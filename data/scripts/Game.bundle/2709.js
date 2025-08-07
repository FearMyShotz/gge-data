Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleConstructionItemsBlueprintsSublayer(t) {
    var i = e.call(this, t) || this;
    i.textFieldManager.registerTextField(t.txt_title, new a.LocalizedTextVO("hallo"));
    return i;
  }
  n.__extends(CastleConstructionItemsBlueprintsSublayer, e);
  return CastleConstructionItemsBlueprintsSublayer;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleConstructionItemsBlueprintsSublayer = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "ISublayer");