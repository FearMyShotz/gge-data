Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = function (e) {
  function HelpScrollItem(t) {
    var i = e.call(this, t) || this;
    t.actLikeButton = true;
    i.itxtField = i.textFieldManager.registerTextField(i._disp.txt_value, new r.TextVO(""));
    return i;
  }
  n.__extends(HelpScrollItem, e);
  HelpScrollItem.prototype.onActiveStateChange = function () {
    if (this.isActive) {
      this._disp.mc_bg.gotoAndStop(2);
    } else {
      this._disp.mc_bg.gotoAndStop(1);
    }
  };
  HelpScrollItem.prototype.customFillItem = function () {
    this.itxtField.textContentVO.stringValue = this.scrollItemVO.itemText;
  };
  Object.defineProperty(HelpScrollItem.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return HelpScrollItem;
}(a.ScrollItem);
exports.HelpScrollItem = l;
s.classImplementsInterfaces(l, "MovieClip");