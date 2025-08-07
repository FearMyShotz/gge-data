Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = require("./31.js");
var s = require("./19.js");
var r = createjs.Point;
var l = function () {
  function EventOverviewDetailedEventView() {
    this._renderList = [];
  }
  EventOverviewDetailedEventView.prototype.init = function () {
    this.dispClass = o.getDefinitionByName(this.dispClassName);
    this._disp = new this.dispClass();
  };
  EventOverviewDetailedEventView.prototype.updateRewards = function (e, t) {};
  EventOverviewDetailedEventView.prototype.fillList = function (e, t) {
    var i;
    var n;
    var o;
    var l;
    var u;
    var d;
    var p = new r();
    i = e.length;
    (n = this._disp.getChildByName("reward" + t)).tags_1.visible = i == 1;
    n.tags_2.visible = i == 2;
    o = n["tags_" + i];
    for (var h = 0; h < i; h++) {
      (l = o["item_" + h]).icon_size.alpha = 0;
      p.x = l.icon_size.width;
      p.y = l.icon_size.height;
      (u = new a.CollectableRenderClips(l.mc_item)).addIconMc(l.mc_item.icon_container);
      u.addInfoBtn(l.btn_info);
      u.addTextfield(l.txt_text);
      d = e.getItemByIndex(h);
      c.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, u, d, new s.CollectableRenderOptions(s.CollectableRenderOptions.SET_ADVANCED, p));
    }
  };
  Object.defineProperty(EventOverviewDetailedEventView.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  EventOverviewDetailedEventView.prototype.destroyCollectableRenderList = function () {};
  Object.defineProperty(EventOverviewDetailedEventView.prototype, "collectableRenderList", {
    get: function () {
      return this._renderList;
    },
    enumerable: true,
    configurable: true
  });
  return EventOverviewDetailedEventView;
}();
exports.EventOverviewDetailedEventView = l;
var c = require("./25.js");
n.classImplementsInterfaces(l, "ICollectableRendererList");