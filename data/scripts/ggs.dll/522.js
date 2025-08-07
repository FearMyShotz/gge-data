Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./60.js");
var a = function () {
  function AdvancedDottedProgressBar(e, t, n) {
    this.disp = e;
    this.instanceName = t;
    this.toolTipText = n;
    this.initBar();
  }
  AdvancedDottedProgressBar.prototype.initBar = function () {
    var e = 0;
    var t = false;
    for (this.dotList = []; !t;) {
      if (e > 500) {
        t = true;
      }
      if (this.disp[this.instanceName + e]) {
        this.dotList.push(this.disp[this.instanceName + e]);
        this.disp[this.instanceName + e].toolTipText = this.toolTipText;
      } else {
        t = true;
      }
      e++;
    }
  };
  AdvancedDottedProgressBar.prototype.setLoadingBarPercent = function (e, t = "") {
    for (var n = i.int(this.dotList.length), a = 0; a < n; a++) {
      this.dotList[a].visible = Number((a + 1) / n) <= e;
      if (t != "") {
        this.dotList[a].toolTipText = t;
      }
    }
  };
  return AdvancedDottedProgressBar;
}();
exports.AdvancedDottedProgressBar = a;