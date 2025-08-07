Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./20.js");
var l = require("./349.js");
var c = require("./8.js");
var u = require("./117.js");
var d = createjs.MouseEvent;
var p = function (e) {
  function AttackDialogDetailViewScrollItem(t, i) {
    var n = e.call(this, t) || this;
    c.ButtonHelper.initButtons([t], r.ClickFeedbackButtonHover, 1);
    n._waveKey = i;
    if (typeof n._waveKey == "number") {
      var a = (n._waveKey + 1 < 10 ? "0" : "") + (n._waveKey + 1) + ".";
      if (s.Localize.text("dialog_attack_rework2022_numberedWave_short") != "dialog_attack_rework2022_numberedWave_short") {
        a = s.Localize.text("dialog_attack_rework2022_numberedWave_short", [(n._waveKey + 1 < 10 ? "0" : "") + (n._waveKey + 1)]);
      }
      o.GoodgameTextFieldManager.getInstance().registerTextField(n.disp.txt_wave, new s.TextVO(a));
      o.GoodgameTextFieldManager.getInstance().registerTextField(n.disp.mc_selected.txt_wave, new s.TextVO(a));
    }
    n.disp.addEventListener(d.CLICK, n.bindFunction(n.onClick));
    return n;
  }
  n.__extends(AttackDialogDetailViewScrollItem, e);
  Object.defineProperty(AttackDialogDetailViewScrollItem.prototype, "waveKey", {
    get: function () {
      return this._waveKey;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogDetailViewScrollItem.prototype.onClick = function (e) {
    u.AttackDialogController.getInstance().selectedDetailView = this.waveKey;
  };
  AttackDialogDetailViewScrollItem.prototype.destroy = function () {
    this.disp.removeEventListener(d.CLICK, this.bindFunction(this.onClick));
  };
  return AttackDialogDetailViewScrollItem;
}(l.MovieClipLayoutable);
exports.AttackDialogDetailViewScrollItem = p;
a.classImplementsInterfaces(p, "ILayoutable");