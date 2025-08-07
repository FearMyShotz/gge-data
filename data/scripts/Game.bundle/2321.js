Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CommanderScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CommanderScrollItem, e);
  CommanderScrollItem.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    this.setToolTipText(this.lordScrollItemVO.lordVO.name);
  };
  return CommanderScrollItem;
}(require("./1308.js").LordScrollItem);
exports.CommanderScrollItem = a;
o.classImplementsInterfaces(a, "MovieClip");