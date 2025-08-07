Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./31.js");
var c = require("./104.js");
var u = require("./19.js");
var d = require("./8.js");
var p = createjs.Point;
var h = function (e) {
  function ConstructionItemScrollItem(t) {
    var i = e.call(this, t) || this;
    i.renderList = new c.CollectableRendererList();
    d.ButtonHelper.initBasicButton(t);
    return i;
  }
  n.__extends(ConstructionItemScrollItem, e);
  ConstructionItemScrollItem.prototype.customFillItem = function () {
    g.CollectableRenderHelper.displaySingleItemComplete(this.renderList, new l.CollectableRenderClips(this.disp), this.constructionItemScrollItemVO.collectableItem, new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_ICON, new p(51, 51)));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_count, new r.LocalizedTextVO("xamount", [this.constructionItemScrollItemVO.collectableItem.amount]));
  };
  ConstructionItemScrollItem.prototype.remove = function () {
    e.prototype.remove.call(this);
    this.renderList.destroyCollectableRenderList();
  };
  Object.defineProperty(ConstructionItemScrollItem.prototype, "constructionItemScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemScrollItem;
}(a.ScrollItem);
exports.ConstructionItemScrollItem = h;
var g = require("./25.js");
s.classImplementsInterfaces(h, "MovieClip");