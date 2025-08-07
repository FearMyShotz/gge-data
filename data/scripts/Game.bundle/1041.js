Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./8.js");
var r = require("./35.js");
var l = require("./3118.js");
var c = function (e) {
  function CastleListDetailOverviewSublayer(t) {
    var i = e.call(this, t) || this;
    i.itemList = new u.SliderItemScrollList(i.subLayerDisp);
    s.ButtonHelper.initBasicButtons([i.subLayerDisp.btn_up, i.subLayerDisp.btn_down, i.subLayerDisp.mc_slider.btn_slider]);
    return i;
  }
  n.__extends(CastleListDetailOverviewSublayer, e);
  CastleListDetailOverviewSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.fillList(t[0]);
  };
  CastleListDetailOverviewSublayer.prototype.fillList = function (e) {
    var t = a.CastleModel.userData.getCastleListWithLandmarks();
    this.itemList.clear();
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this.itemList.pushContent(new l.CastleListDetailOverviewItemVO(o, this.currentFilter));
        }
      }
    }
    this.itemList.initList(e ? 0 : this.itemList.currentStartIndex);
  };
  Object.defineProperty(CastleListDetailOverviewSublayer.prototype, "currentFilter", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleListDetailOverviewSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
  };
  return CastleListDetailOverviewSublayer;
}(r.CastleDialogSubLayer);
exports.CastleListDetailOverviewSublayer = c;
var u = require("./314.js");
o.classImplementsInterfaces(c, "ICollectableRendererList", "ISublayer");