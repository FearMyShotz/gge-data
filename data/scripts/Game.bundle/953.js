Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ACastleAllianceDialogTreasurySublayer(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(ACastleAllianceDialogTreasurySublayer, e);
  ACastleAllianceDialogTreasurySublayer.prototype.init = function () {};
  ACastleAllianceDialogTreasurySublayer.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.disp.visible = true;
    this.update();
  };
  ACastleAllianceDialogTreasurySublayer.prototype.onHide = function () {
    this.disp.visible = false;
    e.prototype.onHide.call(this);
  };
  ACastleAllianceDialogTreasurySublayer.prototype.update = function () {};
  return ACastleAllianceDialogTreasurySublayer;
}(require("./40.js").CastleItemRenderer);
exports.ACastleAllianceDialogTreasurySublayer = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");