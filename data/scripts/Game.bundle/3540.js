Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1665.js");
var s = require("./2.js");
var r = function (e) {
  function RewardHubMainDialogEvents(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(RewardHubMainDialogEvents, e);
  RewardHubMainDialogEvents.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.subLayerDisp.mc_events.visible = true;
    this.subLayerDisp.mc_season.visible = false;
  };
  RewardHubMainDialogEvents.prototype.dataList = function () {
    var e = [];
    for (var t = 0; t < 50; t++) {
      var i = {
        mainEventID: s.MathBase.random(1, 150, true),
        subEventID: s.MathBase.random(1, 150, true),
        points: 3
      };
      e.push(i);
    }
    this.updateTabButton(e.length);
    return e;
  };
  RewardHubMainDialogEvents.prototype.updateTabButton = function (e) {
    this.parent.setEventAmount(e);
  };
  RewardHubMainDialogEvents.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.mc_events.btn_triggerAll:
      case this.subLayerDisp.mc_events.btn_deleteAll:
    }
  };
  return RewardHubMainDialogEvents;
}(a.ARewardHubDialogSublayer);
exports.RewardHubMainDialogEvents = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "ISublayer");